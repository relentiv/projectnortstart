import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { B as Button } from "./Button-CFBbQAsZ.mjs";
import { C as Card } from "./Card-AgXmnnkq.mjs";
import { m as monthLabel, j as formatCurrency } from "./router-CPP24NZe.mjs";
import { P as PayrollRunStatusBadge } from "./PayrollRunStatusBadge-DuWm_Pgf.mjs";
function PayrollRunCard({ run }) {
  const errorCount = run.validationIssues.filter((i) => i.severity === "error").length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "flex flex-col gap-3 md:flex-row md:items-center md:justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[16px] font-semibold text-[#0A0A0A]", children: monthLabel(run.month, run.year) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PayrollRunStatusBadge, { status: run.status }),
        errorCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[12px] text-[#B91C1C]", children: [
          errorCount,
          " error(s)"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-[13px] text-[#6B6B6B]", children: [
        run.employeeCount,
        " employees · Gross ",
        formatCurrency(run.totalGross),
        " · Net ",
        formatCurrency(run.totalNetPay)
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/payroll/runs/$runId", params: { runId: run.id }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "secondary", children: "View run" }) })
  ] });
}
export {
  PayrollRunCard as P
};
