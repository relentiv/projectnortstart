import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { d as useNavigate } from "./_libs/tanstack__react-router.mjs";
import { P as PageHeader } from "./_ssr/PageHeader-CpfbD_86.mjs";
import { B as Button } from "./_ssr/Button-Crtgy6Xx.mjs";
import { C as Card } from "./_ssr/Card-Dnu0IoXY.mjs";
import { S as StatCard } from "./_ssr/StatCard-BGUt0oGs.mjs";
import { E as EmptyState } from "./_ssr/EmptyState-DCYWhDnT.mjs";
import { P as PermissionGuard } from "./_ssr/PermissionGuard-DHUddp2f.mjs";
import { P as PayrollRunCard } from "./_ssr/PayrollRunCard-CQHHxaLK.mjs";
import { p as payrollApi, j as formatCurrency } from "./_ssr/router-Arl77cRa.mjs";

import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval.mjs";
import "./_libs/unenv.mjs";


import "./_libs/seroval-plugins.mjs";


import "./_libs/react-dom.mjs";
import "./_libs/isbot.mjs";
import "./_ssr/usePermission-C7-ELJsH.mjs";
import "./_ssr/rbac-CiXrabhS.mjs";
import "./_ssr/rbac-CHd75bNv.mjs";
import "./_ssr/PayrollRunStatusBadge-f0P7zrg0.mjs";
import "./_ssr/Badge-Cm1DzmgP.mjs";
import "./_libs/tanstack__query-core.mjs";
import "./_libs/tanstack__react-query.mjs";
import "./_libs/clsx.mjs";
import "./_libs/tailwind-merge.mjs";
import "./_libs/zod.mjs";
function PayrollOverviewPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = reactExports.useState(true);
  const [runs, setRuns] = reactExports.useState([]);
  const [stats, setStats] = reactExports.useState(null);
  reactExports.useEffect(() => {
    let alive = true;
    void (async () => {
      const [r, s] = await Promise.all([payrollApi.listRuns(), payrollApi.dashboardStats()]);
      if (!alive) return;
      setRuns(r.data ?? []);
      setStats(s.data ?? null);
      setLoading(false);
    })();
    return () => {
      alive = false;
    };
  }, []);
  const current = runs[0];
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Payroll", description: "Current month status, headcount and recent runs." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4", children: [0, 1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[110px] rounded-md border border-[#E5E5E3] bg-white animate-pulse" }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[100px] rounded-md border border-[#E5E5E3] bg-white animate-pulse" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Payroll", description: "Current month status, headcount and recent runs.", actions: /* @__PURE__ */ jsxRuntimeExports.jsx(PermissionGuard, { permission: "payroll.run", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", onClick: () => navigate({
      to: "/payroll/runs"
    }), children: "Go to payroll runs" }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Employees on payroll", value: stats?.employeesOnPayroll ?? 0 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Current month gross", value: formatCurrency(current?.totalGross ?? 0) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Current month deductions", value: formatCurrency(current?.totalDeductions ?? 0) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Current month net pay", value: formatCurrency(current?.totalNetPay ?? 0) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[15px] font-semibold text-[#0A0A0A]", children: "Last run" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#6B6B6B] mt-0.5", children: stats?.lastRunLabel ?? "—" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(PermissionGuard, { permission: "payroll.run", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "secondary", onClick: () => navigate({
          to: "/payroll/runs"
        }), children: "Create new run" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "secondary", onClick: () => navigate({
          to: "/payroll/payslips"
        }), children: "My payslips" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "secondary", onClick: () => navigate({
          to: "/payroll/declarations"
        }), children: "Investment declarations" }),
        stats && stats.pendingDeclarations > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[12px] text-[#B45309] self-center", children: [
          stats.pendingDeclarations,
          " pending declarations"
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[15px] font-semibold text-[#0A0A0A] mb-3", children: "Recent runs" }),
      runs.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No payroll runs yet", subtitle: "Create your first payroll run to get started.", action: /* @__PURE__ */ jsxRuntimeExports.jsx(PermissionGuard, { permission: "payroll.run", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", onClick: () => navigate({
        to: "/payroll/runs"
      }), children: "Create payroll run" }) }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: runs.slice(0, 5).map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(PayrollRunCard, { run: r }, r.id)) })
    ] })
  ] });
}
export {
  PayrollOverviewPage as component
};
