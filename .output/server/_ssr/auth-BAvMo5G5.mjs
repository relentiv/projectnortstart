import { F as createStore } from "./router-CPP24NZe.mjs";
import { r as rbacStore } from "./rbac-BwLVdIYU.mjs";
const STORAGE_KEY = "hrms.auth";
const ADMIN_KEY = "hrms.adminAuth";
const IMP_KEY = "hrms.impersonation";
function load(key, fallback) {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}
const store = createStore(load(STORAGE_KEY, { user: null, token: null }));
const adminStore = createStore(load(ADMIN_KEY, { token: null, name: null }));
const impersonationStore = createStore({
  current: load(IMP_KEY, null)
});
function persist(key, value) {
  if (typeof window === "undefined") return;
  if (value === null || value === void 0) {
    window.localStorage.removeItem(key);
    return;
  }
  window.localStorage.setItem(key, JSON.stringify(value));
}
const authStore = {
  ...store,
  signIn(user, token) {
    store.set({ user, token });
    persist(STORAGE_KEY, { user, token });
    rbacStore.refresh(user.id, user.role);
  },
  signOut() {
    store.set({ user: null, token: null });
    persist(STORAGE_KEY, null);
    rbacStore.refresh(null);
  },
  get isAuthenticated() {
    return store.get().user !== null;
  }
};
const adminAuthStore = {
  ...adminStore,
  signIn(name, token) {
    adminStore.set({ token, name });
    persist(ADMIN_KEY, { token, name });
  },
  signOut() {
    adminStore.set({ token: null, name: null });
    persist(ADMIN_KEY, null);
  },
  get isAuthenticated() {
    return adminStore.get().token !== null;
  }
};
const impersonationStateStore = {
  ...impersonationStore,
  start(tenantId, companyName) {
    const state = { tenantId, companyName, startedAt: (/* @__PURE__ */ new Date()).toISOString() };
    impersonationStore.set({ current: state });
    persist(IMP_KEY, state);
  },
  stop() {
    impersonationStore.set({ current: null });
    persist(IMP_KEY, null);
  }
};
export {
  authStore as a,
  adminAuthStore as b,
  impersonationStateStore as i
};
