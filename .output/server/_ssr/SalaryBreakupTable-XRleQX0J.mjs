import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as cn, j as formatCurrency } from "./router-Arl77cRa.mjs";
function Row({ label, note, amount, notApplicable }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline justify-between gap-4 py-1.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[13px] text-[#0A0A0A]", children: [
      label,
      note && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-2 text-[12px] text-[#6B6B6B]", children: [
        "(",
        note,
        ")"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("text-[13px] tabular-nums font-medium", notApplicable && "text-[#6B6B6B] font-normal"), children: notApplicable ? "Not applicable" : formatCurrency(amount) })
  ] });
}
function Total({ label, amount, strong }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex items-baseline justify-between gap-4 border-t border-[#E5E5E3] pt-2 mt-1", strong && "border-[#0A0A0A]"), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("text-[13px]", strong ? "font-bold" : "font-semibold"), children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("tabular-nums", strong ? "text-[20px] font-bold" : "text-[13px] font-semibold"), children: formatCurrency(amount) })
  ] });
}
function Label({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 mb-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#6B6B6B]", children });
}
function SalaryBreakupTable({ breakup, className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("text-[13px]", className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Earnings" }),
    breakup.earnings.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: l.component.name, note: l.note, amount: l.monthlyAmount }, l.componentId)),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Total, { label: "Gross earnings", amount: breakup.grossEarnings }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Deductions (employee)" }),
    breakup.deductions.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: l.component.name, note: l.note, amount: l.monthlyAmount, notApplicable: l.notApplicable }, l.componentId)),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Total, { label: "Total deductions", amount: breakup.totalDeductions }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Total, { label: "Net take-home (monthly)", amount: breakup.netPay, strong: true }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Employer contributions" }),
    breakup.employerContribs.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: l.component.name, note: l.note, amount: l.monthlyAmount, notApplicable: l.notApplicable }, l.componentId)),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Total, { label: "Total employer contribution", amount: breakup.totalEmployerContrib }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Total, { label: "Total employer cost (monthly)", amount: breakup.totalCost }) })
  ] });
}
export {
  SalaryBreakupTable as S
};
