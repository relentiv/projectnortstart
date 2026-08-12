import { j as jsxRuntimeExports, r as reactExports } from "./_libs/react.mjs";
import { d as useNavigate, L as Link } from "./_libs/tanstack__react-router.mjs";
import { B as Button } from "./_ssr/Button-Crtgy6Xx.mjs";
import { A as Alert } from "./_ssr/Alert-DIhou9mC.mjs";
import { C as ConfirmDialog } from "./_ssr/ConfirmDialog-C1NdmGJ3.mjs";
import { D as DataTable } from "./_ssr/DataTable-ChSCAfLO.mjs";
import { B as Breadcrumb } from "./_ssr/Breadcrumb-eir09VHE.mjs";
import { s as showToast } from "./_ssr/Toast-DlQQlIf6.mjs";
import { P as PermissionGuard } from "./_ssr/PermissionGuard-DHUddp2f.mjs";
import { S as StatCard } from "./_ssr/StatCard-BGUt0oGs.mjs";
import { I as Input } from "./_ssr/Input-CHeJoRlX.mjs";
import { q as getExecutiveKpis, t as STANDARD_REPORT_SLUGS, v as STANDARD_REPORT_META, w as listSavedReports, S as Spinner, x as deleteReport, k as interpretNlQuery, n as runCustomReport } from "./_ssr/router-Arl77cRa.mjs";
import { E as EmptyState } from "./_ssr/EmptyState-DCYWhDnT.mjs";
import { R as ReportTable } from "./_ssr/ReportTable-DYN8I8dj.mjs";
import { S as Search, a1 as ArrowRight } from "./_libs/lucide-react.mjs";

import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval.mjs";
import "./_libs/unenv.mjs";


import "./_libs/seroval-plugins.mjs";


