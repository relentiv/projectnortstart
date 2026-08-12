import { F as createStore } from "./router-CPP24NZe.mjs";
import { g as getEffectivePermissionsSync } from "./rbac-Ci1w5KuA.mjs";
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
