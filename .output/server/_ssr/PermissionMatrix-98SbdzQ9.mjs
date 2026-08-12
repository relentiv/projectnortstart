import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { M as MODULE_GROUPS, i as isScoped, P as PERMISSIONS } from "./rbac-Ci1w5KuA.mjs";
import { c as cn } from "./router-CPP24NZe.mjs";
import { T as Toggle } from "./Toggle-CRBRKd4-.mjs";
import { I as InfoTooltip } from "./InfoTooltip-CNEVbN-I.mjs";
const OPTIONS = [
  { value: "self", label: "Self" },
  { value: "team", label: "Team" },
  { value: "department", label: "Dept" },
  { value: "all", label: "All" }
];
function ScopeSelector({ value, onChange, disabled, className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { role: "radiogroup", "aria-label": "Permission scope", className: cn("inline-flex rounded-md border border-[#E5E5E3] overflow-hidden", className), children: OPTIONS.map((o) => {
    const active = o.value === value;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        role: "radio",
        "aria-checked": active,
        disabled,
        onClick: () => onChange(o.value),
        className: cn(
          "px-2.5 py-1 text-[11px] font-medium transition-colors",
          active ? "text-white" : "text-[#6B6B6B] hover:bg-[#F2F2F0]",
          "disabled:opacity-50 disabled:cursor-not-allowed"
        ),
        style: active ? { background: "var(--tenant-primary)" } : void 0,
        children: o.label
      },
      o.value
    );
  }) });
}
function PermissionToggle({ permissionKey, entry, disabled, onToggle, onScopeChange }) {
  const on = !!entry;
  const scoped = isScoped(permissionKey);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 py-2 px-3 rounded-md hover:bg-[#FAFAF8]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { checked: on, onChange: onToggle, disabled, size: "sm", label: PERMISSIONS[permissionKey] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] text-[#0A0A0A] flex-1", children: PERMISSIONS[permissionKey] }),
    on && scoped && /* @__PURE__ */ jsxRuntimeExports.jsx(ScopeSelector, { value: entry?.scope ?? "all", onChange: onScopeChange, disabled }),
    !scoped && on && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-[#9CA3AF] italic", children: "global" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(InfoTooltip, { content: permissionKey })
  ] });
}
function PermissionModuleGroup({ group, entries, readOnly, onChange }) {
  const [open, setOpen] = reactExports.useState(true);
  const enabledKeys = new Set(entries.map((e) => e.key));
  const groupEnabled = group.permissions.filter((k) => enabledKeys.has(k)).length;
  const update = (k, mut) => {
    const others = entries.filter((e) => e.key !== k);
    const next = mut(entries.find((e) => e.key === k));
    onChange(next ? [...others, next] : others);
  };
  const allOn = () => {
    const others = entries.filter((e) => !group.permissions.includes(e.key));
    const additions = group.permissions.map((k) => ({
      key: k,
      ...isScoped(k) ? { scope: "all" } : {}
    }));
    onChange([...others, ...additions]);
  };
  const allOff = () => onChange(entries.filter((e) => !group.permissions.includes(e.key)));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-[#E5E5E3] rounded-md bg-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 py-3 border-b border-[#E5E5E3]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setOpen((v) => !v), className: "flex items-center gap-2 text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, className: "text-[#6B6B6B] text-[12px]", children: open ? "▼" : "▶" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14px] font-semibold text-[#0A0A0A]", children: group.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[12px] text-[#6B6B6B]", children: [
          groupEnabled,
          " of ",
          group.permissions.length
        ] })
      ] }),
      !readOnly && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: allOn, className: "text-[12px] text-[var(--tenant-primary)] hover:underline", children: "All on" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: allOff, className: "text-[12px] text-[#6B6B6B] hover:underline", children: "All off" })
      ] })
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("p-2 space-y-0.5", readOnly && "opacity-80"), children: group.permissions.map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      PermissionToggle,
      {
        permissionKey: k,
        entry: entries.find((e) => e.key === k),
        disabled: readOnly,
        onToggle: (on) => update(k, () => on ? { key: k, ...isScoped(k) ? { scope: "all" } : {} } : null),
        onScopeChange: (scope) => update(k, (curr) => ({ key: k, ...curr ?? {}, scope }))
      },
      k
    )) })
  ] });
}
function PermissionMatrix({ value, onChange, readOnly }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
    readOnly && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-md bg-[#FEF3C7] border border-[#FCD34D] px-3 py-2 text-[13px] text-[#92400E]", children: "This is a built-in role. Permissions cannot be changed. Clone it to customise." }),
    MODULE_GROUPS.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      PermissionModuleGroup,
      {
        group: g,
        entries: value.filter((e) => g.permissions.includes(e.key)),
        readOnly,
        onChange: (groupEntries) => {
          const others = value.filter((e) => !g.permissions.includes(e.key));
          onChange([...others, ...groupEntries]);
        }
      },
      g.label
    ))
  ] });
}
export {
  PermissionMatrix as P
};
