import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { P as PageHeader } from "./_ssr/PageHeader-CpfbD_86.mjs";
import { S as Select } from "./_ssr/Select-CT_4ow88.mjs";
import { C as Card } from "./_ssr/Card-C9YFlUub.mjs";
import { A as Avatar } from "./_ssr/Avatar-BQ6VYrPZ.mjs";
import { s as settingsApi, i as leaveApi, Q as toKey, S as Spinner } from "./_ssr/router-LFebWAoY.mjs";
import { E as EmptyState } from "./_ssr/EmptyState-C_t8YrDr.mjs";
import { L as LeaveTypeBadge } from "./_ssr/LeaveTypeBadge-CbvvgH9D.mjs";

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
function monthMatrix(view) {
  const first = new Date(view.getFullYear(), view.getMonth(), 1);
  const days = new Date(view.getFullYear(), view.getMonth() + 1, 0).getDate();
  const lead = first.getDay();
  const cells = Array.from({
    length: lead
  }, () => null);
  for (let d = 1; d <= days; d++) cells.push(new Date(view.getFullYear(), view.getMonth(), d));
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
function TeamCalendarPage() {
  const [view, setView] = reactExports.useState(() => /* @__PURE__ */ new Date());
  const [loading, setLoading] = reactExports.useState(true);
  const [entries, setEntries] = reactExports.useState([]);
  const [holidays, setHolidays] = reactExports.useState([]);
  const [departments, setDepartments] = reactExports.useState([]);
  const [departmentId, setDepartmentId] = reactExports.useState("");
  reactExports.useEffect(() => {
    void settingsApi.listDepartments().then((r) => r.data && setDepartments(r.data));
  }, []);
  reactExports.useEffect(() => {
    let alive = true;
    setLoading(true);
    const from = new Date(view.getFullYear(), view.getMonth(), 1);
    const to = new Date(view.getFullYear(), view.getMonth() + 1, 0);
    void Promise.all([leaveApi.listTeamLeaves(from, to, {
      departmentId: departmentId || void 0
    }), leaveApi.getCalendarContext()]).then(([res, cal]) => {
      if (!alive) return;
      setEntries(res.data ?? []);
      setHolidays(cal.holidays);
      setLoading(false);
    });
    return () => {
      alive = false;
    };
  }, [view, departmentId]);
  const byDay = reactExports.useMemo(() => {
    const map = /* @__PURE__ */ new Map();
    for (const e of entries) {
      const start = new Date(e.startDate);
      const end = new Date(e.endDate);
      for (let t = start.getTime(); t <= end.getTime(); t += 864e5) {
        const key = toKey(new Date(t));
        const list = map.get(key) ?? [];
        list.push(e);
        map.set(key, list);
      }
    }
    return map;
  }, [entries]);
  const holidaySet = reactExports.useMemo(() => new Set(holidays.map(toKey)), [holidays]);
  const cells = monthMatrix(view);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Team leave calendar", description: "See who is out this month, with company holidays marked.", actions: /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { value: departmentId, onChange: (e) => setDepartmentId(e.target.value), placeholder: "All departments", options: departments.map((d) => ({
      value: d.id,
      label: d.name
    })), className: "w-56" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { padded: false, className: "p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setView(new Date(view.getFullYear(), view.getMonth() - 1, 1)), className: "h-8 w-8 rounded-sm border border-[#E5E5E3] text-[#6B6B6B] hover:bg-[#F2F2F0]", children: "‹" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] font-semibold", children: view.toLocaleDateString("en-GB", {
          month: "long",
          year: "numeric"
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setView(new Date(view.getFullYear(), view.getMonth() + 1, 1)), className: "h-8 w-8 rounded-sm border border-[#E5E5E3] text-[#6B6B6B] hover:bg-[#F2F2F0]", children: "›" })
      ] }),
      loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 24 }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-7 gap-1", children: [
        WEEKDAYS.map((w) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-[11px] font-semibold uppercase tracking-wide text-[#9CA3AF] py-1", children: w }, w)),
        cells.map((d, i) => {
          if (!d) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-[100px]" }, i);
          const key = toKey(d);
          const dayEntries = byDay.get(key) ?? [];
          const isHoliday = holidaySet.has(key);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `min-h-[100px] rounded-sm border p-1.5 ${isHoliday ? "bg-[#FFFBEB] border-[#FDE68A]" : "border-[#F2F2F0]"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-[12px] font-medium ${isHoliday ? "text-[#B45309]" : "text-[#0A0A0A]"}`, children: d.getDate() }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 space-y-0.5", children: [
              dayEntries.slice(0, 3).map((e, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", title: `${e.employeeName} — ${e.leaveType.name}`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { name: e.employeeName, size: 14 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] truncate text-[#4B4B4B]", children: e.employeeName.split(" ")[0] })
              ] }, idx)),
              dayEntries.length > 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-[#9CA3AF]", children: [
                "+",
                dayEntries.length - 3,
                " more"
              ] })
            ] })
          ] }, i);
        })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-semibold mb-3", children: "Who's out this month" }),
      entries.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No one is on leave this month." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: entries.map((e, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3 text-[13px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { name: e.employeeName, size: 24 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: e.employeeName }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(LeaveTypeBadge, { leaveType: e.leaveType, size: "sm" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[#6B6B6B]", children: [
          e.startDate.toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short"
          }),
          " – ",
          e.endDate.toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short"
          })
        ] })
      ] }, i)) })
    ] })
  ] });
}
export {
  TeamCalendarPage as component
};
