import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as cn } from "./router-LFebWAoY.mjs";
function GoalProgressRing({ value, size = 48, className }) {
  const shown = Math.max(0, Math.min(100, Math.round(value)));
  const over = value > 100;
  const r = (size - 6) / 2;
  const c = 2 * Math.PI * r;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: cn("relative inline-flex items-center justify-center shrink-0", className),
      style: { width: size, height: size },
      title: over ? `Actual progress ${Math.round(value)}% — display capped at 100%` : `${shown}% complete`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: size, height: size, className: "-rotate-90", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: size / 2, cy: size / 2, r, fill: "none", stroke: "#E5E5E3", strokeWidth: 4 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "circle",
            {
              cx: size / 2,
              cy: size / 2,
              r,
              fill: "none",
              strokeWidth: 4,
              strokeLinecap: "round",
              stroke: over ? "#16A34A" : "var(--tenant-primary)",
              strokeDasharray: c,
              strokeDashoffset: c - shown / 100 * c
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "absolute text-[11px] font-semibold tabular-nums text-[#0A0A0A]", children: [
          shown,
          "%"
        ] })
      ]
    }
  );
}
export {
  GoalProgressRing as G
};
