import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { B as Button } from "./Button-Crtgy6Xx.mjs";
import { A as Avatar } from "./Avatar-B65jymUr.mjs";
import { K as formatRange } from "./router-Arl77cRa.mjs";
import { L as LeaveStatusBadge } from "./LeaveStatusBadge-Cuij4VBS.mjs";
import { L as LeaveTypeBadge } from "./LeaveTypeBadge-CkIIldAd.mjs";
import { p as Calendar, A as ArrowUpRight } from "../_libs/lucide-react.mjs";
function LeaveRequestCard({
  request,
  showEmployee,
  onApprove,
  onReject,
  onCancel,
  onOpen
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-[#E5E5E3] bg-white p-5 hover:border-[#D1D1CF] transition-all duration-200 shadow-[0_1px_3px_rgba(0,0,0,0.03)] group relative overflow-hidden flex flex-col justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
          showEmployee && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mr-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { name: request.employeeName, size: 32, className: "shrink-0 rounded-xl" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14px] font-bold text-[#0A0A0A] tracking-tight", children: request.employeeName })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(LeaveTypeBadge, { leaveType: request.leaveType, size: "sm" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(LeaveStatusBadge, { status: request.status })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] font-semibold text-[#8E8E8E] uppercase tracking-wider", children: [
          "Applied ",
          new Date(request.appliedAt).toLocaleDateString("en-US", { month: "short", day: "numeric" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3.5 flex flex-wrap items-center gap-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-[#0A0A0A]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4 text-orange-500 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14px] font-bold tracking-tight", children: formatRange(request.startDate, request.endDate) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center px-2.5 py-0.5 rounded-lg text-[11px] font-bold bg-[#FAFAF9] text-[#0A0A0A] border border-[#E5E5E3] tabular-nums", children: [
          request.workingDays,
          " working day",
          request.workingDays === 1 ? "" : "s",
          request.isHalfDay && " · Half Day"
        ] })
      ] }),
      request.reason && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 p-3 rounded-xl bg-[#FAFAF9] border border-[#F2F2F0] text-[12px] text-[#4B4B4B] line-clamp-2 leading-relaxed", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-[#0A0A0A]", children: "Reason: " }),
        request.reason
      ] })
    ] }),
    (onApprove || onReject || onCancel || onOpen) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-3 border-t border-[#F2F2F0] flex flex-wrap items-center justify-between gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
        onApprove && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "tenant", onClick: onApprove, className: "rounded-xl font-bold", children: "Approve" }),
        onReject && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "secondary", onClick: onReject, className: "rounded-xl font-bold", children: "Reject" }),
        onCancel && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", onClick: onCancel, className: "rounded-xl text-rose-600 hover:text-rose-700 hover:bg-rose-50 font-bold", children: "Cancel request" })
      ] }),
      onOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          size: "sm",
          variant: "ghost",
          onClick: onOpen,
          className: "rounded-xl font-bold text-[#0A0A0A] hover:bg-[#FAFAF9] group/btn",
          children: [
            "Details",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-3.5 h-3.5 ml-1 text-[#8E8E8E] group-hover/btn:text-[#0A0A0A] transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" })
          ]
        }
      )
    ] })
  ] });
}
export {
  LeaveRequestCard as L
};
