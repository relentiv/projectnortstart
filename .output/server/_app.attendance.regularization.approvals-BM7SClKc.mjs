import { j as jsxRuntimeExports, r as reactExports } from "./_libs/react.mjs";
import { B as Button } from "./_ssr/Button-CFBbQAsZ.mjs";
import { T as Textarea } from "./_ssr/Textarea-DsONP0BR.mjs";
import { M as Modal } from "./_ssr/Modal-G0zeYD84.mjs";
import { S as Spinner, a as attendanceApi } from "./_ssr/router-CPP24NZe.mjs";
import { A as Alert } from "./_ssr/Alert-COamyPgG.mjs";
import { S as StatCard } from "./_ssr/StatCard-D4dqMa3u.mjs";
import { E as EmptyState } from "./_ssr/EmptyState-Cs_2WXRJ.mjs";
import { D as DataTable } from "./_ssr/DataTable-DBeYYWhW.mjs";
import { s as showToast } from "./_ssr/Toast-DgpI28ao.mjs";
import { R as RegularizationStatusBadge } from "./_ssr/RegularizationStatusBadge-Ds6vgAN8.mjs";
import { P as PermissionGuard } from "./_ssr/PermissionGuard-DrHCZdH7.mjs";
import { u as useCurrentEmployee } from "./_ssr/useCurrentEmployee-s2MqyCVo.mjs";
import { R as REGULARIZATION_TYPE_LABELS } from "./_ssr/attendance-DW5Ch_bj.mjs";
import { C as Clock, y as UserCheck, aj as ShieldAlert, aq as SquareCheckBig, X, z as Check } from "./_libs/lucide-react.mjs";

import "./_libs/tanstack__query-core.mjs";
import "./_libs/tanstack__react-query.mjs";
import "./_libs/tanstack__react-router.mjs";
import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval.mjs";
import "./_libs/unenv.mjs";


import "./_libs/seroval-plugins.mjs";


