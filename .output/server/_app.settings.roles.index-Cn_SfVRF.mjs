import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { d as useNavigate } from "./_libs/tanstack__react-router.mjs";
import { B as Button } from "./_ssr/Button-CFBbQAsZ.mjs";
import { I as Input } from "./_ssr/Input-BJe__i93.mjs";
import { E as EmptyState } from "./_ssr/EmptyState-Cs_2WXRJ.mjs";
import { C as ConfirmDialog } from "./_ssr/ConfirmDialog-BeoeULKD.mjs";
import { S as SlideOver } from "./_ssr/SlideOver-COdJD426.mjs";
import { s as showToast } from "./_ssr/Toast-DgpI28ao.mjs";
import { P as PermissionGuard } from "./_ssr/PermissionGuard-DrHCZdH7.mjs";
import { B as Badge } from "./_ssr/Badge-DOnZHL7Z.mjs";
import { C as Card } from "./_ssr/Card-AgXmnnkq.mjs";
import { R as RoleBadge } from "./_ssr/RoleBadge-DX2dt138.mjs";
import { l as listRoles, d as createRole, e as deleteRole } from "./_ssr/rbac-Ci1w5KuA.mjs";

import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval.mjs";
import "./_libs/unenv.mjs";


import "./_libs/seroval-plugins.mjs";


import "./_libs/react-dom.mjs";
import "./_libs/isbot.mjs";
import "./_ssr/router-CPP24NZe.mjs";
import "./_libs/tanstack__query-core.mjs";
import "./_libs/tanstack__react-query.mjs";
import "./_libs/clsx.mjs";
import "./_libs/tailwind-merge.mjs";
import "./_libs/zod.mjs";
import "./_ssr/Modal-G0zeYD84.mjs";
import "./_ssr/usePermission-DoLX-EvC.mjs";
import "./_ssr/rbac-BwLVdIYU.mjs";
function RoleCard({ role, onView, onClone, onEdit, onDelete }) {
  const builtIn = role.type === "built_in";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "flex flex-col gap-3 h-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[16px] font-semibold text-[#0A0A0A] truncate", children: role.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-[#6B6B6B] line-clamp-2 mt-0.5", children: role.description ?? (builtIn ? "Built-in role." : "Custom role.") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(RoleBadge, { roleName: builtIn ? "Built-in" : "Custom", roleType: role.type, size: "sm" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "default", children: [
        role.employeeCount,
        " employee",
        role.employeeCount === 1 ? "" : "s"
      ] }),
      builtIn && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, className: "text-[12px] text-[#9CA3AF]", children: "🔒" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 pt-2 border-t border-[#E5E5E3]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", size: "sm", onClick: onView, children: "View permissions" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", onClick: onClone, children: "Clone →" }),
      !builtIn && onEdit && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", onClick: onEdit, children: "Edit" }),
      !builtIn && onDelete && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", onClick: onDelete, children: "Delete" })
    ] })
  ] });
}
function RolesListPage() {
  const navigate = useNavigate();
  const [roles, setRoles] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [cloneFrom, setCloneFrom] = reactExports.useState(null);
  const [cloneName, setCloneName] = reactExports.useState("");
  const [pendingDelete, setPendingDelete] = reactExports.useState(null);
  const reload = () => {
    setLoading(true);
    void listRoles().then((r) => {
      if (r.data) setRoles(r.data);
      setLoading(false);
    });
  };
  reactExports.useEffect(reload, []);
  const builtIn = roles.filter((r) => r.type === "built_in");
  const custom = roles.filter((r) => r.type === "custom");
  const doClone = async () => {
    if (!cloneFrom || !cloneName.trim()) return;
    const r = await createRole({
      name: cloneName.trim(),
      description: `Cloned from ${cloneFrom.name}`,
      permissions: cloneFrom.permissions,
      baseRoleId: cloneFrom.id
    });
    if (r.data) {
      showToast("Role created.", "success");
      setCloneFrom(null);
      setCloneName("");
      navigate({
        to: "/settings/roles/$roleId",
        params: {
          roleId: r.data.id
        }
      });
    }
  };
  const doDelete = async () => {
    if (!pendingDelete) return;
    await deleteRole(pendingDelete.id);
    showToast("Role deleted.", "success");
    setPendingDelete(null);
    reload();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PermissionGuard, { permission: "settings.roles.manage", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", onClick: () => navigate({
      to: "/settings/roles/new"
    }), children: "Create custom role" }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-semibold uppercase tracking-[0.1em] text-[#6B6B6B] mb-3", children: "Built-in roles" }),
      loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [0, 1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[180px] rounded-md border border-[#E5E5E3] bg-white animate-pulse" }, i)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: builtIn.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(RoleCard, { role: r, onView: () => navigate({
        to: "/settings/roles/$roleId",
        params: {
          roleId: r.id
        }
      }), onClone: () => {
        setCloneFrom(r);
        setCloneName(`${r.name} (Copy)`);
      } }, r.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-semibold uppercase tracking-[0.1em] text-[#6B6B6B] mb-3", children: "Custom roles" }),
      custom.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No custom roles yet", subtitle: "Clone a built-in role to create one." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: custom.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(RoleCard, { role: r, onView: () => navigate({
        to: "/settings/roles/$roleId",
        params: {
          roleId: r.id
        }
      }), onClone: () => {
        setCloneFrom(r);
        setCloneName(`${r.name} (Copy)`);
      }, onEdit: () => navigate({
        to: "/settings/roles/$roleId/edit",
        params: {
          roleId: r.id
        }
      }), onDelete: () => setPendingDelete(r) }, r.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SlideOver, { open: !!cloneFrom, onClose: () => setCloneFrom(null), title: `Clone "${cloneFrom?.name ?? ""}"`, description: "Give your new custom role a name. Permissions are pre-filled from the source role.", footer: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: () => setCloneFrom(null), children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", onClick: doClone, disabled: !cloneName.trim(), children: "Create role" })
    ] }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Role name", value: cloneName, onChange: (e) => setCloneName(e.target.value) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ConfirmDialog, { open: !!pendingDelete, onOpenChange: (o) => !o && setPendingDelete(null), title: `Delete "${pendingDelete?.name ?? ""}"?`, description: pendingDelete && pendingDelete.employeeCount > 0 ? `${pendingDelete.employeeCount} employees have this role. They will revert to the Employee role if you continue.` : "This action cannot be undone.", confirmLabel: "Delete role", variant: "danger", onConfirm: doDelete })
  ] });
}
export {
  RolesListPage as component
};
