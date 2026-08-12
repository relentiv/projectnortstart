import { T as TERMINAL_STATUSES } from "./candidate-CM1ucsTB.mjs";
import { MOCK_TENANT_ID, getPipelineById, getSubmissionsForPipeline, uuid, saveLocalSubmission, clearDraft, getCandidateById, validateMagicToken, createPortalSession, markTokenUsed, saveLocalPipeline, getTokenForPipeline, createMagicToken, getLocalPipelines, saveLocalCandidate, getLocalCandidates, getLocalAuditLog, deleteLocalRejectionReason, getLocalRejectionReasons, saveLocalRejectionReason, seedDefaultRejectionReasons, getLocalScore, saveLocalScore, getLocalScores, removeLocalReviewer, getLocalReviewers, assignLocalReviewer, deleteLocalComment, updateLocalComment, saveLocalComment, getLocalComments, deleteLocalDocument, saveLocalDocument, getLocalDocuments, shortId, appendAuditEntry } from "./localStorage-DOek0dff.mjs";
import { d as delay, G as fail, o as ok } from "./router-Arl77cRa.mjs";
const iso = () => (/* @__PURE__ */ new Date()).toISOString();
function event(label, actor) {
  return { id: shortId(8), at: iso(), label, actor };
}
function touch(p, label, actor, patch = {}) {
  const next = {
    ...p,
    ...patch,
    lastActivityAt: iso(),
    events: [...p.events, event(label, actor)]
  };
  saveLocalPipeline(next);
  return next;
}
function auditPipeline(pipelineId, action, details, actorName, actorType) {
  void import("./localStorage-DOek0dff.mjs").then(
    ({ appendAuditEntry: appendAuditEntry2 }) => appendAuditEntry2({
      pipelineId,
      actorId: actorType === "hr" ? "hr_admin" : actorType,
      actorName,
      actorType,
      action,
      details
    })
  );
}
function withExpiry(p) {
  if (p.status === "invited" && new Date(p.expiresAt).getTime() < Date.now()) {
    return { ...p, status: "expired" };
  }
  return p;
}
function magicLinkUrl(token) {
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  return `${origin}/portal?token=${token}`;
}
const EXPIRY_OPTIONS = [
  { label: "24 hours", hours: 24 },
  { label: "48 hours", hours: 48 },
  { label: "72 hours", hours: 72 },
  { label: "7 days", hours: 168 }
];
const candidatesApi = {
  /** BACKEND: GET /api/candidates — one row per pipeline. */
  async list() {
    const candidates = getLocalCandidates();
    const rows = getLocalPipelines().map(withExpiry).map((pipeline) => {
      const candidate = candidates.find((c) => c.id === pipeline.candidateId);
      return candidate ? { candidate, pipeline } : null;
    }).filter((r) => r !== null).sort((a, b) => b.pipeline.invitedAt.localeCompare(a.pipeline.invitedAt));
    return delay(ok(rows));
  },
  /** BACKEND: GET /api/candidates/[id] */
  async get(candidateId) {
    const candidate = getCandidateById(candidateId);
    if (!candidate) return delay(fail("Candidate not found.", "not_found"));
    const pipelines = getLocalPipelines().filter((p) => p.candidateId === candidateId).map(withExpiry).sort((a, b) => b.invitedAt.localeCompare(a.invitedAt));
    return delay(ok({ candidate, pipelines }));
  },
  findByEmail(email) {
    return getLocalCandidates().find((c) => c.email.toLowerCase() === email.trim().toLowerCase()) ?? null;
  },
  submissions(pipelineId) {
    return getSubmissionsForPipeline(pipelineId);
  },
  /**
   * BACKEND: POST /api/candidates/invite — creates candidate + pipeline,
   * writes a nanoid(64) token to Redis with TTL, emails the portal link via Resend.
   */
  async invite(input) {
    if (!input.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email))
      return delay(fail("Enter a valid email address."));
    if (!input.firstName.trim()) return delay(fail("First name is required."));
    const existing = candidatesApi.findByEmail(input.email);
    if (existing && !input.allowDuplicate) {
      const clash = getLocalPipelines().find(
        (p) => p.candidateId === existing.id && (p.roleName ?? "") === (input.roleName ?? "")
      );
      if (clash) return delay(fail("DUPLICATE:" + existing.id, "duplicate"));
    }
    const candidate = existing ?? {
      id: uuid(),
      tenantId: MOCK_TENANT_ID,
      firstName: input.firstName.trim(),
      lastName: input.lastName.trim(),
      email: input.email.trim(),
      phone: input.phone,
      createdAt: iso(),
      createdBy: input.invitedBy ?? "HR Admin"
    };
    saveLocalCandidate(candidate);
    const expiresAt = new Date(Date.now() + input.expiryHours * 3600 * 1e3).toISOString();
    const form = input.formId ? (await import("./localStorage-DOek0dff.mjs")).getLocalFormById(input.formId) : null;
    const pipeline = {
      id: uuid(),
      tenantId: MOCK_TENANT_ID,
      candidateId: candidate.id,
      formId: input.formId,
      formVersionId: form?.versionId ?? null,
      roleName: input.roleName,
      status: "invited",
      invitedAt: iso(),
      invitedBy: input.invitedBy ?? "HR Admin",
      expiresAt,
      hrNotes: input.hrNotes,
      lastActivityAt: iso(),
      events: [event("Invitation sent", input.invitedBy ?? "HR Admin")]
    };
    saveLocalPipeline(pipeline);
    auditPipeline(pipeline.id, "invited", { roleName: input.roleName }, pipeline.invitedBy, "hr");
    const token = uuid();
    createMagicToken({
      token,
      pipelineId: pipeline.id,
      candidateId: candidate.id,
      tenantId: MOCK_TENANT_ID,
      createdAt: iso(),
      expiresAt,
      used: false
    });
    return delay(
      ok({ candidateId: candidate.id, pipelineId: pipeline.id, magicLinkUrl: magicLinkUrl(token), expiresAt })
    );
  },
  /** BACKEND: POST /api/candidates/[id]/pipelines/[pid]/resend-invitation */
  async resendInvitation(pipelineId, expiryHours = 72) {
    const p = getPipelineById(pipelineId);
    if (!p) return delay(fail("Pipeline not found."));
    const expiresAt = new Date(Date.now() + expiryHours * 3600 * 1e3).toISOString();
    const token = uuid();
    createMagicToken({
      token,
      pipelineId: p.id,
      candidateId: p.candidateId,
      tenantId: p.tenantId,
      createdAt: iso(),
      expiresAt,
      used: false
    });
    touch(p, "Invitation resent", "HR Admin", { status: "invited", expiresAt });
    auditPipeline(p.id, "invitation_resent", {}, "HR Admin", "hr");
    return delay(ok({ magicLinkUrl: magicLinkUrl(token) }));
  },
  currentMagicLink(pipelineId) {
    const t = getTokenForPipeline(pipelineId);
    return t ? { url: magicLinkUrl(t.token), expiresAt: t.expiresAt } : null;
  },
  /** BACKEND: PATCH /api/candidates/[id]/pipelines/[pid] */
  async setStatus(pipelineId, status, label, patch = {}, actor = "HR Admin") {
    const p = getPipelineById(pipelineId);
    if (!p) return delay(fail("Pipeline not found."));
    if (status !== p.status)
      auditPipeline(pipelineId, "status_changed", { from: p.status, to: status, label }, actor, "hr");
    return delay(ok(touch(p, label, actor, { status, ...patch })));
  },
  async approve(pipelineId) {
    return candidatesApi.setStatus(pipelineId, "approved", "Application approved", {
      reviewedAt: iso(),
      reviewedBy: "HR Admin"
    });
  },
  async requestChanges(pipelineId, changeRequestNote, hrNotes) {
    auditPipeline(pipelineId, "changes_requested", { note: changeRequestNote }, "HR Admin", "hr");
    return candidatesApi.setStatus(pipelineId, "changes_requested", "Changes requested", {
      changeRequestNote,
      ...hrNotes !== void 0 ? { hrNotes } : {}
    });
  },
  async reject(pipelineId, reason) {
    return candidatesApi.setStatus(pipelineId, "rejected", `Candidate rejected — ${reason}`, { hrNotes: reason });
  },
  async withdraw(pipelineId) {
    return candidatesApi.setStatus(pipelineId, "withdrawn", "Pipeline cancelled");
  },
  /** Phase F stub — real conversion creates the employee record transactionally. */
  async convert(pipelineId) {
    return candidatesApi.setStatus(pipelineId, "onboarding", "Moved to employee onboarding");
  },
  async saveHrNotes(pipelineId, hrNotes) {
    const p = getPipelineById(pipelineId);
    if (!p) return delay(fail("Pipeline not found."));
    const next = { ...p, hrNotes, lastActivityAt: iso() };
    saveLocalPipeline(next);
    return delay(ok(next));
  }
};
const portalApi = {
  /** BACKEND: POST /api/portal/auth { token } — validates Redis token, sets httpOnly cookie. */
  async authenticate(token) {
    const record = validateMagicToken(token);
    if (!record) return delay(fail("This invitation link has expired.", "expired"));
    const pipeline = getPipelineById(record.pipelineId);
    if (!pipeline) return delay(fail("This invitation is no longer valid.", "not_found"));
    const session = {
      sessionId: uuid(),
      pipelineId: record.pipelineId,
      candidateId: record.candidateId,
      tenantId: record.tenantId,
      createdAt: iso(),
      lastActiveAt: iso()
    };
    createPortalSession(session);
    markTokenUsed(token);
    if (pipeline.status === "invited" || pipeline.status === "expired") {
      touch(pipeline, "Link opened", void 0, { status: "portal_opened" });
      auditPipeline(pipeline.id, "link_opened", {}, "Candidate", "candidate");
    }
    return delay(ok({ pipelineId: record.pipelineId }));
  },
  /** BACKEND: GET /api/portal/[pipelineId] — HR-only fields stripped server-side. */
  async getPipeline(pipelineId) {
    const p = getPipelineById(pipelineId);
    if (!p) return delay(fail("Pipeline not found.", "not_found"));
    const safe = { ...p, hrNotes: void 0 };
    return delay(ok({ pipeline: safe, candidate: getCandidateById(p.candidateId) }));
  },
  markFormStarted(pipelineId) {
    const p = getPipelineById(pipelineId);
    if (p && p.status === "portal_opened") {
      touch(p, "Form started", void 0, { status: "form_in_progress" });
      auditPipeline(p.id, "form_started", {}, "Candidate", "candidate");
    }
  },
  /** BACKEND: POST /api/portal/[pipelineId]/submit — revalidates every visible field. */
  async submit(pipelineId, responses) {
    const p = getPipelineById(pipelineId);
    if (!p) return delay(fail("Pipeline not found."));
    const previous = getSubmissionsForPipeline(pipelineId);
    const submission = {
      id: uuid(),
      pipelineId,
      submissionNumber: previous.length + 1,
      formVersionId: p.formVersionId,
      responses,
      submittedAt: iso(),
      isDraft: false
    };
    saveLocalSubmission(submission);
    clearDraft(pipelineId);
    touch(p, previous.length ? "Application resubmitted" : "Form submitted", void 0, { status: "submitted" });
    auditPipeline(p.id, "form_submitted", { submissionNumber: submission.submissionNumber }, "Candidate", "candidate");
    return delay(ok({ submissionId: submission.id }));
  }
};
const HR = { id: "hr_admin", name: "HR Admin" };
function audit(pipelineId, action, details = {}, actor = HR, actorType = "hr") {
  appendAuditEntry({ pipelineId, actorId: actor.id, actorName: actor.name, actorType, action, details });
}
const reviewApi = {
  // ───────── documents ─────────
  documents(pipelineId) {
    return getLocalDocuments(pipelineId);
  },
  /** BACKEND: pre-signed R2 upload, then POST .../documents { storageKey, … }. */
  async uploadDocument(pipelineId, input, actor = HR) {
    if (!input.label.trim()) return delay(fail("Add a label for this document."));
    const doc = {
      id: uuid(),
      pipelineId,
      uploadedBy: input.uploadedBy ?? "hr",
      fileName: input.fileName,
      fileType: input.fileType,
      fileSizeBytes: input.fileSizeBytes,
      fileData: input.fileData,
      documentType: input.documentType,
      label: input.label.trim(),
      uploadedAt: iso(),
      isVerified: false
    };
    saveLocalDocument(doc);
    audit(pipelineId, "document_uploaded", { label: doc.label }, actor);
    return delay(ok(doc));
  },
  /** BACKEND: PATCH .../documents/[docId]/verify */
  async setDocumentVerified(doc, verified, actor = HR) {
    const next = verified ? { ...doc, isVerified: true, verifiedBy: actor.id, verifiedAt: iso() } : { ...doc, isVerified: false, verifiedBy: void 0, verifiedAt: void 0 };
    saveLocalDocument(next);
    if (verified) audit(doc.pipelineId, "document_verified", { label: doc.label }, actor);
    return delay(ok(next));
  },
  /** BACKEND: DELETE .../documents/[docId] */
  async deleteDocument(doc, actor = HR) {
    deleteLocalDocument(doc.id);
    audit(doc.pipelineId, "document_deleted", { label: doc.label }, actor);
    return delay(ok(true));
  },
  // ───────── comments ─────────
  comments(pipelineId) {
    return getLocalComments(pipelineId);
  },
  /** BACKEND: POST .../comments { content } */
  async addComment(pipelineId, content, actor = HR) {
    const trimmed = content.trim();
    if (!trimmed) return delay(fail("Comment cannot be empty"));
    const comment = {
      id: uuid(),
      pipelineId,
      authorId: actor.id,
      authorName: actor.name,
      content: trimmed,
      createdAt: iso(),
      isEdited: false
    };
    saveLocalComment(comment);
    audit(pipelineId, "comment_added", {}, actor);
    return delay(ok(comment));
  },
  /** BACKEND: PATCH .../comments/[id] — 403 unless the requester is the author. */
  async editComment(comment, content, actor = HR) {
    const trimmed = content.trim();
    if (!trimmed) return delay(fail("Comment cannot be empty"));
    updateLocalComment(comment.id, trimmed);
    audit(comment.pipelineId, "comment_edited", {}, actor);
    return delay(ok(true));
  },
  async deleteComment(comment, actor = HR) {
    deleteLocalComment(comment.id);
    audit(comment.pipelineId, "comment_deleted", {}, actor);
    return delay(ok(true));
  },
  // ───────── reviewers ─────────
  reviewers(pipelineId) {
    return getLocalReviewers(pipelineId);
  },
  /** BACKEND: POST .../reviewers — 409 Conflict on duplicates; notifies the reviewer. */
  async assignReviewer(pipelineId, reviewer, actor = HR) {
    if (getLocalReviewers(pipelineId).some((r) => r.reviewerId === reviewer.id))
      return delay(fail("Already assigned as a reviewer.", "conflict"));
    const assignment = {
      id: uuid(),
      pipelineId,
      reviewerId: reviewer.id,
      reviewerName: reviewer.name,
      assignedAt: iso(),
      assignedBy: actor.id
    };
    assignLocalReviewer(assignment);
    audit(pipelineId, "reviewer_assigned", { reviewerName: reviewer.name }, actor);
    console.log("[NOTIFY] Review assignment queued for", reviewer.name);
    return delay(ok(assignment));
  },
  async removeReviewer(assignment, actor = HR) {
    removeLocalReviewer(assignment.id);
    audit(assignment.pipelineId, "reviewer_removed", { reviewerName: assignment.reviewerName }, actor);
    return delay(ok(true));
  },
  // ───────── scores ─────────
  scores(pipelineId) {
    return getLocalScores(pipelineId);
  },
  myScore(pipelineId, reviewerId) {
    return getLocalScore(pipelineId, reviewerId);
  },
  /** BACKEND: POST / PATCH .../scores { overallScore, notes } */
  async saveScore(pipelineId, overallScore, notes, actor = HR) {
    if (overallScore < 1 || overallScore > 5) return delay(fail("Pick a rating from 1 to 5."));
    const existing = getLocalScore(pipelineId, actor.id);
    const score = {
      id: existing?.id ?? uuid(),
      pipelineId,
      reviewerId: actor.id,
      reviewerName: actor.name,
      overallScore,
      notes: notes?.trim() || void 0,
      scoredAt: iso()
    };
    saveLocalScore(score);
    audit(pipelineId, "score_added", { score: overallScore }, actor);
    return delay(ok(score));
  },
  // ───────── rejection reasons ─────────
  rejectionReasons(tenantId = MOCK_TENANT_ID) {
    seedDefaultRejectionReasons(tenantId);
    return getLocalRejectionReasons();
  },
  async saveRejectionReason(input) {
    if (!input.label.trim()) return delay(fail("Reason text is required."));
    const all = getLocalRejectionReasons();
    const existing = input.id ? all.find((r) => r.id === input.id) : void 0;
    const reason = {
      id: existing?.id ?? uuid(),
      tenantId: MOCK_TENANT_ID,
      label: input.label.trim(),
      category: input.category,
      displayOrder: existing?.displayOrder ?? all.length,
      isDefault: existing?.isDefault ?? false,
      isActive: input.isActive ?? existing?.isActive ?? true
    };
    saveLocalRejectionReason(reason);
    return delay(ok(reason));
  },
  /** Blocked when the reason is referenced by any pipeline (BACKEND: soft delete instead). */
  reasonUsageCount(reasonId) {
    return getLocalPipelines().filter((p) => p.rejectionReasonId === reasonId).length;
  },
  async deleteRejectionReason(id) {
    const used = reviewApi.reasonUsageCount(id);
    if (used > 0)
      return delay(
        fail(`This reason was used for ${used} candidate${used === 1 ? "" : "s"} and cannot be deleted. You can hide it instead.`)
      );
    deleteLocalRejectionReason(id);
    return delay(ok(true));
  },
  // ───────── rejection + bulk ─────────
  /** BACKEND: PATCH .../pipelines/[pid] { status:'rejected', rejectionReasonId, hrNotes } */
  async rejectWithReason(pipelineId, reason, internalNotes, actor = HR) {
    const r = await candidatesApi.setStatus(
      pipelineId,
      "rejected",
      `Candidate rejected — ${reason.label}`,
      {
        rejectionReasonId: reason.id,
        rejectionReasonLabel: reason.label,
        ...internalNotes ? { hrNotes: internalNotes } : {}
      },
      actor.name
    );
    if (r.data) {
      audit(pipelineId, "rejected", { reason: reason.label }, actor);
      console.log("[NOTIFY] Rejection notification queued for pipeline", pipelineId);
    }
    return r;
  },
  /** BACKEND: POST /api/candidates/bulk-reject — one transaction, one audit row per pipeline. */
  async bulkReject(pipelineIds, reason, internalNotes, actor = HR) {
    let processed = 0;
    let skipped = 0;
    for (const id of pipelineIds) {
      const p = getPipelineById(id);
      if (!p || TERMINAL_STATUSES.includes(p.status)) {
        skipped += 1;
        continue;
      }
      await reviewApi.rejectWithReason(id, reason, internalNotes, actor);
      processed += 1;
    }
    return delay(ok({ processed, skipped }));
  },
  /** BACKEND: POST /api/candidates/bulk-assign-reviewer */
  async bulkAssignReviewer(pipelineIds, reviewer, actor = HR) {
    let processed = 0;
    let skipped = 0;
    for (const id of pipelineIds) {
      const r = await reviewApi.assignReviewer(id, reviewer, actor);
      if (r.data) processed += 1;
      else skipped += 1;
    }
    return delay(ok({ processed, skipped }));
  },
  // ───────── audit log ─────────
  auditLog(pipelineId) {
    return getLocalAuditLog(pipelineId);
  }
};
export {
  EXPIRY_OPTIONS as E,
  candidatesApi as c,
  portalApi as p,
  reviewApi as r
};
