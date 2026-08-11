import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as cn } from "./router-LFebWAoY.mjs";
import { C as CYCLE_STATUS_LABELS } from "./performance-Bre1KeEI.mjs";
const STYLE = {
  draft: "bg-[#F2F2F0] text-[#6B6B6B]",
  active: "bg-[#16A34A]/10 text-[#15803D]",
  review_in_progress: "bg-[#2563EB]/10 text-[#1D4ED8]",
  calibration: "bg-[#F59E0B]/15 text-[#B45309]",
  completed: "bg-[#0D9488]/10 text-[#0F766E]"
};
function ReviewCycleBadge({ status }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("inline-flex items-center rounded-md px-2 py-0.5 text-[12px] font-medium", STYLE[status]), children: CYCLE_STATUS_LABELS[status] });
}
export {
  ReviewCycleBadge as R
};
