import { j as jsxRuntimeExports, r as reactExports } from "./_libs/react.mjs";
import { B as Button } from "./_ssr/Button-Crtgy6Xx.mjs";
import { E as EmptyState } from "./_ssr/EmptyState-DCYWhDnT.mjs";
import { C as ConfirmDialog } from "./_ssr/ConfirmDialog-C1NdmGJ3.mjs";
import { s as showToast } from "./_ssr/Toast-DlQQlIf6.mjs";
import { P as PermissionGuard } from "./_ssr/PermissionGuard-DHUddp2f.mjs";
import { I as Input } from "./_ssr/Input-CHeJoRlX.mjs";
import { T as Textarea } from "./_ssr/Textarea-DXR3KTuM.mjs";
import { S as Select } from "./_ssr/Select-Bg687n3T.mjs";
import { S as SlideOver } from "./_ssr/SlideOver-DXNNm8Us.mjs";
import { T as Toggle } from "./_ssr/Toggle-B-vUqBUT.mjs";
import { R as RadioGroup } from "./_ssr/RadioGroup-Dl_ThJE1.mjs";
import { I as InfoTooltip } from "./_ssr/InfoTooltip-CiBS8Xkj.mjs";
import { C as CurrencyInput } from "./_ssr/CurrencyInput-iJIPpSaU.mjs";
import { p as payrollApi, j as formatCurrency } from "./_ssr/router-Arl77cRa.mjs";
import { B as Badge } from "./_ssr/Badge-Cm1DzmgP.mjs";

