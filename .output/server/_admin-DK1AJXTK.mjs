import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { d as useNavigate, e as useRouterState, O as Outlet, L as Link } from "./_libs/tanstack__react-router.mjs";
import { c as cn } from "./_ssr/router-LFebWAoY.mjs";
import { b as adminAuthStore } from "./_ssr/auth-Dq95Bc2W.mjs";
import { s as seedAdminDemoData, a as adminApi } from "./_ssr/admin-epIiHo3E.mjs";
import { r as resetToDefaultTheme } from "./_ssr/utils-CYd_2Wqf.mjs";
import { l as Lock } from "./_libs/lucide-react.mjs";

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
import "./_ssr/rbac-B_cCMzV8.mjs";
import "./_ssr/rbac-B1d7raBj.mjs";
import "./_ssr/defaults-CvUaCo6_.mjs";
const NAV = [
  {
    label: "Platform",
    items: [
      { label: "Dashboard", to: "/admin/dashboard" },
      { label: "Tenants", to: "/admin/tenants" },
      { label: "Settings", to: "/admin/settings" }
    ]
  },
  {
    label: "Support",
    items: [
      { label: "Audit log", lockedNote: "Available in a later phase" },
      { label: "Impersonation log", lockedNote: "Available in a later phase" }
    ]
  }
];
function AdminSidebar({ adminName, onLogout }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "h-screen sticky top-0 w-60 shrink-0 border-r border-[#E5E5E3] flex flex-col bg-[#0A0A0A] text-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-16 px-5 flex items-center border-b border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] font-bold tracking-[-0.01em]", children: "HRMS Platform" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.12em] text-white/50", children: "Admin" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex-1 p-3 overflow-y-auto", children: NAV.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "px-3 mb-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-white/40", children: g.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-0.5", children: g.items.map((it) => {
        if (it.lockedNote) {
          return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              title: it.lockedNote,
              className: "flex items-center gap-2 rounded-sm px-3 py-2 text-[14px] text-white/40 cursor-not-allowed",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1", children: it.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-3.5 w-3.5 text-white/40", "aria-hidden": true })
              ]
            }
          ) }, it.label);
        }
        const active = it.to ? pathname === it.to || pathname.startsWith(it.to + "/") : false;
        return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: it.to,
            className: cn(
              "block rounded-sm px-3 py-2 text-[14px] transition-colors",
              active ? "bg-white/10 text-white font-semibold" : "text-white/80 hover:bg-white/5 hover:text-white"
            ),
            children: it.label
          }
        ) }, it.label);
      }) })
    ] }, g.label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 border-t border-white/10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium px-3", children: adminName }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: onLogout,
          className: "mt-1 w-full text-left rounded-sm px-3 py-1.5 text-[13px] text-white/60 hover:bg-white/5 hover:text-white transition-colors",
          children: "Log out"
        }
      )
    ] })
  ] });
}
function AdminLayout() {
  const navigate = useNavigate();
  const pathname = useRouterState({
    select: (s) => s.location.pathname
  });
  const isLoginRoute = pathname === "/admin/login";
  const admin = adminAuthStore.useSelector((s) => s);
  reactExports.useEffect(() => {
    resetToDefaultTheme();
    seedAdminDemoData();
    void adminApi.getPlatformMetrics();
  }, []);
  reactExports.useEffect(() => {
    if (!isLoginRoute && !admin.token) {
      navigate({
        to: "/admin/login"
      });
    }
  }, [isLoginRoute, admin.token, navigate]);
  if (isLoginRoute) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-[#F9F9F7] text-[#0A0A0A] font-sans antialiased", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
  }
  if (!admin.token) return null;
  const onLogout = () => {
    adminAuthStore.signOut();
    navigate({
      to: "/admin/login"
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex bg-[#F9F9F7] font-sans antialiased text-[#0A0A0A]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AdminSidebar, { adminName: admin.name ?? "Platform Admin", onLogout }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex flex-col min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 overflow-y-auto p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }) })
  ] });
}
export {
  AdminLayout as component
};
