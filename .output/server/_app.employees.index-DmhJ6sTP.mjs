import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { d as useNavigate, L as Link } from "./_libs/tanstack__react-router.mjs";
import { B as Button } from "./_ssr/Button-Crtgy6Xx.mjs";
import { B as Badge } from "./_ssr/Badge-Cm1DzmgP.mjs";
import { E as EmptyState } from "./_ssr/EmptyState-DCYWhDnT.mjs";
import { C as ConfirmDialog } from "./_ssr/ConfirmDialog-C1NdmGJ3.mjs";
import { D as DataTable } from "./_ssr/DataTable-ChSCAfLO.mjs";
import { B as Breadcrumb } from "./_ssr/Breadcrumb-eir09VHE.mjs";
import { s as showToast } from "./_ssr/Toast-DlQQlIf6.mjs";
import { s as settingsApi, l as listEmployees, A as downloadCsv, B as employeesToCsv, c as cn, C as archiveEmployees } from "./_ssr/router-Arl77cRa.mjs";
import { E as EmployeeAvatar } from "./_ssr/EmployeeAvatar-XclfLP_Y.mjs";
import { E as EmployeeStatusBadge } from "./_ssr/EmployeeStatusBadge-D3dLMZIO.mjs";
import { S as SearchInput } from "./_ssr/SearchInput-CZYGhCQL.mjs";
import { M as MultiSelect } from "./_ssr/MultiSelect-TfWZYelZ.mjs";
import { E as EMPLOYMENT_TYPE_LABELS, a as EMPLOYMENT_STATUS_LABELS } from "./_ssr/employee-uFc04z2V.mjs";
import { P as PermissionGuard } from "./_ssr/PermissionGuard-DHUddp2f.mjs";
import { A as ArrowUpRight, a4 as FunnelX } from "./_libs/lucide-react.mjs";

import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval.mjs";
import "./_libs/unenv.mjs";


import "./_libs/seroval-plugins.mjs";


