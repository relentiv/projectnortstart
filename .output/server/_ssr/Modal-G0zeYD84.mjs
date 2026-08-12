import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as cn } from "./router-CPP24NZe.mjs";
function Modal({ open, onClose, title, children, className }) {
  reactExports.useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  if (!open) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      role: "dialog",
      "aria-modal": "true",
      "aria-label": title,
      className: "fixed inset-0 z-50 flex items-center justify-center p-4",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            "aria-label": "Close",
            onClick: onClose,
            className: "absolute inset-0 bg-black/40 transition-opacity duration-150 motion-reduce:transition-none"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("relative w-full max-w-lg rounded-lg bg-white p-6 shadow-2xl", className), children: [
          title && /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[18px] font-semibold text-[#0A0A0A] mb-4", children: title }),
          children
        ] })
      ]
    }
  );
}
export {
  Modal as M
};
