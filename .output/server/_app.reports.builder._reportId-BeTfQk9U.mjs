import { j as jsxRuntimeExports, r as reactExports } from "./_libs/react.mjs";
import { f as useParams, L as Link } from "./_libs/tanstack__react-router.mjs";
import { B as Button } from "./_ssr/Button-B92Yl16p.mjs";
import { ab as getSavedReport, S as Spinner } from "./_ssr/router-LFebWAoY.mjs";
import { A as Alert } from "./_ssr/Alert-DctqS4QO.mjs";
import { E as EmptyState } from "./_ssr/EmptyState-C_t8YrDr.mjs";
import { B as Breadcrumb } from "./_ssr/Breadcrumb-BAW4dGjH.mjs";
import { P as PermissionGuard } from "./_ssr/PermissionGuard-CtwjQNn8.mjs";
import { C as CustomReportBuilder } from "./_ssr/CustomReportBuilder-a6OKH4uU.mjs";

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
import "./_ssr/usePermission-5FQzLb5G.mjs";
import "./_ssr/rbac-B_cCMzV8.mjs";
import "./_ssr/rbac-B1d7raBj.mjs";
import "./_ssr/Input-DkwuDyVZ.mjs";
import "./_ssr/Textarea-DmSlcYuH.mjs";
import "./_ssr/Select-CT_4ow88.mjs";
import "./_ssr/ConfirmDialog-CNV1l6_7.mjs";
import "./_ssr/Modal-DIFPhA7e.mjs";
import "./_ssr/Toast-n7pN7q8Q.mjs";
import "./_ssr/Checkbox-CgTT_66V.mjs";
import "./_ssr/ReportTable-CeY2Quxx.mjs";
import "./_ssr/DataTable-QZdOUOks.mjs";
import "./_ssr/ReportExportMenu-iNuHgJS_.mjs";
import "./_libs/lucide-react.mjs";
function EditBuilderPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PermissionGuard, { permission: "reports.create", fallback: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumb, { items: [{
      label: "Reports",
      to: "/reports"
    }, {
      label: "Builder"
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { variant: "warning", children: "You don't have permission to build custom reports. Contact your administrator if you believe this is a mistake." })
  ] }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(EditBuilderInner, {}) });
}
function EditBuilderInner() {
  const {
    reportId
  } = useParams({
    from: "/_app/reports/builder/$reportId"
  });
  const [report, setReport] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [notFound, setNotFound] = reactExports.useState(false);
  reactExports.useEffect(() => {
    setLoading(true);
    setNotFound(false);
    void getSavedReport(reportId).then((r) => {
      if (r.error || !r.data) setNotFound(true);
      else setReport(r.data);
      setLoading(false);
    });
  }, [reportId]);
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-64 rounded-sm bg-[#F2F2F0] animate-pulse" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 28 }) })
    ] });
  }
  if (notFound || !report) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumb, { items: [{
        label: "Reports",
        to: "/reports"
      }, {
        label: "Unknown report"
      }] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "We couldn't find that saved report", subtitle: "It may have been deleted. Head back to browse your saved reports.", action: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/reports", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", children: "← Back to reports" }) }) })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumb, { items: [{
      label: "Reports",
      to: "/reports"
    }, {
      label: report.name
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-[28px] font-semibold tracking-[-0.01em] text-[#0A0A0A]", children: report.name }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CustomReportBuilder, { initial: report })
  ] });
}
export {
  EditBuilderPage as component
};
