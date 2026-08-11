import { d as delay, o as ok, H as uid } from "./router-LFebWAoY.mjs";
const BUILT_IN_ROLE_IDS = {
  hrAdmin: "role_hr_admin",
  manager: "role_manager",
  employee: "role_employee"
};
const PERMISSIONS = {
  "dashboard.view": "View main dashboard",
  "employees.view_list": "View employee directory",
  "employees.view_profile": "View individual employee profiles",
  "employees.create": "Add new employees",
  "employees.edit": "Edit employee information",
  "employees.delete": "Archive or delete employees",
  "employees.export": "Export employee data",
  "employees.manage_docs": "Upload and verify documents",
  "org_chart.view": "View org chart",
  "leave.view_own": "View own leave balance and history",
  "leave.view_team": "View team leave calendar",
  "leave.apply": "Submit leave requests",
  "leave.approve": "Approve or reject leave requests",
  "leave.configure": "Configure leave types and policies",
  "attendance.view_own": "View own attendance",
  "attendance.view_team": "View team attendance",
  "attendance.manage": "Edit and regularise attendance records",
  "attendance.configure": "Configure shifts and attendance rules",
  "payroll.view_own": "View own pay slips",
  "payroll.view_all": "View all employee payroll data",
  "payroll.run": "Execute payroll runs",
  "payroll.configure": "Configure salary structures",
  "performance.view_own": "View own goals and reviews",
  "performance.view_team": "View team performance",
  "performance.manage": "Manage review cycles and assessments",
  "performance.configure": "Configure performance frameworks",
  "reports.view": "View standard reports",
  "reports.export": "Export reports",
  "reports.create": "Build custom reports",
  // AI (Phase 10)
  "ai.chat": "Use the AI assistant",
  "ai.review_anomalies": "Review AI-flagged payroll and attendance signals",
  "ai.generate_documents": "Generate documents using AI drafting",
  // Navigation & Forms (Phase 12)
  "navigation.manage": "Customize sidebar navigation and visibility",
  "forms.create": "Build and publish custom forms",
  "forms.manage_all": "View and manage all custom form submissions",
  "settings.company.view": "View company settings",
  "settings.company.edit": "Edit company settings and branding",
  "settings.departments.manage": "Manage departments and designations",
  "settings.work_calendar.manage": "Manage shifts and holidays",
  "settings.roles.view": "View roles and permissions",
  "settings.roles.manage": "Create and edit custom roles"
};
const SCOPED_PERMISSIONS = [
  "employees.view_list",
  "employees.view_profile",
  "employees.edit",
  "employees.export",
  "leave.view_team",
  "leave.approve",
  "attendance.view_team",
  "attendance.manage",
  "performance.view_team",
  "performance.manage"
];
const MODULE_GROUPS = [
  {
    label: "Dashboard",
    permissions: ["dashboard.view"]
  },
  {
    label: "Employee Management",
    permissions: [
      "employees.view_list",
      "employees.view_profile",
      "employees.create",
      "employees.edit",
      "employees.delete",
      "employees.export",
      "employees.manage_docs",
      "org_chart.view"
    ]
  },
  {
    label: "Leave",
    permissions: ["leave.view_own", "leave.view_team", "leave.apply", "leave.approve", "leave.configure"]
  },
  {
    label: "Attendance",
    permissions: ["attendance.view_own", "attendance.view_team", "attendance.manage", "attendance.configure"]
  },
  {
    label: "Payroll",
    permissions: ["payroll.view_own", "payroll.view_all", "payroll.run", "payroll.configure"]
  },
  {
    label: "Performance",
    permissions: ["performance.view_own", "performance.view_team", "performance.manage", "performance.configure"]
  },
  {
    label: "Reports",
    permissions: ["reports.view", "reports.export", "reports.create"]
  },
  {
    label: "AI",
    permissions: ["ai.chat", "ai.review_anomalies", "ai.generate_documents"]
  },
  {
    label: "Navigation & Forms",
    permissions: ["navigation.manage", "forms.create", "forms.manage_all"]
  },
  {
    label: "Settings",
    permissions: [
      "settings.company.view",
      "settings.company.edit",
      "settings.departments.manage",
      "settings.work_calendar.manage",
      "settings.roles.view",
      "settings.roles.manage"
    ]
  }
];
function isScoped(key) {
  return SCOPED_PERMISSIONS.includes(key);
}
const ROLES_KEY = "hrms.roles";
const ASSIGN_KEY = "hrms.roleAssignments";
const DELEG_KEY = "hrms.delegations";
const AUDIT_KEY = "hrms.permissionAudit";
const SEEDED = "hrms.rbac.seeded";
function read(key, fallback) {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}
function write(key, val) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(key, JSON.stringify(val));
}
const allKeys = Object.keys(PERMISSIONS);
function buildHRAdmin() {
  return {
    id: BUILT_IN_ROLE_IDS.hrAdmin,
    name: "HR Admin",
    description: "Full access to every module and every employee.",
    type: "built_in",
    permissions: allKeys.map((key) => ({ key, scope: "all" })),
    employeeCount: 0,
    createdAt: (/* @__PURE__ */ new Date()).toISOString(),
    updatedAt: (/* @__PURE__ */ new Date()).toISOString()
  };
}
function buildManager() {
  const perms = [
    { key: "dashboard.view" },
    { key: "employees.view_list", scope: "team" },
    { key: "employees.view_profile", scope: "team" },
    { key: "org_chart.view" },
    { key: "leave.view_own" },
    { key: "leave.view_team", scope: "team" },
    { key: "leave.apply" },
    { key: "leave.approve", scope: "team" },
    { key: "attendance.view_own" },
    { key: "attendance.view_team", scope: "team" },
    { key: "performance.view_own" },
    { key: "performance.view_team", scope: "team" },
    { key: "reports.view" },
    { key: "settings.company.view" },
    { key: "ai.chat" }
  ];
  return {
    id: BUILT_IN_ROLE_IDS.manager,
    name: "Manager",
    description: "Manage your team — approvals, performance, visibility.",
    type: "built_in",
    permissions: perms,
    employeeCount: 0,
    createdAt: (/* @__PURE__ */ new Date()).toISOString(),
    updatedAt: (/* @__PURE__ */ new Date()).toISOString()
  };
}
function buildEmployee() {
  const perms = [
    { key: "dashboard.view" },
    { key: "employees.view_list", scope: "all" },
    { key: "org_chart.view" },
    { key: "leave.view_own" },
    { key: "leave.apply" },
    { key: "attendance.view_own" },
    { key: "performance.view_own" },
    { key: "payroll.view_own" },
    { key: "ai.chat" }
  ];
  return {
    id: BUILT_IN_ROLE_IDS.employee,
    name: "Employee",
    description: "Self-service access to own data and the directory.",
    type: "built_in",
    permissions: perms,
    employeeCount: 0,
    createdAt: (/* @__PURE__ */ new Date()).toISOString(),
    updatedAt: (/* @__PURE__ */ new Date()).toISOString()
  };
}
function seedBuiltInRoles() {
  if (typeof window === "undefined") return;
  if (window.localStorage.getItem(SEEDED) === "1") return;
  write(ROLES_KEY, [buildHRAdmin(), buildManager(), buildEmployee()]);
  write(ASSIGN_KEY, []);
  write(DELEG_KEY, []);
  write(AUDIT_KEY, []);
  window.localStorage.setItem(SEEDED, "1");
}
function recountRoles(roles, assignments) {
  return roles.map((r) => ({
    ...r,
    employeeCount: assignments.filter((a) => a.roleId === r.id).length
  }));
}
function getActorName() {
  try {
    const raw = window.localStorage.getItem("hrms.auth");
    if (raw) {
      const u = JSON.parse(raw);
      return u.user?.fullName ?? "System";
    }
  } catch {
  }
  return "System";
}
function getActorId() {
  try {
    const raw = window.localStorage.getItem("hrms.auth");
    if (raw) {
      const u = JSON.parse(raw);
      return u.user?.id ?? "system";
    }
  } catch {
  }
  return "system";
}
function log(action, details, targetId, targetName) {
  const entry = {
    id: uid("aud_"),
    action,
    actorId: getActorId(),
    actorName: getActorName(),
    targetId,
    targetName,
    details,
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  };
  const list = read(AUDIT_KEY, []);
  write(AUDIT_KEY, [entry, ...list].slice(0, 500));
}
async function listRoles() {
  seedBuiltInRoles();
  const roles = read(ROLES_KEY, []);
  const assignments = read(ASSIGN_KEY, []);
  return delay(ok(recountRoles(roles, assignments)));
}
async function getRole(id) {
  seedBuiltInRoles();
  const roles = read(ROLES_KEY, []);
  const assignments = read(ASSIGN_KEY, []);
  const r = recountRoles(roles, assignments).find((x) => x.id === id) ?? null;
  return delay(ok(r));
}
async function createRole(input) {
  seedBuiltInRoles();
  const roles = read(ROLES_KEY, []);
  const role = {
    id: uid("role_"),
    name: input.name.trim(),
    description: input.description?.trim(),
    type: "custom",
    permissions: input.permissions,
    employeeCount: 0,
    createdAt: (/* @__PURE__ */ new Date()).toISOString(),
    updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
    createdBy: getActorId()
  };
  write(ROLES_KEY, [...roles, role]);
  log("role_created", `Created custom role "${role.name}"`, role.id, role.name);
  return delay(ok(role));
}
async function updateRole(id, patch) {
  const roles = read(ROLES_KEY, []);
  const idx = roles.findIndex((r) => r.id === id);
  if (idx < 0) return delay(ok(null));
  const current = roles[idx];
  if (current.type === "built_in") return delay(ok(current));
  const next = { ...current, ...patch, updatedAt: (/* @__PURE__ */ new Date()).toISOString() };
  roles[idx] = next;
  write(ROLES_KEY, roles);
  log("role_updated", `Updated role "${next.name}"`, next.id, next.name);
  return delay(ok(next));
}
async function deleteRole(id) {
  const roles = read(ROLES_KEY, []);
  const target = roles.find((r) => r.id === id);
  if (!target || target.type === "built_in") return delay(ok(null));
  const assignments = read(ASSIGN_KEY, []);
  const updated = assignments.map(
    (a) => a.roleId === id ? { ...a, roleId: BUILT_IN_ROLE_IDS.employee, assignedAt: (/* @__PURE__ */ new Date()).toISOString() } : a
  );
  write(ASSIGN_KEY, updated);
  write(
    ROLES_KEY,
    roles.filter((r) => r.id !== id)
  );
  log("role_deleted", `Deleted custom role "${target.name}"`, target.id, target.name);
  return delay(ok({ id }));
}
async function listAssignments() {
  seedBuiltInRoles();
  return delay(ok(read(ASSIGN_KEY, [])));
}
async function assignRole(employeeId, roleId, employeeName, roleName) {
  seedBuiltInRoles();
  const list = read(ASSIGN_KEY, []);
  const without = list.filter((a) => a.employeeId !== employeeId);
  const entry = {
    employeeId,
    roleId,
    assignedAt: (/* @__PURE__ */ new Date()).toISOString(),
    assignedBy: getActorId()
  };
  write(ASSIGN_KEY, [...without, entry]);
  log(
    "role_assigned",
    `Assigned "${roleName ?? roleId}" role to ${employeeName ?? employeeId}`,
    employeeId,
    employeeName
  );
  return delay(ok(entry));
}
function reconcileDelegations(list) {
  const now = Date.now();
  return list.map((d) => {
    if (d.status === "revoked") return d;
    return new Date(d.endDate).getTime() < now ? { ...d, status: "expired" } : d;
  });
}
async function listDelegations() {
  const list = reconcileDelegations(read(DELEG_KEY, []));
  write(DELEG_KEY, list);
  return delay(ok(list));
}
async function createDelegation(input) {
  const list = read(DELEG_KEY, []);
  const d = {
    ...input,
    id: uid("dlg_"),
    status: "active",
    createdAt: (/* @__PURE__ */ new Date()).toISOString(),
    createdBy: getActorId()
  };
  write(DELEG_KEY, [d, ...list]);
  log(
    "delegation_created",
    `Delegated ${d.roleId ? "role" : `${d.permissions?.length ?? 0} permissions`} to ${d.toEmployeeId} until ${d.endDate.slice(0, 10)}`,
    d.toEmployeeId
  );
  return delay(ok(d));
}
async function revokeDelegation(id) {
  const list = read(DELEG_KEY, []);
  const idx = list.findIndex((d) => d.id === id);
  if (idx < 0) return delay(ok(null));
  list[idx] = { ...list[idx], status: "revoked", revokedAt: (/* @__PURE__ */ new Date()).toISOString(), revokedBy: getActorId() };
  write(DELEG_KEY, list);
  log("delegation_revoked", `Revoked delegation ${id}`, list[idx].toEmployeeId);
  return delay(ok(list[idx]));
}
async function listAuditLog() {
  return delay(ok(read(AUDIT_KEY, [])));
}
function getEffectivePermissionsSync(employeeId, userRoleOverride) {
  if (typeof window === "undefined") return { roleId: null, role: null, permissions: [] };
  seedBuiltInRoles();
  const roles = read(ROLES_KEY, []);
  const assignments = read(ASSIGN_KEY, []);
  const delegations = reconcileDelegations(read(DELEG_KEY, []));
  const assignment = assignments.find((a) => a.employeeId === employeeId);
  let roleId = assignment?.roleId ?? null;
  if (!roleId && userRoleOverride) {
    const map = {
      hr_admin: BUILT_IN_ROLE_IDS.hrAdmin,
      manager: BUILT_IN_ROLE_IDS.manager,
      employee: BUILT_IN_ROLE_IDS.employee,
      super_admin: BUILT_IN_ROLE_IDS.hrAdmin
    };
    roleId = map[userRoleOverride] ?? BUILT_IN_ROLE_IDS.employee;
  }
  const role = roleId ? roles.find((r) => r.id === roleId) ?? null : null;
  const perms = role ? [...role.permissions] : [];
  const now = Date.now();
  const myDelegations = delegations.filter(
    (d) => d.toEmployeeId === employeeId && d.status === "active" && new Date(d.startDate).getTime() <= now && new Date(d.endDate).getTime() >= now
  );
  for (const d of myDelegations) {
    if (d.roleId) {
      const r = roles.find((rr) => rr.id === d.roleId);
      if (r) perms.push(...r.permissions);
    }
    if (d.permissions) perms.push(...d.permissions);
  }
  const order = { all: 4, department: 3, team: 2, self: 1 };
  const byKey = /* @__PURE__ */ new Map();
  for (const p of perms) {
    const existing = byKey.get(p.key);
    if (!existing) byKey.set(p.key, p);
    else {
      const a = p.scope ? order[p.scope] : 0;
      const b = existing.scope ? order[existing.scope] : 0;
      if (a > b) byKey.set(p.key, p);
    }
  }
  return { roleId, role, permissions: Array.from(byKey.values()) };
}
export {
  BUILT_IN_ROLE_IDS as B,
  MODULE_GROUPS as M,
  PERMISSIONS as P,
  listAssignments as a,
  listDelegations as b,
  assignRole as c,
  createRole as d,
  deleteRole as e,
  createDelegation as f,
  getEffectivePermissionsSync as g,
  listAuditLog as h,
  isScoped as i,
  getRole as j,
  listRoles as l,
  revokeDelegation as r,
  updateRole as u
};
