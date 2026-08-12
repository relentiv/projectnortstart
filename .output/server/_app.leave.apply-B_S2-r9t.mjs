import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { d as useNavigate, L as Link } from "./_libs/tanstack__react-router.mjs";
import { B as Button } from "./_ssr/Button-CFBbQAsZ.mjs";
import { T as Textarea } from "./_ssr/Textarea-DsONP0BR.mjs";
import { S as Select } from "./_ssr/Select-CDtKs7RG.mjs";
import { l as listEmployees, i as leaveApi, V as calculateWorkingDays, S as Spinner, U as startOfDay, Q as toKey, c as cn } from "./_ssr/router-CPP24NZe.mjs";
import { A as Alert } from "./_ssr/Alert-COamyPgG.mjs";
import { B as Breadcrumb } from "./_ssr/Breadcrumb-Bx825HWE.mjs";
import { s as showToast } from "./_ssr/Toast-DgpI28ao.mjs";
import { F as FileUpload } from "./_ssr/FileUpload-COmUKg3_.mjs";
import { L as LeaveTypeBadge } from "./_ssr/LeaveTypeBadge-Bw5TkB9c.mjs";
import { L as LeaveBalanceCard } from "./_ssr/LeaveBalanceCard-Dq_4GDSF.mjs";
import { a as authStore } from "./_ssr/auth-BAvMo5G5.mjs";
import { A as ArrowUpRight, Z as Zap, af as Sun, ag as Moon, c as CalendarDays, K as CircleAlert, ad as Send, q as ShieldCheck } from "./_libs/lucide-react.mjs";

import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval.mjs";
import "./_libs/unenv.mjs";


import "./_libs/seroval-plugins.mjs";


