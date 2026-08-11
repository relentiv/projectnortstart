import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { c as cn } from "./router-LFebWAoY.mjs";
function Breadcrumb({ items, className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { "aria-label": "Breadcrumb", className: cn("text-[13px] text-[#6B6B6B]", className), children: /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "flex flex-wrap items-center gap-1.5", children: items.map((item, i) => {
    const last = i === items.length - 1;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-1.5", children: [
      item.to && !last ? /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: item.to, className: "hover:text-[#0A0A0A] transition-colors", children: item.label }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: last ? "text-[#0A0A0A] font-medium" : "", "aria-current": last ? "page" : void 0, children: item.label }),
      !last && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, className: "text-[#D4D4D8]", children: "/" })
    ] }, i);
  }) }) });
}
export {
  Breadcrumb as B
};
