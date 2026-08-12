import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as cn } from "./router-CPP24NZe.mjs";
function SearchInput({ placeholder = "Search…", value, onChange, onClear, debounceMs = 300, className }) {
  const [local, setLocal] = reactExports.useState(value);
  const timer = reactExports.useRef(null);
  reactExports.useEffect(() => setLocal(value), [value]);
  const handle = (v) => {
    setLocal(v);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => onChange(v), debounceMs);
  };
  const clear = () => {
    setLocal("");
    if (timer.current) clearTimeout(timer.current);
    onChange("");
    onClear?.();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("relative", className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, className: "absolute left-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]", children: "⌕" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type: "search",
        value: local,
        onChange: (e) => handle(e.target.value),
        placeholder,
        className: "w-full h-10 pl-9 pr-9 rounded-md border border-[#E5E5E3] bg-white text-[14px] text-[#0A0A0A] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[var(--tenant-primary)] focus:ring-2 focus:ring-[var(--tenant-primary)]/20"
      }
    ),
    local && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        "aria-label": "Clear search",
        onClick: clear,
        className: "absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 inline-flex items-center justify-center rounded-full text-[#6B6B6B] hover:bg-[#F2F2F0]",
        children: "×"
      }
    )
  ] });
}
export {
  SearchInput as S
};
