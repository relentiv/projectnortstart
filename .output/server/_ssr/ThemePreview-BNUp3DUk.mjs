import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as computeTextColor } from "./utils-CYd_2Wqf.mjs";
import { c as cn } from "./router-CPP24NZe.mjs";
function ThemePreview({ primary, secondary, accent, companyName = "Acme Inc.", className }) {
  const onPrimary = computeTextColor(primary);
  const onSecondary = computeTextColor(secondary);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: cn("rounded-md overflow-hidden border border-[#E5E5E3] shadow-sm select-none", className),
      style: { width: 280, height: 180 },
      "aria-label": "Theme preview",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { width: 40, background: secondary, color: onSecondary }, className: "flex flex-col items-center pt-3 gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-3 rounded-sm", style: { background: primary } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-5 rounded-full", style: { background: onSecondary, opacity: 0.25 } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-5 rounded-full", style: { background: onSecondary, opacity: 0.15 } })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 bg-white flex flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 px-3 flex items-center border-b border-[#E5E5E3]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-semibold", style: { color: primary }, children: companyName }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-sm border border-[#E5E5E3] p-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-12 rounded-full bg-[#E5E5E3]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-semibold uppercase tracking-[0.08em] px-1.5 py-0.5 rounded-full", style: { background: accent, color: computeTextColor(accent) }, children: "NEW" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-20 rounded-full bg-[#F2F2F0] block mb-1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-16 rounded-full bg-[#F2F2F0] block mb-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "inline-flex items-center text-[9px] font-semibold rounded-sm px-2 py-1",
                style: { background: primary, color: onPrimary },
                children: "Continue"
              }
            )
          ] }) })
        ] })
      ] })
    }
  );
}
export {
  ThemePreview as T
};
