import { j as jsxRuntimeExports } from "./_libs/react.mjs";
import { e as useRouterState, L as Link, O as Outlet } from "./_libs/tanstack__react-router.mjs";
import { c as cn } from "./_ssr/router-CPP24NZe.mjs";
import { P as PermissionGuard } from "./_ssr/PermissionGuard-DrHCZdH7.mjs";
import { A as Alert } from "./_ssr/Alert-COamyPgG.mjs";

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
import "./_ssr/usePermission-DoLX-EvC.mjs";
import "./_ssr/rbac-BwLVdIYU.mjs";
import "./_ssr/rbac-Ci1w5KuA.mjs";
const TABS = [{
  label: "Roles",
  to: "/settings/roles"
}, {
  label: "Assignments",
  to: "/settings/roles/assignments"
}, {
  label: "Delegation",
  to: "/settings/roles/delegation"
}, {
  label: "Audit Log",
  to: "/settings/roles/audit"
}];
function RolesLayout() {
  const pathname = useRouterState({
    select: (s) => s.location.pathname
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PermissionGuard, { permission: "settings.roles.view", fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { variant: "error", children: "You don't have access to Roles & Permissions." }), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[22px] font-bold tracking-[-0.01em]", children: "Roles & Permissions" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#6B6B6B] mt-0.5", children: "Control what each person can see and do in your HRMS." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex gap-1 border-b border-[#E5E5E3]", "aria-label": "Roles sections", children: TABS.map((t) => {
      const active = t.to === "/settings/roles" ? pathname === t.to || /^\/settings\/roles\/[^/]+/.test(pathname) && !pathname.startsWith("/settings/roles/assignments") && !pathname.startsWith("/settings/roles/delegation") && !pathname.startsWith("/settings/roles/audit") && !pathname.startsWith("/settings/roles/new") : pathname.startsWith(t.to);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: t.to, className: cn("px-3 py-2 text-[13px] -mb-px border-b-2 transition-colors", active ? "border-[var(--tenant-primary)] text-[var(--tenant-primary)] font-medium" : "border-transparent text-[#6B6B6B] hover:text-[#0A0A0A]"), children: t.label }, t.to);
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {})
  ] }) });
}
export {
  RolesLayout as component
};
