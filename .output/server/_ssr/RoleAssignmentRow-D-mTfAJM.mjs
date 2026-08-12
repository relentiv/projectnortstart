import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { B as Button } from "./Button-CFBbQAsZ.mjs";
import { T as Textarea } from "./Textarea-DsONP0BR.mjs";
import { S as Select } from "./Select-CDtKs7RG.mjs";
import { S as SlideOver } from "./SlideOver-COdJD426.mjs";
import { E as EmployeeAvatar } from "./EmployeeAvatar-DWNa9Ptn.mjs";
import { R as RoleBadge } from "./RoleBadge-DX2dt138.mjs";
function RoleAssignmentRow({ open, onClose, employee, currentRole, roles, onSave }) {
  const [roleId, setRoleId] = reactExports.useState(currentRole?.id ?? roles[0]?.id ?? "");
  const [reason, setReason] = reactExports.useState("");
  const [saving, setSaving] = reactExports.useState(false);
  const submit = async () => {
    setSaving(true);
    try {
      await onSave(roleId, reason || void 0);
      onClose();
    } finally {
      setSaving(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    SlideOver,
    {
      open,
      onClose,
      title: "Change role",
      description: `Update role for ${employee.firstName} ${employee.lastName}`,
      footer: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: onClose, disabled: saving, children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", onClick: submit, loading: saving, children: "Save" })
      ] }),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(EmployeeAvatar, { employee, size: "md" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-medium text-[14px]", children: [
              employee.firstName,
              " ",
              employee.lastName
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-[#6B6B6B]", children: employee.employeeCode })
          ] }),
          currentRole && /* @__PURE__ */ jsxRuntimeExports.jsx(RoleBadge, { roleName: currentRole.name, roleType: currentRole.type, size: "sm" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Select,
          {
            label: "New role",
            value: roleId,
            onChange: (e) => setRoleId(e.target.value),
            options: roles.map((r) => ({ value: r.id, label: `${r.name} — ${r.description ?? ""}` }))
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { label: "Reason (optional)", value: reason, onChange: (e) => setReason(e.target.value), rows: 3 }) })
      ]
    }
  );
}
export {
  RoleAssignmentRow as R
};
