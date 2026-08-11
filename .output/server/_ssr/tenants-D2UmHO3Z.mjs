import { d as delay, o as ok, G as fail, H as uid } from "./router-LFebWAoY.mjs";
const KEY = "hrms.tenants";
function readAll() {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(window.localStorage.getItem(KEY) ?? "[]");
  } catch {
    return [];
  }
}
function writeAll(list) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, JSON.stringify(list));
}
const tenantsApi = {
  async create(input) {
    const list = readAll();
    if (list.some((t) => t.settings.hrContactEmail === input.settings.hrContactEmail)) {
      return delay(fail("A workspace with this email already exists."));
    }
    const tenant = {
      id: uid("tn_"),
      settings: input.settings,
      theme: input.theme,
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    writeAll([...list, tenant]);
    return delay(ok(tenant));
  },
  async updateTheme(tenantId, theme) {
    const list = readAll();
    const idx = list.findIndex((t) => t.id === tenantId);
    if (idx === -1) return delay(fail("Workspace not found."));
    list[idx] = { ...list[idx], theme };
    writeAll(list);
    return delay(ok(list[idx]));
  },
  async findByEmail(email) {
    const t = readAll().find((x) => x.settings.hrContactEmail === email);
    return delay(t ? ok(t) : fail("Workspace not found."));
  }
};
export {
  tenantsApi as t
};
