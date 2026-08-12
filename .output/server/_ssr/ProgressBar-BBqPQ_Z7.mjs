import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as cn } from "./router-CPP24NZe.mjs";
function ProgressBar({ value, label, className }) {
  const pct = Math.max(0, Math.min(100, value));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("w-full", className), children: [
    label && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] text-[#6B6B6B]", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[12px] font-medium text-[#0A0A0A]", children: [
        pct,
        "%"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 rounded-full bg-[#F2F2F0] overflow-hidden", role: "progressbar", "aria-valuenow": pct, "aria-valuemin": 0, "aria-valuemax": 100, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full rounded-full transition-all", style: { width: pct + "%", background: "var(--tenant-primary)" } }) })
  ] });
}
export {
  ProgressBar as P
};
