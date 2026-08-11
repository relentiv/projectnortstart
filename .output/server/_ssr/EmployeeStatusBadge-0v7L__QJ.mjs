import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as cn } from "./router-LFebWAoY.mjs";
import { a as EMPLOYMENT_STATUS_LABELS } from "./employee-uFc04z2V.mjs";
const styles = {
  active: "bg-[#DCFCE7] text-[#166534]",
  probation: "bg-[#FEF3C7] text-[#92400E]",
  inactive: "bg-[#F2F2F0] text-[#6B6B6B]",
  notice_period: "bg-[#FFEDD5] text-[#9A3412]",
  exited: "bg-[#FEE2E2] text-[#991B1B]"
};
function EmployeeStatusBadge({ status, size = "md", className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: cn(
        "inline-flex items-center rounded-full font-medium",
        size === "sm" ? "px-2 py-0.5 text-[11px]" : "px-2.5 py-1 text-[12px]",
        styles[status],
        className
      ),
      children: EMPLOYMENT_STATUS_LABELS[status]
    }
  );
}
export {
  EmployeeStatusBadge as E
};
