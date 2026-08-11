import { j as jsxRuntimeExports, r as reactExports } from "./_libs/react.mjs";
import { B as Button } from "./_ssr/Button-B92Yl16p.mjs";
import { I as Input } from "./_ssr/Input-DkwuDyVZ.mjs";
import { T as Textarea } from "./_ssr/Textarea-DmSlcYuH.mjs";
import { S as Select } from "./_ssr/Select-CT_4ow88.mjs";
import { C as Checkbox } from "./_ssr/Checkbox-CgTT_66V.mjs";
import { C as Card } from "./_ssr/Card-C9YFlUub.mjs";
import { E as EmptyState } from "./_ssr/EmptyState-C_t8YrDr.mjs";
import { C as ConfirmDialog } from "./_ssr/ConfirmDialog-CNV1l6_7.mjs";
import { S as SlideOver } from "./_ssr/SlideOver-DGRd3Ojy.mjs";
import { D as DataTable } from "./_ssr/DataTable-QZdOUOks.mjs";
import { T as Tabs } from "./_ssr/Tabs-kBWeCyR5.mjs";
import { s as showToast } from "./_ssr/Toast-n7pN7q8Q.mjs";
import { s as settingsApi } from "./_ssr/router-LFebWAoY.mjs";
import { t as tenantStore } from "./_ssr/tenant-qT2uFABr.mjs";

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
import "./_ssr/defaults-CvUaCo6_.mjs";
function HolidaysPage() {
  const tenant = tenantStore.useSelector((s) => s.tenant);
  const country = tenant?.settings.country ?? "United States";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Tabs, { tabs: [{
    id: "national",
    label: "National holidays",
    content: /* @__PURE__ */ jsxRuntimeExports.jsx(NationalTab, { country })
  }, {
    id: "company",
    label: "Company holidays",
    content: /* @__PURE__ */ jsxRuntimeExports.jsx(CompanyTab, {})
  }] });
}
function NationalTab({
  country
}) {
  const [list, setList] = reactExports.useState([]);
  reactExports.useEffect(() => {
    void settingsApi.getNationalHolidays(country).then((r) => r.data && setList(r.data));
  }, [country]);
  const toggle = async (h) => {
    const next = !h.observed;
    setList((l) => l.map((x) => x.id === h.id ? {
      ...x,
      observed: next
    } : x));
    await settingsApi.toggleNationalHoliday(h.id, next);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-0 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-3 border-b border-[#E5E5E3] text-[13px] text-[#6B6B6B]", children: [
      country,
      " · ",
      list.length,
      " holidays"
    ] }),
    list.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No national holidays for this country." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-[#F2F2F0]", children: list.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "px-5 py-3 flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { checked: h.observed, onChange: () => toggle(h), "aria-label": h.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] font-medium", children: h.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-[#6B6B6B]", children: new Date(h.date).toLocaleDateString(void 0, {
          weekday: "short",
          day: "numeric",
          month: "short",
          year: "numeric"
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] text-[#6B6B6B]", children: h.observed ? "Observed" : "Skipped" })
    ] }, h.id)) })
  ] });
}
function CompanyTab() {
  const [list, setList] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [open, setOpen] = reactExports.useState(false);
  const [editing, setEditing] = reactExports.useState(null);
  const [deleteTarget, setDeleteTarget] = reactExports.useState(null);
  const [form, setForm] = reactExports.useState({
    name: "",
    date: "",
    type: "full",
    description: ""
  });
  const load = async () => {
    setLoading(true);
    const r = await settingsApi.listCompanyHolidays();
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
      date: "",
      type: "full",
      description: ""
    });
    setOpen(true);
  };
  const openEdit = (h) => {
    setEditing(h);
    setForm({
      name: h.name,
      date: h.date,
      type: h.type,
      description: h.description ?? ""
    });
    setOpen(true);
  };
  const save = async () => {
    if (!form.name.trim() || !form.date) {
      showToast("Name and date are required", "error");
      return;
    }
    await settingsApi.upsertCompanyHoliday({
      id: editing?.id,
      name: form.name.trim(),
      date: form.date,
      type: form.type,
      description: form.description.trim() || void 0
    });
    setOpen(false);
    showToast(editing ? "Holiday updated" : "Holiday added", "success");
    await load();
  };
  const remove = async () => {
    if (!deleteTarget) return;
    await settingsApi.deleteCompanyHoliday(deleteTarget.id);
    showToast("Holiday deleted", "success");
    await load();
  };
  const columns = [{
    key: "name",
    label: "Holiday",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: r.name })
  }, {
    key: "date",
    label: "Date",
    render: (r) => new Date(r.date).toLocaleDateString()
  }, {
    key: "type",
    label: "Type",
    render: (r) => r.type === "full" ? "Full day" : "Half day"
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[16px] font-semibold", children: "Company holidays" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#6B6B6B] mt-1", children: "Office closure days, founder's day, etc." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: openAdd, children: "+ Add holiday" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DataTable, { columns, data: list, loading, getRowKey: (h) => h.id, emptyState: /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No company holidays yet.", subtitle: "Add your first one.", action: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: openAdd, children: "Add holiday" }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SlideOver, { open, onClose: () => setOpen(false), title: editing ? "Edit holiday" : "New holiday", footer: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: () => setOpen(false), children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: save, children: "Save" })
    ] }), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Holiday name", autoFocus: true, value: form.name, onChange: (e) => setForm({
        ...form,
        name: e.target.value
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Date", type: "text", placeholder: "YYYY-MM-DD", value: form.date, onChange: (e) => setForm({
        ...form,
        date: e.target.value
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { label: "Type", options: [{
        value: "full",
        label: "Full day"
      }, {
        value: "half",
        label: "Half day"
      }], value: form.type, onChange: (e) => setForm({
        ...form,
        type: e.target.value
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { label: "Description", rows: 3, value: form.description, onChange: (e) => setForm({
        ...form,
        description: e.target.value
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ConfirmDialog, { open: !!deleteTarget, onOpenChange: (o) => !o && setDeleteTarget(null), title: "Delete holiday?", description: `Delete ${deleteTarget?.name}? This cannot be undone.`, confirmLabel: "Delete", variant: "danger", onConfirm: remove })
  ] });
}
export {
  HolidaysPage as component
};
