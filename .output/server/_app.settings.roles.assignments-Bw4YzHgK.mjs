import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { I as Input } from "./_ssr/Input-CHeJoRlX.mjs";
import { S as Select } from "./_ssr/Select-Bg687n3T.mjs";
import { D as DataTable } from "./_ssr/DataTable-ChSCAfLO.mjs";
import { s as showToast } from "./_ssr/Toast-DlQQlIf6.mjs";
import { E as EmployeeAvatar } from "./_ssr/EmployeeAvatar-XclfLP_Y.mjs";
import { P as PermissionGuard } from "./_ssr/PermissionGuard-DHUddp2f.mjs";
import { R as RoleBadge } from "./_ssr/RoleBadge-BzEmnY2n.mjs";
import { R as RoleAssignmentRow } from "./_ssr/RoleAssignmentRow-CdBh7OYH.mjs";
import { l as listEmployees, s as settingsApi } from "./_ssr/router-Arl77cRa.mjs";
import { l as listRoles, a as listAssignments, B as BUILT_IN_ROLE_IDS, c as assignRole } from "./_ssr/rbac-CHd75bNv.mjs";

import "./_ssr/usePermission-C7-ELJsH.mjs";
import "./_ssr/rbac-CiXrabhS.mjs";
import "./_ssr/Button-Crtgy6Xx.mjs";
import "./_ssr/Textarea-DXR3KTuM.mjs";
import "./_ssr/SlideOver-DXNNm8Us.mjs";
import "./_libs/tanstack__query-core.mjs";
import "./_libs/tanstack__react-query.mjs";
import "./_libs/tanstack__react-router.mjs";
import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval.mjs";
import "./_libs/unenv.mjs";


import "./_libs/seroval-plugins.mjs";


import "./_libs/react-dom.mjs";
import "./_libs/isbot.mjs";
import "./_libs/clsx.mjs";
import "./_libs/tailwind-merge.mjs";
import "./_libs/zod.mjs";
function AssignmentsPage() {
  const [employees, setEmployees] = reactExports.useState([]);
  const [departments, setDepartments] = reactExports.useState([]);
  const [roles, setRoles] = reactExports.useState([]);
  const [assignments, setAssignments] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [q, setQ] = reactExports.useState("");
  const [roleFilter, setRoleFilter] = reactExports.useState("");
  const [deptFilter, setDeptFilter] = reactExports.useState("");
  const [editing, setEditing] = reactExports.useState(null);
  const reload = () => {
    setLoading(true);
    void Promise.all([listEmployees(), settingsApi.listDepartments(), listRoles(), listAssignments()]).then(([em, d, rl, as]) => {
      if (em.data) setEmployees(em.data);
      if (d.data) setDepartments(d.data);
      if (rl.data) setRoles(rl.data);
      if (as.data) setAssignments(as.data);
      setLoading(false);
    });
  };
  reactExports.useEffect(reload, []);
  const roleFor = (eid) => {
    const a = assignments.find((x) => x.employeeId === eid);
    const id = a?.roleId ?? BUILT_IN_ROLE_IDS.employee;
    return roles.find((r) => r.id === id) ?? null;
  };
  const deptName = (id) => departments.find((d) => d.id === id)?.name ?? "—";
  const filtered = reactExports.useMemo(() => {
    return employees.filter((e) => {
      if (q && !`${e.firstName} ${e.lastName} ${e.employeeCode}`.toLowerCase().includes(q.toLowerCase())) return false;
      if (deptFilter && e.departmentId !== deptFilter) return false;
      if (roleFilter && roleFor(e.id)?.id !== roleFilter) return false;
      return true;
    });
  }, [employees, q, deptFilter, roleFilter, assignments, roles]);
  const columns = [{
    key: "name",
    label: "Employee",
    render: (e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(EmployeeAvatar, { employee: e, size: "sm" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-medium text-[14px]", children: [
          e.firstName,
          " ",
          e.lastName
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-[#6B6B6B]", children: e.employeeCode })
      ] })
    ] })
  }, {
    key: "dept",
    label: "Department",
    render: (e) => deptName(e.departmentId)
  }, {
    key: "role",
    label: "Current role",
    render: (e) => {
      const r = roleFor(e.id);
      return r ? /* @__PURE__ */ jsxRuntimeExports.jsx(RoleBadge, { roleName: r.name, roleType: r.type, size: "sm" }) : "—";
    }
  }, {
    key: "assignedAt",
    label: "Assigned on",
    render: (e) => {
      const a = assignments.find((x) => x.employeeId === e.id);
      return a ? new Date(a.assignedAt).toLocaleDateString() : "—";
    }
  }, {
    key: "actions",
    label: "",
    align: "right",
    render: (e) => /* @__PURE__ */ jsxRuntimeExports.jsx(PermissionGuard, { permission: "settings.roles.manage", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setEditing(e), className: "text-[12px] text-[var(--tenant-primary)] hover:underline", children: "Change role" }) })
  }];
  const onSave = async (roleId) => {
    if (!editing) return;
    const role = roles.find((r) => r.id === roleId);
    await assignRole(editing.id, roleId, `${editing.firstName} ${editing.lastName}`, role?.name);
    showToast("Role updated.", "success");
    reload();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Search by name or code", value: q, onChange: (e) => setQ(e.target.value) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { placeholder: "All roles", options: roles.map((r) => ({
        value: r.id,
        label: r.name
      })), value: roleFilter, onChange: (e) => setRoleFilter(e.target.value) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { placeholder: "All departments", options: departments.map((d) => ({
        value: d.id,
        label: d.name
      })), value: deptFilter, onChange: (e) => setDeptFilter(e.target.value) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DataTable, { columns, data: filtered, loading, getRowKey: (e) => e.id }),
    editing && /* @__PURE__ */ jsxRuntimeExports.jsx(RoleAssignmentRow, { open: !!editing, onClose: () => setEditing(null), employee: editing, currentRole: roleFor(editing.id), roles, onSave })
  ] });
}
export {
  AssignmentsPage as component
};
