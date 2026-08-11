import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as cn } from "./router-LFebWAoY.mjs";
const variants = {
  info: "bg-[#EFF6FF] text-[#1E3A8A] border-[#BFDBFE]",
  success: "bg-[#F0FDF4] text-[#166534] border-[#BBF7D0]",
  warning: "bg-[#FFFBEB] text-[#92400E] border-[#FDE68A]",
  error: "bg-[#FEF2F2] text-[#991B1B] border-[#FECACA]"
};
function Alert({ variant = "info", title, children, onDismiss, className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { role: "alert", className: cn("rounded-md border px-4 py-3 text-[14px] flex items-start gap-3", variants[variant], className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
      title && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold mb-0.5", children: title }),
      children
    ] }),
    onDismiss && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onDismiss, "aria-label": "Dismiss", className: "text-current opacity-70 hover:opacity-100", children: "×" })
  ] });
}
export {
  Alert as A
};
