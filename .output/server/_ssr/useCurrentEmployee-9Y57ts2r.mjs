import { r as reactExports } from "../_libs/react.mjs";
import { l as listEmployees } from "./router-LFebWAoY.mjs";
import { a as authStore } from "./auth-Dq95Bc2W.mjs";
function useCurrentEmployee() {
  const user = authStore.useSelector((s) => s.user);
  const [employee, setEmployee] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    let alive = true;
    void (async () => {
      const res = await listEmployees();
      if (!alive) return;
      const list = res.data ?? [];
      setEmployee(list.find((e) => e.workEmail === user?.email) ?? list[0] ?? null);
      setLoading(false);
    })();
    return () => {
      alive = false;
    };
  }, [user?.email]);
  return { employee, loading };
}
export {
  useCurrentEmployee as u
};
