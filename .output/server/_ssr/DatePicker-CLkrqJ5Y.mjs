import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as cn } from "./router-CPP24NZe.mjs";
const DatePicker = reactExports.forwardRef(function DatePicker2({ label, value, onChange, minDate, maxDate, error, required, className, id }, ref) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("w-full", className), children: [
    label && /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { htmlFor: id, className: "mb-1.5 block text-[13px] font-medium text-[#0A0A0A]", children: [
      label,
      " ",
      required && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#DC2626]", children: "*" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        id,
        ref,
        type: "date",
        value: value ?? "",
        onChange: (e) => onChange(e.target.value),
        min: minDate,
        max: maxDate,
        className: cn(
          "w-full h-11 px-3 rounded-md border bg-white text-[14px] text-[#0A0A0A] focus:outline-none focus:ring-2",
          error ? "border-[#DC2626] focus:ring-[#DC2626]/20" : "border-[#E5E5E3] focus:border-[var(--tenant-primary)] focus:ring-[var(--tenant-primary)]/20"
        )
      }
    ),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-[13px] text-[#DC2626]", children: error })
  ] });
});
export {
  DatePicker as D
};