import "./_libs/react-dom.mjs";
import "./_libs/isbot.mjs";
import "./_ssr/Modal-BWxmma2i.mjs";
import "./_libs/tanstack__query-core.mjs";
import "./_libs/tanstack__react-query.mjs";
import "./_libs/clsx.mjs";
import "./_libs/tailwind-merge.mjs";
import "./_libs/zod.mjs";
import "./_ssr/usePermission-C7-ELJsH.mjs";
import "./_ssr/rbac-CiXrabhS.mjs";
import "./_ssr/rbac-CHd75bNv.mjs";
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
function EmployeeCard({
  employee,
  designationName,
  departmentName,
  variant = "grid",
  className
}) {
  if (variant === "list") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: "/employees/$employeeId",
        params: { employeeId: employee.id },
        className: cn(
          "group relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl border border-[#E5E5E3] bg-white p-4 sm:p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all duration-200 hover:border-[#D1D1CF] hover:shadow-md overflow-hidden",
          className
        ),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3.5 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              EmployeeAvatar,
              {
                employee,
                size: "md",
                showStatus: true,
                status: employee.employmentStatus,
                className: "shrink-0 rounded-xl"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-[15px] text-[#0A0A0A] tracking-tight truncate group-hover:text-orange-600 transition-colors", children: [
                  employee.firstName,
                  " ",
                  employee.lastName
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded-md bg-[#FAFAF9] border border-[#E5E5E3] font-bold text-[11px] text-[#6B6B6B] tabular-nums", children: employee.employeeCode }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(EmployeeStatusBadge, { status: employee.employmentStatus, size: "sm" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[13px] font-medium text-[#6B6B6B] truncate mt-0.5", children: [
                designationName ?? "—",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#D4D4D8]", children: "·" }),
                " ",
                departmentName ?? "—"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3 shrink-0 self-end sm:self-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#FAFAF9] group-hover:bg-[#0A0A0A] text-[#0A0A0A] group-hover:text-white border border-[#E5E5E3] group-hover:border-[#0A0A0A] font-bold text-[12px] transition-all duration-200 shadow-2xs", children: [
            "View Profile",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-3.5 h-3.5 text-[#8E8E8E] group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })
          ] }) })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Link,
    {
      to: "/employees/$employeeId",
      params: { employeeId: employee.id },
      className: cn(
        "group relative flex flex-col justify-between rounded-2xl border border-[#E5E5E3] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#D1D1CF] hover:shadow-md overflow-hidden",
        className
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(EmployeeStatusBadge, { status: employee.employmentStatus, size: "sm" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center justify-center w-7 h-7 rounded-xl bg-[#FAFAF9] text-[#8E8E8E] border border-[#E5E5E3] group-hover:bg-[#0A0A0A] group-hover:text-white group-hover:border-[#0A0A0A] transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center pt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              EmployeeAvatar,
              {
                employee,
                size: "lg",
                showStatus: true,
                status: employee.employmentStatus,
                className: "rounded-2xl"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "mt-3.5 font-bold text-[15px] text-[#0A0A0A] tracking-tight truncate w-full group-hover:text-orange-600 transition-colors", children: [
              employee.firstName,
              " ",
              employee.lastName
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-[13px] font-medium text-[#404040] truncate w-full", children: designationName ?? "—" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[11px] font-extrabold uppercase tracking-[0.1em] text-[#8E8E8E] truncate w-full", children: departmentName ?? "—" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 pt-3.5 border-t border-[#F2F2F0] flex items-center justify-between text-[11px] text-[#8E8E8E]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-[#6B6B6B]", children: [
            "Code: ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#0A0A0A] font-bold tabular-nums", children: employee.employeeCode })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#FAFAF9] group-hover:bg-[#0A0A0A] text-[#0A0A0A] group-hover:text-white border border-[#E5E5E3] group-hover:border-[#0A0A0A] font-bold text-[11px] transition-all duration-200 shadow-2xs", children: [
            "View Profile",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-3 h-3 text-[#8E8E8E] group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })
          ] })
        ] })
      ]
    }
  );
}
function EmployeeSearchFilters({ filters, onChange, departments, designations }) {
  const activeCount = [
    !!filters.q,
    !!filters.departmentId,
    !!filters.designationId,
    !!filters.types?.length,
    !!filters.statuses?.length
  ].filter(Boolean).length;
  const hasAny = activeCount > 0;
  const filteredDesigs = filters.departmentId ? designations.filter((d) => d.departmentIds.includes(filters.departmentId)) : designations;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-[#E5E5E3] bg-white p-4 sm:p-5 shadow-xs space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-orange-500" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[11px] font-semibold uppercase tracking-[0.1em] text-[#8E8E8E]", children: "Directory Search & Filters" }),
        hasAny && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-orange-500/10 text-orange-600 border border-orange-500/20", children: [
          activeCount,
          " active filter",
          activeCount > 1 ? "s" : ""
        ] })
      ] }),
      hasAny && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => onChange({}),
          className: "inline-flex items-center gap-1 text-[12px] font-semibold text-neutral-500 hover:text-orange-600 transition-colors",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FunnelX, { className: "w-3.5 h-3.5" }),
            "Reset all"
          ]
        }
      )
    ] }),
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
          className: "h-10 px-3.5 rounded-xl border border-[#E5E5E3] bg-[#FAFAF9] hover:bg-white focus:bg-white text-[13px] font-medium text-[#0A0A0A] transition-colors focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-hidden",
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
          className: "h-10 px-3.5 rounded-xl border border-[#E5E5E3] bg-[#FAFAF9] hover:bg-white focus:bg-white text-[13px] font-medium text-[#0A0A0A] transition-colors focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-hidden",
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
    ] })
  ] });
}
function BulkActionsBar({ count, onExport, onArchive, onClear }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-[#0A0A0A] border border-neutral-800 text-white p-4 shadow-xl flex items-center justify-between flex-wrap gap-3 backdrop-blur-xl animate-in fade-in slide-in-from-bottom-2 duration-200", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2.5 w-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75 animate-ping" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-2.5 w-2.5 rounded-full bg-orange-500" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[13px] font-bold tracking-tight", children: [
        count,
        " employee",
        count === 1 ? "" : "s",
        " selected"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", size: "sm", onClick: onExport, className: "rounded-xl font-semibold", children: "Export CSV" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "danger", size: "sm", onClick: onArchive, className: "rounded-xl font-semibold", children: "Archive" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: onClear,
          className: "text-[12px] font-medium text-neutral-400 hover:text-white transition-colors px-2 py-1",
          children: "Deselect all"
        }
      )
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", "aria-label": `Select ${e.firstName} ${e.lastName}`, onClick: (ev) => ev.stopPropagation(), checked: selection.has(e.id), onChange: () => setSelection((s) => {
        const n = new Set(s);
        if (n.has(e.id)) n.delete(e.id);
        else n.add(e.id);
        return n;
      }), className: "h-4 w-4 accent-[#0A0A0A] rounded cursor-pointer shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(EmployeeAvatar, { employee: e, size: "sm", className: "rounded-xl shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/employees/$employeeId", params: {
          employeeId: e.id
        }, className: "font-bold text-[14px] text-[#0A0A0A] hover:text-orange-600 transition-colors truncate block", children: [
          e.firstName,
          " ",
          e.lastName
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block mt-0.5 px-2 py-0.2 rounded-md bg-[#FAFAF9] border border-[#E5E5E3] font-bold text-[10px] text-[#6B6B6B] tabular-nums", children: e.employeeCode })
      ] })
    ] })
  }, {
    key: "dept",
    label: "Department",
    render: (e) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-[#0A0A0A]", children: deptName(e.departmentId) })
  }, {
    key: "desig",
    label: "Designation",
    render: (e) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-[#404040]", children: desigName(e.designationId) })
  }, {
    key: "type",
    label: "Type",
    render: (e) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-2.5 py-0.5 rounded-lg text-[11px] font-bold bg-[#FAFAF9] text-[#0A0A0A] border border-[#E5E5E3]", children: EMPLOYMENT_TYPE_LABELS[e.employmentType] })
  }, {
    key: "status",
    label: "Status",
    render: (e) => /* @__PURE__ */ jsxRuntimeExports.jsx(EmployeeStatusBadge, { status: e.employmentStatus, size: "sm" })
  }, {
    key: "joined",
    label: "Joined",
    render: (e) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] font-semibold text-[#6B6B6B] tabular-nums", children: new Date(e.dateOfJoining).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    }) })
  }, {
    key: "actions",
    label: "Action",
    align: "right",
    render: (e) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/employees/$employeeId", params: {
      employeeId: e.id
    }, onClick: (ev) => ev.stopPropagation(), className: "inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#FAFAF9] hover:bg-[#0A0A0A] text-[#0A0A0A] hover:text-white border border-[#E5E5E3] hover:border-[#0A0A0A] font-bold text-[11px] transition-all duration-200 shadow-2xs group/btn shrink-0", children: [
      "View Profile",
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-3 h-3 text-[#8E8E8E] group-hover/btn:text-white transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" })
    ] })
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
