import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { d as useNavigate } from "./_libs/tanstack__react-router.mjs";
import { B as Button } from "./_ssr/Button-Crtgy6Xx.mjs";
import { B as Breadcrumb } from "./_ssr/Breadcrumb-eir09VHE.mjs";
import { T as TenantTable } from "./_ssr/TenantTable-ic_Hb8aN.mjs";
import { a as adminApi } from "./_ssr/admin-BnYXwmfu.mjs";

import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval.mjs";
import "./_libs/unenv.mjs";


import "./_libs/seroval-plugins.mjs";


import "./_libs/react-dom.mjs";
import "./_libs/isbot.mjs";
import "./_ssr/router-Arl77cRa.mjs";
import "./_libs/tanstack__query-core.mjs";
import "./_libs/tanstack__react-query.mjs";
import "./_libs/clsx.mjs";
import "./_libs/tailwind-merge.mjs";
import "./_libs/zod.mjs";
import "./_ssr/Input-CHeJoRlX.mjs";
import "./_ssr/Select-Bg687n3T.mjs";
import "./_ssr/EmptyState-DCYWhDnT.mjs";
import "./_ssr/ConfirmDialog-C1NdmGJ3.mjs";
import "./_ssr/Modal-BWxmma2i.mjs";
import "./_ssr/DataTable-ChSCAfLO.mjs";
import "./_ssr/Toast-DlQQlIf6.mjs";
import "./_ssr/TenantStatusBadge-DcgjXyp7.mjs";
import "./_ssr/Badge-Cm1DzmgP.mjs";
import "./_ssr/auth-CjdYhZTR.mjs";
import "./_ssr/rbac-CiXrabhS.mjs";
import "./_ssr/rbac-CHd75bNv.mjs";
import "./_ssr/defaults-CvUaCo6_.mjs";
function TenantsPage() {
  const navigate = useNavigate();
  const [tenants, setTenants] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const reload = async () => {
    setLoading(true);
    const res = await adminApi.listTenants();
    if (res.data) setTenants(res.data);
    setLoading(false);
  };
  reactExports.useEffect(() => {
    void reload();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumb, { items: [{
      label: "Platform",
      to: "/admin/dashboard"
    }, {
      label: "Tenants"
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-[32px] font-bold tracking-[-0.01em]", children: "Tenants" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[14px] text-[#6B6B6B]", children: "Every company on HRMS." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => navigate({
        to: "/admin/tenants/new"
      }), children: "+ New tenant" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TenantTable, { data: tenants, loading, onChange: reload })
  ] });
}
export {
  TenantsPage as component
};
