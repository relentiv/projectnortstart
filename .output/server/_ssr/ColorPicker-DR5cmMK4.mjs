import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as cn } from "./router-LFebWAoY.mjs";
import { i as isValidHex } from "./utils-CYd_2Wqf.mjs";
function ColorPicker({ label, value, onChange, error, className }) {
  const id = reactExports.useId();
  const [text, setText] = reactExports.useState(value);
  reactExports.useEffect(() => {
    setText(value);
  }, [value]);
  const commit = (raw) => {
    const v = raw.startsWith("#") ? raw : `#${raw}`;
    if (isValidHex(v)) onChange(v.toUpperCase());
    else setText(value);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("w-full", className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: id, className: "mb-1.5 block text-[13px] font-medium text-[#0A0A0A]", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          id,
          type: "text",
          value: text,
          onChange: (e) => {
            const v = e.target.value.toUpperCase();
            setText(v);
            if (isValidHex(v)) onChange(v);
          },
          onBlur: (e) => commit(e.target.value),
          "aria-invalid": !!error,
          className: cn(
            "flex-1 h-11 rounded-sm border bg-white px-3 font-mono text-[14px] uppercase",
            "outline-none focus:ring-2 focus:ring-[#F97316]/30",
            error ? "border-[#DC2626]" : "border-[#E5E5E3] focus:border-[#0A0A0A]"
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "color",
          "aria-label": `${label} swatch`,
          value: isValidHex(text) ? text : value,
          onChange: (e) => onChange(e.target.value.toUpperCase()),
          className: "h-9 w-9 rounded-sm border border-[#E5E5E3] cursor-pointer bg-transparent p-0"
        }
      )
    ] }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { "aria-live": "polite", className: "mt-1.5 text-[13px] text-[#DC2626]", children: error })
  ] });
}
export {
  ColorPicker as C
};
