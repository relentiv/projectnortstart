import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { C as Card } from "./_ssr/Card-C9YFlUub.mjs";
import { B as Breadcrumb } from "./_ssr/Breadcrumb-BAW4dGjH.mjs";
import { S as StatCard } from "./_ssr/StatCard-MC6T_-Xi.mjs";
import { T as TenantTable } from "./_ssr/TenantTable-DECyatAm.mjs";
import { a as adminApi } from "./_ssr/admin-epIiHo3E.mjs";

import "./_ssr/router-LFebWAoY.mjs";
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
import "./_ssr/Input-DkwuDyVZ.mjs";
import "./_ssr/Select-CT_4ow88.mjs";
import "./_ssr/EmptyState-C_t8YrDr.mjs";
import "./_ssr/ConfirmDialog-CNV1l6_7.mjs";
import "./_ssr/Modal-DIFPhA7e.mjs";
import "./_ssr/Button-B92Yl16p.mjs";
import "./_ssr/DataTable-QZdOUOks.mjs";
import "./_ssr/Toast-n7pN7q8Q.mjs";
import "./_ssr/TenantStatusBadge-H8xzdR7e.mjs";
import "./_ssr/Badge-BQrIKnVV.mjs";
import "./_ssr/auth-Dq95Bc2W.mjs";
import "./_ssr/rbac-B_cCMzV8.mjs";
import "./_ssr/rbac-B1d7raBj.mjs";
import "./_ssr/defaults-CvUaCo6_.mjs";
function PlatformMetricGrid({ metrics }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { accent: "platform", label: "Total tenants", value: metrics.totalTenants, trend: metrics.totalTenantsTrend, trendDir: "up" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { accent: "platform", label: "Total employees", value: metrics.totalEmployees.toLocaleString(), trend: metrics.totalEmployeesTrend, trendDir: "up" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { accent: "platform", label: "New tenants this month", value: metrics.newTenantsThisMonth, trend: metrics.newTenantsTrend, trendDir: metrics.newTenantsThisMonth >= 2 ? "up" : "down" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { accent: "platform", label: "Tenants in trial", value: metrics.tenantsInTrial, trend: metrics.tenantsInTrialTrend, trendDir: "neutral" })
  ] });
}
function AdminDashboard() {
  const [metrics, setMetrics] = reactExports.useState(null);
  const [tenants, setTenants] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const reload = async () => {
    setLoading(true);
    const [m, t] = await Promise.all([adminApi.getPlatformMetrics(), adminApi.listTenants()]);
    if (m.data) setMetrics(m.data);
    if (t.data) setTenants(t.data);
    setLoading(false);
  };
  reactExports.useEffect(() => {
    void reload();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumb, { items: [{
      label: "Platform"
    }, {
      label: "Dashboard"
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-[32px] font-bold tracking-[-0.01em]", children: "Platform overview" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[14px] text-[#6B6B6B]", children: "Across all tenants on HRMS." })
    ] }) }),
    metrics ? /* @__PURE__ */ jsxRuntimeExports.jsx(PlatformMetricGrid, { metrics }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4", children: Array.from({
      length: 4
    }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "h-[124px] animate-pulse bg-[#F2F2F0]" }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[18px] font-semibold mb-3", children: "Tenants" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TenantTable, { data: tenants, loading, onChange: reload })
    ] })
  ] });
}
export {
  AdminDashboard as component
};
