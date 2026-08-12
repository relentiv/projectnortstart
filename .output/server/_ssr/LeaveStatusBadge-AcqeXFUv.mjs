import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { B as Badge } from "./Badge-DOnZHL7Z.mjs";
import { L as LEAVE_STATUS_LABELS } from "./leave-Cc9GP3pR.mjs";
const map = {
  draft: "default",
  pending: "warning",
  approved: "success",
  auto_approved: "success",
  rejected: "danger",
  cancelled: "default"
};
function LeaveStatusBadge({ status, className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: map[status], className, children: LEAVE_STATUS_LABELS[status] });
}
export {
  LeaveStatusBadge as L
};
