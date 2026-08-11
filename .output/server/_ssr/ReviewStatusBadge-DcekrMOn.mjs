import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { B as Badge } from "./Badge-BQrIKnVV.mjs";
import { R as REVIEW_STATUS_LABELS } from "./performance-Bre1KeEI.mjs";
const VARIANT = {
  not_started: "default",
  self_pending: "warning",
  self_complete: "accent",
  manager_pending: "warning",
  manager_complete: "success",
  peer_pending: "warning",
  completed: "success"
};
function ReviewStatusBadge({ status }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: VARIANT[status], children: REVIEW_STATUS_LABELS[status] });
}
export {
  ReviewStatusBadge as R
};
