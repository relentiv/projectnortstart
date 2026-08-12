import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as cn } from "./router-CPP24NZe.mjs";
function Card({ padded = true, className, ...rest }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: cn(
        "bg-white rounded-lg border border-[#E5E5E3] shadow-[0_1px_2px_rgba(10,10,10,0.04)]",
        padded && "p-6",
        className
      ),
      ...rest
    }
  );
}
export {
  Card as C
};
