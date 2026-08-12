import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as cn } from "./router-CPP24NZe.mjs";
import { R as REJECTION_CATEGORY_LABELS, C as CANDIDATE_STATUS_LABELS } from "./candidate-CM1ucsTB.mjs";
import { B as Button } from "./Button-CFBbQAsZ.mjs";
import { I as Input } from "./Input-BJe__i93.mjs";
import { T as Textarea } from "./Textarea-DsONP0BR.mjs";
import { M as Modal } from "./Modal-G0zeYD84.mjs";
import { A as Alert } from "./Alert-COamyPgG.mjs";
import { R as RadioGroup } from "./RadioGroup-CC5uRvq5.mjs";
import { r as reviewApi } from "./candidates-DAX-Qu8a.mjs";
const styles = {
  invited: "bg-[#F2F2F0] text-[#6B6B6B]",
  portal_opened: "bg-white text-[#1E3A8A] border border-[#BFDBFE]",
  form_in_progress: "bg-[#DBEAFE] text-[#1E3A8A]",
  submitted: "bg-[#FEF3C7] text-[#92400E]",
  changes_requested: "bg-[#FEF3C7] text-[#92400E]",
  resubmitting: "bg-[#FEF3C7] text-[#92400E]",
  approved: "bg-white text-[#166534] border border-[#BBF7D0]",
  offer_pending: "bg-[#CCFBF1] text-[#115E59]",
  offer_sent: "bg-[#CCFBF1] text-[#115E59]",
  candidate_signed: "bg-[#CCFBF1] text-[#115E59]",
  offer_rejected: "bg-[#FEE2E2] text-[#991B1B]",
  countersigned: "bg-[#CCFBF1] text-[#115E59]",
  onboarding: "bg-[#DCFCE7] text-[#166534]",
  converting: "bg-[#DCFCE7] text-[#166534]",
  converted: "bg-[#DCFCE7] text-[#166534]",
  rejected: "bg-[#FEE2E2] text-[#991B1B]",
  withdrawn: "bg-[#F2F2F0] text-[#6B6B6B]",
  expired: "bg-white text-[#991B1B] border border-[#FECACA]"
};
function CandidateStatusBadge({ status, size = "md", className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: cn(
        "inline-flex items-center rounded-full font-medium whitespace-nowrap",
        size === "sm" ? "px-2 py-0.5 text-[11px]" : "px-2.5 py-1 text-[12px]",
        styles[status],
        className
      ),
      children: CANDIDATE_STATUS_LABELS[status]
    }
  );
}
const OTHER = "__other__";
function RejectionDialog({ open, onClose, pipelineIds, onDone }) {
  const [reasons, setReasons] = reactExports.useState([]);
  const [selected, setSelected] = reactExports.useState("");
  const [custom, setCustom] = reactExports.useState("");
  const [notes, setNotes] = reactExports.useState("");
  const [busy, setBusy] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (!open) return;
    setReasons(reviewApi.rejectionReasons().filter((r) => r.isActive));
    setSelected("");
    setCustom("");
    setNotes("");
    setError(null);
  }, [open]);
  const options = reactExports.useMemo(
    () => [
      ...reasons.map((r) => ({ value: r.id, label: `${r.label} · ${REJECTION_CATEGORY_LABELS[r.category]}` })),
      { value: OTHER, label: "Other (write your own)" }
    ],
    [reasons]
  );
  const many = pipelineIds.length > 1;
  const confirm = async () => {
    const chosen = reasons.find((r) => r.id === selected);
    const label = selected === OTHER ? custom.trim() : chosen?.label;
    if (!label) {
      setError(selected === OTHER ? "Write the reason for rejection." : "Pick a rejection reason.");
      return;
    }
    setError(null);
    setBusy(true);
    const reason = { id: selected === OTHER ? void 0 : chosen?.id, label };
    if (many) {
      const r = await reviewApi.bulkReject(pipelineIds, reason, notes || void 0);
      setBusy(false);
      onDone(r.data ?? void 0);
    } else {
      const r = await reviewApi.rejectWithReason(pipelineIds[0], reason, notes || void 0);
      setBusy(false);
      if (r.error) {
        setError(r.error.message);
        return;
      }
      onDone();
    }
    onClose();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal, { open, onClose, title: many ? `Reject ${pipelineIds.length} candidates` : "Reject candidate", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      error && /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { variant: "error", children: error }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#6B6B6B]", children: "The reason is recorded on the hiring pipeline. Internal notes are never shared with the candidate." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-1.5 text-[13px] font-medium text-[#0A0A0A]", children: "Reason" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroup, { options, value: selected, onChange: setSelected })
      ] }),
      selected === OTHER && /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Custom reason", required: true, value: custom, onChange: (e) => setCustom(e.target.value), placeholder: "Reason for rejection" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { label: "Internal notes (optional)", rows: 3, value: notes, onChange: (e) => setNotes(e.target.value) }),
      many && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-[#9CA3AF]", children: "Candidates already hired or rejected will be skipped." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex justify-end gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: onClose, children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "danger", loading: busy, onClick: confirm, children: many ? "Reject candidates" : "Reject candidate" })
    ] })
  ] });
}
export {
  CandidateStatusBadge as C,
  RejectionDialog as R
};
