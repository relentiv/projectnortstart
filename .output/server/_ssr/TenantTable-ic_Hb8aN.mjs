import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { I as Input } from "./Input-CHeJoRlX.mjs";
import { S as Select } from "./Select-Bg687n3T.mjs";
import { E as EmptyState } from "./EmptyState-DCYWhDnT.mjs";
import { C as ConfirmDialog } from "./ConfirmDialog-C1NdmGJ3.mjs";
import { D as DataTable } from "./DataTable-ChSCAfLO.mjs";
import { s as showToast } from "./Toast-DlQQlIf6.mjs";
import { T as TenantStatusBadge } from "./TenantStatusBadge-DcgjXyp7.mjs";
import { c as cn } from "./router-Arl77cRa.mjs";
import { a as adminApi } from "./admin-BnYXwmfu.mjs";
import { i as impersonationStateStore } from "./auth-CjdYhZTR.mjs";
function TenantActionMenu({ actions }) {
  const [open, setOpen] = reactExports.useState(false);
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (!open) return;
    const onDown = (e) => {
      if (!ref.current?.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref, className: "relative inline-block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => setOpen((v) => !v),
        "aria-label": "Tenant actions",
        "aria-haspopup": "menu",
        "aria-expanded": open,
        className: "h-8 w-8 rounded-sm hover:bg-[#F2F2F0] flex items-center justify-center text-[#6B6B6B]",
        children: "⋯"
      }
    ),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        role: "menu",
        className: "absolute right-0 top-full mt-1 z-20 w-48 rounded-md border border-[#E5E5E3] bg-white shadow-lg py-1",
        children: actions.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            role: "menuitem",
            disabled: a.disabled,
            onClick: () => {
              setOpen(false);
              a.onClick();
            },
            className: cn(
              "block w-full text-left px-3 py-2 text-[13px] hover:bg-[#F2F2F0] transition-colors disabled:opacity-40 disabled:cursor-not-allowed",
              a.destructive && "text-[#DC2626]"
            ),
            children: a.label
          },
          a.label
        ))
      }
    )
  ] });
}
const PAGE_SIZE = 20;
const STATUS_OPTIONS = [
  { value: "all", label: "All statuses" },
  { value: "active", label: "Active" },
  { value: "trial", label: "Trial" },
  { value: "suspended", label: "Suspended" },
  { value: "churned", label: "Churned" }
];
function TenantTable({ data, loading, onChange }) {
  const navigate = useNavigate();
  const [search, setSearch] = reactExports.useState("");
  const [status, setStatus] = reactExports.useState("all");
  const [sortKey, setSortKey] = reactExports.useState("joinedAt");
  const [sortDir, setSortDir] = reactExports.useState("desc");
  const [page, setPage] = reactExports.useState(1);
  const [pendingAction, setPendingAction] = reactExports.useState(null);
  const filtered = reactExports.useMemo(() => {
    let list = data;
    if (status !== "all") list = list.filter((t) => t.status === status);
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter((t) => t.companyName.toLowerCase().includes(q) || t.industry.toLowerCase().includes(q));
    }
    if (sortKey && sortDir) {
      list = [...list].sort((a, b) => {
        const av = a[sortKey];
        const bv = b[sortKey];
        if (av == null) return 1;
        if (bv == null) return -1;
        if (av < bv) return sortDir === "asc" ? -1 : 1;
        if (av > bv) return sortDir === "asc" ? 1 : -1;
        return 0;
      });
    }
    return list;
  }, [data, status, search, sortKey, sortDir]);
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const start = (safePage - 1) * PAGE_SIZE;
  const paginated = filtered.slice(start, start + PAGE_SIZE);
  const impersonate = (t) => {
    impersonationStateStore.start(t.id, t.companyName);
    showToast(`Now viewing as ${t.companyName}`, "warning");
    navigate({ to: "/dashboard" });
  };
  const columns = [
    { key: "companyName", label: "Company", sortable: true, render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => navigate({ to: "/admin/tenants/$tenantId", params: { tenantId: r.id } }),
        className: "font-medium text-[#0A0A0A] hover:underline underline-offset-4",
        children: r.companyName
      }
    ) },
    { key: "industry", label: "Industry", render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#6B6B6B]", children: r.industry }) },
    { key: "employees", label: "Employees", sortable: true, align: "right", render: (r) => r.employees.toLocaleString() },
    { key: "plan", label: "Plan", render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#6B6B6B]", children: r.plan }) },
    { key: "status", label: "Status", render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsx(TenantStatusBadge, { status: r.status }) },
    { key: "joinedAt", label: "Joined", sortable: true, render: (r) => new Date(r.joinedAt).toLocaleDateString() },
    { key: "actions", label: "", render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsx(TenantActionMenu, { actions: [
      { label: "View details", onClick: () => navigate({ to: "/admin/tenants/$tenantId", params: { tenantId: r.id } }) },
      { label: "Impersonate", onClick: () => impersonate(r) },
      { label: r.status === "suspended" ? "Activate" : "Suspend", onClick: () => setPendingAction({ kind: "suspend", tenant: r }) },
      { label: "Delete", destructive: true, onClick: () => setPendingAction({ kind: "delete", tenant: r }) }
    ] }), align: "right" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Search by company or industry…", value: search, onChange: (e) => {
        setSearch(e.target.value);
        setPage(1);
      } }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:w-48", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { options: STATUS_OPTIONS, value: status, onChange: (e) => {
        setStatus(e.target.value);
        setPage(1);
      } }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      DataTable,
      {
        columns,
        data: paginated,
        loading,
        sortKey,
        sortDir,
        onSort: (k, d) => {
          setSortKey(k);
          setSortDir(d);
        },
        getRowKey: (r) => r.id,
        emptyState: /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No tenants match", subtitle: "Try clearing your filters." })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center justify-between text-[13px] text-[#6B6B6B]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "Showing ",
        filtered.length === 0 ? 0 : start + 1,
        "–",
        Math.min(start + PAGE_SIZE, filtered.length),
        " of ",
        filtered.length
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            disabled: safePage <= 1,
            onClick: () => setPage((p) => Math.max(1, p - 1)),
            className: "rounded-sm border border-[#E5E5E3] px-3 py-1 disabled:opacity-40 hover:bg-[#F2F2F0]",
            children: "Previous"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "Page ",
          safePage,
          " of ",
          totalPages
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            disabled: safePage >= totalPages,
            onClick: () => setPage((p) => Math.min(totalPages, p + 1)),
            className: "rounded-sm border border-[#E5E5E3] px-3 py-1 disabled:opacity-40 hover:bg-[#F2F2F0]",
            children: "Next"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmDialog,
      {
        open: !!pendingAction,
        onOpenChange: (o) => !o && setPendingAction(null),
        title: pendingAction?.kind === "delete" ? "Delete tenant?" : pendingAction?.tenant.status === "suspended" ? "Reactivate tenant?" : "Suspend tenant?",
        description: pendingAction?.kind === "delete" ? `Delete ${pendingAction.tenant.companyName} permanently. This cannot be undone.` : pendingAction?.tenant.status === "suspended" ? `${pendingAction.tenant.companyName} will regain access to the platform.` : `${pendingAction?.tenant.companyName} will lose access until reactivated.`,
        confirmLabel: pendingAction?.kind === "delete" ? "Delete" : pendingAction?.tenant.status === "suspended" ? "Reactivate" : "Suspend",
        variant: pendingAction?.kind === "delete" ? "danger" : "warning",
        onConfirm: async () => {
          if (!pendingAction) return;
          if (pendingAction.kind === "delete") {
            await adminApi.deleteTenant(pendingAction.tenant.id);
            showToast(`${pendingAction.tenant.companyName} deleted`, "success");
          } else {
            const newStatus = pendingAction.tenant.status === "suspended" ? "active" : "suspended";
            await adminApi.setStatus(pendingAction.tenant.id, newStatus);
            showToast(`Status updated to ${newStatus}`, "success");
          }
          onChange();
        }
      }
    )
  ] });
}
export {
  TenantTable as T
};
