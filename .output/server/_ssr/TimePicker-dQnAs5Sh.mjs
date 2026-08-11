import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as cn } from "./router-LFebWAoY.mjs";
function TimePicker({ label, value, onChange, error, hint, disabled, className, id }) {
  const reactId = reactExports.useId();
  const tid = id ?? reactId;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("w-full", className), children: [
    label && /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: tid, className: "mb-1.5 block text-[13px] font-medium text-[#0A0A0A]", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        id: tid,
        type: "time",
        value: value ?? "",
        disabled,
        onChange: (e) => onChange(e.target.value),
        "aria-invalid": !!error,
        className: cn(
          "w-full h-11 px-3 rounded-sm border bg-white text-[15px] text-[#0A0A0A] outline-none transition-colors",
          "focus:ring-2 focus:ring-[var(--tenant-primary)]/25 disabled:bg-[#F2F2F0] disabled:cursor-not-allowed",
          error ? "border-[#DC2626]" : "border-[#E5E5E3] focus:border-[#0A0A0A]"
        )
      }
    ),
    error ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-[13px] text-[#DC2626]", children: error }) : hint ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-[13px] text-[#6B6B6B]", children: hint }) : null
  ] });
}
export {
  TimePicker as T
};
