import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { B as Badge } from "./Badge-BQrIKnVV.mjs";
import { J as RUN_STATUS_LABELS } from "./router-LFebWAoY.mjs";
const map = {
  draft: "default",
  in_review: "tenant-accent",
  finalised: "success",
  paid: "success",
  cancelled: "danger"
};
function PayrollRunStatusBadge({ status }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: map[status], children: RUN_STATUS_LABELS[status] });
}
export {
  PayrollRunStatusBadge as P
};
