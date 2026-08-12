import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as Select } from "./Select-CDtKs7RG.mjs";
import { E as EmptyState } from "./EmptyState-Cs_2WXRJ.mjs";
import { P as PermissionGuard } from "./PermissionGuard-DrHCZdH7.mjs";
import { l as listAttendanceRiskFlags, d as dismissRiskFlag } from "./ai-p4aGx585.mjs";
import { A as AiBadge } from "./AiBadge-CuHhawHL.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { B as Button } from "./Button-CFBbQAsZ.mjs";
import { T as Textarea } from "./Textarea-DsONP0BR.mjs";
import { B as Badge } from "./Badge-DOnZHL7Z.mjs";
const RISK_LABELS = {
  chronic_lateness: "Chronic Lateness",
  rising_absenteeism: "Rising Absenteeism",
  possible_burnout: "Possible Burnout",
  irregular_pattern: "Irregular Pattern"
};
const RISK_STYLES = {
  chronic_lateness: "border border-[#F59E0B] text-[#B45309] bg-transparent",
  rising_absenteeism: "border border-[#F59E0B] text-[#B45309] bg-transparent",
  possible_burnout: "border border-[#60A5FA] text-[#1D4ED8] bg-transparent",
  irregular_pattern: "border border-[#9CA3AF] text-[#3F3F46] bg-transparent"
};
function RiskEmployeeRow({ flag, onDismiss, dismissed }) {
  const [dismissing, setDismissing] = reactExports.useState(false);
  const [reason, setReason] = reactExports.useState("");
  const [busy, setBusy] = reactExports.useState(false);
  const valid = reason.trim().length >= 10;
  const submit = async () => {
    if (!valid) return;
    setBusy(true);
    await onDismiss(flag.id, reason.trim());
    setBusy(false);
    setDismissing(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-[#E5E5E3] bg-white p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[14px] font-medium text-[#0A0A0A]", children: [
          flag.employee.firstName,
          " ",
          flag.employee.lastName
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[13px] text-[#6B6B6B] leading-relaxed", children: flag.rationale }),
        dismissed && flag.dismissedReason && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-[12px] text-[#6B6B6B]", children: [
          "Dismissed: ",
          flag.dismissedReason
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "default", className: RISK_STYLES[flag.riskType], children: RISK_LABELS[flag.riskType] })
    ] }),
    !dismissed && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/employees/$employeeId",
          params: { employeeId: flag.employeeId },
          className: "text-[13px] font-medium text-[var(--tenant-primary)] hover:underline",
          children: "View attendance →"
        }
      ),
      !dismissing && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setDismissing(true), className: "text-[13px] text-[#6B6B6B] hover:text-[#0A0A0A]", children: "Dismiss" })
    ] }),
    dismissing && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Textarea,
        {
          label: "Why are you dismissing this?",
          placeholder: "Explain briefly (min. 10 characters)…",
          value: reason,
          onChange: (e) => setReason(e.target.value)
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "secondary", disabled: !valid, loading: busy, onClick: submit, children: "Confirm dismiss" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", onClick: () => {
          setDismissing(false);
          setReason("");
        }, children: "Cancel" })
      ] })
    ] })
  ] });
}
function AttendanceRiskSection({ employeeIds, departmentOptions, getDepartmentId }) {
  const [flags, setFlags] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [showDismissed, setShowDismissed] = reactExports.useState(false);
  const [department, setDepartment] = reactExports.useState("");
  const load = () => {
    setLoading(true);
    void listAttendanceRiskFlags().then((r) => {
      setFlags(r.data ?? []);
      setLoading(false);
    });
  };
  reactExports.useEffect(load, []);
  const handleDismiss = async (id, reason) => {
    const r = await dismissRiskFlag(id, reason);
    if (r.data) setFlags(r.data);
  };
  let scoped = flags;
  if (employeeIds) scoped = scoped.filter((f) => employeeIds.includes(f.employeeId));
  if (department && getDepartmentId) scoped = scoped.filter((f) => getDepartmentId(f.employeeId) === department);
  const open = scoped.filter((f) => f.status !== "dismissed");
  const dismissed = scoped.filter((f) => f.status === "dismissed");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PermissionGuard, { permission: "ai.review_anomalies", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-[#E5E5E3] bg-white p-4 space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[12px] font-semibold uppercase tracking-[0.08em] text-[#6B6B6B]", children: "AI-detected attendance signals" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AiBadge, {})
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: load, className: "text-[13px] text-[#6B6B6B] hover:text-[#0A0A0A]", children: "Refresh analysis ↻" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-[#6B6B6B]", children: "These are signals worth a conversation, not conclusions. Use your judgement." }),
    departmentOptions && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Select,
      {
        label: "Department",
        placeholder: "All departments",
        options: departmentOptions,
        value: department,
        onChange: (e) => setDepartment(e.target.value)
      }
    ) }),
    loading ? null : open.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No risk signals detected", subtitle: "Nothing stands out for the current selection." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: open.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(RiskEmployeeRow, { flag: f, onDismiss: handleDismiss }, f.id)) }),
    dismissed.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 border-t border-[#E5E5E3]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => setShowDismissed((v) => !v),
          className: "text-[13px] text-[#6B6B6B] hover:text-[#0A0A0A]",
          children: [
            showDismissed ? "Hide" : "Show",
            " dismissed (",
            dismissed.length,
            ")"
          ]
        }
      ),
      showDismissed && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 space-y-3", children: dismissed.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(RiskEmployeeRow, { flag: f, onDismiss: handleDismiss, dismissed: true }, f.id)) })
    ] })
  ] }) });
}
export {
  AttendanceRiskSection as A
};
