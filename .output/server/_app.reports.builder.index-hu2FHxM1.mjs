import { j as jsxRuntimeExports } from "./_libs/react.mjs";
import { A as Alert } from "./_ssr/Alert-COamyPgG.mjs";
import { B as Breadcrumb } from "./_ssr/Breadcrumb-Bx825HWE.mjs";
import { P as PermissionGuard } from "./_ssr/PermissionGuard-DrHCZdH7.mjs";
import { C as CustomReportBuilder } from "./_ssr/CustomReportBuilder-q7xe5yuD.mjs";

import "./_ssr/router-CPP24NZe.mjs";
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
import "./_ssr/usePermission-DoLX-EvC.mjs";
import "./_ssr/rbac-BwLVdIYU.mjs";
import "./_ssr/rbac-Ci1w5KuA.mjs";
import "./_ssr/Button-CFBbQAsZ.mjs";
import "./_ssr/Input-BJe__i93.mjs";
import "./_ssr/Textarea-DsONP0BR.mjs";
import "./_ssr/Select-CDtKs7RG.mjs";
import "./_ssr/ConfirmDialog-BeoeULKD.mjs";
import "./_ssr/Modal-G0zeYD84.mjs";
import "./_ssr/Toast-DgpI28ao.mjs";
import "./_ssr/Checkbox-EmLzttzJ.mjs";
import "./_ssr/ReportTable-D4MHVHZj.mjs";
import "./_ssr/EmptyState-Cs_2WXRJ.mjs";
import "./_ssr/DataTable-DBeYYWhW.mjs";
import "./_ssr/ReportExportMenu-gk2R7U6T.mjs";
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
