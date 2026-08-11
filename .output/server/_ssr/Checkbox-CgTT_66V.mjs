import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as cn } from "./router-LFebWAoY.mjs";
const Checkbox = reactExports.forwardRef(function Checkbox2({ label, error, className, id, ...rest }, ref) {
  const reactId = reactExports.useId();
  const cid = id ?? reactId;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { htmlFor: cid, className: "inline-flex items-start gap-2.5 cursor-pointer select-none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          ref,
          id: cid,
          type: "checkbox",
          className: cn(
            "mt-0.5 h-4 w-4 rounded-sm border border-[#E5E5E3] accent-[#0A0A0A]",
            "focus:ring-2 focus:ring-[#F97316]/30",
            className
          ),
          ...rest
        }
      ),
      label && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14px] text-[#0A0A0A] leading-snug", children: label })
    ] }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { "aria-live": "polite", className: "mt-1.5 text-[13px] text-[#DC2626]", children: error })
  ] });
});
export {
  Checkbox as C
};
