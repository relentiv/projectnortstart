import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { d as useNavigate, L as Link } from "./_libs/tanstack__react-router.mjs";
import { B as Button } from "./_ssr/Button-B92Yl16p.mjs";
import { I as Input } from "./_ssr/Input-DkwuDyVZ.mjs";
import { S as Select } from "./_ssr/Select-CT_4ow88.mjs";
import { B as Badge } from "./_ssr/Badge-BQrIKnVV.mjs";
import { E as EmptyState } from "./_ssr/EmptyState-C_t8YrDr.mjs";
import { C as ConfirmDialog } from "./_ssr/ConfirmDialog-CNV1l6_7.mjs";
import { D as DataTable } from "./_ssr/DataTable-QZdOUOks.mjs";
import { B as Breadcrumb } from "./_ssr/Breadcrumb-BAW4dGjH.mjs";
import { s as showToast } from "./_ssr/Toast-n7pN7q8Q.mjs";
import { M as MultiSelect } from "./_ssr/MultiSelect-DHbFbN4k.mjs";
import { R as RejectionDialog, C as CandidateStatusBadge } from "./_ssr/RejectionDialog-Ng4ezWf6.mjs";
import { c as candidatesApi, r as reviewApi } from "./_ssr/candidates-BtsrOf4o.mjs";
import { l as listEmployees } from "./_ssr/router-LFebWAoY.mjs";
import { seedDefaultRejectionReasons, getLocalCandidates, getLocalForms, saveLocalForm, uuid, saveLocalCandidate, saveLocalPipeline, appendAuditEntry, saveLocalSubmission, saveLocalDocument, saveLocalScore, assignLocalReviewer, saveLocalComment, MOCK_TENANT_ID } from "./_ssr/localStorage-DOek0dff.mjs";
import { C as CANDIDATE_STATUS_LABELS, T as TERMINAL_STATUSES } from "./_ssr/candidate-CM1ucsTB.mjs";
import { P as PermissionGuard } from "./_ssr/PermissionGuard-CtwjQNn8.mjs";

import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval.mjs";
import "./_libs/unenv.mjs";


import "./_libs/seroval-plugins.mjs";