import "./_libs/react-dom.mjs";
import "./_libs/isbot.mjs";
import "./_ssr/Modal-BWxmma2i.mjs";
import "./_ssr/usePermission-C7-ELJsH.mjs";
import "./_ssr/rbac-CiXrabhS.mjs";
import "./_ssr/rbac-CHd75bNv.mjs";
import "./_libs/tanstack__query-core.mjs";
import "./_libs/tanstack__react-query.mjs";
import "./_libs/clsx.mjs";
import "./_libs/tailwind-merge.mjs";
import "./_libs/zod.mjs";
function ClarificationChips({ question, options, onPick }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-[#E5E5E3] bg-white p-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] text-[#0A0A0A] mb-3", children: question }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: options.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => onPick(o),
        className: "rounded-full border border-[#E5E5E3] px-3.5 py-1.5 text-[13px] text-[#0A0A0A] hover:border-[var(--tenant-primary)] hover:text-[var(--tenant-primary)] transition-colors",
        children: o
      },
      o
    )) })
  ] });
}
function ExecutiveKpiGrid({ kpis, loading }) {
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4", children: Array.from({ length: 6 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[110px] rounded-md border border-[#E5E5E3] bg-white animate-pulse" }, i)) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4", children: kpis.map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: k.label, value: k.value, trend: k.trend, trendDir: k.trendDir }, k.key)) });
}
function ReportTile({ slug, title, description }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Link,
    {
      to: "/reports/$reportSlug",
      params: { reportSlug: slug },
      className: "block rounded-md border border-[#E5E5E3] bg-white p-5 hover:border-[var(--tenant-primary)] transition-colors",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[15px] font-semibold text-[#0A0A0A]", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[13px] text-[#6B6B6B]", children: description })
      ]
    }
  );
}
const NL_DRAFT_KEY = "hrms.reports.nlDraft";
function NaturalLanguageReportBar() {
  const navigate = useNavigate();
  const [text, setText] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const [result, setResult] = reactExports.useState(null);
  const [tableData, setTableData] = reactExports.useState(null);
  const ask = async (queryText) => {
    if (!queryText.trim()) return;
    setLoading(true);
    setResult(null);
    setTableData(null);
    const res = await interpretNlQuery(queryText);
    setLoading(false);
    if (res.data) {
      setResult(res.data);
      if (res.data.generatedConfig) {
        const runRes = await runCustomReport(res.data.generatedConfig);
        if (runRes.data) setTableData(runRes.data);
      }
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    void ask(text);
  };
  const pickOption = (option) => {
    setText(option);
    void ask(option);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-[#E5E5E3] bg-white p-5 space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          leadingIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 16 }),
          placeholder: "Ask a question about your workforce, e.g. “open helpdesk tickets”",
          value: text,
          onChange: (e) => setText(e.target.value)
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", variant: "primary", disabled: loading || !text.trim(), "aria-label": "Submit question", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 }) })
    ] }),
    loading && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-[13px] text-[#6B6B6B]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 14 }),
      " Thinking…"
    ] }),
    !loading && result?.declineMessage && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#6B6B6B] italic", children: result.declineMessage }),
    !loading && result && !result.declineMessage && result.needsClarification && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ClarificationChips,
      {
        question: result.clarificationQuestion ?? "Could you clarify?",
        options: result.clarificationOptions ?? [],
        onPick: pickOption
      }
    ),
    !loading && result && !result.declineMessage && !result.needsClarification && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[13px] text-[#0A0A0A]", children: [
          "I understood this as: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: result.interpretedAs })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setResult(null),
            className: "text-[13px] font-medium text-[var(--tenant-primary)] hover:underline",
            children: "Refine →"
          }
        )
      ] }),
      result.resultCount === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        EmptyState,
        {
          title: "No matching data",
          subtitle: `I understood this as: ${result.interpretedAs}, but found no rows to show.`
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ReportTable, { columns: tableData?.columns ?? [], rows: tableData?.rows ?? [] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              if (result.generatedConfig) {
                window.sessionStorage.setItem(NL_DRAFT_KEY, JSON.stringify(result.generatedConfig));
              }
              void navigate({ to: "/reports/builder" });
            },
            className: "inline-block text-[13px] font-medium text-[var(--tenant-primary)] hover:underline",
            children: "Save this as a report →"
          }
        )
      ] })
    ] })
  ] });
}
function ReportsHubPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PermissionGuard, { permission: "reports.view", fallback: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumb, { items: [{
      label: "Dashboard",
      to: "/dashboard"
    }, {
      label: "Reports"
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { variant: "warning", children: "You don't have permission to view reports. Contact your administrator if you believe this is a mistake." })
  ] }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ReportsHubInner, {}) });
}
function ReportsHubInner() {
  const navigate = useNavigate();
  const [kpis, setKpis] = reactExports.useState([]);
  const [loadingKpis, setLoadingKpis] = reactExports.useState(true);
  const [saved, setSaved] = reactExports.useState([]);
  const [loadingSaved, setLoadingSaved] = reactExports.useState(true);
  const [toDelete, setToDelete] = reactExports.useState(null);
  const reload = () => {
    setLoadingSaved(true);
    void listSavedReports().then((r) => {
      setSaved(r.data ?? []);
      setLoadingSaved(false);
    });
  };
  reactExports.useEffect(() => {
    void getExecutiveKpis().then((r) => {
      setKpis(r.data ?? []);
      setLoadingKpis(false);
    });
    reload();
  }, []);
  const columns = [{
    key: "name",
    label: "Name"
  }, {
    key: "description",
    label: "Description",
    render: (r) => r.description ?? "—"
  }, {
    key: "createdBy",
    label: "Created by"
  }, {
    key: "lastRunAt",
    label: "Last run",
    render: (r) => r.lastRunAt ? new Date(r.lastRunAt).toLocaleDateString() : "Never"
  }, {
    key: "actions",
    label: "",
    align: "right",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "secondary", onClick: () => void navigate({
        to: "/reports/builder/$reportId",
        params: {
          reportId: r.id
        }
      }), children: "View" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "secondary", onClick: () => void navigate({
        to: "/reports/builder/$reportId",
        params: {
          reportId: r.id
        }
      }), children: "Edit" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "danger", onClick: () => setToDelete(r), children: "Delete" })
    ] })
  }];
  const confirmDelete = async () => {
    if (!toDelete) return;
    const res = await deleteReport(toDelete.id);
    if (res.error) {
      showToast(res.error.message, "error");
      return;
    }
    showToast("Report deleted.", "success");
    setToDelete(null);
    reload();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumb, { items: [{
      label: "Dashboard",
      to: "/dashboard"
    }, {
      label: "Reports"
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-[28px] font-semibold tracking-[-0.01em] text-[#0A0A0A]", children: "Reports" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[15px] text-[#6B6B6B]", children: "Executive KPIs, standard reports and your saved custom reports." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ExecutiveKpiGrid, { kpis, loading: loadingKpis }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(NaturalLanguageReportBar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[12px] font-semibold uppercase tracking-[0.08em] text-[#6B6B6B]", children: "Standard reports" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4", children: STANDARD_REPORT_SLUGS.map((slug) => /* @__PURE__ */ jsxRuntimeExports.jsx(ReportTile, { slug, title: STANDARD_REPORT_META[slug].title, description: STANDARD_REPORT_META[slug].description }, slug)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PermissionGuard, { permission: "payroll.view_all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/payroll", className: "inline-block text-[13px] font-medium text-[var(--tenant-primary)] hover:underline", children: "Looking for payroll reports? View them under Payroll →" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PermissionGuard, { permission: "reports.create", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[12px] font-semibold uppercase tracking-[0.08em] text-[#6B6B6B]", children: "Build a custom report" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", onClick: () => void navigate({
        to: "/reports/builder"
      }), children: "New custom report" })
    ] }) }),
    !loadingSaved && saved.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[12px] font-semibold uppercase tracking-[0.08em] text-[#6B6B6B]", children: "Saved reports" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DataTable, { columns, data: saved, loading: loadingSaved, getRowKey: (r) => r.id })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ConfirmDialog, { open: !!toDelete, onOpenChange: (o) => !o && setToDelete(null), title: "Delete saved report?", description: `"${toDelete?.name ?? ""}" will be permanently deleted. This cannot be undone.`, confirmLabel: "Delete", variant: "danger", onConfirm: confirmDelete })
  ] });
}
export {
  ReportsHubPage as component
};
