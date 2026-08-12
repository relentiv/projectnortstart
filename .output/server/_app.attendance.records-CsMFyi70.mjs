import { j as jsxRuntimeExports, r as reactExports } from "./_libs/react.mjs";
import { B as Button } from "./_ssr/Button-CFBbQAsZ.mjs";
import { I as Input } from "./_ssr/Input-BJe__i93.mjs";
import { S as Select } from "./_ssr/Select-CDtKs7RG.mjs";
import { B as Badge } from "./_ssr/Badge-DOnZHL7Z.mjs";
import { C as Card } from "./_ssr/Card-AgXmnnkq.mjs";
import { M as Modal } from "./_ssr/Modal-G0zeYD84.mjs";
import { A as Alert } from "./_ssr/Alert-COamyPgG.mjs";
import { E as EmptyState } from "./_ssr/EmptyState-Cs_2WXRJ.mjs";
import { S as SlideOver } from "./_ssr/SlideOver-COdJD426.mjs";
import { D as DataTable } from "./_ssr/DataTable-DBeYYWhW.mjs";
import { s as showToast } from "./_ssr/Toast-DgpI28ao.mjs";
import { F as FileUpload } from "./_ssr/FileUpload-COmUKg3_.mjs";
import { D as DatePicker } from "./_ssr/DatePicker-CLkrqJ5Y.mjs";
import { T as TimePicker } from "./_ssr/TimePicker-BrzZEFJW.mjs";
import { P as PermissionGuard } from "./_ssr/PermissionGuard-DrHCZdH7.mjs";
import { A as AttendanceStatusBadge } from "./_ssr/AttendanceStatusBadge-BoubD3sX.mjs";
import { A as AttendanceRiskSection } from "./_ssr/AttendanceRiskSection-K1fpokkl.mjs";
import { l as listEmployees, s as settingsApi, a as attendanceApi } from "./_ssr/router-CPP24NZe.mjs";
import { a as ATTENDANCE_STATUS_LABELS } from "./_ssr/attendance-DW5Ch_bj.mjs";

import "./_ssr/usePermission-DoLX-EvC.mjs";
import "./_ssr/rbac-BwLVdIYU.mjs";
import "./_ssr/rbac-Ci1w5KuA.mjs";
import "./_ssr/ai-p4aGx585.mjs";
import "./_ssr/AiBadge-CuHhawHL.mjs";
import "./_libs/tanstack__react-router.mjs";
import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval.mjs";
import "./_libs/unenv.mjs";


import "./_libs/seroval-plugins.mjs";