import "./_libs/react-dom.mjs";
import "./_libs/isbot.mjs";
import "./_ssr/Modal-DIFPhA7e.mjs";
import "./_ssr/Textarea-DmSlcYuH.mjs";
import "./_ssr/Alert-DctqS4QO.mjs";
import "./_ssr/RadioGroup-DGseX15k.mjs";
import "./_libs/tanstack__query-core.mjs";
import "./_libs/tanstack__react-query.mjs";
import "./_libs/clsx.mjs";
import "./_libs/tailwind-merge.mjs";
import "./_libs/zod.mjs";
import "./_ssr/usePermission-5FQzLb5G.mjs";
import "./_ssr/rbac-B_cCMzV8.mjs";
import "./_ssr/rbac-B1d7raBj.mjs";
const iso = (daysAgo) => new Date(Date.now() - daysAgo * 864e5).toISOString();
function demoForm() {
  const now = iso(30);
  return {
    id: "form_demo_candidate",
    version: 1,
    versionId: "formv_demo_candidate_1",
    title: "Candidate application",
    description: "Basic details we collect before an interview.",
    category: "candidate_onboarding",
    status: "published",
    isMultiStep: false,
    steps: [
      {
        id: "step_1",
        title: "About you",
        fields: [
          { id: "f_full_name", type: "short_text", label: "Full name", required: true, validation: [], displayOrder: 0 },
          { id: "f_experience", type: "number", label: "Years of experience", required: true, validation: [], displayOrder: 1 },
          { id: "f_current_ctc", type: "number", label: "Current CTC (LPA)", required: false, validation: [], displayOrder: 2 },
          { id: "f_notice", type: "short_text", label: "Notice period", required: true, validation: [], displayOrder: 3 },
          { id: "f_why", type: "long_text", label: "Why this role?", required: false, validation: [], displayOrder: 4 }
        ]
      }
    ],
    settings: {
      allowDraftSaving: true,
      showProgressBar: true,
      submitButtonLabel: "Submit application",
      successMessage: "Thanks! We'll be in touch shortly."
    },
    allowedRoleIds: [],
    createdBy: "HR Admin",
    createdAt: now,
    updatedAt: now
  };
}
const SPECS = [
  {
    first: "Priya",
    last: "Nair",
    email: "priya.nair@example.com",
    phone: "+91 98200 11223",
    role: "Senior Frontend Engineer",
    status: "submitted",
    invitedDaysAgo: 9,
    responses: { f_full_name: "Priya Nair", f_experience: 7, f_current_ctc: 32, f_notice: "60 days", f_why: "I want to work on design-led product surfaces at scale." },
    score: { name: "Jordan Reyes", value: 4, notes: "Strong portfolio, deep React and accessibility knowledge." },
    comments: ["Portfolio is excellent — shortlisting for the system design round.", "Notice period is long; check if it can be bought out."]
  },
  {
    first: "Arjun",
    last: "Mehta",
    email: "arjun.mehta@example.com",
    phone: "+91 99873 44519",
    role: "Product Designer",
    status: "changes_requested",
    invitedDaysAgo: 14,
    responses: { f_full_name: "Arjun Mehta", f_experience: 4, f_current_ctc: 18, f_notice: "30 days" },
    secondSubmission: { f_full_name: "Arjun Mehta", f_experience: 5, f_current_ctc: 18, f_notice: "30 days", f_why: "Keen to own end-to-end design for HR products." },
    comments: ["Asked for the missing portfolio link — resubmitted with it."]
  },
  {
    first: "Lena",
    last: "Fischer",
    email: "lena.fischer@example.com",
    phone: "+49 151 2233 4455",
    role: "Engineering Manager",
    status: "approved",
    invitedDaysAgo: 21,
    responses: { f_full_name: "Lena Fischer", f_experience: 11, f_current_ctc: 55, f_notice: "90 days", f_why: "Excited by the multi-tenant platform challenge." },
    score: { name: "Jordan Reyes", value: 5, notes: "Best manager candidate in this loop. Move to offer." }
  },
  { first: "Daniel", last: "Osei", email: "daniel.osei@example.com", phone: "+44 7700 900123", role: "QA Engineer", status: "invited", invitedDaysAgo: 2 },
  {
    first: "Sofia",
    last: "Rossi",
    email: "sofia.rossi@example.com",
    phone: "+39 320 555 0143",
    role: "Data Analyst",
    status: "rejected",
    invitedDaysAgo: 27,
    responses: { f_full_name: "Sofia Rossi", f_experience: 2, f_current_ctc: 9, f_notice: "Immediate" },
    comments: ["Solid SQL, but too junior for this opening. Keeping in the talent pool."]
  }
];
const TINY_PDF = "data:application/pdf;base64,JVBERi0xLjQKJcTl8uXrp/Og0MTGCjEgMCBvYmoKPDwvVHlwZS9DYXRhbG9nL1BhZ2VzIDIgMCBSPj4KZW5kb2JqCjIgMCBvYmoKPDwvVHlwZS9QYWdlcy9LaWRzWzMgMCBSXS9Db3VudCAxPj4KZW5kb2JqCjMgMCBvYmoKPDwvVHlwZS9QYWdlL1BhcmVudCAyIDAgUi9NZWRpYUJveFswIDAgMjAwIDIwMF0+PgplbmRvYmoKdHJhaWxlcgo8PC9Sb290IDEgMCBSPj4K";
function seedDemoCandidates() {
  if (typeof window === "undefined") return;
  seedDefaultRejectionReasons(MOCK_TENANT_ID);
  if (getLocalCandidates().length > 0) return;
  const form = getLocalForms().find((f) => f.category === "candidate_onboarding" && f.status === "published") ?? demoForm();
  saveLocalForm(form);
  SPECS.forEach((spec) => {
    const candidate = {
      id: uuid(),
      tenantId: MOCK_TENANT_ID,
      firstName: spec.first,
      lastName: spec.last,
      email: spec.email,
      phone: spec.phone,
      createdAt: iso(spec.invitedDaysAgo),
      createdBy: "Jordan Reyes"
    };
    saveLocalCandidate(candidate);
    const pipeline = {
      id: uuid(),
      tenantId: MOCK_TENANT_ID,
      candidateId: candidate.id,
      formId: form.id,
      formVersionId: form.versionId,
      roleName: spec.role,
      status: spec.status,
      invitedAt: iso(spec.invitedDaysAgo),
      invitedBy: "Jordan Reyes",
      expiresAt: iso(spec.invitedDaysAgo - 10),
      lastActivityAt: iso(Math.max(0, spec.invitedDaysAgo - 4)),
      events: [
        { id: uuid(), at: iso(spec.invitedDaysAgo), label: "Invitation sent", actor: "Jordan Reyes" },
        ...spec.responses ? [{ id: uuid(), at: iso(spec.invitedDaysAgo - 3), label: "Application submitted", actor: `${spec.first} ${spec.last}` }] : []
      ],
      ...spec.status === "rejected" ? { rejectionReasonLabel: "Not enough relevant experience" } : {}
    };
    saveLocalPipeline(pipeline);
    appendAuditEntry({
      pipelineId: pipeline.id,
      actorId: "u_demo",
      actorName: "Jordan Reyes",
      actorType: "hr",
      action: "invited",
      details: { roleName: spec.role }
    });
    if (spec.responses) {
      const sub = {
        id: uuid(),
        pipelineId: pipeline.id,
        submissionNumber: 1,
        formVersionId: form.versionId,
        responses: spec.responses,
        submittedAt: iso(spec.invitedDaysAgo - 3),
        isDraft: false
      };
      saveLocalSubmission(sub);
      appendAuditEntry({
        pipelineId: pipeline.id,
        actorId: candidate.id,
        actorName: `${spec.first} ${spec.last}`,
        actorType: "candidate",
        action: "form_submitted",
        details: {}
      });
      const doc = {
        id: uuid(),
        pipelineId: pipeline.id,
        uploadedBy: "candidate",
        fileName: `${spec.first.toLowerCase()}-resume.pdf`,
        fileType: "application/pdf",
        fileSizeBytes: 148 * 1024,
        fileData: TINY_PDF,
        documentType: "resume",
        label: "Resume",
        uploadedAt: iso(spec.invitedDaysAgo - 3),
        isVerified: false
      };
      saveLocalDocument(doc);
    }
    if (spec.secondSubmission) {
      saveLocalSubmission({
        id: uuid(),
        pipelineId: pipeline.id,
        submissionNumber: 2,
        formVersionId: form.versionId,
        responses: spec.secondSubmission,
        submittedAt: iso(Math.max(0, spec.invitedDaysAgo - 6)),
        isDraft: false
      });
    }
    if (spec.score) {
      saveLocalScore({
        id: uuid(),
        pipelineId: pipeline.id,
        reviewerId: "u_demo",
        reviewerName: spec.score.name,
        overallScore: spec.score.value,
        notes: spec.score.notes,
        scoredAt: iso(Math.max(0, spec.invitedDaysAgo - 4))
      });
      assignLocalReviewer({
        id: uuid(),
        pipelineId: pipeline.id,
        reviewerId: "u_demo",
        reviewerName: spec.score.name,
        assignedAt: iso(Math.max(0, spec.invitedDaysAgo - 5)),
        assignedBy: "u_demo"
      });
    }
    (spec.comments ?? []).forEach((content, i) => {
      const comment = {
        id: uuid(),
        pipelineId: pipeline.id,
        authorId: "u_demo",
        authorName: "Jordan Reyes",
        content,
        createdAt: iso(Math.max(0, spec.invitedDaysAgo - 4 - i)),
        isEdited: false
      };
      saveLocalComment(comment);
    });
  });
}
function initials(first, last) {
  return (first[0] ?? "?") + (last[0] ?? "");
}
function CandidatesPage() {
  const navigate = useNavigate();
  const [rows, setRows] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [search, setSearch] = reactExports.useState("");
  const [statuses, setStatuses] = reactExports.useState([]);
  const [role, setRole] = reactExports.useState("");
  const [resendTarget, setResendTarget] = reactExports.useState(null);
  const [cancelTarget, setCancelTarget] = reactExports.useState(null);
  const [rejectTarget, setRejectTarget] = reactExports.useState(null);
  const [selected, setSelected] = reactExports.useState([]);
  const [bulkRejectOpen, setBulkRejectOpen] = reactExports.useState(false);
  const [employees, setEmployees] = reactExports.useState([]);
  const [bulkReviewer, setBulkReviewer] = reactExports.useState("");
  const load = async () => {
    setLoading(true);
    seedDemoCandidates();
    const r = await candidatesApi.list();
    if (r.data) setRows(r.data);
    setLoading(false);
  };
  reactExports.useEffect(() => {
    void load();
    void listEmployees({}).then((r) => setEmployees(r.data ?? []));
  }, []);
  const selectableRow = (row) => !TERMINAL_STATUSES.includes(row.pipeline.status);
  const bulkAssign = async () => {
    const emp = employees.find((e) => e.id === bulkReviewer);
    if (!emp || selected.length === 0) return;
    const r = await reviewApi.bulkAssignReviewer(selected, {
      id: emp.id,
      name: `${emp.firstName} ${emp.lastName}`
    });
    if (r.data) {
      showToast(`${r.data.processed} assigned${r.data.skipped ? `, ${r.data.skipped} skipped (already assigned)` : ""}.`, "success");
      setSelected([]);
      setBulkReviewer("");
      void load();
    }
  };
  const filtered = reactExports.useMemo(() => {
    return rows.filter(({
      candidate,
      pipeline
    }) => {
      if (search.trim()) {
        const q = search.trim().toLowerCase();
        const name = `${candidate.firstName} ${candidate.lastName}`.toLowerCase();
        if (!name.includes(q) && !candidate.email.toLowerCase().includes(q)) return false;
      }
      if (statuses.length && !statuses.includes(pipeline.status)) return false;
      if (role.trim() && !(pipeline.roleName ?? "").toLowerCase().includes(role.trim().toLowerCase())) return false;
      return true;
    });
  }, [rows, search, statuses, role]);
  const hasFilters = !!search.trim() || statuses.length > 0 || !!role.trim();
  const resend = async (row) => {
    const r = await candidatesApi.resendInvitation(row.pipeline.id);
    if (r.data) {
      showToast(`New link: ${r.data.magicLinkUrl}`, "success");
      void load();
    }
  };
  const cancel = async (row) => {
    const r = await candidatesApi.withdraw(row.pipeline.id);
    if (r.data) {
      showToast("Pipeline cancelled", "success");
      void load();
    }
  };
  const reject = async (row) => {
    const r = await candidatesApi.reject(row.pipeline.id, "Rejected from candidate list");
    if (r.data) {
      showToast("Candidate rejected", "success");
      void load();
    }
  };
  const columns = [{
    key: "name",
    label: "Name",
    render: ({
      candidate
    }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-8 w-8 rounded-full inline-flex items-center justify-center font-semibold uppercase text-[12px] shrink-0", style: {
        background: "var(--tenant-secondary)",
        color: "var(--tenant-text-on-secondary)"
      }, children: initials(candidate.firstName, candidate.lastName) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-medium text-[14px] truncate", children: [
        candidate.firstName,
        " ",
        candidate.lastName
      ] })
    ] })
  }, {
    key: "email",
    label: "Email",
    render: ({
      candidate
    }) => candidate.email
  }, {
    key: "role",
    label: "Role",
    render: ({
      pipeline
    }) => pipeline.roleName ?? "—"
  }, {
    key: "status",
    label: "Status",
    render: ({
      pipeline
    }) => /* @__PURE__ */ jsxRuntimeExports.jsx(CandidateStatusBadge, { status: pipeline.status, size: "sm" })
  }, {
    key: "invited",
    label: "Invited",
    render: ({
      pipeline
    }) => new Date(pipeline.invitedAt).toLocaleDateString()
  }, {
    key: "activity",
    label: "Last activity",
    render: ({
      pipeline
    }) => new Date(pipeline.lastActivityAt).toLocaleDateString()
  }, {
    key: "actions",
    label: "",
    align: "right",
    render: (row) => {
      const {
        pipeline
      } = row;
      const canResend = pipeline.status === "invited" || pipeline.status === "expired";
      const canReject = ["submitted", "changes_requested", "approved"].includes(pipeline.status);
      const canCancel = !TERMINAL_STATUSES.includes(pipeline.status);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end gap-3", onClick: (e) => e.stopPropagation(), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/candidates/$candidateId", search: {
          tab: "overview"
        }, params: {
          candidateId: row.candidate.id
        }, className: "text-[12px] text-[var(--tenant-primary)] hover:underline", children: "View" }),
        canResend && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "text-[12px] text-[#0A0A0A] hover:underline", onClick: () => setResendTarget(row), children: "Resend" }),
        canReject && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "text-[12px] text-[#DC2626] hover:underline", onClick: () => setRejectTarget(row), children: "Reject" }),
        canCancel && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "text-[12px] text-[#6B6B6B] hover:underline", onClick: () => setCancelTarget(row), children: "Cancel" })
      ] });
    }
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumb, { items: [{
      label: "Candidates"
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-[28px] font-bold tracking-[-0.02em]", children: "Candidates" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "default", children: rows.length })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PermissionGuard, { permission: "employees.create", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", onClick: () => navigate({
        to: "/candidates/invite"
      }), children: "Invite candidate" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Search name or email…", value: search, onChange: (e) => setSearch(e.target.value) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MultiSelect, { placeholder: "Filter by status", value: statuses, onChange: setStatuses, options: Object.entries(CANDIDATE_STATUS_LABELS).map(([value, label]) => ({
        value,
        label
      })) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Filter by role…", value: role, onChange: (e) => setRole(e.target.value) })
    ] }),
    selected.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 flex-wrap rounded-md border border-[#E5E5E3] bg-[#FAFAF8] px-4 py-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[13px] font-medium text-[#0A0A0A]", children: [
        selected.length,
        " selected"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(PermissionGuard, { permission: "employees.edit", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { className: "min-w-[220px]", value: bulkReviewer, onChange: (e) => setBulkReviewer(e.target.value), options: [{
            value: "",
            label: "Assign reviewer…"
          }, ...employees.map((e) => ({
            value: e.id,
            label: `${e.firstName} ${e.lastName}`
          }))] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "secondary", disabled: !bulkReviewer, onClick: bulkAssign, children: "Assign" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "danger", onClick: () => setBulkRejectOpen(true), children: "Reject selected" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "text-[12px] text-[#6B6B6B] hover:underline ml-auto", onClick: () => setSelected([]), children: "Clear selection" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DataTable, { columns, data: filtered, selectable: true, selectedKeys: selected, onSelectionChange: setSelected, isRowSelectable: selectableRow, loading, getRowKey: (r) => r.pipeline.id, emptyState: /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: hasFilters ? "No candidates match your filters" : "No candidates yet. Invite your first candidate.", action: hasFilters ? /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: () => {
      setSearch("");
      setStatuses([]);
      setRole("");
    }, children: "Clear filters" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => navigate({
      to: "/candidates/invite"
    }), children: "Invite candidate" }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RejectionDialog, { open: bulkRejectOpen, onClose: () => setBulkRejectOpen(false), pipelineIds: selected, onDone: (summary) => {
      showToast(summary ? `${summary.processed} rejected${summary.skipped ? `, ${summary.skipped} skipped` : ""}.` : "Candidate rejected.", "success");
      setSelected([]);
      void load();
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ConfirmDialog, { open: !!resendTarget, onOpenChange: (o) => !o && setResendTarget(null), title: "Resend invitation?", description: `A new magic link will be generated for ${resendTarget?.candidate.firstName ?? "this candidate"}.`, confirmLabel: "Resend", onConfirm: async () => {
      if (resendTarget) await resend(resendTarget);
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ConfirmDialog, { open: !!cancelTarget, onOpenChange: (o) => !o && setCancelTarget(null), title: "Cancel this pipeline?", description: "The candidate will no longer be able to complete their application.", confirmLabel: "Cancel pipeline", variant: "danger", onConfirm: async () => {
      if (cancelTarget) await cancel(cancelTarget);
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ConfirmDialog, { open: !!rejectTarget, onOpenChange: (o) => !o && setRejectTarget(null), title: "Reject this candidate?", description: "This action is final and the candidate will be notified.", confirmLabel: "Reject", variant: "danger", onConfirm: async () => {
      if (rejectTarget) await reject(rejectTarget);
    } })
  ] });
}
export {
  CandidatesPage as component
};
