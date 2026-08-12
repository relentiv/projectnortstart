import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as cn } from "./router-CPP24NZe.mjs";
function RadioGroup({ options, value, onChange, orientation = "vertical", className, name }) {
  const refs = reactExports.useRef({});
  const onKey = (e, idx) => {
    const horiz = orientation === "horizontal";
    const fwd = horiz ? "ArrowRight" : "ArrowDown";
    const back = horiz ? "ArrowLeft" : "ArrowUp";
    if (e.key !== fwd && e.key !== back) return;
    e.preventDefault();
    const next = e.key === fwd ? (idx + 1) % options.length : (idx - 1 + options.length) % options.length;
    const opt = options[next];
    onChange(opt.value);
    refs.current[opt.value]?.focus();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { role: "radiogroup", className: cn(orientation === "horizontal" ? "flex gap-2" : "space-y-2", className), children: options.map((opt, i) => {
    const checked = opt.value === value;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        role: "radio",
        name,
        "aria-checked": checked,
        tabIndex: checked ? 0 : -1,
        onClick: () => onChange(opt.value),
        onKeyDown: (e) => onKey(e, i),
        ref: (el) => {
          refs.current[opt.value] = el;
        },
        className: cn(
          "text-left px-3 py-2 rounded-md border text-[13px] transition-colors outline-none",
          "focus-visible:ring-2 focus-visible:ring-[var(--tenant-primary)]",
          checked ? "border-[var(--tenant-primary)] bg-[color-mix(in_srgb,var(--tenant-primary)_8%,transparent)]" : "border-[#E5E5E3] hover:bg-[#F2F2F0]"
        ),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: opt.label }),
          opt.description && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[12px] text-[#6B6B6B] mt-0.5", children: opt.description })
        ]
      },
      opt.value
    );
  }) });
}
export {
  RadioGroup as R
};
