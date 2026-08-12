import { j as jsxRuntimeExports, r as reactExports } from "./_libs/react.mjs";
import { B as Button } from "./_ssr/Button-CFBbQAsZ.mjs";
import { I as Input } from "./_ssr/Input-BJe__i93.mjs";
import { T as Textarea } from "./_ssr/Textarea-DsONP0BR.mjs";
import { E as EmptyState } from "./_ssr/EmptyState-Cs_2WXRJ.mjs";
import { C as ConfirmDialog } from "./_ssr/ConfirmDialog-BeoeULKD.mjs";
import { S as SlideOver } from "./_ssr/SlideOver-COdJD426.mjs";
import { s as showToast } from "./_ssr/Toast-DgpI28ao.mjs";
import { P as PermissionGuard } from "./_ssr/PermissionGuard-DrHCZdH7.mjs";
import { B as Badge } from "./_ssr/Badge-DOnZHL7Z.mjs";
import { C as Card } from "./_ssr/Card-AgXmnnkq.mjs";
import { C as CurrencyInput } from "./_ssr/CurrencyInput-WSJ4rKe8.mjs";
import { p as payrollApi, aa as computeBreakup, j as formatCurrency } from "./_ssr/router-CPP24NZe.mjs";
import { S as SalaryBreakupTable } from "./_ssr/SalaryBreakupTable-Basz8Z5l.mjs";

