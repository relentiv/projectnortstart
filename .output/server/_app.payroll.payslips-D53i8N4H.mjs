import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { P as PageHeader } from "./_ssr/PageHeader-CpfbD_86.mjs";
import { B as Button } from "./_ssr/Button-Crtgy6Xx.mjs";
import { C as Card } from "./_ssr/Card-Dnu0IoXY.mjs";
import { l as listEmployees, p as payrollApi, S as Spinner, m as monthLabel, j as formatCurrency } from "./_ssr/router-Arl77cRa.mjs";
import { E as EmptyState } from "./_ssr/EmptyState-DCYWhDnT.mjs";
import { S as SalaryBreakupTable } from "./_ssr/SalaryBreakupTable-XRleQX0J.mjs";
import { a as authStore } from "./_ssr/auth-CjdYhZTR.mjs";

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
import "./_ssr/rbac-CiXrabhS.mjs";
import "./_ssr/rbac-CHd75bNv.mjs";
function toBreakup(p) {
  const line = (l) => ({
    componentId: l.componentId,
    component: {
      id: l.componentId,
      name: l.componentName,
      code: l.componentCode,
      type: "earning",
      calculationMethod: "fixed",
      taxable: true,
      isActive: true,
      isSystemDefined: false,
      displayOrder: 0
    },
    monthlyAmount: l.amount,
    annualAmount: l.amount * 12,
    note: l.note
  });
  return {
    earnings: p.earnings.map(line),
    deductions: p.deductions.map(line),
    employerContribs: p.employerContribs.map(line),
    grossEarnings: p.grossEarnings,
    totalDeductions: p.totalDeductions,
    netPay: p.netPay,
    totalEmployerContrib: p.employerContribs.reduce((n, l) => n + l.amount, 0),
    totalCost: p.grossEarnings + p.employerContribs.reduce((n, l) => n + l.amount, 0),
    monthlyCtc: 0,
    unallocated: 0
  };
}
function PayslipsPage() {
  const user = authStore.useSelector((s) => s.user);
  const [loading, setLoading] = reactExports.useState(true);
  const [payslips, setPayslips] = reactExports.useState([]);
  const [selected, setSelected] = reactExports.useState(null);
  reactExports.useEffect(() => {
    let alive = true;
    void (async () => {
      const emps = await listEmployees();
      const me = emps.data?.find((e) => e.workEmail === user?.email) ?? emps.data?.[0];
      if (!me) {
        if (alive) setLoading(false);
        return;
      }
      const res = await payrollApi.listPayslips(me.id);
      if (!alive) return;
      setPayslips(res.data ?? []);
      setSelected(res.data?.[0] ?? null);
      setLoading(false);
    })();
    return () => {
      alive = false;
    };
  }, [user?.email]);
  const download = () => {
    if (!selected) return;
    window.print();
  };
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 28 }) });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "My payslips", description: "Pay slips are generated automatically when a payroll run is finalised." }),
    payslips.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No pay slips yet", subtitle: "Your pay slips will appear here once a payroll run has been finalised." }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { padded: false, className: "p-0 overflow-hidden md:col-span-1 h-fit", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-3 border-b border-[#E5E5E3]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[14px] font-semibold", children: "All pay slips" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: payslips.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setSelected(p), className: `w-full text-left px-4 py-3 border-b border-[#F2F2F0] last:border-0 hover:bg-[#FAFAF8] transition-colors ${selected?.id === p.id ? "bg-[#FAFAF8]" : ""}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium", children: monthLabel(p.month, p.year) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[12px] text-[#6B6B6B]", children: [
            "Net pay ",
            formatCurrency(p.netPay)
          ] })
        ] }, p.id)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-2", children: selected && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[18px] font-semibold", children: monthLabel(selected.month, selected.year) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[13px] text-[#6B6B6B]", children: [
              selected.employeeName,
              " · ",
              selected.employeeCode
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "secondary", onClick: download, children: "Print / Download" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SalaryBreakupTable, { breakup: toBreakup(selected) })
      ] }) })
    ] })
  ] });
}
export {
  PayslipsPage as component
};
