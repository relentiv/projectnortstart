import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { I as initialsFromName, c as cn } from "./router-LFebWAoY.mjs";
function Avatar({ name, initials, src, size = 36, className }) {
  const label = initials ?? (name ? initialsFromName(name) : "?");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: cn(
        "inline-flex items-center justify-center rounded-full bg-[var(--tenant-primary)] text-[var(--tenant-text-on-primary)] font-semibold overflow-hidden",
        className
      ),
      style: { width: size, height: size, fontSize: size * 0.4 },
      "aria-label": name ?? label,
      children: src ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt: name ?? "", className: "h-full w-full object-cover" }) : label || "?"
    }
  );
}
export {
  Avatar as A
};
