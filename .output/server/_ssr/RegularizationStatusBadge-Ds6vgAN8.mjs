import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { B as Badge } from "./Badge-DOnZHL7Z.mjs";
const VARIANT = {
  pending: "warning",
  approved: "success",
  rejected: "danger",
  cancelled: "default"
};
const LABEL = {
  pending: "Pending",
  approved: "Approved",
  rejected: "Rejected",
  cancelled: "Cancelled"
};
function RegularizationStatusBadge({ status }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: VARIANT[status], children: LABEL[status] });
}
export {
  RegularizationStatusBadge as R
};
