import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { B as Button } from "./_ssr/Button-B92Yl16p.mjs";
import { I as Input } from "./_ssr/Input-DkwuDyVZ.mjs";
import { T as Textarea } from "./_ssr/Textarea-DmSlcYuH.mjs";
import { S as Select } from "./_ssr/Select-CT_4ow88.mjs";
import { E as EmptyState } from "./_ssr/EmptyState-C_t8YrDr.mjs";
import { C as ConfirmDialog } from "./_ssr/ConfirmDialog-CNV1l6_7.mjs";
import { S as SlideOver } from "./_ssr/SlideOver-DGRd3Ojy.mjs";
import { D as DataTable } from "./_ssr/DataTable-QZdOUOks.mjs";
import { s as showToast } from "./_ssr/Toast-n7pN7q8Q.mjs";
import { s as settingsApi } from "./_ssr/router-LFebWAoY.mjs";

import "./_ssr/Modal-DIFPhA7e.mjs";
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
function DepartmentsPage() {
  const [list, setList] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [editing, setEditing] = reactExports.useState(null);
  const [open, setOpen] = reactExports.useState(false);
  const [deleteTarget, setDeleteTarget] = reactExports.useState(null);
  const [form, setForm] = reactExports.useState({
    name: "",
    parentId: "",
    description: ""
  });
  const load = async () => {
    setLoading(true);
    const r = await settingsApi.listDepartments();
    if (r.data) setList(r.data);
    setLoading(false);
  };
  reactExports.useEffect(() => {
    void load();
  }, []);
  const openAdd = () => {
    setEditing(null);
    setForm({
      name: "",
      parentId: "",
      description: ""
    });
    setOpen(true);
  };
  const openEdit = (d) => {
    setEditing(d);
    setForm({
      name: d.name,
      parentId: d.parentId ?? "",
      description: d.description ?? ""
    });
    setOpen(true);
  };
  const save = async () => {
    if (!form.name.trim()) {
      showToast("Department name is required", "error");
      return;
    }
    const res = await settingsApi.upsertDepartment({
      id: editing?.id,
      name: form.name.trim(),
      parentId: form.parentId || null,
      description: form.description.trim() || void 0
    });
    if (res.error) {
      showToast(res.error.message, "error");
      return;
    }
    setOpen(false);
    showToast(editing ? "Department updated" : "Department added", "success");
    await load();
  };
  const remove = async () => {
    if (!deleteTarget) return;
    await settingsApi.deleteDepartment(deleteTarget.id);
    showToast("Department deleted", "success");
    await load();
  };
  const columns = [{
    key: "name",
    label: "Department",
    sortable: true,
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: r.name })
  }, {
    key: "parentId",
    label: "Parent",
    render: (r) => list.find((d) => d.id === r.parentId)?.name ?? "—"
  }, {
    key: "headName",
    label: "Head",
    render: (r) => r.headName ?? "—"
  }, {
    key: "employeeCount",
    label: "Employees",
    align: "right",
    sortable: true,
    render: (r) => r.employeeCount.toLocaleString()
  }, {
    key: "actions",
    label: "",
    align: "right",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "secondary", onClick: () => openEdit(r), children: "Edit" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", onClick: () => setDeleteTarget(r), children: "Delete" })
    ] })
  }];
  const parentOptions = [{
    value: "",
    label: "None (top level)"
  }, ...list.filter((d) => d.id !== editing?.id).map((d) => ({
    value: d.id,
    label: d.name
  }))];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[20px] font-semibold", children: "Departments" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#6B6B6B] mt-1", children: "Organise your company structure." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: openAdd, children: "+ Add department" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DataTable, { columns, data: list, loading, getRowKey: (d) => d.id, emptyState: /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No departments yet.", subtitle: "Add your first department to start organising your company.", action: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: openAdd, children: "Add department" }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SlideOver, { open, onClose: () => setOpen(false), title: editing ? "Edit department" : "New department", footer: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: () => setOpen(false), children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: save, children: "Save" })
    ] }), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Department name", autoFocus: true, value: form.name, onChange: (e) => setForm({
        ...form,
        name: e.target.value
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { label: "Parent department", options: parentOptions, value: form.parentId, onChange: (e) => setForm({
        ...form,
        parentId: e.target.value
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { label: "Description", rows: 4, value: form.description, onChange: (e) => setForm({
        ...form,
        description: e.target.value
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ConfirmDialog, { open: !!deleteTarget, onOpenChange: (o) => !o && setDeleteTarget(null), title: "Delete department?", description: deleteTarget && deleteTarget.employeeCount > 0 ? `This department has ${deleteTarget.employeeCount} employees. Reassign them before deleting.` : `Delete ${deleteTarget?.name}? This cannot be undone.`, confirmLabel: "Delete", variant: "danger", onConfirm: remove })
  ] });
}
export {
  DepartmentsPage as component
};
