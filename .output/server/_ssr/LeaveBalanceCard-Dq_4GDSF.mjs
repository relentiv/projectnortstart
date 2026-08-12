import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as cn } from "./router-CPP24NZe.mjs";
function LeaveBalanceCard({ balance, onApply, className }) {
  const total = Math.max(balance.accrued + balance.carried, 1);
  const usedPct = Math.min(100, balance.used / total * 100);
  const pendingPct = Math.min(100 - usedPct, balance.pending / total * 100);
  const low = balance.available <= 2;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("relative bg-white rounded-md border border-[#E5E5E3] p-5 overflow-hidden", className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 top-0 h-1", style: { background: balance.leaveType.color }, "aria-hidden": true }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-semibold text-[#0A0A0A] truncate", children: balance.leaveType.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-[#6B6B6B] mt-0.5", children: [
          balance.leaveType.isPaid ? "Paid" : "Unpaid",
          " · ",
          balance.leaveType.code
        ] })
      ] }),
      onApply && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: onApply, className: "text-[11px] font-medium text-[#6B6B6B] hover:text-[#0A0A0A] transition-colors whitespace-nowrap", children: "Apply →" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 flex items-baseline gap-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("text-[30px] font-semibold tracking-[-0.02em]", low ? "text-[#B45309]" : "text-[#0A0A0A]"), children: balance.available }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[13px] text-[#6B6B6B]", children: [
        "of ",
        balance.accrued + balance.carried,
        " days left"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 h-1.5 w-full rounded-full bg-[#F2F2F0] overflow-hidden flex", role: "img", "aria-label": `${balance.used} used, ${balance.pending} pending`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-full", style: { width: `${usedPct}%`, background: balance.leaveType.color } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-full opacity-40", style: { width: `${pendingPct}%`, background: balance.leaveType.color } })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "mt-3 grid grid-cols-3 gap-2 text-[11px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-[#9CA3AF]", children: "Used" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "font-semibold", children: balance.used })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-[#9CA3AF]", children: "Pending" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "font-semibold", children: balance.pending })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-[#9CA3AF]", children: "Carried" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "font-semibold", children: balance.carried })
      ] })
    ] })
  ] });
}
export {
  LeaveBalanceCard as L
};
