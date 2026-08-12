import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as cn } from "./router-CPP24NZe.mjs";
const widths = { sm: "max-w-sm", md: "max-w-md", lg: "max-w-lg" };
function SlideOver({ open, onClose, title, description, children, footer, width = "md" }) {
  const triggerRef = reactExports.useRef(null);
  const panelRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (!open) return;
    triggerRef.current = document.activeElement;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const t = setTimeout(() => panelRef.current?.focus(), 50);
    return () => {
      window.removeEventListener("keydown", onKey);
      clearTimeout(t);
      triggerRef.current?.focus?.();
    };
  }, [open, onClose]);
  if (!open) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { role: "dialog", "aria-modal": "true", "aria-label": title, className: "fixed inset-0 z-50 flex", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        "aria-label": "Close panel",
        onClick: onClose,
        className: "absolute inset-0 bg-black/40 transition-opacity"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        ref: panelRef,
        tabIndex: -1,
        className: cn(
          "relative ml-auto h-full w-full bg-white shadow-2xl flex flex-col outline-none",
          widths[width]
        ),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-5 border-b border-[#E5E5E3] flex items-start justify-between gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[18px] font-semibold text-[#0A0A0A]", children: title }),
              description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[13px] text-[#6B6B6B]", children: description })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "aria-label": "Close",
                onClick: onClose,
                className: "text-[#6B6B6B] hover:text-[#0A0A0A] transition-colors text-xl leading-none p-1 -m-1",
                children: "×"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto px-6 py-5", children }),
          footer && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 py-4 border-t border-[#E5E5E3] bg-[#FAFAF8] flex items-center justify-end gap-2", children: footer })
        ]
      }
    )
  ] });
}
export {
  SlideOver as S
};
