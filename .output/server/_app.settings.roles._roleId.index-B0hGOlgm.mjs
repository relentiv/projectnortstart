import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { f as useParams, d as useNavigate } from "./_libs/tanstack__react-router.mjs";
import { B as Button } from "./_ssr/Button-Crtgy6Xx.mjs";
import { S as Spinner } from "./_ssr/router-Arl77cRa.mjs";
import { E as EmptyState } from "./_ssr/EmptyState-DCYWhDnT.mjs";
import { s as showToast } from "./_ssr/Toast-DlQQlIf6.mjs";
import { P as PermissionGuard } from "./_ssr/PermissionGuard-DHUddp2f.mjs";
import { R as RoleBadge } from "./_ssr/RoleBadge-BzEmnY2n.mjs";
import { P as PermissionMatrix } from "./_ssr/PermissionMatrix-CuZ9JoVx.mjs";
import { j as getRole, u as updateRole } from "./_ssr/rbac-CHd75bNv.mjs";

import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval.mjs";
import "./_libs/unenv.mjs";


import "./_libs/seroval-plugins.mjs";


import "./_libs/react-dom.mjs";
import "./_libs/isbot.mjs";
import "./_libs/tanstack__query-core.mjs";
import "./_libs/tanstack__react-query.mjs";
import "./_libs/clsx.mjs";
import "./_libs/tailwind-merge.mjs";
import "./_libs/zod.mjs";
import "./_ssr/usePermission-C7-ELJsH.mjs";
import "./_ssr/rbac-CiXrabhS.mjs";
import "./_ssr/Toggle-B-vUqBUT.mjs";
import "./_ssr/InfoTooltip-CiBS8Xkj.mjs";
function RoleDetailPage() {
  const {
    roleId
  } = useParams({
    from: "/_app/settings/roles/$roleId/"
  });
  const navigate = useNavigate();
  const [role, setRole] = reactExports.useState(null);
  const [perms, setPerms] = reactExports.useState([]);
  const [original, setOriginal] = reactExports.useState([]);
  const [saving, setSaving] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    void getRole(roleId).then((r) => {
      if (r.data) {
        setRole(r.data);
        setPerms(r.data.permissions);
        setOriginal(r.data.permissions);
      }
      setLoading(false);
    });
  }, [roleId]);
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 28 }) });
  if (!role) return /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "Role not found" });
  const dirty = JSON.stringify(perms) !== JSON.stringify(original);
  const readOnly = role.type === "built_in";
  const save = async () => {
    setSaving(true);
    const r = await updateRole(role.id, {
      permissions: perms
    });
    setSaving(false);
    if (r.data) {
      setOriginal(r.data.permissions);
      showToast("Permissions saved.", "success");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 pb-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4 flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[20px] font-bold tracking-[-0.01em]", children: role.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(RoleBadge, { roleName: readOnly ? "Built-in" : "Custom", roleType: role.type, size: "sm" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#6B6B6B]", children: role.description ?? "—" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => navigate({
          to: "/settings/roles/assignments"
        }), className: "mt-1 text-[12px] text-[var(--tenant-primary)] hover:underline", children: [
          role.employeeCount,
          " employee",
          role.employeeCount === 1 ? "" : "s",
          " assigned →"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: readOnly ? /* @__PURE__ */ jsxRuntimeExports.jsx(PermissionGuard, { permission: "settings.roles.manage", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: () => navigate({
        to: "/settings/roles/new",
        search: {
          from: role.id
        }
      }), children: "Clone to customise →" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(PermissionGuard, { permission: "settings.roles.manage", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", size: "sm", onClick: () => navigate({
        to: "/settings/roles/$roleId/edit",
        params: {
          roleId: role.id
        }
      }), children: "Edit name & description" }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-4 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PermissionMatrix, { value: perms, onChange: setPerms, readOnly }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "hidden lg:block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-4 rounded-md border border-[#E5E5E3] bg-white p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold uppercase tracking-wider text-[#6B6B6B] mb-3", children: "Summary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[24px] font-bold text-[#0A0A0A]", children: perms.length }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-[#6B6B6B]", children: "permissions enabled" })
      ] }) })
    ] }),
    dirty && !readOnly && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed bottom-4 left-1/2 -translate-x-1/2 z-40 flex items-center gap-3 px-4 py-3 rounded-lg bg-[#0A0A0A] text-white shadow-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px]", children: "You have unsaved changes." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", className: "text-white hover:bg-white/10", onClick: () => setPerms(original), children: "Discard" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", size: "sm", onClick: save, loading: saving, children: "Save changes →" })
    ] })
  ] });
}
export {
  RoleDetailPage as component
};
