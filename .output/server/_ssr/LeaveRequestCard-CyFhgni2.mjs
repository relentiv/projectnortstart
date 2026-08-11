import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { B as Button } from "./Button-B92Yl16p.mjs";
import { A as Avatar } from "./Avatar-BQ6VYrPZ.mjs";
import { K as formatRange } from "./router-LFebWAoY.mjs";
import { L as LeaveStatusBadge } from "./LeaveStatusBadge-D8rrrJ3p.mjs";
import { L as LeaveTypeBadge } from "./LeaveTypeBadge-CbvvgH9D.mjs";
function LeaveRequestCard({ request, showEmployee, onApprove, onReject, onCancel, onOpen }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-md border border-[#E5E5E3] p-4 flex items-start gap-3", children: [
    showEmployee && /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { name: request.employeeName, size: 36, className: "shrink-0" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
        showEmployee && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14px] font-medium truncate", children: request.employeeName }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(LeaveTypeBadge, { leaveType: request.leaveType, size: "sm" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(LeaveStatusBadge, { status: request.status })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-[13px] text-[#0A0A0A]", children: [
        formatRange(request.startDate, request.endDate),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[#6B6B6B]", children: [
          " · ",
          request.workingDays,
          " working day",
          request.workingDays === 1 ? "" : "s"
        ] }),
        request.isHalfDay && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#6B6B6B]", children: " · half day" })
      ] }),
      request.reason && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[12px] text-[#6B6B6B] line-clamp-2", children: request.reason }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex flex-wrap gap-2", children: [
        onApprove && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "tenant", onClick: onApprove, children: "Approve" }),
        onReject && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "secondary", onClick: onReject, children: "Reject" }),
        onCancel && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", onClick: onCancel, children: "Cancel request" }),
        onOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", onClick: onOpen, children: "Details" })
      ] })
    ] })
  ] });
}
export {
  LeaveRequestCard as L
};
