import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as cn } from "./router-CPP24NZe.mjs";
function RoleBadge({ roleName, roleType, size = "md", className }) {
  const sz = size === "sm" ? "text-[11px] px-1.5 py-0.5" : "text-[12px] px-2 py-0.5";
  if (roleType === "built_in") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("inline-flex items-center rounded-md bg-[#0A0A0A] text-white font-medium", sz, className), children: roleName });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: cn("inline-flex items-center rounded-md font-medium", sz, className),
      style: {
        background: "color-mix(in srgb, var(--tenant-accent) 20%, transparent)",
        color: "var(--tenant-accent)"
      },
      children: roleName
    }
  );
}
export {
  RoleBadge as R
};
