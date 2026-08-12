import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as cn } from "./router-Arl77cRa.mjs";
function InfoTooltip({ content, className }) {
  const [open, setOpen] = reactExports.useState(false);
  const id = reactExports.useId();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: cn("relative inline-flex items-center", className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        "aria-describedby": open ? id : void 0,
        "aria-label": "More info",
        onMouseEnter: () => setOpen(true),
        onMouseLeave: () => setOpen(false),
        onFocus: () => setOpen(true),
        onBlur: () => setOpen(false),
        className: "inline-flex items-center justify-center w-4 h-4 rounded-full text-[10px] font-bold text-[#6B6B6B] hover:text-[#0A0A0A] border border-[#D1D5DB]",
        children: "i"
      }
    ),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        role: "tooltip",
        id,
        className: "absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 z-10 whitespace-nowrap rounded-md bg-[#0A0A0A] text-white text-[11px] px-2 py-1 shadow-lg",
        children: content
      }
    )
  ] });
}
export {
  InfoTooltip as I
};