import "./_libs/react-dom.mjs";
import "./_libs/isbot.mjs";
import "./_libs/clsx.mjs";
import "./_libs/tailwind-merge.mjs";
import "./_libs/zod.mjs";
import "./_ssr/Badge-DOnZHL7Z.mjs";
import "./_ssr/usePermission-DoLX-EvC.mjs";
import "./_ssr/rbac-BwLVdIYU.mjs";
import "./_ssr/rbac-Ci1w5KuA.mjs";
import "./_ssr/auth-BAvMo5G5.mjs";
function ApprovalsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PermissionGuard, { permission: ["attendance.manage", "attendance.view_team"], fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { variant: "error", children: "You don't have access to regularization approvals." }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Approvals, {}) });
}
function Approvals() {
  const {
    employee,
    loading: loadingMe
  } = useCurrentEmployee();
  const [list, setList] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [target, setTarget] = reactExports.useState(null);
  const [comment, setComment] = reactExports.useState("");
  const [busy, setBusy] = reactExports.useState(false);
  const load = async (managerId) => {
    setLoading(true);
    const res = await attendanceApi.listRegularizations({
      managerId,
      statuses: ["pending"]
    });
    setList(res.data ?? []);
    setLoading(false);
  };
  reactExports.useEffect(() => {
    if (employee) void load(employee.id);
  }, [employee?.id]);
  const act = async () => {
    if (!target || !employee) return;
    if (target.action === "rejected" && comment.trim().length === 0) {
      showToast("A comment is required when rejecting.", "error");
      return;
    }
    setBusy(true);
    const res = await attendanceApi.actOnRegularization({
      id: target.req.id,
      action: target.action,
      reviewer: `${employee.firstName} ${employee.lastName}`,
      comment
    });
    setBusy(false);
    if (res.error) return showToast(res.error.message, "error");
    showToast(target.action === "approved" ? "Request approved" : "Request rejected", "success");
    setTarget(null);
    setComment("");
    void load(employee.id);
  };
  const columns = [{
    key: "employeeName",
    label: "Employee",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full bg-[#111111] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs", children: r.employeeName.charAt(0) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-bold text-[#0A0A0A] leading-tight", children: r.employeeName }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-[#8E8E8E]", children: "Reportee" })
      ] })
    ] })
  }, {
    key: "date",
    label: "Date",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-[#0A0A0A] tabular-nums", children: r.date })
  }, {
    key: "type",
    label: "Correction Type",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#0A0A0A] px-2.5 py-1 rounded-full bg-[#FAFAF9] border border-[#E5E5E3]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-orange-500" }),
      REGULARIZATION_TYPE_LABELS[r.type]
    ] })
  }, {
    key: "requestedClockIn",
    label: "Requested Punch Range",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "tabular-nums font-semibold text-[#0A0A0A] text-[12px] bg-neutral-100 px-2 py-0.5 rounded border border-neutral-200", children: [
      r.requestedClockIn ?? "—",
      " → ",
      r.requestedClockOut ?? "—"
    ] })
  }, {
    key: "reason",
    label: "Reason",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] text-[#6B6B6B] line-clamp-2 max-w-xs block", title: r.reason, children: r.reason })
  }, {
    key: "status",
    label: "Status",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsx(RegularizationStatusBadge, { status: r.status })
  }, {
    key: "actions",
    label: "",
    align: "right",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "secondary", onClick: () => setTarget({
        req: r,
        action: "rejected"
      }), className: "text-rose-600 border-rose-200 hover:bg-rose-50 gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3.5 h-3.5" }),
        "Reject"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", onClick: () => setTarget({
        req: r,
        action: "approved"
      }), className: "gap-1 bg-[#0A0A0A] hover:bg-neutral-800 text-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3.5 h-3.5" }),
        "Approve"
      ] })
    ] })
  }];
  if (loadingMe) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center items-center py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 32 }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 sm:space-y-7", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Pending Queue", value: String(list.length), variant: list.length > 0 ? "dark" : "default", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4" }), trend: list.length > 0 ? "Action required" : "Queue empty", trendDir: list.length > 0 ? "down" : "up", actionHint: true, children: list.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block w-2 h-2 rounded-full bg-orange-500 animate-ping" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-medium text-neutral-300", children: "Requires manager review" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Average Response Time", value: "< 24 hrs", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(UserCheck, { className: "w-4 h-4 text-emerald-600" }), trend: "SLA compliant", trendDir: "up" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Approval Policy", value: "Manager 1-Step", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "w-4 h-4 text-orange-500" }), trend: "Standard rule", trendDir: "neutral" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-[#E5E5E3] bg-white shadow-xs overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 py-4 border-b border-[#F2F2F0] flex items-center justify-between bg-[#FAFAF9]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SquareCheckBig, { className: "w-4 h-4 text-orange-500" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[15px] font-extrabold text-[#0A0A0A] tracking-tight", children: "Pending Regularization Queue" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded-full text-[11px] font-bold bg-[#E5E5E3] text-[#0A0A0A]", children: list.length })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DataTable, { columns, data: list, loading, getRowKey: (r) => r.id, emptyState: /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No pending requests.", subtitle: "Regularization requests from your direct reports will show up here for review." }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Modal, { open: !!target, onClose: () => setTarget(null), title: target?.action === "approved" ? "Approve Regularization Request" : "Reject Regularization Request", className: "max-w-md", children: target && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-2xl bg-[#FAFAF9] border border-[#E5E5E3] space-y-2 text-[13px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center pb-2 border-b border-[#E5E5E3]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-extrabold text-[#0A0A0A]", children: target.req.employeeName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-orange-600 text-[11px] px-2 py-0.5 rounded-full bg-orange-50 border border-orange-200", children: REGULARIZATION_TYPE_LABELS[target.req.type] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[#6B6B6B]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Target Date:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-[#0A0A0A] tabular-nums", children: target.req.date })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[#6B6B6B]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Requested Punch Range:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-[#0A0A0A] tabular-nums", children: [
            target.req.requestedClockIn ?? "—",
            " to ",
            target.req.requestedClockOut ?? "—"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 border-t border-[#E5E5E3]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-[#8E8E8E] text-[10px] uppercase block mb-0.5", children: "Reason" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#0A0A0A] italic", children: target.req.reason })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { label: target.action === "rejected" ? "Reason for rejection (required)" : "Review Comment (optional)", placeholder: target.action === "rejected" ? "Provide explanation for rejection..." : "Add optional note...", value: comment, onChange: (e) => setComment(e.target.value), rows: 3 }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2 pt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: () => setTarget(null), disabled: busy, children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: target.action === "rejected" ? "danger" : "primary", loading: busy, onClick: act, className: target.action === "approved" ? "bg-[#0A0A0A] hover:bg-neutral-800 text-white" : "", children: target.action === "approved" ? "Approve Request" : "Reject Request" })
      ] })
    ] }) })
  ] });
}
export {
  ApprovalsPage as component
};
