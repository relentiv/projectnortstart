import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as cn } from "./router-Arl77cRa.mjs";
function EmptyState({ icon, title, subtitle, action, className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex flex-col items-center justify-center text-center py-12 px-4", className), children: [
    icon && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 text-[#9CA3AF]", "aria-hidden": true, children: icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[16px] font-semibold text-[#0A0A0A]", children: title }),
    subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[13px] text-[#6B6B6B] max-w-sm", children: subtitle }),
    action && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5", children: action })
  ] });
}
export {
  EmptyState as E
};
