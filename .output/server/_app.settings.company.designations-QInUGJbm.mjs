import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { B as Button } from "./_ssr/Button-Crtgy6Xx.mjs";
import { I as Input } from "./_ssr/Input-CHeJoRlX.mjs";
import { T as Textarea } from "./_ssr/Textarea-DXR3KTuM.mjs";
import { E as EmptyState } from "./_ssr/EmptyState-DCYWhDnT.mjs";
import { C as ConfirmDialog } from "./_ssr/ConfirmDialog-C1NdmGJ3.mjs";
import { S as SlideOver } from "./_ssr/SlideOver-DXNNm8Us.mjs";
import { D as DataTable } from "./_ssr/DataTable-ChSCAfLO.mjs";
import { s as showToast } from "./_ssr/Toast-DlQQlIf6.mjs";
import { s as settingsApi } from "./_ssr/router-Arl77cRa.mjs";

import "./_ssr/Modal-BWxmma2i.mjs";
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
function DesignationsPage() {
  const [list, setList] = reactExports.useState([]);
  const [depts, setDepts] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [open, setOpen] = reactExports.useState(false);
  const [editing, setEditing] = reactExports.useState(null);
  const [deleteTarget, setDeleteTarget] = reactExports.useState(null);
  const [form, setForm] = reactExports.useState({
    name: "",
    grade: "",
    departmentIds: [],
    description: ""
  });
  const load = async () => {
    setLoading(true);
    const [d, ds] = await Promise.all([settingsApi.listDesignations(), settingsApi.listDepartments()]);
    if (d.data) setList(d.data);
    if (ds.data) setDepts(ds.data);
    setLoading(false);
  };
  reactExports.useEffect(() => {
    void load();
  }, []);
  const openAdd = () => {
    setEditing(null);
    setForm({
      name: "",
      grade: "",
      departmentIds: [],
      description: ""
    });
    setOpen(true);
  };
  const openEdit = (d) => {
    setEditing(d);
    setForm({
      name: d.name,
      grade: d.grade,
      departmentIds: d.departmentIds,
      description: d.description ?? ""
    });
    setOpen(true);
  };
  const save = async () => {
    if (!form.name.trim()) {
      showToast("Designation name is required", "error");
      return;
    }
    const res = await settingsApi.upsertDesignation({
      id: editing?.id,
      name: form.name.trim(),
      grade: form.grade.trim(),
      departmentIds: form.departmentIds,
      description: form.description.trim() || void 0
    });
    if (res.error) {
      showToast(res.error.message, "error");
      return;
    }
    setOpen(false);
    showToast(editing ? "Designation updated" : "Designation added", "success");
    await load();
  };
  const remove = async () => {
    if (!deleteTarget) return;
    await settingsApi.deleteDesignation(deleteTarget.id);
    showToast("Designation deleted", "success");
    await load();
  };
  const columns = [{
    key: "name",
    label: "Designation",
    sortable: true,
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: r.name })
  }, {
    key: "grade",
    label: "Grade / Band"
  }, {
    key: "departmentIds",
    label: "Department",
    render: (r) => r.departmentIds.map((id) => depts.find((d) => d.id === id)?.name).filter(Boolean).join(", ") || "—"
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[20px] font-semibold", children: "Designations" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#6B6B6B] mt-1", children: "Job titles, grades, and bands." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: openAdd, children: "+ Add designation" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DataTable, { columns, data: list, loading, getRowKey: (d) => d.id, emptyState: /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No designations yet.", subtitle: "Add roles your company hires for.", action: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: openAdd, children: "Add designation" }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SlideOver, { open, onClose: () => setOpen(false), title: editing ? "Edit designation" : "New designation", footer: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: () => setOpen(false), children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: save, children: "Save" })
    ] }), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Designation name", autoFocus: true, value: form.name, onChange: (e) => setForm({
        ...form,
        name: e.target.value
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Grade / Band", placeholder: "L4, Senior, Band 3", value: form.grade, onChange: (e) => setForm({
        ...form,
        grade: e.target.value
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-1.5 text-[13px] font-medium text-[#0A0A0A]", children: "Associated departments" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: depts.map((d) => {
          const checked = form.departmentIds.includes(d.id);
          return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setForm({
            ...form,
            departmentIds: checked ? form.departmentIds.filter((x) => x !== d.id) : [...form.departmentIds, d.id]
          }), className: `text-[13px] rounded-full px-3 py-1 border transition-colors ${checked ? "bg-[#0A0A0A] text-white border-[#0A0A0A]" : "border-[#E5E5E3] hover:bg-[#F2F2F0]"}`, children: d.name }, d.id);
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { label: "Description", rows: 4, value: form.description, onChange: (e) => setForm({
        ...form,
        description: e.target.value
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ConfirmDialog, { open: !!deleteTarget, onOpenChange: (o) => !o && setDeleteTarget(null), title: "Delete designation?", description: `Delete ${deleteTarget?.name}? This cannot be undone.`, confirmLabel: "Delete", variant: "danger", onConfirm: remove })
  ] });
}
export {
  DesignationsPage as component
};
