import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as cn } from "./router-CPP24NZe.mjs";
import { a as EMPLOYMENT_STATUS_LABELS } from "./employee-uFc04z2V.mjs";
const styles = {
  active: {
    badge: "bg-emerald-500/10 text-emerald-700 border-emerald-500/20",
    dot: "bg-emerald-500"
  },
  probation: {
    badge: "bg-amber-500/10 text-amber-700 border-amber-500/20",
    dot: "bg-amber-500"
  },
  inactive: {
    badge: "bg-neutral-100 text-neutral-600 border-neutral-200",
    dot: "bg-neutral-400"
  },
  notice_period: {
    badge: "bg-orange-500/10 text-orange-700 border-orange-500/20",
    dot: "bg-orange-500"
  },
  exited: {
    badge: "bg-rose-500/10 text-rose-700 border-rose-500/20",
    dot: "bg-rose-500"
  }
};
function EmployeeStatusBadge({ status, size = "md", className }) {
  const style = styles[status];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: cn(
        "inline-flex items-center gap-1.5 rounded-full border font-semibold tracking-wider uppercase shadow-2xs backdrop-blur-xs",
        size === "sm" ? "px-2 py-0.5 text-[10px]" : "px-2.5 py-1 text-[11px]",
        style.badge,
        className
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-1.5 w-1.5 shrink-0", children: [
          status === "active" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping", style.dot) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("relative inline-flex h-1.5 w-1.5 rounded-full", style.dot) })
        ] }),
        EMPLOYMENT_STATUS_LABELS[status]
      ]
    }
  );
}
export {
  EmployeeStatusBadge as E
};
