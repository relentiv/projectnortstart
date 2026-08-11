import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { E as EmptyState } from "./EmptyState-C_t8YrDr.mjs";
import { L as LeaveBalanceCard } from "./LeaveBalanceCard-j6CT0g6w.mjs";
function LeaveBalanceGrid({ balances, onApply }) {
  if (!balances.length) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No leave allocated yet.", subtitle: "Your HR team hasn't assigned a leave policy to you." });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4", children: balances.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx(LeaveBalanceCard, { balance: b, onApply: onApply ? () => onApply(b.leaveTypeId) : void 0 }, b.leaveTypeId)) });
}
export {
  LeaveBalanceGrid as L
};
