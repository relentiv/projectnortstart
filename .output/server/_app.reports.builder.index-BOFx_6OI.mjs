import { j as jsxRuntimeExports } from "./_libs/react.mjs";
import { A as Alert } from "./_ssr/Alert-DIhou9mC.mjs";
import { B as Breadcrumb } from "./_ssr/Breadcrumb-eir09VHE.mjs";
import { P as PermissionGuard } from "./_ssr/PermissionGuard-DHUddp2f.mjs";
import { C as CustomReportBuilder } from "./_ssr/CustomReportBuilder-Bu5doOKn.mjs";

import "./_ssr/router-Arl77cRa.mjs";
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
import "./_ssr/usePermission-C7-ELJsH.mjs";
import "./_ssr/rbac-CiXrabhS.mjs";
import "./_ssr/rbac-CHd75bNv.mjs";
import "./_ssr/Button-Crtgy6Xx.mjs";
import "./_ssr/Input-CHeJoRlX.mjs";
import "./_ssr/Textarea-DXR3KTuM.mjs";
import "./_ssr/Select-Bg687n3T.mjs";
import "./_ssr/ConfirmDialog-C1NdmGJ3.mjs";
import "./_ssr/Modal-BWxmma2i.mjs";
import "./_ssr/Toast-DlQQlIf6.mjs";
import "./_ssr/Checkbox-JVDCHRr9.mjs";
import "./_ssr/ReportTable-DYN8I8dj.mjs";
import "./_ssr/EmptyState-DCYWhDnT.mjs";
import "./_ssr/DataTable-ChSCAfLO.mjs";
import "./_ssr/ReportExportMenu-D9ZI_VUZ.mjs";
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
