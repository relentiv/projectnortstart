import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as usePermission } from "./usePermission-5FQzLb5G.mjs";
function PermissionGuard({ permission, mode = "any", fallback = null, children }) {
  const allowed = Array.isArray(permission) ? usePermission(permission, mode) : usePermission(permission);
  if (!allowed) return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: fallback });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children });
}
export {
  PermissionGuard as P
};
