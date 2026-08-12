import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { E as EmptyState } from "./EmptyState-DCYWhDnT.mjs";
import { L as LeaveBalanceCard } from "./LeaveBalanceCard-B4yHVgso.mjs";
function LeaveBalanceGrid({
  balances,
  onApply
}) {
  if (!balances.length) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-[#E5E5E3] bg-white p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      EmptyState,
      {
        title: "No leave allocated yet.",
        subtitle: "Your HR team hasn't assigned a leave policy to you."
      }
    ) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5", children: balances.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    LeaveBalanceCard,
    {
      balance: b,
      onApply: onApply ? () => onApply(b.leaveTypeId) : void 0
    },
    b.leaveTypeId
  )) });
}
export {
  LeaveBalanceGrid as L
};
