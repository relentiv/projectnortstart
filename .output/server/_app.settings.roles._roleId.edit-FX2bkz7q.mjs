import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { f as useParams, d as useNavigate } from "./_libs/tanstack__react-router.mjs";
import { B as Button } from "./_ssr/Button-CFBbQAsZ.mjs";
import { I as Input } from "./_ssr/Input-BJe__i93.mjs";
import { T as Textarea } from "./_ssr/Textarea-DsONP0BR.mjs";
import { S as Spinner } from "./_ssr/router-CPP24NZe.mjs";
import { s as showToast } from "./_ssr/Toast-DgpI28ao.mjs";
import { P as PermissionGuard } from "./_ssr/PermissionGuard-DrHCZdH7.mjs";
import { j as getRole, u as updateRole } from "./_ssr/rbac-Ci1w5KuA.mjs";

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
import "./_ssr/usePermission-DoLX-EvC.mjs";
import "./_ssr/rbac-BwLVdIYU.mjs";
function EditRolePage() {
  const {
    roleId
  } = useParams({
    from: "/_app/settings/roles/$roleId/edit"
  });
  const navigate = useNavigate();
  const [role, setRole] = reactExports.useState(null);
  const [name, setName] = reactExports.useState("");
  const [description, setDescription] = reactExports.useState("");
  const [saving, setSaving] = reactExports.useState(false);
  reactExports.useEffect(() => {
    void getRole(roleId).then((r) => {
      if (r.data) {
        setRole(r.data);
        setName(r.data.name);
        setDescription(r.data.description ?? "");
      }
    });
  }, [roleId]);
  if (!role) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 28 }) });
  const submit = async () => {
    setSaving(true);
    await updateRole(role.id, {
      name,
      description
    });
    setSaving(false);
    showToast("Role updated.", "success");
    navigate({
      to: "/settings/roles/$roleId",
      params: {
        roleId: role.id
      }
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PermissionGuard, { permission: "settings.roles.manage", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[18px] font-semibold", children: "Edit role" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Role name", value: name, onChange: (e) => setName(e.target.value) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { label: "Description", rows: 3, value: description, onChange: (e) => setDescription(e.target.value.slice(0, 200)), hint: `${description.length}/200` }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: () => navigate({
        to: "/settings/roles/$roleId",
        params: {
          roleId: role.id
        }
      }), children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", onClick: submit, loading: saving, children: "Save changes" })
    ] })
  ] }) });
}
export {
  EditRolePage as component
};
