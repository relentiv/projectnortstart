import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as cn } from "./router-Arl77cRa.mjs";
const Input = reactExports.forwardRef(function Input2({ label, error, hint, leadingIcon, type = "text", className, id, ...rest }, ref) {
  const reactId = reactExports.useId();
  const inputId = id ?? reactId;
  const describedBy = error ? `${inputId}-err` : hint ? `${inputId}-hint` : void 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full", children: [
    label && /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: inputId, className: "mb-1.5 block text-[13px] font-medium text-[#0A0A0A]", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      leadingIcon && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#6B6B6B]", children: leadingIcon }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          ref,
          id: inputId,
          type,
          "aria-invalid": !!error,
          "aria-describedby": describedBy,
          className: cn(
            "w-full h-11 rounded-sm border bg-white px-3 text-[15px] text-[#0A0A0A] placeholder:text-[#6B6B6B]",
            "transition-colors duration-150 ease-out outline-none",
            "focus:ring-2 focus:ring-[#F97316]/30",
            error ? "border-[#DC2626] focus:border-[#DC2626] focus:ring-[#DC2626]/30" : "border-[#E5E5E3] focus:border-[#0A0A0A]",
            leadingIcon && "pl-10",
            "disabled:bg-[#F2F2F0] disabled:cursor-not-allowed",
            className
          ),
          ...rest
        }
      )
    ] }),
    error ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { id: `${inputId}-err`, "aria-live": "polite", className: "mt-1.5 text-[13px] text-[#DC2626]", children: error }) : hint ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { id: `${inputId}-hint`, className: "mt-1.5 text-[13px] text-[#6B6B6B]", children: hint }) : null
  ] });
});
export {
  Input as I
};
