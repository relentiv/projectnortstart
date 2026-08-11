import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { M as Modal } from "./Modal-DIFPhA7e.mjs";
import { B as Button } from "./Button-B92Yl16p.mjs";
const variantToButton = {
  danger: "danger",
  warning: "primary",
  default: "primary"
};
function ConfirmDialog({
  open,
  onOpenChange,
  title,
  description,
  confirmLabel,
  cancelLabel = "Cancel",
  variant = "default",
  onConfirm,
  onCancel
}) {
  const [pending, setPending] = reactExports.useState(false);
  const confirmRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (open) {
      const t = setTimeout(() => confirmRef.current?.focus(), 50);
      return () => clearTimeout(t);
    }
  }, [open]);
  const cancel = () => {
    if (pending) return;
    onCancel?.();
    onOpenChange(false);
  };
  const confirm = async () => {
    setPending(true);
    try {
      await onConfirm();
      onOpenChange(false);
    } finally {
      setPending(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal, { open, onClose: cancel, title, className: "max-w-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] text-[#6B6B6B] leading-relaxed", children: description }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center justify-end gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: cancel, disabled: pending, children: cancelLabel }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { ref: confirmRef, variant: variantToButton[variant], onClick: confirm, loading: pending, children: confirmLabel })
    ] })
  ] });
}
export {
  ConfirmDialog as C
};
