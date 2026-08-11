const K = {
  forms: "hrms_form_library",
  tokens: "hrms_magic_tokens",
  candidates: "hrms_candidates",
  pipelines: "hrms_pipelines",
  submissions: "hrms_submissions",
  session: "hrms_portal_session",
  drafts: "hrms_form_drafts"
};
function read(key, fallback) {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}
function write(key, value) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(key, JSON.stringify(value));
}
function uuid() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
  return `id_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 10)}`;
}
function shortId(len = 12) {
  return Math.random().toString(36).slice(2, 2 + len).padEnd(len, "0");
}
const MOCK_TENANT_ID = "tenant_demo";
function getLocalForms() {
  return read(K.forms, []);
}
function saveLocalForm(form) {
  const list = getLocalForms();
  const i = list.findIndex((f) => f.id === form.id);
  if (i >= 0) list[i] = form;
  else list.unshift(form);
  write(K.forms, list);
}
function deleteLocalForm(id) {
  write(K.forms, getLocalForms().filter((f) => f.id !== id));
}
function getLocalFormById(id) {
  return getLocalForms().find((f) => f.id === id) ?? null;
}
function getLocalFormByVersionId(versionId) {
  return getLocalForms().find((f) => f.versionId === versionId) ?? null;
}
function getLocalCandidates() {
  return read(K.candidates, []);
}
function saveLocalCandidate(c) {
  const list = getLocalCandidates();
  const i = list.findIndex((x) => x.id === c.id);
  if (i >= 0) list[i] = c;
  else list.unshift(c);
  write(K.candidates, list);
}
function getCandidateById(id) {
  return getLocalCandidates().find((c) => c.id === id) ?? null;
}
function getLocalPipelines() {
  return read(K.pipelines, []);
}
function saveLocalPipeline(p) {
  const list = getLocalPipelines();
  const i = list.findIndex((x) => x.id === p.id);
  if (i >= 0) list[i] = p;
  else list.unshift(p);
  write(K.pipelines, list);
}
function getPipelineById(id) {
  return getLocalPipelines().find((p) => p.id === id) ?? null;
}
function getLocalSubmissions() {
  return read(K.submissions, []);
}
function saveLocalSubmission(s) {
  const list = getLocalSubmissions();
  const i = list.findIndex((x) => x.id === s.id);
  if (i >= 0) list[i] = s;
  else list.unshift(s);
  write(K.submissions, list);
}
function getSubmissionsForPipeline(pipelineId) {
  return getLocalSubmissions().filter((s) => s.pipelineId === pipelineId && !s.isDraft).sort((a, b) => a.submissionNumber - b.submissionNumber);
}
function getTokens() {
  return read(K.tokens, []);
}
function createMagicToken(token) {
  write(K.tokens, [token, ...getTokens().filter((t) => t.pipelineId !== token.pipelineId)]);
}
function validateMagicToken(token) {
  const found = getTokens().find((t) => t.token === token);
  if (!found) return null;
  if (new Date(found.expiresAt).getTime() < Date.now()) return null;
  return found;
}
function getTokenForPipeline(pipelineId) {
  return getTokens().find((t) => t.pipelineId === pipelineId) ?? null;
}
function markTokenUsed(token) {
  write(K.tokens, getTokens().map((t) => t.token === token ? { ...t, used: true } : t));
}
function createPortalSession(session) {
  write(K.session, session);
}
function getPortalSession() {
  const s = read(K.session, null);
  if (!s) return null;
  if (Date.now() - new Date(s.lastActiveAt).getTime() > 24 * 3600 * 1e3) return null;
  return s;
}
function clearPortalSession() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(K.session);
}
function touchPortalSession() {
  const s = getPortalSession();
  if (s) write(K.session, { ...s, lastActiveAt: (/* @__PURE__ */ new Date()).toISOString() });
}
function getDraft(pipelineId) {
  return read(K.drafts, {})[pipelineId]?.values ?? null;
}
function getDraftSavedAt(pipelineId) {
  return read(K.drafts, {})[pipelineId]?.savedAt ?? null;
}
function saveDraft(pipelineId, values) {
  const all = read(K.drafts, {});
  all[pipelineId] = { values, savedAt: (/* @__PURE__ */ new Date()).toISOString() };
  write(K.drafts, all);
}
function clearDraft(pipelineId) {
  const all = read(K.drafts, {});
  delete all[pipelineId];
  write(K.drafts, all);
}
const K2 = {
  documents: "hrms_pipeline_documents",
  comments: "hrms_pipeline_comments",
  reviewers: "hrms_pipeline_reviewers",
  scores: "hrms_pipeline_scores",
  reasons: "hrms_rejection_reasons",
  audit: "hrms_audit_log"
};
function getLocalDocuments(pipelineId) {
  return read(K2.documents, []).filter((d) => d.pipelineId === pipelineId).sort((a, b) => b.uploadedAt.localeCompare(a.uploadedAt));
}
function saveLocalDocument(doc) {
  const all = read(K2.documents, []);
  const i = all.findIndex((d) => d.id === doc.id);
  if (i >= 0) all[i] = doc;
  else all.unshift(doc);
  write(K2.documents, all);
}
function deleteLocalDocument(docId) {
  write(K2.documents, read(K2.documents, []).filter((d) => d.id !== docId));
}
function getLocalDocumentById(docId) {
  return read(K2.documents, []).find((d) => d.id === docId) ?? null;
}
function getLocalComments(pipelineId) {
  return read(K2.comments, []).filter((c) => c.pipelineId === pipelineId).sort((a, b) => a.createdAt.localeCompare(b.createdAt));
}
function saveLocalComment(comment) {
  write(K2.comments, [...read(K2.comments, []), comment]);
}
function updateLocalComment(id, content) {
  write(
    K2.comments,
    read(K2.comments, []).map(
      (c) => c.id === id ? { ...c, content, isEdited: true, updatedAt: (/* @__PURE__ */ new Date()).toISOString() } : c
    )
  );
}
function deleteLocalComment(id) {
  write(K2.comments, read(K2.comments, []).filter((c) => c.id !== id));
}
function getLocalReviewers(pipelineId) {
  return read(K2.reviewers, []).filter((r) => r.pipelineId === pipelineId);
}
function assignLocalReviewer(assignment) {
  write(K2.reviewers, [...read(K2.reviewers, []), assignment]);
}
function removeLocalReviewer(id) {
  write(K2.reviewers, read(K2.reviewers, []).filter((r) => r.id !== id));
}
const DEFAULT_REASONS = [
  { label: "Skills or experience don't match the role requirements", category: "skills" },
  { label: "Technical assessment did not meet the benchmark", category: "skills" },
  { label: "Not the right cultural fit at this time", category: "culture_fit" },
  { label: "Compensation expectations are misaligned", category: "compensation" },
  { label: "Candidate's availability doesn't match our timeline", category: "timeline" },
  { label: "We've moved forward with another candidate", category: "other" }
];
function getLocalRejectionReasons() {
  return read(K2.reasons, []).sort((a, b) => a.displayOrder - b.displayOrder);
}
function saveLocalRejectionReason(reason) {
  const all = read(K2.reasons, []);
  const i = all.findIndex((r) => r.id === reason.id);
  if (i >= 0) all[i] = reason;
  else all.push(reason);
  write(K2.reasons, all);
}
function deleteLocalRejectionReason(id) {
  write(K2.reasons, read(K2.reasons, []).filter((r) => r.id !== id));
}
function seedDefaultRejectionReasons(tenantId) {
  if (read(K2.reasons, []).length > 0) return;
  write(
    K2.reasons,
    DEFAULT_REASONS.map((r, i) => ({
      id: uuid(),
      tenantId,
      label: r.label,
      category: r.category,
      displayOrder: i,
      isDefault: true,
      isActive: true
    }))
  );
}
function getLocalScores(pipelineId) {
  return read(K2.scores, []).filter((s) => s.pipelineId === pipelineId);
}
function getLocalScore(pipelineId, reviewerId) {
  return getLocalScores(pipelineId).find((s) => s.reviewerId === reviewerId) ?? null;
}
function saveLocalScore(score) {
  const all = read(K2.scores, []);
  const i = all.findIndex((s) => s.pipelineId === score.pipelineId && s.reviewerId === score.reviewerId);
  if (i >= 0) all[i] = score;
  else all.push(score);
  write(K2.scores, all);
}
function getLocalAuditLog(pipelineId) {
  return read(`${K2.audit}_${pipelineId}`, []).slice(0, 100).sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}
