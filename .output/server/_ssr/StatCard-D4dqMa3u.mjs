import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as cn } from "./router-CPP24NZe.mjs";
const trendColor = {
  up: "text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 dark:text-emerald-400 border-emerald-200/60",
  down: "text-rose-600 bg-rose-50 dark:bg-rose-950/40 dark:text-rose-400 border-rose-200/60",
  neutral: "text-[#6B6B6B] bg-[#F4F4F2] border-[#E5E5E3]"
};
function StatCard({
  label,
  value,
  trend,
  trendDir = "neutral",
  icon,
  variant = "default",
  accent,
  actionHint = false,
  className,
  children
}) {
  const isDark = variant === "dark";
  const isAccent = variant === "accent" || accent === "platform";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "relative rounded-2xl p-5 overflow-hidden transition-all duration-200 group flex flex-col justify-between",
        isDark ? "bg-[#111111] text-white border border-[#222222] shadow-sm hover:border-[#333333]" : isAccent ? "bg-gradient-to-br from-[#1E1E1E] to-[#0A0A0A] text-white border border-[#2D2D2D] shadow-sm" : "bg-white border border-[#E5E5E3] text-[#0A0A0A] shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:border-[#D1D1CF]",
        className
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: cn(
              "absolute -top-12 -right-12 w-28 h-28 rounded-full blur-2xl pointer-events-none opacity-40 transition-opacity duration-300 group-hover:opacity-70",
              isDark || isAccent ? "bg-orange-500/20" : "bg-neutral-200/60"
            ),
            "aria-hidden": true
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: cn(
                  "text-[11px] font-semibold uppercase tracking-[0.1em]",
                  isDark || isAccent ? "text-neutral-400" : "text-[#6B6B6B]"
                ),
                children: label
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
              icon && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: cn(
                    "p-1 rounded-md text-sm",
                    isDark || isAccent ? "text-neutral-400" : "text-[#8E8E8E]"
                  ),
                  "aria-hidden": true,
                  children: icon
                }
              ),
              actionHint && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: cn(
                    "inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
                    isDark || isAccent ? "bg-[#262626] text-white border border-[#3A3A3A]" : "bg-[#F4F4F2] text-[#0A0A0A] border border-[#E5E5E3]"
                  ),
                  "aria-hidden": true,
                  children: "↗"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-baseline justify-between gap-2 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[34px] sm:text-[38px] leading-none font-bold tracking-tight font-sans", children: value }),
            trend && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: cn(
                  "inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold border",
                  isDark || isAccent ? "bg-white/10 text-neutral-200 border-white/15" : trendColor[trendDir]
                ),
                children: trend
              }
            )
          ] })
        ] }),
        children && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4", children })
      ]
    }
  );
}
export {
  StatCard as S
};
