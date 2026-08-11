import { j as jsxRuntimeExports } from "../_libs/react.mjs";
function PageHeader({ title, description, actions }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-6 mb-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-[32px] font-semibold tracking-[-0.01em] text-[#0A0A0A]", children: title }),
      description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[15px] text-[#6B6B6B]", children: description })
    ] }),
    actions && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: actions })
  ] });
}
export {
  PageHeader as P
};
