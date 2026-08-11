import { j as jsxRuntimeExports, r as reactExports } from "./_libs/react.mjs";
import { P as PageHeader } from "./_ssr/PageHeader-CpfbD_86.mjs";
import { A as Avatar } from "./_ssr/Avatar-BQ6VYrPZ.mjs";
import { D as dateKey$1, l as listEmployees, a as attendanceApi, S as Spinner, g as formatClock, b as formatMinutes } from "./_ssr/router-LFebWAoY.mjs";
import { A as Alert } from "./_ssr/Alert-DctqS4QO.mjs";
import { E as EmptyState } from "./_ssr/EmptyState-C_t8YrDr.mjs";
import { D as DataTable } from "./_ssr/DataTable-QZdOUOks.mjs";
import { A as AttendanceStatusBadge } from "./_ssr/AttendanceStatusBadge-CAFJA9p8.mjs";
import { B as Button } from "./_ssr/Button-B92Yl16p.mjs";
import { D as DatePicker } from "./_ssr/DatePicker-CJAMdAK9.mjs";
import { S as StatCard } from "./_ssr/StatCard-MC6T_-Xi.mjs";
import { A as AttendanceRiskSection } from "./_ssr/AttendanceRiskSection-BflCeuxH.mjs";
import { u as useCurrentEmployee } from "./_ssr/useCurrentEmployee-9Y57ts2r.mjs";
import { P as PermissionGuard } from "./_ssr/PermissionGuard-CtwjQNn8.mjs";

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
import "./_ssr/attendance-DW5Ch_bj.mjs";
import "./_ssr/Select-CT_4ow88.mjs";
import "./_ssr/ai-Cs4yquvb.mjs";
import "./_ssr/AiBadge-CDW3a6Ir.mjs";
import "./_ssr/Badge-BQrIKnVV.mjs";
import "./_ssr/Textarea-DmSlcYuH.mjs";
import "./_ssr/auth-Dq95Bc2W.mjs";
import "./_ssr/rbac-B_cCMzV8.mjs";
import "./_ssr/rbac-B1d7raBj.mjs";
import "./_ssr/usePermission-5FQzLb5G.mjs";
function DateNav({ value, onChange, maxDate }) {
  const shift = (days) => {
    const d = /* @__PURE__ */ new Date(`${value}T00:00:00`);
    d.setDate(d.getDate() + days);
    onChange(dateKey$1(d));
  };
  const label = (/* @__PURE__ */ new Date(`${value}T00:00:00`)).toLocaleDateString([], {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });
  const today = dateKey$1(/* @__PURE__ */ new Date());
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", size: "sm", onClick: () => shift(-1), "aria-label": "Previous day", children: "←" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DatePicker, { value, onChange, maxDate }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] text-[#6B6B6B] hidden sm:inline", children: label })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", size: "sm", onClick: () => shift(1), disabled: value >= today, "aria-label": "Next day", children: "→" }),
    value !== today && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", onClick: () => onChange(today), children: "Today" })
  ] });
}
function TeamAttendanceSummary({ rows }) {
  const count = (pred) => rows.filter(pred).length;
  const present = count((r) => r.status === "present" || r.status === "late" || r.status === "half_day");
  const absent = count((r) => r.status === "absent");
  const late = count((r) => r.status === "late");
  const onLeave = count((r) => r.status === "on_leave");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Present", value: present }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Late", value: late }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Absent", value: absent }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "On leave", value: onLeave })
  ] });
}
function TeamAttendancePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PermissionGuard, { permission: "attendance.view_team", fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { variant: "error", children: "You don't have access to team attendance." }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(TeamAttendanceBoard, {}) });
}
function TeamAttendanceBoard() {
  const {
    employee,
    loading: loadingMe
  } = useCurrentEmployee();
  const [date, setDate] = reactExports.useState(dateKey$1(/* @__PURE__ */ new Date()));
  const [rows, setRows] = reactExports.useState([]);
  const [reportIds, setReportIds] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    if (!employee) return;
    let alive = true;
    void (async () => {
      setLoading(true);
      const emps = (await listEmployees()).data ?? [];
      const reports = emps.filter((e) => e.reportingManagerId === employee.id);
      setReportIds(reports.map((e) => e.id));
      if (!reports.length) {
        if (alive) {
          setRows([]);
          setLoading(false);
        }
        return;
      }
      const recs = (await attendanceApi.listRecords({
        employeeIds: reports.map((e) => e.id),
        from: date,
        to: date
      })).data ?? [];
      const byEmp = new Map(recs.map((r) => [r.employeeId, r]));
      const board = reports.map((e) => {
        const rec = byEmp.get(e.id);
        return {
          employeeId: e.id,
          employeeName: `${e.firstName} ${e.lastName}`,
          departmentId: e.departmentId,
          avatarUrl: e.avatarUrl,
          status: rec?.status ?? "not_marked",
          clockIn: rec?.clockIn,
          clockOut: rec?.clockOut,
          workedMinutes: rec?.workedMinutes ?? 0,
          lateMinutes: rec?.lateMinutes ?? 0
        };
      }).sort((a, b) => a.employeeName.localeCompare(b.employeeName));
      if (alive) {
        setRows(board);
        setLoading(false);
      }
    })();
    return () => {
      alive = false;
    };
  }, [employee?.id, date]);
  const columns = [{
    key: "employeeName",
    label: "Employee",
    sortable: true,
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { name: r.employeeName, src: r.avatarUrl, size: 28 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: r.employeeName })
    ] })
  }, {
    key: "status",
    label: "Status",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsx(AttendanceStatusBadge, { status: r.status })
  }, {
    key: "clockIn",
    label: "Clock in",
    render: (r) => formatClock(r.clockIn)
  }, {
    key: "clockOut",
    label: "Clock out",
    render: (r) => formatClock(r.clockOut)
  }, {
    key: "workedMinutes",
    label: "Worked",
    render: (r) => formatMinutes(r.workedMinutes)
  }, {
    key: "lateMinutes",
    label: "Late by",
    render: (r) => r.lateMinutes > 0 ? formatMinutes(r.lateMinutes) : "—"
  }];
  if (loadingMe) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 28 }) });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Team attendance", description: "Check in on your direct reports for any working day." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DateNav, { value: date, onChange: setDate, maxDate: dateKey$1(/* @__PURE__ */ new Date()) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TeamAttendanceSummary, { rows }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AttendanceRiskSection, { employeeIds: reportIds }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DataTable, { columns, data: rows, loading, getRowKey: (r) => r.employeeId, emptyState: /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No direct reports found.", subtitle: "Employees reporting to you will show up here with their attendance for the selected day." }) })
  ] });
}
export {
  TeamAttendancePage as component
};