import "./_libs/react-dom.mjs";
import "./_libs/isbot.mjs";
import "./_libs/tanstack__query-core.mjs";
import "./_libs/tanstack__react-query.mjs";
import "./_libs/clsx.mjs";
import "./_libs/tailwind-merge.mjs";
import "./_libs/zod.mjs";
import "./_ssr/rbac-BwLVdIYU.mjs";
import "./_ssr/rbac-Ci1w5KuA.mjs";
const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];
function monthMatrix(view) {
  const first = new Date(view.getFullYear(), view.getMonth(), 1);
  const days = new Date(view.getFullYear(), view.getMonth() + 1, 0).getDate();
  const lead = first.getDay();
  const cells = Array.from({ length: lead }, () => null);
  for (let d = 1; d <= days; d++) cells.push(new Date(view.getFullYear(), view.getMonth(), d));
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}
function DateRangePicker({
  startDate,
  endDate,
  onChange,
  minDate,
  maxDate,
  disabledDates = [],
  nonWorkingDays = [0, 6],
  holidays = [],
  teamLeaveCounts = {},
  singleDay = false,
  className
}) {
  const [view, setView] = reactExports.useState(() => startOfDay(startDate ?? /* @__PURE__ */ new Date()));
  const [hover, setHover] = reactExports.useState(null);
  const disabledSet = reactExports.useMemo(() => new Set(disabledDates.map(toKey)), [disabledDates]);
  const holidayMap = reactExports.useMemo(() => {
    const m = /* @__PURE__ */ new Map();
    holidays.forEach((h) => m.set(toKey(h.date), h.name));
    return m;
  }, [holidays]);
  const months = [view, new Date(view.getFullYear(), view.getMonth() + 1, 1)];
  const isDisabled = (d) => {
    if (minDate && d.getTime() < startOfDay(minDate).getTime()) return true;
    if (maxDate && d.getTime() > startOfDay(maxDate).getTime()) return true;
    return disabledSet.has(toKey(d));
  };
  const rangeEnd = endDate ?? (startDate && !singleDay ? hover : null);
  const inRange = (d) => {
    if (!startDate || !rangeEnd) return false;
    const a = Math.min(startDate.getTime(), rangeEnd.getTime());
    const b = Math.max(startDate.getTime(), rangeEnd.getTime());
    return d.getTime() > a && d.getTime() < b;
  };
  const pick = (d) => {
    if (isDisabled(d)) return;
    if (singleDay) return onChange(d, d);
    if (!startDate || startDate && endDate) return onChange(d, null);
    if (d.getTime() < startDate.getTime()) return onChange(d, startDate);
    onChange(startDate, d);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("rounded-md border border-[#E5E5E3] bg-white p-4", className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          "aria-label": "Previous month",
          onClick: () => setView(new Date(view.getFullYear(), view.getMonth() - 1, 1)),
          className: "h-8 w-8 rounded-sm border border-[#E5E5E3] text-[#6B6B6B] hover:bg-[#F2F2F0] transition-colors",
          children: "‹"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-10 text-[13px] font-semibold", children: months.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "min-w-[132px] text-center", children: m.toLocaleDateString("en-GB", { month: "long", year: "numeric" }) }, m.toISOString())) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          "aria-label": "Next month",
          onClick: () => setView(new Date(view.getFullYear(), view.getMonth() + 1, 1)),
          className: "h-8 w-8 rounded-sm border border-[#E5E5E3] text-[#6B6B6B] hover:bg-[#F2F2F0] transition-colors",
          children: "›"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6", children: months.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-7 mb-1", children: WEEKDAYS.map((w, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-center text-[10px] font-semibold uppercase tracking-wide text-[#9CA3AF] py-1", children: w }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-7 gap-y-0.5", children: monthMatrix(m).map((d, i) => {
        if (!d) return /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}, i);
        const key = toKey(d);
        const disabled = isDisabled(d);
        const weekend = nonWorkingDays.includes(d.getDay());
        const holiday = holidayMap.get(key);
        const isStart = startDate && d.getTime() === startDate.getTime();
        const isEnd = rangeEnd && d.getTime() === rangeEnd.getTime();
        const mid = inRange(d);
        const teamCount = teamLeaveCounts[key] ?? 0;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            disabled,
            title: holiday ?? (teamCount ? `${teamCount} teammate(s) on leave` : void 0),
            onMouseEnter: () => setHover(d),
            onFocus: () => setHover(d),
            onClick: () => pick(d),
            "aria-label": d.toDateString(),
            "aria-pressed": !!(isStart || isEnd),
            className: cn(
              "relative h-9 text-[13px] rounded-sm transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[var(--tenant-primary)]",
              disabled && "text-[#D4D4D8] line-through cursor-not-allowed",
              !disabled && weekend && "text-[#9CA3AF]",
              !disabled && !weekend && "text-[#0A0A0A] hover:bg-[#F2F2F0]",
              holiday && !disabled && "text-[#B45309]",
              mid && "bg-[color-mix(in_srgb,var(--tenant-primary)_14%,transparent)]",
              (isStart || isEnd) && "!bg-[var(--tenant-primary)] !text-[var(--tenant-text-on-primary)] font-semibold"
            ),
            children: [
              d.getDate(),
              teamCount > 0 && !isStart && !isEnd && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  "aria-hidden": true,
                  className: "absolute bottom-1 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-[#F59E0B]"
                }
              )
            ]
          },
          i
        );
      }) })
    ] }, m.toISOString())) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 pt-3 border-t border-[#F2F2F0] flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-[#6B6B6B]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "h-2 w-2 rounded-full bg-[var(--tenant-primary)]" }),
        "Selected"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "h-2 w-2 rounded-full bg-[#F59E0B]" }),
        "Teammate on leave"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-1.5 text-[#B45309]", children: "Holiday" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-1.5 line-through text-[#D4D4D8]", children: "Unavailable" })
    ] })
  ] });
}
function ApplyLeavePage() {
  const user = authStore.useSelector((s) => s.user);
  const navigate = useNavigate();
  const [loading, setLoading] = reactExports.useState(true);
  const [me, setMe] = reactExports.useState(null);
  const [types, setTypes] = reactExports.useState([]);
  const [balances, setBalances] = reactExports.useState([]);
  const [calendar, setCalendar] = reactExports.useState({
    nonWorkingDays: [0, 6],
    holidays: []
  });
  const [leaveTypeId, setLeaveTypeId] = reactExports.useState("");
  const [startDate, setStartDate] = reactExports.useState(null);
  const [endDate, setEndDate] = reactExports.useState(null);
  const [isHalfDay, setIsHalfDay] = reactExports.useState(false);
  const [halfDayPeriod, setHalfDayPeriod] = reactExports.useState("first_half");
  const [reason, setReason] = reactExports.useState("");
  const [file, setFile] = reactExports.useState(null);
  const [errors, setErrors] = reactExports.useState({});
  const [submitError, setSubmitError] = reactExports.useState(null);
  const [submitting, setSubmitting] = reactExports.useState(false);
  reactExports.useEffect(() => {
    let alive = true;
    void (async () => {
      const [emps, lt, cal] = await Promise.all([listEmployees(), leaveApi.listLeaveTypes(false), leaveApi.getCalendarContext()]);
      if (!alive) return;
      const found = emps.data?.find((e) => e.workEmail === user?.email) ?? emps.data?.[0] ?? null;
      setMe(found);
      setTypes(lt.data ?? []);
      setCalendar(cal);
      if (found) {
        const b = await leaveApi.listBalances(found.id);
        if (alive) setBalances(b.data ?? []);
      }
      if (alive) setLoading(false);
    })();
    return () => {
      alive = false;
    };
  }, [user?.email]);
  const selectedType = types.find((t) => t.id === leaveTypeId) ?? null;
  const selectedBalance = balances.find((b) => b.leaveTypeId === leaveTypeId) ?? null;
  const workingDays = reactExports.useMemo(() => {
    if (!startDate || !endDate) return 0;
    return calculateWorkingDays(startDate, endDate, calendar.nonWorkingDays, calendar.holidays, isHalfDay);
  }, [startDate, endDate, calendar, isHalfDay]);
  reactExports.useEffect(() => {
    if (isHalfDay && startDate) setEndDate(startDate);
  }, [isHalfDay, startDate]);
  const handleShortcut = (type) => {
    const today = /* @__PURE__ */ new Date();
    today.setHours(0, 0, 0, 0);
    if (type === "today") {
      setStartDate(today);
      setEndDate(today);
      setIsHalfDay(false);
    } else if (type === "tomorrow") {
      const tmrw = new Date(today);
      tmrw.setDate(tmrw.getDate() + 1);
      setStartDate(tmrw);
      setEndDate(tmrw);
      setIsHalfDay(false);
    } else if (type === "next_2") {
      const day2 = new Date(today);
      day2.setDate(day2.getDate() + 1);
      setStartDate(today);
      setEndDate(day2);
      setIsHalfDay(false);
    } else if (type === "this_week") {
      const day = today.getDay();
      const diffToFriday = day <= 5 ? 5 - day : 0;
      const fri = new Date(today);
      fri.setDate(fri.getDate() + diffToFriday);
      setStartDate(today);
      setEndDate(fri);
      setIsHalfDay(false);
    } else if (type === "next_week") {
      const day = today.getDay();
      const daysUntilNextMon = day === 0 ? 1 : 8 - day;
      const nextMon = new Date(today);
      nextMon.setDate(nextMon.getDate() + daysUntilNextMon);
      const nextFri = new Date(nextMon);
      nextFri.setDate(nextFri.getDate() + 4);
      setStartDate(nextMon);
      setEndDate(nextFri);
      setIsHalfDay(false);
    }
  };
  const validate = () => {
    const e = {};
    if (!leaveTypeId) e.leaveTypeId = "Select a leave type.";
    if (!startDate || !endDate) e.dates = "Select a date range.";
    if (selectedType?.documentRequired === "always" && !file) e.file = "A supporting document is required for this leave type.";
    if (selectedType?.documentRequired === "after_n_days" && selectedType.documentAfterDays && workingDays > selectedType.documentAfterDays && !file) {
      e.file = `A supporting document is required for leave longer than ${selectedType.documentAfterDays} day(s).`;
    }
    if (selectedBalance && selectedType?.category !== "loss_of_pay" && workingDays > selectedBalance.available) {
      e.balance = `Insufficient balance — you have ${selectedBalance.available} day(s) available.`;
    }
    if (!reason.trim()) e.reason = "Please provide a reason for your leave.";
    return e;
  };
  const onSubmit = async () => {
    setSubmitError(null);
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length > 0) {
      setSubmitError("Please fix the errors indicated below.");
      return;
    }
    if (!me || !startDate || !endDate) return;
    setSubmitting(true);
    const res = await leaveApi.createRequest({
      employeeId: me.id,
      leaveTypeId,
      startDate,
      endDate,
      isHalfDay,
      halfDayPeriod: isHalfDay ? halfDayPeriod : void 0,
      reason: reason.trim(),
      documentName: file?.name,
      status: "pending"
    });
    setSubmitting(false);
    if (res.error) {
      setSubmitError(res.error.message);
      return;
    }
    showToast("Leave request submitted successfully.", "success");
    navigate({
      to: "/leave/requests"
    });
  };
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center items-center py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 32 }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto space-y-6 sm:space-y-7 pb-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumb, { items: [{
      label: "Overview",
      to: "/dashboard"
    }, {
      label: "Leave Hub",
      to: "/leave"
    }, {
      label: "Apply for Leave"
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "rounded-3xl border border-[#E5E5E3] bg-white p-6 sm:p-7 shadow-xs relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-[24px] sm:text-[28px] font-extrabold tracking-tight text-[#0A0A0A] font-sans", children: "Apply for Leave" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[13px] sm:text-[14px] text-[#6B6B6B] font-medium", children: "Select leave type, pick date range, and view real-time working day calculations." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/leave/requests", className: "group inline-flex items-center gap-1.5 rounded-xl bg-[#FAFAF9] hover:bg-[#F2F2F0] border border-[#E5E5E3] px-3.5 py-2 text-xs font-bold text-[#0A0A0A] transition-all active:scale-95 shadow-2xs", children: [
          "My Requests",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-3.5 h-3.5 text-[#8E8E8E] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#0A0A0A]" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/leave/calendar", className: "group inline-flex items-center gap-1.5 rounded-xl bg-[#FAFAF9] hover:bg-[#F2F2F0] border border-[#E5E5E3] px-3.5 py-2 text-xs font-bold text-[#0A0A0A] transition-all active:scale-95 shadow-2xs", children: [
          "Leave Calendar",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-3.5 h-3.5 text-[#8E8E8E] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#0A0A0A]" })
        ] })
      ] })
    ] }),
    submitError && /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { variant: "error", title: "Couldn't submit leave request", children: submitError }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-5 gap-5 sm:gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-3 space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-[#E5E5E3] bg-white p-6 sm:p-7 shadow-xs space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[12px] font-extrabold uppercase tracking-wider text-[#8E8E8E] block mb-2", children: "1. Select Leave Type" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { placeholder: "Choose leave category...", value: leaveTypeId, onChange: (e) => setLeaveTypeId(e.target.value), options: types.map((t) => ({
            value: t.id,
            label: `${t.name} (${t.code})`
          })), error: errors.leaveTypeId }),
          selectedType && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2.5 flex items-center gap-2 p-3 rounded-2xl bg-[#FAFAF9] border border-[#E5E5E3]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LeaveTypeBadge, { leaveType: selectedType }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] text-[#6B6B6B] font-medium", children: selectedType.description })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 border-t border-[#F2F2F0] space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[12px] font-extrabold uppercase tracking-wider text-[#8E8E8E] block", children: "2. Choose Dates & Duration" }),
            selectedType?.allowHalfDay && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1 p-1 rounded-xl bg-[#FAFAF9] border border-[#E5E5E3]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setIsHalfDay(false), className: `px-3 py-1 text-[11px] font-extrabold rounded-lg transition-all ${!isHalfDay ? "bg-[#0A0A0A] text-white shadow-2xs" : "text-[#6B6B6B] hover:text-[#0A0A0A]"}`, children: "Full Day(s)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setIsHalfDay(true), className: `px-3 py-1 text-[11px] font-extrabold rounded-lg transition-all ${isHalfDay ? "bg-[#0A0A0A] text-white shadow-2xs" : "text-[#6B6B6B] hover:text-[#0A0A0A]"}`, children: "Half Day" })
            ] })
          ] }),
          isHalfDay && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-2xl bg-orange-50/40 border border-orange-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-in fade-in duration-150", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[12px] font-bold text-orange-950 flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-3.5 h-3.5 text-orange-500" }),
              "Half Day Slot:"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setHalfDayPeriod("first_half"), className: `inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all border ${halfDayPeriod === "first_half" ? "bg-orange-500 text-white border-orange-600 shadow-2xs" : "bg-white text-[#404040] border-[#E5E5E3] hover:bg-orange-100/50"}`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "w-3.5 h-3.5" }),
                "First Half (Morning)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setHalfDayPeriod("second_half"), className: `inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all border ${halfDayPeriod === "second_half" ? "bg-orange-500 text-white border-orange-600 shadow-2xs" : "bg-white text-[#404040] border-[#E5E5E3] hover:bg-orange-100/50"}`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "w-3.5 h-3.5" }),
                "Second Half (Afternoon)"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] font-bold text-[#8E8E8E] flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-3 h-3 text-orange-500" }),
              " Quick Date Selection:"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => handleShortcut("today"), className: "px-2.5 py-1 rounded-xl text-[11px] font-semibold bg-[#FAFAF9] hover:bg-[#F2F2F0] text-[#0A0A0A] border border-[#E5E5E3] active:scale-95 transition-all", children: "Today" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => handleShortcut("tomorrow"), className: "px-2.5 py-1 rounded-xl text-[11px] font-semibold bg-[#FAFAF9] hover:bg-[#F2F2F0] text-[#0A0A0A] border border-[#E5E5E3] active:scale-95 transition-all", children: "Tomorrow" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => handleShortcut("next_2"), className: "px-2.5 py-1 rounded-xl text-[11px] font-semibold bg-[#FAFAF9] hover:bg-[#F2F2F0] text-[#0A0A0A] border border-[#E5E5E3] active:scale-95 transition-all", children: "Next 2 Days" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => handleShortcut("this_week"), className: "px-2.5 py-1 rounded-xl text-[11px] font-semibold bg-[#FAFAF9] hover:bg-[#F2F2F0] text-[#0A0A0A] border border-[#E5E5E3] active:scale-95 transition-all", children: "This Week" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => handleShortcut("next_week"), className: "px-2.5 py-1 rounded-xl text-[11px] font-semibold bg-[#FAFAF9] hover:bg-[#F2F2F0] text-[#0A0A0A] border border-[#E5E5E3] active:scale-95 transition-all", children: "Next Week" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DateRangePicker, { startDate, endDate, onChange: (s, e) => {
              setStartDate(s);
              setEndDate(isHalfDay ? s : e);
            }, minDate: /* @__PURE__ */ new Date(), holidays: calendar.holidays.map((d) => ({
              date: d,
              name: "Holiday"
            })), nonWorkingDays: calendar.nonWorkingDays, singleDay: isHalfDay }),
            errors.dates && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-[13px] text-rose-600 font-semibold", children: errors.dates })
          ] }),
          startDate && endDate && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-2xl border transition-all ${errors.balance ? "bg-rose-50/50 border-rose-200 text-rose-900" : "bg-[#FAFAF9] border-[#E5E5E3] text-[#0A0A0A]"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] font-extrabold uppercase tracking-wider text-[#8E8E8E] flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "w-3.5 h-3.5 text-orange-500" }),
                "Working Day Calculation"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[16px] font-extrabold tabular-nums text-[#0A0A0A]", children: [
                workingDays,
                " ",
                workingDays === 1 ? "Day" : "Days"
              ] })
            ] }),
            selectedBalance ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 mt-2 pt-2 border-t border-[#E5E5E3]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[12px]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#6B6B6B]", children: "Available Allocation:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold tabular-nums text-[#0A0A0A]", children: [
                  selectedBalance.available,
                  " ",
                  selectedBalance.leaveType.name
                ] })
              ] }),
              selectedBalance.available > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-[#E5E5E3] h-1.5 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-full rounded-full transition-all duration-300 ${workingDays > selectedBalance.available ? "bg-rose-500" : "bg-emerald-500"}`, style: {
                width: `${Math.min(100, workingDays / selectedBalance.available * 100)}%`
              } }) }),
              errors.balance && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[12px] text-rose-600 font-semibold flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-3.5 h-3.5 shrink-0" }),
                errors.balance
              ] })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-[#6B6B6B] mt-1", children: "Unallocated or loss of pay leave type selected." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 border-t border-[#F2F2F0] space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[12px] font-extrabold uppercase tracking-wider text-[#8E8E8E] block", children: "3. Reason & Documentation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { placeholder: "Briefly state your reason for taking leave...", value: reason, onChange: (e) => setReason(e.target.value), error: errors.reason, rows: 3 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FileUpload, { label: "Supporting Document (optional or required per policy)", currentFile: file, onFileSelect: (f) => setFile({
            name: f.name,
            sizeKB: Math.round(f.size / 1024)
          }), onFileRemove: () => setFile(null), error: errors.file })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 border-t border-[#F2F2F0] flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: () => navigate({
            to: "/leave"
          }), children: "Cancel" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: onSubmit, loading: submitting, className: "gap-2 bg-[#0A0A0A] hover:bg-neutral-800 text-white font-bold px-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-3.5 h-3.5" }),
            "Submit Request"
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2 space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-3xl bg-[#FAFAF9] border border-[#E5E5E3] space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pb-3 border-b border-[#E5E5E3]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-4 h-4 text-orange-500" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[15px] font-extrabold text-[#0A0A0A] tracking-tight", children: "My Leave Allocations" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] font-bold text-[#8E8E8E]", children: [
            balances.length,
            " Types"
          ] })
        ] }),
        balances.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: balances.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx(LeaveBalanceCard, { balance: b }, b.id)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#6B6B6B] p-4 text-center", children: "No leave allocations found." })
      ] }) })
    ] })
  ] });
}
export {
  ApplyLeavePage as component
};
