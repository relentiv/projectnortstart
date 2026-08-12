import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { L as Link } from "./_libs/tanstack__react-router.mjs";
import { S as Spinner, b as formatMinutes, a as attendanceApi, E as pad2$1, g as formatClock, D as dateKey$1, h as getCurrentPosition } from "./_ssr/router-CPP24NZe.mjs";
import { S as StatCard } from "./_ssr/StatCard-D4dqMa3u.mjs";
import { B as Breadcrumb } from "./_ssr/Breadcrumb-Bx825HWE.mjs";
import { B as Button } from "./_ssr/Button-CFBbQAsZ.mjs";
import { s as showToast } from "./_ssr/Toast-DgpI28ao.mjs";
import { A as AttendanceStatusBadge } from "./_ssr/AttendanceStatusBadge-BoubD3sX.mjs";
import { A as ATTENDANCE_STATUS_COLORS, a as ATTENDANCE_STATUS_LABELS } from "./_ssr/attendance-DW5Ch_bj.mjs";
import { u as useCurrentEmployee } from "./_ssr/useCurrentEmployee-s2MqyCVo.mjs";
import { A as ArrowUpRight, y as UserCheck, p as Calendar, a5 as Timer, a3 as Award, C as Clock, u as Play, v as Square, w as Coffee, x as CircleCheck, q as ShieldCheck, a6 as MapPin, a7 as ChevronLeft, a8 as ChevronRight, f as Sparkles } from "./_libs/lucide-react.mjs";

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
import "./_ssr/auth-BAvMo5G5.mjs";
import "./_ssr/rbac-BwLVdIYU.mjs";
import "./_ssr/rbac-Ci1w5KuA.mjs";
function LiveClock({ className }) {
  const [now, setNow] = reactExports.useState(null);
  reactExports.useEffect(() => {
    setNow(/* @__PURE__ */ new Date());
    const t = setInterval(() => setNow(/* @__PURE__ */ new Date()), 1e3);
    return () => clearInterval(t);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[40px] leading-none font-bold tracking-[-0.02em] tabular-nums", children: now ? now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false }) : "--:--:--" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-[13px] text-[#6B6B6B]", children: now ? now.toLocaleDateString(void 0, { weekday: "long", day: "numeric", month: "long" }) : "—" })
  ] });
}
function useNow(active) {
  const [now, setNow] = reactExports.useState(null);
  reactExports.useEffect(() => {
    setNow(Date.now());
    if (!active) return;
    const t = setInterval(() => setNow(Date.now()), 1e3);
    return () => clearInterval(t);
  }, [active]);
  return now;
}
function ClockWidget({
  employeeId,
  onChange
}) {
  const [record, setRecord] = reactExports.useState(null);
  const [settings, setSettings] = reactExports.useState(null);
  const [busy, setBusy] = reactExports.useState(false);
  reactExports.useEffect(() => {
    let alive = true;
    void (async () => {
      const [t, s] = await Promise.all([attendanceApi.getToday(employeeId), attendanceApi.getSettings()]);
      if (!alive) return;
      if (t.data) setRecord(t.data);
      if (s.data) setSettings(s.data);
    })();
    return () => {
      alive = false;
    };
  }, [employeeId]);
  const openBreak = record?.breaks.find((b) => !b.end);
  const state = !record?.clockIn ? "not_clocked_in" : record.clockOut ? "clocked_out" : openBreak ? "on_break" : "clocked_in";
  const ticking = state === "clocked_in";
  const now = useNow(ticking);
  const targetMinutes = settings?.fullDayMinutes ?? 480;
  const workedMinutes = reactExports.useMemo(() => {
    if (!record?.clockIn) return 0;
    if (record.clockOut) return record.workedMinutes;
    const end = state === "on_break" && openBreak ? new Date(openBreak.start).getTime() : now ?? Date.now();
    const gross = Math.max(0, Math.round((end - new Date(record.clockIn).getTime()) / 6e4));
    return Math.max(0, gross - (record.breakMinutes ?? 0));
  }, [record, now, state, openBreak]);
  const pct = Math.min(100, Math.round(workedMinutes / targetMinutes * 100));
  const remaining = Math.max(0, targetMinutes - workedMinutes);
  const apply = (rec) => {
    setRecord(rec);
    onChange?.(rec);
  };
  const run = async (fn, success) => {
    setBusy(true);
    const res = await fn();
    setBusy(false);
    if (res.error || !res.data) return showToast(res.error?.message ?? "Something went wrong", "error");
    apply(res.data);
    showToast(success, "success");
  };
  const punch = async (kind) => {
    const location = settings?.enforceGeo ? await getCurrentPosition() : void 0;
    await run(
      () => kind === "in" ? attendanceApi.clockIn(employeeId, { location: location ?? void 0 }) : attendanceApi.clockOut(employeeId, { location: location ?? void 0 }),
      kind === "in" ? "Clocked in. Have a great shift!" : "Clocked out. Enjoy the rest of your day!"
    );
  };
  const statusLabel = state === "not_clocked_in" ? "Not Clocked In" : state === "on_break" ? "On Break" : state === "clocked_out" ? "Shift Completed" : "Active Shift";
  const badgeBg = state === "clocked_in" ? "bg-emerald-50 text-emerald-700 border-emerald-200" : state === "on_break" ? "bg-amber-50 text-amber-700 border-amber-200" : state === "clocked_out" ? "bg-neutral-100 text-neutral-600 border-neutral-200" : "bg-rose-50 text-rose-700 border-rose-200";
  const dotClass = state === "clocked_in" ? "bg-emerald-500 animate-pulse" : state === "on_break" ? "bg-amber-500 animate-bounce" : state === "clocked_out" ? "bg-neutral-400" : "bg-rose-500";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-3xl border border-[#E5E5E3] bg-white p-6 sm:p-7 shadow-[0_2px_8px_rgba(0,0,0,0.04)] overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-x-0 top-0 h-1.5 transition-all duration-300",
        style: {
          background: state === "clocked_in" ? "linear-gradient(90deg, #10B981, #14B8A6)" : state === "on_break" ? "linear-gradient(90deg, #F59E0B, #D97706)" : state === "clocked_out" ? "linear-gradient(90deg, #6B7280, #9CA3AF)" : "linear-gradient(90deg, #F97316, #EA580C)"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${badgeBg}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-2 w-2 rounded-full ${dotClass}` }),
              statusLabel
            ] }),
            record && /* @__PURE__ */ jsxRuntimeExports.jsx(AttendanceStatusBadge, { status: record.status }),
            record?.shiftName && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#F4F4F2] text-[#0A0A0A] border border-[#E5E5E3]", children: record.shiftName })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-[11px] font-medium text-[#8E8E8E]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3.5 h-3.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "Target: ",
              formatMinutes(targetMinutes)
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-baseline gap-4 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LiveClock, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[34px] sm:text-[44px] leading-none font-bold tracking-tight text-[#0A0A0A] font-sans tabular-nums", children: formatMinutes(workedMinutes) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[13px] sm:text-[15px] font-semibold text-[#8E8E8E] font-sans", children: [
              "logged (",
              pct,
              "%)"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 h-2.5 w-full max-w-xl rounded-full bg-[#F4F4F2] overflow-hidden p-0.5 border border-[#EBEBE8]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "h-full rounded-full transition-all duration-500 ease-out bg-gradient-to-r from-neutral-900 to-neutral-700",
            style: { width: `${pct}%` }
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-[#F2F2F0]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Meta, { label: "Clocked in", value: formatClock(record?.clockIn) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Meta, { label: "Clocked out", value: formatClock(record?.clockOut) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Meta, { label: "Break taken", value: formatMinutes(record?.breakMinutes ?? 0) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Meta,
            {
              label: state === "clocked_out" ? "Overtime" : "Remaining",
              value: formatMinutes(state === "clocked_out" ? record?.overtimeMinutes ?? 0 : remaining)
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-center gap-3 lg:w-[220px] lg:border-l lg:border-[#F2F2F0] lg:pl-6", children: [
        state === "not_clocked_in" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "tenant",
            size: "lg",
            loading: busy,
            className: "w-full rounded-2xl py-3.5 text-sm font-semibold shadow-sm hover:shadow transition-all bg-[#0A0A0A] text-white hover:bg-[#222222]",
            onClick: () => void punch("in"),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "w-4 h-4 mr-2 inline" }),
              "Clock In Now"
            ]
          }
        ),
        (state === "clocked_in" || state === "on_break") && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "primary",
              size: "lg",
              loading: busy,
              className: "w-full rounded-2xl py-3 text-sm font-semibold shadow-sm bg-rose-600 hover:bg-rose-700 text-white",
              onClick: () => void punch("out"),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Square, { className: "w-4 h-4 mr-2 inline" }),
                "Clock Out"
              ]
            }
          ),
          settings?.breakTrackingEnabled && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "secondary",
              size: "md",
              loading: busy,
              className: "w-full rounded-2xl py-2.5 text-xs font-semibold border border-[#E5E5E3] bg-[#F9F9F7] text-[#0A0A0A] hover:bg-[#F2F2F0]",
              onClick: () => void run(
                () => openBreak ? attendanceApi.endBreak(employeeId) : attendanceApi.startBreak(employeeId),
                openBreak ? "Break ended." : "Break started."
              ),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Coffee, { className: "w-3.5 h-3.5 mr-1.5 inline" }),
                openBreak ? "End Break" : "Start Break"
              ]
            }
          )
        ] }),
        state === "clocked_out" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-[#F9F9F7] border border-[#E5E5E3] p-4 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-6 h-6 text-emerald-600 mx-auto mb-1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-[#0A0A0A]", children: "Shift Completed" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-[#6B6B6B] mt-0.5", children: [
            formatMinutes(record?.workedMinutes ?? 0),
            " worked today"
          ] })
        ] }),
        (settings?.enforceIp || settings?.enforceGeo) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex flex-wrap gap-1.5", children: [
          settings.enforceIp && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-medium bg-[#FAFAF8] text-[#6B6B6B] border border-[#E5E5E3]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-3 h-3 text-emerald-600" }),
            " Office Network"
          ] }),
          settings.enforceGeo && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-medium bg-[#FAFAF8] text-[#6B6B6B] border border-[#E5E5E3]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3 h-3 text-orange-500" }),
            " Geo Location Required"
          ] })
        ] })
      ] })
    ] })
  ] });
}
function Meta({ label, value }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-wider font-semibold text-[#8E8E8E]", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] font-semibold text-[#0A0A0A] tabular-nums mt-0.5 truncate", children: value })
  ] });
}
const WD = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
function AttendanceCalendar({
  records,
  month,
  year,
  onMonthChange
}) {
  const [selected, setSelected] = reactExports.useState(null);
  const byDate = reactExports.useMemo(() => new Map(records.map((r) => [r.date, r])), [records]);
  const first = new Date(year, month, 1);
  const days = new Date(year, month + 1, 0).getDate();
  const lead = first.getDay();
  const detail = selected ? byDate.get(selected) : void 0;
  const todayKey = dateKey$1(/* @__PURE__ */ new Date());
  const monthLabel = first.toLocaleDateString(void 0, { month: "long", year: "numeric" });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-[#E5E5E3] bg-white p-6 sm:p-7 shadow-[0_2px_8px_rgba(0,0,0,0.04)] overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-[#F2F2F0]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 mb-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#FAFAF8] text-[#6B6B6B] border border-[#E5E5E3]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3 h-3 text-orange-500" }),
          "Monthly Timesheet"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[20px] sm:text-[24px] font-extrabold text-[#0A0A0A] tracking-tight font-sans", children: monthLabel })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            "aria-label": "Previous month",
            onClick: () => onMonthChange(month === 0 ? year - 1 : year, month === 0 ? 11 : month - 1),
            className: "inline-flex items-center justify-center h-9 w-9 rounded-xl border border-[#E5E5E3] bg-white text-[#0A0A0A] hover:bg-[#F9F9F7] active:scale-95 transition-all shadow-sm",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-4 h-4" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            "aria-label": "Next month",
            onClick: () => onMonthChange(month === 11 ? year + 1 : year, month === 11 ? 0 : month + 1),
            className: "inline-flex items-center justify-center h-9 w-9 rounded-xl border border-[#E5E5E3] bg-white text-[#0A0A0A] hover:bg-[#F9F9F7] active:scale-95 transition-all shadow-sm",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-7 gap-1.5 sm:gap-2 mb-2", children: WD.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-semibold uppercase tracking-[0.1em] text-[#8E8E8E] text-center pb-1", children: d }, d)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-7 gap-1.5 sm:gap-2", children: [
      Array.from({ length: lead }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-square rounded-xl bg-[#FAFAF8]/50 border border-transparent" }, `lead-${i}`)),
      Array.from({ length: days }).map((_, i) => {
        const d = new Date(year, month, i + 1);
        const key = dateKey$1(d);
        const rec = byDate.get(key);
        const color = rec ? ATTENDANCE_STATUS_COLORS[rec.status] : ATTENDANCE_STATUS_COLORS.not_marked;
        const isSel = selected === key;
        const isToday = key === todayKey;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setSelected(isSel ? null : key),
            title: rec ? `${ATTENDANCE_STATUS_LABELS[rec.status]} (${rec.date})` : "No record",
            className: `aspect-square rounded-xl sm:rounded-2xl border text-left p-2 sm:p-2.5 flex flex-col justify-between transition-all duration-200 relative group overflow-hidden ${isSel ? "border-[#0A0A0A] bg-[#FAFAF9] shadow-md ring-2 ring-[#0A0A0A]/10 scale-[1.02]" : isToday ? "border-orange-500 bg-orange-50/20 shadow-sm" : "border-[#E5E5E3] bg-white hover:border-[#A3A3A3] hover:bg-[#FAFAF9] hover:shadow-xs"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between w-full", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[12px] sm:text-[13px] font-bold tabular-nums ${isToday ? "text-orange-600 font-extrabold" : "text-[#0A0A0A]"}`, children: i + 1 }),
                isToday && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-bold uppercase tracking-wider text-orange-600 bg-orange-100 px-1 rounded", children: "Today" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mt-auto pt-1 w-full", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    "aria-hidden": true,
                    className: "w-2 h-2 rounded-full shrink-0",
                    style: { background: color }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-medium text-[#8E8E8E] truncate hidden sm:inline", children: rec ? ATTENDANCE_STATUS_LABELS[rec.status] : "—" })
              ] })
            ]
          },
          key
        );
      })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex flex-wrap gap-2 pt-4 border-t border-[#F2F2F0]", children: Object.keys(ATTENDANCE_STATUS_LABELS).map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "span",
      {
        className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#FAFAF9] text-[#6B6B6B] border border-[#E5E5E3]",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, className: "w-2 h-2 rounded-full", style: { background: ATTENDANCE_STATUS_COLORS[s] } }),
          ATTENDANCE_STATUS_LABELS[s]
        ]
      },
      s
    )) }),
    detail && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 rounded-2xl bg-[#111111] text-white p-5 sm:p-6 border border-[#222222] shadow-xl relative overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-16 -right-16 w-48 h-48 rounded-full bg-orange-500/10 blur-3xl pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#262626]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold uppercase tracking-[0.1em] text-neutral-400", children: "Selected Day Details" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[16px] sm:text-[18px] font-bold text-white tracking-tight mt-0.5", children: (/* @__PURE__ */ new Date(`${detail.date}T00:00:00`)).toLocaleDateString(void 0, {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AttendanceStatusBadge, { status: detail.status }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/attendance/regularization",
              className: "group inline-flex items-center gap-1 text-xs font-semibold text-neutral-300 hover:text-white bg-white/10 hover:bg-white/20 border border-white/15 px-3 py-1.5 rounded-xl transition-all",
              children: [
                "Regularise punch",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-[13px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DetailItem, { label: "Clock in", value: formatClock(detail.clockIn), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3.5 h-3.5 text-neutral-400" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DetailItem, { label: "Clock out", value: formatClock(detail.clockOut), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3.5 h-3.5 text-neutral-400" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DetailItem, { label: "Hours worked", value: formatMinutes(detail.workedMinutes), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5 text-emerald-400" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DetailItem, { label: "Break duration", value: formatMinutes(detail.breakMinutes), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5 text-amber-400" }) })
      ] }),
      detail.note && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mt-4 p-3 rounded-xl bg-white/5 border border-white/10 text-[12px] text-neutral-300", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-neutral-400 uppercase text-[10px] tracking-wider block mb-0.5", children: "Note" }),
        detail.note
      ] })
    ] })
  ] });
}
function DetailItem({ label, value, icon }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-[#1A1A1A] p-3 border border-[#2A2A2A]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[10px] uppercase tracking-[0.08em] text-neutral-400 mb-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: label }),
      icon
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[16px] font-bold text-white tabular-nums tracking-tight", children: value })
  ] });
}
function MyAttendance() {
  const {
    employee,
    loading
  } = useCurrentEmployee();
  const now = /* @__PURE__ */ new Date();
  const [year, setYear] = reactExports.useState(now.getFullYear());
  const [month, setMonth] = reactExports.useState(now.getMonth());
  const [records, setRecords] = reactExports.useState([]);
  const [summary, setSummary] = reactExports.useState(null);
  const load = async (empId, y, m) => {
    await attendanceApi.syncLeave(empId);
    const from = `${y}-${pad2$1(m + 1)}-01`;
    const to = `${y}-${pad2$1(m + 1)}-${pad2$1(new Date(y, m + 1, 0).getDate())}`;
    const [recs, sum] = await Promise.all([attendanceApi.getMonth(empId, y, m), attendanceApi.getSummary(empId, from, to)]);
    setRecords(recs.data ?? []);
    setSummary(sum.data);
  };
  reactExports.useEffect(() => {
    if (!employee) return;
    void load(employee.id, year, month);
  }, [employee?.id, year, month]);
  if (loading || !employee) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center items-center py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 32 }) });
  }
  const dateLabel = now.toLocaleDateString(void 0, {
    weekday: "long",
    day: "numeric",
    month: "long"
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto space-y-6 sm:space-y-7 pb-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumb, { items: [{
      label: "Overview",
      to: "/dashboard"
    }, {
      label: "My Attendance"
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-neutral-900 via-neutral-900 to-neutral-800 text-white shadow-md relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-24 -right-24 w-64 h-64 rounded-full bg-orange-500/15 blur-3xl pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-[28px] sm:text-[38px] font-extrabold tracking-tight text-white font-sans", children: "My Attendance" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-[13px] sm:text-[14px] text-neutral-400 flex items-center gap-1.5 font-medium", children: [
          dateLabel,
          " · Track shifts, breaks & monthly timesheets"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex flex-wrap items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/attendance/regularization", className: "group inline-flex items-center gap-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 px-3.5 py-2 text-xs font-semibold text-white backdrop-blur-md transition-all duration-200 active:scale-95", children: [
          "Regularise punch",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-3.5 h-3.5 text-neutral-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/leave/apply", className: "group inline-flex items-center gap-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 px-3.5 py-2 text-xs font-semibold text-white backdrop-blur-md transition-all duration-200 active:scale-95", children: [
          "Apply for leave",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-3.5 h-3.5 text-neutral-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/attendance/team", className: "group inline-flex items-center gap-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 px-3.5 py-2 text-xs font-semibold text-white backdrop-blur-md transition-all duration-200 active:scale-95", children: [
          "Team attendance",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-3.5 h-3.5 text-neutral-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ClockWidget, { employeeId: employee.id, onChange: () => void load(employee.id, year, month) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Attendance Rate", value: `${summary?.attendancePct ?? 0}%`, variant: "dark", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(UserCheck, { className: "w-4 h-4" }), trend: summary?.attendancePct && summary.attendancePct >= 90 ? "Target met" : "Attention needed", trendDir: summary?.attendancePct && summary.attendancePct >= 90 ? "up" : "down", actionHint: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-medium text-neutral-300", children: "Monthly cumulative score" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Present Days", value: String((summary?.present ?? 0) + (summary?.late ?? 0)), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4" }), trend: `${summary?.late ?? 0} late`, trendDir: summary?.late ? "neutral" : "up" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Avg Hours / Day", value: formatMinutes(summary?.avgWorkedMinutes ?? 0), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Timer, { className: "w-4 h-4" }), trend: "8h target", trendDir: "neutral" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Overtime Logged", value: formatMinutes(summary?.overtimeMinutes ?? 0), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-4 h-4" }), trend: (summary?.overtimeMinutes ?? 0) > 0 ? "Extra hours" : "Standard", trendDir: (summary?.overtimeMinutes ?? 0) > 0 ? "up" : "neutral" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AttendanceCalendar, { records, year, month, onMonthChange: (y, m) => {
      setYear(y);
      setMonth(m);
    } })
  ] });
}
export {
  MyAttendance as component
};
