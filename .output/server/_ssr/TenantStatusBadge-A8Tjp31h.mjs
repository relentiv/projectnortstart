import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { B as Badge } from "./Badge-DOnZHL7Z.mjs";
const MAP = {
  active: { variant: "success", label: "Active" },
  trial: { variant: "warning", label: "Trial" },
  suspended: { variant: "danger", label: "Suspended" },
  churned: { variant: "default", label: "Churned" }
};
function TenantStatusBadge({ status }) {
  const m = MAP[status];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: m.variant, children: m.label });
}
export {
  TenantStatusBadge as T
};
