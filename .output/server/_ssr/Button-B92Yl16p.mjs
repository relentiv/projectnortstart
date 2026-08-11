import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as Spinner, c as cn } from "./router-LFebWAoY.mjs";
const sizeClasses = {
  sm: "h-9 px-3 text-[13px]",
  md: "h-11 px-5 text-[15px]",
  lg: "h-12 px-6 text-base"
};
const variantClasses = {
  primary: "bg-[#0A0A0A] text-white hover:bg-[#F97316] focus-visible:ring-[#F97316]",
  secondary: "bg-white text-[#0A0A0A] border border-[#E5E5E3] hover:bg-[#F2F2F0] focus-visible:ring-[#0A0A0A]",
  ghost: "bg-transparent text-[#0A0A0A] hover:bg-[#F2F2F0] focus-visible:ring-[#0A0A0A]",
  danger: "bg-[#DC2626] text-white hover:bg-[#B91C1C] focus-visible:ring-[#DC2626]",
  tenant: "bg-[var(--tenant-primary)] text-[var(--tenant-text-on-primary)] hover:bg-[var(--tenant-primary-hover)] focus-visible:ring-[var(--tenant-primary)]"
};
const Button = reactExports.forwardRef(function Button2({ variant = "primary", size = "md", loading, type = "button", className, children, disabled, leadingIcon, trailingIcon, ...rest }, ref) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      ref,
      type,
      disabled: disabled || loading,
      className: cn(
        "inline-flex items-center justify-center gap-2 rounded-md font-medium",
        "transition-colors duration-150 ease-out",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F9F9F7]",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        "motion-reduce:transition-none",
        sizeClasses[size],
        variantClasses[variant],
        className
      ),
      ...rest,
      children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 16 }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        leadingIcon,
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children }),
        trailingIcon
      ] })
    }
  );
});
export {
  Button as B
};
