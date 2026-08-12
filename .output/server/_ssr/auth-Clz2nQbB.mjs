import { d as delay, o as ok, G as fail, H as uid } from "./router-Arl77cRa.mjs";
import { t as tenantsApi } from "./tenants-DbDjvxB8.mjs";
const CRED_KEY = "hrms.credentials";
function readCreds() {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(window.localStorage.getItem(CRED_KEY) ?? "[]");
  } catch {
    return [];
  }
}
function writeCreds(list) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(CRED_KEY, JSON.stringify(list));
}
const authApi = {
  async register(input) {
    const creds = readCreds();
    if (creds.some((c) => c.email === input.email)) {
      return delay(fail("An account with this email already exists."));
    }
    const user = {
      id: uid("u_"),
      tenantId: input.tenantId,
      fullName: input.fullName,
      email: input.email,
      role: "hr_admin"
    };
    writeCreds([...creds, { email: input.email, password: input.password, user }]);
    return delay(ok({ user, token: uid("tok_") }));
  },
  async login(email, password) {
    const cred = readCreds().find((c) => c.email === email);
    if (!cred || cred.password !== password) {
      return delay(fail("Incorrect email or password."));
    }
    const tenantRes = await tenantsApi.findByEmail(cred.user.email).catch(() => null);
    const allTenants = (() => {
      try {
        return JSON.parse(window.localStorage.getItem("hrms.tenants") ?? "[]");
      } catch {
        return [];
      }
    })();
    const tenant = tenantRes?.data ?? allTenants.find((t) => t.id === cred.user.tenantId);
    if (!tenant) return delay(fail("Workspace not found."));
    return delay(ok({ user: cred.user, token: uid("tok_"), tenant }));
  },
  async logout() {
    return delay(ok(true));
  }
};
export {
  authApi as a
};