import "./_ssr/Modal-BWxmma2i.mjs";
import "./_ssr/usePermission-C7-ELJsH.mjs";
import "./_ssr/rbac-CiXrabhS.mjs";
import "./_ssr/rbac-CHd75bNv.mjs";
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
const STATUTORY_RULES = {
  pf_employee: "PF Employee = 12% of Basic, capped at ₹1,800/month.",
  pf_employer: "PF Employer = 12% of Basic, capped at ₹1,800/month.",
  esi_employee: "ESI Employee = 0.75% of gross, only when gross ≤ ₹21,000/month.",
  esi_employer: "ESI Employer = 3.25% of gross, only when gross ≤ ₹21,000/month.",
  professional_tax: "Professional Tax follows state slabs. Karnataka default: ₹200/month above ₹15,000 gross.",
  tds: "TDS is entered manually per employee in MVP1."
};
function SalaryComponentForm({ open, onClose, component, usedInStructure, onSaved }) {
  const [name, setName] = reactExports.useState("");
  const [code, setCode] = reactExports.useState("");
  const [type, setType] = reactExports.useState("earning");
  const [method, setMethod] = reactExports.useState("fixed");
  const [value, setValue] = reactExports.useState(0);
  const [statutoryType, setStatutoryType] = reactExports.useState("pf_employee");
  const [taxable, setTaxable] = reactExports.useState(true);
  const [active, setActive] = reactExports.useState(true);
  const [description, setDescription] = reactExports.useState("");
  const [codeError, setCodeError] = reactExports.useState();
  const [error, setError] = reactExports.useState();
  const [saving, setSaving] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (!open) return;
    setName(component?.name ?? "");
    setCode(component?.code ?? "");
    setType(component?.type ?? "earning");
    setMethod(component?.calculationMethod ?? "fixed");
    setValue(component?.value ?? 0);
    setStatutoryType(component?.statutoryType ?? "pf_employee");
    setTaxable(component?.taxable ?? true);
    setActive(component?.isActive ?? true);
    setDescription(component?.description ?? "");
    setCodeError(void 0);
    setError(void 0);
  }, [open, component]);
  const checkCode = async () => {
    if (!code) return;
    const unique = await payrollApi.isCodeUnique(code, component?.id);
    setCodeError(unique ? void 0 : "This code is already in use.");
  };
  const submit = async () => {
    if (!name.trim() || !code.trim()) {
      setError("Name and code are required.");
      return;
    }
    if (code.trim().length < 2 || code.trim().length > 8) {
      setError("Code must be 2–8 characters.");
      return;
    }
    setSaving(true);
    const res = await payrollApi.saveComponent({
      id: component?.id,
      name: name.trim(),
      code: code.trim().toUpperCase(),
      type,
      calculationMethod: method,
      value: method === "statutory" || method === "balance" ? void 0 : value ?? 0,
      statutoryType: method === "statutory" ? statutoryType : void 0,
      taxable,
      isActive: active,
      description: description.trim() || void 0
    });
    setSaving(false);
    if (res.error) {
      setError(res.error.message);
      return;
    }
    onSaved();
    onClose();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    SlideOver,
    {
      open,
      onClose,
      width: "md",
      title: component ? "Edit component" : "Add component",
      description: "Salary components are the building blocks of every structure.",
      footer: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: onClose, disabled: saving, children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", onClick: submit, loading: saving, children: component ? "Save changes" : "Add component" })
      ] }),
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#DC2626]", children: error }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Component name", value: name, onChange: (e) => {
          setName(e.target.value);
          if (!component) setCode(e.target.value.replace(/[^a-zA-Z]/g, "").slice(0, 6).toUpperCase());
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Code", value: code, onBlur: checkCode, error: codeError, hint: "2–8 characters, unique.", onChange: (e) => setCode(e.target.value.toUpperCase()) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Select,
          {
            label: "Type",
            value: type,
            disabled: usedInStructure,
            hint: usedInStructure ? "Locked — this component is already used in a salary structure." : void 0,
            onChange: (e) => setType(e.target.value),
            options: [
              { value: "earning", label: "Earning" },
              { value: "deduction", label: "Deduction" },
              { value: "employer_contribution", label: "Employer contribution" }
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-1.5 text-[13px] font-medium text-[#0A0A0A]", children: "Calculation method" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            RadioGroup,
            {
              name: "calc-method",
              value: method,
              onChange: (v) => setMethod(v),
              options: [
                { value: "fixed", label: "Fixed amount" },
                { value: "percentage_of_basic", label: "% of Basic" },
                { value: "percentage_of_ctc", label: "% of CTC" },
                { value: "statutory", label: "Statutory" },
                { value: "slab", label: "Slab based (Professional Tax)" },
                { value: "balance", label: "Balance of CTC" }
              ]
            }
          )
        ] }),
        method === "fixed" && /* @__PURE__ */ jsxRuntimeExports.jsx(CurrencyInput, { label: "Monthly amount", value, onChange: setValue, min: 0 }),
        (method === "percentage_of_basic" || method === "percentage_of_ctc") && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              label: "Percentage",
              type: "number",
              value: String(value ?? 0),
              onChange: (e) => setValue(Number(e.target.value))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(InfoTooltip, { content: method === "percentage_of_basic" ? "Calculated as this % of the BASIC component in the same structure." : "Calculated as this % of monthly CTC." })
        ] }),
        method === "statutory" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Select,
            {
              label: "Statutory type",
              value: statutoryType,
              onChange: (e) => setStatutoryType(e.target.value),
              options: [
                { value: "pf_employee", label: "PF Employee" },
                { value: "pf_employer", label: "PF Employer" },
                { value: "esi_employee", label: "ESI Employee" },
                { value: "esi_employer", label: "ESI Employer" },
                { value: "professional_tax", label: "Professional Tax" },
                { value: "tds", label: "TDS" }
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#6B6B6B]", children: STATUTORY_RULES[statutoryType] })
        ] }),
        method === "slab" && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#6B6B6B]", children: "Uses the default Karnataka slab: ₹0 up to ₹15,000 gross, ₹200 above." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[13px] font-medium inline-flex items-center gap-1.5", children: [
            "Taxable income component",
            /* @__PURE__ */ jsxRuntimeExports.jsx(InfoTooltip, { content: "Taxable components are included in income tax calculations." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { checked: taxable, onChange: setTaxable, label: "Taxable" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] font-medium", children: "Active" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { checked: active, onChange: setActive, label: "Active" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { label: "Description", rows: 3, value: description, onChange: (e) => setDescription(e.target.value) })
      ] })
    }
  );
}
function describeCalculation(c) {
  switch (c.calculationMethod) {
    case "fixed":
      return `${formatCurrency(c.value ?? 0)} per month`;
    case "percentage_of_basic":
      return `${c.value ?? 0}% of Basic`;
    case "percentage_of_ctc":
      return `${c.value ?? 0}% of CTC`;
    case "balance":
      return "Balance of CTC";
    case "slab":
      return "Slab based";
    case "statutory":
      return {
        pf_employee: "12% of Basic, capped at ₹1,800/month",
        pf_employer: "12% of Basic, capped at ₹1,800/month",
        esi_employee: "0.75% of gross (gross ≤ ₹21,000)",
        esi_employer: "3.25% of gross (gross ≤ ₹21,000)",
        professional_tax: "State slab",
        tds: "Manual entry (MVP1)"
      }[c.statutoryType ?? "tds"];
    default:
      return "—";
  }
}
function SalaryComponentRow({ component, onEdit, onToggleActive, onDelete, onDragStart, onDrop, canManage }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      draggable: !!canManage,
      onDragStart,
      onDragOver: (e) => e.preventDefault(),
      onDrop,
      className: "flex items-center gap-3 px-4 py-3 border-b border-[#F2F2F0] last:border-0 hover:bg-[#FAFAF8] transition-colors",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, className: "text-[#9CA3AF] cursor-grab select-none", children: "≡" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[11px] bg-[#F2F2F0] text-[#6B6B6B] rounded-sm px-2 py-1", children: component.code }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[14px] font-medium text-[#0A0A0A] truncate", children: [
            component.name,
            !component.isActive && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 text-[12px] text-[#6B6B6B]", children: "(inactive)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-[#6B6B6B]", children: describeCalculation(component) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: component.taxable ? "success" : "default", children: component.taxable ? "Taxable" : "Exempt" }),
        component.isSystemDefined && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "accent", children: "System" }),
        canManage && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", onClick: onEdit, children: "Edit" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", onClick: onToggleActive, children: component.isActive ? "Deactivate" : "Activate" }),
          !component.isSystemDefined && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", className: "text-[#DC2626]", onClick: onDelete, children: "Delete" })
        ] })
      ]
    }
  );
}
function SalaryComponentsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PermissionGuard, { permission: "payroll.configure", fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 text-[14px] text-[#6B6B6B]", children: "You don't have permission to configure payroll." }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(SalaryComponentsInner, {}) });
}
function SalaryComponentsInner() {
  const [list, setList] = reactExports.useState([]);
  const [structures, setStructures] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [formOpen, setFormOpen] = reactExports.useState(false);
  const [editing, setEditing] = reactExports.useState(null);
  const [deleteTarget, setDeleteTarget] = reactExports.useState(null);
  const [dragId, setDragId] = reactExports.useState(null);
  const load = async () => {
    setLoading(true);
    const [componentsRes, structuresRes] = await Promise.all([payrollApi.listComponents(), payrollApi.listStructures()]);
    if (componentsRes.data) setList(componentsRes.data);
    setStructures((structuresRes.data ?? []).flatMap((s) => s.components));
    setLoading(false);
  };
  reactExports.useEffect(() => {
    void load();
  }, []);
  const usedIds = new Set(structures.map((c) => c.componentId));
  const openAdd = () => {
    setEditing(null);
    setFormOpen(true);
  };
  const openEdit = (c) => {
    setEditing(c);
    setFormOpen(true);
  };
  const toggleActive = async (c) => {
    const res = await payrollApi.saveComponent({
      ...c,
      isActive: !c.isActive
    });
    if (res.error) {
      showToast(res.error.message, "error");
      return;
    }
    showToast(c.isActive ? "Component deactivated." : "Component activated.", "success");
    await load();
  };
  const remove = async () => {
    if (!deleteTarget) return;
    const res = await payrollApi.deleteComponent(deleteTarget.id);
    if (res.error) {
      showToast(res.error.message, "error");
      setDeleteTarget(null);
      return;
    }
    showToast("Component deleted.", "success");
    setDeleteTarget(null);
    await load();
  };
  const onDrop = async (targetId) => {
    if (!dragId || dragId === targetId) {
      setDragId(null);
      return;
    }
    const ids = list.map((c) => c.id);
    const from = ids.indexOf(dragId);
    const to = ids.indexOf(targetId);
    ids.splice(to, 0, ...ids.splice(from, 1));
    setDragId(null);
    const res = await payrollApi.reorderComponents(ids);
    if (res.data) setList(res.data.sort((a, b) => a.displayOrder - b.displayOrder));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[20px] font-semibold", children: "Salary components" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#6B6B6B] mt-1", children: "The earnings, deductions, and employer contributions available to salary structures." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: openAdd, children: "+ Add component" })
    ] }),
    loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: [0, 1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[56px] rounded-md border border-[#E5E5E3] bg-white animate-pulse" }, i)) }) : list.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No salary components yet", subtitle: "Add your first salary component to start building structures.", action: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: openAdd, children: "Add component" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-md border border-[#E5E5E3] bg-white", children: list.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(SalaryComponentRow, { component: c, canManage: true, onEdit: () => openEdit(c), onToggleActive: () => toggleActive(c), onDelete: () => setDeleteTarget(c), onDragStart: () => setDragId(c.id), onDrop: () => onDrop(c.id) }, c.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SalaryComponentForm, { open: formOpen, onClose: () => setFormOpen(false), component: editing, usedInStructure: !!editing && usedIds.has(editing.id), onSaved: load }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ConfirmDialog, { open: !!deleteTarget, onOpenChange: (o) => !o && setDeleteTarget(null), title: "Delete salary component?", description: `Delete ${deleteTarget?.name}? This cannot be undone.`, confirmLabel: "Delete", variant: "danger", onConfirm: remove })
  ] });
}
export {
  SalaryComponentsPage as component
};