function appendAuditEntry(entry) {
  const key = `${K2.audit}_${entry.pipelineId}`;
  const list = read(key, []);
  list.unshift({ ...entry, id: uuid(), createdAt: entry.createdAt ?? (/* @__PURE__ */ new Date()).toISOString() });
  write(key, list.slice(0, 200));
}
export {
  MOCK_TENANT_ID,
  appendAuditEntry,
  assignLocalReviewer,
  clearDraft,
  clearPortalSession,
  createMagicToken,
  createPortalSession,
  deleteLocalComment,
  deleteLocalDocument,
  deleteLocalForm,
  deleteLocalRejectionReason,
  getCandidateById,
  getDraft,
  getDraftSavedAt,
  getLocalAuditLog,
  getLocalCandidates,
  getLocalComments,
  getLocalDocumentById,
  getLocalDocuments,
  getLocalFormById,
  getLocalFormByVersionId,
  getLocalForms,
  getLocalPipelines,
  getLocalRejectionReasons,
  getLocalReviewers,
  getLocalScore,
  getLocalScores,
  getLocalSubmissions,
  getPipelineById,
  getPortalSession,
  getSubmissionsForPipeline,
  getTokenForPipeline,
  markTokenUsed,
  removeLocalReviewer,
  saveDraft,
  saveLocalCandidate,
  saveLocalComment,
  saveLocalDocument,
  saveLocalForm,
  saveLocalPipeline,
  saveLocalRejectionReason,
  saveLocalScore,
  saveLocalSubmission,
  seedDefaultRejectionReasons,
  shortId,
  touchPortalSession,
  updateLocalComment,
  uuid,
  validateMagicToken
};
