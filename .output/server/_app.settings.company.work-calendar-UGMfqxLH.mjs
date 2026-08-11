import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { B as Button } from "./_ssr/Button-B92Yl16p.mjs";
import { I as Input } from "./_ssr/Input-DkwuDyVZ.mjs";
import { C as Card } from "./_ssr/Card-C9YFlUub.mjs";
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
const DAY_LABELS = ["S", "M", "T", "W", "T", "F", "S"];
const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
function DayPicker({
  value,
  onChange
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: DAY_LABELS.map((d, i) => {
    const on = value.includes(i);
    return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => onChange(on ? value.filter((x) => x !== i) : [...value, i].sort()), "aria-pressed": on, "aria-label": DAY_NAMES[i], className: `h-10 w-10 rounded-full font-semibold text-[13px] transition-colors ${on ? "bg-[#0A0A0A] text-white" : "bg-white border border-[#E5E5E3] text-[#6B6B6B] hover:bg-[#F2F2F0]"}`, children: d }, i);
  }) });
}
function WorkCalendarPage() {
  const [cal, setCal] = reactExports.useState({
    workingDays: [1, 2, 3, 4, 5]
  });
  const [shifts, setShifts] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [open, setOpen] = reactExports.useState(false);
  const [editing, setEditing] = reactExports.useState(null);
  const [deleteTarget, setDeleteTarget] = reactExports.useState(null);
  const [form, setForm] = reactExports.useState({
    name: "",
    startTime: "09:30",
    endTime: "18:30",
    breakMinutes: 60,
    days: [1, 2, 3, 4, 5],
    graceMinutes: 15
  });
  const load = async () => {
    setLoading(true);
    const [c, s] = await Promise.all([settingsApi.getWorkCalendar(), settingsApi.listShifts()]);
    if (c.data) setCal(c.data);
    if (s.data) setShifts(s.data);
    setLoading(false);
  };
  reactExports.useEffect(() => {
    void load();
  }, []);
  const saveCal = async (next) => {
    const newCal = {
      workingDays: next
    };
    setCal(newCal);
    await settingsApi.saveWorkCalendar(newCal);
    showToast("Work week updated", "success");
  };
  const openAdd = () => {
    setEditing(null);
    setForm({
      name: "",
      startTime: "09:30",
      endTime: "18:30",
      breakMinutes: 60,
      days: cal.workingDays,
      graceMinutes: 15
    });
    setOpen(true);
  };
  const openEdit = (s) => {
    setEditing(s);
    setForm({
      name: s.name,
      startTime: s.startTime,
      endTime: s.endTime,
      breakMinutes: s.breakMinutes,
      days: s.days,
      graceMinutes: s.graceMinutes
    });
    setOpen(true);
  };
  const saveShift = async () => {
    if (!form.name.trim()) {
      showToast("Shift name is required", "error");
      return;
    }
    const res = await settingsApi.upsertShift({
      id: editing?.id,
      ...form
    });
    if (res.error) {
      showToast(res.error.message, "error");
      return;
    }
    setOpen(false);
    showToast(editing ? "Shift updated" : "Shift added", "success");
    await load();
  };
  const remove = async () => {
    if (!deleteTarget) return;
    await settingsApi.deleteShift(deleteTarget.id);
    showToast("Shift deleted", "success");
    await load();
  };
  const columns = [{
    key: "name",
    label: "Shift",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: r.name })
  }, {
    key: "startTime",
    label: "Start"
  }, {
    key: "endTime",
    label: "End"
  }, {
    key: "breakMinutes",
    label: "Break",
    render: (r) => `${r.breakMinutes} min`
  }, {
    key: "days",
    label: "Days",
    render: (r) => r.days.map((d) => DAY_NAMES[d]).join(", ")
  }, {
    key: "actions",
    label: "",
    align: "right",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "secondary", onClick: () => openEdit(r), children: "Edit" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", onClick: () => setDeleteTarget(r), children: "Delete" })
    ] })
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[18px] font-semibold", children: "Work week" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#6B6B6B] mt-1 mb-4", children: "Which days the company works. Default Mon–Fri." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DayPicker, { value: cal.workingDays, onChange: saveCal }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[12px] text-[#6B6B6B] mt-3", children: [
        cal.workingDays.length,
        " working ",
        cal.workingDays.length === 1 ? "day" : "days",
        " per week"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[18px] font-semibold", children: "Shifts" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#6B6B6B] mt-1", children: "Define when teams are expected to work." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: openAdd, children: "+ Add shift" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DataTable, { columns, data: shifts, loading, getRowKey: (s) => s.id, emptyState: /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No shifts yet.", subtitle: "Define your first shift to set working hours.", action: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: openAdd, children: "Add shift" }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SlideOver, { open, onClose: () => setOpen(false), title: editing ? "Edit shift" : "New shift", footer: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: () => setOpen(false), children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: saveShift, children: "Save" })
    ] }), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Shift name", autoFocus: true, value: form.name, onChange: (e) => setForm({
        ...form,
        name: e.target.value
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Start time", type: "text", placeholder: "HH:mm", value: form.startTime, onChange: (e) => setForm({
          ...form,
          startTime: e.target.value
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "End time", type: "text", placeholder: "HH:mm", value: form.endTime, onChange: (e) => setForm({
          ...form,
          endTime: e.target.value
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Break (minutes)", type: "number", value: String(form.breakMinutes), onChange: (e) => setForm({
          ...form,
          breakMinutes: Number(e.target.value) || 0
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Grace period (minutes)", type: "number", value: String(form.graceMinutes), onChange: (e) => setForm({
          ...form,
          graceMinutes: Number(e.target.value) || 0
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-1.5 text-[13px] font-medium text-[#0A0A0A]", children: "Applicable days" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DayPicker, { value: form.days, onChange: (d) => setForm({
          ...form,
          days: d
        }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ConfirmDialog, { open: !!deleteTarget, onOpenChange: (o) => !o && setDeleteTarget(null), title: "Delete shift?", description: `Delete ${deleteTarget?.name}? This cannot be undone.`, confirmLabel: "Delete", variant: "danger", onConfirm: remove })
  ] });
}
export {
  WorkCalendarPage as component
};
