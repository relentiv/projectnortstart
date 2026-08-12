import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { a as ATTENDANCE_STATUS_LABELS, A as ATTENDANCE_STATUS_COLORS } from "./attendance-DW5Ch_bj.mjs";
import { c as cn } from "./router-Arl77cRa.mjs";
function AttendanceStatusBadge({ status, className }) {
  const color = ATTENDANCE_STATUS_COLORS[status];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: cn("inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[12px] font-medium", className),
      style: { background: `color-mix(in srgb, ${color} 12%, transparent)`, color },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, className: "w-1.5 h-1.5 rounded-full", style: { background: color } }),
        ATTENDANCE_STATUS_LABELS[status]
      ]
    }
  );
}
export {
  AttendanceStatusBadge as A
};
