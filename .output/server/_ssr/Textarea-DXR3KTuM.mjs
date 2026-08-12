import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as cn } from "./router-Arl77cRa.mjs";
const Textarea = reactExports.forwardRef(function Textarea2({ label, error, hint, className, id, ...rest }, ref) {
  const reactId = reactExports.useId();
  const tid = id ?? reactId;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full", children: [
    label && /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: tid, className: "mb-1.5 block text-[13px] font-medium text-[#0A0A0A]", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "textarea",
      {
        ref,
        id: tid,
        "aria-invalid": !!error,
        className: cn(
          "w-full min-h-[96px] rounded-sm border bg-white p-3 text-[15px] text-[#0A0A0A] placeholder:text-[#6B6B6B]",
          "transition-colors duration-150 ease-out outline-none focus:ring-2 focus:ring-[#F97316]/30",
          error ? "border-[#DC2626]" : "border-[#E5E5E3] focus:border-[#0A0A0A]",
          className
        ),
        ...rest
      }
    ),
    error ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { "aria-live": "polite", className: "mt-1.5 text-[13px] text-[#DC2626]", children: error }) : hint ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-[13px] text-[#6B6B6B]", children: hint }) : null
  ] });
});
export {
  Textarea as T
};
