import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { P as PageHeader } from "./_ssr/PageHeader-CpfbD_86.mjs";
import { B as Button } from "./_ssr/Button-B92Yl16p.mjs";
import { C as Card } from "./_ssr/Card-C9YFlUub.mjs";
import { O as currentFinancialYear, l as listEmployees, p as payrollApi, S as Spinner, j as formatCurrency } from "./_ssr/router-LFebWAoY.mjs";
import { A as Alert } from "./_ssr/Alert-DctqS4QO.mjs";
import { s as showToast } from "./_ssr/Toast-n7pN7q8Q.mjs";
import { P as ProgressBar } from "./_ssr/ProgressBar-wYNX7x5K.mjs";
import { C as CurrencyInput } from "./_ssr/CurrencyInput-C3scphE-.mjs";
import { a as authStore } from "./_ssr/auth-Dq95Bc2W.mjs";

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
import "./_ssr/rbac-B_cCMzV8.mjs";
import "./_ssr/rbac-B1d7raBj.mjs";
function DeclarationSectionCard({ section, onItemChange, readOnly }) {
  const total = section.items.reduce((n, i) => n + (i.amount || 0), 0);
  const pct = section.maxLimit > 0 ? Math.min(100, Math.round(total / section.maxLimit * 100)) : 0;
  const overLimit = total > section.maxLimit;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[15px] font-semibold text-[#0A0A0A]", children: section.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[12px] text-[#6B6B6B] mt-0.5", children: [
          "Limit: ",
          formatCurrency(section.maxLimit)
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[16px] font-semibold tabular-nums", children: formatCurrency(Math.min(total, section.maxLimit)) }),
        overLimit && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-[#B45309]", children: [
          formatCurrency(total - section.maxLimit),
          " over limit"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProgressBar, { value: pct, className: "mt-3" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 space-y-3", children: section.items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      CurrencyInput,
      {
        label: item.label,
        value: item.amount,
        onChange: (v) => onItemChange(item.id, v),
        min: 0,
        disabled: readOnly
      },
      item.id
    )) })
  ] });
}
function DeclarationsPage() {
  const user = authStore.useSelector((s) => s.user);
  const [loading, setLoading] = reactExports.useState(true);
  const [saving, setSaving] = reactExports.useState(false);
  const [dec, setDec] = reactExports.useState(null);
  const fy = currentFinancialYear();
  reactExports.useEffect(() => {
    let alive = true;
    void (async () => {
      const emps = await listEmployees();
      const me = emps.data?.find((e) => e.workEmail === user?.email) ?? emps.data?.[0];
      if (!me) {
        if (alive) setLoading(false);
        return;
      }
      const res = await payrollApi.getDeclaration(me.id, fy);
      if (!alive) return;
      setDec(res.data ?? null);
      setLoading(false);
    })();
    return () => {
      alive = false;
    };
  }, [user?.email]);
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 28 }) });
  if (!dec) return /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { variant: "error", children: "Could not load your investment declaration." });
  const readOnly = dec.status !== "draft";
  const totalDeclared = dec.sections.reduce((n, s) => n + Math.min(s.total, s.maxLimit), 0);
  const setItemAmount = (sectionCode, itemId, amount) => {
    setDec((prev) => {
      if (!prev) return prev;
      const sections = prev.sections.map((s) => s.code === sectionCode ? {
        ...s,
        items: s.items.map((i) => i.id === itemId ? {
          ...i,
          amount: amount ?? 0
        } : i)
      } : s);
      return {
        ...prev,
        sections
      };
    });
  };
  const save = async () => {
    if (!dec) return;
    setSaving(true);
    const res = await payrollApi.saveDeclaration(dec);
    setSaving(false);
    if (res.error) return showToast(res.error.message, "error");
    setDec(res.data ?? dec);
    showToast("Declaration saved as draft.", "success");
  };
  const submit = async () => {
    if (!dec) return;
    setSaving(true);
    const savedRes = await payrollApi.saveDeclaration(dec);
    if (savedRes.error || !savedRes.data) {
      setSaving(false);
      return showToast(savedRes.error?.message ?? "Could not save.", "error");
    }
    const res = await payrollApi.submitDeclaration(savedRes.data.id);
    setSaving(false);
    if (res.error) return showToast(res.error.message, "error");
    setDec(res.data ?? savedRes.data);
    showToast("Investment declaration submitted.", "success");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Investment declarations", description: `Financial year ${dec.financialYear}. Declare your tax-saving investments to compute TDS accurately.` }),
    readOnly && /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { variant: "success", title: dec.status === "approved" ? "Approved" : "Submitted", children: [
      "Your declaration for ",
      fy,
      " has been ",
      dec.status,
      ". Contact HR to make further changes."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold uppercase tracking-[0.08em] text-[#6B6B6B]", children: "Total declared" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[24px] font-bold", children: formatCurrency(totalDeclared) })
      ] }),
      !readOnly && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: save, loading: saving, children: "Save draft" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", onClick: submit, loading: saving, children: "Submit declaration" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: dec.sections.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(DeclarationSectionCard, { section: s, readOnly, onItemChange: (itemId, amount) => setItemAmount(s.code, itemId, amount) }, s.code)) })
  ] });
}
export {
  DeclarationsPage as component
};
