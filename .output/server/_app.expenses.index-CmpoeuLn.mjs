import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { d as useNavigate } from "./_libs/tanstack__react-router.mjs";
import { P as PageHeader } from "./_ssr/PageHeader-CpfbD_86.mjs";
import { B as Button } from "./_ssr/Button-CFBbQAsZ.mjs";
import { e as essApi, S as Spinner, j as formatCurrency, f as formatDate } from "./_ssr/router-CPP24NZe.mjs";
import { S as StatCard } from "./_ssr/StatCard-D4dqMa3u.mjs";
import { E as EmptyState } from "./_ssr/EmptyState-Cs_2WXRJ.mjs";
import { s as showToast } from "./_ssr/Toast-DgpI28ao.mjs";
import { B as Badge } from "./_ssr/Badge-DOnZHL7Z.mjs";
import { C as Card } from "./_ssr/Card-AgXmnnkq.mjs";
import { E as EXPENSE_STATUS_LABELS, c as EXPENSE_CATEGORY_LABELS } from "./_ssr/ess-DxDpqIfW.mjs";

import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval.mjs";
import "./_libs/unenv.mjs";


import "./_libs/seroval-plugins.mjs";


import "./_libs/react-dom.mjs";
import "./_libs/isbot.mjs";
import "./_libs/tanstack__query-core.mjs";
import "./_libs/tanstack__react-query.mjs";
import "./_libs/clsx.mjs";
import "./_libs/tailwind-merge.mjs";
import "./_libs/zod.mjs";
const statusVariant = {
  draft: "default",
  submitted: "warning",
  approved: "success",
  rejected: "danger",
  reimbursed: "success"
};
function ExpenseClaimCard({ claim, onSubmit, onDelete }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-start justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] font-mono text-[#6B6B6B]", children: claim.code }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: statusVariant[claim.status], children: EXPENSE_STATUS_LABELS[claim.status] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1.5 text-[15px] font-semibold text-[#0A0A0A]", children: claim.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[12px] text-[#6B6B6B] mt-0.5", children: [
          EXPENSE_CATEGORY_LABELS[claim.category],
          " · Spent on ",
          formatDate(claim.spentOn),
          claim.receiptName ? ` · ${claim.receiptName}` : " · No receipt"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[18px] font-semibold tabular-nums", children: formatCurrency(claim.amount) })
    ] }),
    claim.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#3F3F46]", children: claim.description }),
    claim.decisionNote && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-[#B91C1C] bg-[#DC2626]/5 rounded-sm px-3 py-2", children: claim.decisionNote }),
    (onSubmit || onDelete) && claim.status === "draft" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-1 border-t border-[#F2F2F0]", children: [
      onSubmit && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "primary", onClick: onSubmit, children: "Submit for approval" }),
      onDelete && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", onClick: onDelete, children: "Delete draft" })
    ] })
  ] });
}
function ExpensesPage() {
  const navigate = useNavigate();
  const [claims, setClaims] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    void essApi.listExpenses().then((r) => {
      setClaims(r.data ?? []);
      setLoading(false);
    });
  }, []);
  const pending = claims.filter((c) => c.status === "submitted");
  const reimbursed = claims.filter((c) => c.status === "reimbursed");
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 28 }) });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "My expenses", description: "Claim work expenses and follow them through to reimbursement.", actions: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", onClick: () => navigate({
      to: "/expenses/new"
    }), children: "New claim" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Awaiting approval", value: formatCurrency(pending.reduce((n, c) => n + c.amount, 0)), accent: "tenant" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Reimbursed to date", value: formatCurrency(reimbursed.reduce((n, c) => n + c.amount, 0)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Total claims", value: claims.length })
    ] }),
    claims.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No expense claims yet", subtitle: "Create a claim and attach your receipt to get reimbursed.", action: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", onClick: () => navigate({
      to: "/expenses/new"
    }), children: "New claim" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 max-w-3xl", children: claims.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(ExpenseClaimCard, { claim: c, onSubmit: () => void essApi.submitExpense(c.id).then((r) => {
      setClaims(r.data ?? []);
      showToast("Claim submitted.", "success");
    }), onDelete: () => void essApi.deleteExpense(c.id).then((r) => {
      setClaims(r.data ?? []);
      showToast("Draft deleted.", "info");
    }) }, c.id)) })
  ] });
}
export {
  ExpensesPage as component
};
