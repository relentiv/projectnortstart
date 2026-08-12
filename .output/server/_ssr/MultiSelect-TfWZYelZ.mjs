import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as cn } from "./router-Arl77cRa.mjs";
function MultiSelect({ label, options, value, onChange, placeholder = "Select…", className }) {
  const [open, setOpen] = reactExports.useState(false);
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);
  const toggle = (v) => onChange(value.includes(v) ? value.filter((x) => x !== v) : [...value, v]);
  const summary = value.length === 0 ? placeholder : value.length <= 2 ? options.filter((o) => value.includes(o.value)).map((o) => o.label).join(", ") : `${value.length} selected`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref, className: cn("relative w-full", className), children: [
    label && /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-1.5 block text-[13px] font-medium text-[#0A0A0A]", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => setOpen((o) => !o),
        className: cn(
          "w-full h-10 px-3 text-left rounded-md border border-[#E5E5E3] bg-white text-[14px] flex items-center justify-between",
          value.length === 0 && "text-[#9CA3AF]"
        ),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: summary }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, className: "text-[#9CA3AF] ml-2", children: "▾" })
        ]
      }
    ),
    open && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute z-20 mt-1 w-full bg-white border border-[#E5E5E3] rounded-md shadow-md max-h-60 overflow-y-auto", children: [
      options.map((o) => {
        const checked = value.includes(o.value);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 px-3 py-2 text-[14px] hover:bg-[#FAFAF8] cursor-pointer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked, onChange: () => toggle(o.value) }),
          o.label
        ] }, o.value);
      }),
      options.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "px-3 py-2 text-[13px] text-[#6B6B6B]", children: "No options." })
    ] })
  ] });
}
export {
  MultiSelect as M
};
