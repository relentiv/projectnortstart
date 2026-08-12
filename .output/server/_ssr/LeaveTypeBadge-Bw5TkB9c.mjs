import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as cn } from "./router-CPP24NZe.mjs";
function LeaveTypeBadge({ leaveType, size = "md", className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: cn(
        "inline-flex items-center gap-1.5 rounded-full font-semibold",
        size === "sm" ? "text-[10px] px-2 py-0.5" : "text-[11px] px-2.5 py-1",
        className
      ),
      style: { background: `color-mix(in srgb, ${leaveType.color} 12%, transparent)`, color: leaveType.color },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "h-1.5 w-1.5 rounded-full", style: { background: leaveType.color }, "aria-hidden": true }),
        leaveType.name
      ]
    }
  );
}
export {
  LeaveTypeBadge as L
};
