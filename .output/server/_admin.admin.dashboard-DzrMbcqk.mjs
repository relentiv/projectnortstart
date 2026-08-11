import { j as jsxRuntimeExports } from "./_libs/react.mjs";

function ErrorBoundary({
  reset
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md mx-auto text-center py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[22px] font-semibold", children: "Something went wrong." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[14px] text-[#6B6B6B]", children: "We couldn't load this page. Try refreshing." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: reset, className: "mt-6 inline-flex h-10 px-4 rounded-md bg-[#0A0A0A] text-white text-[14px] font-medium", children: "Try again" })
  ] });
}
const SplitErrorComponent = ({
  reset
}) => /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorBoundary, { reset });
export {
  SplitErrorComponent as errorComponent
};
