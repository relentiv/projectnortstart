import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { f as useParams, d as useNavigate } from "./_libs/tanstack__react-router.mjs";
import { S as Spinner, c as cn } from "./_ssr/router-Arl77cRa.mjs";
import { s as showToast } from "./_ssr/Toast-DlQQlIf6.mjs";
import { f as formsApi, c as countFields, m as makeField, a as makeStep } from "./_ssr/forms-DH39HwWx.mjs";
import { B as Button } from "./_ssr/Button-Crtgy6Xx.mjs";
import { I as Input } from "./_ssr/Input-CHeJoRlX.mjs";
import { T as Textarea } from "./_ssr/Textarea-DXR3KTuM.mjs";
import { S as Select } from "./_ssr/Select-Bg687n3T.mjs";
import { B as Badge } from "./_ssr/Badge-Cm1DzmgP.mjs";
import { A as Alert } from "./_ssr/Alert-DIhou9mC.mjs";
import { T as Toggle } from "./_ssr/Toggle-B-vUqBUT.mjs";
import { P as PermissionGuard } from "./_ssr/PermissionGuard-DHUddp2f.mjs";
import { F as FORM_CATEGORY_LABELS, b as FIELD_TYPE_GROUPS, c as FIELD_TYPE_LABELS, e as FIELD_TYPE_GLYPHS, N as NON_DATA_FIELD_TYPES, d as detectCircularConditions } from "./_ssr/formConditions-CF1AFMuj.mjs";
import { C as Checkbox } from "./_ssr/Checkbox-JVDCHRr9.mjs";
import { shortId } from "./_ssr/localStorage-DOek0dff.mjs";
import { E as EmptyState } from "./_ssr/EmptyState-DCYWhDnT.mjs";
import { C as ConfirmDialog } from "./_ssr/ConfirmDialog-C1NdmGJ3.mjs";

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
import "./_ssr/rbac-CHd75bNv.mjs";
import "./_ssr/Modal-BWxmma2i.mjs";
const EFFECT_OPTIONS = [
  { value: "show", label: "Show this field when…" },
  { value: "hide", label: "Hide this field when…" },
  { value: "require", label: "Require this field when…" },
  { value: "make_optional", label: "Make this field optional when…" }
];
const OPERATOR_OPTIONS = [
  { value: "equals", label: "equals" },
  { value: "not_equals", label: "does not equal" },
  { value: "contains", label: "contains" },
  { value: "not_contains", label: "does not contain" },
  { value: "greater_than", label: "is greater than" },
  { value: "less_than", label: "is less than" },
  { value: "is_empty", label: "is empty" },
  { value: "is_not_empty", label: "is not empty" }
];
function allFields(schema) {
  const out = [];
  const collect = (fields) => {
    for (const f of fields) {
      out.push(f);
      if (f.fields?.length) collect(f.fields);
    }
  };
  schema.steps.forEach((s) => collect(s.fields));
  return out;
}
function ConditionBuilder({
  field,
  schema,
  onChange
}) {
  const condition = field.condition;
  const otherFields = allFields(schema).filter((f) => f.id !== field.id);
  const enable = () => onChange({ effect: "show", logic: "and", rules: [{ fieldId: otherFields[0]?.id ?? "", operator: "equals", value: "" }] });
  const disable = () => onChange(void 0);
  const setCondition = (patch) => {
    if (!condition) return;
    onChange({ ...condition, ...patch });
  };
  const updateRule = (i, patch) => {
    if (!condition) return;
    setCondition({ rules: condition.rules.map((r, idx) => idx === i ? { ...r, ...patch } : r) });
  };
  const addRule = () => {
    if (!condition) return;
    setCondition({ rules: [...condition.rules, { fieldId: otherFields[0]?.id ?? "", operator: "equals", value: "" }] });
  };
  const removeRule = (i) => {
    if (!condition) return;
    setCondition({ rules: condition.rules.filter((_, idx) => idx !== i) });
  };
  const circular = condition ? detectCircularConditions(schema).includes(field.id) : false;
  if (!condition) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-dashed border-[#E5E5E3] p-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "secondary", onClick: enable, disabled: otherFields.length === 0, children: "+ Add conditional logic" }),
      otherFields.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[12px] text-[#6B6B6B]", children: "Add other fields first to reference them in a condition." })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 rounded-md border border-[#E5E5E3] p-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-[#0A0A0A]", children: "Conditional logic" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: disable, className: "text-[12px] text-[#6B6B6B] hover:text-[#DC2626]", children: "Remove" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { options: EFFECT_OPTIONS, value: condition.effect, onChange: (e) => setCondition({ effect: e.target.value }) }),
    condition.rules.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
      Select,
      {
        options: [{ value: "and", label: "Match ALL rules (AND)" }, { value: "or", label: "Match ANY rule (OR)" }],
        value: condition.logic,
        onChange: (e) => setCondition({ logic: e.target.value })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: condition.rules.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[1fr_auto] gap-2 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Select,
          {
            options: otherFields.map((f) => ({ value: f.id, label: f.label || "Untitled" })),
            value: r.fieldId,
            onChange: (e) => updateRule(i, { fieldId: e.target.value })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Select,
          {
            options: OPERATOR_OPTIONS,
            value: r.operator,
            onChange: (e) => updateRule(i, { operator: e.target.value })
          }
        ),
        r.operator !== "is_empty" && r.operator !== "is_not_empty" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            className: "h-11 rounded-sm border border-[#E5E5E3] px-3 text-[15px] outline-none focus:border-[#0A0A0A]",
            value: String(r.value),
            onChange: (e) => updateRule(i, { value: e.target.value })
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", {})
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => removeRule(i), "aria-label": "Remove condition rule", className: "text-[#6B6B6B] hover:text-[#DC2626] text-lg leading-none px-1", children: "×" })
    ] }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "secondary", onClick: addRule, disabled: otherFields.length === 0, children: "+ Add rule" }),
    circular && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { role: "alert", className: "text-[13px] text-[#B91C1C]", children: "⚠ This creates a circular dependency." })
  ] });
}
function OptionsEditor({
  options,
  onChange
}) {
  const update = (id, patch) => {
    onChange(options.map((o) => o.id === id ? { ...o, ...patch } : o));
  };
  const add = () => {
    const n = options.length + 1;
    onChange([...options, { id: shortId(8), label: `Option ${n}`, value: `option_${n}` }]);
  };
  const remove = (id) => onChange(options.filter((o) => o.id !== id));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-[#0A0A0A]", children: "Options" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: options.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          value: o.label,
          onChange: (e) => update(o.id, { label: e.target.value, value: e.target.value.trim().toLowerCase().replace(/\s+/g, "_") || o.value }),
          className: "flex-1"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => remove(o.id),
          "aria-label": `Remove ${o.label}`,
          className: "text-[#6B6B6B] hover:text-[#DC2626] transition-colors text-lg leading-none px-1",
          children: "×"
        }
      )
    ] }, o.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "secondary", onClick: add, children: "+ Add option" })
  ] });
}
function RepeatableGroupEditor({
  field,
  onChange
}) {
  const subFields = field.fields ?? [];
  const addSubField = (type) => {
    onChange({ fields: [...subFields, makeField(type, subFields.length)] });
  };
  const updateSubField = (id, patch) => {
    onChange({ fields: subFields.map((f) => f.id === id ? { ...f, ...patch } : f) });
  };
  const removeSubField = (id) => {
    onChange({ fields: subFields.filter((f) => f.id !== id) });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          type: "number",
          label: "Minimum rows",
          value: field.minRows ?? 0,
          onChange: (e) => onChange({ minRows: Number(e.target.value) || 0 })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          type: "number",
          label: "Maximum rows",
          value: field.maxRows ?? 10,
          onChange: (e) => onChange({ maxRows: Number(e.target.value) || 1 })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-[#0A0A0A] mb-2", children: "Fields in each entry" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        subFields.map((sf) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 rounded-md border border-[#E5E5E3] p-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.06em] text-[#6B6B6B] w-24 shrink-0", children: FIELD_TYPE_LABELS[sf.type] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: sf.label, onChange: (e) => updateSubField(sf.id, { label: e.target.value }), className: "flex-1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => removeSubField(sf.id), "aria-label": "Remove sub-field", className: "text-[#6B6B6B] hover:text-[#DC2626] text-lg leading-none px-1", children: "×" })
        ] }, sf.id)),
        subFields.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#6B6B6B]", children: "No fields yet — add one below." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex flex-wrap gap-2", children: FIELD_TYPE_GROUPS.flatMap((g) => g.types).filter((t) => t !== "repeatable_group").slice(0, 8).map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "secondary", onClick: () => addSubField(t), children: [
        "+ ",
        FIELD_TYPE_LABELS[t]
      ] }, t)) })
    ] })
  ] });
}
const TYPE_OPTIONS = [
  { value: "min", label: "Minimum value" },
  { value: "max", label: "Maximum value" },
  { value: "min_length", label: "Minimum length" },
  { value: "max_length", label: "Maximum length" },
  { value: "pattern", label: "Pattern (regex)" },
  { value: "custom", label: "Custom (regex)" }
];
function ValidationRuleEditor({
  rules,
  onChange
}) {
  const update = (i, patch) => {
    onChange(rules.map((r, idx) => idx === i ? { ...r, ...patch } : r));
  };
  const add = () => onChange([...rules, { type: "min_length", value: "", message: "This value is invalid." }]);
  const remove = (i) => onChange(rules.filter((_, idx) => idx !== i));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-[#0A0A0A]", children: "Validation rules" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: rules.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-[#E5E5E3] p-3 space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Select,
          {
            options: TYPE_OPTIONS,
            value: r.type,
            onChange: (e) => update(i, { type: e.target.value }),
            className: "flex-1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => remove(i),
            "aria-label": "Remove rule",
            className: "text-[#6B6B6B] hover:text-[#DC2626] transition-colors text-lg leading-none px-1",
            children: "×"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          label: "Value",
          value: String(r.value),
          onChange: (e) => update(i, { value: e.target.value })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          label: "Error message",
          value: r.message,
          onChange: (e) => update(i, { message: e.target.value })
        }
      )
    ] }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "secondary", onClick: add, children: "+ Add validation rule" })
  ] });
}
const ADDRESS_COMPONENTS = [
  { value: "line1", label: "Address line 1" },
  { value: "line2", label: "Address line 2" },
  { value: "city", label: "City" },
  { value: "state", label: "State" },
  { value: "pincode", label: "Pincode" },
  { value: "country", label: "Country" }
];
function FieldEditor({
  field,
  schema,
  onChange
}) {
  const hasOptions = ["dropdown", "radio", "checkbox_group", "multi_select"].includes(field.type);
  const isDataField = !NON_DATA_FIELD_TYPES.includes(field.type);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold uppercase tracking-[0.08em] text-[#6B6B6B] mb-3", children: "Field settings" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Label", value: field.label, onChange: (e) => onChange({ label: e.target.value }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { label: "Help text", rows: 2, value: field.helpText ?? "", onChange: (e) => onChange({ helpText: e.target.value }) }),
        isDataField && /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Placeholder", value: field.placeholder ?? "", onChange: (e) => onChange({ placeholder: e.target.value }) })
      ] })
    ] }),
    isDataField && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] font-medium text-[#0A0A0A]", children: "Required" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { checked: field.required, onChange: (v) => onChange({ required: v }), size: "sm", label: "Required" })
    ] }),
    field.type === "long_text" && /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", label: "Rows", value: field.rows ?? 4, onChange: (e) => onChange({ rows: Number(e.target.value) || 1 }) }),
    hasOptions && /* @__PURE__ */ jsxRuntimeExports.jsx(OptionsEditor, { options: field.options ?? [], onChange: (options) => onChange({ options }) }),
    field.type === "file_upload" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", label: "Max files", value: field.maxFiles ?? 1, onChange: (e) => onChange({ maxFiles: Number(e.target.value) || 1 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", label: "Max file size (MB)", value: field.maxFileSizeMB ?? 5, onChange: (e) => onChange({ maxFileSizeMB: Number(e.target.value) || 1 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          label: "Accepted file types (comma separated)",
          value: (field.acceptedFileTypes ?? []).join(", "),
          onChange: (e) => onChange({ acceptedFileTypes: e.target.value.split(",").map((s) => s.trim()).filter(Boolean) })
        }
      )
    ] }),
    field.type === "address" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-[#0A0A0A] mb-2", children: "Address components" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5", children: ADDRESS_COMPONENTS.map((c) => {
        const checked = (field.addressComponents ?? []).includes(c.value);
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          Checkbox,
          {
            label: c.label,
            checked,
            onChange: (e) => {
              const current = field.addressComponents ?? [];
              onChange({
                addressComponents: e.target.checked ? [...current, c.value] : current.filter((v) => v !== c.value)
              });
            }
          },
          c.value
        );
      }) })
    ] }),
    field.type === "date" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "text", label: "Minimum date", placeholder: "YYYY-MM-DD", value: field.minDate ?? "", onChange: (e) => onChange({ minDate: e.target.value }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "text", label: "Maximum date", placeholder: "YYYY-MM-DD", value: field.maxDate ?? "", onChange: (e) => onChange({ maxDate: e.target.value }) })
    ] }),
    field.type === "repeatable_group" && /* @__PURE__ */ jsxRuntimeExports.jsx(RepeatableGroupEditor, { field, onChange }),
    field.type === "signature" && /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Signature label", value: field.signatureLabel ?? "", onChange: (e) => onChange({ signatureLabel: e.target.value }) }),
    isDataField && /* @__PURE__ */ jsxRuntimeExports.jsx(ValidationRuleEditor, { rules: field.validation, onChange: (validation) => onChange({ validation }) }),
    isDataField && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold uppercase tracking-[0.08em] text-[#6B6B6B] mb-3", children: "Conditional logic" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ConditionBuilder, { field, schema, onChange: (condition) => onChange({ condition }) })
    ] })
  ] });
}
function FieldPalette({ onAdd }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-64 shrink-0 space-y-5 overflow-y-auto", children: FIELD_TYPE_GROUPS.map((group) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#6B6B6B]", children: group.label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1", children: group.types.map((type) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => onAdd(type),
        className: "flex w-full items-center gap-2.5 rounded-md border border-[#E5E5E3] bg-white px-3 py-2 text-left text-[13px] text-[#0A0A0A] hover:border-[#0A0A0A] hover:bg-[#F2F2F0] transition-colors",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-sm bg-[#F2F2F0] text-[13px]", children: FIELD_TYPE_GLYPHS[type] }),
          FIELD_TYPE_LABELS[type]
        ]
      },
      type
    )) })
  ] }, group.label)) });
}
function FieldBlock({
  field,
  selected,
  onSelect,
  onDuplicate,
  onDelete,
  onMoveUp,
  onMoveDown,
  canMoveUp,
  canMoveDown,
  draggable,
  onDragStart,
  onDragOver,
  onDrop
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      draggable,
      onDragStart,
      onDragOver,
      onDrop,
      onClick: onSelect,
      role: "button",
      tabIndex: 0,
      onKeyDown: (e) => (e.key === "Enter" || e.key === " ") && onSelect(),
      className: cn(
        "group flex items-start gap-3 rounded-md border bg-white p-3 cursor-pointer transition-colors",
        selected ? "border-[#0A0A0A] ring-1 ring-[#0A0A0A]" : "border-[#E5E5E3] hover:border-[#0A0A0A]/40"
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, className: "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-sm bg-[#F2F2F0] text-[13px]", children: FIELD_TYPE_GLYPHS[field.type] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "truncate text-[14px] font-medium text-[#0A0A0A]", children: [
            field.label || "Untitled",
            field.required && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1 text-[#DC2626]", children: "*" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[12px] text-[#6B6B6B]", children: [
            FIELD_TYPE_LABELS[field.type],
            field.condition ? " · conditional" : ""
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex shrink-0 items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", "aria-label": "Move up", disabled: !canMoveUp, onClick: (e) => {
            e.stopPropagation();
            onMoveUp();
          }, className: "disabled:opacity-30 px-1 text-[13px]", children: "↑" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", "aria-label": "Move down", disabled: !canMoveDown, onClick: (e) => {
            e.stopPropagation();
            onMoveDown();
          }, className: "disabled:opacity-30 px-1 text-[13px]", children: "↓" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", "aria-label": "Duplicate field", onClick: (e) => {
            e.stopPropagation();
            onDuplicate();
          }, className: "px-1 text-[13px]", children: "⧉" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", "aria-label": "Delete field", onClick: (e) => {
            e.stopPropagation();
            onDelete();
          }, className: "px-1 text-[13px] text-[#6B6B6B] hover:text-[#DC2626]", children: "×" })
        ] })
      ]
    }
  );
}
function BuilderCanvas({
  step,
  selectedFieldId,
  onSelectField,
  onReorder,
  onDuplicate,
  onDelete
}) {
  const dragIndex = reactExports.useRef(null);
  const move = (from, to) => {
    if (to < 0 || to >= step.fields.length || from === to) return;
    const next = [...step.fields];
    const [item] = next.splice(from, 1);
    next.splice(to, 0, item);
    onReorder(next.map((f, i) => ({ ...f, displayOrder: i })));
  };
  if (step.fields.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      EmptyState,
      {
        title: "No fields yet",
        subtitle: "Click a field type from the left panel to add it to this step."
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: step.fields.map((field, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    FieldBlock,
    {
      field,
      selected: field.id === selectedFieldId,
      onSelect: () => onSelectField(field.id),
      onDuplicate: () => onDuplicate(field.id),
      onDelete: () => onDelete(field.id),
      onMoveUp: () => move(i, i - 1),
      onMoveDown: () => move(i, i + 1),
      canMoveUp: i > 0,
      canMoveDown: i < step.fields.length - 1,
      draggable: true,
      onDragStart: () => {
        dragIndex.current = i;
      },
      onDragOver: (e) => e.preventDefault(),
      onDrop: () => {
        if (dragIndex.current !== null) move(dragIndex.current, i);
        dragIndex.current = null;
      }
    },
    field.id
  )) });
}
function StepManager({
  schema,
  activeStepId,
  onSelectStep,
  onChange
}) {
  const toggleMultiStep = (checked) => {
    if (!checked && schema.steps.length > 1) {
      const merged = {
        ...schema.steps[0],
        fields: schema.steps.flatMap((s) => s.fields)
      };
      onChange({ isMultiStep: false, steps: [merged] });
      onSelectStep(merged.id);
    } else {
      onChange({ isMultiStep: checked });
    }
  };
  const addStep = () => {
    const step = makeStep(`Step ${schema.steps.length + 1}`);
    onChange({ steps: [...schema.steps, step] });
    onSelectStep(step.id);
  };
  const renameStep = (id, title) => {
    onChange({ steps: schema.steps.map((s) => s.id === id ? { ...s, title } : s) });
  };
  const removeStep = (id) => {
    if (schema.steps.length <= 1) {
      showToast("A form needs at least one step.", "error");
      return;
    }
    const next = schema.steps.filter((s) => s.id !== id);
    onChange({ steps: next });
    if (activeStepId === id) onSelectStep(next[0].id);
  };
  const move = (id, dir) => {
    const idx = schema.steps.findIndex((s) => s.id === id);
    const target = idx + dir;
    if (target < 0 || target >= schema.steps.length) return;
    const next = [...schema.steps];
    [next[idx], next[target]] = [next[target], next[idx]];
    onChange({ steps: next });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] font-medium text-[#0A0A0A]", children: "Multi-step form" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { checked: schema.isMultiStep, onChange: toggleMultiStep, size: "sm", label: "Multi-step form" })
    ] }),
    schema.isMultiStep && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      schema.steps.map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `flex items-center gap-2 rounded-md border p-2 ${activeStepId === step.id ? "border-[#0A0A0A]" : "border-[#E5E5E3]"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => onSelectStep(step.id), className: "text-[12px] text-[#6B6B6B] w-5 shrink-0", children: i + 1 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: step.title, onChange: (e) => renameStep(step.id, e.target.value), className: "flex-1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => move(step.id, -1), disabled: i === 0, "aria-label": "Move step up", className: "disabled:opacity-30 px-1", children: "↑" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => move(step.id, 1), disabled: i === schema.steps.length - 1, "aria-label": "Move step down", className: "disabled:opacity-30 px-1", children: "↓" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => removeStep(step.id), "aria-label": "Delete step", className: "text-[#6B6B6B] hover:text-[#DC2626] text-lg leading-none px-1", children: "×" })
          ]
        },
        step.id
      )),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "secondary", onClick: addStep, children: "+ Add step" })
    ] })
  ] });
}
function FormPublishConfirm({
  schema,
  open,
  onOpenChange,
  onConfirm
}) {
  const fieldCount = countFields(schema);
  const circular = detectCircularConditions(schema);
  const blocked = fieldCount === 0 || circular.length > 0;
  const description = fieldCount === 0 ? "This form has no fields yet. Add at least one field before publishing." : circular.length > 0 ? "This form has circular conditional logic that must be resolved before publishing." : `This form has ${fieldCount} field${fieldCount === 1 ? "" : "s"}. Publishing makes it available immediately and creates an immutable version.`;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ConfirmDialog,
    {
      open,
      onOpenChange,
      title: "Publish this form?",
      description,
      confirmLabel: blocked ? "Resolve issues first" : "Publish",
      variant: blocked ? "warning" : "default",
      onConfirm: async () => {
        if (blocked) return;
        await onConfirm();
      }
    }
  );
}
const CATEGORY_OPTIONS = Object.entries(FORM_CATEGORY_LABELS).map(([value, label]) => ({ value, label }));
const STATUS_BADGE = {
  draft: { label: "Draft", variant: "default" },
  published: { label: "Published", variant: "success" },
  archived: { label: "Archived", variant: "warning" }
};
function FormBuilder({ initial }) {
  const navigate = useNavigate();
  const [schema, setSchema] = reactExports.useState(initial);
  const [wasPublished] = reactExports.useState(initial.status === "published");
  const [activeStepId, setActiveStepId] = reactExports.useState(initial.steps[0]?.id ?? "");
  const [selectedFieldId, setSelectedFieldId] = reactExports.useState(null);
  const [saving, setSaving] = reactExports.useState(false);
  const [publishOpen, setPublishOpen] = reactExports.useState(false);
  const activeStep = reactExports.useMemo(
    () => schema.steps.find((s) => s.id === activeStepId) ?? schema.steps[0],
    [schema, activeStepId]
  );
  const selectedField = reactExports.useMemo(
    () => activeStep?.fields.find((f) => f.id === selectedFieldId) ?? null,
    [activeStep, selectedFieldId]
  );
  const patchSchema = (patch) => setSchema((s) => ({ ...s, ...patch }));
  const patchStepFields = (fields) => {
    setSchema((s) => ({
      ...s,
      steps: s.steps.map((step) => step.id === activeStep?.id ? { ...step, fields } : step)
    }));
  };
  const addField = (type) => {
    if (!activeStep) return;
    const field = makeField(type, activeStep.fields.length);
    patchStepFields([...activeStep.fields, field]);
    setSelectedFieldId(field.id);
  };
  const updateField = (id, patch) => {
    if (!activeStep) return;
    patchStepFields(activeStep.fields.map((f) => f.id === id ? { ...f, ...patch } : f));
  };
  const duplicateField = (id) => {
    if (!activeStep) return;
    const idx = activeStep.fields.findIndex((f) => f.id === id);
    if (idx === -1) return;
    const copy = { ...structuredClone(activeStep.fields[idx]), id: `${id}_copy_${Date.now().toString(36)}` };
    const next = [...activeStep.fields];
    next.splice(idx + 1, 0, copy);
    patchStepFields(next.map((f, i) => ({ ...f, displayOrder: i })));
  };
  const deleteField = (id) => {
    if (!activeStep) return;
    patchStepFields(activeStep.fields.filter((f) => f.id !== id).map((f, i) => ({ ...f, displayOrder: i })));
    if (selectedFieldId === id) setSelectedFieldId(null);
  };
  const save = async () => {
    setSaving(true);
    const res = await formsApi.save(schema);
    setSaving(false);
    if (res.error) {
      showToast(res.error.message, "error");
      return;
    }
    if (res.data) {
      setSchema(res.data);
      showToast("Form saved.", "success");
    }
  };
  const publish = async () => {
    const saveRes = await formsApi.save(schema);
    if (saveRes.error || !saveRes.data) {
      showToast(saveRes.error?.message ?? "Could not save form.", "error");
      return;
    }
    const res = await formsApi.publish(saveRes.data.id);
    if (res.error) {
      showToast(res.error.message, "error");
      return;
    }
    if (res.data) {
      setSchema(res.data);
      showToast("Form published.", "success");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full flex-col", children: [
    wasPublished && schema.status !== "archived" && /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { variant: "warning", className: "mb-4", children: "This form is published. Editing will create a new draft version that must be republished." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex flex-wrap items-center gap-3 rounded-lg border border-[#E5E5E3] bg-white p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          value: schema.title,
          onChange: (e) => patchSchema({ title: e.target.value }),
          className: "max-w-xs",
          "aria-label": "Form title"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Select,
        {
          options: CATEGORY_OPTIONS,
          value: schema.category,
          onChange: (e) => patchSchema({ category: e.target.value }),
          className: "w-52",
          "aria-label": "Form category"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: STATUS_BADGE[schema.status].variant, children: STATUS_BADGE[schema.status].label }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[12px] text-[#6B6B6B]", children: [
        "v",
        schema.version
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "secondary",
            onClick: () => navigate({ to: "/settings/forms/$formId/preview", params: { formId: schema.id } }),
            children: "Preview"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: save, loading: saving, children: "Save" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PermissionGuard, { permission: ["forms.create", "forms.manage_all"], children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => setPublishOpen(true), children: "Publish" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 gap-4 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FieldPalette, { onAdd: addField }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto rounded-lg border border-[#E5E5E3] bg-[#FAFAF8] p-4", children: [
        schema.steps.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 flex flex-wrap gap-2", children: schema.steps.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setActiveStepId(s.id),
            className: `rounded-full px-3 py-1 text-[12px] font-medium transition-colors ${s.id === activeStep?.id ? "bg-[#0A0A0A] text-white" : "bg-white border border-[#E5E5E3] text-[#6B6B6B]"}`,
            children: s.title
          },
          s.id
        )) }),
        activeStep && /* @__PURE__ */ jsxRuntimeExports.jsx(
          BuilderCanvas,
          {
            step: activeStep,
            selectedFieldId,
            onSelectField: setSelectedFieldId,
            onReorder: patchStepFields,
            onDuplicate: duplicateField,
            onDelete: deleteField
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-80 shrink-0 overflow-y-auto rounded-lg border border-[#E5E5E3] bg-white p-4", children: selectedField ? /* @__PURE__ */ jsxRuntimeExports.jsx(FieldEditor, { field: selectedField, schema, onChange: (patch) => updateField(selectedField.id, patch) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold uppercase tracking-[0.08em] text-[#6B6B6B]", children: "Form settings" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { label: "Description", rows: 3, value: schema.description ?? "", onChange: (e) => patchSchema({ description: e.target.value }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StepManager, { schema, activeStepId, onSelectStep: setActiveStepId, onChange: patchSchema }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 border-t border-[#E5E5E3] pt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] font-medium text-[#0A0A0A]", children: "Allow draft saving" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Toggle,
              {
                checked: schema.settings.allowDraftSaving,
                onChange: (v) => patchSchema({ settings: { ...schema.settings, allowDraftSaving: v } }),
                size: "sm",
                label: "Allow draft saving"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] font-medium text-[#0A0A0A]", children: "Show progress bar" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Toggle,
              {
                checked: schema.settings.showProgressBar,
                onChange: (v) => patchSchema({ settings: { ...schema.settings, showProgressBar: v } }),
                size: "sm",
                label: "Show progress bar"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              label: "Submit button label",
              value: schema.settings.submitButtonLabel,
              onChange: (e) => patchSchema({ settings: { ...schema.settings, submitButtonLabel: e.target.value } })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              label: "Success message",
              rows: 2,
              value: schema.settings.successMessage,
              onChange: (e) => patchSchema({ settings: { ...schema.settings, successMessage: e.target.value } })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[12px] text-[#6B6B6B]", children: [
          countFields(schema),
          " field",
          countFields(schema) === 1 ? "" : "s",
          " total."
        ] })
      ] }) })
    ] }),
    saving && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sr-only", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 16 }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FormPublishConfirm, { schema, open: publishOpen, onOpenChange: setPublishOpen, onConfirm: publish })
  ] });
}
function FormBuilderPage() {
  const {
    formId
  } = useParams({
    from: "/_app/settings/forms/$formId/"
  });
  const navigate = useNavigate();
  const [schema, setSchema] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    void (async () => {
      setLoading(true);
      const res = await formsApi.get(formId);
      if (res.error || !res.data) {
        showToast(res.error?.message ?? "Form not found.", "error");
        await navigate({
          to: "/settings/forms"
        });
        return;
      }
      setSchema(res.data);
      setLoading(false);
    })();
  }, [formId, navigate]);
  if (loading || !schema) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 24 }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[calc(100vh-140px)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FormBuilder, { initial: schema }, schema.id) });
}
export {
  FormBuilderPage as component
};
