import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as cn } from "./router-Arl77cRa.mjs";
import { L as LEAVE_STATUS_LABELS } from "./leave-Cc9GP3pR.mjs";
const statusStyles = {
  draft: {
    bg: "bg-neutral-100",
    text: "text-neutral-700",
    border: "border-neutral-200",
    dot: "bg-neutral-400"
  },
  pending: {
    bg: "bg-amber-500/10",
    text: "text-amber-700 dark:text-amber-400",
    border: "border-amber-500/20",
    dot: "bg-amber-500",
    ping: true
  },
  approved: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-700 dark:text-emerald-400",
    border: "border-emerald-500/20",
    dot: "bg-emerald-500"
  },
  auto_approved: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-700 dark:text-emerald-400",
    border: "border-emerald-500/20",
    dot: "bg-emerald-500"
  },
  rejected: {
    bg: "bg-rose-500/10",
    text: "text-rose-700 dark:text-rose-400",
    border: "border-rose-500/20",
    dot: "bg-rose-500"
  },
  cancelled: {
    bg: "bg-neutral-100",
    text: "text-neutral-600",
    border: "border-neutral-200",
    dot: "bg-neutral-400"
  }
};
function LeaveStatusBadge({
  status,
  className
}) {
  const style = statusStyles[status] ?? statusStyles.draft;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: cn(
        "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold border tracking-tight transition-all",
        style.bg,
        style.text,
        style.border,
        className
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-1.5 w-1.5 shrink-0", children: [
          style.ping && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("animate-ping absolute inline-flex h-full w-full rounded-full opacity-75", style.dot) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("relative inline-flex rounded-full h-1.5 w-1.5", style.dot) })
        ] }),
        LEAVE_STATUS_LABELS[status]
      ]
    }
  );
}
export {
  LeaveStatusBadge as L
};
