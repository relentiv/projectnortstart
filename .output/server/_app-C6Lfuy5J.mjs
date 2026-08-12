import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { d as useNavigate, O as Outlet, e as useRouterState, L as Link } from "./_libs/tanstack__react-router.mjs";
import { c as cn, u as uiStore, e as essApi, r as relativeTime } from "./_ssr/router-CPP24NZe.mjs";
import { u as usePermission } from "./_ssr/usePermission-DoLX-EvC.mjs";
import { a as authStore, i as impersonationStateStore } from "./_ssr/auth-BAvMo5G5.mjs";
import { A as Avatar } from "./_ssr/Avatar-CLw1eWNp.mjs";
import { B as Button } from "./_ssr/Button-CFBbQAsZ.mjs";
import { _ as _e } from "./_libs/cmdk.mjs";
import { R as Root, P as Portal, C as Content, a as Close, O as Overlay, T as Title, D as Description } from "./_libs/radix-ui__react-dialog.mjs";
import { C as ConfirmDialog } from "./_ssr/ConfirmDialog-BeoeULKD.mjs";
import { u as useAiChat, A as AiChatMessageBubble, a as AiThinkingBubble, b as AiUnavailableState, c as AiSuggestedPrompts, d as AiChatInput } from "./_ssr/useAiChat-Ck1aAVp5.mjs";
import { t as tenantStore } from "./_ssr/tenant-BBKCiWas.mjs";
import { r as rbacStore } from "./_ssr/rbac-BwLVdIYU.mjs";
import { a as applyTenantTheme, r as resetToDefaultTheme } from "./_ssr/utils-CYd_2Wqf.mjs";
import { a as authApi } from "./_ssr/auth-BCpiFv6T.mjs";
import { T as TriangleAlert, M as Menu, S as Search, E as Ellipsis, a as Trash2, b as ExternalLink, X, H as House, C as Clock, c as CalendarDays, W as Wallet, d as Target, U as Users, e as Megaphone, L as LifeBuoy, f as Sparkles, g as Settings, P as PanelLeftOpen, h as PanelLeftClose, B as Bell, i as ChartColumn, j as User, R as Receipt, k as UserPlus, l as ChevronDown } from "./_libs/lucide-react.mjs";

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
import "./_libs/radix-ui__react-primitive.mjs";
import "./_libs/radix-ui__react-slot.mjs";
import "./_libs/radix-ui__react-compose-refs.mjs";
import "./_libs/radix-ui__react-id.mjs";
import "./_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "./_libs/radix-ui__primitive.mjs";
import "./_libs/radix-ui__react-context.mjs";
import "./_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "./_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "./_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "./_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "./_libs/radix-ui__react-focus-scope.mjs";
import "./_libs/radix-ui__react-portal.mjs";
import "./_libs/radix-ui__react-presence.mjs";
import "./_libs/radix-ui__react-focus-guards.mjs";
import "./_libs/react-remove-scroll.mjs";
import "./_libs/tslib.mjs";
import "./_libs/react-remove-scroll-bar.mjs";
import "./_libs/react-style-singleton.mjs";
import "./_libs/get-nonce.mjs";
import "./_libs/use-sidecar.mjs";
import "./_libs/use-callback-ref.mjs";
import "./_libs/aria-hidden.mjs";
import "./_ssr/Modal-G0zeYD84.mjs";
import "./_ssr/Alert-COamyPgG.mjs";
import "./_ssr/ai-p4aGx585.mjs";
import "./_ssr/useCurrentEmployee-s2MqyCVo.mjs";
import "./_ssr/defaults-CvUaCo6_.mjs";
import "./_ssr/rbac-Ci1w5KuA.mjs";
import "./_ssr/tenants-DRPBH7oN.mjs";
const ALL = ["hr_admin", "manager", "employee", "super_admin"];
const STAFF = ["hr_admin", "manager", "super_admin"];
const HR = ["hr_admin", "super_admin"];
const NAV_CONFIG = [
  {
    label: "Workspace",
    roles: ALL,
    items: [
      { label: "Dashboard", to: "/dashboard", icon: "home", roles: ALL, permission: "dashboard.view" },
      {
        label: "Attendance",
        icon: "clock",
        roles: ALL,
        permission: "attendance.view_own",
        children: [
          { label: "My attendance", to: "/attendance", roles: ALL, permission: "attendance.view_own" },
          { label: "Regularisation", to: "/attendance/regularization", roles: ALL, permission: "attendance.view_own" },
          { label: "Team board", to: "/attendance/team", roles: STAFF, permission: "attendance.view_team" },
          { label: "Approvals", to: "/attendance/regularization/approvals", roles: STAFF, permission: "attendance.view_team" },
          { label: "Records", to: "/attendance/records", roles: HR, permission: "attendance.manage" }
        ]
      },
      {
        label: "Leave",
        icon: "calendar",
        roles: ALL,
        permission: "leave.view_own",
        children: [
          { label: "My leave", to: "/leave", roles: ALL, permission: "leave.view_own" },
          { label: "Apply", to: "/leave/apply", roles: ALL, permission: "leave.apply" },
          { label: "My requests", to: "/leave/requests", roles: ALL, permission: "leave.view_own" },
          { label: "Approvals", to: "/leave/approvals", roles: STAFF, permission: "leave.approve" },
          { label: "Team calendar", to: "/leave/calendar", roles: STAFF, permission: "leave.view_team" },
          { label: "Balances", to: "/leave/balances", roles: HR, permission: "leave.configure" }
        ]
      },
      {
        label: "Payroll",
        icon: "wallet",
        roles: ALL,
        permission: "payroll.view_own",
        children: [
          { label: "My payslips", to: "/payroll/payslips", roles: ALL, permission: "payroll.view_own" },
          { label: "Declarations", to: "/payroll/declarations", roles: ALL, permission: "payroll.view_own" },
          { label: "Overview", to: "/payroll", roles: HR, permission: "payroll.view_all" },
          { label: "Payroll runs", to: "/payroll/runs", roles: HR, permission: "payroll.run" }
        ]
      },
      {
        label: "Performance",
        icon: "target",
        roles: ALL,
        permission: "performance.view_own",
        children: [
          { label: "Dashboard", to: "/performance", roles: ALL, permission: "performance.view_own" },
          { label: "Goals", to: "/performance/goals", roles: ALL, permission: "performance.view_own" },
          { label: "Reviews", to: "/performance/reviews", roles: ALL, permission: "performance.view_own" },
          { label: "My team", to: "/performance/team", roles: STAFF, permission: "performance.view_team" },
          { label: "Cycles admin", to: "/performance/admin", roles: HR, permission: "performance.manage" },
          { label: "Calibration", to: "/performance/calibration", roles: HR, permission: "performance.manage" }
        ]
      }
    ]
  },
  {
    label: "People",
    roles: ALL,
    items: [
      {
        label: "Employees",
        icon: "users",
        roles: ALL,
        permission: "employees.view_list",
        children: [
          { label: "Directory", to: "/employees", roles: ALL, permission: "employees.view_list" },
          { label: "Org chart", to: "/org-chart", roles: ALL, permission: "org_chart.view" },
          { label: "Add employee", to: "/employees/new", roles: HR, permission: "employees.create" }
        ]
      },
      {
        label: "Hiring",
        icon: "userPlus",
        roles: HR,
        permission: "employees.view_list",
        children: [
          { label: "Candidates", to: "/candidates", roles: HR, permission: "employees.view_list" },
          { label: "Invite candidate", to: "/candidates/invite", roles: HR, permission: "employees.create" }
        ]
      }
    ]
  },
  {
    label: "Me & more",
    roles: ALL,
    items: [
      { label: "My profile", to: "/me", icon: "user", roles: ALL },
      { label: "My expenses", to: "/expenses", icon: "receipt", roles: ALL },
      { label: "Helpdesk", to: "/helpdesk", icon: "lifeBuoy", roles: ALL },
      { label: "Announcements", to: "/announcements", icon: "megaphone", roles: ALL },
      { label: "Reports", to: "/reports", icon: "barChart", roles: STAFF, permission: "reports.view" },
      { label: "AI Assistant", to: "/ai-assistant", icon: "sparkles", roles: ALL, permission: "ai.chat" }
    ]
  },
  {
    label: "Administration",
    roles: HR,
    items: [
      {
        label: "Settings",
        icon: "settings",
        roles: HR,
        permission: "settings.company.view",
        children: [
          { label: "Company & Branding", to: "/settings/company", roles: HR, permission: "settings.company.view" },
          { label: "Departments", to: "/settings/company/departments", roles: HR, permission: "settings.departments.manage" },
          { label: "Designations", to: "/settings/company/designations", roles: HR, permission: "settings.departments.manage" },
          { label: "Work Calendar", to: "/settings/company/work-calendar", roles: HR, permission: "settings.work_calendar.manage" },
          { label: "Holidays", to: "/settings/company/holidays", roles: HR, permission: "settings.work_calendar.manage" },
          { label: "Roles & Permissions", to: "/settings/roles", roles: HR, permission: "settings.roles.view" },
          { label: "Form Library", to: "/settings/forms", roles: HR, permission: "settings.company.view" }
        ]
      }
    ]
  }
];
const MOBILE_NAV = {
  employee: [
    { label: "Home", to: "/dashboard", icon: "home" },
    { label: "Attendance", to: "/attendance", icon: "clock" },
    { label: "Leave", to: "/leave", icon: "calendar" },
    { label: "Pay", to: "/payroll/payslips", icon: "wallet" },
    { label: "Me", to: "/me", icon: "user" }
  ],
  manager: [
    { label: "Home", to: "/dashboard", icon: "home" },
    { label: "Team", to: "/attendance/team", icon: "users" },
    { label: "Approvals", to: "/leave/approvals", icon: "calendar" },
    { label: "Reviews", to: "/performance/team", icon: "target" },
    { label: "Me", to: "/me", icon: "user" }
  ],
  hr_admin: [
    { label: "Home", to: "/dashboard", icon: "home" },
    { label: "People", to: "/employees", icon: "users" },
    { label: "Leave", to: "/leave/approvals", icon: "calendar" },
    { label: "Payroll", to: "/payroll", icon: "wallet" },
    { label: "Me", to: "/me", icon: "user" }
  ],
  super_admin: [
    { label: "Home", to: "/dashboard", icon: "home" },
    { label: "People", to: "/employees", icon: "users" },
    { label: "Leave", to: "/leave/approvals", icon: "calendar" },
    { label: "Payroll", to: "/payroll", icon: "wallet" },
    { label: "Me", to: "/me", icon: "user" }
  ]
};
function navForRole(role) {
  const r = role ?? "employee";
  return NAV_CONFIG.filter((g) => g.roles.includes(r)).map((g) => ({
    ...g,
    items: g.items.filter((i) => i.roles.includes(r)).map((i) => ({ ...i, children: i.children?.filter((c) => c.roles.includes(r)) })).filter((i) => !i.children || i.children.length > 0)
  })).filter((g) => g.items.length > 0);
}
const MAP = {
  home: House,
  users: Users,
  userPlus: UserPlus,
  clock: Clock,
  calendar: CalendarDays,
  wallet: Wallet,
  target: Target,
  megaphone: Megaphone,
  lifeBuoy: LifeBuoy,
  receipt: Receipt,
  user: User,
  barChart: ChartColumn,
  sparkles: Sparkles,
  settings: Settings
};
function NavIconGlyph({ name, className }) {
  if (!name) return null;
  const Icon = MAP[name];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className, strokeWidth: 1.75, "aria-hidden": true });
}
function useAllowed(permission) {
  const has = usePermission(permission ?? "dashboard.view");
  return permission ? has : true;
}
const activeStyle = {
  background: "color-mix(in srgb, var(--tenant-primary) 10%, transparent)",
  color: "var(--tenant-primary)"
};
function LeafLink({
  item,
  pathname,
  collapsed,
  depth = 0,
  onNavigate
}) {
  const allowed = useAllowed(item.permission);
  if (!allowed || !item.to) return null;
  const active = pathname === item.to || pathname.startsWith(item.to + "/");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Link,
    {
      to: item.to,
      onClick: onNavigate,
      title: collapsed ? item.label : void 0,
      className: cn(
        "group relative flex items-center gap-2.5 rounded-md px-3 transition-colors duration-150",
        "hover:bg-black/[0.045] active:scale-[0.99] motion-reduce:active:scale-100",
        depth === 0 ? "py-2 text-[14px]" : "py-1.5 text-[13px]",
        active && "font-semibold",
        collapsed && "justify-center px-0"
      ),
      style: active ? activeStyle : void 0,
      children: [
        active && !collapsed && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            "aria-hidden": true,
            className: "absolute left-0 top-1.5 bottom-1.5 w-[3px] rounded-r",
            style: { background: "var(--tenant-primary)" }
          }
        ),
        depth === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(NavIconGlyph, { name: item.icon, className: "h-[17px] w-[17px] shrink-0 opacity-80" }),
        !collapsed && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: item.label })
      ]
    }
  );
}
function ExpandableItem({
  item,
  pathname,
  collapsed,
  onNavigate
}) {
  const allowed = useAllowed(item.permission);
  const childActive = item.children?.some((c) => c.to && pathname.startsWith(c.to)) ?? false;
  const [open, setOpen] = reactExports.useState(childActive);
  reactExports.useEffect(() => {
    if (childActive) setOpen(true);
  }, [childActive]);
  if (!allowed) return null;
  if (collapsed) {
    const first = item.children?.[0];
    return first ? /* @__PURE__ */ jsxRuntimeExports.jsx(LeafLink, { item: { ...item, to: first.to }, pathname, collapsed: true, onNavigate }) : null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => setOpen((o) => !o),
        "aria-expanded": open,
        className: cn(
          "w-full flex items-center gap-2.5 rounded-md px-3 py-2 text-[14px] transition-colors duration-150",
          "hover:bg-black/[0.045]",
          childActive && "font-semibold"
        ),
        style: childActive ? { color: "var(--tenant-primary)" } : void 0,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(NavIconGlyph, { name: item.icon, className: "h-[17px] w-[17px] shrink-0 opacity-80" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 truncate text-left", children: item.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ChevronDown,
            {
              "aria-hidden": true,
              className: cn("h-3.5 w-3.5 opacity-50 transition-transform duration-200", open && "rotate-180")
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: cn(
          "grid transition-[grid-template-rows] duration-200 ease-out motion-reduce:transition-none",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        ),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "overflow-hidden pl-[26px] ml-3 border-l border-black/10 space-y-0.5", children: item.children.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(LeafLink, { item: c, pathname, collapsed: false, depth: 1, onNavigate }) }, c.label)) })
      }
    )
  ] });
}
function GroupBlock({
  group,
  pathname,
  collapsed,
  onNavigate
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5", children: [
    !collapsed && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "px-3 mb-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#6B6B6B]/70", children: group.label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-0.5", children: group.items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: item.children ? /* @__PURE__ */ jsxRuntimeExports.jsx(ExpandableItem, { item, pathname, collapsed, onNavigate }) : /* @__PURE__ */ jsxRuntimeExports.jsx(LeafLink, { item, pathname, collapsed, onNavigate }) }, item.label)) })
  ] });
}
function SidebarBody({
  logoSrc,
  companyName,
  collapsed,
  onToggle,
  onNavigate,
  onMobileClose
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const role = authStore.useSelector((s) => s.user?.role);
  const groups = navForRole(role);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full flex flex-col bg-[var(--tenant-secondary)] text-[var(--tenant-text-on-secondary)]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-16 px-4 flex items-center gap-3 border-b border-black/5", children: [
      logoSrc ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoSrc, alt: "", className: "h-8 w-8 rounded-md object-cover shrink-0" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: "h-8 w-8 rounded-md flex items-center justify-center text-[14px] font-bold shrink-0",
          style: { background: "var(--tenant-primary)", color: "var(--tenant-text-on-primary)" },
          children: companyName[0]?.toUpperCase() ?? "?"
        }
      ),
      !collapsed && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-[14px] truncate", children: companyName }),
      onMobileClose && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: onMobileClose,
          "aria-label": "Close navigation",
          className: "md:hidden ml-auto p-2 -mr-2 rounded-md hover:bg-black/5",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
        }
      )
    ] }),
    !collapsed && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 pt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => uiStore.openSearch(),
        className: "w-full flex items-center justify-between gap-2 text-left text-[12px] text-[#6B6B6B] bg-white/60 border border-black/5 rounded-md px-3 py-2 hover:bg-white transition-colors",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-3.5 w-3.5", "aria-hidden": true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Search…" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("kbd", { className: "text-[10px] font-mono opacity-60 bg-black/5 px-1 py-0.5 rounded", children: "⌘K" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex-1 p-3 overflow-y-auto", children: groups.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsx(GroupBlock, { group: g, pathname, collapsed, onNavigate }, g.label)) }),
    onToggle && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 border-t border-black/5 hidden md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: onToggle,
        "aria-label": collapsed ? "Expand sidebar" : "Collapse sidebar",
        className: "w-full flex items-center justify-center gap-2 rounded-md py-2 text-[13px] text-[#6B6B6B] hover:bg-black/5 hover:text-[#0A0A0A] transition-colors",
        children: collapsed ? /* @__PURE__ */ jsxRuntimeExports.jsx(PanelLeftOpen, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(PanelLeftClose, { className: "h-4 w-4" }),
          " Collapse"
        ] })
      }
    ) })
  ] });
}
function Sidebar({ logoSrc, companyName, collapsed = false, onToggle, mobileOpen, onMobileClose }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "aside",
      {
        className: cn(
          "hidden md:flex h-screen sticky top-0 shrink-0 border-r border-[#E5E5E3] flex-col",
          "transition-[width] duration-200 ease-out motion-reduce:transition-none",
          collapsed ? "w-16" : "w-60"
        ),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarBody, { logoSrc, companyName, collapsed, onToggle })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("md:hidden fixed inset-0 z-50", mobileOpen ? "" : "pointer-events-none"), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          onClick: onMobileClose,
          className: cn(
            "absolute inset-0 bg-black/40 transition-opacity duration-200",
            mobileOpen ? "opacity-100" : "opacity-0"
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: cn(
            "absolute inset-y-0 left-0 w-[80%] max-w-[280px] shadow-xl",
            "transition-transform duration-200 ease-out motion-reduce:transition-none",
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          ),
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SidebarBody,
            {
              logoSrc,
              companyName,
              collapsed: false,
              onNavigate: onMobileClose,
              onMobileClose
            }
          )
        }
      )
    ] })
  ] });
}
function NotificationBell() {
  const [mounted, setMounted] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  const [items, setItems] = reactExports.useState([]);
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    setMounted(true);
    void essApi.listNotifications().then((r) => setItems(r.data ?? []));
  }, []);
  reactExports.useEffect(() => {
    if (!open) return;
    const onDoc = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);
  if (!mounted) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9", "aria-hidden": true });
  const unread = items.filter((n) => !n.read).length;
  const markAll = async () => {
    const res = await essApi.markAllRead();
    setItems(res.data ?? []);
  };
  const markOne = async (id) => {
    const res = await essApi.markRead(id);
    setItems(res.data ?? []);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", ref, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        "aria-label": unread > 0 ? `Notifications, ${unread} unread` : "Notifications",
        "aria-expanded": open,
        onClick: () => setOpen((v) => !v),
        className: "relative w-9 h-9 rounded-full flex items-center justify-center hover:bg-black/5 transition-colors",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "h-[18px] w-[18px] text-[#0A0A0A]", "aria-hidden": true }),
          unread > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              "aria-hidden": true,
              className: "absolute top-1 right-1 min-w-[16px] h-4 px-1 rounded-full text-[10px] font-semibold text-white flex items-center justify-center",
              style: { background: "#DC2626" },
              children: unread > 9 ? "9+" : unread
            }
          )
        ]
      }
    ),
    open && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        role: "dialog",
        "aria-label": "Notifications",
        className: "absolute right-0 mt-2 w-[360px] max-w-[calc(100vw-2rem)] rounded-md border border-[#E5E5E3] bg-white shadow-lg z-50 overflow-hidden",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 py-3 border-b border-[#E5E5E3]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] font-semibold", children: "Notifications" }),
            unread > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => void markAll(), className: "text-[12px] text-[#6B6B6B] hover:text-[#0A0A0A]", children: "Mark all read" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-h-[380px] overflow-y-auto", children: items.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "px-4 py-8 text-center text-[13px] text-[#6B6B6B]", children: "You're all caught up." }) : items.slice(0, 8).map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: cn(
                "px-4 py-3 border-b border-[#F2F2F0] last:border-0 hover:bg-[#FAFAF8] transition-colors",
                !n.read && "bg-[#FAFAF8]"
              ),
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
                !n.read && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, className: "mt-1.5 w-1.5 h-1.5 rounded-full shrink-0", style: { background: "var(--tenant-primary)" } }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium truncate", children: n.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-[#6B6B6B] mt-0.5 line-clamp-2", children: n.body }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mt-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-[#9CA3AF]", children: relativeTime(n.createdAt) }),
                    n.actionTo && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Link,
                      {
                        to: n.actionTo,
                        onClick: () => {
                          void markOne(n.id);
                          setOpen(false);
                        },
                        className: "text-[11px] font-medium",
                        style: { color: "var(--tenant-primary)" },
                        children: n.actionLabel ?? "Open"
                      }
                    )
                  ] })
                ] })
              ] })
            },
            n.id
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/notifications",
              onClick: () => setOpen(false),
              className: "block px-4 py-3 text-center text-[13px] font-medium border-t border-[#E5E5E3] hover:bg-[#FAFAF8] transition-colors",
              children: "View all notifications"
            }
          )
        ]
      }
    )
  ] });
}
function AiTopBarButton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      title: "Ask AI",
      "aria-label": "Ask AI",
      onClick: uiStore.toggleAiPanel,
      className: "w-8 h-8 rounded-full bg-[#FAFAF9] border border-[#E5E5E3] hover:bg-[#F2F2F0] text-[#0A0A0A] hover:border-neutral-400 flex items-center justify-center transition-all shadow-2xs cursor-pointer active:scale-95 shrink-0",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4 text-[#0A0A0A]", "aria-hidden": true })
    }
  );
}
function TopBar({ userName, companyName, roleLabel, onLogout, onMenu }) {
  const canChat = usePermission("ai.chat");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "h-16 shrink-0 border-b border-[#E5E5E3] bg-white px-3 sm:px-6 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 items-center gap-2", children: [
      onMenu && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: onMenu,
          "aria-label": "Open navigation",
          className: "md:hidden -ml-1 p-2 rounded-md text-[#0A0A0A] hover:bg-[#F2F2F0] active:scale-95 transition",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate text-[14px] font-medium text-[#0A0A0A]", children: companyName }),
        roleLabel && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate text-[11px] text-[#6B6B6B]", children: roleLabel })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 sm:gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => uiStore.openSearch(),
          "aria-label": "Search",
          className: "flex items-center gap-2 px-2.5 py-1.5 rounded-md text-[13px] text-[#6B6B6B] bg-[#F9F9F7] border border-[#E5E5E3] hover:bg-[#F2F2F0] hover:text-[#0A0A0A] transition-colors",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Search..." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("kbd", { className: "hidden md:inline-block text-[10px] font-mono bg-white border border-[#E5E5E3] px-1.5 py-0.5 rounded text-[#6B6B6B]", children: "⌘K" })
          ]
        }
      ),
      canChat && /* @__PURE__ */ jsxRuntimeExports.jsx(AiTopBarButton, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(NotificationBell, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { name: userName, size: 32 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14px] text-[#0A0A0A] hidden lg:inline truncate max-w-[140px]", children: userName }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", onClick: onLogout, children: "Sign out" })
    ] })
  ] });
}
function ImpersonationBanner() {
  const navigate = useNavigate();
  const imp = impersonationStateStore.useSelector((s) => s.current);
  if (!imp) return null;
  const onExit = () => {
    impersonationStateStore.stop();
    navigate({ to: "/admin/dashboard" });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      role: "status",
      className: "bg-[#FEF3C7] text-[#92400E] border-b border-[#FDE68A] px-6 py-3 flex items-center gap-4",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-5 w-5 text-[#92400E] shrink-0", "aria-hidden": true }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 text-[13px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold", children: [
            "You are viewing as ",
            imp.companyName
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "opacity-90", children: "All actions here are real and will affect this tenant." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: onExit,
            className: "text-[13px] font-semibold underline underline-offset-4 hover:opacity-80 whitespace-nowrap",
            children: "Exit impersonation ↗"
          }
        )
      ]
    }
  );
}
function MobileBottomNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const role = authStore.useSelector((s) => s.user?.role) ?? "employee";
  const items = MOBILE_NAV[role] ?? MOBILE_NAV.employee;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "nav",
    {
      "aria-label": "Primary",
      className: "md:hidden fixed bottom-0 inset-x-0 z-40 border-t border-[#E5E5E3] bg-white/95 backdrop-blur-sm pb-[env(safe-area-inset-bottom)]",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex", children: items.map((item) => {
        const active = pathname === item.to || pathname.startsWith(item.to + "/");
        return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "flex-1 min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: item.to,
            "aria-current": active ? "page" : void 0,
            className: cn(
              "flex flex-col items-center gap-1 py-2.5 text-[10px] font-medium transition-colors",
              "active:scale-95 motion-reduce:active:scale-100",
              active ? "" : "text-[#6B6B6B]"
            ),
            style: active ? { color: "var(--tenant-primary)" } : void 0,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(NavIconGlyph, { name: item.icon, className: "h-[18px] w-[18px]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate max-w-full px-1", children: item.label })
            ]
          }
        ) }, item.to);
      }) })
    }
  );
}
function RouteProgress() {
  const isPending = useRouterState({ select: (s) => s.status === "pending" });
  const [visible, setVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (isPending) {
      setVisible(true);
      return;
    }
    const t = setTimeout(() => setVisible(false), 220);
    return () => clearTimeout(t);
  }, [isPending]);
  if (!visible) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "aria-hidden": true,
      className: "pointer-events-none fixed top-0 inset-x-0 z-[60] h-[2px] overflow-hidden",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "h-full w-full origin-left animate-[route-progress_600ms_ease-out_forwards] motion-reduce:animate-none",
          style: { background: "var(--tenant-primary)" }
        }
      )
    }
  );
}
function RouteTransition({ children }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-[route-enter_140ms_ease-out] motion-reduce:animate-none", children }, pathname);
}
const Dialog = Root;
const DialogPortal = Portal;
const DialogOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = Overlay.displayName;
const DialogContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-[calc(100%-2rem)] sm:w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-2xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 rounded-2xl sm:rounded-2xl border-[#E5E5E3]",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Close, { className: "absolute right-4 top-4 rounded-xl opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4 text-neutral-500" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = Content.displayName;
const DialogTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = Title.displayName;
const DialogDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = Description.displayName;
const Command = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  _e,
  {
    ref,
    className: cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className
    ),
    ...props
  }
));
Command.displayName = _e.displayName;
const CommandDialog = ({ children, ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { ...props, children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { className: "overflow-hidden p-0 w-[calc(100%-2rem)] sm:w-full max-w-lg rounded-2xl border border-[#E5E5E3] shadow-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Command, { className: "[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:text-[#8E8E8E] [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-[0.1em] [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-4 [&_[cmdk-input-wrapper]_svg]:w-4 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-3 [&_[cmdk-item]]:py-2.5 [&_[cmdk-item]]:rounded-xl [&_[cmdk-item]_svg]:h-4 [&_[cmdk-item]_svg]:w-4", children }) }) });
};
const CommandInput = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    _e.Input,
    {
      ref,
      className: cn(
        "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props
    }
  )
] }));
CommandInput.displayName = _e.Input.displayName;
const CommandList = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  _e.List,
  {
    ref,
    className: cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className),
    ...props
  }
));
CommandList.displayName = _e.List.displayName;
const CommandEmpty = reactExports.forwardRef((props, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(_e.Empty, { ref, className: "py-6 text-center text-sm", ...props }));
CommandEmpty.displayName = _e.Empty.displayName;
const CommandGroup = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  _e.Group,
  {
    ref,
    className: cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className
    ),
    ...props
  }
));
CommandGroup.displayName = _e.Group.displayName;
const CommandSeparator = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  _e.Separator,
  {
    ref,
    className: cn("-mx-1 h-px bg-border", className),
    ...props
  }
));
CommandSeparator.displayName = _e.Separator.displayName;
const CommandItem = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  _e.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      className
    ),
    ...props
  }
));
CommandItem.displayName = _e.Item.displayName;
function GlobalSearchModal() {
  const navigate = useNavigate();
  const activeModalId = uiStore.useSelector((s) => s.activeModalId);
  const open = activeModalId === "search";
  const user = authStore.useSelector((s) => s.user);
  reactExports.useEffect(() => {
    const onKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        uiStore.toggleSearch();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);
  const handleSelect = (to) => {
    uiStore.closeSearch();
    navigate({ to });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(CommandDialog, { open, onOpenChange: (val) => !val && uiStore.closeSearch(), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CommandInput, { placeholder: "Search pages, actions..." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CommandList, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CommandEmpty, { children: "No results found." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CommandGroup, { heading: "Navigation", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CommandItem, { onSelect: () => handleSelect("/dashboard"), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "mr-2 h-4 w-4 text-[#6B6B6B]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Dashboard" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CommandItem, { onSelect: () => handleSelect("/attendance"), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "mr-2 h-4 w-4 text-[#6B6B6B]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Attendance & Regularisation" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CommandItem, { onSelect: () => handleSelect("/leave"), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "mr-2 h-4 w-4 text-[#6B6B6B]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Leave Management" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CommandItem, { onSelect: () => handleSelect("/payroll/payslips"), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "mr-2 h-4 w-4 text-[#6B6B6B]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Payroll & Payslips" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CommandItem, { onSelect: () => handleSelect("/performance"), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "mr-2 h-4 w-4 text-[#6B6B6B]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Performance & Goals" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CommandItem, { onSelect: () => handleSelect("/employees"), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "mr-2 h-4 w-4 text-[#6B6B6B]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Employees Directory" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CommandItem, { onSelect: () => handleSelect("/org-chart"), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "mr-2 h-4 w-4 text-[#6B6B6B]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Organization Chart" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CommandItem, { onSelect: () => handleSelect("/announcements"), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Megaphone, { className: "mr-2 h-4 w-4 text-[#6B6B6B]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Announcements" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CommandItem, { onSelect: () => handleSelect("/helpdesk"), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LifeBuoy, { className: "mr-2 h-4 w-4 text-[#6B6B6B]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Helpdesk & Support" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CommandSeparator, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CommandGroup, { heading: "Quick Actions", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CommandItem, { onSelect: () => handleSelect("/leave/apply"), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "mr-2 h-4 w-4 text-[#6B6B6B]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Apply for Leave" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CommandItem, { onSelect: () => handleSelect("/attendance/regularization"), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "mr-2 h-4 w-4 text-[#6B6B6B]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Submit Regularisation Request" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          CommandItem,
          {
            onSelect: () => {
              uiStore.closeSearch();
              uiStore.openAiPanel();
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "mr-2 h-4 w-4 text-[#6B6B6B]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Ask AI Assistant" })
            ]
          }
        ),
        (user?.role === "hr_admin" || user?.role === "super_admin") && /* @__PURE__ */ jsxRuntimeExports.jsxs(CommandItem, { onSelect: () => handleSelect("/settings/company"), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { className: "mr-2 h-4 w-4 text-[#6B6B6B]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Company Settings" })
        ] })
      ] })
    ] })
  ] });
}
function AiChatPanel() {
  const open = uiStore.useSelector((s) => s.aiPanelOpen);
  const [menuOpen, setMenuOpen] = reactExports.useState(false);
  const [confirmClear, setConfirmClear] = reactExports.useState(false);
  const scrollRef = reactExports.useRef(null);
  const chat = useAiChat(open);
  reactExports.useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [chat.activeSession?.messages.length, chat.sending]);
  const messages = chat.activeSession?.messages ?? [];
  const lastIsError = messages[messages.length - 1]?.isError;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      "aria-hidden": !open,
      className: cn(
        "fixed inset-0 z-40 pointer-events-none",
        open && "pointer-events-auto"
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            "aria-label": "Close AI assistant",
            onClick: uiStore.closeAiPanel,
            className: cn(
              "absolute inset-0 bg-black/20 backdrop-blur-xs transition-opacity duration-200",
              open ? "opacity-100" : "opacity-0 pointer-events-none"
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            role: "dialog",
            "aria-modal": "true",
            "aria-label": "AI Assistant",
            className: cn(
              "absolute right-0 top-0 h-full w-full sm:w-[420px] bg-[#FAFAF9] border-l border-[#E5E5E3] shadow-2xl flex flex-col",
              "transition-transform duration-[250ms] ease-out",
              open ? "translate-x-0" : "translate-x-full"
            ),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-14 shrink-0 border-b border-[#E5E5E3] bg-white px-4 flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[14px] font-bold text-[#0A0A0A] tracking-tight", children: "AI Assistant" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-[#8E8E8E] font-medium", children: "HR Assistant & Knowledge Base" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      "aria-label": "More options",
                      onClick: () => setMenuOpen((v) => !v),
                      className: "w-8 h-8 rounded-xl flex items-center justify-center hover:bg-[#FAFAF9] transition-colors text-neutral-500 hover:text-[#0A0A0A] cursor-pointer",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ellipsis, { className: "w-4 h-4" })
                    }
                  ),
                  menuOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-0 top-10 w-48 rounded-xl border border-[#E5E5E3] bg-white shadow-xl z-20 overflow-hidden py-1 divide-y divide-[#F2F2F0] animate-in fade-in slide-in-from-top-1 duration-150", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => {
                          setMenuOpen(false);
                          setConfirmClear(true);
                        },
                        className: "w-full text-left px-3.5 py-2 text-[12.5px] font-medium text-rose-600 hover:bg-rose-50 transition-colors flex items-center justify-between cursor-pointer",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Clear conversation" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Link,
                      {
                        to: "/ai-assistant",
                        onClick: () => {
                          setMenuOpen(false);
                          uiStore.closeAiPanel();
                        },
                        className: "px-3.5 py-2 text-[12.5px] font-medium text-[#0A0A0A] hover:bg-[#FAFAF9] hover:text-orange-600 transition-colors flex items-center justify-between cursor-pointer",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Open full page" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3.5 h-3.5 text-neutral-400" })
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      "aria-label": "Close",
                      onClick: uiStore.closeAiPanel,
                      className: "w-8 h-8 rounded-xl flex items-center justify-center hover:bg-[#FAFAF9] transition-colors text-neutral-500 hover:text-[#0A0A0A] cursor-pointer",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: scrollRef, className: "flex-1 overflow-y-auto p-4 space-y-3.5", children: [
                messages.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  AiChatMessageBubble,
                  {
                    message: m,
                    onFeedback: (v) => chat.setFeedback(m.id, v ?? null)
                  },
                  m.id
                )),
                chat.sending && /* @__PURE__ */ jsxRuntimeExports.jsx(AiThinkingBubble, {}),
                lastIsError && !chat.sending && /* @__PURE__ */ jsxRuntimeExports.jsx(AiUnavailableState, {}),
                messages.filter((m) => m.role === "user").length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(AiSuggestedPrompts, { role: chat.role, onSelect: (p) => void chat.send(p) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                AiChatInput,
                {
                  onSend: (t) => void chat.send(t),
                  onNewSession: () => void chat.newSession(),
                  disabled: chat.sending || chat.cooldown,
                  cooldown: chat.cooldown
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ConfirmDialog,
          {
            open: confirmClear,
            onOpenChange: setConfirmClear,
            title: "Clear conversation",
            description: "This will permanently remove your chat history with the AI assistant. This cannot be undone.",
            confirmLabel: "Clear",
            variant: "danger",
            onConfirm: () => chat.clearConversation()
          }
        )
      ]
    }
  );
}
function AppLayout() {
  const navigate = useNavigate();
  const user = authStore.useSelector((s) => s.user);
  const tenant = tenantStore.useSelector((s) => s.tenant);
  const theme = tenantStore.useSelector((s) => s.theme);
  const impersonation = impersonationStateStore.useSelector((s) => s.current);
  const [collapsed, setCollapsed] = reactExports.useState(false);
  const [mobileNavOpen, setMobileNavOpen] = reactExports.useState(false);
  const [hydrated, setHydrated] = reactExports.useState(false);
  reactExports.useEffect(() => setHydrated(true), []);
  reactExports.useEffect(() => {
    if (!user) navigate({
      to: "/login"
    });
  }, [user, navigate]);
  reactExports.useEffect(() => {
    if (user) rbacStore.refresh(user.id, user.role);
  }, [user]);
  reactExports.useEffect(() => {
    applyTenantTheme(theme);
  }, [theme]);
  const onLogout = async () => {
    await authApi.logout();
    authStore.signOut();
    tenantStore.setTenant(null);
    impersonationStateStore.stop();
    resetToDefaultTheme();
    navigate({
      to: "/login"
    });
  };
  if (!hydrated || !user || !tenant) return null;
  const roleLabel = user.role === "hr_admin" ? "HR Admin" : user.role === "manager" ? "Manager" : user.role === "super_admin" ? "Administrator" : "Employee";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex bg-[#F9F9F7] font-sans antialiased text-[#0A0A0A]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(RouteProgress, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Sidebar, { logoSrc: tenant.settings.logoDataUrl, companyName: impersonation?.companyName ?? tenant.settings.companyName, collapsed, onToggle: () => setCollapsed((c) => !c), mobileOpen: mobileNavOpen, onMobileClose: () => setMobileNavOpen(false) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ImpersonationBanner, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TopBar, { userName: user.fullName, companyName: impersonation?.companyName ?? tenant.settings.companyName, roleLabel, onLogout, onMenu: () => setMobileNavOpen(true) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 overflow-y-auto p-4 sm:p-8 pb-24 md:pb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RouteTransition, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MobileBottomNav, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AiChatPanel, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(GlobalSearchModal, {})
  ] });
}
export {
  AppLayout as component
};
