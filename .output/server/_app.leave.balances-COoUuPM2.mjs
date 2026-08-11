import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { P as PageHeader } from "./_ssr/PageHeader-CpfbD_86.mjs";
import { B as Button } from "./_ssr/Button-B92Yl16p.mjs";
import { S as Select } from "./_ssr/Select-CT_4ow88.mjs";
import { C as Card } from "./_ssr/Card-C9YFlUub.mjs";
import { D as DataTable } from "./_ssr/DataTable-QZdOUOks.mjs";
import { s as showToast } from "./_ssr/Toast-n7pN7q8Q.mjs";
import { S as SearchInput } from "./_ssr/SearchInput-B8rrkKGc.mjs";
import { l as listEmployees, i as leaveApi, s as settingsApi } from "./_ssr/router-LFebWAoY.mjs";

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
function BalancesPage() {
  const [loading, setLoading] = reactExports.useState(true);
  const [rows, setRows] = reactExports.useState([]);
  const [types, setTypes] = reactExports.useState([]);
  const [departments, setDepartments] = reactExports.useState([]);
  const [q, setQ] = reactExports.useState("");
  const [departmentId, setDepartmentId] = reactExports.useState("");
  reactExports.useEffect(() => {
    let alive = true;
    void (async () => {
      const [emps, lt, depts] = await Promise.all([listEmployees(), leaveApi.listLeaveTypes(false), settingsApi.listDepartments()]);
      const employees = emps.data ?? [];
      const balances = await Promise.all(employees.map((e) => leaveApi.listBalances(e.id)));
      if (!alive) return;
      setTypes(lt.data ?? []);
      setDepartments(depts.data ?? []);
      setRows(employees.map((e, i) => ({
        employee: e,
        balances: balances[i].data ?? []
      })));
      setLoading(false);
    })();
    return () => {
      alive = false;
    };
  }, []);
  const filtered = reactExports.useMemo(() => {
    return rows.filter((r) => {
      if (departmentId && r.employee.departmentId !== departmentId) return false;
      if (q) {
        const name = `${r.employee.firstName} ${r.employee.lastName}`.toLowerCase();
        if (!name.includes(q.toLowerCase()) && !r.employee.employeeCode.toLowerCase().includes(q.toLowerCase())) return false;
      }
      return true;
    });
  }, [rows, departmentId, q]);
  const columns = [{
    key: "employee",
    label: "Employee",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-medium", children: [
        r.employee.firstName,
        " ",
        r.employee.lastName
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-[#6B6B6B]", children: r.employee.employeeCode })
    ] })
  }, ...types.map((t) => ({
    key: t.id,
    label: t.code,
    align: "right",
    render: (r) => {
      const b = r.balances.find((x) => x.leaveTypeId === t.id);
      return b ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: b.available <= 2 ? "text-[#B45309] font-semibold" : "", children: b.available }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#D4D4D8]", children: "—" });
    }
  }))];
  const onExport = () => {
    const header = ["Employee Code", "Name", "Department", ...types.map((t) => t.code)];
    const lines = filtered.map((r) => [r.employee.employeeCode, `${r.employee.firstName} ${r.employee.lastName}`, departments.find((d) => d.id === r.employee.departmentId)?.name ?? "", ...types.map((t) => String(r.balances.find((b) => b.leaveTypeId === t.id)?.available ?? ""))]);
    const csv = [header, ...lines].map((row) => row.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], {
      type: "text/csv;charset=utf-8;"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "leave-balances.csv";
    a.click();
    URL.revokeObjectURL(url);
    showToast(`Exported ${filtered.length} employee balances`, "success");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Leave balances", description: "Available leave balance for every employee, by leave type.", actions: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: onExport, children: "Export CSV" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SearchInput, { value: q, onChange: setQ, placeholder: "Search by name or code…", className: "max-w-xs" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { value: departmentId, onChange: (e) => setDepartmentId(e.target.value), placeholder: "All departments", options: departments.map((d) => ({
        value: d.id,
        label: d.name
      })), className: "w-56" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { padded: false, className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DataTable, { columns, data: filtered, loading, getRowKey: (r) => r.employee.id }) })
  ] });
}
export {
  BalancesPage as component
};
