import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { f as useParams, L as Link } from "./_libs/tanstack__react-router.mjs";
import { P as PageHeader } from "./_ssr/PageHeader-CpfbD_86.mjs";
import { B as Button } from "./_ssr/Button-Crtgy6Xx.mjs";
import { B as Badge } from "./_ssr/Badge-Cm1DzmgP.mjs";
import { S as Spinner, m as monthLabel, j as formatCurrency, p as payrollApi, ae as downloadTextFile } from "./_ssr/router-Arl77cRa.mjs";
import { E as EmptyState } from "./_ssr/EmptyState-DCYWhDnT.mjs";
import { C as ConfirmDialog } from "./_ssr/ConfirmDialog-C1NdmGJ3.mjs";
import { D as DataTable } from "./_ssr/DataTable-ChSCAfLO.mjs";
import { s as showToast } from "./_ssr/Toast-DlQQlIf6.mjs";
import { P as PermissionGuard } from "./_ssr/PermissionGuard-DHUddp2f.mjs";
import { P as PayrollRunStatusBadge } from "./_ssr/PayrollRunStatusBadge-f0P7zrg0.mjs";
import { C as Card } from "./_ssr/Card-Dnu0IoXY.mjs";
import { A as Alert } from "./_ssr/Alert-DIhou9mC.mjs";
import { I as Input } from "./_ssr/Input-CHeJoRlX.mjs";
import { T as Textarea } from "./_ssr/Textarea-DXR3KTuM.mjs";
import { S as SlideOver } from "./_ssr/SlideOver-DXNNm8Us.mjs";
import { C as CurrencyInput } from "./_ssr/CurrencyInput-iJIPpSaU.mjs";
import { b as listPayrollAnomalies, c as dismissAnomaly } from "./_ssr/ai-wwVHtzhQ.mjs";
import { A as AiBadge } from "./_ssr/AiBadge-BWGWOCRE.mjs";
import { a as authStore } from "./_ssr/auth-CjdYhZTR.mjs";

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
import "./_ssr/Modal-BWxmma2i.mjs";
import "./_ssr/usePermission-C7-ELJsH.mjs";
import "./_ssr/rbac-CiXrabhS.mjs";
import "./_ssr/rbac-CHd75bNv.mjs";
function AnomalyCard({ anomaly, onDismiss, dismissed }) {
  const [dismissing, setDismissing] = reactExports.useState(false);
  const [reason, setReason] = reactExports.useState("");
  const [busy, setBusy] = reactExports.useState(false);
  const valid = reason.trim().length >= 10;
  const submit = async () => {
    if (!valid) return;
    setBusy(true);
    await onDismiss(anomaly.id, reason.trim());
    setBusy(false);
    setDismissing(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-[#E5E5E3] bg-white p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[14px] font-medium text-[#0A0A0A]", children: [
          anomaly.employee.firstName,
          " ",
          anomaly.employee.lastName,
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[12px] text-[#6B6B6B] font-normal", children: [
            " · ",
            anomaly.anomalyType
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[13px] text-[#6B6B6B] leading-relaxed", children: anomaly.explanation }),
        dismissed && anomaly.dismissedReason && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-[12px] text-[#6B6B6B]", children: [
          "Dismissed: ",
          anomaly.dismissedReason
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "default", className: anomaly.confidence === "high" ? "border border-[#9CA3AF] text-[#3F3F46]" : "border border-[#F59E0B] text-[#B45309] bg-transparent", children: anomaly.confidence === "high" ? "High confidence" : "Medium confidence" })
    ] }),
    !dismissed && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/employees/$employeeId",
          params: { employeeId: anomaly.employeeId },
          className: "text-[13px] font-medium text-[var(--tenant-primary)] hover:underline",
          children: "View employee →"
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
          onChange: (e) => setReason(e.target.value),
          hint: "This note is kept for reference; the anomaly is not deleted."
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
function PayrollAnomalySection({ runId }) {
  const [anomalies, setAnomalies] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [showDismissed, setShowDismissed] = reactExports.useState(false);
  const load = () => {
    setLoading(true);
    void listPayrollAnomalies(runId).then((r) => {
      setAnomalies(r.data ?? []);
      setLoading(false);
    });
  };
  reactExports.useEffect(load, [runId]);
  const handleDismiss = async (id, reason) => {
    const r = await dismissAnomaly(id, reason);
    if (r.data) setAnomalies(r.data.filter((a) => a.runId === runId || runId === "run_current"));
  };
  const open = anomalies.filter((a) => a.status !== "dismissed");
  const dismissed = anomalies.filter((a) => a.status === "dismissed");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PermissionGuard, { permission: "ai.review_anomalies", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-[#E5E5E3] bg-white p-4 space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[12px] font-semibold uppercase tracking-[0.08em] text-[#6B6B6B]", children: "AI-detected anomalies" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AiBadge, {})
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: load, className: "text-[13px] text-[#6B6B6B] hover:text-[#0A0A0A]", children: "Refresh analysis ↻" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-[#6B6B6B]", children: "These are signals for a human to review — they do not block payroll processing." }),
    loading ? null : open.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No anomalies detected", subtitle: "This run looks consistent with prior history." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: open.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx(AnomalyCard, { anomaly: a, onDismiss: handleDismiss }, a.id)) }),
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
      showDismissed && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 space-y-3", children: dismissed.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx(AnomalyCard, { anomaly: a, onDismiss: handleDismiss, dismissed: true }, a.id)) })
    ] })
  ] }) });
}
const variantOf = { error: "error", warning: "warning", info: "info" };
function ValidationIssuesPanel({ issues }) {
  if (issues.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { variant: "success", title: "No validation issues", children: "Every entry in this run passed all pre-run checks." }) });
  }
  const errors = issues.filter((i) => i.severity === "error");
  const warnings = issues.filter((i) => i.severity === "warning");
  const infos = issues.filter((i) => i.severity === "info");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "space-y-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-[15px] font-semibold text-[#0A0A0A] mb-1", children: [
      "Validation (",
      errors.length,
      " error",
      errors.length === 1 ? "" : "s",
      ", ",
      warnings.length,
      " warning",
      warnings.length === 1 ? "" : "s",
      ")"
    ] }),
    [...errors, ...warnings, ...infos].map((issue, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { variant: variantOf[issue.severity], children: issue.message }, i))
  ] });
}
function AdjustEntrySlideOver({ open, entry, onClose, onSave }) {
  const [earnings, setEarnings] = reactExports.useState([]);
  const [deductions, setDeductions] = reactExports.useState([]);
  const [lopDays, setLopDays] = reactExports.useState(0);
  const [notes, setNotes] = reactExports.useState("");
  const [saving, setSaving] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (open && entry) {
      setEarnings(entry.earnings);
      setDeductions(entry.deductions);
      setLopDays(entry.lopDays);
      setNotes("");
    }
  }, [open, entry]);
  if (!entry) return null;
  const setEarningAmount = (idx, amount) => {
    setEarnings((prev) => prev.map((l, i) => i === idx ? { ...l, amount: amount ?? 0, isManualOverride: true } : l));
  };
  const setDeductionAmount = (idx, amount) => {
    setDeductions((prev) => prev.map((l, i) => i === idx ? { ...l, amount: amount ?? 0, isManualOverride: true } : l));
  };
  const grossEarnings = earnings.reduce((n, l) => n + l.amount, 0);
  const totalDeductions = deductions.reduce((n, l) => n + l.amount, 0);
  const netPay = grossEarnings - totalDeductions;
  const submit = async () => {
    if (!notes.trim()) return;
    setSaving(true);
    try {
      await onSave({ earnings, deductions, lopDays, notes: notes.trim() });
      onClose();
    } finally {
      setSaving(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    SlideOver,
    {
      open,
      onClose,
      width: "md",
      title: `Adjust — ${entry.employeeName}`,
      description: `${entry.employeeCode} · ${entry.structureName}`,
      footer: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: onClose, disabled: saving, children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", onClick: submit, loading: saving, disabled: !notes.trim(), children: "Save adjustment" })
      ] }),
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            label: "LOP days",
            type: "number",
            value: String(lopDays),
            onChange: (e) => setLopDays(Math.max(0, Number(e.target.value)))
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#6B6B6B]", children: "Earnings" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: earnings.map((l, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(CurrencyInput, { label: l.componentName, value: l.amount, onChange: (v) => setEarningAmount(i, v), min: 0 }, l.componentId)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#6B6B6B]", children: "Deductions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: deductions.map((l, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(CurrencyInput, { label: l.componentName, value: l.amount, onChange: (v) => setDeductionAmount(i, v), min: 0 }, l.componentId)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-[#E5E5E3] p-3 text-[13px] flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#6B6B6B]", children: "Recalculated net pay" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold tabular-nums", children: formatCurrency(netPay) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { label: "Reason for adjustment (required)", rows: 3, value: notes, onChange: (e) => setNotes(e.target.value) })
      ] })
    }
  );
}
function PayrollRunDetailPage() {
  const {
    runId
  } = useParams({
    from: "/_app/payroll/runs/$runId"
  });
  const user = authStore.useSelector((s) => s.user);
  const actor = user?.fullName ?? "You";
  const [loading, setLoading] = reactExports.useState(true);
  const [run, setRun] = reactExports.useState(null);
  const [entries, setEntries] = reactExports.useState([]);
  const [adjustEntry, setAdjustEntry] = reactExports.useState(null);
  const [busy, setBusy] = reactExports.useState(false);
  const [cancelOpen, setCancelOpen] = reactExports.useState(false);
  const reload = () => {
    setLoading(true);
    void Promise.all([payrollApi.getRun(runId), payrollApi.listEntries(runId)]).then(([r, e]) => {
      setRun(r.data ?? null);
      setEntries(e.data ?? []);
      setLoading(false);
    });
  };
  reactExports.useEffect(reload, [runId]);
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 28 }) });
  if (!run) return /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "Payroll run not found" });
  const moveToReview = async () => {
    setBusy(true);
    const res = await payrollApi.setRunStatus(runId, "in_review", actor);
    setBusy(false);
    if (res.error) return showToast(res.error.message, "error");
    showToast("Run moved to review.", "success");
    reload();
  };
  const approveAndFinalise = async () => {
    setBusy(true);
    const res = await payrollApi.finaliseRun(runId, actor);
    setBusy(false);
    if (res.error) return showToast(res.error.message, "error");
    showToast(`Finalised — ${res.data?.payslips ?? 0} pay slips generated.`, "success");
    reload();
  };
  const markPaid = async () => {
    setBusy(true);
    const res = await payrollApi.setRunStatus(runId, "paid", actor);
    setBusy(false);
    if (res.error) return showToast(res.error.message, "error");
    showToast("Payroll run marked as paid.", "success");
    reload();
  };
  const cancelRun = async () => {
    const res = await payrollApi.setRunStatus(runId, "cancelled", actor);
    if (res.error) return showToast(res.error.message, "error");
    showToast("Payroll run cancelled.", "info");
    reload();
  };
  const exportBankFile = async () => {
    const res = await payrollApi.bankFile(runId);
    if (res.error || !res.data) return showToast(res.error?.message ?? "Could not generate bank file.", "error");
    downloadTextFile(`NEFT-${monthLabel(run.month, run.year).replace(" ", "-")}.csv`, res.data.csv);
    showToast(`NEFT file downloaded — ${res.data.included} included, ${res.data.excluded} excluded.`, "success");
  };
  const exportStatutory = async (kind) => {
    const res = await payrollApi.statutoryRegister(runId, kind);
    if (res.error || !res.data) return showToast(res.error?.message ?? "Could not generate register.", "error");
    downloadTextFile(`${kind.toUpperCase()}-Register-${monthLabel(run.month, run.year).replace(" ", "-")}.csv`, res.data);
    showToast(`${kind.toUpperCase()} statutory register downloaded.`, "success");
  };
  const saveAdjustment = async (patch) => {
    if (!adjustEntry) return;
    const res = await payrollApi.updateEntry(adjustEntry.id, patch);
    if (res.error) {
      showToast(res.error.message, "error");
      return;
    }
    showToast("Entry adjusted.", "success");
    reload();
  };
  const columns = [{
    key: "employee",
    label: "Employee",
    render: (e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: e.employeeName }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[12px] text-[#6B6B6B]", children: [
        e.employeeCode,
        " · ",
        e.structureName
      ] })
    ] })
  }, {
    key: "lopDays",
    label: "LOP days",
    align: "right",
    render: (e) => e.lopDays
  }, {
    key: "grossEarnings",
    label: "Gross",
    align: "right",
    render: (e) => formatCurrency(e.grossEarnings)
  }, {
    key: "totalDeductions",
    label: "Deductions",
    align: "right",
    render: (e) => formatCurrency(e.totalDeductions)
  }, {
    key: "netPay",
    label: "Net pay",
    align: "right",
    render: (e) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: formatCurrency(e.netPay) })
  }, {
    key: "flags",
    label: "Flags",
    render: (e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1", children: [
      e.isManuallyEdited && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "warning", children: "Edited" }),
      e.flags.includes("prorated") && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { children: "Prorated" }),
      e.flags.includes("final_settlement") && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "danger", children: "Exit" })
    ] })
  }, {
    key: "actions",
    label: "",
    align: "right",
    render: (e) => /* @__PURE__ */ jsxRuntimeExports.jsx(PermissionGuard, { permission: "payroll.run", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", disabled: run.status !== "draft" && run.status !== "in_review", onClick: () => setAdjustEntry(e), children: "Adjust" }) })
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: `Payroll run — ${monthLabel(run.month, run.year)}`, description: `Initiated by ${run.initiatedBy} on ${new Date(run.initiatedAt).toLocaleDateString()}.`, actions: /* @__PURE__ */ jsxRuntimeExports.jsx(PayrollRunStatusBadge, { status: run.status }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-4 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-[#E5E5E3] bg-white p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold uppercase tracking-[0.08em] text-[#6B6B6B]", children: "Employees" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[22px] font-bold", children: run.employeeCount })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-[#E5E5E3] bg-white p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold uppercase tracking-[0.08em] text-[#6B6B6B]", children: "Gross" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[22px] font-bold", children: formatCurrency(run.totalGross) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-[#E5E5E3] bg-white p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold uppercase tracking-[0.08em] text-[#6B6B6B]", children: "Deductions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[22px] font-bold", children: formatCurrency(run.totalDeductions) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-[#E5E5E3] bg-white p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold uppercase tracking-[0.08em] text-[#6B6B6B]", children: "Net pay" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[22px] font-bold", children: formatCurrency(run.totalNetPay) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PermissionGuard, { permission: "payroll.run", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
      run.status === "draft" && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", onClick: moveToReview, loading: busy, children: "Move to review" }),
      run.status === "in_review" && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", onClick: approveAndFinalise, loading: busy, children: "Approve & finalise" }),
      run.status === "finalised" && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", onClick: markPaid, loading: busy, children: "Mark as paid" }),
      (run.status === "draft" || run.status === "in_review") && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", className: "text-[#DC2626]", onClick: () => setCancelOpen(true), children: "Cancel run" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-px h-6 bg-[#E5E5E3]", "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: exportBankFile, children: "Export NEFT bank file" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: () => exportStatutory("pf"), children: "PF register" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: () => exportStatutory("esi"), children: "ESI register" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ValidationIssuesPanel, { issues: run.validationIssues }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PayrollAnomalySection, { runId }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DataTable, { columns, data: entries, getRowKey: (e) => e.id, emptyState: /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No entries in this run" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AdjustEntrySlideOver, { open: !!adjustEntry, entry: adjustEntry, onClose: () => setAdjustEntry(null), onSave: saveAdjustment }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ConfirmDialog, { open: cancelOpen, onOpenChange: setCancelOpen, title: "Cancel this payroll run?", description: "Employees will not be paid from this run. This action cannot be undone.", confirmLabel: "Cancel run", variant: "danger", onConfirm: cancelRun }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/payroll/runs", className: "text-[13px] text-[#6B6B6B] hover:text-[#0A0A0A]", children: "← Back to payroll runs" }) })
  ] });
}
export {
  PayrollRunDetailPage as component
};
