import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as cn } from "./router-LFebWAoY.mjs";
function RatingInput({ scale, value, onChange, disabled, label }) {
  const active = scale.labels.find((l) => l.value === value);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    label && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-1.5 text-[13px] font-medium text-[#0A0A0A]", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { role: "radiogroup", "aria-label": label ?? "Rating", className: "inline-flex rounded-md border border-[#E5E5E3] overflow-hidden", children: scale.labels.map((l) => {
      const on = l.value === value;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          role: "radio",
          "aria-checked": on,
          disabled,
          title: l.label,
          onClick: () => onChange?.(l.value),
          className: cn(
            "min-w-9 px-3 py-1.5 text-[13px] font-medium tabular-nums transition-colors border-r border-[#E5E5E3] last:border-r-0",
            on ? "text-white" : "text-[#6B6B6B] hover:bg-[#F2F2F0]",
            "disabled:opacity-60 disabled:cursor-not-allowed"
          ),
          style: on ? { background: "var(--tenant-primary)" } : void 0,
          children: l.value
        },
        l.value
      );
    }) }),
    active && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1.5 text-[12px] text-[#6B6B6B]", children: [
      active.value,
      " — ",
      active.label
    ] })
  ] });
}
export {
  RatingInput as R
};
