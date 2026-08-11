import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { d as useNavigate, L as Link } from "./_libs/tanstack__react-router.mjs";
import { B as Button } from "./_ssr/Button-B92Yl16p.mjs";
import { B as Badge } from "./_ssr/Badge-BQrIKnVV.mjs";
import { E as EmptyState } from "./_ssr/EmptyState-C_t8YrDr.mjs";
import { C as ConfirmDialog } from "./_ssr/ConfirmDialog-CNV1l6_7.mjs";
import { D as DataTable } from "./_ssr/DataTable-QZdOUOks.mjs";
import { B as Breadcrumb } from "./_ssr/Breadcrumb-BAW4dGjH.mjs";
import { s as showToast } from "./_ssr/Toast-n7pN7q8Q.mjs";
import { s as settingsApi, l as listEmployees, A as downloadCsv, B as employeesToCsv, c as cn, C as archiveEmployees } from "./_ssr/router-LFebWAoY.mjs";
import { E as EmployeeAvatar } from "./_ssr/EmployeeAvatar-C6yRCmSB.mjs";
import { E as EmployeeStatusBadge } from "./_ssr/EmployeeStatusBadge-0v7L__QJ.mjs";
import { S as SearchInput } from "./_ssr/SearchInput-B8rrkKGc.mjs";
import { M as MultiSelect } from "./_ssr/MultiSelect-DHbFbN4k.mjs";
import { E as EMPLOYMENT_TYPE_LABELS, a as EMPLOYMENT_STATUS_LABELS } from "./_ssr/employee-uFc04z2V.mjs";
import { P as PermissionGuard } from "./_ssr/PermissionGuard-CtwjQNn8.mjs";

import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval.mjs";
import "./_libs/unenv.mjs";


import "./_libs/seroval-plugins.mjs";


