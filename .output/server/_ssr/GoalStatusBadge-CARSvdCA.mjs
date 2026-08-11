import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { B as Badge } from "./Badge-BQrIKnVV.mjs";
import { G as GOAL_STATUS_LABELS } from "./performance-Bre1KeEI.mjs";
const VARIANT = {
  draft: "default",
  active: "default",
  on_track: "success",
  at_risk: "warning",
  behind: "danger",
  completed: "success",
  cancelled: "default"
};
function GoalStatusBadge({ status }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: VARIANT[status], children: GOAL_STATUS_LABELS[status] });
}
export {
  GoalStatusBadge as G
};