import "./_libs/react-dom.mjs";
import "./_libs/isbot.mjs";
import "./_ssr/Textarea-DsONP0BR.mjs";
import "./_libs/tanstack__query-core.mjs";
import "./_libs/tanstack__react-query.mjs";
import "./_libs/clsx.mjs";
import "./_libs/tailwind-merge.mjs";
import "./_libs/zod.mjs";
const STATUS_OPTIONS = Object.entries(ATTENDANCE_STATUS_LABELS).map(([value, label]) => ({
  value,
  label
}));
function toHHmm(iso) {
  if (!iso) return "";
  const d = new Date(iso);
  return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
}
function emptyForm() {
  return {
    employeeId: "",
    date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
    clockIn: "",
    clockOut: "",
    status: "",
    note: ""
  };
}
function RecordsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PermissionGuard, { permission: "attendance.manage", fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { variant: "error", children: "You don't have access to attendance records." }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(RecordsInner, {}) });
}
function RecordsInner() {
  const [employees, setEmployees] = reactExports.useState([]);
  const [departments, setDepartments] = reactExports.useState([]);
  const [records, setRecords] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [employeeId, setEmployeeId] = reactExports.useState("");
  const [from, setFrom] = reactExports.useState(() => {
    const d = /* @__PURE__ */ new Date();
    d.setDate(d.getDate() - 13);
    return d.toISOString().slice(0, 10);
  });
  const [to, setTo] = reactExports.useState(() => (/* @__PURE__ */ new Date()).toISOString().slice(0, 10));
  const [status, setStatus] = reactExports.useState("");
  const [manualOpen, setManualOpen] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState(emptyForm());
  const [saving, setSaving] = reactExports.useState(false);
  const [importOpen, setImportOpen] = reactExports.useState(false);
  const [importFile, setImportFile] = reactExports.useState(null);
  const [importRows, setImportRows] = reactExports.useState(null);
  const [importing, setImporting] = reactExports.useState(false);
  reactExports.useEffect(() => {
    void listEmployees().then((r) => setEmployees(r.data ?? []));
    void settingsApi.listDepartments().then((r) => setDepartments(r.data ?? []));
  }, []);
  const load = async () => {
    setLoading(true);
    const res = await attendanceApi.listRecords({
      employeeId: employeeId || void 0,
      from,
      to,
      statuses: status ? [status] : void 0
    });
    setRecords(res.data ?? []);
    setLoading(false);
  };
  reactExports.useEffect(() => {
    void load();
  }, [employeeId, from, to, status]);
  const employeeOptions = reactExports.useMemo(() => employees.map((e) => ({
    value: e.id,
    label: `${e.firstName} ${e.lastName} (${e.employeeCode})`
  })), [employees]);
  const openManual = (rec) => {
    if (rec) {
      setForm({
        employeeId: rec.employeeId,
        date: rec.date,
        clockIn: toHHmm(rec.clockIn),
        clockOut: toHHmm(rec.clockOut),
        status: rec.status,
        note: rec.note ?? ""
      });
    } else {
      setForm(emptyForm());
    }
    setManualOpen(true);
  };
  const saveManual = async () => {
    if (!form.employeeId || !form.date) {
      showToast("Employee and date are required", "error");
      return;
    }
    setSaving(true);
    const res = await attendanceApi.saveManualEntry({
      employeeId: form.employeeId,
      date: form.date,
      clockIn: form.clockIn || void 0,
      clockOut: form.clockOut || void 0,
      status: form.status || void 0,
      note: form.note.trim() || void 0
    });
    setSaving(false);
    if (res.error) {
      showToast(res.error.message, "error");
      return;
    }
    showToast("Attendance record saved", "success");
    setManualOpen(false);
    void load();
  };
  const previewImport = async (file) => {
    setImportFile(file);
    const text = await file.text();
    const res = await attendanceApi.importCsv(text, false);
    if (res.error) {
      showToast(res.error.message, "error");
      setImportRows(null);
      return;
    }
    setImportRows(res.data?.rows ?? []);
  };
  const commitImport = async () => {
    if (!importFile) return;
    setImporting(true);
    const text = await importFile.text();
    const res = await attendanceApi.importCsv(text, true);
    setImporting(false);
    if (res.error) {
      showToast(res.error.message, "error");
      return;
    }
    showToast(`Imported ${res.data?.imported ?? 0} record(s)`, "success");
    setImportOpen(false);
    setImportFile(null);
    setImportRows(null);
    void load();
  };
  const exportCsv = () => {
    const header = "employeeCode,employeeName,date,clockIn,clockOut,status,workedMinutes";
    const lines = records.map((r) => {
      const emp = employees.find((e) => e.id === r.employeeId);
      return [emp?.employeeCode ?? "", r.employeeName, r.date, toHHmm(r.clockIn), toHHmm(r.clockOut), r.status, r.workedMinutes].join(",");
    });
    const blob = new Blob([[header, ...lines].join("\n")], {
      type: "text/csv"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `attendance-records-${from}-to-${to}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    showToast("Export started", "success");
  };
  const columns = [{
    key: "date",
    label: "Date",
    sortable: true
  }, {
    key: "employeeName",
    label: "Employee"
  }, {
    key: "shiftName",
    label: "Shift",
    render: (r) => r.shiftName ?? "—"
  }, {
    key: "clockIn",
    label: "In",
    render: (r) => toHHmm(r.clockIn) || "—"
  }, {
    key: "clockOut",
    label: "Out",
    render: (r) => toHHmm(r.clockOut) || "—"
  }, {
    key: "workedMinutes",
    label: "Worked",
    align: "right",
    render: (r) => `${Math.floor(r.workedMinutes / 60)}h ${r.workedMinutes % 60}m`
  }, {
    key: "status",
    label: "Status",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsx(AttendanceStatusBadge, { status: r.status })
  }, {
    key: "source",
    label: "Source",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "default", children: r.source })
  }, {
    key: "actions",
    label: "",
    align: "right",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "secondary", onClick: () => openManual(r), children: "Edit" })
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between flex-wrap gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[20px] font-semibold", children: "Attendance records" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#6B6B6B] mt-1", children: "Review, correct and import daily attendance for the organisation." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: exportCsv, children: "Export CSV" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: () => setImportOpen(true), children: "Import CSV" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => openManual(), children: "+ Manual entry" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-4 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { label: "Employee", placeholder: "All employees", options: employeeOptions, value: employeeId, onChange: (e) => setEmployeeId(e.target.value) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DatePicker, { label: "From", value: from, onChange: setFrom }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DatePicker, { label: "To", value: to, onChange: setTo }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { label: "Status", placeholder: "All statuses", options: STATUS_OPTIONS, value: status, onChange: (e) => setStatus(e.target.value) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AttendanceRiskSection, { departmentOptions: departments.map((d) => ({
      value: d.id,
      label: d.name
    })), getDepartmentId: (id) => employees.find((e) => e.id === id)?.departmentId }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DataTable, { columns, data: records, loading, getRowKey: (r) => r.id, emptyState: /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No attendance records found.", subtitle: "Try widening the date range or clearing filters." }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SlideOver, { open: manualOpen, onClose: () => setManualOpen(false), title: "Manual attendance entry", description: "Create or correct a single day's attendance record.", footer: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: () => setManualOpen(false), children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { loading: saving, onClick: saveManual, children: "Save" })
    ] }), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { label: "Employee", placeholder: "Select employee", options: employeeOptions, value: form.employeeId, onChange: (e) => setForm({
        ...form,
        employeeId: e.target.value
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DatePicker, { label: "Date", value: form.date, onChange: (v) => setForm({
        ...form,
        date: v
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TimePicker, { label: "Clock in", value: form.clockIn, onChange: (v) => setForm({
          ...form,
          clockIn: v
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TimePicker, { label: "Clock out", value: form.clockOut, onChange: (v) => setForm({
          ...form,
          clockOut: v
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { label: "Status override (optional)", placeholder: "Auto-derive", options: STATUS_OPTIONS, value: form.status, onChange: (e) => setForm({
        ...form,
        status: e.target.value
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Note", value: form.note, onChange: (e) => setForm({
        ...form,
        note: e.target.value
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Modal, { open: importOpen, onClose: () => {
      setImportOpen(false);
      setImportFile(null);
      setImportRows(null);
    }, title: "Import attendance CSV", className: "max-w-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[13px] text-[#6B6B6B]", children: [
        "Header: ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "employeeCode,date,clockIn,clockOut" }),
        " (times as HH:mm, date as YYYY-MM-DD)."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FileUpload, { label: "CSV file", accept: ".csv", onFileSelect: (f) => void previewImport(f), onFileRemove: () => {
        setImportFile(null);
        setImportRows(null);
      }, currentFile: importFile ? {
        name: importFile.name,
        sizeKB: Math.round(importFile.size / 1024)
      } : null }),
      importRows && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-h-64 overflow-auto border border-[#E5E5E3] rounded-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-[12px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-[#FAFAF9] sticky top-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-3 py-2", children: "Line" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-3 py-2", children: "Employee" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-3 py-2", children: "Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-3 py-2", children: "In" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-3 py-2", children: "Out" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-3 py-2", children: "Status" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: importRows.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-[#E5E5E3]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-1.5", children: r.line }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-1.5", children: r.employeeName ?? "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-1.5", children: r.date }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-1.5", children: r.clockIn ?? "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-1.5", children: r.clockOut ?? "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-1.5", children: r.error ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#DC2626]", children: r.error }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#16A34A]", children: "OK" }) })
        ] }, r.line)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: () => {
          setImportOpen(false);
          setImportFile(null);
          setImportRows(null);
        }, children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { loading: importing, disabled: !importRows || importRows.every((r) => r.error), onClick: commitImport, children: "Import" })
      ] })
    ] }) })
  ] });
}
export {
  RecordsPage as component
};
