import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as cn } from "./router-Arl77cRa.mjs";
import { A as ArrowUpRight } from "../_libs/lucide-react.mjs";
function LeaveBalanceCard({
  balance,
  onApply,
  className
}) {
  const total = Math.max(balance.accrued + balance.carried, 1);
  const usedPct = Math.min(100, balance.used / total * 100);
  const pendingPct = Math.min(100 - usedPct, balance.pending / total * 100);
  const low = balance.available <= 2;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "relative rounded-2xl bg-white border border-[#E5E5E3] p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:border-[#D1D1CF] transition-all duration-200 group flex flex-col justify-between overflow-hidden",
        className
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-x-0 top-0 h-1 transition-all",
            style: { background: balance.leaveType.color },
            "aria-hidden": true
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl pointer-events-none opacity-25 group-hover:opacity-45 transition-opacity duration-300",
            style: { background: balance.leaveType.color },
            "aria-hidden": true
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 relative z-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "w-2 h-2 rounded-full shrink-0",
                    style: { background: balance.leaveType.color },
                    "aria-hidden": true
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] font-extrabold text-[#0A0A0A] tracking-tight truncate", children: balance.leaveType.name })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] font-semibold uppercase tracking-[0.08em] text-[#8E8E8E] mt-0.5", children: [
                balance.leaveType.isPaid ? "Paid" : "Unpaid",
                " · ",
                balance.leaveType.code
              ] })
            ] }),
            onApply && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: onApply,
                className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-xl text-[11px] font-bold bg-[#FAFAF9] hover:bg-[#0A0A0A] text-[#0A0A0A] hover:text-white border border-[#E5E5E3] hover:border-[#0A0A0A] transition-all duration-200 active:scale-95 group/btn shrink-0",
                children: [
                  "Apply",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-3 h-3 text-[#8E8E8E] group-hover/btn:text-white transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex items-baseline justify-between gap-2 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: cn(
                  "text-[36px] sm:text-[42px] leading-none font-extrabold tracking-tight font-sans tabular-nums",
                  low ? "text-amber-600 dark:text-amber-500" : "text-[#0A0A0A]"
                ),
                children: balance.available
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[13px] font-medium text-[#6B6B6B] ml-2", children: [
              "of ",
              balance.accrued + balance.carried,
              " days left"
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "mt-3.5 h-2 w-full rounded-full bg-[#F4F4F2] overflow-hidden flex",
              role: "img",
              "aria-label": `${balance.used} used, ${balance.pending} pending`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "h-full transition-all duration-300 rounded-l-full",
                    style: { width: `${usedPct}%`, background: balance.leaveType.color }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "h-full opacity-40 transition-all duration-300",
                    style: { width: `${pendingPct}%`, background: balance.leaveType.color }
                  }
                )
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid grid-cols-3 gap-2 bg-[#FAFAF9] rounded-xl p-2.5 border border-[#F2F2F0] text-center relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-semibold uppercase tracking-[0.08em] text-[#8E8E8E]", children: "Used" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-bold text-[#0A0A0A] tabular-nums mt-0.5", children: balance.used })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-x border-[#E5E5E3]/60", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-semibold uppercase tracking-[0.08em] text-[#8E8E8E]", children: "Pending" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-bold text-[#0A0A0A] tabular-nums mt-0.5", children: balance.pending })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-semibold uppercase tracking-[0.08em] text-[#8E8E8E]", children: "Carried" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-bold text-[#0A0A0A] tabular-nums mt-0.5", children: balance.carried })
          ] })
        ] })
      ]
    }
  );
}
export {
  LeaveBalanceCard as L
};
