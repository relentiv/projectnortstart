import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { d as useNavigate } from "./_libs/tanstack__react-router.mjs";
import { B as Button } from "./_ssr/Button-Crtgy6Xx.mjs";
import { I as Input } from "./_ssr/Input-CHeJoRlX.mjs";
import { T as Textarea } from "./_ssr/Textarea-DXR3KTuM.mjs";
import { S as Select } from "./_ssr/Select-Bg687n3T.mjs";
import { A as Alert } from "./_ssr/Alert-DIhou9mC.mjs";
import { s as showToast } from "./_ssr/Toast-DlQQlIf6.mjs";
import { P as PermissionGuard } from "./_ssr/PermissionGuard-DHUddp2f.mjs";
import { P as PermissionMatrix } from "./_ssr/PermissionMatrix-CuZ9JoVx.mjs";
import { l as listRoles, d as createRole } from "./_ssr/rbac-CHd75bNv.mjs";

import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval.mjs";
import "./_libs/unenv.mjs";


import "./_libs/seroval-plugins.mjs";


import "./_libs/react-dom.mjs";
import "./_libs/isbot.mjs";
import "./_ssr/router-Arl77cRa.mjs";
import "./_libs/tanstack__query-core.mjs";
import "./_libs/tanstack__react-query.mjs";
import "./_libs/clsx.mjs";
import "./_libs/tailwind-merge.mjs";
import "./_libs/zod.mjs";
import "./_ssr/usePermission-C7-ELJsH.mjs";
import "./_ssr/rbac-CiXrabhS.mjs";
import "./_ssr/Toggle-B-vUqBUT.mjs";
import "./_ssr/InfoTooltip-CiBS8Xkj.mjs";
function NewRolePage() {
  const navigate = useNavigate();
  const [name, setName] = reactExports.useState("");
  const [description, setDescription] = reactExports.useState("");
  const [baseRoleId, setBaseRoleId] = reactExports.useState("");
  const [roles, setRoles] = reactExports.useState([]);
  const [perms, setPerms] = reactExports.useState([]);
  const [saving, setSaving] = reactExports.useState(false);
  reactExports.useEffect(() => {
    void listRoles().then((r) => {
      if (r.data) {
        const built = r.data.filter((x) => x.type === "built_in");
        setRoles(r.data);
        const emp = built.find((x) => x.name === "Employee") ?? built[0];
        if (emp) {
          setBaseRoleId(emp.id);
          setPerms(emp.permissions);
        }
      }
    });
  }, []);
  const onBaseChange = (id) => {
    setBaseRoleId(id);
    if (id === "scratch") {
      setPerms([]);
      return;
    }
    const base = roles.find((r) => r.id === id);
    if (base) setPerms(base.permissions);
  };
  const submit = async () => {
    if (!name.trim()) return;
    setSaving(true);
    const r = await createRole({
      name,
      description,
      permissions: perms
    });
    setSaving(false);
    if (r.data) {
      showToast("Role created.", "success");
      navigate({
        to: "/settings/roles/$roleId",
        params: {
          roleId: r.data.id
        }
      });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PermissionGuard, { permission: "settings.roles.manage", fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { variant: "error", children: "You don't have permission to create roles." }), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-5 gap-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Role name *", value: name, onChange: (e) => setName(e.target.value), placeholder: "e.g. Finance Lead" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { label: "Description", value: description, onChange: (e) => setDescription(e.target.value.slice(0, 200)), rows: 3, hint: `${description.length}/200` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { label: "Base this on", value: baseRoleId, onChange: (e) => onBaseChange(e.target.value), options: [...roles.filter((r) => r.type === "built_in").map((r) => ({
        value: r.id,
        label: r.name
      })), {
        value: "scratch",
        label: "Start from scratch"
      }] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: () => navigate({
          to: "/settings/roles"
        }), children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", onClick: submit, loading: saving, disabled: !name.trim(), children: "Create role →" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] font-semibold uppercase tracking-[0.1em] text-[#6B6B6B] mb-3", children: [
        "Permissions (",
        perms.length,
        ")"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PermissionMatrix, { value: perms, onChange: setPerms })
    ] })
  ] }) });
}
export {
  NewRolePage as component
};
