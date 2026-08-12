import { F as createStore } from "./router-Arl77cRa.mjs";
import { g as getEffectivePermissionsSync } from "./rbac-CHd75bNv.mjs";
const initial = { roleId: null, role: null, permissions: [] };
const store = createStore(initial);
const rbacStore = {
  ...store,
  refresh(employeeId, userRoleOverride) {
    if (!employeeId) {
      store.set(initial);
      return;
    }
    store.set(getEffectivePermissionsSync(employeeId, userRoleOverride));
  }
};
export {
  rbacStore as r
};
