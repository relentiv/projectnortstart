import { j as jsxRuntimeExports, r as reactExports } from "./_libs/react.mjs";
import { B as Button } from "./_ssr/Button-Crtgy6Xx.mjs";
import { I as Input } from "./_ssr/Input-CHeJoRlX.mjs";
import { T as Textarea } from "./_ssr/Textarea-DXR3KTuM.mjs";
import { S as Select } from "./_ssr/Select-Bg687n3T.mjs";
import { C as Checkbox } from "./_ssr/Checkbox-JVDCHRr9.mjs";
import { B as Badge } from "./_ssr/Badge-Cm1DzmgP.mjs";
import { C as Card } from "./_ssr/Card-Dnu0IoXY.mjs";
import { E as EmptyState } from "./_ssr/EmptyState-DCYWhDnT.mjs";
import { C as ConfirmDialog } from "./_ssr/ConfirmDialog-C1NdmGJ3.mjs";
import { S as SlideOver } from "./_ssr/SlideOver-DXNNm8Us.mjs";
import { D as DataTable } from "./_ssr/DataTable-ChSCAfLO.mjs";
import { s as showToast } from "./_ssr/Toast-DlQQlIf6.mjs";
import { T as Toggle } from "./_ssr/Toggle-B-vUqBUT.mjs";
import { P as PermissionGuard } from "./_ssr/PermissionGuard-DHUddp2f.mjs";
import { i as leaveApi } from "./_ssr/router-Arl77cRa.mjs";
import { a as LEAVE_CATEGORY_LABELS, A as ACCRUAL_LABELS } from "./_ssr/leave-Cc9GP3pR.mjs";

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
const CATEGORY_OPTIONS = Object.entries(LEAVE_CATEGORY_LABELS).map(([value, label]) => ({
  value,
  label
}));
const ACCRUAL_OPTIONS = Object.entries(ACCRUAL_LABELS).map(([value, label]) => ({
  value,
  label
}));
const GENDER_OPTIONS = [{
  value: "all",
  label: "All"
}, {
  value: "male",
  label: "Male"
}, {
  value: "female",
  label: "Female"
}];
const DOCUMENT_OPTIONS = [{
  value: "never",
  label: "Never"
}, {
  value: "always",
  label: "Always"
}, {
  value: "after_n_days",
  label: "After N days"
}];
function emptyForm() {
  return {
    name: "",
    code: "",
    description: "",
    category: "earned",
    isPaid: true,
    applicableGender: "all",
    allowHalfDay: true,
    documentRequired: "never",
    documentAfterDays: "",
    minDaysPerRequest: "0.5",
    maxDaysPerRequest: "",
    accrualType: "upfront",
    annualAllocation: "12",
    carryForwardMax: "",
    encashmentAllowed: false,
    encashmentMaxDays: "",
    color: "#2563EB",
    isActive: true
  };
}
function toForm(t) {
  return {
    name: t.name,
    code: t.code,
    description: t.description ?? "",
    category: t.category,
    isPaid: t.isPaid,
    applicableGender: t.applicableGender,
    allowHalfDay: t.allowHalfDay,
    documentRequired: t.documentRequired,
    documentAfterDays: t.documentAfterDays ? String(t.documentAfterDays) : "",
    minDaysPerRequest: String(t.minDaysPerRequest),
    maxDaysPerRequest: t.maxDaysPerRequest ? String(t.maxDaysPerRequest) : "",
    accrualType: t.accrualType,
    annualAllocation: String(t.annualAllocation),
    carryForwardMax: t.carryForwardMax ? String(t.carryForwardMax) : "",
    encashmentAllowed: t.encashmentAllowed,
    encashmentMaxDays: t.encashmentMaxDays ? String(t.encashmentMaxDays) : "",
    color: t.color,
    isActive: t.isActive
  };
}
function LeaveTypesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PermissionGuard, { permission: "leave.configure", fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 text-[14px] text-[#6B6B6B]", children: "You don't have permission to configure leave types." }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(LeaveTypesInner, {}) });
}
function LeaveTypesInner() {
  const [list, setList] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [open, setOpen] = reactExports.useState(false);
  const [editing, setEditing] = reactExports.useState(null);
  const [form, setForm] = reactExports.useState(emptyForm());
  const [deleteTarget, setDeleteTarget] = reactExports.useState(null);
  const load = async () => {
    setLoading(true);
    const r = await leaveApi.listLeaveTypes(true);
    if (r.data) setList(r.data);
    setLoading(false);
  };
  reactExports.useEffect(() => {
    void load();
  }, []);
  const openAdd = () => {
    setEditing(null);
    setForm(emptyForm());
    setOpen(true);
  };
  const openEdit = (t) => {
    setEditing(t);
    setForm(toForm(t));
    setOpen(true);
  };
  const save = async () => {
    if (!form.name.trim() || !form.code.trim()) {
      showToast("Name and code are required", "error");
      return;
    }
    const res = await leaveApi.upsertLeaveType({
      id: editing?.id,
      name: form.name.trim(),
      code: form.code.trim().toUpperCase(),
      description: form.description.trim() || void 0,
      category: form.category,
      isPaid: form.isPaid,
      applicableGender: form.applicableGender,
      allowHalfDay: form.allowHalfDay,
      documentRequired: form.documentRequired,
      documentAfterDays: form.documentRequired === "after_n_days" && form.documentAfterDays ? Number(form.documentAfterDays) : void 0,
      minDaysPerRequest: Number(form.minDaysPerRequest) || 0.5,
      maxDaysPerRequest: form.maxDaysPerRequest ? Number(form.maxDaysPerRequest) : void 0,
      accrualType: form.accrualType,
      annualAllocation: Number(form.annualAllocation) || 0,
      carryForwardMax: form.carryForwardMax ? Number(form.carryForwardMax) : void 0,
      encashmentAllowed: form.encashmentAllowed,
      encashmentMaxDays: form.encashmentAllowed && form.encashmentMaxDays ? Number(form.encashmentMaxDays) : void 0,
      color: form.color,
      isActive: form.isActive
    });
    if (res.error) {
      showToast(res.error.message, "error");
      return;
    }
    setOpen(false);
    showToast(editing ? "Leave type updated" : "Leave type added", "success");
    await load();
  };
  const toggleActive = async (t) => {
    await leaveApi.setLeaveTypeActive(t.id, !t.isActive);
    showToast(t.isActive ? "Leave type deactivated" : "Leave type activated", "success");
    await load();
  };
  const remove = async () => {
    if (!deleteTarget) return;
    const res = await leaveApi.deleteLeaveType(deleteTarget.id);
    if (res.error) {
      showToast(res.error.message, "error");
      setDeleteTarget(null);
      return;
    }
    showToast("Leave type deleted", "success");
    setDeleteTarget(null);
    await load();
  };
  const columns = [{
    key: "name",
    label: "Leave type",
    sortable: true,
    render: (t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block h-2.5 w-2.5 rounded-full", style: {
        background: t.color
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: t.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[12px] text-[#6B6B6B]", children: [
        "(",
        t.code,
        ")"
      ] })
    ] })
  }, {
    key: "category",
    label: "Category",
    render: (t) => LEAVE_CATEGORY_LABELS[t.category]
  }, {
    key: "accrualType",
    label: "Accrual",
    render: (t) => ACCRUAL_LABELS[t.accrualType]
  }, {
    key: "annualAllocation",
    label: "Annual quota",
    align: "right",
    render: (t) => t.annualAllocation
  }, {
    key: "isActive",
    label: "Status",
    render: (t) => /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: t.isActive ? "success" : "default", children: t.isActive ? "Active" : "Inactive" })
  }, {
    key: "actions",
    label: "",
    align: "right",
    render: (t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "secondary", onClick: () => openEdit(t), children: "Edit" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", onClick: () => toggleActive(t), children: t.isActive ? "Deactivate" : "Activate" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", onClick: () => setDeleteTarget(t), children: "Delete" })
    ] })
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[20px] font-semibold", children: "Leave types" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#6B6B6B] mt-1", children: "Define the leave types available to your organisation." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: openAdd, children: "+ Add leave type" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DataTable, { columns, data: list, loading, getRowKey: (t) => t.id, emptyState: /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No leave types yet.", subtitle: "Add your first leave type to get started.", action: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: openAdd, children: "Add leave type" }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SlideOver, { open, onClose: () => setOpen(false), title: editing ? "Edit leave type" : "New leave type", footer: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: () => setOpen(false), children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: save, children: "Save" })
    ] }), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Name", autoFocus: true, value: form.name, onChange: (e) => setForm({
          ...form,
          name: e.target.value
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Code", value: form.code, onChange: (e) => setForm({
          ...form,
          code: e.target.value
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { label: "Description", rows: 2, value: form.description, onChange: (e) => setForm({
        ...form,
        description: e.target.value
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { label: "Category", options: CATEGORY_OPTIONS, value: form.category, onChange: (e) => setForm({
          ...form,
          category: e.target.value
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { label: "Accrual type", options: ACCRUAL_OPTIONS, value: form.accrualType, onChange: (e) => setForm({
          ...form,
          accrualType: e.target.value
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Annual quota (days)", type: "number", value: form.annualAllocation, onChange: (e) => setForm({
          ...form,
          annualAllocation: e.target.value
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Carry forward max (days)", type: "number", value: form.carryForwardMax, onChange: (e) => setForm({
          ...form,
          carryForwardMax: e.target.value
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Min days / request", type: "number", step: "0.5", value: form.minDaysPerRequest, onChange: (e) => setForm({
          ...form,
          minDaysPerRequest: e.target.value
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Max days / request", type: "number", step: "0.5", value: form.maxDaysPerRequest, onChange: (e) => setForm({
          ...form,
          maxDaysPerRequest: e.target.value
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { label: "Applicable gender", options: GENDER_OPTIONS, value: form.applicableGender, onChange: (e) => setForm({
          ...form,
          applicableGender: e.target.value
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { label: "Document required", options: DOCUMENT_OPTIONS, value: form.documentRequired, onChange: (e) => setForm({
          ...form,
          documentRequired: e.target.value
        }) })
      ] }),
      form.documentRequired === "after_n_days" && /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Document required after (days)", type: "number", value: form.documentAfterDays, onChange: (e) => setForm({
        ...form,
        documentAfterDays: e.target.value
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-1.5 block text-[13px] font-medium text-[#0A0A0A]", children: "Colour" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "color", value: form.color, onChange: (e) => setForm({
          ...form,
          color: e.target.value
        }), className: "h-10 w-16 rounded-md border border-[#E5E5E3] p-1" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { label: "Paid leave", checked: form.isPaid, onChange: (e) => setForm({
          ...form,
          isPaid: e.target.checked
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { label: "Allow half-day requests", checked: form.allowHalfDay, onChange: (e) => setForm({
          ...form,
          allowHalfDay: e.target.checked
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { label: "Encashable", checked: form.encashmentAllowed, onChange: (e) => setForm({
          ...form,
          encashmentAllowed: e.target.checked
        }) }),
        form.encashmentAllowed && /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Max encashable days", type: "number", value: form.encashmentMaxDays, onChange: (e) => setForm({
          ...form,
          encashmentMaxDays: e.target.value
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-md border border-[#E5E5E3] px-3 py-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] font-medium", children: "Active" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { checked: form.isActive, onChange: (v) => setForm({
          ...form,
          isActive: v
        }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ConfirmDialog, { open: !!deleteTarget, onOpenChange: (o) => !o && setDeleteTarget(null), title: "Delete leave type?", description: `Delete ${deleteTarget?.name}? This cannot be undone. If it is in use, deactivate it instead.`, confirmLabel: "Delete", variant: "danger", onConfirm: remove })
  ] });
}
export {
  LeaveTypesPage as component
};
