import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { B as Button } from "./_ssr/Button-CFBbQAsZ.mjs";
import { T as Textarea } from "./_ssr/Textarea-DsONP0BR.mjs";
import { S as Select } from "./_ssr/Select-CDtKs7RG.mjs";
import { D as dateKey$1, S as Spinner, g as formatClock, a as attendanceApi } from "./_ssr/router-CPP24NZe.mjs";
import { S as StatCard } from "./_ssr/StatCard-D4dqMa3u.mjs";
import { E as EmptyState } from "./_ssr/EmptyState-Cs_2WXRJ.mjs";
import { D as DataTable } from "./_ssr/DataTable-DBeYYWhW.mjs";
import { s as showToast } from "./_ssr/Toast-DgpI28ao.mjs";
import { D as DatePicker } from "./_ssr/DatePicker-CLkrqJ5Y.mjs";
import { T as TimePicker } from "./_ssr/TimePicker-BrzZEFJW.mjs";
import { R as RegularizationStatusBadge } from "./_ssr/RegularizationStatusBadge-Ds6vgAN8.mjs";
import { u as useCurrentEmployee } from "./_ssr/useCurrentEmployee-s2MqyCVo.mjs";
import { A as ATTENDANCE_STATUS_COLORS, a as ATTENDANCE_STATUS_LABELS, R as REGULARIZATION_TYPE_LABELS } from "./_ssr/attendance-DW5Ch_bj.mjs";
import { C as Clock, x as CircleCheck, f as Sparkles, p as Calendar, a7 as ChevronLeft, a8 as ChevronRight, aj as ShieldAlert, ad as Send, V as FileText } from "./_libs/lucide-react.mjs";

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
import "./_ssr/Badge-DOnZHL7Z.mjs";
import "./_ssr/auth-BAvMo5G5.mjs";
import "./_ssr/rbac-BwLVdIYU.mjs";
import "./_ssr/rbac-Ci1w5KuA.mjs";
const TYPE_OPTIONS = Object.entries(REGULARIZATION_TYPE_LABELS).map(([value, label]) => ({
  value,
  label
}));
const WD = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
function MyRegularizations() {
  const {
    employee,
    loading: loadingMe
  } = useCurrentEmployee();
  const [list, setList] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [saving, setSaving] = reactExports.useState(false);
  const now = /* @__PURE__ */ new Date();
  const [year, setYear] = reactExports.useState(now.getFullYear());
  const [month, setMonth] = reactExports.useState(now.getMonth());
  const [records, setRecords] = reactExports.useState([]);
  const [form, setForm] = reactExports.useState({
    date: dateKey$1(/* @__PURE__ */ new Date()),
    type: "missing_clock_out",
    requestedClockIn: "09:30",
    requestedClockOut: "18:30",
    reason: ""
  });
  const loadData = async (empId, y, m) => {
    setLoading(true);
    const [regsRes, recsRes] = await Promise.all([attendanceApi.listRegularizations({
      employeeId: empId
    }), attendanceApi.getMonth(empId, y, m)]);
    setList(regsRes.data ?? []);
    setRecords(recsRes.data ?? []);
    setLoading(false);
  };
  reactExports.useEffect(() => {
    if (employee) void loadData(employee.id, year, month);
  }, [employee?.id, year, month]);
  const submit = async () => {
    if (!employee) return;
    setSaving(true);
    const res = await attendanceApi.createRegularization({
      employeeId: employee.id,
      ...form
    });
    setSaving(false);
    if (res.error) return showToast(res.error.message, "error");
    showToast("Regularization request submitted", "success");
    setForm((f) => ({
      ...f,
      reason: ""
    }));
    void loadData(employee.id, year, month);
  };
  const cancel = async (id) => {
    const res = await attendanceApi.cancelRegularization(id);
    if (res.error) return showToast(res.error.message, "error");
    showToast("Request cancelled", "info");
    if (employee) void loadData(employee.id, year, month);
  };
  const pendingCount = reactExports.useMemo(() => list.filter((r) => r.status === "pending").length, [list]);
  const approvedCount = reactExports.useMemo(() => list.filter((r) => r.status === "approved").length, [list]);
  const rejectedCount = reactExports.useMemo(() => list.filter((r) => r.status === "rejected").length, [list]);
  const byDate = reactExports.useMemo(() => new Map(records.map((r) => [r.date, r])), [records]);
  const regsByDate = reactExports.useMemo(() => new Map(list.map((r) => [r.date, r])), [list]);
  const firstDay = new Date(year, month, 1);
  const totalDays = new Date(year, month + 1, 0).getDate();
  const leadDays = firstDay.getDay();
  const monthLabel = firstDay.toLocaleDateString(void 0, {
    month: "long",
    year: "numeric"
  });
  const todayKey = dateKey$1(/* @__PURE__ */ new Date());
  const selectedDayRecord = byDate.get(form.date);
  const selectedDayRequest = regsByDate.get(form.date);
  const columns = [{
    key: "date",
    label: "Date",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-[#0A0A0A] tabular-nums", children: r.date })
  }, {
    key: "type",
    label: "Type",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#0A0A0A]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-orange-500" }),
      REGULARIZATION_TYPE_LABELS[r.type]
    ] })
  }, {
    key: "requestedClockIn",
    label: "Requested In",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tabular-nums font-medium text-[#404040]", children: r.requestedClockIn ?? "—" })
  }, {
    key: "requestedClockOut",
    label: "Requested Out",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tabular-nums font-medium text-[#404040]", children: r.requestedClockOut ?? "—" })
  }, {
    key: "reason",
    label: "Reason",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] text-[#6B6B6B] line-clamp-1 max-w-xs block", title: r.reason, children: r.reason })
  }, {
    key: "status",
    label: "Status",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsx(RegularizationStatusBadge, { status: r.status })
  }, {
    key: "actions",
    label: "",
    align: "right",
    render: (r) => r.status === "pending" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", onClick: () => void cancel(r.id), className: "text-rose-600 hover:text-rose-700 hover:bg-rose-50", children: "Cancel" }) : r.reviewComment && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] italic text-[#8E8E8E] max-w-[150px] truncate block", children: r.reviewComment })
  }];
  if (loadingMe) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center items-center py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 32 }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 sm:space-y-7", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Pending Approvals", value: String(pendingCount), variant: pendingCount > 0 ? "dark" : "default", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4" }), trend: pendingCount > 0 ? "Under review" : "All clear", trendDir: pendingCount > 0 ? "down" : "up", actionHint: true, children: pendingCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block w-2 h-2 rounded-full bg-orange-500 animate-ping" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-medium text-neutral-300", children: "Awaiting manager review" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Approved Requests", value: String(approvedCount), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-emerald-600" }), trend: "Applied & adjusted", trendDir: "up" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Rejected / Returned", value: String(rejectedCount), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(XCircleIcon, { className: "w-4 h-4 text-rose-600" }), trend: rejectedCount > 0 ? "Requires correction" : "No rejections", trendDir: rejectedCount > 0 ? "down" : "neutral" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Monthly Allowance", value: "3 / month", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4 text-orange-500" }), trend: "Standard policy", trendDir: "neutral" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-5 gap-5 sm:gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 rounded-3xl border border-[#E5E5E3] bg-white p-5 sm:p-6 shadow-xs flex flex-col justify-between overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 pb-4 mb-4 border-b border-[#F2F2F0]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1.5 mb-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#FAFAF8] text-[#6B6B6B] border border-[#E5E5E3]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3 h-3 text-orange-500" }),
                "Attendance Picker"
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[18px] sm:text-[20px] font-extrabold text-[#0A0A0A] tracking-tight", children: monthLabel })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", "aria-label": "Previous month", onClick: () => {
                const nm = month === 0 ? 11 : month - 1;
                const ny = month === 0 ? year - 1 : year;
                setMonth(nm);
                setYear(ny);
              }, className: "inline-flex items-center justify-center h-8 w-8 rounded-xl border border-[#E5E5E3] bg-white text-[#0A0A0A] hover:bg-[#F9F9F7] active:scale-95 transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-4 h-4" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", "aria-label": "Next month", onClick: () => {
                const nm = month === 11 ? 0 : month + 1;
                const ny = month === 11 ? year + 1 : year;
                setMonth(nm);
                setYear(ny);
              }, className: "inline-flex items-center justify-center h-8 w-8 rounded-xl border border-[#E5E5E3] bg-white text-[#0A0A0A] hover:bg-[#F9F9F7] active:scale-95 transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-7 gap-1 text-center mb-1.5", children: WD.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold uppercase tracking-[0.1em] text-[#8E8E8E]", children: d }, d)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-7 gap-1 sm:gap-1.5", children: [
            Array.from({
              length: leadDays
            }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-square rounded-xl bg-[#FAFAF8]/50" }, `lead-${i}`)),
            Array.from({
              length: totalDays
            }).map((_, i) => {
              const d = new Date(year, month, i + 1);
              const dKey = dateKey$1(d);
              const rec = byDate.get(dKey);
              const req = regsByDate.get(dKey);
              const isSelected = form.date === dKey;
              const isToday = dKey === todayKey;
              const color = rec ? ATTENDANCE_STATUS_COLORS[rec.status] : ATTENDANCE_STATUS_COLORS.not_marked;
              const isAnomaly = rec && (rec.status === "absent" || rec.status === "late" || rec.clockIn && !rec.clockOut);
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setForm((f) => ({
                ...f,
                date: dKey
              })), className: `aspect-square rounded-xl border p-1 sm:p-1.5 flex flex-col justify-between transition-all duration-200 relative text-left ${isSelected ? "border-[#0A0A0A] bg-[#FAFAF9] shadow-xs ring-2 ring-[#0A0A0A]/10 scale-[1.03] z-10" : isToday ? "border-orange-400 bg-orange-50/20" : "border-[#E5E5E3] bg-white hover:border-[#A3A3A3] hover:bg-[#FAFAF9]"}`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between w-full", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[11px] sm:text-[12px] font-bold tabular-nums ${isToday ? "text-orange-600 font-extrabold" : "text-[#0A0A0A]"}`, children: i + 1 }),
                  req && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-orange-500 ring-2 ring-orange-200", title: "Regularization request exists" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between w-full mt-auto", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full shrink-0", style: {
                    background: color
                  }, title: rec ? ATTENDANCE_STATUS_LABELS[rec.status] : "Not marked" }),
                  isAnomaly && !req && /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "w-3 h-3 text-amber-500 shrink-0" })
                ] })
              ] }, dKey);
            })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 p-4 rounded-2xl bg-[#FAFAF9] border border-[#E5E5E3]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-extrabold uppercase tracking-[0.1em] text-[#8E8E8E]", children: "Selected Date" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] font-bold text-[#0A0A0A] tabular-nums", children: form.date })
          ] }),
          selectedDayRecord ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 text-[12px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[#6B6B6B]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Status:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-[#0A0A0A]", children: ATTENDANCE_STATUS_LABELS[selectedDayRecord.status] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[#6B6B6B]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Clock In / Out:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium tabular-nums text-[#0A0A0A]", children: [
                formatClock(selectedDayRecord.clockIn),
                " - ",
                formatClock(selectedDayRecord.clockOut)
              ] })
            ] })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-[#8E8E8E]", children: "No attendance record logged for this date." }),
          selectedDayRequest && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2.5 pt-2 border-t border-[#E5E5E3] flex items-center justify-between text-[11px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-orange-600", children: "Request status:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(RegularizationStatusBadge, { status: selectedDayRequest.status })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-3 rounded-3xl border border-[#E5E5E3] bg-white p-6 sm:p-7 shadow-xs flex flex-col justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pb-4 mb-5 border-b border-[#F2F2F0]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 rounded-full bg-orange-500" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-bold uppercase tracking-[0.1em] text-[#8E8E8E]", children: "Adjustment Request" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[20px] sm:text-[22px] font-extrabold text-[#0A0A0A] tracking-tight", children: "Apply for Regularization" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1 rounded-full text-[11px] font-semibold bg-orange-50 text-orange-700 border border-orange-200", children: REGULARIZATION_TYPE_LABELS[form.type] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DatePicker, { label: "Target Date", value: form.date, onChange: (v) => setForm({
                ...form,
                date: v
              }), maxDate: dateKey$1(/* @__PURE__ */ new Date()) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { label: "Regularization Type", value: form.type, onChange: (e) => setForm({
                ...form,
                type: e.target.value
              }), options: TYPE_OPTIONS })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TimePicker, { label: "Requested Clock In", value: form.requestedClockIn, onChange: (v) => setForm({
                ...form,
                requestedClockIn: v
              }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TimePicker, { label: "Requested Clock Out", value: form.requestedClockOut, onChange: (v) => setForm({
                ...form,
                requestedClockOut: v
              }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { label: "Reason for Regularization", placeholder: "Provide detailed justification (minimum 10 characters)...", value: form.reason, onChange: (e) => setForm({
                ...form,
                reason: e.target.value
              }), rows: 4 }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[11px] text-[#8E8E8E] px-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Minimum 10 characters required" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: form.reason.trim().length >= 10 ? "text-emerald-600 font-semibold" : "text-amber-600", children: [
                  form.reason.trim().length,
                  " / 10"
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 pt-4 border-t border-[#F2F2F0] flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setForm({
            date: dateKey$1(/* @__PURE__ */ new Date()),
            type: "missing_clock_out",
            requestedClockIn: "09:30",
            requestedClockOut: "18:30",
            reason: ""
          }), className: "text-xs font-semibold text-[#6B6B6B] hover:text-[#0A0A0A] transition-colors", children: "Reset form" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: submit, loading: saving, disabled: form.reason.trim().length < 10, className: "gap-2 px-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-3.5 h-3.5" }),
            "Submit request"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-[#E5E5E3] bg-white shadow-xs overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 py-4 border-b border-[#F2F2F0] flex items-center justify-between bg-[#FAFAF9]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-4 h-4 text-orange-500" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[15px] font-extrabold text-[#0A0A0A] tracking-tight", children: "My Request History" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded-full text-[11px] font-bold bg-[#E5E5E3] text-[#0A0A0A]", children: list.length })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DataTable, { columns, data: list, loading, getRowKey: (r) => r.id, emptyState: /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No regularization requests yet.", subtitle: "Select a date on the calendar above to apply for punch correction." }) })
    ] })
  ] });
}
function XCircleIcon(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, className: "w-4 h-4", ...props, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" }) });
}
export {
  MyRegularizations as component
};
