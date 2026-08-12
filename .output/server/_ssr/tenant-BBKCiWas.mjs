import { F as createStore } from "./router-CPP24NZe.mjs";
import { D as DEFAULT_THEME } from "./defaults-CvUaCo6_.mjs";
const STORAGE_KEY = "hrms.tenant";
function load() {
  if (typeof window === "undefined") return { tenant: null, theme: DEFAULT_THEME };
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return { tenant: null, theme: DEFAULT_THEME };
    const t = JSON.parse(raw);
    return { tenant: t, theme: t.theme };
  } catch {
    return { tenant: null, theme: DEFAULT_THEME };
  }
}
const store = createStore(load());
function persist(t) {
  if (typeof window === "undefined") return;
  if (t) window.localStorage.setItem(STORAGE_KEY, JSON.stringify(t));
  else window.localStorage.removeItem(STORAGE_KEY);
}
const tenantStore = {
  ...store,
  setTenant(t) {
    store.set({ tenant: t, theme: t?.theme ?? DEFAULT_THEME });
    persist(t);
  },
  updateTheme(theme) {
    const t = store.get().tenant;
    if (!t) {
      store.set({ theme });
      return;
    }
    const next = { ...t, theme };
    store.set({ tenant: next, theme });
    persist(next);
  }
};
export {
  tenantStore as t
};