import "./_libs/react-dom.mjs";
import "./_libs/isbot.mjs";
import "./_ssr/Modal-DIFPhA7e.mjs";
import "./_libs/tanstack__query-core.mjs";
import "./_libs/tanstack__react-query.mjs";
import "./_libs/clsx.mjs";
import "./_libs/tailwind-merge.mjs";
import "./_libs/zod.mjs";
import "./_ssr/usePermission-5FQzLb5G.mjs";
import "./_ssr/rbac-B_cCMzV8.mjs";
import "./_ssr/rbac-B1d7raBj.mjs";
function ViewToggle({ value, onChange, className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("inline-flex rounded-md border border-[#E5E5E3] bg-white p-0.5", className), role: "group", "aria-label": "View mode", children: ["list", "grid"].map((m) => {
    const active = value === m;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        "aria-pressed": active,
        onClick: () => onChange(m),
        className: cn(
          "h-8 px-3 text-[13px] rounded-[6px] inline-flex items-center gap-1.5 transition-colors",
          active ? "bg-[#0A0A0A] text-white" : "text-[#6B6B6B] hover:bg-[#F2F2F0]"
        ),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, children: m === "list" ? "☰" : "▦" }),
          m === "list" ? "List" : "Grid"
        ]
      },
      m
    );
  }) });
}
function EmployeeCard({ employee, designationName, departmentName }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Link,
    {
      to: "/employees/$employeeId",
      params: { employeeId: employee.id },
      className: "group block rounded-md border border-[#E5E5E3] bg-white p-5 hover:shadow-md transition-shadow",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(EmployeeAvatar, { employee, size: "lg", showStatus: true, status: employee.employmentStatus }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 font-semibold text-[14px] text-[#0A0A0A] truncate w-full", children: [
          employee.firstName,
          " ",
          employee.lastName
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#6B6B6B] truncate w-full", children: designationName ?? "—" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-[#9CA3AF] truncate w-full", children: departmentName ?? "—" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(EmployeeStatusBadge, { status: employee.employmentStatus, size: "sm" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-3 text-[12px] text-[var(--tenant-primary)] opacity-0 group-hover:opacity-100 transition-opacity", children: "View profile →" })
      ] })
    }
  );
}
function EmployeeSearchFilters({ filters, onChange, departments, designations }) {
  const hasAny = !!filters.q || !!filters.departmentId || !!filters.designationId || !!filters.types?.length || !!filters.statuses?.length;
  const filteredDesigs = filters.departmentId ? designations.filter((d) => d.departmentIds.includes(filters.departmentId)) : designations;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-[#E5E5E3] bg-white p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SearchInput,
        {
          placeholder: "Search name, code, email…",
          value: filters.q ?? "",
          onChange: (q) => onChange({ ...filters, q: q || void 0 }),
          className: "lg:col-span-2"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "select",
        {
          "aria-label": "Department",
          value: filters.departmentId ?? "",
          onChange: (e) => onChange({ ...filters, departmentId: e.target.value || void 0, designationId: void 0 }),
          className: "h-10 px-3 rounded-md border border-[#E5E5E3] bg-white text-[14px]",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "All departments" }),
            departments.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: d.id, children: d.name }, d.id))
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "select",
        {
          "aria-label": "Designation",
          value: filters.designationId ?? "",
          onChange: (e) => onChange({ ...filters, designationId: e.target.value || void 0 }),
          className: "h-10 px-3 rounded-md border border-[#E5E5E3] bg-white text-[14px]",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "All designations" }),
            filteredDesigs.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: d.id, children: d.name }, d.id))
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          MultiSelect,
          {
            options: Object.entries(EMPLOYMENT_TYPE_LABELS).map(([value, label]) => ({ value, label })),
            value: filters.types ?? [],
            onChange: (v) => onChange({ ...filters, types: v.length ? v : void 0 }),
            placeholder: "All types"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          MultiSelect,
          {
            options: Object.entries(EMPLOYMENT_STATUS_LABELS).map(([value, label]) => ({ value, label })),
            value: filters.statuses ?? [],
            onChange: (v) => onChange({ ...filters, statuses: v.length ? v : void 0 }),
            placeholder: "All statuses"
          }
        )
      ] })
    ] }),
    hasAny && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => onChange({}),
        className: "mt-3 text-[12px] text-[var(--tenant-primary)] hover:underline",
        children: "Clear all filters"
      }
    )
  ] });
}
function BulkActionsBar({ count, onExport, onArchive, onClear }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 rounded-md border border-[#0A0A0A]/10 bg-[#0A0A0A] text-white px-4 py-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[13px] font-medium", children: [
      count,
      " employee",
      count === 1 ? "" : "s",
      " selected"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", size: "sm", onClick: onExport, children: "Export CSV" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "danger", size: "sm", onClick: onArchive, children: "Archive" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: onClear, className: "text-[12px] text-white/70 hover:text-white", children: "Deselect all" })
    ] })
  ] });
}
const VIEW_KEY = "hrms.employees.viewMode";
function EmployeesPage() {
  const navigate = useNavigate();
  const [view, setView] = reactExports.useState("list");
  const [filters, setFilters] = reactExports.useState({});
  const [list, setList] = reactExports.useState([]);
  const [departments, setDepartments] = reactExports.useState([]);
  const [designations, setDesignations] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [selection, setSelection] = reactExports.useState(/* @__PURE__ */ new Set());
  const [confirmArchive, setConfirmArchive] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (typeof window !== "undefined") {
      const v = window.localStorage.getItem(VIEW_KEY);
      if (v === "list" || v === "grid") setView(v);
    }
  }, []);
  reactExports.useEffect(() => {
    if (typeof window !== "undefined") window.localStorage.setItem(VIEW_KEY, view);
  }, [view]);
  reactExports.useEffect(() => {
    void Promise.all([settingsApi.listDepartments(), settingsApi.listDesignations()]).then(([d, dz]) => {
      if (d.data) setDepartments(d.data);
      if (dz.data) setDesignations(dz.data);
    });
  }, []);
  reactExports.useEffect(() => {
    setLoading(true);
    void listEmployees(filters).then((r) => {
      if (r.data) setList(r.data);
      setLoading(false);
    });
  }, [filters]);
  const deptName = (id) => departments.find((d) => d.id === id)?.name ?? "—";
  const desigName = (id) => designations.find((d) => d.id === id)?.name ?? "—";
  const columns = reactExports.useMemo(() => [{
    key: "name",
    label: "Employee",
    render: (e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", onClick: (ev) => ev.stopPropagation(), checked: selection.has(e.id), onChange: () => setSelection((s) => {
        const n = new Set(s);
        if (n.has(e.id)) n.delete(e.id);
        else n.add(e.id);
        return n;
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(EmployeeAvatar, { employee: e, size: "sm" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-medium text-[14px] truncate", children: [
          e.firstName,
          " ",
          e.lastName
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-[#6B6B6B] truncate", children: e.employeeCode })
      ] })
    ] })
  }, {
    key: "dept",
    label: "Department",
    render: (e) => deptName(e.departmentId)
  }, {
    key: "desig",
    label: "Designation",
    render: (e) => desigName(e.designationId)
  }, {
    key: "type",
    label: "Type",
    render: (e) => EMPLOYMENT_TYPE_LABELS[e.employmentType]
  }, {
    key: "status",
    label: "Status",
    render: (e) => /* @__PURE__ */ jsxRuntimeExports.jsx(EmployeeStatusBadge, { status: e.employmentStatus, size: "sm" })
  }, {
    key: "joined",
    label: "Joined",
    render: (e) => new Date(e.dateOfJoining).toLocaleDateString()
  }, {
    key: "actions",
    label: "",
    align: "right",
    render: (e) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/employees/$employeeId", params: {
      employeeId: e.id
    }, onClick: (ev) => ev.stopPropagation(), className: "text-[12px] text-[var(--tenant-primary)] hover:underline", children: "View →" })
  }], [selection, departments, designations]);
  const onExport = () => {
    const rows = selection.size ? list.filter((e) => selection.has(e.id)) : list;
    downloadCsv("employees.csv", employeesToCsv(rows));
    showToast(`Exported ${rows.length} employees`, "success");
  };
  const doArchive = async () => {
    await archiveEmployees(Array.from(selection));
    showToast(`${selection.size} archived`, "success");
    setSelection(/* @__PURE__ */ new Set());
    const r = await listEmployees(filters);
    if (r.data) setList(r.data);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumb, { items: [{
      label: "Employees"
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-[28px] font-bold tracking-[-0.02em]", children: "Employees" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "default", children: list.length })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(PermissionGuard, { permission: "employees.export", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: onExport, children: "Export all" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PermissionGuard, { permission: "employees.create", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", onClick: () => navigate({
          to: "/employees/new"
        }), children: "Add employee" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EmployeeSearchFilters, { filters, onChange: setFilters, departments, designations }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[13px] text-[#6B6B6B]", children: [
        list.length,
        " result",
        list.length === 1 ? "" : "s"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ViewToggle, { value: view, onChange: setView })
    ] }),
    selection.size > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(BulkActionsBar, { count: selection.size, onExport, onArchive: () => setConfirmArchive(true), onClear: () => setSelection(/* @__PURE__ */ new Set()) }),
    view === "list" ? /* @__PURE__ */ jsxRuntimeExports.jsx(DataTable, { columns, data: list, loading, getRowKey: (e) => e.id, emptyState: /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: Object.keys(filters).length === 0 ? "No employees yet" : "No employees match your filters", subtitle: Object.keys(filters).length === 0 ? "Add your first employee to get started." : "Try clearing some filters.", action: Object.keys(filters).length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => navigate({
      to: "/employees/new"
    }), children: "Add employee" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: () => setFilters({}), children: "Clear filters" }) }) }) : loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4", children: Array.from({
      length: 6
    }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[220px] rounded-md border border-[#E5E5E3] bg-white animate-pulse" }, i)) }) : list.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No employees match your filters", action: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: () => setFilters({}), children: "Clear filters" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4", children: list.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsx(EmployeeCard, { employee: e, designationName: desigName(e.designationId), departmentName: deptName(e.departmentId) }, e.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ConfirmDialog, { open: confirmArchive, onOpenChange: setConfirmArchive, title: `Archive ${selection.size} employee${selection.size === 1 ? "" : "s"}?`, description: "They will be marked Inactive. You can reactivate them later from their profile.", confirmLabel: "Archive", variant: "danger", onConfirm: doArchive })
  ] });
}
export {
  EmployeesPage as component
};
