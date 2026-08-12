import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { d as useNavigate } from "./_libs/tanstack__react-router.mjs";
import { B as Button } from "./_ssr/Button-CFBbQAsZ.mjs";
import { B as Breadcrumb } from "./_ssr/Breadcrumb-Bx825HWE.mjs";
import { T as TenantTable } from "./_ssr/TenantTable-Cuy15w62.mjs";
import { a as adminApi } from "./_ssr/admin-O86AsBES.mjs";

import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval.mjs";
import "./_libs/unenv.mjs";


import "./_libs/seroval-plugins.mjs";


import "./_libs/react-dom.mjs";
import "./_libs/isbot.mjs";
import "./_ssr/router-CPP24NZe.mjs";
import "./_libs/tanstack__query-core.mjs";
import "./_libs/tanstack__react-query.mjs";
import "./_libs/clsx.mjs";
import "./_libs/tailwind-merge.mjs";
import "./_libs/zod.mjs";
import "./_ssr/Input-BJe__i93.mjs";
import "./_ssr/Select-CDtKs7RG.mjs";
import "./_ssr/EmptyState-Cs_2WXRJ.mjs";
import "./_ssr/ConfirmDialog-BeoeULKD.mjs";
import "./_ssr/Modal-G0zeYD84.mjs";
import "./_ssr/DataTable-DBeYYWhW.mjs";
import "./_ssr/Toast-DgpI28ao.mjs";
import "./_ssr/TenantStatusBadge-A8Tjp31h.mjs";
import "./_ssr/Badge-DOnZHL7Z.mjs";
import "./_ssr/auth-BAvMo5G5.mjs";
import "./_ssr/rbac-BwLVdIYU.mjs";
import "./_ssr/rbac-Ci1w5KuA.mjs";
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
