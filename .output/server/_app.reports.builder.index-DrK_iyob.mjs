import { j as jsxRuntimeExports } from "./_libs/react.mjs";
import { A as Alert } from "./_ssr/Alert-DctqS4QO.mjs";
import { B as Breadcrumb } from "./_ssr/Breadcrumb-BAW4dGjH.mjs";
import { P as PermissionGuard } from "./_ssr/PermissionGuard-CtwjQNn8.mjs";
import { C as CustomReportBuilder } from "./_ssr/CustomReportBuilder-a6OKH4uU.mjs";

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
import "./_ssr/usePermission-5FQzLb5G.mjs";
import "./_ssr/rbac-B_cCMzV8.mjs";
import "./_ssr/rbac-B1d7raBj.mjs";
import "./_ssr/Button-B92Yl16p.mjs";
import "./_ssr/Input-DkwuDyVZ.mjs";
import "./_ssr/Textarea-DmSlcYuH.mjs";
import "./_ssr/Select-CT_4ow88.mjs";
import "./_ssr/ConfirmDialog-CNV1l6_7.mjs";
import "./_ssr/Modal-DIFPhA7e.mjs";
import "./_ssr/Toast-n7pN7q8Q.mjs";
import "./_ssr/Checkbox-CgTT_66V.mjs";
import "./_ssr/ReportTable-CeY2Quxx.mjs";
import "./_ssr/EmptyState-C_t8YrDr.mjs";
import "./_ssr/DataTable-QZdOUOks.mjs";
import "./_ssr/ReportExportMenu-iNuHgJS_.mjs";
import "./_libs/lucide-react.mjs";
function BuilderPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PermissionGuard, { permission: "reports.create", fallback: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumb, { items: [{
      label: "Reports",
      to: "/reports"
    }, {
      label: "Builder"
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { variant: "warning", children: "You don't have permission to build custom reports. Contact your administrator if you believe this is a mistake." })
  ] }), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumb, { items: [{
      label: "Reports",
      to: "/reports"
    }, {
      label: "Custom report builder"
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-[28px] font-semibold tracking-[-0.01em] text-[#0A0A0A]", children: "Custom report builder" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CustomReportBuilder, {})
  ] }) });
}
export {
  BuilderPage as component
};
