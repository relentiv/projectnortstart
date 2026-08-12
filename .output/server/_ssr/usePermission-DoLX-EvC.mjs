import { r as reactExports } from "../_libs/react.mjs";
import { r as rbacStore } from "./rbac-BwLVdIYU.mjs";
function usePermission(input, mode = "any") {
  const permissions = rbacStore.useSelector((s) => s.permissions);
  return reactExports.useMemo(() => {
    const set = new Set(permissions.map((p) => p.key));
    if (typeof input === "string") return set.has(input);
    if (mode === "all") return input.every((k) => set.has(k));
    return input.some((k) => set.has(k));
  }, [permissions, input, mode]);
}
export {
  usePermission as u
};
