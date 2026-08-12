import { j as jsxRuntimeExports } from "./_libs/react.mjs";
import { e as useRouterState, O as Outlet, L as Link } from "./_libs/tanstack__react-router.mjs";
import { c as cn } from "./_ssr/router-Arl77cRa.mjs";
import { u as usePermission } from "./_ssr/usePermission-C7-ELJsH.mjs";

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
import "./_ssr/rbac-CiXrabhS.mjs";
import "./_ssr/rbac-CHd75bNv.mjs";
const NAV = [
  { label: "Company & Branding", to: "/settings/company" },
  { label: "Departments", to: "/settings/company/departments" },
  { label: "Designations", to: "/settings/company/designations" },
  { label: "Work Calendar", to: "/settings/company/work-calendar" },
  { label: "Holidays", to: "/settings/company/holidays" }
];
const ROLES_NAV = [
  { label: "Roles", to: "/settings/roles" },
  { label: "Assignments", to: "/settings/roles/assignments" },
  { label: "Delegation", to: "/settings/roles/delegation" },
  { label: "Audit Log", to: "/settings/roles/audit" }
];
const MODULE_NAV = [
  { label: "Leave Types", to: "/settings/leave", permission: "leave.configure" },
  { label: "Leave Policies", to: "/settings/leave/policies", permission: "leave.configure" },
  { label: "Attendance Rules", to: "/settings/attendance", permission: "attendance.configure" },
  { label: "Salary Components", to: "/settings/payroll", permission: "payroll.configure" },
  { label: "Salary Structures", to: "/settings/payroll/structures", permission: "payroll.configure" }
];
const HIRING_NAV = [
  { label: "Forms", to: "/settings/forms" },
  { label: "Rejection Reasons", to: "/settings/hiring/rejection-reasons" }
];
function ModuleNavItem({ item, pathname }) {
  const allowed = usePermission(item.permission);
  if (!allowed) return null;
  const active = pathname === item.to;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Link,
    {
      to: item.to,
      className: cn(
        "block rounded-sm px-3 py-2 text-[13px] transition-colors",
        active ? "font-semibold bg-white border border-[#E5E5E3]" : "text-[#6B6B6B] hover:text-[#0A0A0A] hover:bg-white/60"
      ),
      children: item.label
    }
  ) });
}
function SettingsSidebar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const canViewRoles = usePermission("settings.roles.view");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { "aria-label": "Settings sections", className: "w-56 shrink-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "px-3 mb-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#6B6B6B]", children: "Settings" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-0.5", children: NAV.map((item) => {
      const active = pathname === item.to;
      return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: item.to,
          className: cn(
            "block rounded-sm px-3 py-2 text-[13px] transition-colors",
            active ? "font-semibold bg-white border border-[#E5E5E3]" : "text-[#6B6B6B] hover:text-[#0A0A0A] hover:bg-white/60"
          ),
          children: item.label
        }
      ) }, item.to);
    }) }),
    canViewRoles && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "px-3 mt-5 mb-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#6B6B6B]", children: "Roles & Permissions" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-0.5", children: ROLES_NAV.map((item) => {
        const active = item.to === "/settings/roles" ? pathname === item.to || /^\/settings\/roles\/[^/]+/.test(pathname) && !pathname.startsWith("/settings/roles/assignments") && !pathname.startsWith("/settings/roles/delegation") && !pathname.startsWith("/settings/roles/audit") && !pathname.startsWith("/settings/roles/new") : pathname.startsWith(item.to);
        return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: item.to,
            className: cn(
              "block rounded-sm px-3 py-2 text-[13px] transition-colors",
              active ? "font-semibold bg-white border border-[#E5E5E3]" : "text-[#6B6B6B] hover:text-[#0A0A0A] hover:bg-white/60"
            ),
            children: item.label
          }
        ) }, item.to);
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "px-3 mt-5 mb-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#6B6B6B]", children: "Hiring" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-0.5", children: HIRING_NAV.map((item) => {
      const active = pathname.startsWith(item.to);
      return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: item.to,
          className: cn(
            "block rounded-sm px-3 py-2 text-[13px] transition-colors",
            active ? "font-semibold bg-white border border-[#E5E5E3]" : "text-[#6B6B6B] hover:text-[#0A0A0A] hover:bg-white/60"
          ),
          children: item.label
        }
      ) }, item.to);
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "px-3 mt-5 mb-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#6B6B6B]", children: "Modules" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-0.5", children: MODULE_NAV.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(ModuleNavItem, { item, pathname }, item.to)) })
  ] });
}
function SettingsLayout() {
  const pathname = useRouterState({
    select: (s) => s.location.pathname
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-[28px] font-bold tracking-[-0.01em] mb-1", children: "Company settings" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] text-[#6B6B6B] mb-6", children: "Configure how your workspace works." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SettingsSidebar, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-w-0", "data-current": pathname, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) })
    ] })
  ] });
}
export {
  SettingsLayout as component
};
