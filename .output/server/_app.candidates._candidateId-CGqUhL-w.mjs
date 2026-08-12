import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { f as useParams, g as useSearch, d as useNavigate } from "./_libs/tanstack__react-router.mjs";
import { B as Button } from "./_ssr/Button-Crtgy6Xx.mjs";
import { S as Select } from "./_ssr/Select-Bg687n3T.mjs";
import { C as Card } from "./_ssr/Card-Dnu0IoXY.mjs";
import { S as Spinner, l as listEmployees, c as cn } from "./_ssr/router-Arl77cRa.mjs";
import { E as EmptyState } from "./_ssr/EmptyState-DCYWhDnT.mjs";
import { T as Tabs } from "./_ssr/Tabs-Sjae-j6-.mjs";
import { B as Breadcrumb } from "./_ssr/Breadcrumb-eir09VHE.mjs";
import { s as showToast } from "./_ssr/Toast-DlQQlIf6.mjs";
import { C as CandidateStatusBadge, R as RejectionDialog } from "./_ssr/RejectionDialog-CLYBVI8X.mjs";
import { T as Textarea } from "./_ssr/Textarea-DXR3KTuM.mjs";
import { C as ConfirmDialog } from "./_ssr/ConfirmDialog-C1NdmGJ3.mjs";
import { S as SlideOver } from "./_ssr/SlideOver-DXNNm8Us.mjs";
import { c as candidatesApi, r as reviewApi } from "./_ssr/candidates-BKnENJ3U.mjs";
import { P as PermissionGuard } from "./_ssr/PermissionGuard-DHUddp2f.mjs";
import { B as Badge } from "./_ssr/Badge-Cm1DzmgP.mjs";
import { I as Input } from "./_ssr/Input-CHeJoRlX.mjs";
import { F as FileUpload } from "./_ssr/FileUpload-GznQ7qkH.mjs";
import { R as RadioGroup } from "./_ssr/RadioGroup-Dl_ThJE1.mjs";
import { M as Modal } from "./_ssr/Modal-BWxmma2i.mjs";
import { A as Alert } from "./_ssr/Alert-DIhou9mC.mjs";
import { N as NON_DATA_FIELD_TYPES } from "./_ssr/formConditions-CF1AFMuj.mjs";
import { I as InfoTooltip } from "./_ssr/InfoTooltip-CiBS8Xkj.mjs";
import { A as Avatar } from "./_ssr/Avatar-B65jymUr.mjs";
import { a as authStore } from "./_ssr/auth-CjdYhZTR.mjs";
import { f as formsApi } from "./_ssr/forms-DH39HwWx.mjs";
import { ao as Star, ad as Send, ap as Image, V as FileText, aq as File } from "./_libs/lucide-react.mjs";

import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval.mjs";
import "./_libs/unenv.mjs";


import "./_libs/seroval-plugins.mjs";