import "./_ssr/Modal-G0zeYD84.mjs";
import "./_ssr/usePermission-DoLX-EvC.mjs";
import "./_ssr/rbac-BwLVdIYU.mjs";
import "./_ssr/rbac-Ci1w5KuA.mjs";
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
function SalaryStructureCard({ structure, onClone, onSetDefault, onDelete, canManage }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "flex flex-col gap-3 md:flex-row md:items-center md:justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[18px] font-semibold text-[#0A0A0A]", children: structure.name }),
        structure.isDefault && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "tenant-accent", children: "Default" }),
        !structure.isActive && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { children: "Inactive" })
      ] }),
      structure.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[13px] text-[#6B6B6B]", children: structure.description }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-[13px] text-[#6B6B6B]", children: [
        structure.components.length,
        " components · ",
        structure.employeeCount,
        " employees assigned"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center gap-2", children: canManage && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", onClick: onClone, children: "Clone" }),
      !structure.isDefault && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", onClick: onSetDefault, children: "Set as default" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", className: "text-[#DC2626]", onClick: onDelete, children: "Delete" })
    ] }) })
  ] });
}
function CtcCalculator({ structure, annualCtc, onCtcChange, showInput = true }) {
  const breakup = reactExports.useMemo(() => computeBreakup(structure, annualCtc ?? 0), [structure, annualCtc]);
  const monthlyCtc = Math.round((annualCtc ?? 0) / 12);
  const allocated = breakup.grossEarnings + breakup.totalEmployerContrib;
  const diff = monthlyCtc - allocated;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "sticky top-6", children: [
    showInput && /* @__PURE__ */ jsxRuntimeExports.jsx(
      CurrencyInput,
      {
        label: "Annual CTC",
        value: annualCtc,
        onChange: (v) => onCtcChange?.(v),
        min: 0,
        hint: `Monthly CTC: ${formatCurrency(monthlyCtc)}`
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SalaryBreakupTable, { breakup, className: "mt-4" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 border-t border-[#E5E5E3] pt-3", children: diff > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[12px] text-[#B45309]", children: [
      "Components account for ",
      formatCurrency(allocated),
      " of ",
      formatCurrency(monthlyCtc),
      " monthly CTC.",
      " ",
      formatCurrency(diff),
      " is unallocated — consider adding a balance component."
    ] }) : diff < 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[12px] text-[#B91C1C]", children: [
      "Component total (",
      formatCurrency(allocated),
      ") exceeds monthly CTC (",
      formatCurrency(monthlyCtc),
      "). Adjust component values."
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[12px] text-[#15803D] font-medium", children: [
      "Annual CTC verified: ",
      formatCurrency(annualCtc ?? 0),
      " ✓"
    ] }) })
  ] });
}
function SalaryStructuresPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PermissionGuard, { permission: "payroll.configure", fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 text-[14px] text-[#6B6B6B]", children: "You don't have permission to configure payroll." }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(SalaryStructuresInner, {}) });
}
function SalaryStructuresInner() {
  const [list, setList] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [createOpen, setCreateOpen] = reactExports.useState(false);
  const [name, setName] = reactExports.useState("");
  const [description, setDescription] = reactExports.useState("");
  const [saving, setSaving] = reactExports.useState(false);
  const [deleteTarget, setDeleteTarget] = reactExports.useState(null);
  const [previewCtc, setPreviewCtc] = reactExports.useState(12e5);
  const load = async () => {
    setLoading(true);
    const res = await payrollApi.listStructures();
    if (res.data) setList(res.data);
    setLoading(false);
  };
  reactExports.useEffect(() => {
    void load();
  }, []);
  const previewStructure = reactExports.useMemo(() => list.find((s) => s.isDefault) ?? list[0], [list]);
  const openCreate = () => {
    setName("");
    setDescription("");
    setCreateOpen(true);
  };
  const create = async () => {
    if (!name.trim()) {
      showToast("Structure name is required.", "error");
      return;
    }
    setSaving(true);
    const res = await payrollApi.saveStructure({
      name: name.trim(),
      description: description.trim() || void 0
    });
    setSaving(false);
    if (res.error) {
      showToast(res.error.message, "error");
      return;
    }
    showToast("Salary structure created.", "success");
    setCreateOpen(false);
    await load();
  };
  const clone = async (s) => {
    const res = await payrollApi.cloneStructure(s.id);
    if (res.error) {
      showToast(res.error.message, "error");
      return;
    }
    showToast("Salary structure cloned.", "success");
    await load();
  };
  const setDefault = async (s) => {
    const res = await payrollApi.setDefaultStructure(s.id);
    if (res.error) {
      showToast(res.error.message, "error");
      return;
    }
    showToast(`${s.name} set as default structure.`, "success");
    await load();
  };
  const remove = async () => {
    if (!deleteTarget) return;
    const res = await payrollApi.deleteStructure(deleteTarget.id);
    if (res.error) {
      showToast(res.error.message, "error");
      setDeleteTarget(null);
      return;
    }
    showToast("Salary structure deleted.", "success");
    setDeleteTarget(null);
    await load();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[20px] font-semibold", children: "Salary structures" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#6B6B6B] mt-1", children: "Structures combine salary components and are assigned to employees." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: openCreate, children: "+ Add structure" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-6 lg:grid-cols-[1fr_360px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [0, 1].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[110px] rounded-md border border-[#E5E5E3] bg-white animate-pulse" }, i)) }) : list.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No salary structures yet", subtitle: "Add your first salary structure to start assigning it to employees.", action: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: openCreate, children: "Add structure" }) }) : list.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SalaryStructureCard, { structure: s, canManage: true, onClone: () => clone(s), onSetDefault: () => setDefault(s), onDelete: () => setDeleteTarget(s) }, s.id)) }),
      previewStructure && /* @__PURE__ */ jsxRuntimeExports.jsx(CtcCalculator, { structure: previewStructure, annualCtc: previewCtc, onCtcChange: setPreviewCtc })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SlideOver, { open: createOpen, onClose: () => setCreateOpen(false), title: "New salary structure", description: "Add components once the structure is created.", footer: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: () => setCreateOpen(false), disabled: saving, children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: create, loading: saving, children: "Create structure" })
    ] }), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Structure name", autoFocus: true, value: name, onChange: (e) => setName(e.target.value) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { label: "Description", rows: 3, value: description, onChange: (e) => setDescription(e.target.value) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ConfirmDialog, { open: !!deleteTarget, onOpenChange: (o) => !o && setDeleteTarget(null), title: "Delete salary structure?", description: `Delete ${deleteTarget?.name}? This cannot be undone. If employees are assigned to it, reassign them first.`, confirmLabel: "Delete", variant: "danger", onConfirm: remove })
  ] });
}
export {
  SalaryStructuresPage as component
};
