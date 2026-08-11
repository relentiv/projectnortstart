import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { d as useNavigate } from "./_libs/tanstack__react-router.mjs";
import { B as Button } from "./_ssr/Button-B92Yl16p.mjs";
import { B as Breadcrumb } from "./_ssr/Breadcrumb-BAW4dGjH.mjs";
import { T as TenantTable } from "./_ssr/TenantTable-DECyatAm.mjs";
import { a as adminApi } from "./_ssr/admin-epIiHo3E.mjs";

import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval.mjs";
import "./_libs/unenv.mjs";


import "./_libs/seroval-plugins.mjs";


import "./_libs/react-dom.mjs";
import "./_libs/isbot.mjs";
import "./_ssr/router-LFebWAoY.mjs";
import "./_libs/tanstack__query-core.mjs";
import "./_libs/tanstack__react-query.mjs";
import "./_libs/clsx.mjs";
import "./_libs/tailwind-merge.mjs";
import "./_libs/zod.mjs";
import "./_ssr/Input-DkwuDyVZ.mjs";
import "./_ssr/Select-CT_4ow88.mjs";
import "./_ssr/EmptyState-C_t8YrDr.mjs";
import "./_ssr/ConfirmDialog-CNV1l6_7.mjs";
import "./_ssr/Modal-DIFPhA7e.mjs";
import "./_ssr/DataTable-QZdOUOks.mjs";
import "./_ssr/Toast-n7pN7q8Q.mjs";
import "./_ssr/TenantStatusBadge-H8xzdR7e.mjs";
import "./_ssr/Badge-BQrIKnVV.mjs";
import "./_ssr/auth-Dq95Bc2W.mjs";
import "./_ssr/rbac-B_cCMzV8.mjs";
import "./_ssr/rbac-B1d7raBj.mjs";
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
