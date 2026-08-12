import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as cn } from "./router-CPP24NZe.mjs";
const Select = reactExports.forwardRef(function Select2({ label, error, hint, options, placeholder, className, id, ...rest }, ref) {
  const reactId = reactExports.useId();
  const sid = id ?? reactId;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full", children: [
    label && /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: sid, className: "mb-1.5 block text-[13px] font-medium text-[#0A0A0A]", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "select",
      {
        ref,
        id: sid,
        "aria-invalid": !!error,
        className: cn(
          "w-full h-11 rounded-sm border bg-white px-3 text-[15px] text-[#0A0A0A]",
          "transition-colors duration-150 ease-out outline-none focus:ring-2 focus:ring-[#F97316]/30",
          error ? "border-[#DC2626]" : "border-[#E5E5E3] focus:border-[#0A0A0A]",
          className
        ),
        ...rest,
        children: [
          placeholder && /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: placeholder }),
          options.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: o.value, children: o.label }, o.value))
        ]
      }
    ),
    error ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { "aria-live": "polite", className: "mt-1.5 text-[13px] text-[#DC2626]", children: error }) : hint ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-[13px] text-[#6B6B6B]", children: hint }) : null
  ] });
});
export {
  Select as S
};