import "./_libs/react-dom.mjs";
import "./_libs/isbot.mjs";
import "./_libs/tanstack__query-core.mjs";
import "./_libs/tanstack__react-query.mjs";
import "./_libs/clsx.mjs";
import "./_libs/tailwind-merge.mjs";
import "./_libs/zod.mjs";
import "./_ssr/candidate-CM1ucsTB.mjs";
import "./_ssr/localStorage-DOek0dff.mjs";
import "./_ssr/usePermission-C7-ELJsH.mjs";
import "./_ssr/rbac-CiXrabhS.mjs";
import "./_ssr/rbac-CHd75bNv.mjs";
const PX = { sm: 14, md: 18, lg: 24 };
function StarRating({ value, onChange, size = "md", showValue = true, className }) {
  const [hover, setHover] = reactExports.useState(null);
  const interactive = typeof onChange === "function";
  const shown = hover ?? value ?? 0;
  const px = PX[size];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("inline-flex items-center gap-2", className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        role: "radiogroup",
        "aria-label": "Candidate rating",
        className: "inline-flex items-center gap-1",
        onMouseLeave: () => setHover(null),
        children: [1, 2, 3, 4, 5].map((n) => {
          const filled = n <= shown;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": value === n,
              "aria-label": `${n} out of 5`,
              disabled: !interactive,
              tabIndex: interactive ? 0 : -1,
              onMouseEnter: () => interactive && setHover(n),
              onClick: () => {
                if (onChange) onChange(n);
              },
              className: cn(
                "rounded-sm outline-none transition-transform",
                interactive ? "cursor-pointer focus-visible:ring-2 focus-visible:ring-[var(--tenant-primary)] hover:scale-110" : "cursor-default"
              ),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Star,
                {
                  size: px,
                  strokeWidth: 1.5,
                  className: "transition-colors",
                  style: {
                    color: filled ? "var(--tenant-accent)" : "#E5E5E3",
                    fill: filled ? "var(--tenant-accent)" : "transparent"
                  }
                }
              )
            },
            n
          );
        })
      }
    ),
    showValue && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] text-[#6B6B6B]", children: value ? `${value} / 5` : "Not rated" })
  ] });
}
function PipelineTimeline({ events }) {
  const sorted = [...events].sort((a, b) => b.at.localeCompare(a.at));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[13px] font-semibold text-[#0A0A0A] mb-4", children: "Pipeline activity" }),
    sorted.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#6B6B6B]", children: "No activity yet." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "space-y-0", children: sorted.map((e, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "relative pl-6 pb-5 last:pb-0", children: [
      i !== sorted.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-[5px] top-3 bottom-0 w-px bg-[#E5E5E3]", "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: "absolute left-0 top-1.5 h-[11px] w-[11px] rounded-full ring-4 ring-white",
          style: { background: i === 0 ? "var(--tenant-primary)" : "#D1D5DB" },
          "aria-hidden": true
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-[#0A0A0A]", children: e.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[12px] text-[#9CA3AF]", children: [
        new Date(e.at).toLocaleString(),
        e.actor ? ` · ${e.actor}` : ""
      ] })
    ] }, e.id)) })
  ] });
}
function isFileLike(v) {
  return !!v && typeof v === "object" && ("url" in v || "dataUrl" in v || "name" in v);
}
function renderValue(field, value) {
  if (value === void 0 || value === null || value === "") return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#9CA3AF]", children: "—" });
  if (field.type === "signature" && typeof value === "string") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: value, alt: `${field.label} signature`, className: "max-h-24 rounded border border-[#E5E5E3] bg-white" });
  }
  if (field.type === "file_upload") {
    const files = Array.isArray(value) ? value : [value];
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-1", children: files.map((f, i) => {
      if (isFileLike(f)) {
        const href = f.url ?? f.dataUrl;
        return href ? /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href, target: "_blank", rel: "noreferrer", className: "text-[var(--tenant-primary)] hover:underline", children: [
          "View file",
          f.name ? ` — ${f.name}` : ""
        ] }, i) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: f.name ?? "File uploaded" }, i);
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: String(f) }, i);
    }) });
  }
  if (Array.isArray(value)) return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: value.map((v) => String(v)).join(", ") });
  if (typeof value === "boolean") return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: value ? "Yes" : "No" });
  if (typeof value === "object") return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: JSON.stringify(value) });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: String(value) });
}
function SubmissionViewer({ submissions, form }) {
  const [index, setIndex] = reactExports.useState(submissions.length - 1);
  if (submissions.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[13px] font-semibold text-[#0A0A0A] mb-2", children: "Application responses" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#6B6B6B]", children: "No submission yet." })
    ] });
  }
  const submission = submissions[Math.min(Math.max(index, 0), submissions.length - 1)];
  const fields = form ? form.steps.flatMap((s) => s.fields).filter((f) => !NON_DATA_FIELD_TYPES.includes(f.type)) : [];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[13px] font-semibold text-[#0A0A0A]", children: "Application responses" }),
      submissions.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            disabled: index <= 0,
            onClick: () => setIndex((i) => Math.max(0, i - 1)),
            className: "h-7 w-7 rounded-full border border-[#E5E5E3] disabled:opacity-30 hover:bg-[#F2F2F0]",
            "aria-label": "Previous submission",
            children: "‹"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[12px] text-[#6B6B6B]", children: [
          "Viewing submission #",
          submission.submissionNumber,
          " of ",
          submissions.length
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            disabled: index >= submissions.length - 1,
            onClick: () => setIndex((i) => Math.min(submissions.length - 1, i + 1)),
            className: "h-7 w-7 rounded-full border border-[#E5E5E3] disabled:opacity-30 hover:bg-[#F2F2F0]",
            "aria-label": "Next submission",
            children: "›"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[12px] text-[#9CA3AF] mb-4", children: [
      "Submitted ",
      new Date(submission.submittedAt).toLocaleString()
    ] }),
    fields.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("dl", { className: "space-y-3", children: Object.entries(submission.responses).map(([k, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3 text-[13px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-[#6B6B6B] col-span-1", children: k }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "text-[#0A0A0A] col-span-2", children: String(v) })
    ] }, k)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("dl", { className: "space-y-4", children: fields.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3 text-[13px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-[#6B6B6B] col-span-1", children: f.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "text-[#0A0A0A] col-span-2", children: renderValue(f, submission.responses[f.id]) })
    ] }, f.id)) })
  ] });
}
function HRReviewPanel({ pipeline, onChanged }) {
  const [approveOpen, setApproveOpen] = reactExports.useState(false);
  const [rejectOpen, setRejectOpen] = reactExports.useState(false);
  const [changesOpen, setChangesOpen] = reactExports.useState(false);
  const [rejectReason, setRejectReason] = reactExports.useState("");
  const [candidateNote, setCandidateNote] = reactExports.useState("");
  const [internalNote, setInternalNote] = reactExports.useState("");
  const [notes, setNotes] = reactExports.useState(pipeline.hrNotes ?? "");
  const [savingNotes, setSavingNotes] = reactExports.useState(false);
  reactExports.useEffect(() => setNotes(pipeline.hrNotes ?? ""), [pipeline.id, pipeline.hrNotes]);
  const canReview = pipeline.status === "submitted" || pipeline.status === "resubmitting";
  const canApprove = canReview || pipeline.status === "changes_requested";
  const canReject = ["submitted", "changes_requested", "approved", "resubmitting"].includes(pipeline.status);
  const doApprove = async () => {
    const r = await candidatesApi.approve(pipeline.id);
    if (r.data) {
      showToast("Application approved", "success");
      onChanged();
    }
  };
  const doReject = async () => {
    if (!rejectReason.trim()) {
      showToast("Add a reason for rejection.", "error");
      return;
    }
    const r = await candidatesApi.reject(pipeline.id, rejectReason.trim());
    if (r.data) {
      showToast("Candidate rejected", "success");
      setRejectReason("");
      setRejectOpen(false);
      onChanged();
    }
  };
  const doRequestChanges = async () => {
    if (!candidateNote.trim()) {
      showToast("Add a note for the candidate.", "error");
      return;
    }
    const r = await candidatesApi.requestChanges(pipeline.id, candidateNote.trim(), internalNote.trim() || void 0);
    if (r.data) {
      showToast("Changes requested from candidate", "success");
      setChangesOpen(false);
      setCandidateNote("");
      setInternalNote("");
      onChanged();
    }
  };
  const saveNotesOnBlur = async () => {
    if (notes === (pipeline.hrNotes ?? "")) return;
    setSavingNotes(true);
    await candidatesApi.saveHrNotes(pipeline.id, notes);
    setSavingNotes(false);
    showToast("Notes saved", "success");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[13px] font-semibold text-[#0A0A0A] mb-3", children: "HR review" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
        canApprove && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", onClick: () => setApproveOpen(true), children: "Approve" }),
        canReview && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "secondary", onClick: () => setChangesOpen(true), children: "Request changes" }),
        canReject && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "danger", onClick: () => setRejectOpen(true), children: "Reject" }),
        !canReview && !canReject && pipeline.status !== "approved" && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#6B6B6B]", children: "No review actions available at this stage." })
      ] })
    ] }),
    pipeline.status === "approved" && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-dashed", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[13px] font-semibold text-[#0A0A0A] mb-1", children: "Offer letter" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#6B6B6B] mb-3", children: "Offer generation and e-sign will be available in a future update (Phase E)." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "secondary", disabled: true, children: "Generate offer letter" })
    ] }),
    (pipeline.status === "countersigned" || pipeline.status === "onboarding") && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-dashed", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[13px] font-semibold text-[#0A0A0A] mb-1", children: "Convert to employee" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#6B6B6B] mb-3", children: "Converting this candidate into a full employee record will be available in a future update (Phase F)." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "secondary", disabled: true, children: "Convert to employee" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[13px] font-semibold text-[#0A0A0A] mb-3", children: "Internal notes" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Textarea,
        {
          value: notes,
          onChange: (e) => setNotes(e.target.value),
          onBlur: saveNotesOnBlur,
          placeholder: "Notes visible only to HR…",
          rows: 4
        }
      ),
      savingNotes && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[12px] text-[#9CA3AF]", children: "Saving…" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmDialog,
      {
        open: approveOpen,
        onOpenChange: setApproveOpen,
        title: "Approve this application?",
        description: "The candidate's stage will move to Approved.",
        confirmLabel: "Approve",
        onConfirm: doApprove
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SlideOver,
      {
        open: rejectOpen,
        onClose: () => setRejectOpen(false),
        title: "Reject candidate",
        description: "This action is final and the candidate will be notified.",
        footer: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: () => setRejectOpen(false), children: "Cancel" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "danger", onClick: doReject, children: "Reject" })
        ] }),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            label: "Reason for rejection",
            value: rejectReason,
            onChange: (e) => setRejectReason(e.target.value),
            placeholder: "Shared internally as a record…",
            rows: 4
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SlideOver,
      {
        open: changesOpen,
        onClose: () => setChangesOpen(false),
        title: "Request changes",
        description: "The candidate will see the note below and be able to resubmit.",
        footer: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: () => setChangesOpen(false), children: "Cancel" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: doRequestChanges, children: "Send request" })
        ] }),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              label: "Note to candidate",
              value: candidateNote,
              onChange: (e) => setCandidateNote(e.target.value),
              placeholder: "Explain what needs to change…",
              rows: 4
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              label: "Internal notes (optional)",
              value: internalNote,
              onChange: (e) => setInternalNote(e.target.value),
              placeholder: "Not visible to the candidate…",
              rows: 3
            }
          )
        ] })
      }
    )
  ] });
}
function toObjectUrl(src) {
  if (!src) return null;
  if (!src.startsWith("data:")) return { url: src, revoke: false };
  try {
    const [head, b64] = src.split(",");
    const mime = head.slice(5).replace(";base64", "") || "application/octet-stream";
    const bin = atob(b64 ?? "");
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i += 1) bytes[i] = bin.charCodeAt(i);
    return { url: URL.createObjectURL(new Blob([bytes], { type: mime })), revoke: true };
  } catch {
    return null;
  }
}
function FilePreviewModal({ doc, onClose }) {
  const [objectUrl, setObjectUrl] = reactExports.useState(null);
  const [failed, setFailed] = reactExports.useState(false);
  const src = doc?.fileData ?? "";
  reactExports.useEffect(() => {
    setFailed(false);
    if (!doc || !src) {
      setObjectUrl(null);
      return;
    }
    const made = toObjectUrl(src);
    if (!made) {
      setFailed(true);
      setObjectUrl(null);
      return;
    }
    setObjectUrl(made.url);
    return () => {
      if (made.revoke) URL.revokeObjectURL(made.url);
    };
  }, [doc?.id, src]);
  const kind = reactExports.useMemo(() => {
    const t = doc?.fileType ?? "";
    if (t.startsWith("image/")) return "image";
    if (t === "application/pdf") return "pdf";
    return "other";
  }, [doc?.fileType]);
  if (!doc) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal, { open: true, onClose, title: doc.label, className: "max-w-[720px]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-[280px] flex items-center justify-center rounded-md border border-[#E5E5E3] bg-[#FAFAF8] overflow-hidden", children: failed || !objectUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#6B6B6B] px-6 py-10 text-center", children: "Couldn't preview this file. It may be corrupted or in an unsupported format." }) : kind === "image" ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: objectUrl, alt: doc.label, className: "max-h-[520px] w-auto object-contain", onError: () => setFailed(true) }) : kind === "pdf" ? /* @__PURE__ */ jsxRuntimeExports.jsx("object", { data: objectUrl, type: "application/pdf", className: "w-full h-[520px]", "aria-label": doc.label, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#6B6B6B] px-6 py-10 text-center", children: "Preview not available in this browser. Download the file to view it." }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#6B6B6B] px-6 py-10 text-center", children: "Preview not available for this file type." }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[12px] text-[#9CA3AF]", children: [
        doc.fileName,
        " · ",
        (doc.fileSizeBytes / 1024).toFixed(0),
        " KB"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", size: "sm", onClick: onClose, children: "Close" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: objectUrl ?? src, download: doc.fileName, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", children: "Download" }) })
      ] })
    ] })
  ] });
}
const TYPE_LABELS = {
  id_proof: "ID proof",
  resume: "Resume",
  portfolio: "Portfolio",
  certificate: "Certificate",
  other: "Other"
};
function DocumentItem({ doc, onView, onToggleVerify, onDelete }) {
  const Icon = doc.fileType.startsWith("image/") ? Image : doc.fileType === "application/pdf" ? FileText : File;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3 py-3 border-b border-[#E5E5E3] last:border-b-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 18, className: "text-[#6B6B6B] shrink-0", "aria-hidden": true }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-[#0A0A0A] truncate", children: doc.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "default", children: TYPE_LABELS[doc.documentType] }),
        doc.isVerified && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "success", children: "Verified" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[12px] text-[#9CA3AF] truncate", children: [
        doc.fileName,
        " · ",
        (doc.fileSizeBytes / 1024).toFixed(0),
        " KB · ",
        doc.uploadedBy === "hr" ? "HR" : "Candidate",
        " ·",
        " ",
        new Date(doc.uploadedAt).toLocaleDateString()
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "text-[12px] text-[var(--tenant-primary)] hover:underline", onClick: () => onView(doc), children: "View" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: doc.fileData, download: doc.fileName, className: "text-[12px] text-[#0A0A0A] hover:underline", children: "Download" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PermissionGuard, { permission: "employees.manage_docs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "secondary", onClick: () => onToggleVerify(doc), children: doc.isVerified ? "Unverify" : "Verify" }) }),
      onDelete && doc.uploadedBy === "hr" && /* @__PURE__ */ jsxRuntimeExports.jsx(PermissionGuard, { permission: "employees.manage_docs", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "text-[12px] text-[#DC2626] hover:underline", onClick: () => onDelete(doc), children: "Delete" }) })
    ] })
  ] });
}
const TYPES = [
  { value: "id_proof", label: "ID proof" },
  { value: "resume", label: "Resume" },
  { value: "portfolio", label: "Portfolio" },
  { value: "certificate", label: "Certificate" },
  { value: "other", label: "Other" }
];
function DocumentUploadForm({ open, pipelineId, onClose, onUploaded }) {
  const [label, setLabel] = reactExports.useState("");
  const [docType, setDocType] = reactExports.useState("other");
  const [file, setFile] = reactExports.useState(null);
  const [saving, setSaving] = reactExports.useState(false);
  const [error, setError] = reactExports.useState();
  const reset = () => {
    setLabel("");
    setDocType("other");
    setFile(null);
    setError(void 0);
  };
  const onFileSelect = (f) => {
    const reader = new FileReader();
    reader.onload = () => setFile({ name: f.name, sizeKB: Math.round(f.size / 1024), type: f.type || "application/octet-stream", dataUrl: String(reader.result) });
    reader.onerror = () => setError("Couldn't read that file. Try again.");
    reader.readAsDataURL(f);
  };
  const submit = async () => {
    if (!label.trim()) {
      setError("Add a label for this document.");
      return;
    }
    if (!file) {
      setError("Choose a file to upload.");
      return;
    }
    setSaving(true);
    const r = await reviewApi.uploadDocument(pipelineId, {
      fileName: file.name,
      fileType: file.type,
      fileSizeBytes: file.sizeKB * 1024,
      fileData: file.dataUrl,
      documentType: docType,
      label
    });
    setSaving(false);
    if (r.error) {
      setError(r.error.message);
      return;
    }
    showToast("Document uploaded.", "success");
    reset();
    onUploaded();
    onClose();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    SlideOver,
    {
      open,
      onClose: () => {
        reset();
        onClose();
      },
      title: "Upload document",
      description: "Stored against this hiring pipeline and visible to HR only.",
      footer: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: () => {
          reset();
          onClose();
        }, children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: submit, loading: saving, disabled: !file || !label.trim(), children: "Upload" })
      ] }),
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Label", required: true, value: label, onChange: (e) => setLabel(e.target.value), placeholder: "e.g. Offer acceptance letter" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-1.5 text-[13px] font-medium text-[#0A0A0A]", children: "Document type" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroup, { options: TYPES, value: docType, onChange: (v) => setDocType(v) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          FileUpload,
          {
            label: "File",
            accept: ".pdf,.jpg,.jpeg,.png,.doc,.docx",
            maxSizeMB: 10,
            onFileSelect,
            onFileRemove: () => setFile(null),
            currentFile: file ? { name: file.name, sizeKB: file.sizeKB } : null,
            error
          }
        )
      ] })
    }
  );
}
function DocumentVault({ pipelineId, onCountChange }) {
  const [docs, setDocs] = reactExports.useState([]);
  const [uploadOpen, setUploadOpen] = reactExports.useState(false);
  const [preview, setPreview] = reactExports.useState(null);
  const [deleteTarget, setDeleteTarget] = reactExports.useState(null);
  const load = reactExports.useCallback(() => {
    const list = reviewApi.documents(pipelineId);
    setDocs(list);
    onCountChange?.(list.length);
  }, [pipelineId, onCountChange]);
  reactExports.useEffect(() => {
    load();
  }, [load]);
  const toggleVerify = async (doc) => {
    const r = await reviewApi.setDocumentVerified(doc, !doc.isVerified);
    if (r.data) {
      showToast(doc.isVerified ? "Verification removed." : "Document verified.", "success");
      load();
    }
  };
  const remove = async (doc) => {
    await reviewApi.deleteDocument(doc);
    showToast("Document deleted.", "success");
    load();
  };
  const fromCandidate = docs.filter((d) => d.uploadedBy === "candidate");
  const fromHr = docs.filter((d) => d.uploadedBy === "hr");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold uppercase tracking-[0.08em] text-[#6B6B6B]", children: "Candidate documents" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PermissionGuard, { permission: "employees.manage_docs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", onClick: () => setUploadOpen(true), children: "Upload document" }) })
    ] }),
    docs.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      EmptyState,
      {
        title: "No documents yet",
        subtitle: "Files the candidate uploads and anything HR adds to this pipeline will appear here."
      }
    ) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "From candidate", docs: fromCandidate, onView: setPreview, onToggleVerify: toggleVerify }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "From HR", docs: fromHr, onView: setPreview, onToggleVerify: toggleVerify, onDelete: setDeleteTarget })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DocumentUploadForm, { open: uploadOpen, pipelineId, onClose: () => setUploadOpen(false), onUploaded: load }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FilePreviewModal, { doc: preview, onClose: () => setPreview(null) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmDialog,
      {
        open: !!deleteTarget,
        onOpenChange: (o) => !o && setDeleteTarget(null),
        title: "Delete this document?",
        description: `"${deleteTarget?.label ?? ""}" will be permanently removed from this pipeline.`,
        confirmLabel: "Delete",
        variant: "danger",
        onConfirm: async () => {
          if (deleteTarget) await remove(deleteTarget);
        }
      }
    )
  ] });
}
function Section({
  title,
  docs,
  onView,
  onToggleVerify,
  onDelete
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold uppercase tracking-[0.08em] text-[#6B6B6B] mb-1", children: title }),
    docs.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#6B6B6B] py-2", children: "Nothing here yet." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { children: docs.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(DocumentItem, { doc: d, onView, onToggleVerify, onDelete }, d.id)) })
  ] });
}
function labelFor(form, fieldId) {
  const field = form?.steps.flatMap((s) => s.fields).filter((f) => !NON_DATA_FIELD_TYPES.includes(f.type)).find((f) => f.id === fieldId);
  return field?.label ?? fieldId;
}
function display(value) {
  if (value === void 0) return "__MISSING__";
  if (value === null || value === "") return "—";
  if (Array.isArray(value)) return value.map((v) => typeof v === "object" ? JSON.stringify(v) : String(v)).join(", ");
  if (typeof value === "boolean") return value ? "Yes" : "No";
  if (typeof value === "object") return JSON.stringify(value);
  const s = String(value);
  return s.startsWith("data:") ? "File uploaded" : s;
}
function SubmissionDiff({ left, right, form }) {
  const keys = Array.from(/* @__PURE__ */ new Set([...Object.keys(left.responses), ...Object.keys(right.responses)]));
  const versionMismatch = left.formVersionId !== right.formVersionId;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[minmax(120px,1fr)_1fr_1fr] gap-3 pb-3 border-b border-[#E5E5E3]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-semibold uppercase tracking-[0.08em] text-[#6B6B6B]", children: "Field" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[12px] font-semibold text-[#0A0A0A]", children: [
        "Submission ",
        left.submissionNumber,
        " — ",
        new Date(left.submittedAt).toLocaleDateString()
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[12px] font-semibold text-[#0A0A0A] flex items-center gap-1", children: [
        "Submission ",
        right.submissionNumber,
        " — ",
        new Date(right.submittedAt).toLocaleDateString(),
        versionMismatch && /* @__PURE__ */ jsxRuntimeExports.jsx(InfoTooltip, { content: `This submission used form version ${right.formVersionId ?? "unknown"}. Field labels may differ from the previous submission.` })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("dl", { className: "divide-y divide-[#E5E5E3]", children: keys.map((k) => {
      const a = display(left.responses[k]);
      const b = display(right.responses[k]);
      const added = a === "__MISSING__";
      const removed = b === "__MISSING__";
      const changed = !added && !removed && a !== b;
      const bg = added ? "color-mix(in srgb, #16A34A 8%, transparent)" : changed ? "color-mix(in srgb, var(--tenant-accent) 6%, transparent)" : void 0;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[minmax(120px,1fr)_1fr_1fr] gap-3 py-3 text-[13px]", style: { background: bg }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-[#6B6B6B]", children: labelFor(form, k) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "text-[#0A0A0A] break-words", children: added ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#9CA3AF]", children: "—" }) : a }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "text-[#0A0A0A] break-words", children: removed ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#9CA3AF]", children: "Removed" }) : b })
      ] }, k);
    }) })
  ] });
}
function SubmissionHistory({ submissions, form }) {
  const [selected, setSelected] = reactExports.useState("latest");
  if (submissions.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#6B6B6B]", children: "No submission yet." }) });
  }
  if (submissions.length === 1) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      !form && /* @__PURE__ */ jsxRuntimeExports.jsx(MissingSchemaNote, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SubmissionViewer, { submissions, form })
    ] });
  }
  const last = submissions.length - 1;
  const pills = [
    ...submissions.map((s, i) => ({
      id: String(i),
      label: `Submission ${s.submissionNumber}${i === last ? " (latest)" : ""}`
    })),
    { id: "compare", label: "↔ Compare" }
  ];
  const activeId = selected === "latest" ? String(last) : selected;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    !form && /* @__PURE__ */ jsxRuntimeExports.jsx(MissingSchemaNote, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: pills.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => setSelected(p.id),
        className: cn(
          "rounded-full px-3 py-1.5 text-[12px] border transition-colors",
          activeId === p.id ? "border-[var(--tenant-primary)] text-[var(--tenant-primary)] bg-[color-mix(in_srgb,var(--tenant-primary)_8%,transparent)]" : "border-[#E5E5E3] text-[#6B6B6B] hover:bg-[#F2F2F0]"
        ),
        children: p.label
      },
      p.id
    )) }),
    activeId === "compare" ? /* @__PURE__ */ jsxRuntimeExports.jsx(SubmissionDiff, { left: submissions[last - 1], right: submissions[last], form }) : /* @__PURE__ */ jsxRuntimeExports.jsx(SubmissionViewer, { submissions: [submissions[Number(activeId)]], form }, activeId)
  ] });
}
function MissingSchemaNote() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { variant: "warning", children: "The form used for this submission is no longer available. Field names may not display correctly." });
}
function relative(iso) {
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.round(diff / 6e4);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins} minute${mins === 1 ? "" : "s"} ago`;
  const hrs = Math.round(mins / 60);
  if (hrs < 24) return `${hrs} hour${hrs === 1 ? "" : "s"} ago`;
  const days = Math.round(hrs / 24);
  if (days < 30) return `${days} day${days === 1 ? "" : "s"} ago`;
  return new Date(iso).toLocaleDateString();
}
function CommentBubble({ comment, currentUserId, onEdit, onDelete }) {
  const [editing, setEditing] = reactExports.useState(false);
  const [draft, setDraft] = reactExports.useState(comment.content);
  const [error, setError] = reactExports.useState(null);
  const ref = reactExports.useRef(null);
  const isAuthor = comment.authorId === currentUserId;
  reactExports.useEffect(() => {
    if (editing) ref.current?.focus();
  }, [editing]);
  const save = () => {
    if (!draft.trim()) {
      setError("Comment cannot be empty");
      return;
    }
    setError(null);
    onEdit(comment, draft);
    setEditing(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "group rounded-md border border-[#E5E5E3] bg-white p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { name: comment.authorName, size: 32 }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-semibold text-[#0A0A0A]", children: comment.authorName }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] text-[#9CA3AF]", children: relative(comment.createdAt) }),
        comment.isEdited && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] text-[#9CA3AF]", children: "(edited)" }),
        isAuthor && !editing && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-auto flex gap-3 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "text-[12px] text-[#6B6B6B] hover:underline", onClick: () => {
            setDraft(comment.content);
            setEditing(true);
          }, children: "Edit" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "text-[12px] text-[#DC2626] hover:underline", onClick: () => onDelete(comment), children: "Delete" })
        ] })
      ] }),
      editing ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { ref, value: draft, onChange: (e) => setDraft(e.target.value), rows: 3, error: error ?? void 0 }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", onClick: save, children: "Save" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "secondary", onClick: () => {
            setEditing(false);
            setError(null);
          }, children: "Cancel" })
        ] })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[13px] text-[#0A0A0A] whitespace-pre-wrap break-words", children: comment.content })
    ] })
  ] }) });
}
function CommentInput({ onSend }) {
  const [value, setValue] = reactExports.useState("");
  const [error, setError] = reactExports.useState(null);
  const ref = reactExports.useRef(null);
  const grow = () => {
    const el = ref.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 160)}px`;
  };
  const send = async () => {
    if (!value.trim()) {
      setError("Comment cannot be empty");
      return;
    }
    setError(null);
    await onSend(value.trim());
    setValue("");
    if (ref.current) ref.current.style.height = "auto";
  };
  const onKeyDown = (e) => {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      void send();
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-[#E5E5E3] bg-white p-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "textarea",
      {
        ref,
        value,
        rows: 2,
        onChange: (e) => {
          setValue(e.target.value);
          setError(null);
          grow();
        },
        onKeyDown,
        placeholder: "Add an internal comment — not visible to the candidate",
        className: "w-full resize-none text-[13px] text-[#0A0A0A] placeholder:text-[#9CA3AF] outline-none"
      }
    ),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-[#DC2626]", children: error }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-[#9CA3AF]", children: "Ctrl + Enter to send" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", trailingIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 14 }), onClick: () => void send(), children: "Comment" })
    ] })
  ] });
}
function PipelineComments({ pipelineId, currentUserId, currentUserName, onCountChange }) {
  const [comments, setComments] = reactExports.useState([]);
  const [deleteTarget, setDeleteTarget] = reactExports.useState(null);
  const load = reactExports.useCallback(() => {
    const list = reviewApi.comments(pipelineId);
    setComments(list);
    onCountChange?.(list.length);
  }, [pipelineId, onCountChange]);
  reactExports.useEffect(() => {
    load();
  }, [load]);
  const actor = { id: currentUserId, name: currentUserName };
  const add = async (content) => {
    const r = await reviewApi.addComment(pipelineId, content, actor);
    if (r.error) {
      showToast(r.error.message, "error");
      return;
    }
    load();
  };
  const edit = async (comment, content) => {
    const r = await reviewApi.editComment(comment, content, actor);
    if (r.error) {
      showToast(r.error.message, "error");
      return;
    }
    showToast("Comment updated.", "success");
    load();
  };
  const remove = async (comment) => {
    await reviewApi.deleteComment(comment, actor);
    showToast("Comment deleted.", "success");
    load();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 max-w-3xl", children: [
    comments.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No comments yet", subtitle: "Use comments to discuss this candidate with your team." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: comments.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(CommentBubble, { comment: c, currentUserId, onEdit: edit, onDelete: setDeleteTarget }, c.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CommentInput, { onSend: add }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmDialog,
      {
        open: !!deleteTarget,
        onOpenChange: (o) => !o && setDeleteTarget(null),
        title: "Delete this comment?",
        description: "This cannot be undone.",
        confirmLabel: "Delete",
        variant: "danger",
        onConfirm: async () => {
          if (deleteTarget) await remove(deleteTarget);
        }
      }
    )
  ] });
}
function ReviewerAssignmentPanel({ pipelineId, onChanged }) {
  const [reviewers, setReviewers] = reactExports.useState([]);
  const [employees, setEmployees] = reactExports.useState([]);
  const [pick, setPick] = reactExports.useState("");
  const [busy, setBusy] = reactExports.useState(false);
  const load = reactExports.useCallback(() => setReviewers(reviewApi.reviewers(pipelineId)), [pipelineId]);
  reactExports.useEffect(() => {
    load();
    void listEmployees({}).then((r) => setEmployees(r.data ?? []));
  }, [load]);
  const options = reactExports.useMemo(() => {
    const taken = new Set(reviewers.map((r) => r.reviewerId));
    return employees.filter((e) => !taken.has(e.id)).map((e) => ({ value: e.id, label: `${e.firstName} ${e.lastName}` }));
  }, [employees, reviewers]);
  const assign = async () => {
    const emp = employees.find((e) => e.id === pick);
    if (!emp) return;
    setBusy(true);
    const r = await reviewApi.assignReviewer(pipelineId, { id: emp.id, name: `${emp.firstName} ${emp.lastName}` });
    setBusy(false);
    if (r.error) {
      showToast(r.error.message, "error");
      return;
    }
    showToast("Reviewer assigned.", "success");
    setPick("");
    load();
    onChanged?.();
  };
  const remove = async (a) => {
    await reviewApi.removeReviewer(a);
    showToast("Reviewer removed.", "success");
    load();
    onChanged?.();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[13px] font-semibold text-[#0A0A0A] mb-3", children: "Reviewers" }),
    reviewers.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#6B6B6B]", children: "No reviewers assigned yet." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: reviewers.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { name: r.reviewerName, size: 28 }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#0A0A0A] truncate", children: r.reviewerName }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-[#9CA3AF]", children: [
          "Assigned ",
          new Date(r.assignedAt).toLocaleDateString()
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PermissionGuard, { permission: "employees.edit", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "text-[12px] text-[#DC2626] hover:underline", onClick: () => void remove(r), children: "Remove" }) })
    ] }, r.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PermissionGuard, { permission: "employees.edit", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-4 border-t border-[#E5E5E3] flex items-end gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Select,
        {
          label: "Add reviewer",
          className: "flex-1",
          value: pick,
          onChange: (e) => setPick(e.target.value),
          options: [{ value: "", label: options.length ? "Select an employee" : "Everyone is already assigned" }, ...options]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", onClick: assign, disabled: !pick, loading: busy, children: "Assign" })
    ] }) })
  ] });
}
function CandidateScoring({ pipelineId }) {
  const user = authStore.useSelector((s) => s.user);
  const reviewerId = user?.id ?? "hr_admin";
  const reviewerName = user?.fullName ?? "HR Admin";
  const [scores, setScores] = reactExports.useState([]);
  const [value, setValue] = reactExports.useState(null);
  const [notes, setNotes] = reactExports.useState("");
  const [saving, setSaving] = reactExports.useState(false);
  const load = reactExports.useCallback(() => {
    const all = reviewApi.scores(pipelineId);
    setScores(all);
    const mine = all.find((s) => s.reviewerId === reviewerId);
    setValue(mine?.overallScore ?? null);
    setNotes(mine?.notes ?? "");
  }, [pipelineId, reviewerId]);
  reactExports.useEffect(() => {
    load();
  }, [load]);
  const save = async (score, note) => {
    setSaving(true);
    const r = await reviewApi.saveScore(pipelineId, score, note, { id: reviewerId, name: reviewerName });
    setSaving(false);
    if (r.error) {
      showToast(r.error.message, "error");
      return;
    }
    showToast("Rating saved.", "success");
    load();
  };
  const others = scores.filter((s) => s.reviewerId !== reviewerId);
  const avg = scores.length ? scores.reduce((a, s) => a + s.overallScore, 0) / scores.length : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[13px] font-semibold text-[#0A0A0A]", children: "Scoring" }),
      avg !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[12px] text-[#6B6B6B]", children: [
        "Team average ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-[#0A0A0A]", children: avg.toFixed(1) }),
        " (",
        scores.length,
        ")"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StarRating, { value, onChange: (v) => {
        setValue(v);
        void save(v, notes);
      }, size: "lg" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Textarea,
        {
          label: "Your notes",
          rows: 3,
          value: notes,
          onChange: (e) => setNotes(e.target.value),
          placeholder: "What stood out about this candidate?"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "secondary", loading: saving, disabled: !value, onClick: () => value && void save(value, notes), children: "Save notes" })
    ] }),
    others.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 pt-4 border-t border-[#E5E5E3] space-y-3", children: others.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#0A0A0A]", children: s.reviewerName }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StarRating, { value: s.overallScore, size: "sm", showValue: false })
      ] }),
      s.notes && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-[#6B6B6B] mt-0.5 whitespace-pre-wrap", children: s.notes })
    ] }, s.id)) })
  ] });
}
const ACTION_LABELS = {
  invited: "Invitation sent",
  invitation_resent: "Invitation resent",
  link_opened: "Magic link opened",
  form_submitted: "Application submitted",
  form_started: "Form started",
  draft_saved: "Draft saved",
  changes_requested: "Changes requested",
  link_expired: "Magic link expired",
  withdrawn: "Pipeline withdrawn",
  status_changed: "Status changed",
  comment_added: "Comment added",
  comment_edited: "Comment edited",
  comment_deleted: "Comment deleted",
  document_uploaded: "Document uploaded",
  document_verified: "Document verified",
  document_deleted: "Document deleted",
  reviewer_assigned: "Reviewer assigned",
  reviewer_removed: "Reviewer removed",
  score_added: "Score recorded",
  rejected: "Candidate rejected",
  converted: "Converted to employee"
};
function describe(entry) {
  const base = ACTION_LABELS[entry.action] ?? entry.action.replace(/_/g, " ");
  const d = entry.details ?? {};
  const extra = typeof d.label === "string" && d.label || typeof d.reviewerName === "string" && d.reviewerName || typeof d.reason === "string" && d.reason || typeof d.status === "string" && d.status || typeof d.score === "number" && `${d.score}/5` || "";
  return extra ? `${base} — ${extra}` : base;
}
function PipelineActivityLog({ pipelineId, refreshKey = 0 }) {
  const [filter, setFilter] = reactExports.useState("all");
  const entries = reactExports.useMemo(() => reviewApi.auditLog(pipelineId), [pipelineId, refreshKey]);
  const shown = entries.filter((e) => filter === "all" ? true : e.actorType === filter);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 max-w-3xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Select,
      {
        label: "Filter by actor",
        className: "max-w-[220px]",
        value: filter,
        onChange: (e) => setFilter(e.target.value),
        options: [
          { value: "all", label: "All activity" },
          { value: "hr", label: "HR actions" },
          { value: "candidate", label: "Candidate actions" },
          { value: "system", label: "System" }
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: shown.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No activity recorded", subtitle: "Actions on this pipeline will be logged here." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "relative pl-5", children: shown.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "relative pb-5 last:pb-0 border-l border-[#E5E5E3] pl-5 last:border-l-transparent", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: "absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full",
          style: { background: "var(--tenant-primary)" },
          "aria-hidden": true
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#0A0A0A]", children: describe(e) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[12px] text-[#9CA3AF]", children: [
        e.actorName,
        " · ",
        new Date(e.createdAt).toLocaleString()
      ] })
    ] }, e.id)) }) })
  ] });
}
function CandidateDetailPage() {
  const {
    candidateId
  } = useParams({
    from: "/_app/candidates/$candidateId"
  });
  const {
    tab
  } = useSearch({
    from: "/_app/candidates/$candidateId"
  });
  const navigate = useNavigate({
    from: "/_app/candidates/$candidateId"
  });
  const user = authStore.useSelector((s) => s.user);
  const [docCount, setDocCount] = reactExports.useState(0);
  const [commentCount, setCommentCount] = reactExports.useState(0);
  const [rejectOpen, setRejectOpen] = reactExports.useState(false);
  const [auditKey, setAuditKey] = reactExports.useState(0);
  const [candidate, setCandidate] = reactExports.useState(null);
  const [pipelines, setPipelines] = reactExports.useState([]);
  const [activePipelineId, setActivePipelineId] = reactExports.useState("");
  const [submissions, setSubmissions] = reactExports.useState([]);
  const [form, setForm] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const load = async () => {
    setLoading(true);
    const r = await candidatesApi.get(candidateId);
    if (r.data) {
      setCandidate(r.data.candidate);
      setPipelines(r.data.pipelines);
      setActivePipelineId((prev) => prev || r.data.pipelines[0]?.id || "");
    }
    setLoading(false);
  };
  reactExports.useEffect(() => {
    void load();
  }, [candidateId]);
  const pipeline = pipelines.find((p) => p.id === activePipelineId) ?? null;
  reactExports.useEffect(() => {
    if (!pipeline) {
      setSubmissions([]);
      setForm(null);
      return;
    }
    setSubmissions(candidatesApi.submissions(pipeline.id));
    if (pipeline.formId) {
      void formsApi.get(pipeline.formId).then((r) => setForm(r.data ?? null));
    } else {
      setForm(null);
    }
  }, [pipeline?.id]);
  const magicLink = pipeline ? candidatesApi.currentMagicLink(pipeline.id) : null;
  const resend = async () => {
    if (!pipeline) return;
    const r = await candidatesApi.resendInvitation(pipeline.id);
    if (r.data) {
      showToast(`New link: ${r.data.magicLinkUrl}`, "success");
      void load();
    }
  };
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 28 }) });
  }
  if (!candidate || !pipeline) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "Candidate not found", subtitle: "They may have been removed." });
  }
  const maskedLink = magicLink ? magicLink.url.replace(/token=([^&]{4}).+$/, "token=$1••••••") : null;
  const refreshAll = () => {
    setAuditKey((k) => k + 1);
    void load();
  };
  const overviewTab = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-[65%_35%] gap-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PipelineTimeline, { events: pipeline.events }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CandidateScoring, { pipelineId: pipeline.id })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[13px] font-semibold text-[#0A0A0A] mb-3", children: "Candidate info" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "space-y-2 text-[13px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Email", value: candidate.email }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Phone", value: candidate.phone ?? "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Role", value: pipeline.roleName ?? "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Invited by", value: pipeline.invitedBy }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Invited on", value: new Date(pipeline.invitedAt).toLocaleString() }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Form used", value: form ? `${form.title} (v${form.version})` : "—" }),
          pipeline.rejectionReasonLabel && /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Rejection reason", value: pipeline.rejectionReasonLabel })
        ] }),
        maskedLink && magicLink && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-4 border-t border-[#E5E5E3] space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold uppercase tracking-[0.08em] text-[#6B6B6B]", children: "Magic link" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] break-all text-[#0A0A0A]", children: maskedLink }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[12px] text-[#9CA3AF]", children: [
            "Expires ",
            new Date(magicLink.expiresAt).toLocaleString()
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "secondary", className: "mt-1", onClick: resend, children: "Resend" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ReviewerAssignmentPanel, { pipelineId: pipeline.id, onChanged: refreshAll }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(HRReviewPanel, { pipeline, onChanged: refreshAll })
    ] })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PermissionGuard, { permission: "employees.view_profile", fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] text-[#6B6B6B]", children: "You don't have permission to view this candidate." }), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumb, { items: [{
      label: "Candidates",
      to: "/candidates"
    }, {
      label: `${candidate.firstName} ${candidate.lastName}`
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-[28px] font-bold tracking-[-0.02em]", children: [
          candidate.firstName,
          " ",
          candidate.lastName
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CandidateStatusBadge, { status: pipeline.status })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        (pipeline.status === "invited" || pipeline.status === "expired") && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", size: "sm", onClick: resend, children: "Resend invitation" }),
        pipeline.status !== "rejected" && pipeline.status !== "converted" && pipeline.status !== "withdrawn" && /* @__PURE__ */ jsxRuntimeExports.jsx(PermissionGuard, { permission: "employees.edit", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "danger", size: "sm", onClick: () => setRejectOpen(true), children: "Reject" }) })
      ] })
    ] }),
    pipelines.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { label: "Pipeline", value: activePipelineId, onChange: (e) => setActivePipelineId(e.target.value), options: pipelines.map((p) => ({
      value: p.id,
      label: `${p.roleName ?? "Untitled role"} — invited ${new Date(p.invitedAt).toLocaleDateString()}`
    })) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Tabs, { activeTab: tab, onTabChange: (id) => void navigate({
      to: "/candidates/$candidateId",
      params: {
        candidateId
      },
      search: {
        tab: id
      },
      replace: true
    }), tabs: [{
      id: "overview",
      label: "Overview",
      content: overviewTab
    }, {
      id: "submission",
      label: "Submission",
      content: /* @__PURE__ */ jsxRuntimeExports.jsx(SubmissionHistory, { submissions, form })
    }, {
      id: "documents",
      label: "Documents",
      badge: docCount || void 0,
      content: /* @__PURE__ */ jsxRuntimeExports.jsx(DocumentVault, { pipelineId: pipeline.id, onCountChange: setDocCount })
    }, {
      id: "comments",
      label: "Comments",
      badge: commentCount || void 0,
      content: /* @__PURE__ */ jsxRuntimeExports.jsx(PipelineComments, { pipelineId: pipeline.id, currentUserId: user?.id ?? "hr_admin", currentUserName: user?.fullName ?? "HR Admin", onCountChange: setCommentCount })
    }, {
      id: "activity",
      label: "Activity",
      content: /* @__PURE__ */ jsxRuntimeExports.jsx(PipelineActivityLog, { pipelineId: pipeline.id, refreshKey: auditKey })
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RejectionDialog, { open: rejectOpen, onClose: () => setRejectOpen(false), pipelineIds: [pipeline.id], onDone: () => {
      showToast("Candidate rejected.", "success");
      void load();
    } })
  ] }) });
}
function Row({
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-[#6B6B6B]", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "text-[#0A0A0A] text-right", children: value })
  ] });
}
export {
  CandidateDetailPage as component
};
