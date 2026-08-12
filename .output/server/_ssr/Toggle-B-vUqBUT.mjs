import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as cn } from "./router-Arl77cRa.mjs";
function Toggle({ checked, onChange, disabled, size = "md", label, className }) {
  const w = size === "sm" ? "w-8 h-[18px]" : "w-10 h-6";
  const dot = size === "sm" ? "w-3.5 h-3.5" : "w-5 h-5";
  const translate = size === "sm" ? checked ? "translate-x-3.5" : "translate-x-0.5" : checked ? "translate-x-[18px]" : "translate-x-0.5";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      role: "switch",
      "aria-checked": checked,
      "aria-label": label,
      disabled,
      onClick: () => onChange(!checked),
      className: cn(
        "relative inline-flex shrink-0 items-center rounded-full transition-colors outline-none",
        "focus-visible:ring-2 focus-visible:ring-[var(--tenant-primary)] focus-visible:ring-offset-2",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        w,
        checked ? "" : "bg-[#D1D5DB]",
        className
      ),
      style: checked ? { background: "var(--tenant-primary)" } : void 0,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          "aria-hidden": true,
          className: cn(
            "inline-block rounded-full bg-white shadow transform transition-transform duration-150",
            dot,
            translate
          )
        }
      )
    }
  );
}
export {
  Toggle as T
};
