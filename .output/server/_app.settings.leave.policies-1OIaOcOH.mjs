import { j as jsxRuntimeExports, r as reactExports } from "./_libs/react.mjs";
import { B as Button } from "./_ssr/Button-CFBbQAsZ.mjs";
import { I as Input } from "./_ssr/Input-BJe__i93.mjs";
import { T as Textarea } from "./_ssr/Textarea-DsONP0BR.mjs";
import { B as Badge } from "./_ssr/Badge-DOnZHL7Z.mjs";
import { C as Card } from "./_ssr/Card-AgXmnnkq.mjs";
import { E as EmptyState } from "./_ssr/EmptyState-Cs_2WXRJ.mjs";
import { C as ConfirmDialog } from "./_ssr/ConfirmDialog-BeoeULKD.mjs";
import { S as SlideOver } from "./_ssr/SlideOver-COdJD426.mjs";
import { D as DataTable } from "./_ssr/DataTable-DBeYYWhW.mjs";
import { s as showToast } from "./_ssr/Toast-DgpI28ao.mjs";
import { M as MultiSelect } from "./_ssr/MultiSelect-AJ9L18N2.mjs";
import { P as PermissionGuard } from "./_ssr/PermissionGuard-DrHCZdH7.mjs";
import { i as leaveApi } from "./_ssr/router-CPP24NZe.mjs";
import { E as EMPLOYMENT_TYPE_LABELS } from "./_ssr/employee-uFc04z2V.mjs";

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
const EMPLOYMENT_TYPE_OPTIONS = Object.entries(EMPLOYMENT_TYPE_LABELS).map(([value, label]) => ({
  value,
  label
}));
function LeavePoliciesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PermissionGuard, { permission: "leave.configure", fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 text-[14px] text-[#6B6B6B]", children: "You don't have permission to configure leave policies." }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(LeavePoliciesInner, {}) });
}
function LeavePoliciesInner() {
  const [list, setList] = reactExports.useState([]);
  const [types, setTypes] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [open, setOpen] = reactExports.useState(false);
  const [editing, setEditing] = reactExports.useState(null);
  const [form, setForm] = reactExports.useState(emptyForm([]));
  const [deleteTarget, setDeleteTarget] = reactExports.useState(null);
  function emptyForm(allTypes) {
    return {
      name: "",
      description: "",
      employmentTypes: [],
      isDefault: false,
      allocations: allTypes.map((t) => ({
        leaveTypeId: t.id,
        included: false,
        daysOverride: ""
      }))
    };
  }
  function toForm(p, allTypes) {
    return {
      name: p.name,
      description: p.description ?? "",
      employmentTypes: p.eligibility.employmentTypes ?? [],
      isDefault: p.isDefault,
      allocations: allTypes.map((t) => {
        const a = p.allocations.find((x) => x.leaveTypeId === t.id);
        return {
          leaveTypeId: t.id,
          included: !!a,
          daysOverride: a?.daysOverride != null ? String(a.daysOverride) : ""
        };
      })
    };
  }
  const load = async () => {
    setLoading(true);
    const [pr, tr] = await Promise.all([leaveApi.listPolicies(), leaveApi.listLeaveTypes(true)]);
    if (tr.data) setTypes(tr.data);
    if (pr.data) setList(pr.data);
    setLoading(false);
  };
  reactExports.useEffect(() => {
    void load();
  }, []);
  const openAdd = () => {
    setEditing(null);
    setForm(emptyForm(types));
    setOpen(true);
  };
  const openEdit = (p) => {
    setEditing(p);
    setForm(toForm(p, types));
    setOpen(true);
  };
  const toggleAllocation = (leaveTypeId, included) => {
    setForm({
      ...form,
      allocations: form.allocations.map((a) => a.leaveTypeId === leaveTypeId ? {
        ...a,
        included
      } : a)
    });
  };
  const setOverride = (leaveTypeId, daysOverride) => {
    setForm({
      ...form,
      allocations: form.allocations.map((a) => a.leaveTypeId === leaveTypeId ? {
        ...a,
        daysOverride
      } : a)
    });
  };
  const save = async () => {
    if (!form.name.trim()) {
      showToast("Policy name is required", "error");
      return;
    }
    const allocations = form.allocations.filter((a) => a.included).map((a) => ({
      leaveTypeId: a.leaveTypeId,
      daysOverride: a.daysOverride ? Number(a.daysOverride) : void 0
    }));
    if (allocations.length === 0) {
      showToast("Select at least one leave type", "error");
      return;
    }
    const res = await leaveApi.upsertPolicy({
      id: editing?.id,
      name: form.name.trim(),
      description: form.description.trim() || void 0,
      allocations,
      eligibility: {
        employmentTypes: form.employmentTypes.length ? form.employmentTypes : void 0
      },
      isDefault: form.isDefault
    });
    if (res.error) {
      showToast(res.error.message, "error");
      return;
    }
    setOpen(false);
    showToast(editing ? "Policy updated" : "Policy added", "success");
    await load();
  };
  const setDefault = async (p) => {
    await leaveApi.setDefaultPolicy(p.id);
    showToast(`${p.name} set as default policy`, "success");
    await load();
  };
  const remove = async () => {
    if (!deleteTarget) return;
    const res = await leaveApi.deletePolicy(deleteTarget.id);
    if (res.error) {
      showToast(res.error.message, "error");
      setDeleteTarget(null);
      return;
    }
    showToast("Policy deleted", "success");
    setDeleteTarget(null);
    await load();
  };
  const columns = [{
    key: "name",
    label: "Policy",
    sortable: true,
    render: (p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: p.name }),
      p.isDefault && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "success", children: "Default" })
    ] })
  }, {
    key: "allocations",
    label: "Leave types",
    render: (p) => p.allocations.map((a) => a.leaveType.code).join(", ") || "—"
  }, {
    key: "eligibility",
    label: "Eligible for",
    render: (p) => (p.eligibility.employmentTypes ?? []).map((t) => EMPLOYMENT_TYPE_LABELS[t]).join(", ") || "All"
  }, {
    key: "employeeCount",
    label: "Employees",
    align: "right",
    render: (p) => p.employeeCount.toLocaleString()
  }, {
    key: "actions",
    label: "",
    align: "right",
    render: (p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2", children: [
      !p.isDefault && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", onClick: () => setDefault(p), children: "Set as default" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "secondary", onClick: () => openEdit(p), children: "Edit" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", onClick: () => setDeleteTarget(p), children: "Delete" })
    ] })
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[20px] font-semibold", children: "Leave policies" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#6B6B6B] mt-1", children: "Group leave type allocations and assign them by eligibility." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: openAdd, children: "+ Add policy" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DataTable, { columns, data: list, loading, getRowKey: (p) => p.id, emptyState: /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No leave policies yet.", subtitle: "Add your first leave policy to assign allocations.", action: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: openAdd, children: "Add policy" }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SlideOver, { open, onClose: () => setOpen(false), title: editing ? "Edit policy" : "New policy", footer: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: () => setOpen(false), children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: save, children: "Save" })
    ] }), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Policy name", autoFocus: true, value: form.name, onChange: (e) => setForm({
        ...form,
        name: e.target.value
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { label: "Description", rows: 3, value: form.description, onChange: (e) => setForm({
        ...form,
        description: e.target.value
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MultiSelect, { label: "Eligible employment types", options: EMPLOYMENT_TYPE_OPTIONS, value: form.employmentTypes, onChange: (v) => setForm({
        ...form,
        employmentTypes: v
      }), placeholder: "All employment types" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-2 block text-[13px] font-medium text-[#0A0A0A]", children: "Leave type allocations" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 rounded-md border border-[#E5E5E3] p-3", children: [
          types.map((t) => {
            const row = form.allocations.find((a) => a.leaveTypeId === t.id);
            if (!row) return null;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: row.included, onChange: (e) => toggleAllocation(t.id, e.target.checked) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex-1 text-[13px]", children: [
                t.name,
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[#6B6B6B]", children: [
                  "(",
                  t.annualAllocation,
                  "d default)"
                ] })
              ] }),
              row.included && /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { className: "w-24", placeholder: "Override", type: "number", value: row.daysOverride, onChange: (e) => setOverride(t.id, e.target.value) })
            ] }, t.id);
          }),
          types.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#6B6B6B]", children: "No leave types available. Add one first." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "isDefault", type: "checkbox", checked: form.isDefault, onChange: (e) => setForm({
          ...form,
          isDefault: e.target.checked
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "isDefault", className: "text-[13px] font-medium", children: "Set as default policy" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ConfirmDialog, { open: !!deleteTarget, onOpenChange: (o) => !o && setDeleteTarget(null), title: "Delete policy?", description: `Delete ${deleteTarget?.name}? This cannot be undone.`, confirmLabel: "Delete", variant: "danger", onConfirm: remove })
  ] });
}
export {
  LeavePoliciesPage as component
};
