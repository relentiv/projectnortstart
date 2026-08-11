import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { H as redirect } from "../_libs/tanstack__router-core.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { o as objectType, u as unionType, l as literalType, s as stringType } from "../_libs/zod.mjs";
import "../_libs/react-dom.mjs";

import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/unenv.mjs";



import "../_libs/seroval-plugins.mjs";

const appCss = "/assets/styles-BToGiviu.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function createStore(initial) {
  let state = initial;
  const listeners = /* @__PURE__ */ new Set();
  const subscribe = (l) => {
    listeners.add(l);
    return () => listeners.delete(l);
  };
  const get = () => state;
  const set = (patch) => {
    const next = typeof patch === "function" ? patch(state) : patch;
    state = { ...state, ...next };
    listeners.forEach((l) => l());
  };
  const reset = () => {
    state = initial;
    listeners.forEach((l) => l());
  };
  const useSelector = (selector) => reactExports.useSyncExternalStore(subscribe, () => selector(state), () => selector(state));
  return { get, set, reset, subscribe, useSelector };
}
const store = createStore({
  sidebarOpen: true,
  activeModalId: null,
  toasts: [],
  aiPanelOpen: false
});
const uiStore = {
  ...store,
  toggleSidebar() {
    store.set((s) => ({ sidebarOpen: !s.sidebarOpen }));
  },
  openModal(id) {
    store.set({ activeModalId: id });
  },
  closeModal() {
    store.set({ activeModalId: null });
  },
  pushToast(t) {
    const id = `t_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
    store.set((s) => ({ toasts: [...s.toasts, { ...t, id }] }));
    setTimeout(() => {
      store.set((s) => ({ toasts: s.toasts.filter((x) => x.id !== id) }));
    }, 3500);
  },
  dismissToast(id) {
    store.set((s) => ({ toasts: s.toasts.filter((x) => x.id !== id) }));
  },
  openAiPanel() {
    store.set({ aiPanelOpen: true });
  },
  closeAiPanel() {
    store.set({ aiPanelOpen: false });
  },
  toggleAiPanel() {
    store.set((s) => ({ aiPanelOpen: !s.aiPanelOpen }));
  },
  openSearch() {
    store.set({ activeModalId: "search" });
  },
  closeSearch() {
    store.set({ activeModalId: null });
  },
  toggleSearch() {
    store.set((s) => ({ activeModalId: s.activeModalId === "search" ? null : "search" }));
  }
};
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function ToastViewport() {
  const toasts = uiStore.useSelector((s) => s.toasts);
  if (toasts.length === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed bottom-6 right-6 z-50 flex flex-col gap-2", role: "region", "aria-label": "Notifications", children: toasts.map((t) => {
    const assertive = t.variant === "error" || t.variant === "warning";
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        role: "alert",
        "aria-live": assertive ? "assertive" : "polite",
        className: cn(
          "min-w-[260px] max-w-sm rounded-md px-4 py-3 text-[14px] shadow-lg border flex items-start gap-3 bg-white",
          t.variant === "success" && "border-[#BBF7D0] text-[#166534]",
          t.variant === "error" && "border-[#FECACA] text-[#991B1B]",
          t.variant === "warning" && "border-[#FDE68A] text-[#92400E]",
          t.variant === "info" && "border-[#E5E5E3] text-[#0A0A0A]"
        ),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1", children: t.message }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "aria-label": "Dismiss",
              onClick: () => uiStore.dismissToast(t.id),
              className: "text-current/70 hover:text-current",
              children: "×"
            }
          )
        ]
      },
      t.id
    );
  }) });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$1s = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "HRMS — Modern People Operations" },
      { name: "description", content: "Enterprise HR platform for fast-moving teams." },
      { property: "og:title", content: "HRMS — Modern People Operations" },
      { property: "og:description", content: "Enterprise HR platform for fast-moving teams." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "HRMS — Modern People Operations" },
      { name: "twitter:description", content: "Enterprise HR platform for fast-moving teams." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/78a33045-f173-4dd9-a848-0600a4efbc5f/id-preview-2fca7804--1ba61afc-1b51-49ad-9cc1-d38227f6105c.lovable.app-1781348283601.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/78a33045-f173-4dd9-a848-0600a4efbc5f/id-preview-2fca7804--1ba61afc-1b51-49ad-9cc1-d38227f6105c.lovable.app-1781348283601.png" }
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap"
      },
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$1s.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ToastViewport, {})
  ] });
}
const $$splitComponentImporter$1r = () => import("../_portal-BNCfzKKC.mjs");
const Route$1r = createFileRoute("/_portal")({
  head: () => ({
    meta: [{
      title: "Candidate Portal"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1r, "component")
});
const $$splitComponentImporter$1q = () => import("../_platform-BuSWWa3-.mjs");
const Route$1q = createFileRoute("/_platform")({
  component: lazyRouteComponent($$splitComponentImporter$1q, "component")
});
const $$splitComponentImporter$1p = () => import("../_app-lOP0x4-Y.mjs");
const Route$1p = createFileRoute("/_app")({
  component: lazyRouteComponent($$splitComponentImporter$1p, "component")
});
const $$splitComponentImporter$1o = () => import("../_admin-DK1AJXTK.mjs");
const Route$1o = createFileRoute("/_admin")({
  component: lazyRouteComponent($$splitComponentImporter$1o, "component")
});
const $$splitComponentImporter$1n = () => import("./index-BTU5dmpx.mjs");
const Route$1n = createFileRoute("/")({
  beforeLoad: () => {
    if (typeof window !== "undefined") {
      const auth = window.localStorage.getItem("hrms.auth");
      if (auth) throw redirect({
        to: "/dashboard"
      });
    }
    throw redirect({
      to: "/onboarding"
    });
  },
  component: lazyRouteComponent($$splitComponentImporter$1n, "component")
});
const $$splitComponentImporter$1m = () => import("../_platform.onboarding-C98ziJNy.mjs");
const Route$1m = createFileRoute("/_platform/onboarding")({
  component: lazyRouteComponent($$splitComponentImporter$1m, "component")
});
const $$splitComponentImporter$1l = () => import("../_platform.login-DXHVFC0b.mjs");
const Route$1l = createFileRoute("/_platform/login")({
  component: lazyRouteComponent($$splitComponentImporter$1l, "component"),
  head: () => ({
    meta: [{
      title: "Sign in — HRMS"
    }, {
      name: "description",
      content: "Sign in to your HRMS workspace, or explore a demo role."
    }, {
      property: "og:title",
      content: "Sign in — HRMS"
    }, {
      property: "og:description",
      content: "Sign in to your HRMS workspace, or explore a demo role."
    }]
  })
});
const $$splitComponentImporter$1k = () => import("../_app.settings-30UW-4xF.mjs");
const Route$1k = createFileRoute("/_app/settings")({
  beforeLoad: ({
    location
  }) => {
    if (location.pathname === "/settings") throw redirect({
      to: "/settings/company"
    });
  },
  component: lazyRouteComponent($$splitComponentImporter$1k, "component")
});
const $$splitComponentImporter$1j = () => import("../_app.org-chart-w50XT9Gw.mjs");
const Route$1j = createFileRoute("/_app/org-chart")({
  component: lazyRouteComponent($$splitComponentImporter$1j, "component"),
  head: () => ({
    meta: [{
      title: "Org Chart — HRMS"
    }]
  })
});
const $$splitComponentImporter$1i = () => import("../_app.notifications-DdxannKE.mjs");
const Route$1i = createFileRoute("/_app/notifications")({
  component: lazyRouteComponent($$splitComponentImporter$1i, "component"),
  head: () => ({
    meta: [{
      title: "Notifications — HRMS"
    }, {
      name: "description",
      content: "Every leave, attendance, payroll and helpdesk update in one place."
    }, {
      property: "og:title",
      content: "Notifications — HRMS"
    }, {
      property: "og:description",
      content: "Every leave, attendance, payroll and helpdesk update in one place."
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary"
    }]
  })
});
const $$splitComponentImporter$1h = () => import("../_app.me-C-VyQNn6.mjs");
const Route$1h = createFileRoute("/_app/me")({
  component: lazyRouteComponent($$splitComponentImporter$1h, "component"),
  head: () => ({
    meta: [{
      title: "My Profile — HRMS"
    }, {
      name: "description",
      content: "Update your personal details and request changes to sensitive records."
    }, {
      property: "og:title",
      content: "My Profile — HRMS"
    }, {
      property: "og:description",
      content: "Update your personal details and request changes to sensitive records."
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary"
    }]
  })
});
const $$splitComponentImporter$1g = () => import("../_app.employees-BFsOu0JM.mjs");
const Route$1g = createFileRoute("/_app/employees")({
  component: lazyRouteComponent($$splitComponentImporter$1g, "component")
});
const $$splitComponentImporter$1f = () => import("../_app.dashboard-C9QuLzOy.mjs");
const Route$1f = createFileRoute("/_app/dashboard")({
  component: lazyRouteComponent($$splitComponentImporter$1f, "component"),
  head: () => ({
    meta: [{
      title: "Today — HRMS"
    }, {
      name: "description",
      content: "Your work status, pending actions and team activity at a glance."
    }, {
      property: "og:title",
      content: "Today — HRMS"
    }, {
      property: "og:description",
      content: "Your work status, pending actions and team activity at a glance."
    }]
  })
});
const $$splitComponentImporter$1e = () => import("../_app.announcements-BdcyIFUR.mjs");
const Route$1e = createFileRoute("/_app/announcements")({
  component: lazyRouteComponent($$splitComponentImporter$1e, "component"),
  head: () => ({
    meta: [{
      title: "Announcements — HRMS"
    }, {
      name: "description",
      content: "Company-wide news, policy updates and events for every employee."
    }, {
      property: "og:title",
      content: "Announcements — HRMS"
    }, {
      property: "og:description",
      content: "Company-wide news, policy updates and events for every employee."
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary"
    }]
  })
});
const $$splitComponentImporter$1d = () => import("../_app.ai-assistant-Ob3uh0Mz.mjs");
const Route$1d = createFileRoute("/_app/ai-assistant")({
  component: lazyRouteComponent($$splitComponentImporter$1d, "component"),
  head: () => ({
    meta: [{
      title: "AI Assistant — HRMS"
    }, {
      name: "description",
      content: "Ask the HR assistant about leave, payroll, policies and your pending approvals."
    }, {
      property: "og:title",
      content: "AI Assistant — HRMS"
    }, {
      property: "og:description",
      content: "Ask the HR assistant about leave, payroll, policies and your pending approvals."
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary"
    }]
  })
});
const $$splitComponentImporter$1c = () => import("../_portal.portal.index-9QaxtxaZ.mjs");
const searchSchema = objectType({
  token: stringType().optional(),
  expired: unionType([literalType("true"), literalType("false")]).optional()
});
const Route$1c = createFileRoute("/_portal/portal/")({
  head: () => ({
    meta: [{
      title: "Candidate Portal — Sign In"
    }]
  }),
  validateSearch: searchSchema,
  component: lazyRouteComponent($$splitComponentImporter$1c, "component")
});
const $$splitErrorComponentImporter$4 = () => import("../_app.reports.index-BB3Vl1FX.mjs");
const $$splitComponentImporter$1b = () => import("../_app.reports.index-DFjCVkaC.mjs");
const Route$1b = createFileRoute("/_app/reports/")({
  component: lazyRouteComponent($$splitComponentImporter$1b, "component"),
  pendingComponent: ReportsHubSkeleton,
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter$4, "errorComponent"),
  head: () => ({
    meta: [{
      title: "Reports — HRMS"
    }, {
      name: "description",
      content: "Executive KPIs, standard reports, natural-language queries and saved custom reports."
    }, {
      property: "og:title",
      content: "Reports — HRMS"
    }, {
      property: "og:description",
      content: "Executive KPIs, standard reports, natural-language queries and saved custom reports."
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary"
    }]
  })
});
function ReportsHubSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-48 rounded-sm bg-[#F2F2F0] animate-pulse" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4", children: Array.from({
      length: 6
    }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[110px] rounded-md border border-[#E5E5E3] bg-white animate-pulse" }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-24 rounded-md border border-[#E5E5E3] bg-white animate-pulse" })
  ] });
}
function Spinner({ size = 16, className, label = "Loading" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      role: "status",
      "aria-label": label,
      className: cn("inline-block animate-spin motion-reduce:animate-none", className),
      style: { width: size, height: size },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", width: size, height: size, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeOpacity: "0.25", strokeWidth: "3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M22 12a10 10 0 0 0-10-10", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round" })
      ] })
    }
  );
}
function formatDate(input) {
  const d = typeof input === "string" ? new Date(input) : input;
  return d.toLocaleDateString(void 0, { year: "numeric", month: "short", day: "numeric" });
}
function formatCurrency(amount, opts = {}) {
  const n = typeof amount === "number" && Number.isFinite(amount) ? amount : 0;
  const negative = n < 0;
  const abs = Math.abs(n);
  const whole = Math.floor(abs);
  const fraction = opts.decimals ? (abs - whole).toFixed(2).slice(1) : "";
  return `${negative ? "-" : ""}₹${groupIndian(whole)}${fraction}`;
}
function groupIndian(value) {
  const s = String(Math.floor(Math.abs(value)));
  if (s.length <= 3) return s;
  const last3 = s.slice(-3);
  const rest = s.slice(0, -3);
  return `${rest.replace(/\B(?=(\d{2})+(?!\d))/g, ",")},${last3}`;
}
function parseCurrencyInput(raw) {
  const cleaned = raw.replace(/[₹,\s]/g, "");
  if (cleaned === "") return null;
  const n = Number(cleaned);
  return Number.isFinite(n) ? n : null;
}
function relativeTime(input) {
  const d = typeof input === "string" ? new Date(input) : input;
  const diff = Date.now() - d.getTime();
  if (!Number.isFinite(diff)) return "";
  const mins = Math.round(diff / 6e4);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.round(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.round(hrs / 24);
  if (days < 7) return `${days}d ago`;
  return d.toLocaleDateString(void 0, { day: "numeric", month: "short" });
}
function initialsFromName(name) {
  const parts = name.trim().split(/\s+/).slice(0, 2);
  return parts.map((p) => p[0]?.toUpperCase() ?? "").join("");
}
const DAY_MS = 864e5;
function startOfDay(d) {
  const c = new Date(d);
  c.setHours(0, 0, 0, 0);
  return c;
}
function sameDay(a, b) {
  return startOfDay(a).getTime() === startOfDay(b).getTime();
}
function toKey(d) {
  const c = startOfDay(d);
  return `${c.getFullYear()}-${String(c.getMonth() + 1).padStart(2, "0")}-${String(c.getDate()).padStart(2, "0")}`;
}
function calculateWorkingDays(startDate, endDate, nonWorkingDays, holidays, isHalfDay) {
  if (!startDate || !endDate) return 0;
  const start = startOfDay(startDate);
  const end = startOfDay(endDate);
  if (start.getTime() > end.getTime()) return 0;
  const holidaySet = new Set(holidays.map(toKey));
  const nonWorking = new Set(nonWorkingDays);
  if (isHalfDay && start.getTime() === end.getTime()) {
    if (nonWorking.has(start.getDay()) || holidaySet.has(toKey(start))) return 0;
    return 0.5;
  }
  let count = 0;
  for (let t = start.getTime(); t <= end.getTime(); t += DAY_MS) {
    const day = new Date(t);
    if (nonWorking.has(day.getDay())) continue;
    if (holidaySet.has(toKey(day))) continue;
    count += 1;
  }
  return Math.round(count * 2) / 2;
}
function overlaps(aStart, aEnd, bStart, bEnd) {
  return startOfDay(aStart).getTime() <= startOfDay(bEnd).getTime() && startOfDay(aEnd).getTime() >= startOfDay(bStart).getTime();
}
function formatRange(start, end) {
  if (!start) return "—";
  const fmt = (d) => d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
  if (!end || sameDay(start, end)) return fmt(start);
  return `${start.toLocaleDateString("en-GB", { day: "numeric", month: "short" })} – ${fmt(end)}`;
}
const $$splitComponentImporter$1a = () => import("../_app.performance.index-rbhZepv_.mjs");
const Route$1a = createFileRoute("/_app/performance/")({
  component: lazyRouteComponent($$splitComponentImporter$1a, "component"),
  pendingComponent: () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center items-center py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 32 }) }),
  head: () => ({
    meta: [{
      title: "My Performance — HRMS"
    }, {
      name: "description",
      content: "Your active review cycle, goal progress, pending tasks and recent feedback."
    }, {
      property: "og:title",
      content: "My Performance — HRMS"
    }, {
      property: "og:description",
      content: "Your active review cycle, goal progress, pending tasks and recent feedback."
    }]
  })
});
const $$splitComponentImporter$19 = () => import("../_app.payroll.index-BoCcpNR_.mjs");
const Route$19 = createFileRoute("/_app/payroll/")({
  component: lazyRouteComponent($$splitComponentImporter$19, "component"),
  head: () => ({
    meta: [{
      title: "Payroll — HRMS"
    }, {
      name: "description",
      content: "Current payroll run status, headcount, gross and net pay, and recent runs."
    }, {
      property: "og:title",
      content: "Payroll — HRMS"
    }, {
      property: "og:description",
      content: "Current payroll run status, headcount, gross and net pay, and recent runs."
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary"
    }]
  })
});
const $$splitComponentImporter$18 = () => import("../_app.leave.index-CIt3gOKd.mjs");
const Route$18 = createFileRoute("/_app/leave/")({
  component: lazyRouteComponent($$splitComponentImporter$18, "component"),
  head: () => ({
    meta: [{
      title: "My Leave — HRMS"
    }, {
      name: "description",
      content: "Track your leave balances, apply for time off, and follow approval progress."
    }, {
      property: "og:title",
      content: "My Leave — HRMS"
    }, {
      property: "og:description",
      content: "Track your leave balances, apply for time off, and follow approval progress."
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary"
    }]
  })
});
const $$splitComponentImporter$17 = () => import("../_app.helpdesk.index-B9GVZ4UU.mjs");
const Route$17 = createFileRoute("/_app/helpdesk/")({
  component: lazyRouteComponent($$splitComponentImporter$17, "component"),
  head: () => ({
    meta: [{
      title: "Helpdesk — HRMS"
    }, {
      name: "description",
      content: "Raise and track IT, HR, payroll and facilities support tickets."
    }, {
      property: "og:title",
      content: "Helpdesk — HRMS"
    }, {
      property: "og:description",
      content: "Raise and track IT, HR, payroll and facilities support tickets."
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary"
    }]
  })
});
const $$splitComponentImporter$16 = () => import("../_app.expenses.index-COpW2r3z.mjs");
const Route$16 = createFileRoute("/_app/expenses/")({
  component: lazyRouteComponent($$splitComponentImporter$16, "component"),
  head: () => ({
    meta: [{
      title: "My Expenses — HRMS"
    }, {
      name: "description",
      content: "Submit expense claims and track reimbursement status."
    }, {
      property: "og:title",
      content: "My Expenses — HRMS"
    }, {
      property: "og:description",
      content: "Submit expense claims and track reimbursement status."
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary"
    }]
  })
});
const $$splitComponentImporter$15 = () => import("../_app.employees.index-CREM5li8.mjs");
const Route$15 = createFileRoute("/_app/employees/")({
  component: lazyRouteComponent($$splitComponentImporter$15, "component"),
  head: () => ({
    meta: [{
      title: "Employees — HRMS"
    }]
  })
});
const $$splitComponentImporter$14 = () => import("../_app.candidates.index-CqccEYof.mjs");
const Route$14 = createFileRoute("/_app/candidates/")({
  component: lazyRouteComponent($$splitComponentImporter$14, "component"),
  head: () => ({
    meta: [{
      title: "Candidates — HRMS"
    }]
  })
});
const $$splitComponentImporter$13 = () => import("../_app.attendance.index-DYCPhHQF.mjs");
const Route$13 = createFileRoute("/_app/attendance/")({
  component: lazyRouteComponent($$splitComponentImporter$13, "component"),
  head: () => ({
    meta: [{
      title: "My Attendance — HRMS"
    }, {
      name: "description",
      content: "Clock in and out, track breaks, and review your monthly attendance record."
    }, {
      property: "og:title",
      content: "My Attendance — HRMS"
    }, {
      property: "og:description",
      content: "Clock in and out, track breaks, and review your monthly attendance record."
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary"
    }]
  })
});
const $$splitComponentImporter$12 = () => import("../_platform.onboarding.review-CT9d0hWY.mjs");
const Route$12 = createFileRoute("/_platform/onboarding/review")({
  component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
const $$splitComponentImporter$11 = () => import("../_platform.onboarding.brand-Crd7KxD4.mjs");
const Route$11 = createFileRoute("/_platform/onboarding/brand")({
  component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
const $$splitComponentImporter$10 = () => import("../_platform.onboarding.admin-DYeh5m2s.mjs");
const Route$10 = createFileRoute("/_platform/onboarding/admin")({
  component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
const $$splitComponentImporter$$ = () => import("../_app.settings.roles-CcBIzSPF.mjs");
const Route$$ = createFileRoute("/_app/settings/roles")({
  component: lazyRouteComponent($$splitComponentImporter$$, "component"),
  head: () => ({
    meta: [{
      title: "Roles & Permissions — Settings — HRMS"
    }]
  })
});
const $$splitComponentImporter$_ = () => import("../_app.settings.company-BjCq0FS8.mjs");
const Route$_ = createFileRoute("/_app/settings/company")({
  component: lazyRouteComponent($$splitComponentImporter$_, "component")
});
const $$splitComponentImporter$Z = () => import("../_app.settings.attendance-ByWPDqWx.mjs");
const Route$Z = createFileRoute("/_app/settings/attendance")({
  component: lazyRouteComponent($$splitComponentImporter$Z, "component"),
  pendingComponent: () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 28 }) }),
  head: () => ({
    meta: [{
      title: "Attendance Settings — HRMS"
    }, {
      name: "description",
      content: "Configure shift timings, grace periods, geo-fencing and clock-in rules."
    }, {
      property: "og:title",
      content: "Attendance Settings — HRMS"
    }, {
      property: "og:description",
      content: "Configure shift timings, grace periods, geo-fencing and clock-in rules."
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary"
    }]
  })
});
const DELAY_MS = 250;
function ok(data) {
  return { data, error: null };
}
function fail(message, code) {
  return { data: null, error: { message, code } };
}
function delay(value, ms = DELAY_MS) {
  return new Promise((res) => setTimeout(() => res(value), ms));
}
function uid(prefix = "") {
  return `${prefix}${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`;
}
const KEY = "hrms.employees";
const SEEDED = "hrms.employees.seeded";
function read$7() {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}
function write$7(list) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, JSON.stringify(list));
}
function nowIso$1() {
  return (/* @__PURE__ */ new Date()).toISOString();
}
function defaultDocs() {
  return [
    { id: uid("doc_"), type: "aadhaar", label: "Aadhaar Card", status: "pending" },
    { id: uid("doc_"), type: "pan", label: "PAN Card", status: "pending" },
    { id: uid("doc_"), type: "offer_letter", label: "Offer Letter", status: "pending" },
    { id: uid("doc_"), type: "appointment_letter", label: "Appointment Letter", status: "pending" },
    { id: uid("doc_"), type: "education_certificate", label: "Education Certificate", status: "pending" }
  ];
}
function computeCompleteness(e) {
  const checks = [
    ["First name", !!e.firstName],
    ["Last name", !!e.lastName],
    ["Work email", !!e.workEmail],
    ["Phone", !!e.phone],
    ["Date of birth", !!e.dateOfBirth],
    ["Gender", !!e.gender],
    ["Blood group", !!e.bloodGroup],
    ["Current address", !!e.currentAddress?.city],
    ["Permanent address", !!e.sameAddress || !!e.permanentAddress?.city],
    ["Emergency contact", !!e.emergencyContact?.name],
    ["Department", !!e.departmentId],
    ["Designation", !!e.designationId],
    ["Reporting manager", !!e.reportingManagerId],
    ["CTC", !!e.ctcAnnual],
    ["Bank account", !!e.bankAccountNumber],
    ["PAN number", !!e.panNumber],
    ["Aadhaar number", !!e.aadhaarNumber],
    ["Aadhaar document", e.documents.some((d) => d.type === "aadhaar" && d.status !== "pending")],
    ["PAN document", e.documents.some((d) => d.type === "pan" && d.status !== "pending")]
  ];
  const passed = checks.filter(([, v]) => v).length;
  const missing = checks.filter(([, v]) => !v).map(([k]) => k);
  return { pct: Math.round(passed / checks.length * 100), missing };
}
function withMeta(e) {
  const { pct } = computeCompleteness(e);
  return { ...e, profileCompleteness: pct };
}
function seed() {
  if (typeof window === "undefined") return;
  if (window.localStorage.getItem(SEEDED) === "1") return;
  const today = /* @__PURE__ */ new Date();
  const isoBack = (days) => new Date(today.getTime() - days * 864e5).toISOString();
  const dobYears = (y) => new Date(today.getFullYear() - y, today.getMonth(), today.getDate()).toISOString();
  const seedList = [
    mkSeed({
      code: "EMP-0001",
      first: "Maya",
      last: "Singh",
      dept: "d_eng",
      desig: "g_sse",
      type: "full_time",
      status: "active",
      role: "manager",
      mgr: void 0,
      joined: isoBack(900),
      dob: dobYears(34)
    }),
    mkSeed({
      code: "EMP-0002",
      first: "Theo",
      last: "Park",
      dept: "d_des",
      desig: "g_pd",
      type: "full_time",
      status: "active",
      role: "manager",
      joined: isoBack(720),
      dob: dobYears(31)
    }),
    mkSeed({
      code: "EMP-0003",
      first: "Jordan",
      last: "Reyes",
      dept: "d_ppl",
      desig: "g_sse",
      type: "full_time",
      status: "active",
      role: "hr_admin",
      joined: isoBack(640),
      dob: dobYears(29)
    }),
    mkSeed({
      code: "EMP-0004",
      first: "Riley",
      last: "Chen",
      dept: "d_sal",
      desig: "g_ae",
      type: "full_time",
      status: "active",
      role: "manager",
      joined: isoBack(500),
      dob: dobYears(36)
    }),
    mkSeed({
      code: "EMP-0005",
      first: "Aisha",
      last: "Khan",
      dept: "d_eng",
      desig: "g_se",
      type: "full_time",
      status: "active",
      role: "employee",
      mgr: "EMP-0001",
      joined: isoBack(420),
      dob: dobYears(27)
    }),
    mkSeed({
      code: "EMP-0006",
      first: "Liam",
      last: "Garcia",
      dept: "d_eng",
      desig: "g_se",
      type: "full_time",
      status: "probation",
      role: "employee",
      mgr: "EMP-0001",
      joined: isoBack(45),
      dob: dobYears(24)
    }),
    mkSeed({
      code: "EMP-0007",
      first: "Sofia",
      last: "Martins",
      dept: "d_des",
      desig: "g_pd",
      type: "full_time",
      status: "active",
      role: "employee",
      mgr: "EMP-0002",
      joined: isoBack(300),
      dob: dobYears(28)
    }),
    mkSeed({
      code: "EMP-0008",
      first: "Noah",
      last: "Patel",
      dept: "d_sal",
      desig: "g_ae",
      type: "full_time",
      status: "active",
      role: "employee",
      mgr: "EMP-0004",
      joined: isoBack(260),
      dob: dobYears(30)
    }),
    mkSeed({
      code: "EMP-0009",
      first: "Emma",
      last: "Wilson",
      dept: "d_ppl",
      desig: "g_se",
      type: "part_time",
      status: "active",
      role: "employee",
      mgr: "EMP-0003",
      joined: isoBack(180),
      dob: dobYears(26)
    }),
    mkSeed({
      code: "EMP-0010",
      first: "Aarav",
      last: "Mehta",
      dept: "d_eng",
      desig: "g_se",
      type: "contract",
      status: "notice_period",
      role: "employee",
      mgr: "EMP-0005",
      joined: isoBack(120),
      dob: dobYears(32)
    }),
    mkSeed({
      code: "EMP-0011",
      first: "Zara",
      last: "Lee",
      dept: "d_des",
      desig: "g_se",
      type: "intern",
      status: "active",
      role: "employee",
      mgr: "EMP-0002",
      joined: isoBack(30),
      dob: dobYears(22)
    }),
    mkSeed({
      code: "EMP-0012",
      first: "Marcus",
      last: "Bell",
      dept: "d_sal",
      desig: "g_ae",
      type: "full_time",
      status: "inactive",
      role: "employee",
      mgr: "EMP-0004",
      joined: isoBack(800),
      dob: dobYears(40)
    })
  ];
  const byCode = {};
  seedList.forEach((e) => byCode[e.employeeCode] = e.id);
  const resolved = seedList.map(
    (e) => withMeta({ ...e, reportingManagerId: e.reportingManagerId ? byCode[e.reportingManagerId] : void 0 })
  );
  write$7(resolved);
  window.localStorage.setItem(SEEDED, "1");
}
function mkSeed(o) {
  const id = uid("emp_");
  return {
    id,
    employeeCode: o.code,
    firstName: o.first,
    lastName: o.last,
    personalEmail: `${o.first.toLowerCase()}.${o.last.toLowerCase()}@personal.demo`,
    workEmail: `${o.first.toLowerCase()}.${o.last.toLowerCase()}@acme.demo`,
    phone: "+91 98000 00000",
    dateOfBirth: o.dob,
    gender: "prefer_not_to_say",
    bloodGroup: "O+",
    nationality: "Indian",
    currentAddress: { line1: "Demo Lane 12", city: "Bengaluru", state: "Karnataka", pincode: "560001", country: "India" },
    sameAddress: true,
    departmentId: o.dept,
    designationId: o.desig,
    employmentType: o.type,
    employmentStatus: o.status,
    dateOfJoining: o.joined,
    reportingManagerId: o.mgr,
    workLocation: "Bengaluru HQ",
    ctcAnnual: 12e5,
    bankName: "HDFC Bank",
    bankAccountNumber: "1234567890" + o.code.slice(-2),
    bankIfsc: "HDFC0000123",
    panNumber: "ABCDE" + o.code.slice(-4) + "F",
    aadhaarNumber: "1234 5678 " + o.code.slice(-4),
    role: o.role,
    documents: defaultDocs(),
    emergencyContact: { name: "Family Member", relationship: "Parent", phone: "+91 98000 00001" },
    timeline: [
      { id: uid("t_"), at: o.joined, actor: "System", message: "Employee onboarded." }
    ],
    createdAt: o.joined,
    updatedAt: nowIso$1(),
    profileCompleteness: 0
  };
}
function ensureSeed$4() {
  if (typeof window === "undefined") return;
  seed();
}
async function listEmployees(filters = {}) {
  ensureSeed$4();
  let list = read$7();
  if (filters.q) {
    const q = filters.q.toLowerCase();
    list = list.filter(
      (e) => `${e.firstName} ${e.lastName}`.toLowerCase().includes(q) || e.employeeCode.toLowerCase().includes(q) || e.workEmail.toLowerCase().includes(q)
    );
  }
  if (filters.departmentId) list = list.filter((e) => e.departmentId === filters.departmentId);
  if (filters.designationId) list = list.filter((e) => e.designationId === filters.designationId);
  if (filters.types?.length) list = list.filter((e) => filters.types.includes(e.employmentType));
  if (filters.statuses?.length) list = list.filter((e) => filters.statuses.includes(e.employmentStatus));
  return delay(ok(list.map(withMeta)));
}
async function getEmployee(id) {
  ensureSeed$4();
  const found = read$7().find((e) => e.id === id);
  if (!found) return delay(fail("Employee not found", "not_found"));
  return delay(ok(withMeta(found)));
}
async function nextEmployeeCode() {
  ensureSeed$4();
  const list = read$7();
  const nums = list.map((e) => parseInt(e.employeeCode.replace(/^EMP-/, ""), 10)).filter((n) => Number.isFinite(n));
  const next = (nums.length ? Math.max(...nums) : 0) + 1;
  return "EMP-" + String(next).padStart(4, "0");
}
async function createEmployee(input) {
  ensureSeed$4();
  const list = read$7();
  if (list.some((e) => e.workEmail.toLowerCase() === input.workEmail.toLowerCase())) {
    return delay(fail("An employee with this work email already exists.", "duplicate"));
  }
  if (list.some((e) => e.employeeCode === input.employeeCode)) {
    return delay(fail("Employee code already in use.", "duplicate"));
  }
  const created = withMeta({
    ...input,
    id: uid("emp_"),
    documents: input.documents?.length ? input.documents : defaultDocs(),
    createdAt: nowIso$1(),
    updatedAt: nowIso$1(),
    timeline: [{ id: uid("t_"), at: nowIso$1(), actor: "HR Admin", message: "Employee created." }],
    profileCompleteness: 0
  });
  write$7([created, ...list]);
  return delay(ok(created));
}
async function updateEmployee(id, patch, actor = "HR Admin", summary = "Profile updated.") {
  ensureSeed$4();
  const list = read$7();
  const i = list.findIndex((e) => e.id === id);
  if (i < 0) return delay(fail("Employee not found"));
  const entry = { id: uid("t_"), at: nowIso$1(), actor, message: summary };
  const merged = withMeta({
    ...list[i],
    ...patch,
    updatedAt: nowIso$1(),
    timeline: [entry, ...list[i].timeline ?? []].slice(0, 200)
  });
  list[i] = merged;
  write$7(list);
  return delay(ok(merged));
}
async function setStatus(id, status, note) {
  return updateEmployee(id, { employmentStatus: status }, "HR Admin", `Status changed to ${status}${""}.`);
}
async function updateDocument(id, docId, patch) {
  ensureSeed$4();
  const list = read$7();
  const i = list.findIndex((e) => e.id === id);
  if (i < 0) return delay(fail("Employee not found"));
  const docs = list[i].documents.map((d) => d.id === docId ? { ...d, ...patch } : d);
  return updateEmployee(id, { documents: docs }, "HR Admin", `Document "${docs.find((d) => d.id === docId)?.label}" updated.`);
}
async function archiveEmployees(ids) {
  ensureSeed$4();
  const list = read$7().map(
    (e) => ids.includes(e.id) ? withMeta({ ...e, employmentStatus: "inactive", updatedAt: nowIso$1() }) : e
  );
  write$7(list);
  return delay(ok(ids.length));
}
function employeesToCsv(list) {
  const header = [
    "Employee Code",
    "First Name",
    "Last Name",
    "Work Email",
    "Phone",
    "Department",
    "Designation",
    "Type",
    "Status",
    "Joined"
  ];
  const rows = list.map(
    (e) => [
      e.employeeCode,
      e.firstName,
      e.lastName,
      e.workEmail,
      e.phone,
      e.departmentId,
      e.designationId,
      e.employmentType,
      e.employmentStatus,
      e.dateOfJoining.slice(0, 10)
    ].map((v) => `"${String(v).replace(/"/g, '""')}"`).join(",")
  );
  return [header.join(","), ...rows].join("\n");
}
function downloadCsv(filename, csv) {
  if (typeof window === "undefined") return;
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
const DEPT_KEY = "hrms.settings.departments";
const DESIG_KEY = "hrms.settings.designations";
const CAL_KEY = "hrms.settings.workCalendar";
const SHIFT_KEY = "hrms.settings.shifts";
const HOL_KEY = "hrms.settings.holidays";
const NAT_HOL_KEY = "hrms.settings.nationalHolidaysToggled";
function read$6(key, fallback) {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}
function write$6(key, value) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(key, JSON.stringify(value));
}
const DEFAULT_CAL = { workingDays: [1, 2, 3, 4, 5] };
const DEFAULT_DEPTS = [
  { id: "d_eng", name: "Engineering", parentId: null, employeeCount: 84, headName: "Maya Singh" },
  { id: "d_des", name: "Design", parentId: null, employeeCount: 18, headName: "Theo Park" },
  { id: "d_ppl", name: "People Operations", parentId: null, employeeCount: 9, headName: "Jordan Reyes" },
  { id: "d_sal", name: "Sales", parentId: null, employeeCount: 62, headName: "Riley Chen" }
];
const DEFAULT_DESIG = [
  { id: "g_sse", name: "Senior Software Engineer", grade: "L4", departmentIds: ["d_eng"], employeeCount: 28 },
  { id: "g_se", name: "Software Engineer", grade: "L3", departmentIds: ["d_eng"], employeeCount: 36 },
  { id: "g_pd", name: "Product Designer", grade: "L3", departmentIds: ["d_des"], employeeCount: 12 },
  { id: "g_ae", name: "Account Executive", grade: "Band 2", departmentIds: ["d_sal"], employeeCount: 22 }
];
const NATIONAL_HOLIDAYS_BY_COUNTRY = {
  "United States": [
    { name: "New Year's Day", date: "2026-01-01" },
    { name: "Martin Luther King Jr. Day", date: "2026-01-19" },
    { name: "Memorial Day", date: "2026-05-25" },
    { name: "Independence Day", date: "2026-07-04" },
    { name: "Labor Day", date: "2026-09-07" },
    { name: "Thanksgiving", date: "2026-11-26" },
    { name: "Christmas Day", date: "2026-12-25" }
  ],
  "United Kingdom": [
    { name: "New Year's Day", date: "2026-01-01" },
    { name: "Good Friday", date: "2026-04-03" },
    { name: "Easter Monday", date: "2026-04-06" },
    { name: "Early May Bank Holiday", date: "2026-05-04" },
    { name: "Christmas Day", date: "2026-12-25" },
    { name: "Boxing Day", date: "2026-12-26" }
  ],
  "India": [
    { name: "Republic Day", date: "2026-01-26" },
    { name: "Holi", date: "2026-03-04" },
    { name: "Independence Day", date: "2026-08-15" },
    { name: "Gandhi Jayanti", date: "2026-10-02" },
    { name: "Diwali", date: "2026-11-08" }
  ]
};
const settingsApi = {
  // Departments
  async listDepartments() {
    const list = read$6(DEPT_KEY, DEFAULT_DEPTS);
    if (read$6(DEPT_KEY, null) === null) write$6(DEPT_KEY, list);
    return delay(ok(list));
  },
  async upsertDepartment(input) {
    const list = read$6(DEPT_KEY, []);
    if (input.id) {
      const idx = list.findIndex((d) => d.id === input.id);
      if (idx === -1) return delay(fail("Department not found."));
      list[idx] = { ...list[idx], ...input };
      write$6(DEPT_KEY, list);
      return delay(ok(list[idx]));
    }
    const created = { ...input, id: uid("d_"), employeeCount: 0 };
    write$6(DEPT_KEY, [created, ...list]);
    return delay(ok(created));
  },
  async deleteDepartment(id) {
    const list = read$6(DEPT_KEY, []);
    write$6(DEPT_KEY, list.filter((d) => d.id !== id));
    return delay(ok(true));
  },
  // Designations
  async listDesignations() {
    const list = read$6(DESIG_KEY, DEFAULT_DESIG);
    if (read$6(DESIG_KEY, null) === null) write$6(DESIG_KEY, list);
    return delay(ok(list));
  },
  async upsertDesignation(input) {
    const list = read$6(DESIG_KEY, []);
    if (input.id) {
      const idx = list.findIndex((d) => d.id === input.id);
      if (idx === -1) return delay(fail("Designation not found."));
      list[idx] = { ...list[idx], ...input };
      write$6(DESIG_KEY, list);
      return delay(ok(list[idx]));
    }
    const created = { ...input, id: uid("g_"), employeeCount: 0 };
    write$6(DESIG_KEY, [created, ...list]);
    return delay(ok(created));
  },
  async deleteDesignation(id) {
    const list = read$6(DESIG_KEY, []);
    write$6(DESIG_KEY, list.filter((d) => d.id !== id));
    return delay(ok(true));
  },
  // Work Calendar
  async getWorkCalendar() {
    return delay(ok(read$6(CAL_KEY, DEFAULT_CAL)));
  },
  async saveWorkCalendar(cal) {
    write$6(CAL_KEY, cal);
    return delay(ok(cal));
  },
  // Shifts
  async listShifts() {
    return delay(ok(read$6(SHIFT_KEY, [
      { id: "sh_gen", name: "General Shift", startTime: "09:30", endTime: "18:30", breakMinutes: 60, days: [1, 2, 3, 4, 5], graceMinutes: 15 }
    ])));
  },
  async upsertShift(input) {
    const list = read$6(SHIFT_KEY, []);
    if (input.id) {
      const idx = list.findIndex((s) => s.id === input.id);
      if (idx === -1) return delay(fail("Shift not found."));
      list[idx] = { ...input, id: input.id };
      write$6(SHIFT_KEY, list);
      return delay(ok(list[idx]));
    }
    const created = { ...input, id: uid("sh_") };
    write$6(SHIFT_KEY, [created, ...list]);
    return delay(ok(created));
  },
  async deleteShift(id) {
    write$6(SHIFT_KEY, read$6(SHIFT_KEY, []).filter((s) => s.id !== id));
    return delay(ok(true));
  },
  // Holidays
  async getNationalHolidays(country) {
    const base = NATIONAL_HOLIDAYS_BY_COUNTRY[country] ?? NATIONAL_HOLIDAYS_BY_COUNTRY["United States"];
    const toggles = read$6(NAT_HOL_KEY, {});
    return delay(ok(base.map((h) => ({
      id: `nh_${h.date}`,
      name: h.name,
      date: h.date,
      observed: toggles[`nh_${h.date}`] ?? true
    }))));
  },
  async toggleNationalHoliday(id, observed) {
    const toggles = read$6(NAT_HOL_KEY, {});
    toggles[id] = observed;
    write$6(NAT_HOL_KEY, toggles);
    return delay(ok(true));
  },
  async listCompanyHolidays() {
    return delay(ok(read$6(HOL_KEY, [])));
  },
  async upsertCompanyHoliday(input) {
    const list = read$6(HOL_KEY, []);
    if (input.id) {
      const idx = list.findIndex((h) => h.id === input.id);
      if (idx === -1) return delay(fail("Holiday not found."));
      list[idx] = { ...input, id: input.id };
      write$6(HOL_KEY, list);
      return delay(ok(list[idx]));
    }
    const created = { ...input, id: uid("ch_") };
    write$6(HOL_KEY, [created, ...list]);
    return delay(ok(created));
  },
  async deleteCompanyHoliday(id) {
    write$6(HOL_KEY, read$6(HOL_KEY, []).filter((h) => h.id !== id));
    return delay(ok(true));
  }
};
const TYPES_KEY = "hrms.leave.types";
const POLICIES_KEY = "hrms.leave.policies";
const REQUESTS_KEY = "hrms.leave.requests";
const ADJUSTMENTS_KEY = "hrms.leave.adjustments";
const ASSIGN_KEY = "hrms.leave.policyAssignments";
const ISO_RE = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/;
function reviver(_k, v) {
  if (typeof v === "string" && ISO_RE.test(v)) return new Date(v);
  return v;
}
function read$5(key, fallback) {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw, reviver) : fallback;
  } catch {
    return fallback;
  }
}
function write$5(key, value) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(key, JSON.stringify(value));
}
const DEFAULT_TYPES = [
  {
    id: "lt_annual",
    name: "Annual Leave",
    code: "AL",
    category: "earned",
    description: "Planned time off accrued through the year.",
    isPaid: true,
    applicableGender: "all",
    allowHalfDay: true,
    documentRequired: "never",
    minDaysPerRequest: 0.5,
    maxDaysPerRequest: 15,
    accrualType: "monthly",
    annualAllocation: 18,
    carryForwardMax: 10,
    carryForwardLapseDate: "03-31",
    encashmentAllowed: true,
    encashmentMaxDays: 5,
    color: "#2563EB",
    isActive: true
  },
  {
    id: "lt_sick",
    name: "Sick Leave",
    code: "SL",
    category: "statutory",
    description: "For illness and medical recovery.",
    isPaid: true,
    applicableGender: "all",
    allowHalfDay: true,
    documentRequired: "after_n_days",
    documentAfterDays: 3,
    minDaysPerRequest: 0.5,
    maxDaysPerRequest: 10,
    accrualType: "upfront",
    annualAllocation: 12,
    carryForwardMax: 0,
    encashmentAllowed: false,
    color: "#DC2626",
    isActive: true
  },
  {
    id: "lt_casual",
    name: "Casual Leave",
    code: "CL",
    category: "earned",
    description: "Short-notice personal time off.",
    isPaid: true,
    applicableGender: "all",
    allowHalfDay: true,
    documentRequired: "never",
    minDaysPerRequest: 0.5,
    maxDaysPerRequest: 3,
    accrualType: "quarterly",
    annualAllocation: 8,
    carryForwardMax: 0,
    encashmentAllowed: false,
    color: "#F59E0B",
    isActive: true
  },
  {
    id: "lt_maternity",
    name: "Maternity Leave",
    code: "ML",
    category: "statutory",
    description: "Statutory maternity entitlement.",
    isPaid: true,
    applicableGender: "female",
    allowHalfDay: false,
    documentRequired: "always",
    minDaysPerRequest: 1,
    accrualType: "on_service_completion",
    annualAllocation: 182,
    encashmentAllowed: false,
    color: "#DB2777",
    isActive: true
  },
  {
    id: "lt_paternity",
    name: "Paternity Leave",
    code: "PL",
    category: "statutory",
    description: "Statutory paternity entitlement.",
    isPaid: true,
    applicableGender: "male",
    allowHalfDay: false,
    documentRequired: "always",
    minDaysPerRequest: 1,
    maxDaysPerRequest: 15,
    accrualType: "on_service_completion",
    annualAllocation: 15,
    encashmentAllowed: false,
    color: "#0891B2",
    isActive: true
  },
  {
    id: "lt_lop",
    name: "Loss of Pay",
    code: "LOP",
    category: "loss_of_pay",
    description: "Unpaid leave once balances are exhausted.",
    isPaid: false,
    applicableGender: "all",
    allowHalfDay: true,
    documentRequired: "never",
    minDaysPerRequest: 0.5,
    accrualType: "upfront",
    annualAllocation: 0,
    encashmentAllowed: false,
    color: "#6B7280",
    isActive: true
  }
];
const DEFAULT_POLICIES = [
  {
    id: "lp_standard",
    name: "Standard Policy",
    description: "Applies to all full-time employees.",
    allocations: [
      { leaveTypeId: "lt_annual" },
      { leaveTypeId: "lt_sick" },
      { leaveTypeId: "lt_casual" },
      { leaveTypeId: "lt_maternity" },
      { leaveTypeId: "lt_paternity" },
      { leaveTypeId: "lt_lop" }
    ],
    eligibility: { employmentTypes: ["full_time"] },
    isDefault: true
  },
  {
    id: "lp_intern",
    name: "Intern & Contract Policy",
    description: "Reduced allocation for interns and contractors.",
    allocations: [
      { leaveTypeId: "lt_casual", daysOverride: 6 },
      { leaveTypeId: "lt_sick", daysOverride: 6 },
      { leaveTypeId: "lt_lop" }
    ],
    eligibility: { employmentTypes: ["intern", "contract", "part_time"] },
    isDefault: false
  }
];
function daysFromNow$1(n) {
  const d = startOfDay(/* @__PURE__ */ new Date());
  d.setDate(d.getDate() + n);
  return d;
}
function seedRequests(employees) {
  if (!employees.length) return [];
  const pick = (i) => employees[i % employees.length];
  const mk = (i, leaveTypeId, startOffset, len, status, reason, twoLevel = false) => {
    const e = pick(i);
    const start = daysFromNow$1(startOffset);
    const end = daysFromNow$1(startOffset + len - 1);
    return {
      id: uid("lr_"),
      employeeId: e.id,
      employeeName: `${e.firstName} ${e.lastName}`,
      departmentId: e.departmentId,
      leaveTypeId,
      startDate: start,
      endDate: end,
      isHalfDay: false,
      workingDays: len,
      reason,
      status,
      appliedAt: daysFromNow$1(startOffset - 7),
      approvals: status === "approved" || status === "rejected" ? [{
        id: uid("la_"),
        requestId: "",
        level: "manager",
        approverId: e.reportingManagerId ?? "mgr",
        approverName: "Reporting Manager",
        action: status === "approved" ? "approved" : "rejected",
        comment: status === "approved" ? "Approved — enjoy your break." : "Team capacity is tight that week.",
        actionAt: daysFromNow$1(startOffset - 5)
      }] : [],
      twoLevel
    };
  };
  return [
    mk(0, "lt_annual", 6, 5, "pending", "Family trip to Coorg.", true),
    mk(1, "lt_sick", -2, 2, "pending", "Viral fever, doctor advised rest."),
    mk(2, "lt_casual", 3, 1, "pending", "House shifting."),
    mk(3, "lt_annual", 12, 3, "pending", "Wedding in the family.", true),
    mk(4, "lt_annual", -20, 4, "approved", "Diwali break."),
    mk(5, "lt_sick", -35, 1, "approved", "Migraine."),
    mk(6, "lt_casual", -12, 2, "approved", "Personal errands."),
    mk(7, "lt_annual", -60, 6, "rejected", "Long vacation."),
    mk(8, "lt_annual", 1, 2, "approved", "Short getaway."),
    mk(9, "lt_casual", 0, 1, "approved", "Personal work."),
    mk(10, "lt_sick", 0, 1, "approved", "Recovering from flu."),
    mk(11, "lt_annual", 20, 5, "pending", "Trekking in Himachal.")
  ];
}
let seeded = false;
async function ensureSeed$3() {
  const res = await listEmployees();
  const employees = res.data ?? [];
  if (typeof window === "undefined") return employees;
  if (!window.localStorage.getItem(TYPES_KEY)) write$5(TYPES_KEY, DEFAULT_TYPES);
  if (!window.localStorage.getItem(POLICIES_KEY)) write$5(POLICIES_KEY, DEFAULT_POLICIES);
  if (!window.localStorage.getItem(REQUESTS_KEY)) write$5(REQUESTS_KEY, seedRequests(employees));
  if (!window.localStorage.getItem(ADJUSTMENTS_KEY)) write$5(ADJUSTMENTS_KEY, []);
  seeded = true;
  return employees;
}
function rawTypes() {
  return read$5(TYPES_KEY, DEFAULT_TYPES);
}
function rawPolicies() {
  return read$5(POLICIES_KEY, DEFAULT_POLICIES);
}
function rawRequests() {
  return read$5(REQUESTS_KEY, []);
}
function rawAdjustments() {
  return read$5(ADJUSTMENTS_KEY, []);
}
function assignments() {
  return read$5(ASSIGN_KEY, {});
}
function hydrateRequest(r, employees, types) {
  const emp = employees.find((e) => e.id === r.employeeId) ?? null;
  const lt = types.find((t) => t.id === r.leaveTypeId) ?? types[0];
  return {
    ...r,
    employee: emp,
    leaveType: lt,
    approvals: r.approvals.map((a) => ({
      ...a,
      approver: employees.find((e) => e.id === a.approverId) ?? null
    }))
  };
}
function hydratePolicy(p, types, employees) {
  const assigned = assignments();
  const count = employees.filter((e) => resolvePolicyId(e, assigned) === p.id).length;
  return {
    ...p,
    allocations: p.allocations.map((a) => {
      const lt = types.find((t) => t.id === a.leaveTypeId);
      return lt ? { leaveTypeId: a.leaveTypeId, leaveType: lt, daysOverride: a.daysOverride } : null;
    }).filter((a) => a !== null),
    employeeCount: count
  };
}
function resolvePolicyId(employee, assigned) {
  if (assigned[employee.id]) return assigned[employee.id];
  const policies = rawPolicies();
  const match = policies.find(
    (p) => !p.isDefault && p.eligibility.employmentTypes?.includes(employee.employmentType)
  );
  if (match) return match.id;
  return policies.find((p) => p.isDefault)?.id ?? policies[0]?.id ?? "";
}
function monthsElapsed(year) {
  const now = /* @__PURE__ */ new Date();
  if (now.getFullYear() > year) return 12;
  if (now.getFullYear() < year) return 0;
  return now.getMonth() + 1;
}
function accruedFor(type, allocated, year) {
  const m = monthsElapsed(year);
  switch (type.accrualType) {
    case "monthly":
      return Math.round(allocated / 12 * m * 2) / 2;
    case "quarterly":
      return Math.round(allocated / 4 * Math.ceil(m / 3) * 2) / 2;
    case "on_service_completion":
      return allocated;
    case "upfront":
    default:
      return allocated;
  }
}
function computeBalances(employee, year, types, requests, adjustments) {
  const policy = rawPolicies().find((p) => p.id === resolvePolicyId(employee, assignments()));
  const allocs = policy?.allocations ?? [];
  return allocs.map((a) => {
    const lt = types.find((t) => t.id === a.leaveTypeId);
    if (!lt || !lt.isActive) return null;
    if (lt.applicableGender !== "all" && employee.gender && employee.gender !== lt.applicableGender) return null;
    const allocated = a.daysOverride ?? lt.annualAllocation;
    const mine = requests.filter(
      (r) => r.employeeId === employee.id && r.leaveTypeId === lt.id && r.startDate.getFullYear() === year
    );
    const used = mine.filter((r) => r.status === "approved" || r.status === "auto_approved").reduce((s, r) => s + r.workingDays, 0);
    const pending = mine.filter((r) => r.status === "pending").reduce((s, r) => s + r.workingDays, 0);
    const adj = adjustments.filter((x) => x.employeeId === employee.id && x.leaveTypeId === lt.id).reduce((s, x) => s + x.adjustment, 0);
    const carried = lt.carryForwardMax ? Math.min(lt.carryForwardMax, 3) : 0;
    const accrued = accruedFor(lt, allocated, year) + adj;
    return {
      employeeId: employee.id,
      leaveTypeId: lt.id,
      leaveType: lt,
      year,
      allocated,
      accrued,
      used,
      pending,
      carried,
      encashed: 0,
      available: Math.round((accrued + carried - used - pending) * 2) / 2
    };
  }).filter((b) => b !== null);
}
async function calendarContext() {
  const [cal, hol, nat] = await Promise.all([
    settingsApi.getWorkCalendar(),
    settingsApi.listCompanyHolidays(),
    settingsApi.getNationalHolidays("IN")
  ]);
  const working = new Set(cal.data?.workingDays ?? [1, 2, 3, 4, 5]);
  const nonWorkingDays = [0, 1, 2, 3, 4, 5, 6].filter((d) => !working.has(d));
  const holidays = [
    ...(hol.data ?? []).map((h) => /* @__PURE__ */ new Date(`${h.date}T00:00:00`)),
    ...(nat.data ?? []).filter((h) => h.observed).map((h) => /* @__PURE__ */ new Date(`${h.date}T00:00:00`))
  ].filter((d) => !Number.isNaN(d.getTime()));
  return { nonWorkingDays, holidays };
}
const leaveApi = {
  async getCalendarContext() {
    return calendarContext();
  },
  async listLeaveTypes(includeInactive = true) {
    await ensureSeed$3();
    const list = rawTypes().filter((t) => includeInactive || t.isActive);
    return delay(ok(list));
  },
  async upsertLeaveType(input) {
    await ensureSeed$3();
    const list = rawTypes();
    if (list.some((t) => t.code.toLowerCase() === input.code.toLowerCase() && t.id !== input.id)) {
      return fail("A leave type with this code already exists.", "duplicate_code");
    }
    if (input.id) {
      const next = list.map((t) => t.id === input.id ? { ...t, ...input, id: t.id } : t);
      write$5(TYPES_KEY, next);
      return delay(ok(next.find((t) => t.id === input.id)));
    }
    const created = { ...input, id: uid("lt_") };
    write$5(TYPES_KEY, [...list, created]);
    return delay(ok(created));
  },
  async setLeaveTypeActive(id, isActive) {
    write$5(TYPES_KEY, rawTypes().map((t) => t.id === id ? { ...t, isActive } : t));
    return delay(ok(true), 150);
  },
  async deleteLeaveType(id) {
    await ensureSeed$3();
    const inUse = rawRequests().some((r) => r.leaveTypeId === id);
    if (inUse) return fail("This leave type is used by existing requests. Deactivate it instead.", "in_use");
    write$5(TYPES_KEY, rawTypes().filter((t) => t.id !== id));
    write$5(POLICIES_KEY, rawPolicies().map((p) => ({ ...p, allocations: p.allocations.filter((a) => a.leaveTypeId !== id) })));
    return delay(ok(true));
  },
  async listPolicies() {
    const employees = await ensureSeed$3();
    const types = rawTypes();
    return delay(ok(rawPolicies().map((p) => hydratePolicy(p, types, employees))));
  },
  async upsertPolicy(input) {
    await ensureSeed$3();
    const list = rawPolicies();
    if (input.id) {
      write$5(POLICIES_KEY, list.map((p) => p.id === input.id ? { ...p, ...input, id: p.id, isDefault: input.isDefault ?? p.isDefault } : p));
    } else {
      write$5(POLICIES_KEY, [...list, { ...input, id: uid("lp_"), isDefault: input.isDefault ?? false }]);
    }
    return delay(ok(true));
  },
  async setDefaultPolicy(id) {
    write$5(POLICIES_KEY, rawPolicies().map((p) => ({ ...p, isDefault: p.id === id })));
    return delay(ok(true), 150);
  },
  async deletePolicy(id) {
    const list = rawPolicies();
    const target = list.find((p) => p.id === id);
    if (target?.isDefault) return fail("The default policy cannot be deleted.", "is_default");
    write$5(POLICIES_KEY, list.filter((p) => p.id !== id));
    return delay(ok(true));
  },
  async assignPolicy(employeeId, policyId) {
    write$5(ASSIGN_KEY, { ...assignments(), [employeeId]: policyId });
    return delay(ok(true), 150);
  },
  async getPolicyForEmployee(employeeId) {
    const employees = await ensureSeed$3();
    const emp = employees.find((e) => e.id === employeeId);
    if (!emp) return ok(null);
    const p = rawPolicies().find((x) => x.id === resolvePolicyId(emp, assignments()));
    return delay(ok(p ? hydratePolicy(p, rawTypes(), employees) : null));
  },
  async listBalances(employeeId, year = (/* @__PURE__ */ new Date()).getFullYear()) {
    const employees = await ensureSeed$3();
    const emp = employees.find((e) => e.id === employeeId);
    if (!emp) return delay(ok([]));
    return delay(ok(computeBalances(emp, year, rawTypes(), rawRequests(), rawAdjustments())));
  },
  async listRequests(filters = {}) {
    const employees = await ensureSeed$3();
    const types = rawTypes();
    let list = rawRequests().map((r) => hydrateRequest(r, employees, types));
    if (filters.employeeId) list = list.filter((r) => r.employeeId === filters.employeeId);
    if (filters.managerId) {
      list = list.filter((r) => r.employee?.reportingManagerId === filters.managerId);
    }
    if (filters.statuses?.length) list = list.filter((r) => filters.statuses.includes(r.status));
    if (filters.leaveTypeId) list = list.filter((r) => r.leaveTypeId === filters.leaveTypeId);
    if (filters.departmentId) list = list.filter((r) => r.departmentId === filters.departmentId);
    if (filters.from && filters.to) {
      list = list.filter((r) => overlaps(r.startDate, r.endDate, filters.from, filters.to));
    }
    if (filters.q) {
      const q = filters.q.toLowerCase();
      list = list.filter((r) => r.employeeName.toLowerCase().includes(q) || (r.reason ?? "").toLowerCase().includes(q));
    }
    list.sort((a, b) => b.appliedAt.getTime() - a.appliedAt.getTime());
    return delay(ok(list));
  },
  async getRequest(id) {
    const employees = await ensureSeed$3();
    const found = rawRequests().find((r) => r.id === id);
    if (!found) return fail("Request not found", "not_found");
    return delay(ok(hydrateRequest(found, employees, rawTypes())));
  },
  /** Overlap check against the employee's own pending/approved leave. */
  async checkOverlap(employeeId, start, end, excludeId) {
    const employees = await ensureSeed$3();
    return rawRequests().filter((r) => r.employeeId === employeeId && r.id !== excludeId).filter((r) => r.status === "pending" || r.status === "approved" || r.status === "auto_approved").filter((r) => overlaps(r.startDate, r.endDate, start, end)).map((r) => hydrateRequest(r, employees, rawTypes()));
  },
  async createRequest(input) {
    const employees = await ensureSeed$3();
    const emp = employees.find((e) => e.id === input.employeeId);
    if (!emp) return fail("Employee not found", "not_found");
    const types = rawTypes();
    const lt = types.find((t) => t.id === input.leaveTypeId);
    if (!lt) return fail("Leave type not found", "not_found");
    const clash = await this.checkOverlap(emp.id, input.startDate, input.endDate);
    if (clash.length) {
      return fail("You already have leave in this date range.", "overlap");
    }
    const { nonWorkingDays, holidays } = await calendarContext();
    const workingDays = calculateWorkingDays(input.startDate, input.endDate, nonWorkingDays, holidays, input.isHalfDay);
    if (workingDays <= 0) {
      return fail("The selected range contains no working days.", "no_working_days");
    }
    if (workingDays < lt.minDaysPerRequest) {
      return fail(`${lt.name} requires at least ${lt.minDaysPerRequest} day(s).`, "min_days");
    }
    if (lt.maxDaysPerRequest && workingDays > lt.maxDaysPerRequest) {
      return fail(`${lt.name} allows a maximum of ${lt.maxDaysPerRequest} days per request.`, "max_days");
    }
    const balances = computeBalances(emp, input.startDate.getFullYear(), types, rawRequests(), rawAdjustments());
    const bal = balances.find((b) => b.leaveTypeId === lt.id);
    if (lt.category !== "loss_of_pay" && bal && workingDays > bal.available) {
      return fail(
        `Insufficient balance — you have ${bal.available} day(s) of ${lt.name} available.`,
        "insufficient_balance"
      );
    }
    const twoLevel = workingDays > 3;
    const record = {
      id: uid("lr_"),
      employeeId: emp.id,
      employeeName: `${emp.firstName} ${emp.lastName}`,
      departmentId: emp.departmentId,
      leaveTypeId: lt.id,
      startDate: startOfDay(input.startDate),
      endDate: startOfDay(input.endDate),
      isHalfDay: input.isHalfDay,
      halfDayPeriod: input.halfDayPeriod,
      workingDays,
      reason: input.reason,
      documentName: input.documentName,
      status: input.status ?? "pending",
      appliedAt: /* @__PURE__ */ new Date(),
      approvals: [],
      twoLevel
    };
    write$5(REQUESTS_KEY, [record, ...rawRequests()]);
    return delay(ok(hydrateRequest(record, employees, types)));
  },
  async cancelRequest(id, reason) {
    const list = rawRequests();
    const target = list.find((r) => r.id === id);
    if (!target) return fail("Request not found", "not_found");
    if (target.status === "approved" && startOfDay(target.startDate).getTime() < startOfDay(/* @__PURE__ */ new Date()).getTime()) {
      return fail("Leave that has already started cannot be cancelled.", "already_started");
    }
    write$5(
      REQUESTS_KEY,
      list.map((r) => r.id === id ? { ...r, status: "cancelled", cancelledAt: /* @__PURE__ */ new Date(), cancelReason: reason } : r)
    );
    return delay(ok(true));
  },
  async actOnRequest(input) {
    const employees = await ensureSeed$3();
    const list = rawRequests();
    const target = list.find((r) => r.id === input.id);
    if (!target) return fail("Request not found", "not_found");
    if (input.action === "rejected" && !input.comment?.trim()) {
      return fail("A comment is required when rejecting a request.", "comment_required");
    }
    const approval = {
      id: uid("la_"),
      requestId: target.id,
      level: input.level,
      approverId: input.approverId,
      approverName: input.approverName,
      action: input.action,
      comment: input.comment,
      actionAt: /* @__PURE__ */ new Date()
    };
    const approvals = [...target.approvals, approval];
    let status = target.status;
    if (input.action === "rejected") status = "rejected";
    else if (!target.twoLevel) status = "approved";
    else status = approvals.filter((a) => a.action === "approved").length >= 2 ? "approved" : "pending";
    const next = { ...target, approvals, status };
    write$5(REQUESTS_KEY, list.map((r) => r.id === input.id ? next : r));
    return delay(ok(hydrateRequest(next, employees, rawTypes())));
  },
  async bulkAct(ids, input) {
    let n = 0;
    for (const id of ids) {
      const r = await this.actOnRequest({ id, ...input });
      if (r.data) n += 1;
    }
    return ok(n);
  },
  async overrideDecision(id, action, actorName, comment) {
    const list = rawRequests();
    write$5(
      REQUESTS_KEY,
      list.map(
        (r) => r.id === id ? {
          ...r,
          status: action,
          approvals: [
            ...r.approvals,
            {
              id: uid("la_"),
              requestId: r.id,
              level: "hr_admin",
              approverId: "hr",
              approverName: actorName,
              action,
              comment: `HR override — ${comment}`,
              actionAt: /* @__PURE__ */ new Date()
            }
          ]
        } : r
      )
    );
    return delay(ok(true));
  },
  async listAdjustments(employeeId) {
    await ensureSeed$3();
    const list = rawAdjustments().filter((a) => !employeeId || a.employeeId === employeeId);
    return delay(ok(list.sort((a, b) => b.adjustedAt.getTime() - a.adjustedAt.getTime())));
  },
  async adjustBalance(input) {
    if (!input.reason.trim()) return fail("A reason is required for balance adjustments.", "reason_required");
    const record = { ...input, id: uid("ladj_"), adjustedAt: /* @__PURE__ */ new Date() };
    write$5(ADJUSTMENTS_KEY, [record, ...rawAdjustments()]);
    return delay(ok(true));
  },
  /** Approved leave for everybody in a date window — used by calendars. */
  async listTeamLeaves(from, to, opts = {}) {
    const employees = await ensureSeed$3();
    const types = rawTypes();
    const entries = rawRequests().filter((r) => r.status === "approved" || r.status === "auto_approved" || r.status === "pending").filter((r) => overlaps(r.startDate, r.endDate, from, to)).map((r) => hydrateRequest(r, employees, types)).filter((r) => !opts.departmentId || r.departmentId === opts.departmentId).filter((r) => !opts.managerId || r.employee?.reportingManagerId === opts.managerId).map((r) => ({
      employeeId: r.employeeId,
      employeeName: r.employeeName,
      leaveType: r.leaveType,
      startDate: r.startDate,
      endDate: r.endDate,
      isHalfDay: r.isHalfDay
    }));
    return delay(ok(entries), 120);
  },
  async getStats() {
    const employees = await ensureSeed$3();
    const list = rawRequests().map((r) => hydrateRequest(r, employees, rawTypes()));
    const today = startOfDay(/* @__PURE__ */ new Date());
    const pending = list.filter((r) => r.status === "pending").length;
    const onLeaveToday = list.filter(
      (r) => (r.status === "approved" || r.status === "auto_approved") && overlaps(r.startDate, r.endDate, today, today)
    ).length;
    const upcoming = list.filter((r) => r.status === "approved" && r.startDate.getTime() > today.getTime()).length;
    return delay(ok({ pending, onLeaveToday, upcoming, avgApprovalHours: 19 }), 120);
  },
  toKey,
  isSeeded: () => seeded
};
function pad2$1(n) {
  return String(n).padStart(2, "0");
}
function dateKey$1(d) {
  return `${d.getFullYear()}-${pad2$1(d.getMonth() + 1)}-${pad2$1(d.getDate())}`;
}
function parseHHmm(value) {
  const [h, m] = value.split(":").map(Number);
  return (h || 0) * 60 + (m || 0);
}
function formatMinutes(minutes) {
  const abs = Math.max(0, Math.round(minutes));
  const h = Math.floor(abs / 60);
  const m = abs % 60;
  if (h === 0) return `${m}m`;
  return `${h}h ${pad2$1(m)}m`;
}
function formatClock(iso2) {
  if (!iso2) return "—";
  const d = new Date(iso2);
  if (Number.isNaN(d.getTime())) return "—";
  return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false });
}
function minutesBetween(a, b) {
  return Math.max(0, Math.round((new Date(b).getTime() - new Date(a).getTime()) / 6e4));
}
function ipToLong(ip) {
  const parts = ip.trim().split(".");
  if (parts.length !== 4) return null;
  let out = 0;
  for (const p of parts) {
    const n = Number(p);
    if (!Number.isInteger(n) || n < 0 || n > 255) return null;
    out = out * 256 + n;
  }
  return out >>> 0;
}
function ipInCidr(ip, cidr) {
  const [range, bitsRaw] = cidr.split("/");
  const bits = bitsRaw === void 0 ? 32 : Number(bitsRaw);
  const ipLong = ipToLong(ip);
  const rangeLong = ipToLong(range);
  if (ipLong === null || rangeLong === null || !Number.isInteger(bits) || bits < 0 || bits > 32) return false;
  if (bits === 0) return true;
  const mask = 4294967295 << 32 - bits >>> 0;
  return (ipLong & mask) === (rangeLong & mask);
}
function isIpAllowed(ip, allowed) {
  if (!allowed.length) return true;
  return allowed.some((entry) => ipInCidr(ip, entry.trim()));
}
function haversineMeters(a, b) {
  const R = 6371e3;
  const toRad = (v) => v * Math.PI / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const s = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLng / 2) ** 2;
  return Math.round(2 * R * Math.asin(Math.sqrt(s)));
}
function findGeoFence(loc, fences) {
  for (const f of fences) {
    if (haversineMeters(loc, f) <= f.radiusMeters) return f;
  }
  return null;
}
function isWithinGeoFence(loc, fences) {
  if (!fences.length) return true;
  return findGeoFence(loc, fences) !== null;
}
function getCurrentPosition(timeoutMs = 6e3) {
  if (typeof navigator === "undefined" || !navigator.geolocation) return Promise.resolve(null);
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(
      (p) => resolve({ lat: p.coords.latitude, lng: p.coords.longitude }),
      () => resolve(null),
      { timeout: timeoutMs, maximumAge: 6e4 }
    );
  });
}
const RECORDS_KEY = "hrms.attendance.records";
const REG_KEY = "hrms.attendance.regularizations";
const SETTINGS_KEY$1 = "hrms.attendance.settings";
const SEED_KEY = "hrms.attendance.seeded.v1";
function read$4(key, fallback) {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}
function write$4(key, value) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(key, JSON.stringify(value));
}
const DEFAULT_ATTENDANCE_SETTINGS = {
  captureMode: "web",
  enforceIp: false,
  allowedIps: ["192.168.0.0/16", "10.0.0.0/8"],
  enforceGeo: false,
  geoFences: [
    { id: "gf_hq", name: "Head office — Bengaluru", lat: 12.9716, lng: 77.5946, radiusMeters: 250 }
  ],
  lateGraceMinutes: 15,
  halfDayMinutes: 240,
  fullDayMinutes: 480,
  overtimeAfterMinutes: 540,
  autoClockOutTime: "23:30",
  breakTrackingEnabled: true,
  allowRegularization: true,
  regularizationWindowDays: 30,
  maxRegularizationsPerMonth: 3
};
function rawRecords() {
  return read$4(RECORDS_KEY, []);
}
function saveRecords(list) {
  write$4(RECORDS_KEY, list);
}
function rawRegs() {
  return read$4(REG_KEY, []);
}
function saveRegs(list) {
  write$4(REG_KEY, list);
}
function getSettingsSync() {
  return { ...DEFAULT_ATTENDANCE_SETTINGS, ...read$4(SETTINGS_KEY$1, {}) };
}
let calCache = null;
async function calendar() {
  if (calCache) return calCache;
  const [cal, hol, nat] = await Promise.all([
    settingsApi.getWorkCalendar(),
    settingsApi.listCompanyHolidays(),
    settingsApi.getNationalHolidays("IN")
  ]);
  const holidays = /* @__PURE__ */ new Map();
  for (const h of hol.data ?? []) holidays.set(h.date, h.name);
  for (const h of (nat.data ?? []).filter((x) => x.observed)) holidays.set(h.date, h.name);
  calCache = { workingDays: cal.data?.workingDays ?? [1, 2, 3, 4, 5], holidays };
  return calCache;
}
function defaultShift(shifts, employee) {
  return shifts.find((s) => s.id === employee.shiftId) ?? shifts[0];
}
function deriveRecord(rec, settings, shift) {
  if (rec.status === "holiday" || rec.status === "week_off" || rec.status === "on_leave") return rec;
  const breakMinutes = rec.breaks.reduce((sum, b) => b.end ? sum + minutesBetween(b.start, b.end) : sum, 0);
  const gross = rec.clockIn && rec.clockOut ? minutesBetween(rec.clockIn, rec.clockOut) : 0;
  const workedMinutes = Math.max(0, gross - breakMinutes);
  let lateMinutes = 0;
  let earlyExitMinutes = 0;
  if (shift && rec.clockIn) {
    const inD = new Date(rec.clockIn);
    const actual = inD.getHours() * 60 + inD.getMinutes();
    lateMinutes = Math.max(0, actual - parseHHmm(shift.startTime) - shift.graceMinutes);
  }
  if (shift && rec.clockOut) {
    const outD = new Date(rec.clockOut);
    const actual = outD.getHours() * 60 + outD.getMinutes();
    earlyExitMinutes = Math.max(0, parseHHmm(shift.endTime) - actual);
  }
  let status = rec.status;
  if (!rec.clockIn) {
    status = rec.status === "absent" ? "absent" : "not_marked";
  } else if (!rec.clockOut) {
    status = lateMinutes > 0 ? "late" : "present";
  } else if (workedMinutes < settings.halfDayMinutes) {
    status = "half_day";
  } else if (lateMinutes > 0) {
    status = "late";
  } else {
    status = "present";
  }
  return {
    ...rec,
    breakMinutes,
    workedMinutes,
    lateMinutes,
    earlyExitMinutes,
    overtimeMinutes: Math.max(0, workedMinutes - settings.overtimeAfterMinutes),
    status
  };
}
function rand(seedRef) {
  seedRef.v = (seedRef.v * 1664525 + 1013904223) % 4294967296;
  return seedRef.v / 4294967296;
}
async function ensureSeed$2() {
  const emps = (await listEmployees()).data ?? [];
  if (typeof window === "undefined") return emps;
  if (window.localStorage.getItem(SEED_KEY)) return emps;
  const settings = getSettingsSync();
  const cal = await calendar();
  const shifts = (await settingsApi.listShifts()).data ?? [];
  const out = [];
  const today = /* @__PURE__ */ new Date();
  today.setHours(0, 0, 0, 0);
  emps.forEach((emp, ei) => {
    const seedRef = { v: 97 + ei * 7919 };
    const shift = defaultShift(shifts, emp);
    for (let back = 89; back >= 0; back -= 1) {
      const d = new Date(today);
      d.setDate(d.getDate() - back);
      const key = dateKey$1(d);
      const base = {
        id: `att_${emp.id}_${key}`,
        employeeId: emp.id,
        employeeName: `${emp.firstName} ${emp.lastName}`,
        departmentId: emp.departmentId,
        date: key,
        shiftId: shift?.id,
        shiftName: shift?.name,
        breaks: [],
        workedMinutes: 0,
        breakMinutes: 0,
        overtimeMinutes: 0,
        lateMinutes: 0,
        earlyExitMinutes: 0,
        status: "not_marked",
        source: "web",
        regularized: false
      };
      if (cal.holidays.has(key)) {
        out.push({ ...base, status: "holiday", source: "system", holidayName: cal.holidays.get(key) });
        continue;
      }
      if (!cal.workingDays.includes(d.getDay())) {
        out.push({ ...base, status: "week_off", source: "system" });
        continue;
      }
      if (back === 0) {
        out.push(base);
        continue;
      }
      const roll = rand(seedRef);
      if (roll < 0.05) {
        out.push({ ...base, status: "on_leave", source: "system", leaveTypeName: "Annual Leave" });
        continue;
      }
      if (roll < 0.08) {
        out.push({ ...base, status: "absent", source: "system" });
        continue;
      }
      const startMin = parseHHmm(shift?.startTime ?? "09:30") + Math.round((rand(seedRef) - 0.35) * 60);
      const durationMin = 470 + Math.round(rand(seedRef) * 130);
      const inD = new Date(d);
      inD.setHours(Math.floor(startMin / 60), startMin % 60, 0, 0);
      const outD = new Date(inD.getTime() + durationMin * 6e4);
      const bStart = new Date(inD.getTime() + 210 * 6e4);
      const bEnd = new Date(bStart.getTime() + (25 + Math.round(rand(seedRef) * 25)) * 6e4);
      out.push(
        deriveRecord(
          {
            ...base,
            clockIn: inD.toISOString(),
            clockOut: outD.toISOString(),
            breaks: settings.breakTrackingEnabled ? [{ id: uid("brk_"), start: bStart.toISOString(), end: bEnd.toISOString() }] : [],
            source: roll > 0.9 ? "biometric" : "web",
            status: "present"
          },
          settings,
          shift
        )
      );
    }
  });
  saveRecords(out);
  const regs = [];
  emps.slice(0, 4).forEach((emp, i) => {
    const d = new Date(today);
    d.setDate(d.getDate() - (3 + i));
    regs.push({
      id: uid("reg_"),
      employeeId: emp.id,
      employeeName: `${emp.firstName} ${emp.lastName}`,
      departmentId: emp.departmentId,
      date: dateKey$1(d),
      type: i % 2 === 0 ? "missing_clock_out" : "work_from_home",
      requestedClockIn: "09:30",
      requestedClockOut: "18:30",
      reason: i % 2 === 0 ? "Left for a client meeting and forgot to punch out." : "Approved WFH day, VPN punch did not register.",
      status: "pending",
      appliedAt: new Date(d.getTime() + 36 * 36e5).toISOString()
    });
  });
  saveRegs(regs);
  window.localStorage.setItem(SEED_KEY, "1");
  return emps;
}
function findOrCreateToday(list, emp, shift) {
  const key = dateKey$1(/* @__PURE__ */ new Date());
  const found = list.find((r) => r.employeeId === emp.id && r.date === key);
  if (found) return found;
  const created = {
    id: `att_${emp.id}_${key}`,
    employeeId: emp.id,
    employeeName: `${emp.firstName} ${emp.lastName}`,
    departmentId: emp.departmentId,
    date: key,
    shiftId: shift?.id,
    shiftName: shift?.name,
    breaks: [],
    workedMinutes: 0,
    breakMinutes: 0,
    overtimeMinutes: 0,
    lateMinutes: 0,
    earlyExitMinutes: 0,
    status: "not_marked",
    source: "web",
    regularized: false
  };
  list.push(created);
  return created;
}
function upsert(list, rec) {
  const i = list.findIndex((r) => r.employeeId === rec.employeeId && r.date === rec.date);
  if (i === -1) return [...list, rec];
  const next = [...list];
  next[i] = rec;
  return next;
}
function currentDeviceIp() {
  if (typeof window === "undefined") return "192.168.1.20";
  const stored = window.localStorage.getItem("hrms.attendance.deviceIp");
  if (stored) return stored;
  const ip = "192.168.1.20";
  window.localStorage.setItem("hrms.attendance.deviceIp", ip);
  return ip;
}
async function guardPunch(location) {
  const settings = getSettingsSync();
  if (settings.enforceIp && !isIpAllowed(currentDeviceIp(), settings.allowedIps)) {
    return `Your network (${currentDeviceIp()}) is not on the office allow-list.`;
  }
  if (settings.enforceGeo) {
    if (!location) return "Location access is required to clock in from this device.";
    if (!isWithinGeoFence(location, settings.geoFences)) return "You are outside every approved office location.";
  }
  return null;
}
const attendanceApi = {
  async getSettings() {
    return delay(ok(getSettingsSync()));
  },
  async saveSettings(patch) {
    const next = { ...getSettingsSync(), ...patch };
    write$4(SETTINGS_KEY$1, next);
    return delay(ok(next));
  },
  async upsertGeoFence(fence) {
    const s = getSettingsSync();
    const geoFences = fence.id ? s.geoFences.map((f) => f.id === fence.id ? { ...f, ...fence, id: f.id } : f) : [...s.geoFences, { ...fence, id: uid("gf_") }];
    return attendanceApi.saveSettings({ geoFences });
  },
  async deleteGeoFence(id) {
    const s = getSettingsSync();
    return attendanceApi.saveSettings({ geoFences: s.geoFences.filter((f) => f.id !== id) });
  },
  async getShiftFor(employeeId) {
    const emps = await ensureSeed$2();
    const emp = emps.find((e) => e.id === employeeId);
    const shifts = (await settingsApi.listShifts()).data ?? [];
    return emp ? defaultShift(shifts, emp) : shifts[0];
  },
  async getToday(employeeId) {
    const emps = await ensureSeed$2();
    const emp = emps.find((e) => e.id === employeeId);
    if (!emp) return fail("Employee not found", "not_found");
    const shifts = (await settingsApi.listShifts()).data ?? [];
    const list = rawRecords();
    const rec = findOrCreateToday(list, emp, defaultShift(shifts, emp));
    saveRecords(list);
    return delay(ok(deriveRecord(rec, getSettingsSync(), defaultShift(shifts, emp))), 120);
  },
  async clockIn(employeeId, opts = {}) {
    const emps = await ensureSeed$2();
    const emp = emps.find((e) => e.id === employeeId);
    if (!emp) return fail("Employee not found", "not_found");
    const blocked = await guardPunch(opts.location);
    if (blocked) return fail(blocked, "blocked");
    const shifts = (await settingsApi.listShifts()).data ?? [];
    const shift = defaultShift(shifts, emp);
    let list = rawRecords();
    const rec = findOrCreateToday(list, emp, shift);
    if (rec.clockIn) return fail("You are already clocked in for today.", "already");
    const next = deriveRecord(
      { ...rec, clockIn: (/* @__PURE__ */ new Date()).toISOString(), source: "web", clockInLocation: opts.location, ip: currentDeviceIp() },
      getSettingsSync(),
      shift
    );
    list = upsert(list, next);
    saveRecords(list);
    return delay(ok(next), 150);
  },
  async clockOut(employeeId, opts = {}) {
    const emps = await ensureSeed$2();
    const emp = emps.find((e) => e.id === employeeId);
    if (!emp) return fail("Employee not found", "not_found");
    const blocked = await guardPunch(opts.location);
    if (blocked) return fail(blocked, "blocked");
    const shifts = (await settingsApi.listShifts()).data ?? [];
    const shift = defaultShift(shifts, emp);
    let list = rawRecords();
    const rec = findOrCreateToday(list, emp, shift);
    if (!rec.clockIn) return fail("Clock in before clocking out.", "invalid");
    if (rec.clockOut) return fail("You already clocked out today.", "already");
    const now = (/* @__PURE__ */ new Date()).toISOString();
    const breaks = rec.breaks.map((b) => b.end ? b : { ...b, end: now });
    const next = deriveRecord({ ...rec, breaks, clockOut: now, clockOutLocation: opts.location }, getSettingsSync(), shift);
    list = upsert(list, next);
    saveRecords(list);
    return delay(ok(next), 150);
  },
  async startBreak(employeeId) {
    const emps = await ensureSeed$2();
    const emp = emps.find((e) => e.id === employeeId);
    if (!emp) return fail("Employee not found", "not_found");
    const shift = await attendanceApi.getShiftFor(employeeId);
    let list = rawRecords();
    const rec = findOrCreateToday(list, emp, shift);
    if (!rec.clockIn || rec.clockOut) return fail("You need an open shift to take a break.", "invalid");
    if (rec.breaks.some((b) => !b.end)) return fail("A break is already running.", "already");
    const next = deriveRecord(
      { ...rec, breaks: [...rec.breaks, { id: uid("brk_"), start: (/* @__PURE__ */ new Date()).toISOString() }] },
      getSettingsSync(),
      shift
    );
    list = upsert(list, next);
    saveRecords(list);
    return delay(ok(next), 120);
  },
  async endBreak(employeeId) {
    const emps = await ensureSeed$2();
    const emp = emps.find((e) => e.id === employeeId);
    if (!emp) return fail("Employee not found", "not_found");
    const shift = await attendanceApi.getShiftFor(employeeId);
    let list = rawRecords();
    const rec = findOrCreateToday(list, emp, shift);
    const open = rec.breaks.find((b) => !b.end);
    if (!open) return fail("No break is running.", "invalid");
    const next = deriveRecord(
      { ...rec, breaks: rec.breaks.map((b) => b.id === open.id ? { ...b, end: (/* @__PURE__ */ new Date()).toISOString() } : b) },
      getSettingsSync(),
      shift
    );
    list = upsert(list, next);
    saveRecords(list);
    return delay(ok(next), 120);
  },
  async listRecords(filters = {}) {
    await ensureSeed$2();
    let list = rawRecords();
    if (filters.employeeId) list = list.filter((r) => r.employeeId === filters.employeeId);
    if (filters.employeeIds?.length) list = list.filter((r) => filters.employeeIds.includes(r.employeeId));
    if (filters.departmentId) list = list.filter((r) => r.departmentId === filters.departmentId);
    if (filters.from) list = list.filter((r) => r.date >= filters.from);
    if (filters.to) list = list.filter((r) => r.date <= filters.to);
    if (filters.statuses?.length) list = list.filter((r) => filters.statuses.includes(r.status));
    if (filters.q) {
      const q = filters.q.toLowerCase();
      list = list.filter((r) => r.employeeName.toLowerCase().includes(q));
    }
    list.sort((a, b) => a.date === b.date ? a.employeeName.localeCompare(b.employeeName) : b.date.localeCompare(a.date));
    return delay(ok(list), 180);
  },
  async getMonth(employeeId, year, month) {
    const from = `${year}-${pad2$1(month + 1)}-01`;
    const to = `${year}-${pad2$1(month + 1)}-${pad2$1(new Date(year, month + 1, 0).getDate())}`;
    return attendanceApi.listRecords({ employeeId, from, to });
  },
  async getSummary(employeeId, from, to) {
    const res = await attendanceApi.listRecords({ employeeId, from, to });
    const list = res.data ?? [];
    const count = (s) => list.filter((r) => r.status === s).length;
    const workedMinutes = list.reduce((n, r) => n + r.workedMinutes, 0);
    const workingDays = list.filter((r) => r.status !== "week_off" && r.status !== "holiday").length;
    const attended = count("present") + count("late") + count("half_day") * 0.5;
    const withWork = list.filter((r) => r.workedMinutes > 0).length;
    return ok({
      totalDays: list.length,
      present: count("present"),
      late: count("late"),
      halfDay: count("half_day"),
      absent: count("absent"),
      onLeave: count("on_leave"),
      weekOff: count("week_off"),
      holiday: count("holiday"),
      notMarked: count("not_marked"),
      workedMinutes,
      avgWorkedMinutes: withWork ? Math.round(workedMinutes / withWork) : 0,
      overtimeMinutes: list.reduce((n, r) => n + r.overtimeMinutes, 0),
      attendancePct: workingDays ? Math.round(attended / workingDays * 100) : 0
    });
  },
  async teamToday(opts = {}) {
    const emps = await ensureSeed$2();
    const today = dateKey$1(/* @__PURE__ */ new Date());
    const records = rawRecords().filter((r) => r.date === today);
    let people = emps;
    if (opts.managerId) people = people.filter((e) => e.reportingManagerId === opts.managerId);
    if (opts.departmentId) people = people.filter((e) => e.departmentId === opts.departmentId);
    const rows = people.map((e) => {
      const rec = records.find((r) => r.employeeId === e.id);
      return {
        employeeId: e.id,
        employeeName: `${e.firstName} ${e.lastName}`,
        departmentId: e.departmentId,
        avatarUrl: e.avatarUrl,
        status: rec?.status ?? "not_marked",
        clockIn: rec?.clockIn,
        clockOut: rec?.clockOut,
        workedMinutes: rec?.workedMinutes ?? 0,
        lateMinutes: rec?.lateMinutes ?? 0
      };
    });
    rows.sort((a, b) => a.employeeName.localeCompare(b.employeeName));
    return delay(ok(rows), 180);
  },
  /** Manual create/edit of a single day by HR. */
  async saveManualEntry(input) {
    const emps = await ensureSeed$2();
    const emp = emps.find((e) => e.id === input.employeeId);
    if (!emp) return fail("Employee not found", "not_found");
    if (input.clockIn && input.clockOut && parseHHmm(input.clockOut) <= parseHHmm(input.clockIn)) {
      return fail("Clock out must be after clock in.", "invalid");
    }
    const shift = await attendanceApi.getShiftFor(input.employeeId);
    const list = rawRecords();
    const existing = list.find((r) => r.employeeId === input.employeeId && r.date === input.date);
    const base = existing ?? {
      id: `att_${input.employeeId}_${input.date}`,
      employeeId: emp.id,
      employeeName: `${emp.firstName} ${emp.lastName}`,
      departmentId: emp.departmentId,
      date: input.date,
      shiftId: shift?.id,
      shiftName: shift?.name,
      breaks: [],
      workedMinutes: 0,
      breakMinutes: 0,
      overtimeMinutes: 0,
      lateMinutes: 0,
      earlyExitMinutes: 0,
      status: "not_marked",
      source: "manual",
      regularized: false
    };
    const toIso = (hhmm) => {
      if (!hhmm) return void 0;
      const d = /* @__PURE__ */ new Date(`${input.date}T00:00:00`);
      d.setMinutes(parseHHmm(hhmm));
      return d.toISOString();
    };
    const next = deriveRecord(
      {
        ...base,
        clockIn: input.clockIn ? toIso(input.clockIn) : base.clockIn,
        clockOut: input.clockOut ? toIso(input.clockOut) : base.clockOut,
        status: input.status ?? base.status,
        note: input.note ?? base.note,
        source: input.source ?? "manual",
        regularized: true
      },
      getSettingsSync(),
      shift
    );
    saveRecords(upsert(list, next));
    return delay(ok(next));
  },
  /**
   * CSV import. Expected header: employeeCode,date,clockIn,clockOut
   * Returns per-row outcome so the UI can show a preview table.
   */
  async importCsv(text, commit) {
    const emps = await ensureSeed$2();
    const lines = text.trim().split(/\r?\n/).filter(Boolean);
    if (!lines.length) return fail("The file is empty.", "invalid");
    const start = lines[0].toLowerCase().includes("employee") ? 1 : 0;
    const rows = [];
    for (let i = start; i < lines.length; i += 1) {
      const [code, date, cin, cout] = lines[i].split(",").map((v) => v?.trim());
      const emp = emps.find((e) => e.employeeCode.toLowerCase() === (code ?? "").toLowerCase());
      const valid = /^\d{4}-\d{2}-\d{2}$/.test(date ?? "");
      rows.push({
        line: i + 1,
        employeeId: emp?.id,
        employeeName: emp ? `${emp.firstName} ${emp.lastName}` : void 0,
        date: date ?? "",
        clockIn: cin || void 0,
        clockOut: cout || void 0,
        error: !emp ? `Unknown employee code "${code}"` : !valid ? "Date must be YYYY-MM-DD" : void 0
      });
    }
    let imported = 0;
    if (commit) {
      for (const r of rows) {
        if (r.error || !r.employeeId) continue;
        await attendanceApi.saveManualEntry({
          employeeId: r.employeeId,
          date: r.date,
          clockIn: r.clockIn,
          clockOut: r.clockOut,
          source: "import"
        });
        imported += 1;
      }
    }
    return delay(ok({ rows: rows.map(({ employeeId: _id, ...rest }) => rest), imported }));
  },
  // ── regularization ──
  async listRegularizations(filters = {}) {
    const emps = await ensureSeed$2();
    let list = rawRegs();
    if (filters.employeeId) list = list.filter((r) => r.employeeId === filters.employeeId);
    if (filters.managerId) {
      const ids = new Set(emps.filter((e) => e.reportingManagerId === filters.managerId).map((e) => e.id));
      list = list.filter((r) => ids.has(r.employeeId));
    }
    if (filters.statuses?.length) list = list.filter((r) => filters.statuses.includes(r.status));
    list.sort((a, b) => b.appliedAt.localeCompare(a.appliedAt));
    return delay(ok(list), 180);
  },
  async createRegularization(input) {
    const emps = await ensureSeed$2();
    const emp = emps.find((e) => e.id === input.employeeId);
    if (!emp) return fail("Employee not found", "not_found");
    const settings = getSettingsSync();
    if (!settings.allowRegularization) return fail("Regularization is disabled by your administrator.", "disabled");
    const dayMs = 864e5;
    const ageDays = Math.floor((Date.now() - (/* @__PURE__ */ new Date(`${input.date}T00:00:00`)).getTime()) / dayMs);
    if (ageDays < 0) return fail("You cannot regularise a future date.", "invalid");
    if (ageDays > settings.regularizationWindowDays) {
      return fail(`Requests are only allowed within ${settings.regularizationWindowDays} days.`, "window");
    }
    if (input.reason.trim().length < 10) return fail("Add a reason of at least 10 characters.", "invalid");
    const list = rawRegs();
    if (list.some((r) => r.employeeId === input.employeeId && r.date === input.date && r.status === "pending")) {
      return fail("A pending request already exists for that date.", "duplicate");
    }
    const month = input.date.slice(0, 7);
    const used = list.filter((r) => r.employeeId === input.employeeId && r.date.startsWith(month) && r.status !== "rejected" && r.status !== "cancelled").length;
    if (used >= settings.maxRegularizationsPerMonth) {
      return fail(`You have used all ${settings.maxRegularizationsPerMonth} regularizations for ${month}.`, "limit");
    }
    const created = {
      id: uid("reg_"),
      employeeId: emp.id,
      employeeName: `${emp.firstName} ${emp.lastName}`,
      departmentId: emp.departmentId,
      date: input.date,
      type: input.type,
      requestedClockIn: input.requestedClockIn,
      requestedClockOut: input.requestedClockOut,
      reason: input.reason.trim(),
      status: "pending",
      appliedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    saveRegs([created, ...list]);
    return delay(ok(created));
  },
  async cancelRegularization(id) {
    const list = rawRegs();
    const found = list.find((r) => r.id === id);
    if (!found) return fail("Request not found", "not_found");
    if (found.status !== "pending") return fail("Only pending requests can be cancelled.", "invalid");
    saveRegs(list.map((r) => r.id === id ? { ...r, status: "cancelled" } : r));
    return delay(ok(true));
  },
  async actOnRegularization(input) {
    const list = rawRegs();
    const found = list.find((r) => r.id === input.id);
    if (!found) return fail("Request not found", "not_found");
    if (found.status !== "pending") return fail("This request was already reviewed.", "invalid");
    if (input.action === "rejected" && !input.comment?.trim()) {
      return fail("A comment is required when rejecting.", "invalid");
    }
    const next = {
      ...found,
      status: input.action,
      reviewedBy: input.reviewer,
      reviewedAt: (/* @__PURE__ */ new Date()).toISOString(),
      reviewComment: input.comment?.trim()
    };
    saveRegs(list.map((r) => r.id === next.id ? next : r));
    if (input.action === "approved") {
      await attendanceApi.saveManualEntry({
        employeeId: next.employeeId,
        date: next.date,
        clockIn: next.requestedClockIn,
        clockOut: next.requestedClockOut,
        note: `Regularised: ${next.reason}`,
        source: "manual"
      });
    }
    return delay(ok(next));
  },
  async getStats() {
    await ensureSeed$2();
    const today = dateKey$1(/* @__PURE__ */ new Date());
    const records = rawRecords().filter((r) => r.date === today);
    const count = (s) => records.filter((r) => r.status === s).length;
    const monthFrom = `${today.slice(0, 7)}-01`;
    const monthRecords = rawRecords().filter((r) => r.date >= monthFrom && r.workedMinutes > 0);
    const avg = monthRecords.length ? Math.round(monthRecords.reduce((n, r) => n + r.workedMinutes, 0) / monthRecords.length) : 0;
    return delay(
      ok({
        presentToday: count("present"),
        lateToday: count("late"),
        absentToday: count("absent"),
        onLeaveToday: count("on_leave"),
        pendingRegularizations: rawRegs().filter((r) => r.status === "pending").length,
        avgWorkedLabel: formatMinutes(avg)
      }),
      160
    );
  },
  /** Sync approved leave days into attendance so calendars stay consistent. */
  async syncLeave(employeeId) {
    await ensureSeed$2();
    const res = await leaveApi.listRequests({ employeeId, statuses: ["approved", "auto_approved"] });
    const list = rawRecords();
    let touched = 0;
    let next = list;
    for (const req of res.data ?? []) {
      for (let t = new Date(req.startDate).getTime(); t <= new Date(req.endDate).getTime(); t += 864e5) {
        const key = dateKey$1(new Date(t));
        const rec = next.find((r) => r.employeeId === employeeId && r.date === key);
        if (!rec || rec.status === "week_off" || rec.status === "holiday" || rec.clockIn) continue;
        next = upsert(next, { ...rec, status: "on_leave", source: "system", leaveTypeName: req.leaveType?.name });
        touched += 1;
      }
    }
    saveRecords(next);
    return ok(touched);
  },
  recordsToCsv(list) {
    const head = ["Employee", "Date", "Shift", "Clock in", "Clock out", "Worked", "Break", "Overtime", "Late (min)", "Status", "Source"];
    const body = list.map((r) => [
      r.employeeName,
      r.date,
      r.shiftName ?? "",
      r.clockIn ? new Date(r.clockIn).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : "",
      r.clockOut ? new Date(r.clockOut).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : "",
      formatMinutes(r.workedMinutes),
      formatMinutes(r.breakMinutes),
      formatMinutes(r.overtimeMinutes),
      String(r.lateMinutes),
      r.status,
      r.source
    ]);
    return [head, ...body].map((row) => row.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(",")).join("\n");
  }
};
const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
function monthLabel(month, year) {
  return `${MONTH_NAMES[month - 1]} ${year}`;
}
const RUN_STATUS_LABELS = {
  draft: "Draft",
  in_review: "In Review",
  finalised: "Finalised",
  paid: "Paid",
  cancelled: "Cancelled"
};
const PF_WAGE_CAP = 15e3;
const PF_RATE = 0.12;
const ESI_GROSS_LIMIT = 21e3;
const ESI_EMPLOYEE_RATE = 75e-4;
const ESI_EMPLOYER_RATE = 0.0325;
const DEFAULT_PT_SLABS = [
  { upTo: 15e3, tax: 0 },
  { upTo: Number.MAX_SAFE_INTEGER, tax: 200 }
];
const COMPONENTS_KEY = "hrms.payroll.components";
const STRUCTURES_KEY = "hrms.payroll.structures";
const SALARIES_KEY = "hrms.payroll.salaries";
const RUNS_KEY = "hrms.payroll.runs";
const ENTRIES_KEY = "hrms.payroll.entries";
const PAYSLIPS_KEY = "hrms.payroll.payslips";
const DECLARATIONS_KEY = "hrms.payroll.declarations";
function read$3(key, fallback) {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}
function write$3(key, value) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(key, JSON.stringify(value));
}
function seedComponents() {
  const base = (c) => ({
    taxable: true,
    isActive: true,
    isSystemDefined: false,
    ...c
  });
  return [
    base({ id: "pc_basic", name: "Basic Salary", code: "BASIC", type: "earning", calculationMethod: "percentage_of_ctc", value: 40, displayOrder: 1, description: "Foundation of the salary structure." }),
    base({ id: "pc_hra", name: "House Rent Allowance", code: "HRA", type: "earning", calculationMethod: "percentage_of_basic", value: 40, displayOrder: 2 }),
    base({ id: "pc_conv", name: "Conveyance Allowance", code: "CONV", type: "earning", calculationMethod: "fixed", value: 1600, displayOrder: 3 }),
    base({ id: "pc_special", name: "Special Allowance", code: "SPECIAL", type: "earning", calculationMethod: "balance", displayOrder: 4, description: "Balancing figure so earnings + employer cost equal CTC." }),
    base({ id: "pc_pf_emp", name: "PF (Employee)", code: "PFEMP", type: "deduction", calculationMethod: "statutory", statutoryType: "pf_employee", taxable: false, isSystemDefined: true, displayOrder: 5, pfOnActualBasic: false }),
    base({ id: "pc_esi_emp", name: "ESI (Employee)", code: "ESIEMP", type: "deduction", calculationMethod: "statutory", statutoryType: "esi_employee", taxable: false, isSystemDefined: true, displayOrder: 6 }),
    base({ id: "pc_pt", name: "Professional Tax", code: "PT", type: "deduction", calculationMethod: "slab", statutoryType: "professional_tax", taxable: false, isSystemDefined: true, displayOrder: 7, slabs: DEFAULT_PT_SLABS }),
    base({ id: "pc_tds", name: "TDS", code: "TDS", type: "deduction", calculationMethod: "statutory", statutoryType: "tds", taxable: false, isSystemDefined: true, displayOrder: 8, value: 0, description: "MVP1: entered manually per employee in the payroll review." }),
    base({ id: "pc_pf_er", name: "PF (Employer)", code: "PFER", type: "employer_contribution", calculationMethod: "statutory", statutoryType: "pf_employer", taxable: false, isSystemDefined: true, displayOrder: 9 }),
    base({ id: "pc_esi_er", name: "ESI (Employer)", code: "ESIER", type: "employer_contribution", calculationMethod: "statutory", statutoryType: "esi_employer", taxable: false, isSystemDefined: true, displayOrder: 10 })
  ];
}
function getComponents() {
  let list = read$3(COMPONENTS_KEY, []);
  if (list.length === 0) {
    list = seedComponents();
    write$3(COMPONENTS_KEY, list);
  }
  return list;
}
function seedStructures(components) {
  const pick = (codes) => codes.map((code, i) => {
    const component = components.find((c) => c.code === code);
    return { componentId: component.id, component, isEditable: component.type === "earning", displayOrder: i + 1 };
  }).filter((c) => !!c.component);
  const all = ["BASIC", "HRA", "CONV", "SPECIAL", "PFEMP", "ESIEMP", "PT", "TDS", "PFER", "ESIER"];
  return [
    {
      id: "ps_standard",
      name: "Standard — All Employees",
      description: "Default structure applied to every employee without a custom assignment.",
      components: pick(all),
      employeeCount: 0,
      isDefault: true,
      isActive: true,
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    },
    {
      id: "ps_senior",
      name: "Senior — Leadership",
      description: "Higher basic proportion for senior grades.",
      components: pick(all),
      employeeCount: 0,
      isDefault: false,
      isActive: true,
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    }
  ];
}
function getStructures() {
  const components = getComponents();
  let list = read$3(STRUCTURES_KEY, []);
  if (list.length === 0) {
    list = seedStructures(components);
    write$3(STRUCTURES_KEY, list);
  }
  list = list.map((s) => ({
    ...s,
    components: s.components.map((sc) => ({ ...sc, component: components.find((c) => c.id === sc.componentId) ?? sc.component })).filter((sc) => !!sc.component)
  }));
  const salaries = read$3(SALARIES_KEY, []);
  return list.map((s) => ({
    ...s,
    employeeCount: salaries.filter((a) => a.structureId === s.id && !a.effectiveTo).length
  }));
}
function round(n) {
  return Math.round(n);
}
function ptFor(gross, slabs = DEFAULT_PT_SLABS) {
  const sorted = [...slabs].sort((a, b) => a.upTo - b.upTo);
  for (const s of sorted) {
    if (gross <= s.upTo) return { tax: s.tax, label: `Gross up to ${formatCurrency(s.upTo)}` };
  }
  const last = sorted[sorted.length - 1];
  return { tax: last?.tax ?? 0, label: "Top slab" };
}
function computeBreakup(structure, annualCtc, opts = {}) {
  const proration = opts.proration ?? 1;
  const monthlyCtc = round((annualCtc || 0) / 12);
  const comps = [...structure.components].sort((a, b) => a.displayOrder - b.displayOrder);
  const valueOf = (sc) => sc.overrideValue ?? sc.component.value ?? 0;
  const earnings = [];
  const deductions = [];
  const employerContribs = [];
  const basicSc = comps.find((c) => c.component.code === "BASIC");
  const basic = basicSc ? basicSc.component.calculationMethod === "fixed" ? valueOf(basicSc) : round(monthlyCtc * valueOf(basicSc) / 100) : round(monthlyCtc * 0.4);
  let earningsSum = 0;
  for (const sc of comps) {
    if (sc.component.type !== "earning") continue;
    const c = sc.component;
    if (c.calculationMethod === "balance") continue;
    let amount = 0;
    let note;
    if (c.code === "BASIC") {
      amount = basic;
      note = c.calculationMethod === "percentage_of_ctc" ? `${valueOf(sc)}% of CTC` : "Fixed";
    } else if (c.calculationMethod === "percentage_of_basic") {
      amount = round(basic * valueOf(sc) / 100);
      note = `${valueOf(sc)}% of Basic`;
    } else if (c.calculationMethod === "percentage_of_ctc") {
      amount = round(monthlyCtc * valueOf(sc) / 100);
      note = `${valueOf(sc)}% of CTC`;
    } else {
      amount = valueOf(sc);
      note = "Fixed";
    }
    amount = round(amount * proration);
    earningsSum += amount;
    earnings.push({ componentId: c.id, component: c, monthlyAmount: amount, annualAmount: amount * 12, note });
  }
  const pfErSc = comps.find((c) => c.component.statutoryType === "pf_employer");
  const pfBaseFull = pfErSc?.component.pfOnActualBasic ? basic : Math.min(basic, PF_WAGE_CAP);
  const pfBase = round(pfBaseFull * proration);
  const pfEmployer = pfErSc ? round(pfBase * PF_RATE) : 0;
  const balanceSc = comps.find((c) => c.component.calculationMethod === "balance");
  if (balanceSc) {
    const target = round(monthlyCtc * proration) - pfEmployer - earningsSum;
    const amount = Math.max(0, target);
    earningsSum += amount;
    earnings.push({
      componentId: balanceSc.component.id,
      component: balanceSc.component,
      monthlyAmount: amount,
      annualAmount: amount * 12,
      note: "Balance of CTC"
    });
  }
  const grossEarnings = earningsSum;
  const esiApplicable = grossEarnings <= ESI_GROSS_LIMIT;
  for (const sc of comps) {
    if (sc.component.type !== "employer_contribution") continue;
    const c = sc.component;
    if (c.statutoryType === "pf_employer") {
      employerContribs.push({
        componentId: c.id,
        component: c,
        monthlyAmount: pfEmployer,
        annualAmount: pfEmployer * 12,
        note: `${PF_RATE * 100}% of Basic${!c.pfOnActualBasic && basic > PF_WAGE_CAP ? ` (on ${formatCurrency(PF_WAGE_CAP)} cap)` : ""}`
      });
    } else if (c.statutoryType === "esi_employer") {
      const amount = esiApplicable ? round(grossEarnings * ESI_EMPLOYER_RATE) : 0;
      employerContribs.push({
        componentId: c.id,
        component: c,
        monthlyAmount: amount,
        annualAmount: amount * 12,
        note: esiApplicable ? "3.25% of Gross" : "Not applicable — gross above ₹21,000",
        notApplicable: !esiApplicable
      });
    } else {
      const amount = round((sc.overrideValue ?? c.value ?? 0) * proration);
      employerContribs.push({ componentId: c.id, component: c, monthlyAmount: amount, annualAmount: amount * 12, note: "Fixed" });
    }
  }
  for (const sc of comps) {
    if (sc.component.type !== "deduction") continue;
    const c = sc.component;
    let amount = 0;
    let note;
    let notApplicable = false;
    switch (c.statutoryType) {
      case "pf_employee":
        amount = round(pfBase * PF_RATE);
        note = `12% of Basic${!c.pfOnActualBasic && basic > PF_WAGE_CAP ? ` (on ${formatCurrency(PF_WAGE_CAP)} cap)` : ""}`;
        break;
      case "esi_employee":
        amount = esiApplicable ? round(grossEarnings * ESI_EMPLOYEE_RATE) : 0;
        note = esiApplicable ? "0.75% of Gross" : "Not applicable — gross above ₹21,000";
        notApplicable = !esiApplicable;
        break;
      case "professional_tax": {
        const pt = ptFor(grossEarnings, c.slabs ?? DEFAULT_PT_SLABS);
        amount = pt.tax;
        note = `Slab: ${pt.label}`;
        break;
      }
      case "tds":
        amount = opts.tds ?? 0;
        note = "Entered manually (MVP1)";
        break;
      default:
        amount = c.calculationMethod === "percentage_of_basic" ? round(basic * (sc.overrideValue ?? c.value ?? 0) / 100) : round((sc.overrideValue ?? c.value ?? 0) * proration);
        note = c.calculationMethod === "percentage_of_basic" ? `${sc.overrideValue ?? c.value ?? 0}% of Basic` : "Fixed";
    }
    deductions.push({ componentId: c.id, component: c, monthlyAmount: amount, annualAmount: amount * 12, note, notApplicable });
  }
  const totalDeductions = deductions.reduce((n, l) => n + l.monthlyAmount, 0);
  const totalEmployerContrib = employerContribs.reduce((n, l) => n + l.monthlyAmount, 0);
  return {
    earnings,
    deductions,
    employerContribs,
    grossEarnings,
    totalDeductions,
    netPay: grossEarnings - totalDeductions,
    totalEmployerContrib,
    totalCost: grossEarnings + totalEmployerContrib,
    monthlyCtc,
    unallocated: round(monthlyCtc * proration) - (grossEarnings + totalEmployerContrib)
  };
}
function toLineItems(lines) {
  return lines.map((l) => ({
    componentId: l.componentId,
    componentName: l.component.name,
    componentCode: l.component.code,
    amount: l.monthlyAmount,
    isManualOverride: false,
    note: l.note
  }));
}
function getSalaries() {
  return read$3(SALARIES_KEY, []);
}
function currentSalaryOf(employeeId) {
  return getSalaries().find((s) => s.employeeId === employeeId && !s.effectiveTo);
}
function workingDaysInMonth(year, month) {
  const days = new Date(year, month, 0).getDate();
  let count = 0;
  for (let d = 1; d <= days; d++) {
    const wd = new Date(year, month - 1, d).getDay();
    if (wd !== 0 && wd !== 6) count++;
  }
  return count;
}
function pad2(n) {
  return String(n).padStart(2, "0");
}
const payrollApi = {
  // ---------- components ----------
  async listComponents() {
    return delay(ok([...getComponents()].sort((a, b) => a.displayOrder - b.displayOrder)));
  },
  async isCodeUnique(code, ignoreId) {
    return !getComponents().some((c) => c.code.toUpperCase() === code.toUpperCase() && c.id !== ignoreId);
  },
  async saveComponent(input) {
    const list = getComponents();
    if (list.some((c) => c.code.toUpperCase() === input.code.toUpperCase() && c.id !== input.id)) {
      return delay(fail(`Code ${input.code.toUpperCase()} is already used by another component.`));
    }
    if (input.id) {
      const next = list.map((c) => c.id === input.id ? { ...c, ...input, code: input.code.toUpperCase() } : c);
      write$3(COMPONENTS_KEY, next);
      return delay(ok(next.find((c) => c.id === input.id)));
    }
    const created = {
      id: uid("pc_"),
      description: input.description,
      value: input.value,
      statutoryType: input.statutoryType,
      slabs: input.slabs,
      taxable: input.taxable ?? true,
      isActive: input.isActive ?? true,
      isSystemDefined: false,
      displayOrder: list.length + 1,
      name: input.name,
      code: input.code.toUpperCase(),
      type: input.type,
      calculationMethod: input.calculationMethod,
      pfOnActualBasic: input.pfOnActualBasic
    };
    write$3(COMPONENTS_KEY, [...list, created]);
    return delay(ok(created));
  },
  async deleteComponent(id) {
    const list = getComponents();
    const target = list.find((c) => c.id === id);
    if (!target) return delay(fail("Component not found."));
    if (target.isSystemDefined) return delay(fail("System components cannot be deleted."));
    const used = getStructures().some((s) => s.components.some((sc) => sc.componentId === id));
    if (used) return delay(fail("This component is used in a salary structure. Remove it there first."));
    write$3(COMPONENTS_KEY, list.filter((c) => c.id !== id));
    return delay(ok(true));
  },
  async reorderComponents(ids) {
    const list = getComponents().map((c) => {
      const i = ids.indexOf(c.id);
      return i === -1 ? c : { ...c, displayOrder: i + 1 };
    });
    write$3(COMPONENTS_KEY, list);
    return delay(ok(list));
  },
  // ---------- structures ----------
  async listStructures() {
    return delay(ok(getStructures()));
  },
  async getStructure(id) {
    const s = getStructures().find((x) => x.id === id);
    return delay(s ? ok(s) : fail("Salary structure not found."));
  },
  async saveStructure(input) {
    const list = read$3(STRUCTURES_KEY, getStructures());
    if (input.id) {
      const next = list.map((s) => s.id === input.id ? { ...s, ...input } : s);
      write$3(STRUCTURES_KEY, next);
      return delay(ok(getStructures().find((s) => s.id === input.id)));
    }
    const created = {
      id: uid("ps_"),
      name: input.name,
      description: input.description,
      components: input.components ?? [],
      employeeCount: 0,
      isDefault: list.length === 0,
      isActive: true,
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    write$3(STRUCTURES_KEY, [...list, created]);
    return delay(ok(created));
  },
  async cloneStructure(id) {
    const src = getStructures().find((s) => s.id === id);
    if (!src) return delay(fail("Salary structure not found."));
    return payrollApi.saveStructure({ name: `${src.name} (copy)`, description: src.description, components: src.components });
  },
  async setDefaultStructure(id) {
    const list = read$3(STRUCTURES_KEY, getStructures()).map((s) => ({ ...s, isDefault: s.id === id }));
    write$3(STRUCTURES_KEY, list);
    return delay(ok(getStructures()));
  },
  async deleteStructure(id) {
    const assigned = getSalaries().some((s) => s.structureId === id && !s.effectiveTo);
    if (assigned) return delay(fail("Employees are assigned to this structure. Reassign them first."));
    write$3(STRUCTURES_KEY, read$3(STRUCTURES_KEY, getStructures()).filter((s) => s.id !== id));
    return delay(ok(true));
  },
  // ---------- employee salary ----------
  async listSalaries(employeeId) {
    const list = getSalaries().filter((s) => s.employeeId === employeeId).sort((a, b) => b.effectiveFrom.localeCompare(a.effectiveFrom));
    return delay(ok(list));
  },
  async getCurrentSalary(employeeId) {
    return delay(ok(currentSalaryOf(employeeId) ?? null));
  },
  async assignSalary(input) {
    const list = getSalaries();
    const prior = list.find((s) => s.employeeId === input.employeeId && !s.effectiveTo);
    const closed = prior ? list.map(
      (s) => s.id === prior.id ? { ...s, effectiveTo: new Date(new Date(input.effectiveFrom).getTime() - 864e5).toISOString().slice(0, 10) } : s
    ) : list;
    const created = { id: uid("sal_"), createdAt: (/* @__PURE__ */ new Date()).toISOString(), ...input };
    write$3(SALARIES_KEY, [created, ...closed]);
    return delay(ok(created));
  },
  /** Breakup preview for a structure + CTC (no persistence). */
  async previewBreakup(structureId, annualCtc) {
    const s = getStructures().find((x) => x.id === structureId);
    if (!s) return delay(fail("Salary structure not found."));
    return delay(ok(computeBreakup(s, annualCtc)));
  },
  // ---------- runs ----------
  async listRuns() {
    const list = read$3(RUNS_KEY, []).sort(
      (a, b) => b.year - a.year || b.month - a.month
    );
    return delay(ok(list));
  },
  async getRun(id) {
    const run = read$3(RUNS_KEY, []).find((r) => r.id === id);
    return delay(run ? ok(run) : fail("Payroll run not found."));
  },
  async listEntries(runId) {
    return delay(ok(read$3(ENTRIES_KEY, []).filter((e) => e.runId === runId)));
  },
  async createRun(input) {
    const runs = read$3(RUNS_KEY, []);
    const blocking = runs.find(
      (r) => r.month === input.month && r.year === input.year && (r.status === "finalised" || r.status === "paid")
    );
    if (blocking) {
      return delay(
        fail(
          `A finalised payroll already exists for ${monthLabel(input.month, input.year)}. Cancel the existing run first.`
        )
      );
    }
    const empRes = await listEmployees();
    let employees = (empRes.data ?? []).filter((e) => e.employmentStatus !== "inactive");
    if (input.departmentIds?.length) {
      employees = employees.filter((e) => input.departmentIds.includes(e.departmentId));
    }
    const structures = getStructures();
    const defaultStructure = structures.find((s) => s.isDefault) ?? structures[0];
    const runId = uid("run_");
    const entries = [];
    const workingDays = workingDaysInMonth(input.year, input.month);
    const monthStart = new Date(input.year, input.month - 1, 1);
    const monthEnd = new Date(input.year, input.month, 0);
    for (const emp of employees) {
      const salary = currentSalaryOf(emp.id);
      const structure = structures.find((s) => s.id === salary?.structureId) ?? defaultStructure;
      if (!structure) continue;
      const annualCtc = salary?.annualCtc ?? emp.ctcAnnual ?? 6e5;
      const doj = new Date(emp.dateOfJoining);
      const flags = [];
      let daysWorkedBase = workingDays;
      if (doj > monthStart && doj <= monthEnd) {
        let count = 0;
        for (let d = doj.getDate(); d <= monthEnd.getDate(); d++) {
          const wd = new Date(input.year, input.month - 1, d).getDay();
          if (wd !== 0 && wd !== 6) count++;
        }
        daysWorkedBase = count;
        flags.push("prorated");
      }
      if (emp.employmentStatus === "exited" || emp.employmentStatus === "notice_period") {
        flags.push("final_settlement");
      }
      const att = await attendanceApi.getMonth(emp.id, input.year, input.month - 1);
      let lopDays = (att.data ?? []).filter((r) => r.status === "absent").length;
      if (lopDays > workingDays) lopDays = workingDays;
      const daysWorked = Math.max(0, daysWorkedBase - lopDays);
      const proration = workingDays > 0 ? daysWorked / workingDays : 1;
      const breakup = computeBreakup(structure, annualCtc, { proration });
      const fullBreakup = computeBreakup(structure, annualCtc);
      const lopAmount = Math.max(0, fullBreakup.grossEarnings - breakup.grossEarnings);
      entries.push({
        id: uid("pe_"),
        runId,
        employeeId: emp.id,
        employeeName: `${emp.firstName} ${emp.lastName}`,
        employeeCode: emp.employeeCode,
        departmentId: emp.departmentId,
        structureId: structure.id,
        structureName: structure.name,
        monthlyCtc: Math.round(annualCtc / 12),
        annualCtc,
        lopDays,
        lopAmount,
        workingDays,
        daysWorked,
        earnings: toLineItems(breakup.earnings),
        deductions: toLineItems(breakup.deductions),
        employerContribs: toLineItems(breakup.employerContribs),
        grossEarnings: breakup.grossEarnings,
        totalDeductions: breakup.totalDeductions,
        netPay: breakup.netPay,
        totalCost: breakup.totalCost,
        ytdGross: breakup.grossEarnings * ((input.month + 8) % 12 || 1),
        ytdDeductions: breakup.totalDeductions * ((input.month + 8) % 12 || 1),
        ytdNetPay: breakup.netPay * ((input.month + 8) % 12 || 1),
        isManuallyEdited: false,
        payslipGenerated: false,
        flags,
        bankName: salary?.bankName ?? emp.bankName,
        bankAccountNumber: salary?.bankAccountNumber ?? emp.bankAccountNumber,
        bankIfsc: salary?.bankIfsc ?? emp.bankIfsc
      });
    }
    const run = {
      id: runId,
      month: input.month,
      year: input.year,
      status: "draft",
      employeeCount: entries.length,
      totalGross: entries.reduce((n, e) => n + e.grossEarnings, 0),
      totalDeductions: entries.reduce((n, e) => n + e.totalDeductions, 0),
      totalNetPay: entries.reduce((n, e) => n + e.netPay, 0),
      totalEmployerCost: entries.reduce((n, e) => n + e.totalCost, 0),
      initiatedBy: input.initiatedBy,
      initiatedAt: (/* @__PURE__ */ new Date()).toISOString(),
      validationIssues: [],
      notes: input.notes,
      log: [{ id: uid("lg_"), at: (/* @__PURE__ */ new Date()).toISOString(), actor: input.initiatedBy, message: "Payroll run created in draft." }]
    };
    run.validationIssues = validateEntries(entries);
    write$3(ENTRIES_KEY, [...read$3(ENTRIES_KEY, []), ...entries]);
    write$3(RUNS_KEY, [run, ...runs]);
    return delay(ok(run), 600);
  },
  async refreshValidation(runId) {
    const runs = read$3(RUNS_KEY, []);
    const run = runs.find((r) => r.id === runId);
    if (!run) return delay(fail("Payroll run not found."));
    const entries = read$3(ENTRIES_KEY, []).filter((e) => e.runId === runId);
    const next = { ...run, validationIssues: validateEntries(entries), ...totalsOf(entries) };
    write$3(RUNS_KEY, runs.map((r) => r.id === runId ? next : r));
    return delay(ok(next));
  },
  async updateEntry(entryId, patch) {
    const all = read$3(ENTRIES_KEY, []);
    const entry = all.find((e) => e.id === entryId);
    if (!entry) return delay(fail("Payroll entry not found."));
    const earnings = patch.earnings ?? entry.earnings;
    const deductions = patch.deductions ?? entry.deductions;
    const grossEarnings = earnings.reduce((n, l) => n + l.amount, 0);
    const totalDeductions = deductions.reduce((n, l) => n + l.amount, 0);
    const employerTotal = entry.employerContribs.reduce((n, l) => n + l.amount, 0);
    const next = {
      ...entry,
      earnings,
      deductions,
      lopDays: patch.lopDays ?? entry.lopDays,
      grossEarnings,
      totalDeductions,
      netPay: grossEarnings - totalDeductions,
      totalCost: grossEarnings + employerTotal,
      isManuallyEdited: true,
      manualEditNotes: patch.notes,
      flags: entry.flags.includes("manually_edited") ? entry.flags : [...entry.flags, "manually_edited"]
    };
    const list = all.map((e) => e.id === entryId ? next : e);
    write$3(ENTRIES_KEY, list);
    await payrollApi.refreshValidation(entry.runId);
    return delay(ok(next));
  },
  async setRunStatus(runId, status, actor) {
    const runs = read$3(RUNS_KEY, []);
    const run = runs.find((r) => r.id === runId);
    if (!run) return delay(fail("Payroll run not found."));
    const next = {
      ...run,
      status,
      paidAt: status === "paid" ? (/* @__PURE__ */ new Date()).toISOString() : run.paidAt,
      log: [
        ...run.log,
        { id: uid("lg_"), at: (/* @__PURE__ */ new Date()).toISOString(), actor, message: `Status changed to ${status.replace("_", " ")}.` }
      ]
    };
    write$3(RUNS_KEY, runs.map((r) => r.id === runId ? next : r));
    return delay(ok(next));
  },
  async finaliseRun(runId, actor) {
    const runs = read$3(RUNS_KEY, []);
    const run = runs.find((r) => r.id === runId);
    if (!run) return delay(fail("Payroll run not found."));
    const entries = read$3(ENTRIES_KEY, []);
    const mine = entries.filter((e) => e.runId === runId && !e.excluded);
    const issues = validateEntries(mine);
    if (issues.some((i) => i.severity === "error")) {
      return delay(fail("Resolve all errors before finalising this payroll run."));
    }
    const empRes = await listEmployees();
    const employees = empRes.data ?? [];
    const slips = mine.map((e) => {
      const emp = employees.find((x) => x.id === e.employeeId);
      return {
        id: uid("slip_"),
        entryId: e.id,
        employeeId: e.employeeId,
        runId,
        month: run.month,
        year: run.year,
        employeeName: e.employeeName,
        employeeCode: e.employeeCode,
        designation: emp?.designationId,
        department: emp?.departmentId,
        dateOfJoining: emp?.dateOfJoining,
        panNumber: emp?.panNumber,
        bankName: e.bankName,
        bankAccountNumber: e.bankAccountNumber,
        earnings: e.earnings,
        deductions: e.deductions,
        employerContribs: e.employerContribs,
        grossEarnings: e.grossEarnings,
        totalDeductions: e.totalDeductions,
        netPay: e.netPay,
        ytdGross: e.ytdGross,
        ytdDeductions: e.ytdDeductions,
        ytdNetPay: e.ytdNetPay,
        generatedAt: (/* @__PURE__ */ new Date()).toISOString(),
        sentAt: (/* @__PURE__ */ new Date()).toISOString(),
        note: e.flags.includes("prorated") ? "Salary prorated for part of the month." : void 0
      };
    });
    write$3(PAYSLIPS_KEY, [...read$3(PAYSLIPS_KEY, []).filter((p) => p.runId !== runId), ...slips]);
    write$3(ENTRIES_KEY, entries.map((e) => e.runId === runId ? { ...e, payslipGenerated: true } : e));
    const next = {
      ...run,
      status: "finalised",
      finalisedBy: actor,
      finalisedAt: (/* @__PURE__ */ new Date()).toISOString(),
      ...totalsOf(mine),
      log: [...run.log, { id: uid("lg_"), at: (/* @__PURE__ */ new Date()).toISOString(), actor, message: `Finalised — ${slips.length} pay slips generated.` }]
    };
    write$3(RUNS_KEY, runs.map((r) => r.id === runId ? next : r));
    return delay(ok({ run: next, payslips: slips.length }), 700);
  },
  // ---------- payslips ----------
  async listPayslips(employeeId) {
    const list = read$3(PAYSLIPS_KEY, []).filter((p) => p.employeeId === employeeId).sort((a, b) => b.year - a.year || b.month - a.month);
    return delay(ok(list));
  },
  async getPayslip(id) {
    const slip = read$3(PAYSLIPS_KEY, []).find((p) => p.id === id);
    return delay(slip ? ok(slip) : fail("Pay slip not found."));
  },
  // ---------- declarations ----------
  async getDeclaration(employeeId, financialYear) {
    const list = read$3(DECLARATIONS_KEY, []);
    let dec = list.find((d) => d.employeeId === employeeId && d.financialYear === financialYear);
    if (!dec) {
      dec = seedDeclaration(employeeId, financialYear);
      write$3(DECLARATIONS_KEY, [...list, dec]);
    }
    return delay(ok(dec));
  },
  async saveDeclaration(dec) {
    const sections = dec.sections.map((s) => ({ ...s, total: s.items.reduce((n, i) => n + (i.amount || 0), 0) }));
    const next = {
      ...dec,
      sections,
      totalDeclared: sections.reduce((n, s) => n + Math.min(s.total, s.maxLimit), 0)
    };
    const list = read$3(DECLARATIONS_KEY, []);
    write$3(DECLARATIONS_KEY, list.some((d) => d.id === next.id) ? list.map((d) => d.id === next.id ? next : d) : [...list, next]);
    return delay(ok(next));
  },
  async submitDeclaration(id) {
    const list = read$3(DECLARATIONS_KEY, []);
    const dec = list.find((d) => d.id === id);
    if (!dec) return delay(fail("Declaration not found."));
    const next = { ...dec, status: "submitted", submittedAt: (/* @__PURE__ */ new Date()).toISOString() };
    write$3(DECLARATIONS_KEY, list.map((d) => d.id === id ? next : d));
    return delay(ok(next));
  },
  // ---------- reports / exports ----------
  async bankFile(runId) {
    const entries = read$3(ENTRIES_KEY, []).filter((e) => e.runId === runId && !e.excluded);
    const run = read$3(RUNS_KEY, []).find((r) => r.id === runId);
    if (!run) return delay(fail("Payroll run not found."));
    const withBank = entries.filter((e) => e.bankAccountNumber && e.bankIfsc);
    const excluded = entries.length - withBank.length;
    const header = [
      excluded > 0 ? `# Excluded: ${excluded} employees (missing bank details)` : "# Excluded: 0 employees",
      "Sequence,Bank Name,Account Number,IFSC,Employee Name,Amount,Reference"
    ];
    const rows = withBank.map(
      (e, i) => [
        i + 1,
        e.bankName ?? "",
        e.bankAccountNumber ?? "",
        e.bankIfsc ?? "",
        e.employeeName,
        e.netPay.toFixed(2),
        `"SAL-${monthLabel(run.month, run.year).slice(0, 3).toUpperCase()}-${run.year}-${e.employeeCode}"`
      ].join(",")
    );
    return delay(ok({ csv: [...header, ...rows].join("\n"), included: withBank.length, excluded }));
  },
  async summaryCsv(runId) {
    const entries = read$3(ENTRIES_KEY, []).filter((e) => e.runId === runId);
    const rows = entries.map(
      (e) => [e.employeeCode, e.employeeName, e.daysWorked, e.lopDays, e.grossEarnings, e.totalDeductions, e.netPay, e.totalCost].join(",")
    );
    return delay(ok(["Code,Employee,Days worked,LOP,Gross,Deductions,Net pay,Employer cost", ...rows].join("\n")));
  },
  async statutoryRegister(runId, kind) {
    const entries = read$3(ENTRIES_KEY, []).filter((e) => e.runId === runId);
    const empCode = kind === "pf" ? "PFEMP" : "ESIEMP";
    const erCode = kind === "pf" ? "PFER" : "ESIER";
    const rows = entries.map((e) => {
      const emp = e.deductions.find((l) => l.componentCode === empCode)?.amount ?? 0;
      const er = e.employerContribs.find((l) => l.componentCode === erCode)?.amount ?? 0;
      return [e.employeeCode, e.employeeName, e.grossEarnings, emp, er, emp + er].join(",");
    });
    return delay(ok([`Code,Employee,Gross,${kind.toUpperCase()} Employee,${kind.toUpperCase()} Employer,Total`, ...rows].join("\n")));
  },
  async dashboardStats() {
    const runs = read$3(RUNS_KEY, []);
    const empRes = await listEmployees();
    const employees = (empRes.data ?? []).filter((e) => e.employmentStatus !== "inactive" && e.employmentStatus !== "exited");
    const finalised = runs.filter((r) => r.status === "finalised" || r.status === "paid");
    const last = runs[0];
    const decs = read$3(DECLARATIONS_KEY, []);
    return delay(
      ok({
        ytdCost: finalised.reduce((n, r) => n + r.totalEmployerCost, 0),
        employeesOnPayroll: employees.length,
        lastRunLabel: last ? monthLabel(last.month, last.year) : "—",
        pendingDeclarations: Math.max(0, employees.length - decs.filter((d) => d.status !== "draft").length)
      })
    );
  }
};
function totalsOf(entries) {
  return {
    employeeCount: entries.length,
    totalGross: entries.reduce((n, e) => n + e.grossEarnings, 0),
    totalDeductions: entries.reduce((n, e) => n + e.totalDeductions, 0),
    totalNetPay: entries.reduce((n, e) => n + e.netPay, 0),
    totalEmployerCost: entries.reduce((n, e) => n + e.totalCost, 0)
  };
}
function validateEntries(entries) {
  const issues = [];
  const prorated = [];
  for (const e of entries) {
    if (e.lopDays > e.workingDays) {
      issues.push({ severity: "error", code: "LOP_EXCEEDS", employeeId: e.employeeId, employeeName: e.employeeName, message: `LOP days exceed working days for ${e.employeeName}.` });
    }
    if (e.netPay <= 0) {
      issues.push({ severity: "error", code: "ZERO_NET", employeeId: e.employeeId, employeeName: e.employeeName, message: `Net pay is zero or negative for ${e.employeeName}. Review manually.` });
    }
    if (!e.bankAccountNumber || !e.bankIfsc) {
      issues.push({ severity: "warning", code: "NO_BANK", employeeId: e.employeeId, employeeName: e.employeeName, message: `Bank details missing for ${e.employeeName}. Pay slip will be generated but bank transfer entry will be skipped.` });
    }
    if (e.flags.includes("final_settlement")) {
      issues.push({ severity: "warning", code: "EXITED", employeeId: e.employeeId, employeeName: e.employeeName, message: `${e.employeeName} is on notice or marked as exited. Confirm inclusion in this payroll run.` });
    }
    if (e.lopDays >= 5 && e.lopDays <= e.workingDays) {
      issues.push({ severity: "warning", code: "HIGH_LOP", employeeId: e.employeeId, employeeName: e.employeeName, message: `High LOP: ${e.employeeName} has ${e.lopDays} LOP days this month.` });
    }
    if (e.grossEarnings > ESI_GROSS_LIMIT - 500 && e.grossEarnings <= ESI_GROSS_LIMIT) {
      issues.push({ severity: "warning", code: "ESI_BOUNDARY", employeeId: e.employeeId, employeeName: e.employeeName, message: `ESI boundary: ${e.employeeName}'s gross (${formatCurrency(e.grossEarnings)}) is near the ₹21,000 threshold.` });
    }
    if (e.flags.includes("prorated")) prorated.push(e.employeeName);
  }
  if (prorated.length) {
    issues.push({ severity: "info", code: "PRORATED", message: `Prorated salary: ${prorated.length} employee(s) joined or left mid-month. Verify their dates.` });
  }
  issues.push({ severity: "info", code: "TDS_MANUAL", message: "TDS is currently set manually per employee. Configure investment declarations to auto-calculate TDS." });
  return issues;
}
function seedDeclaration(employeeId, financialYear) {
  const item = (label, amount = 0) => ({
    id: uid("di_"),
    label,
    amount,
    proofStatus: "not_uploaded"
  });
  const sections = [
    {
      code: "80C",
      label: "Section 80C — Tax Saving Investments",
      maxLimit: 15e4,
      items: [item("PPF"), item("ELSS Mutual Funds"), item("Life Insurance Premium"), item("Tax Saver FD"), item("NSC"), item("Sukanya Samriddhi"), item("Home Loan Principal")],
      total: 0
    },
    {
      code: "80D",
      label: "Section 80D — Medical Insurance",
      maxLimit: 75e3,
      items: [item("Medical Insurance (self + family)"), item("Medical Insurance (parents)")],
      total: 0
    },
    {
      code: "HRA_EXEMPTION",
      label: "HRA Exemption",
      maxLimit: 3e5,
      items: [item("Annual rent paid"), item("Landlord PAN declared (₹0 if not applicable)")],
      total: 0
    },
    {
      code: "LTA",
      label: "Leave Travel Allowance",
      maxLimit: 5e4,
      items: [item("Travel expenses claimed")],
      total: 0
    }
  ];
  return {
    id: uid("dec_"),
    employeeId,
    financialYear,
    status: "draft",
    sections,
    totalDeclared: 0
  };
}
function downloadTextFile(filename, contents, mime = "text/csv") {
  if (typeof window === "undefined") return;
  const blob = new Blob([contents], { type: `${mime};charset=utf-8;` });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
function maskAccount(account) {
  if (!account) return "—";
  return `XXXXXX${account.slice(-4)}`;
}
function monthOptions(count = 12) {
  const now = /* @__PURE__ */ new Date();
  return Array.from({ length: count }).map((_, i) => {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    return { value: `${d.getFullYear()}-${pad2(d.getMonth() + 1)}`, label: monthLabel(d.getMonth() + 1, d.getFullYear()) };
  });
}
function currentFinancialYear() {
  const now = /* @__PURE__ */ new Date();
  const startYear = now.getMonth() + 1 >= 4 ? now.getFullYear() : now.getFullYear() - 1;
  return `${startYear}-${String((startYear + 1) % 100).padStart(2, "0")}`;
}
const SETTINGS_KEY = "hrms.perf.settings";
const OBJECTIVES_KEY = "hrms.perf.objectives";
const KRAS_KEY = "hrms.perf.kras";
const CYCLES_KEY = "hrms.perf.cycles";
const FORMS_KEY = "hrms.perf.forms";
const REVIEWS_KEY = "hrms.perf.reviews";
const PIPS_KEY = "hrms.perf.pips";
const SEEDED_KEY$1 = "hrms.perf.seeded";
function read$2(key, fallback) {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}
function write$2(key, value) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(key, JSON.stringify(value));
}
const iso = (d) => d.toISOString();
const daysFromNow = (n) => iso(new Date(Date.now() + n * 864e5));
const DEFAULT_COMPETENCIES = [
  { id: "c_lead", name: "Leadership", description: "Guides others toward shared outcomes." },
  { id: "c_comm", name: "Communication", description: "Clear, timely and audience-aware." },
  { id: "c_prob", name: "Problem Solving", description: "Breaks down and resolves complex issues." },
  { id: "c_coll", name: "Collaboration", description: "Works effectively across teams." },
  { id: "c_acct", name: "Accountability", description: "Owns commitments end to end." },
  { id: "c_cust", name: "Customer Focus", description: "Puts customer outcomes first." },
  { id: "c_inno", name: "Innovation", description: "Improves how work gets done." },
  { id: "c_exec", name: "Execution", description: "Delivers reliably and on time." },
  { id: "c_adap", name: "Adaptability", description: "Responds well to change." }
];
const DEFAULT_SCALES = [
  {
    id: "rs_5",
    name: "5-Point Scale",
    type: "numeric_5",
    isSystem: true,
    labels: [
      { value: 1, label: "Below Expectations", color: "#DC2626" },
      { value: 2, label: "Needs Improvement", color: "#F59E0B" },
      { value: 3, label: "Meets Expectations", color: "#2563EB" },
      { value: 4, label: "Exceeds Expectations", color: "#16A34A" },
      { value: 5, label: "Outstanding", color: "#0D9488" }
    ]
  },
  {
    id: "rs_10",
    name: "10-Point Scale",
    type: "numeric_10",
    isSystem: true,
    labels: Array.from({ length: 10 }, (_, i) => ({ value: i + 1, label: String(i + 1) }))
  }
];
const DEFAULT_SETTINGS = {
  framework: "hybrid",
  goalPeriodicity: "quarterly",
  allowEmployeeGoalCreation: true,
  requireManagerApproval: true,
  minPeerReviewers: 3,
  competencies: DEFAULT_COMPETENCIES,
  ratingScales: DEFAULT_SCALES
};
function defaultFormSections() {
  return [
    {
      id: "sec_goals",
      title: "Goals Review",
      isConfidential: false,
      description: "Reflect on the goals set for this period.",
      respondents: ["self", "manager"],
      questions: [
        { id: "q_goals", type: "goal_review", label: "Goal achievement", required: true, displayOrder: 0 }
      ]
    },
    {
      id: "sec_comp",
      title: "Competencies",
      isConfidential: false,
      respondents: ["self", "manager", "peer"],
      questions: [
        {
          id: "q_comp",
          type: "competency_group",
          label: "Rate the following competencies",
          required: true,
          displayOrder: 0,
          competencyIds: ["c_lead", "c_comm", "c_exec", "c_coll"]
        }
      ]
    },
    {
      id: "sec_mgr",
      title: "Manager Feedback",
      isConfidential: true,
      respondents: ["manager"],
      questions: [
        { id: "q_str", type: "text", label: "What are this employee's key strengths?", required: true, displayOrder: 0 },
        { id: "q_imp", type: "text", label: "What areas need improvement?", required: true, displayOrder: 1 },
        { id: "q_rate", type: "rating", label: "Overall performance rating", required: true, displayOrder: 2 }
      ]
    }
  ];
}
function krProgress(kr) {
  if (!kr.targetValue) return 0;
  return Math.round(kr.currentValue / kr.targetValue * 1e3) / 10;
}
function statusFromProgress(p) {
  if (p >= 100) return "completed";
  if (p >= 70) return "on_track";
  if (p >= 45) return "at_risk";
  return "behind";
}
function mkObjective(partial) {
  const { krs, ...rest } = partial;
  const keyResults = krs.map((k, i) => {
    const progress = krProgress({ targetValue: k.target, currentValue: k.current });
    return {
      id: `${rest.id}_kr${i + 1}`,
      objectiveId: rest.id,
      title: k.title,
      targetValue: k.target,
      currentValue: k.current,
      unit: k.unit,
      progress,
      status: statusFromProgress(progress),
      lastUpdatedAt: daysFromNow(-3)
    };
  });
  const avg = keyResults.length ? Math.round(keyResults.reduce((s, k) => s + k.progress, 0) / keyResults.length * 10) / 10 : 0;
  return { ...rest, keyResults, progress: avg, status: statusFromProgress(avg), createdAt: daysFromNow(-60) };
}
function seedAll(employees) {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  const quarter = `q${Math.floor((/* @__PURE__ */ new Date()).getMonth() / 3) + 1}`;
  const form = {
    id: "form_default",
    name: "Standard Review Form",
    sections: defaultFormSections(),
    usedInCycles: 1
  };
  const cycles = [
    {
      id: "cyc_annual",
      name: `Annual Review ${year}-${String((year + 1) % 100).padStart(2, "0")}`,
      framework: "hybrid",
      period: "annual",
      year,
      startDate: daysFromNow(-120),
      endDate: daysFromNow(120),
      selfReviewDeadline: daysFromNow(12),
      managerReviewDeadline: daysFromNow(27),
      peerNominationDeadline: daysFromNow(5),
      status: "review_in_progress",
      includesPeerReview: true,
      includes360: false,
      includesCascadedGoals: true,
      ratingScaleId: "rs_5",
      reviewFormId: "form_default",
      completionRate: 0,
      employeeCount: employees.length
    },
    {
      id: "cyc_h1",
      name: `Mid-Year Check-in ${year}`,
      framework: "okr",
      period: "h1",
      year,
      startDate: daysFromNow(-320),
      endDate: daysFromNow(-160),
      selfReviewDeadline: daysFromNow(-200),
      managerReviewDeadline: daysFromNow(-180),
      status: "completed",
      includesPeerReview: false,
      includes360: false,
      includesCascadedGoals: false,
      ratingScaleId: "rs_5",
      reviewFormId: "form_default",
      completionRate: 100,
      employeeCount: employees.length
    }
  ];
  const deptIds = Array.from(new Set(employees.map((e) => e.departmentId))).slice(0, 3);
  const objectives = [
    mkObjective({
      id: "obj_company_1",
      title: "Grow to ₹10Cr ARR",
      description: "Company-wide revenue objective for the year.",
      ownerId: "company",
      level: "company",
      period: quarter,
      year,
      createdBy: "company",
      krs: [
        { title: "Revenue 8.5Cr by Sep", target: 8.5, current: 7.2, unit: "Cr" },
        { title: "Churn below 4%", target: 4, current: 4.2, unit: "%" },
        { title: "NPS above 40", target: 40, current: 38, unit: "pts" }
      ]
    }),
    mkObjective({
      id: "obj_company_2",
      title: "Become a top-3 employer in our category",
      ownerId: "company",
      level: "company",
      period: quarter,
      year,
      createdBy: "company",
      krs: [
        { title: "eNPS above 45", target: 45, current: 51, unit: "pts" },
        { title: "Regretted attrition below 8%", target: 8, current: 9.4, unit: "%" }
      ]
    })
  ];
  deptIds.forEach((d, i) => {
    objectives.push(
      mkObjective({
        id: `obj_dept_${i + 1}`,
        title: i === 0 ? "Improve product uptime to 99.9%" : `Department objective ${i + 1}`,
        ownerId: `department:${d}`,
        level: "department",
        departmentId: d,
        parentObjectiveId: "obj_company_1",
        period: quarter,
        year,
        createdBy: "company",
        krs: [
          { title: "Uptime 99.9%", target: 99.9, current: i === 0 ? 99.2 : 96, unit: "%" },
          { title: "Mean time to recovery under 30m", target: 30, current: 44, unit: "min" }
        ]
      })
    );
  });
  employees.slice(0, 8).forEach((e, i) => {
    objectives.push(
      mkObjective({
        id: `obj_ind_${e.id}`,
        title: ["Reduce P1 incidents to under 3/month", "Ship 4 customer-requested features", "Cut onboarding time to 5 days", "Close 12 enterprise deals"][i % 4],
        ownerId: e.id,
        level: "individual",
        departmentId: e.departmentId,
        parentObjectiveId: `obj_dept_1`,
        cycleId: "cyc_annual",
        period: quarter,
        year,
        createdBy: e.id,
        krs: [
          { title: "Primary metric", target: 100, current: [33, 72, 95, 125, 58][i % 5], unit: "%" },
          { title: "Secondary metric", target: 20, current: [6, 14, 20, 11, 18][i % 5], unit: "items" }
        ]
      })
    );
  });
  const kras = [];
  employees.slice(0, 8).forEach((e) => {
    const base = [
      { name: "Delivery Excellence", weightage: 40 },
      { name: "Quality & Reliability", weightage: 35 },
      { name: "Collaboration", weightage: 25 }
    ];
    base.forEach((b, i) => {
      const kraId = `kra_${e.id}_${i}`;
      kras.push({
        id: kraId,
        employeeId: e.id,
        cycleId: "cyc_annual",
        name: b.name,
        weightage: b.weightage,
        rating: i === 2 ? void 0 : 3 + i % 2,
        kpis: [
          { id: `${kraId}_k1`, kraId, name: `${b.name} — primary KPI`, targetValue: 100, actualValue: 70 + i * 8, unit: "%", weightage: 60, rating: 3 + i % 2 },
          { id: `${kraId}_k2`, kraId, name: `${b.name} — secondary KPI`, targetValue: 12, actualValue: 9, unit: "items", weightage: 40 }
        ]
      });
    });
  });
  const reviews = employees.map((e, i) => {
    const mgr = e.reportingManagerId ?? employees[0].id;
    const bucket = i % 5;
    const status = bucket === 0 ? "completed" : bucket === 1 ? "manager_complete" : bucket === 2 ? "self_complete" : bucket === 3 ? "self_pending" : "not_started";
    const selfRating = 3 + i % 3 * 0.5;
    const mgrRating = 3 + (i + 1) % 3 * 0.5;
    const hasSelf = ["self_complete", "manager_complete", "completed"].includes(status);
    const hasMgr = ["manager_complete", "completed"].includes(status);
    const perfAxis = ["low", "medium", "high"][i % 3];
    const potAxis = ["medium", "high", "low"][i % 3];
    return {
      id: `rev_${e.id}`,
      cycleId: "cyc_annual",
      employeeId: e.id,
      managerId: mgr,
      status,
      selfMissed: bucket === 4 && i % 2 === 0,
      selfAssessment: hasSelf ? { id: `sub_self_${e.id}`, reviewId: `rev_${e.id}`, submitterId: e.id, submittedAt: daysFromNow(-8), responses: [], overallRating: selfRating, overallComment: "Delivered on the main commitments this period.", isDraft: false } : void 0,
      managerReview: hasMgr ? { id: `sub_mgr_${e.id}`, reviewId: `rev_${e.id}`, submitterId: mgr, submittedAt: daysFromNow(-4), responses: [], overallRating: mgrRating, overallComment: "Strong execution, room to grow on stakeholder communication.", isDraft: false } : void 0,
      peerReviews: [],
      calibratedRating: hasMgr ? mgrRating : void 0,
      ninebox: hasMgr ? { performance: perfAxis, potential: potAxis } : void 0,
      isSharedWithEmployee: status === "completed" && i % 2 === 0,
      peerNominees: [],
      managerChangedMidCycle: i % 7 === 0 && i > 0
    };
  });
  const pipEmp = employees[3] ?? employees[0];
  const pips = pipEmp ? [
    {
      id: "pip_1",
      employeeId: pipEmp.id,
      managerId: pipEmp.reportingManagerId ?? employees[0].id,
      createdBy: "hr",
      startDate: daysFromNow(-30),
      endDate: daysFromNow(30),
      reason: "Consistent misses against delivery commitments over two quarters.",
      status: "active",
      goals: [
        { id: "pipg_1", pipId: "pip_1", description: "Close all assigned tickets within SLA", metric: "95% SLA adherence", dueDate: daysFromNow(15), status: "in_progress" },
        { id: "pipg_2", pipId: "pip_1", description: "Complete code review turnaround in 24h", metric: "Average < 24h", dueDate: daysFromNow(30), status: "pending" }
      ],
      checkIns: [
        { id: "pipc_1", pipId: "pip_1", date: daysFromNow(-14), notes: "Improvement visible on ticket throughput. Review turnaround still slow.", byId: "hr", goalsStatusSnapshot: [{ goalId: "pipg_1", status: "in_progress" }] }
      ]
    }
  ] : [];
  write$2(SETTINGS_KEY, DEFAULT_SETTINGS);
  write$2(FORMS_KEY, [form]);
  write$2(CYCLES_KEY, cycles);
  write$2(OBJECTIVES_KEY, objectives);
  write$2(KRAS_KEY, kras);
  write$2(REVIEWS_KEY, reviews);
  write$2(PIPS_KEY, pips);
  write$2(SEEDED_KEY$1, true);
}
let seeding = null;
async function ensureSeed$1() {
  if (typeof window === "undefined") return;
  if (read$2(SEEDED_KEY$1, false)) return;
  if (!seeding) {
    seeding = (async () => {
      const res = await listEmployees();
      seedAll(res.data ?? []);
    })();
  }
  await seeding;
}
function objectiveDisplayProgress(o) {
  return Math.min(100, Math.round(o.progress));
}
function weightageTotal(kras) {
  return kras.reduce((s, k) => s + (Number(k.weightage) || 0), 0);
}
function computeCompletion(reviews, cycleId) {
  const list = reviews.filter((r) => r.cycleId === cycleId);
  if (!list.length) return 0;
  const done = list.filter((r) => r.status === "completed" || r.status === "manager_complete").length;
  return Math.round(done / list.length * 100);
}
const performanceApi = {
  // Settings ---------------------------------------------------------------
  async getSettings() {
    await ensureSeed$1();
    return delay(ok(read$2(SETTINGS_KEY, DEFAULT_SETTINGS)));
  },
  async updateSettings(patch) {
    const curr = read$2(SETTINGS_KEY, DEFAULT_SETTINGS);
    const next = { ...curr, ...patch };
    write$2(SETTINGS_KEY, next);
    return delay(ok(next));
  },
  // Objectives -------------------------------------------------------------
  async listObjectives(filters = {}) {
    await ensureSeed$1();
    let list = read$2(OBJECTIVES_KEY, []);
    if (filters.ownerId) list = list.filter((o) => o.ownerId === filters.ownerId);
    if (filters.level) list = list.filter((o) => o.level === filters.level);
    if (filters.year) list = list.filter((o) => o.year === filters.year);
    if (filters.period) list = list.filter((o) => o.period === filters.period);
    return delay(ok(list));
  },
  async saveObjective(input) {
    const list = read$2(OBJECTIVES_KEY, []);
    if (input.id) {
      const idx = list.findIndex((o) => o.id === input.id);
      if (idx === -1) return delay(fail("Objective not found."));
      list[idx] = { ...list[idx], ...input };
      write$2(OBJECTIVES_KEY, list);
      return delay(ok(list[idx]));
    }
    const created = {
      id: uid("obj_"),
      title: input.title,
      description: input.description,
      ownerId: input.ownerId,
      level: input.level,
      departmentId: input.departmentId,
      parentObjectiveId: input.parentObjectiveId,
      cycleId: input.cycleId,
      period: input.period ?? "q1",
      year: input.year ?? (/* @__PURE__ */ new Date()).getFullYear(),
      status: "active",
      progress: 0,
      keyResults: input.keyResults ?? [],
      createdBy: input.createdBy ?? input.ownerId,
      createdAt: iso(/* @__PURE__ */ new Date())
    };
    list.push(created);
    write$2(OBJECTIVES_KEY, list);
    return delay(ok(created));
  },
  /** Edge case 1 — never orphan cascaded goals. */
  async countChildObjectives(objectiveId) {
    await ensureSeed$1();
    return read$2(OBJECTIVES_KEY, []).filter((o) => o.parentObjectiveId === objectiveId).length;
  },
  async deleteObjective(id) {
    const list = read$2(OBJECTIVES_KEY, []);
    const children = list.filter((o) => o.parentObjectiveId === id).length;
    if (children > 0) {
      return delay(
        fail(`This objective has ${children} linked team/individual goals. Delete them first or unlink them before removing this objective.`)
      );
    }
    write$2(OBJECTIVES_KEY, list.filter((o) => o.id !== id));
    return delay(ok(true));
  },
  async updateKeyResult(objectiveId, krId, currentValue) {
    const list = read$2(OBJECTIVES_KEY, []);
    const obj = list.find((o) => o.id === objectiveId);
    if (!obj) return delay(fail("Objective not found."));
    const kr = obj.keyResults.find((k) => k.id === krId);
    if (!kr) return delay(fail("Key result not found."));
    kr.currentValue = currentValue;
    kr.progress = krProgress(kr);
    kr.status = statusFromProgress(kr.progress);
    kr.lastUpdatedAt = iso(/* @__PURE__ */ new Date());
    obj.progress = Math.round(obj.keyResults.reduce((s, k) => s + k.progress, 0) / obj.keyResults.length * 10) / 10;
    obj.status = statusFromProgress(obj.progress);
    write$2(OBJECTIVES_KEY, list);
    return delay(ok(obj));
  },
  async addKeyResult(objectiveId, kr) {
    const list = read$2(OBJECTIVES_KEY, []);
    const obj = list.find((o) => o.id === objectiveId);
    if (!obj) return delay(fail("Objective not found."));
    const progress = krProgress(kr);
    obj.keyResults.push({
      id: uid("kr_"),
      objectiveId,
      title: kr.title,
      targetValue: kr.targetValue,
      currentValue: kr.currentValue,
      unit: kr.unit,
      progress,
      status: statusFromProgress(progress),
      lastUpdatedAt: iso(/* @__PURE__ */ new Date())
    });
    obj.progress = Math.round(obj.keyResults.reduce((s, k) => s + k.progress, 0) / obj.keyResults.length * 10) / 10;
    obj.status = statusFromProgress(obj.progress);
    write$2(OBJECTIVES_KEY, list);
    return delay(ok(obj));
  },
  // KRAs -------------------------------------------------------------------
  async listKras(employeeId, cycleId) {
    await ensureSeed$1();
    const list = read$2(KRAS_KEY, []).filter(
      (k) => k.employeeId === employeeId && (!cycleId || k.cycleId === cycleId)
    );
    return delay(ok(list));
  },
  async saveKras(employeeId, cycleId, kras, force = false, note) {
    const total = weightageTotal(kras);
    if (total !== 100 && !force) return delay(fail(`KRA weightage must total 100%. Current total is ${total}%.`));
    if (total !== 100 && force && !note?.trim()) return delay(fail("A note is required to submit unbalanced KRA weightage."));
    const all = read$2(KRAS_KEY, []).filter((k) => !(k.employeeId === employeeId && k.cycleId === cycleId));
    write$2(KRAS_KEY, [...all, ...kras]);
    return delay(ok(kras));
  },
  // Cycles + forms ---------------------------------------------------------
  async listCycles() {
    await ensureSeed$1();
    const cycles = read$2(CYCLES_KEY, []);
    const reviews = read$2(REVIEWS_KEY, []);
    return delay(ok(cycles.map((c) => ({ ...c, completionRate: c.status === "completed" ? 100 : computeCompletion(reviews, c.id) }))));
  },
  async getCycle(id) {
    const res = await this.listCycles();
    const c = res.data?.find((x) => x.id === id);
    return c ? ok(c) : fail("Cycle not found.");
  },
  /** Edge case 4 — overlap is a warning, never a block. */
  async findOverlappingCycles(start, end, deptIds, ignoreId) {
    await ensureSeed$1();
    const s = new Date(start).getTime();
    const e = new Date(end).getTime();
    return read$2(CYCLES_KEY, []).filter((c) => {
      if (c.id === ignoreId) return false;
      if (!["active", "draft", "review_in_progress"].includes(c.status)) return false;
      const overlapDept = !deptIds?.length || !c.departmentIds?.length || c.departmentIds.some((d) => deptIds.includes(d));
      const overlapDate = new Date(c.startDate).getTime() <= e && new Date(c.endDate).getTime() >= s;
      return overlapDept && overlapDate;
    });
  },
  async saveCycle(input) {
    const list = read$2(CYCLES_KEY, []);
    if (input.id) {
      const idx = list.findIndex((c) => c.id === input.id);
      if (idx === -1) return delay(fail("Cycle not found."));
      if (list[idx].status !== "draft" && input.ratingScaleId && input.ratingScaleId !== list[idx].ratingScaleId) {
        return delay(fail("Rating scale cannot be changed after a cycle is activated. Create a new cycle with the revised scale."));
      }
      list[idx] = { ...list[idx], ...input };
      write$2(CYCLES_KEY, list);
      return delay(ok(list[idx]));
    }
    const created = {
      id: uid("cyc_"),
      name: input.name,
      framework: input.framework ?? "hybrid",
      period: input.period ?? "annual",
      year: input.year ?? (/* @__PURE__ */ new Date()).getFullYear(),
      startDate: input.startDate ?? daysFromNow(0),
      endDate: input.endDate ?? daysFromNow(180),
      selfReviewDeadline: input.selfReviewDeadline ?? daysFromNow(30),
      managerReviewDeadline: input.managerReviewDeadline ?? daysFromNow(45),
      peerNominationDeadline: input.peerNominationDeadline,
      status: "draft",
      includesPeerReview: input.includesPeerReview ?? false,
      includes360: input.includes360 ?? false,
      includesCascadedGoals: input.includesCascadedGoals ?? true,
      ratingScaleId: input.ratingScaleId ?? "rs_5",
      reviewFormId: input.reviewFormId ?? "form_default",
      departmentIds: input.departmentIds,
      completionRate: 0,
      employeeCount: input.employeeCount ?? 0
    };
    list.push(created);
    write$2(CYCLES_KEY, list);
    return delay(ok(created));
  },
  async setCycleStatus(id, status) {
    const list = read$2(CYCLES_KEY, []);
    const c = list.find((x) => x.id === id);
    if (!c) return delay(fail("Cycle not found."));
    c.status = status;
    write$2(CYCLES_KEY, list);
    return delay(ok(c));
  },
  async duplicateCycle(id) {
    const list = read$2(CYCLES_KEY, []);
    const src = list.find((x) => x.id === id);
    if (!src) return delay(fail("Cycle not found."));
    const copy = { ...src, id: uid("cyc_"), name: `${src.name} (copy)`, status: "draft", completionRate: 0 };
    list.push(copy);
    write$2(CYCLES_KEY, list);
    return delay(ok(copy));
  },
  async getForm(id) {
    await ensureSeed$1();
    const f = read$2(FORMS_KEY, []).find((x) => x.id === id);
    return delay(f ? ok(f) : fail("Review form not found."));
  },
  async saveForm(form) {
    const list = read$2(FORMS_KEY, []);
    const idx = list.findIndex((f) => f.id === form.id);
    if (idx === -1) list.push(form);
    else list[idx] = form;
    write$2(FORMS_KEY, list);
    return delay(ok(form));
  },
  // Reviews ----------------------------------------------------------------
  async listReviews(filters = {}) {
    await ensureSeed$1();
    let list = read$2(REVIEWS_KEY, []);
    if (filters.cycleId) list = list.filter((r) => r.cycleId === filters.cycleId);
    if (filters.employeeId) list = list.filter((r) => r.employeeId === filters.employeeId);
    if (filters.managerId) list = list.filter((r) => r.managerId === filters.managerId);
    return delay(ok(list));
  },
  async getReview(id) {
    await ensureSeed$1();
    const r = read$2(REVIEWS_KEY, []).find((x) => x.id === id);
    return delay(r ? ok(r) : fail("Review not found."));
  },
  async saveSubmission(reviewId, kind, submission) {
    const list = read$2(REVIEWS_KEY, []);
    const r = list.find((x) => x.id === reviewId);
    if (!r) return delay(fail("Review not found."));
    const full = {
      ...submission,
      id: uid("sub_"),
      reviewId,
      submittedAt: submission.isDraft ? void 0 : iso(/* @__PURE__ */ new Date())
    };
    if (kind === "self") {
      r.selfAssessment = full;
      if (!submission.isDraft) {
        r.selfMissed = false;
        r.status = "self_complete";
      } else if (r.status === "not_started") r.status = "self_pending";
    } else {
      r.managerReview = full;
      if (!submission.isDraft) {
        const peerPending = r.peerReviews.some((p) => p.status === "pending");
        r.status = peerPending ? "peer_pending" : "manager_complete";
        r.calibratedRating = r.calibratedRating ?? full.overallRating;
      } else if (r.status !== "manager_complete") r.status = "manager_pending";
    }
    write$2(REVIEWS_KEY, list);
    return delay(ok(r));
  },
  /** Edge case 8 — a reviewee may never be their own peer reviewer. */
  async nominatePeers(reviewId, nomineeIds) {
    const list = read$2(REVIEWS_KEY, []);
    const r = list.find((x) => x.id === reviewId);
    if (!r) return delay(fail("Review not found."));
    if (nomineeIds.includes(r.employeeId)) return delay(fail("You cannot nominate yourself as a peer reviewer."));
    r.peerNominees = nomineeIds;
    r.peerReviews = nomineeIds.map((id) => {
      const existing = r.peerReviews.find((p) => p.reviewerId === id);
      return existing ?? { id: uid("peer_"), reviewId, reviewerId: id, status: "pending" };
    });
    write$2(REVIEWS_KEY, list);
    return delay(ok(r));
  },
  async setPeerStatus(reviewId, reviewerId, status) {
    const list = read$2(REVIEWS_KEY, []);
    const r = list.find((x) => x.id === reviewId);
    if (!r) return delay(fail("Review not found."));
    const p = r.peerReviews.find((x) => x.reviewerId === reviewerId);
    if (p) p.status = status;
    write$2(REVIEWS_KEY, list);
    return delay(ok(r));
  },
  /** Edge case 10 — calibrated rating is stored separately from the manager rating. */
  async calibrate(reviewId, patch) {
    const list = read$2(REVIEWS_KEY, []);
    const r = list.find((x) => x.id === reviewId);
    if (!r) return delay(fail("Review not found."));
    Object.assign(r, patch);
    write$2(REVIEWS_KEY, list);
    return delay(ok(r));
  },
  /** Edge case 11 — sharing is always an explicit action. */
  async shareReviews(cycleId, reviewId) {
    const list = read$2(REVIEWS_KEY, []);
    let count = 0;
    list.forEach((r) => {
      if (r.cycleId !== cycleId) return;
      if (reviewId && r.id !== reviewId) return;
      if (r.status === "manager_complete" || r.status === "completed") {
        r.isSharedWithEmployee = true;
        r.status = "completed";
        count += 1;
      }
    });
    write$2(REVIEWS_KEY, list);
    return delay(ok(count));
  },
  /** Edge case 7 — bulk-reassign pending manager reviews after a manager change. */
  async reassignManager(reviewIds, newManagerId) {
    const list = read$2(REVIEWS_KEY, []);
    let n = 0;
    list.forEach((r) => {
      if (!reviewIds.includes(r.id)) return;
      r.managerId = newManagerId;
      r.managerChangedMidCycle = false;
      n += 1;
    });
    write$2(REVIEWS_KEY, list);
    return delay(ok(n));
  },
  async sendReminders(cycleId) {
    const list = read$2(REVIEWS_KEY, []).filter(
      (r) => r.cycleId === cycleId && r.status !== "completed" && r.status !== "manager_complete"
    );
    return delay(ok(list.length));
  },
  // PIPs -------------------------------------------------------------------
  async listPips(filters = {}) {
    await ensureSeed$1();
    let list = read$2(PIPS_KEY, []);
    if (filters.employeeId) list = list.filter((p) => p.employeeId === filters.employeeId);
    if (filters.managerId) list = list.filter((p) => p.managerId === filters.managerId);
    return delay(ok(list));
  },
  async createPip(input) {
    if (!input.goals.length) return delay(fail("A PIP needs at least one improvement goal."));
    const id = uid("pip_");
    const pip = {
      id,
      employeeId: input.employeeId,
      managerId: input.managerId,
      createdBy: input.createdBy,
      startDate: input.startDate,
      endDate: input.endDate,
      reason: input.reason,
      status: "active",
      goals: input.goals.map((g) => ({ id: uid("pipg_"), pipId: id, ...g, status: "pending" })),
      checkIns: []
    };
    const list = read$2(PIPS_KEY, []);
    list.push(pip);
    write$2(PIPS_KEY, list);
    return delay(ok(pip));
  },
  async setPipGoalStatus(pipId, goalId, status) {
    const list = read$2(PIPS_KEY, []);
    const pip = list.find((p) => p.id === pipId);
    if (!pip) return delay(fail("PIP not found."));
    const g = pip.goals.find((x) => x.id === goalId);
    if (g) g.status = status;
    write$2(PIPS_KEY, list);
    return delay(ok(pip));
  },
  async addPipCheckIn(pipId, notes, byId) {
    const list = read$2(PIPS_KEY, []);
    const pip = list.find((p) => p.id === pipId);
    if (!pip) return delay(fail("PIP not found."));
    const entry = {
      id: uid("pipc_"),
      pipId,
      date: iso(/* @__PURE__ */ new Date()),
      notes,
      byId,
      goalsStatusSnapshot: pip.goals.map((g) => ({ goalId: g.id, status: g.status }))
    };
    pip.checkIns.unshift(entry);
    write$2(PIPS_KEY, list);
    return delay(ok(pip));
  },
  async concludePip(pipId, outcome, note) {
    const list = read$2(PIPS_KEY, []);
    const pip = list.find((p) => p.id === pipId);
    if (!pip) return delay(fail("PIP not found."));
    pip.outcome = outcome;
    pip.outcomeNote = note;
    pip.concludedAt = iso(/* @__PURE__ */ new Date());
    pip.status = outcome === "extended" ? "extended" : outcome === "separated" ? "terminated" : "completed";
    write$2(PIPS_KEY, list);
    return delay(ok(pip));
  },
  // Cross-module summary ---------------------------------------------------
  async cycleStats(cycleId) {
    await ensureSeed$1();
    const list = read$2(REVIEWS_KEY, []).filter((r) => r.cycleId === cycleId);
    return delay(
      ok({
        total: list.length,
        selfSubmitted: list.filter((r) => !!r.selfAssessment && !r.selfAssessment.isDraft).length,
        managerComplete: list.filter((r) => r.status === "manager_complete" || r.status === "completed").length,
        peerPending: list.reduce((s, r) => s + r.peerReviews.filter((p) => p.status === "pending").length, 0),
        completionRate: computeCompletion(list, cycleId),
        managerChanged: list.filter((r) => r.managerChangedMidCycle)
      })
    );
  }
};
const NOTIF_KEY = "hrms.ess.notifications";
const ANN_KEY = "hrms.ess.announcements";
const TICKET_KEY = "hrms.ess.tickets";
const EXPENSE_KEY = "hrms.ess.expenses";
const PCR_KEY = "hrms.ess.profileChangeRequests";
function read$1(key, seed2) {
  if (typeof window === "undefined") return seed2;
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) {
      window.localStorage.setItem(key, JSON.stringify(seed2));
      return seed2;
    }
    return JSON.parse(raw);
  } catch {
    return seed2;
  }
}
function write$1(key, value) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(key, JSON.stringify(value));
}
function hoursAgo(h) {
  return new Date(Date.now() - h * 36e5).toISOString();
}
function daysAgo(d) {
  return new Date(Date.now() - d * 864e5).toISOString();
}
function dateKey(d) {
  return new Date(Date.now() - d * 864e5).toISOString().slice(0, 10);
}
const SEED_NOTIFICATIONS = [
  {
    id: "ntf_1",
    category: "leave",
    title: "Leave request approved",
    body: "Your annual leave for 3 days has been approved by Priya Nair.",
    createdAt: hoursAgo(2),
    read: false,
    actionTo: "/leave/requests",
    actionLabel: "View request"
  },
  {
    id: "ntf_2",
    category: "payroll",
    title: "Payslip available",
    body: "Your pay slip for last month is ready to download.",
    createdAt: hoursAgo(20),
    read: false,
    actionTo: "/payroll/payslips",
    actionLabel: "Open payslips"
  },
  {
    id: "ntf_3",
    category: "attendance",
    title: "Missing punch detected",
    body: "No clock-out recorded on your last working day. Raise a regularisation.",
    createdAt: daysAgo(1),
    read: false,
    actionTo: "/attendance/regularization",
    actionLabel: "Regularise"
  },
  {
    id: "ntf_4",
    category: "performance",
    title: "Self-assessment due",
    body: "Your review self-assessment closes in 5 days.",
    createdAt: daysAgo(2),
    read: true,
    actionTo: "/performance/reviews",
    actionLabel: "Start review"
  },
  {
    id: "ntf_5",
    category: "announcement",
    title: "New leave policy published",
    body: "Carry-forward limits have changed from this financial year.",
    createdAt: daysAgo(3),
    read: true,
    actionTo: "/announcements",
    actionLabel: "Read"
  },
  {
    id: "ntf_6",
    category: "helpdesk",
    title: "Ticket HD-1042 updated",
    body: "IT support replied to your laptop replacement request.",
    createdAt: daysAgo(4),
    read: true,
    actionTo: "/helpdesk",
    actionLabel: "View ticket"
  }
];
const SEED_ANNOUNCEMENTS = [
  {
    id: "ann_1",
    title: "Revised leave policy effective this quarter",
    body: "Carry-forward is now capped at 10 days and lapses on 31 March. Encashment requests open in the last week of the financial year. Please review your balances and plan pending leave accordingly.",
    category: "policy",
    pinned: true,
    author: "People Operations",
    publishedAt: daysAgo(3),
    audience: "All employees",
    requiresAck: true,
    acknowledged: false
  },
  {
    id: "ann_2",
    title: "Quarterly town hall — Friday 4:00 PM",
    body: "Join the leadership team for the quarterly business update, followed by an open Q&A. Calendar invites have been sent to all employees.",
    category: "event",
    pinned: true,
    author: "Internal Comms",
    publishedAt: daysAgo(1),
    audience: "All employees"
  },
  {
    id: "ann_3",
    title: "Office closed on account of local holiday",
    body: "The office will remain closed next Monday. Attendance will be auto-marked as holiday for all locations in Bengaluru.",
    category: "general",
    pinned: false,
    author: "Admin",
    publishedAt: daysAgo(5),
    audience: "Bengaluru"
  },
  {
    id: "ann_4",
    title: "Welcome to our newest joiners",
    body: "Please join us in welcoming six new colleagues across Engineering, Design and Sales who joined this month.",
    category: "celebration",
    pinned: false,
    author: "People Operations",
    publishedAt: daysAgo(8),
    audience: "All employees"
  },
  {
    id: "ann_5",
    title: "Action needed: update your emergency contact",
    body: "Records show several profiles without an emergency contact. Please update yours from My profile before the end of the month.",
    category: "urgent",
    pinned: false,
    author: "HR Compliance",
    publishedAt: daysAgo(11),
    audience: "All employees"
  }
];
const SEED_TICKETS = [
  {
    id: "tkt_1",
    code: "HD-1042",
    subject: "Laptop replacement request",
    description: "My laptop battery drains within an hour and the fan is noisy. Requesting a replacement or repair.",
    category: "it",
    priority: "high",
    status: "in_progress",
    raisedByEmployeeId: "",
    raisedByName: "You",
    assignedTo: "IT Support",
    createdAt: daysAgo(4),
    updatedAt: daysAgo(1),
    comments: [
      { id: "c1", author: "IT Support", message: "We have raised a hardware ticket with the vendor. Expect a loaner device tomorrow.", at: daysAgo(1) }
    ]
  },
  {
    id: "tkt_2",
    code: "HD-1039",
    subject: "Payslip shows incorrect HRA",
    description: "The HRA component in last month's payslip looks lower than my salary structure.",
    category: "payroll",
    priority: "medium",
    status: "resolved",
    raisedByEmployeeId: "",
    raisedByName: "You",
    assignedTo: "Payroll Team",
    createdAt: daysAgo(12),
    updatedAt: daysAgo(9),
    comments: [
      { id: "c2", author: "Payroll Team", message: "This was a proration for mid-month structure revision. Corrected arrears will reflect next cycle.", at: daysAgo(9) }
    ]
  },
  {
    id: "tkt_3",
    code: "HD-1031",
    subject: "Access card not working at Gate 2",
    description: "Card is rejected at the Gate 2 reader since Monday.",
    category: "facilities",
    priority: "low",
    status: "closed",
    raisedByEmployeeId: "",
    raisedByName: "You",
    assignedTo: "Facilities",
    createdAt: daysAgo(21),
    updatedAt: daysAgo(18),
    comments: []
  }
];
const SEED_EXPENSES = [
  {
    id: "exp_1",
    code: "EXP-2041",
    employeeId: "",
    employeeName: "You",
    category: "travel",
    title: "Client visit — cab fare",
    amount: 2450,
    spentOn: dateKey(6),
    status: "submitted",
    receiptName: "cab-receipt.pdf",
    submittedAt: daysAgo(5),
    description: "Round trip to client office for the quarterly review."
  },
  {
    id: "exp_2",
    code: "EXP-2033",
    employeeId: "",
    employeeName: "You",
    category: "meals",
    title: "Team lunch",
    amount: 5200,
    spentOn: dateKey(20),
    status: "reimbursed",
    receiptName: "lunch-bill.jpg",
    submittedAt: daysAgo(19),
    decidedAt: daysAgo(15)
  },
  {
    id: "exp_3",
    code: "EXP-2027",
    employeeId: "",
    employeeName: "You",
    category: "equipment",
    title: "Mechanical keyboard",
    amount: 7800,
    spentOn: dateKey(34),
    status: "rejected",
    submittedAt: daysAgo(33),
    decidedAt: daysAgo(30),
    decisionNote: "Peripherals must be requested through the IT asset process."
  }
];
function loadNotifications() {
  return read$1(NOTIF_KEY, SEED_NOTIFICATIONS).slice().sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}
const essApi = {
  async listNotifications() {
    return delay(ok(loadNotifications()));
  },
  async unreadCount() {
    return delay(ok(loadNotifications().filter((n) => !n.read).length), 80);
  },
  async markRead(id) {
    const next = loadNotifications().map((n) => n.id === id ? { ...n, read: true } : n);
    write$1(NOTIF_KEY, next);
    return delay(ok(next), 80);
  },
  async markAllRead() {
    const next = loadNotifications().map((n) => ({ ...n, read: true }));
    write$1(NOTIF_KEY, next);
    return delay(ok(next), 80);
  },
  async clearNotification(id) {
    const next = loadNotifications().filter((n) => n.id !== id);
    write$1(NOTIF_KEY, next);
    return delay(ok(next), 80);
  },
  // ───────────────────────── announcements ─────────────────────────
  async listAnnouncements() {
    const list = read$1(ANN_KEY, SEED_ANNOUNCEMENTS).slice().sort((a, b) => Number(b.pinned) - Number(a.pinned) || b.publishedAt.localeCompare(a.publishedAt));
    return delay(ok(list));
  },
  async acknowledgeAnnouncement(id) {
    const next = read$1(ANN_KEY, SEED_ANNOUNCEMENTS).map((a) => a.id === id ? { ...a, acknowledged: true } : a);
    write$1(ANN_KEY, next);
    return delay(ok(next), 120);
  },
  // ───────────────────────── helpdesk ─────────────────────────
  async listTickets() {
    const list = read$1(TICKET_KEY, SEED_TICKETS).slice().sort((a, b) => b.createdAt.localeCompare(a.createdAt));
    return delay(ok(list));
  },
  async createTicket(input) {
    if (!input.subject.trim()) return delay(fail("Subject is required."));
    if (input.description.trim().length < 10) {
      return delay(fail("Please describe the issue in at least 10 characters."));
    }
    const list = read$1(TICKET_KEY, SEED_TICKETS);
    const now = (/* @__PURE__ */ new Date()).toISOString();
    const ticket = {
      id: uid("tkt_"),
      code: `HD-${1100 + list.length}`,
      subject: input.subject.trim(),
      description: input.description.trim(),
      category: input.category,
      priority: input.priority,
      status: "open",
      raisedByEmployeeId: input.raisedByEmployeeId,
      raisedByName: input.raisedByName,
      createdAt: now,
      updatedAt: now,
      attachmentName: input.attachmentName,
      comments: []
    };
    write$1(TICKET_KEY, [ticket, ...list]);
    return delay(ok(ticket));
  },
  async addTicketComment(ticketId, comment) {
    const list = read$1(TICKET_KEY, SEED_TICKETS);
    const idx = list.findIndex((t) => t.id === ticketId);
    if (idx === -1) return delay(fail("Ticket not found."));
    const updated = {
      ...list[idx],
      updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
      comments: [...list[idx].comments, { ...comment, id: uid("c_"), at: (/* @__PURE__ */ new Date()).toISOString() }]
    };
    const next = list.slice();
    next[idx] = updated;
    write$1(TICKET_KEY, next);
    return delay(ok(updated), 120);
  },
  async closeTicket(ticketId) {
    const list = read$1(TICKET_KEY, SEED_TICKETS);
    const idx = list.findIndex((t) => t.id === ticketId);
    if (idx === -1) return delay(fail("Ticket not found."));
    const updated = { ...list[idx], status: "closed", updatedAt: (/* @__PURE__ */ new Date()).toISOString() };
    const next = list.slice();
    next[idx] = updated;
    write$1(TICKET_KEY, next);
    return delay(ok(updated), 120);
  },
  // ───────────────────────── expenses ─────────────────────────
  async listExpenses() {
    const list = read$1(EXPENSE_KEY, SEED_EXPENSES).slice().sort((a, b) => b.spentOn.localeCompare(a.spentOn));
    return delay(ok(list));
  },
  async createExpense(input) {
    if (!input.title.trim()) return delay(fail("Give the claim a short title."));
    if (!input.amount || input.amount <= 0) return delay(fail("Enter an amount greater than zero."));
    if (!input.spentOn) return delay(fail("Select the date the expense was incurred."));
    if (input.spentOn > (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)) {
      return delay(fail("Expense date cannot be in the future."));
    }
    const list = read$1(EXPENSE_KEY, SEED_EXPENSES);
    const claim = {
      id: uid("exp_"),
      code: `EXP-${2100 + list.length}`,
      employeeId: input.employeeId,
      employeeName: input.employeeName,
      category: input.category,
      title: input.title.trim(),
      description: input.description?.trim() || void 0,
      amount: input.amount,
      spentOn: input.spentOn,
      status: input.submit ? "submitted" : "draft",
      receiptName: input.receiptName,
      submittedAt: input.submit ? (/* @__PURE__ */ new Date()).toISOString() : void 0
    };
    write$1(EXPENSE_KEY, [claim, ...list]);
    return delay(ok(claim));
  },
  async submitExpense(id) {
    const next = read$1(EXPENSE_KEY, SEED_EXPENSES).map(
      (e) => e.id === id && e.status === "draft" ? { ...e, status: "submitted", submittedAt: (/* @__PURE__ */ new Date()).toISOString() } : e
    );
    write$1(EXPENSE_KEY, next);
    return delay(ok(next), 120);
  },
  async deleteExpense(id) {
    const next = read$1(EXPENSE_KEY, SEED_EXPENSES).filter((e) => e.id !== id);
    write$1(EXPENSE_KEY, next);
    return delay(ok(next), 120);
  },
  // ───────────────────── profile change requests ─────────────────────
  async listChangeRequests(employeeId) {
    const list = read$1(PCR_KEY, []).filter((r) => r.employeeId === employeeId);
    return delay(ok(list.sort((a, b) => b.requestedAt.localeCompare(a.requestedAt))), 120);
  },
  async requestProfileChange(input) {
    if (!input.requestedValue.trim()) return delay(fail("Enter the new value."));
    if (input.requestedValue.trim() === input.currentValue) {
      return delay(fail("The new value is the same as the current one."));
    }
    const list = read$1(PCR_KEY, []);
    if (list.some((r) => r.employeeId === input.employeeId && r.field === input.field && r.status === "pending")) {
      return delay(fail("A change request for this field is already awaiting approval."));
    }
    const req = {
      id: uid("pcr_"),
      employeeId: input.employeeId,
      field: input.field,
      label: input.label,
      currentValue: input.currentValue,
      requestedValue: input.requestedValue.trim(),
      status: "pending",
      requestedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    write$1(PCR_KEY, [req, ...list]);
    return delay(ok(req));
  },
  async cancelChangeRequest(id) {
    write$1(PCR_KEY, read$1(PCR_KEY, []).filter((r) => r.id !== id));
    return delay(ok(true), 100);
  }
};
const SAVED_KEY = "hrms.reports.saved";
const SEEDED_KEY = "hrms.reports.saved.seeded";
function read(key, fallback) {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}
function write(key, value) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(key, JSON.stringify(value));
}
function nowIso() {
  return (/* @__PURE__ */ new Date()).toISOString();
}
async function getExecutiveKpis() {
  const empsRes = await listEmployees();
  const employees = empsRes.data ?? [];
  const active = employees.filter((e) => e.employmentStatus === "active" || e.employmentStatus === "probation" || e.employmentStatus === "notice_period");
  const twelveMonthsAgo = /* @__PURE__ */ new Date();
  twelveMonthsAgo.setMonth(twelveMonthsAgo.getMonth() - 12);
  const leftLast12m = employees.filter(
    (e) => e.employmentStatus === "inactive" && new Date(e.updatedAt) >= twelveMonthsAgo
  ).length;
  const attritionRate = active.length ? Math.round(leftLast12m / (active.length + leftLast12m) * 1e3) / 10 : 0;
  let avgAttendance = 96.2;
  try {
    const from = /* @__PURE__ */ new Date();
    from.setDate(from.getDate() - 30);
    const recs = (await attendanceApi.listRecords({ from: from.toISOString().slice(0, 10) })).data ?? [];
    const relevant = recs.filter((r) => !["holiday", "week_off"].includes(r.status));
    const present = relevant.filter((r) => ["present", "late", "half_day"].includes(r.status)).length;
    avgAttendance = relevant.length ? Math.round(present / relevant.length * 1e3) / 10 : avgAttendance;
  } catch {
  }
  let lastPayrollCost = 0;
  try {
    const runs = await payrollApi.listRuns?.();
    const list = runs?.data ?? [];
    const latest = [...list].sort((a, b) => (b.month ?? "").localeCompare(a.month ?? ""))[0];
    lastPayrollCost = latest?.totalCost ?? latest?.totalNetPay ?? 0;
  } catch {
  }
  if (!lastPayrollCost) {
    lastPayrollCost = active.reduce((sum, e) => sum + (e.ctcAnnual ?? 0) / 12, 0);
  }
  let openTickets = 0;
  try {
    const tickets = (await essApi.listTickets()).data ?? [];
    openTickets = tickets.filter((t) => t.status === "open" || t.status === "in_progress").length;
  } catch {
    openTickets = 4;
  }
  let activePips = 0;
  try {
    const pips = await performanceApi.listPips?.();
    activePips = (pips?.data ?? []).filter((p) => p.status === "active").length;
  } catch {
    activePips = 1;
  }
  const kpis = [
    { key: "headcount", label: "Total headcount", value: String(active.length), trend: `${employees.length} total incl. exited`, trendDir: "neutral" },
    { key: "attrition", label: "Attrition (12m)", value: `${attritionRate}%`, trend: `${leftLast12m} exits`, trendDir: attritionRate > 10 ? "down" : "up" },
    { key: "attendance", label: "Avg. attendance rate", value: `${avgAttendance}%`, trend: "Last 30 days", trendDir: avgAttendance >= 90 ? "up" : "down" },
    { key: "payroll_cost", label: "Last payroll cost", value: formatInr(lastPayrollCost), trend: "Most recent run", trendDir: "neutral" },
    { key: "helpdesk", label: "Open helpdesk tickets", value: String(openTickets), trend: openTickets > 5 ? "Needs attention" : "Within normal range", trendDir: openTickets > 5 ? "down" : "up" },
    { key: "pips", label: "Active PIPs", value: String(activePips), trend: "Performance improvement plans", trendDir: activePips > 0 ? "down" : "neutral" }
  ];
  return delay(ok(kpis));
}
function formatInr(n) {
  return "₹" + Math.round(n).toLocaleString("en-IN");
}
const STANDARD_REPORT_SLUGS = [
  "headcount-attrition",
  "leave-utilization",
  "attendance-summary",
  "performance-distribution",
  "helpdesk-expense-summary"
];
const STANDARD_REPORT_META = {
  "headcount-attrition": { title: "Headcount & Attrition", description: "Department-wise headcount and trailing attrition." },
  "leave-utilization": { title: "Leave Utilization", description: "Leave taken vs. allocated by leave type." },
  "attendance-summary": { title: "Attendance Summary", description: "Attendance status breakdown for the trailing 30 days." },
  "performance-distribution": { title: "Performance Distribution", description: "Calibrated rating distribution across the active cycle." },
  "helpdesk-expense-summary": { title: "Helpdesk & Expense Summary", description: "Ticket volumes by category and expense claims by status." }
};
async function getStandardReport(slug) {
  if (!STANDARD_REPORT_SLUGS.includes(slug)) {
    return delay(fail("Unknown report.", "not_found"));
  }
  const meta = STANDARD_REPORT_META[slug];
  const employees = (await listEmployees()).data ?? [];
  const depts = (await settingsApi.listDepartments()).data ?? [];
  if (slug === "headcount-attrition") {
    const byDept = depts.map((d) => {
      const list = employees.filter((e) => e.departmentId === d.id);
      const active = list.filter((e) => e.employmentStatus !== "inactive");
      const exited = list.filter((e) => e.employmentStatus === "inactive");
      return { dept: d.name, active: active.length, exited: exited.length };
    }).filter((r) => r.active + r.exited > 0);
    return delay(ok({
      title: meta.title,
      description: meta.description,
      charts: [
        { title: "Active headcount by department", kind: "bar", points: byDept.map((r) => ({ label: r.dept, value: r.active })) },
        { title: "Exits by department", kind: "bar", points: byDept.map((r) => ({ label: r.dept, value: r.exited, color: "#DC2626" })) }
      ],
      columns: [
        { key: "dept", label: "Department" },
        { key: "active", label: "Active headcount" },
        { key: "exited", label: "Exits" }
      ],
      rows: byDept
    }));
  }
  if (slug === "leave-utilization") {
    const types = (await leaveApi.listLeaveTypes(false)).data ?? [];
    const rows2 = [];
    for (const lt of types) {
      let allocated = 0;
      let taken = 0;
      for (const e of employees.slice(0, 20)) {
        const balances = (await leaveApi.listBalances(e.id)).data ?? [];
        const b = balances.find((x) => x.leaveTypeId === lt.id);
        if (b) {
          allocated += b.allocated;
          taken += b.used ?? 0;
        }
      }
      rows2.push({ leaveType: lt.name, allocated: Math.round(allocated), taken: Math.max(0, Math.round(taken)) });
    }
    return delay(ok({
      title: meta.title,
      description: meta.description,
      charts: [{ title: "Days taken by leave type", kind: "bar", points: rows2.map((r) => ({ label: String(r.leaveType), value: Number(r.taken) })) }],
      columns: [
        { key: "leaveType", label: "Leave type" },
        { key: "allocated", label: "Allocated (days)" },
        { key: "taken", label: "Taken (days)" }
      ],
      rows: rows2
    }));
  }
  if (slug === "attendance-summary") {
    const from = /* @__PURE__ */ new Date();
    from.setDate(from.getDate() - 30);
    const recs = (await attendanceApi.listRecords({ from: from.toISOString().slice(0, 10) })).data ?? [];
    const buckets = {};
    for (const r of recs) buckets[r.status] = (buckets[r.status] ?? 0) + 1;
    const rows2 = Object.entries(buckets).map(([status, count]) => ({ status, count }));
    return delay(ok({
      title: meta.title,
      description: meta.description,
      charts: [{ title: "Attendance status — last 30 days", kind: "bar", points: rows2.map((r) => ({ label: r.status.replace(/_/g, " "), value: r.count })) }],
      columns: [
        { key: "status", label: "Status" },
        { key: "count", label: "Days" }
      ],
      rows: rows2
    }));
  }
  if (slug === "performance-distribution") {
    const reviews = await performanceApi.listReviews?.({});
    const list = reviews?.data ?? [];
    const buckets = {};
    for (const r of list) {
      const rating = Math.round(r.calibratedRating ?? r.managerReview?.overallRating ?? 0);
      if (!rating) continue;
      buckets[rating] = (buckets[rating] ?? 0) + 1;
    }
    const rows2 = Object.entries(buckets).map(([rating, count]) => ({ rating: Number(rating), count }));
    return delay(ok({
      title: meta.title,
      description: meta.description,
      charts: [{ title: "Calibrated rating distribution", kind: "bar", points: rows2.map((r) => ({ label: `Rating ${r.rating}`, value: r.count })) }],
      columns: [
        { key: "rating", label: "Rating" },
        { key: "count", label: "Employees" }
      ],
      rows: rows2
    }));
  }
  const tickets = (await essApi.listTickets()).data ?? [];
  const expenses = (await essApi.listExpenses()).data ?? [];
  const byCat = {};
  for (const t of tickets) byCat[t.category] = (byCat[t.category] ?? 0) + 1;
  const byExpStatus = {};
  for (const e of expenses) byExpStatus[e.status] = (byExpStatus[e.status] ?? 0) + e.amount;
  const rows = [
    ...Object.entries(byCat).map(([category, count]) => ({ type: "Ticket category", label: category, value: count })),
    ...Object.entries(byExpStatus).map(([status, amount]) => ({ type: "Expense amount", label: status, value: Math.round(amount) }))
  ];
  return delay(ok({
    title: meta.title,
    description: meta.description,
    charts: [
      { title: "Tickets by category", kind: "bar", points: Object.entries(byCat).map(([label, value]) => ({ label, value })) },
      { title: "Expense amount by status (₹)", kind: "bar", points: Object.entries(byExpStatus).map(([label, value]) => ({ label, value: Math.round(value) })) }
    ],
    columns: [
      { key: "type", label: "Metric" },
      { key: "label", label: "Breakdown" },
      { key: "value", label: "Value" }
    ],
    rows
  }));
}
const FIELDS_BY_SOURCE = {
  employees: [
    { key: "employeeCode", label: "Employee code" },
    { key: "name", label: "Name" },
    { key: "departmentId", label: "Department" },
    { key: "designationId", label: "Designation" },
    { key: "employmentType", label: "Employment type" },
    { key: "employmentStatus", label: "Status" },
    { key: "dateOfJoining", label: "Date of joining" },
    { key: "ctcAnnual", label: "Annual CTC" }
  ],
  leave: [
    { key: "employeeName", label: "Employee" },
    { key: "leaveType", label: "Leave type" },
    { key: "startDate", label: "Start date" },
    { key: "endDate", label: "End date" },
    { key: "days", label: "Days" },
    { key: "status", label: "Status" }
  ],
  attendance: [
    { key: "employeeName", label: "Employee" },
    { key: "date", label: "Date" },
    { key: "status", label: "Status" },
    { key: "workedMinutes", label: "Worked minutes" },
    { key: "lateMinutes", label: "Late minutes" }
  ],
  performance: [
    { key: "employeeId", label: "Employee" },
    { key: "cycleId", label: "Cycle" },
    { key: "status", label: "Review status" },
    { key: "calibratedRating", label: "Calibrated rating" }
  ],
  helpdesk: [
    { key: "code", label: "Ticket code" },
    { key: "subject", label: "Subject" },
    { key: "category", label: "Category" },
    { key: "priority", label: "Priority" },
    { key: "status", label: "Status" },
    { key: "raisedByName", label: "Raised by" }
  ],
  expenses: [
    { key: "code", label: "Claim code" },
    { key: "employeeName", label: "Employee" },
    { key: "category", label: "Category" },
    { key: "amount", label: "Amount" },
    { key: "status", label: "Status" },
    { key: "spentOn", label: "Spent on" }
  ]
};
function fieldsForDataSource(source) {
  return FIELDS_BY_SOURCE[source] ?? [];
}
function filterFieldsForDataSource(source) {
  return FIELDS_BY_SOURCE[source] ?? [];
}
const DATA_SOURCE_LABELS = {
  employees: "Employees",
  leave: "Leave",
  attendance: "Attendance",
  performance: "Performance",
  helpdesk: "Helpdesk",
  expenses: "Expenses"
};
async function rowsForDataSource(source) {
  if (source === "employees") {
    const list2 = (await listEmployees()).data ?? [];
    return list2.map((e) => ({
      employeeCode: e.employeeCode,
      name: `${e.firstName} ${e.lastName}`,
      departmentId: e.departmentId,
      designationId: e.designationId,
      employmentType: e.employmentType,
      employmentStatus: e.employmentStatus,
      dateOfJoining: e.dateOfJoining.slice(0, 10),
      ctcAnnual: e.ctcAnnual ?? 0
    }));
  }
  if (source === "leave") {
    const list2 = (await leaveApi.listRequests({})).data ?? [];
    return list2.map((r) => ({
      employeeName: r.employeeName,
      leaveType: r.leaveType?.name ?? r.leaveTypeId,
      startDate: String(r.startDate).slice(0, 10),
      endDate: String(r.endDate).slice(0, 10),
      days: r.workingDays ?? 0,
      status: r.status
    }));
  }
  if (source === "attendance") {
    const from = /* @__PURE__ */ new Date();
    from.setDate(from.getDate() - 30);
    const list2 = (await attendanceApi.listRecords({ from: from.toISOString().slice(0, 10) })).data ?? [];
    return list2.map((r) => ({
      employeeName: r.employeeName,
      date: r.date,
      status: r.status,
      workedMinutes: r.workedMinutes,
      lateMinutes: r.lateMinutes
    }));
  }
  if (source === "performance") {
    const list2 = (await performanceApi.listReviews?.({}))?.data ?? [];
    return list2.map((r) => ({
      employeeId: r.employeeId,
      cycleId: r.cycleId,
      status: r.status,
      calibratedRating: r.calibratedRating ?? ""
    }));
  }
  if (source === "helpdesk") {
    const list2 = (await essApi.listTickets()).data ?? [];
    return list2.map((t) => ({
      code: t.code,
      subject: t.subject,
      category: t.category,
      priority: t.priority,
      status: t.status,
      raisedByName: t.raisedByName
    }));
  }
  const list = (await essApi.listExpenses()).data ?? [];
  return list.map((c) => ({
    code: c.code,
    employeeName: c.employeeName,
    category: c.category,
    amount: c.amount,
    status: c.status,
    spentOn: c.spentOn
  }));
}
function applyFilter(rows, filter) {
  return rows.filter((row) => {
    const raw = row[filter.field];
    const val = raw === void 0 || raw === null ? "" : raw;
    switch (filter.operator) {
      case "equals":
        return String(val).toLowerCase() === String(filter.value).toLowerCase();
      case "not_equals":
        return String(val).toLowerCase() !== String(filter.value).toLowerCase();
      case "contains":
        return String(val).toLowerCase().includes(String(filter.value).toLowerCase());
      case "greater_than":
        return Number(val) > Number(filter.value);
      case "less_than":
        return Number(val) < Number(filter.value);
      case "between": {
        const [lo, hi] = Array.isArray(filter.value) ? filter.value : String(filter.value).split(",");
        return Number(val) >= Number(lo) && Number(val) <= Number(hi);
      }
      case "in": {
        const list = Array.isArray(filter.value) ? filter.value : [filter.value];
        return list.map(String).map((s) => s.toLowerCase()).includes(String(val).toLowerCase());
      }
      default:
        return true;
    }
  });
}
async function runCustomReport(config) {
  let rows = await rowsForDataSource(config.dataSource);
  for (const f of config.filters ?? []) rows = applyFilter(rows, f);
  if (config.sortBy) {
    const dir = config.sortDirection === "desc" ? -1 : 1;
    rows = [...rows].sort((a, b) => {
      const av = a[config.sortBy];
      const bv = b[config.sortBy];
      if (typeof av === "number" && typeof bv === "number") return (av - bv) * dir;
      return String(av ?? "").localeCompare(String(bv ?? "")) * dir;
    });
  }
  const allFields = fieldsForDataSource(config.dataSource);
  const fieldKeys = config.fields?.length ? config.fields : allFields.map((f) => f.key);
  if (config.groupBy) {
    const groups = /* @__PURE__ */ new Map();
    for (const row of rows) {
      const key = String(row[config.groupBy] ?? "—");
      groups.set(key, [...groups.get(key) ?? [], row]);
    }
    const numericKeys = fieldKeys.filter((k) => k !== config.groupBy && rows.some((r) => typeof r[k] === "number"));
    const grouped = Array.from(groups.entries()).map(([key, list]) => {
      const out = { [config.groupBy]: key, count: list.length };
      for (const nk of numericKeys) out[nk] = list.reduce((s, r) => s + (Number(r[nk]) || 0), 0);
      return out;
    });
    const columns2 = [{ key: config.groupBy, label: allFields.find((f) => f.key === config.groupBy)?.label ?? config.groupBy }, { key: "count", label: "Count" }, ...numericKeys.map((k) => ({ key: k, label: allFields.find((f) => f.key === k)?.label ?? k }))];
    return delay(ok({ columns: columns2, rows: grouped }));
  }
  const columns = fieldKeys.map((k) => ({ key: k, label: allFields.find((f) => f.key === k)?.label ?? k }));
  const projected = rows.map((r) => {
    const out = {};
    for (const k of fieldKeys) out[k] = r[k] ?? "";
    return out;
  });
  return delay(ok({ columns, rows: projected }));
}
function seedSavedReports() {
  if (typeof window === "undefined") return;
  if (window.localStorage.getItem(SEEDED_KEY) === "1") return;
  const seed2 = [
    {
      id: "sr_1",
      name: "Active engineering headcount",
      description: "Active employees in the Engineering department.",
      config: { dataSource: "employees", fields: ["employeeCode", "name", "designationId", "employmentStatus"], filters: [{ field: "departmentId", operator: "equals", value: "d_eng" }] },
      createdBy: "HR Admin",
      createdAt: new Date(Date.now() - 20 * 864e5).toISOString(),
      lastRunAt: new Date(Date.now() - 2 * 864e5).toISOString()
    },
    {
      id: "sr_2",
      name: "High priority open tickets",
      description: "Helpdesk tickets that are open or in progress and high/urgent priority.",
      config: { dataSource: "helpdesk", fields: ["code", "subject", "priority", "status"], filters: [{ field: "status", operator: "in", value: ["open", "in_progress"] }] },
      createdBy: "HR Admin",
      createdAt: new Date(Date.now() - 10 * 864e5).toISOString()
    }
  ];
  write(SAVED_KEY, seed2);
  window.localStorage.setItem(SEEDED_KEY, "1");
}
function ensureSeed() {
  seedSavedReports();
}
async function listSavedReports() {
  ensureSeed();
  const list = read(SAVED_KEY, []);
  return delay(ok([...list].sort((a, b) => b.createdAt.localeCompare(a.createdAt))));
}
async function getSavedReport(id) {
  ensureSeed();
  const found = read(SAVED_KEY, []).find((r) => r.id === id);
  return delay(found ? ok(found) : fail("Saved report not found.", "not_found"));
}
async function saveReport(input) {
  ensureSeed();
  const list = read(SAVED_KEY, []);
  const created = {
    id: uid("sr_"),
    name: input.name,
    description: input.description,
    config: input.config,
    createdBy: input.createdBy ?? "HR Admin",
    createdAt: nowIso()
  };
  write(SAVED_KEY, [created, ...list]);
  return delay(ok(created));
}
async function updateReport(id, patch) {
  ensureSeed();
  const list = read(SAVED_KEY, []);
  const idx = list.findIndex((r) => r.id === id);
  if (idx === -1) return delay(fail("Saved report not found.", "not_found"));
  list[idx] = { ...list[idx], ...patch };
  write(SAVED_KEY, list);
  return delay(ok(list[idx]));
}
async function deleteReport(id) {
  ensureSeed();
  const list = read(SAVED_KEY, []);
  write(SAVED_KEY, list.filter((r) => r.id !== id));
  return delay(ok(true));
}
const OUT_OF_SCOPE_TERMS = ["competitor", "salaries at other companies", "stock price", "weather"];
async function interpretNlQuery(text) {
  const q = text.trim().toLowerCase();
  const id = uid("nlq_");
  if (OUT_OF_SCOPE_TERMS.some((t) => q.includes(t))) {
    return delay(ok({
      id,
      queryText: text,
      interpretedAs: "",
      generatedConfig: null,
      needsClarification: false,
      declineMessage: "I can only report on data inside this HRMS — employees, leave, attendance, performance, helpdesk and expenses. That question is outside what I have access to.",
      resultCount: 0
    }));
  }
  const bareWords = ["leave", "attendance", "performance", "helpdesk", "expenses", "employees"];
  if (bareWords.includes(q)) {
    const optionsByWord = {
      leave: ["Leave requests pending approval", "Leave taken this year by type", "Team leave calendar for this month"],
      attendance: ["Attendance summary for the last 30 days", "Late arrivals this month", "Employees with the most absences"],
      performance: ["Calibrated rating distribution", "Employees on a PIP", "Goal completion by department"],
      helpdesk: ["Open tickets by category", "Tickets raised this month", "Average ticket resolution time"],
      expenses: ["Expense claims pending approval", "Expense amount by category", "Reimbursed expenses this quarter"],
      employees: ["Headcount by department", "New joiners this quarter", "Employees by employment type"]
    };
    return delay(ok({
      id,
      queryText: text,
      interpretedAs: "",
      generatedConfig: null,
      needsClarification: true,
      clarificationQuestion: `"${text}" could mean a few things. Which report did you mean?`,
      clarificationOptions: optionsByWord[q],
      resultCount: 0
    }));
  }
  const mapping = [
    { test: /engineer/i, source: "employees", fields: ["employeeCode", "name", "designationId", "employmentStatus"], filters: [{ field: "departmentId", operator: "equals", value: "d_eng" }], interpretedAs: "Employees in the Engineering department" },
    { test: /open ticket|helpdesk/i, source: "helpdesk", fields: ["code", "subject", "priority", "status"], filters: [{ field: "status", operator: "in", value: ["open", "in_progress"] }], interpretedAs: "Open and in-progress helpdesk tickets" },
    { test: /pending expense|expense/i, source: "expenses", fields: ["code", "employeeName", "category", "amount", "status"], filters: [{ field: "status", operator: "equals", value: "submitted" }], interpretedAs: "Expense claims pending approval" },
    { test: /pip|improvement plan/i, source: "performance", fields: ["employeeId", "status", "calibratedRating"], filters: [], interpretedAs: "Employees currently on a performance review cycle" },
    { test: /late|attendance/i, source: "attendance", fields: ["employeeName", "date", "status", "lateMinutes"], filters: [{ field: "status", operator: "equals", value: "late" }], interpretedAs: "Late attendance records in the last 30 days" },
    { test: /joiner|hired|new employee/i, source: "employees", fields: ["employeeCode", "name", "dateOfJoining", "departmentId"], filters: [], interpretedAs: "Employees by date of joining" },
    { test: /headcount/i, source: "employees", fields: ["employeeCode", "name", "departmentId", "employmentStatus"], filters: [], interpretedAs: "All employees with department and status" }
  ];
  const hit = mapping.find((m) => m.test.test(q));
  if (hit) {
    const config = { dataSource: hit.source, fields: hit.fields, filters: hit.filters };
    const result = await runCustomReport(config);
    const resultCount = result.data?.rows.length ?? 0;
    return delay(ok({
      id,
      queryText: text,
      interpretedAs: hit.interpretedAs,
      generatedConfig: config,
      needsClarification: false,
      resultCount
    }));
  }
  return delay(ok({
    id,
    queryText: text,
    interpretedAs: "",
    generatedConfig: null,
    needsClarification: true,
    clarificationQuestion: `I'm not sure which report "${text}" refers to. Did you mean one of these?`,
    clarificationOptions: ["Headcount by department", "Open helpdesk tickets", "Expense claims pending approval", "Attendance summary"],
    resultCount: 0
  }));
}
const EXPORT_LARGE_ROW_THRESHOLD = 5e3;
function toCsvValue(v) {
  const s = String(v ?? "");
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}
function exportReport(rows, columns, format, filenameBase = "report") {
  const rowCount = rows.length;
  const isLarge = rowCount > EXPORT_LARGE_ROW_THRESHOLD;
  if (typeof window === "undefined") return { rowCount, isLarge };
  if (format === "csv" || format === "excel") {
    const delimiter = format === "excel" ? "	" : ",";
    const header = columns.map((c) => c.label).join(delimiter);
    const body = rows.map((r) => columns.map((c) => toCsvValue(r[c.key])).join(delimiter)).join("\n");
    const content = `${header}
${body}`;
    const mime = format === "excel" ? "application/vnd.ms-excel" : "text/csv;charset=utf-8";
    const ext = format === "excel" ? "xls" : "csv";
    const blob = new Blob([content], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${filenameBase}.${ext}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    return { rowCount, isLarge };
  }
  const win = window.open("", "_blank", "width=900,height=700");
  if (win) {
    const headHtml = columns.map((c) => `<th>${c.label}</th>`).join("");
    const bodyHtml = rows.map((r) => `<tr>${columns.map((c) => `<td>${r[c.key] ?? ""}</td>`).join("")}</tr>`).join("");
    win.document.write(`<!doctype html><html><head><title>${filenameBase}</title>
      <style>
        body{font-family:Arial,sans-serif;color:#0A0A0A;padding:24px;}
        table{border-collapse:collapse;width:100%;font-size:12px;}
        th,td{border:1px solid #E5E5E3;padding:6px 10px;text-align:left;}
        th{background:#FAFAF8;text-transform:uppercase;font-size:10px;letter-spacing:0.06em;}
      </style></head><body>
      <h2>${filenameBase.replace(/-/g, " ")}</h2>
      <table><thead><tr>${headHtml}</tr></thead><tbody>${bodyHtml}</tbody></table>
      </body></html>`);
    win.document.close();
    win.focus();
    win.print();
  }
  return { rowCount, isLarge };
}
const $$splitErrorComponentImporter$3 = () => import("../_app.reports._reportSlug-pHuEgynz.mjs");
const $$splitComponentImporter$Y = () => import("../_app.reports._reportSlug-DwlVaUbk.mjs");
const Route$Y = createFileRoute("/_app/reports/$reportSlug")({
  component: lazyRouteComponent($$splitComponentImporter$Y, "component"),
  pendingComponent: StandardReportSkeleton,
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter$3, "errorComponent"),
  head: ({
    params
  }) => {
    const meta = STANDARD_REPORT_SLUGS.includes(params.reportSlug) ? STANDARD_REPORT_META[params.reportSlug] : {
      title: "Report",
      description: "Standard HRMS report."
    };
    return {
      meta: [{
        title: `${meta.title} — HRMS`
      }, {
        name: "description",
        content: meta.description
      }, {
        property: "og:title",
        content: `${meta.title} — HRMS`
      }, {
        property: "og:description",
        content: meta.description
      }, {
        property: "og:type",
        content: "website"
      }, {
        name: "twitter:card",
        content: "summary"
      }]
    };
  }
});
function StandardReportSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-6 w-64 rounded-sm bg-[#F2F2F0] animate-pulse" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-80 rounded-sm bg-[#F2F2F0] animate-pulse" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-14 rounded-md border border-[#E5E5E3] bg-white animate-pulse" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-56 rounded-md border border-[#E5E5E3] bg-white animate-pulse" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-64 rounded-md border border-[#E5E5E3] bg-white animate-pulse" })
  ] });
}
const $$splitComponentImporter$X = () => import("../_app.performance.team-BhgyvGqn.mjs");
const Route$X = createFileRoute("/_app/performance/team")({
  component: lazyRouteComponent($$splitComponentImporter$X, "component"),
  pendingComponent: () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 28 }) }),
  head: () => ({
    meta: [{
      title: "My Team — Performance — HRMS"
    }, {
      name: "description",
      content: "Review your direct reports' goal progress and performance reviews."
    }, {
      property: "og:title",
      content: "My Team — Performance — HRMS"
    }, {
      property: "og:description",
      content: "Review your direct reports' goal progress and performance reviews."
    }]
  })
});
const $$splitComponentImporter$W = () => import("../_app.performance.reviews-0-Ie1oYs.mjs");
const Route$W = createFileRoute("/_app/performance/reviews")({
  component: lazyRouteComponent($$splitComponentImporter$W, "component"),
  pendingComponent: () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center items-center py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 32 }) }),
  head: () => ({
    meta: [{
      title: "My Reviews — Performance — HRMS"
    }, {
      name: "description",
      content: "Complete your self-assessment, nominate peers and view shared results."
    }, {
      property: "og:title",
      content: "My Reviews — Performance — HRMS"
    }, {
      property: "og:description",
      content: "Complete your self-assessment, nominate peers and view shared results."
    }]
  })
});
const $$splitComponentImporter$V = () => import("../_app.performance.goals-7L7Zyi3A.mjs");
const Route$V = createFileRoute("/_app/performance/goals")({
  component: lazyRouteComponent($$splitComponentImporter$V, "component"),
  pendingComponent: () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center items-center py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 32 }) }),
  head: () => ({
    meta: [{
      title: "My Goals — Performance — HRMS"
    }, {
      name: "description",
      content: "Track and update your objectives, key results and KRAs."
    }, {
      property: "og:title",
      content: "My Goals — Performance — HRMS"
    }, {
      property: "og:description",
      content: "Track and update your objectives, key results and KRAs."
    }]
  })
});
const $$splitComponentImporter$U = () => import("../_app.performance.calibration-Oslo_piM.mjs");
const Route$U = createFileRoute("/_app/performance/calibration")({
  component: lazyRouteComponent($$splitComponentImporter$U, "component"),
  pendingComponent: () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 28 }) }),
  head: () => ({
    meta: [{
      title: "Calibration — Performance — HRMS"
    }, {
      name: "description",
      content: "Calibrate ratings across the organisation using the 9-box grid."
    }, {
      property: "og:title",
      content: "Calibration — Performance — HRMS"
    }, {
      property: "og:description",
      content: "Calibrate ratings across the organisation using the 9-box grid."
    }]
  })
});
const $$splitComponentImporter$T = () => import("../_app.performance.admin-CBHD63-q.mjs");
const Route$T = createFileRoute("/_app/performance/admin")({
  component: lazyRouteComponent($$splitComponentImporter$T, "component"),
  pendingComponent: () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 28 }) }),
  head: () => ({
    meta: [{
      title: "Cycles Admin — Performance — HRMS"
    }, {
      name: "description",
      content: "Launch, close and monitor review cycles across the organisation."
    }, {
      property: "og:title",
      content: "Cycles Admin — Performance — HRMS"
    }, {
      property: "og:description",
      content: "Launch, close and monitor review cycles across the organisation."
    }]
  })
});
const $$splitComponentImporter$S = () => import("../_app.payroll.payslips-MCpQXqBp.mjs");
const Route$S = createFileRoute("/_app/payroll/payslips")({
  component: lazyRouteComponent($$splitComponentImporter$S, "component"),
  head: () => ({
    meta: [{
      title: "My Payslips — HRMS"
    }, {
      name: "description",
      content: "View and download your monthly pay slips with a full salary breakup."
    }, {
      property: "og:title",
      content: "My Payslips — HRMS"
    }, {
      property: "og:description",
      content: "View and download your monthly pay slips with a full salary breakup."
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary"
    }]
  })
});
const $$splitComponentImporter$R = () => import("../_app.payroll.declarations-udVFnMM7.mjs");
const Route$R = createFileRoute("/_app/payroll/declarations")({
  component: lazyRouteComponent($$splitComponentImporter$R, "component"),
  head: () => ({
    meta: [{
      title: "Investment Declarations — HRMS"
    }, {
      name: "description",
      content: "Declare your 80C, 80D, HRA and LTA investments for the current financial year."
    }, {
      property: "og:title",
      content: "Investment Declarations — HRMS"
    }, {
      property: "og:description",
      content: "Declare your 80C, 80D, HRA and LTA investments for the current financial year."
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary"
    }]
  })
});
const $$splitComponentImporter$Q = () => import("../_app.leave.requests-CZS5JHeJ.mjs");
const Route$Q = createFileRoute("/_app/leave/requests")({
  component: lazyRouteComponent($$splitComponentImporter$Q, "component"),
  pendingComponent: () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 28 }) }),
  head: () => ({
    meta: [{
      title: "My Leave Requests — HRMS"
    }, {
      name: "description",
      content: "View, filter and manage your submitted leave requests."
    }, {
      property: "og:title",
      content: "My Leave Requests — HRMS"
    }, {
      property: "og:description",
      content: "View, filter and manage your submitted leave requests."
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary"
    }]
  })
});
const $$splitComponentImporter$P = () => import("../_app.leave.calendar-Ql1xzaTq.mjs");
const Route$P = createFileRoute("/_app/leave/calendar")({
  component: lazyRouteComponent($$splitComponentImporter$P, "component"),
  pendingComponent: () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 28 }) }),
  head: () => ({
    meta: [{
      title: "Team Leave Calendar — HRMS"
    }, {
      name: "description",
      content: "See who is out this month across your team, with holidays marked."
    }, {
      property: "og:title",
      content: "Team Leave Calendar — HRMS"
    }, {
      property: "og:description",
      content: "See who is out this month across your team, with holidays marked."
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary"
    }]
  })
});
const $$splitComponentImporter$O = () => import("../_app.leave.balances-COoUuPM2.mjs");
const Route$O = createFileRoute("/_app/leave/balances")({
  component: lazyRouteComponent($$splitComponentImporter$O, "component"),
  pendingComponent: () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 28 }) }),
  head: () => ({
    meta: [{
      title: "Leave Balances — HRMS"
    }, {
      name: "description",
      content: "HR overview of every employee's leave balance across all leave types."
    }, {
      property: "og:title",
      content: "Leave Balances — HRMS"
    }, {
      property: "og:description",
      content: "HR overview of every employee's leave balance across all leave types."
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary"
    }]
  })
});
const $$splitComponentImporter$N = () => import("../_app.leave.approvals-B1jJ9Wtv.mjs");
const Route$N = createFileRoute("/_app/leave/approvals")({
  component: lazyRouteComponent($$splitComponentImporter$N, "component"),
  pendingComponent: () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 28 }) }),
  head: () => ({
    meta: [{
      title: "Leave Approvals — HRMS"
    }, {
      name: "description",
      content: "Review and act on your team's pending leave requests."
    }, {
      property: "og:title",
      content: "Leave Approvals — HRMS"
    }, {
      property: "og:description",
      content: "Review and act on your team's pending leave requests."
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary"
    }]
  })
});
const $$splitComponentImporter$M = () => import("../_app.leave.apply-DHlMh2KO.mjs");
const Route$M = createFileRoute("/_app/leave/apply")({
  component: lazyRouteComponent($$splitComponentImporter$M, "component"),
  pendingComponent: () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 32 }) }),
  head: () => ({
    meta: [{
      title: "Apply for Leave — HRMS"
    }, {
      name: "description",
      content: "Submit a new leave request with balance and working-day preview."
    }, {
      property: "og:title",
      content: "Apply for Leave — HRMS"
    }, {
      property: "og:description",
      content: "Submit a new leave request with balance and working-day preview."
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary"
    }]
  })
});
const $$splitComponentImporter$L = () => import("../_app.helpdesk.new-FVQDnG8T.mjs");
const Route$L = createFileRoute("/_app/helpdesk/new")({
  component: lazyRouteComponent($$splitComponentImporter$L, "component"),
  head: () => ({
    meta: [{
      title: "Raise a Ticket — HRMS"
    }, {
      name: "description",
      content: "Submit an IT, HR, payroll or facilities support request."
    }, {
      property: "og:title",
      content: "Raise a Ticket — HRMS"
    }, {
      property: "og:description",
      content: "Submit an IT, HR, payroll or facilities support request."
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary"
    }]
  })
});
const $$splitComponentImporter$K = () => import("../_app.expenses.new-BGn2Hu2E.mjs");
const Route$K = createFileRoute("/_app/expenses/new")({
  component: lazyRouteComponent($$splitComponentImporter$K, "component"),
  head: () => ({
    meta: [{
      title: "New Expense Claim — HRMS"
    }, {
      name: "description",
      content: "Submit a new work expense claim with receipt and amount."
    }, {
      property: "og:title",
      content: "New Expense Claim — HRMS"
    }, {
      property: "og:description",
      content: "Submit a new work expense claim with receipt and amount."
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary"
    }]
  })
});
const $$splitComponentImporter$J = () => import("../_app.employees.new-COQu2z6g.mjs");
const Route$J = createFileRoute("/_app/employees/new")({
  component: lazyRouteComponent($$splitComponentImporter$J, "component"),
  head: () => ({
    meta: [{
      title: "Add Employee — HRMS"
    }]
  })
});
const $$splitComponentImporter$I = () => import("../_app.employees._employeeId-BGVWMEx-.mjs");
const Route$I = createFileRoute("/_app/employees/$employeeId")({
  component: lazyRouteComponent($$splitComponentImporter$I, "component"),
  head: () => ({
    meta: [{
      title: "Employee — HRMS"
    }]
  })
});
const $$splitComponentImporter$H = () => import("../_app.candidates.invite-CTLmDrLP.mjs");
const Route$H = createFileRoute("/_app/candidates/invite")({
  component: lazyRouteComponent($$splitComponentImporter$H, "component"),
  head: () => ({
    meta: [{
      title: "Invite Candidate — HRMS"
    }]
  })
});
const $$splitComponentImporter$G = () => import("../_app.candidates._candidateId-Ck8W87Im.mjs");
const TAB_IDS = ["overview", "submission", "documents", "comments", "activity"];
const Route$G = createFileRoute("/_app/candidates/$candidateId")({
  validateSearch: (search) => ({
    tab: TAB_IDS.includes(search.tab) ? search.tab : "overview"
  }),
  component: lazyRouteComponent($$splitComponentImporter$G, "component"),
  head: () => ({
    meta: [{
      title: "Candidate — HRMS"
    }]
  })
});
const $$splitComponentImporter$F = () => import("../_app.attendance.team-nvsxtuxV.mjs");
const Route$F = createFileRoute("/_app/attendance/team")({
  component: lazyRouteComponent($$splitComponentImporter$F, "component"),
  pendingComponent: TeamAttendancePending,
  head: () => ({
    meta: [{
      title: "Team Attendance — HRMS"
    }, {
      name: "description",
      content: "See who is present, late, absent, or on leave across your team for any date."
    }, {
      property: "og:title",
      content: "Team Attendance — HRMS"
    }, {
      property: "og:description",
      content: "See who is present, late, absent, or on leave across your team for any date."
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary"
    }]
  })
});
function TeamAttendancePending() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-64 rounded-sm bg-[#F2F2F0] animate-pulse" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-4", children: Array.from({
      length: 4
    }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-24 rounded-md border border-[#E5E5E3] bg-[#FAFAF8] animate-pulse" }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 28 }) })
  ] });
}
const $$splitComponentImporter$E = () => import("../_app.attendance.regularization-r7RNh81m.mjs");
const Route$E = createFileRoute("/_app/attendance/regularization")({
  component: lazyRouteComponent($$splitComponentImporter$E, "component")
});
const $$splitComponentImporter$D = () => import("../_app.attendance.records-vhAZlMzI.mjs");
const Route$D = createFileRoute("/_app/attendance/records")({
  component: lazyRouteComponent($$splitComponentImporter$D, "component"),
  pendingComponent: () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 28 }) }),
  head: () => ({
    meta: [{
      title: "Attendance Records — HRMS"
    }, {
      name: "description",
      content: "Review, edit, import and export daily attendance records for every employee."
    }, {
      property: "og:title",
      content: "Attendance Records — HRMS"
    }, {
      property: "og:description",
      content: "Review, edit, import and export daily attendance records for every employee."
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary"
    }]
  })
});
const $$splitComponentImporter$C = () => import("../_admin.admin.tenants-ClhrcJd6.mjs");
const Route$C = createFileRoute("/_admin/admin/tenants")({
  component: lazyRouteComponent($$splitComponentImporter$C, "component"),
  head: () => ({
    meta: [{
      title: "Tenants — HRMS Admin"
    }]
  })
});
const $$splitComponentImporter$B = () => import("../_admin.admin.settings-BacNT9FD.mjs");
const Route$B = createFileRoute("/_admin/admin/settings")({
  component: lazyRouteComponent($$splitComponentImporter$B, "component"),
  head: () => ({
    meta: [{
      title: "Platform settings — HRMS Admin"
    }]
  })
});
const $$splitComponentImporter$A = () => import("../_admin.admin.login-DtyOVDqJ.mjs");
const Route$A = createFileRoute("/_admin/admin/login")({
  component: lazyRouteComponent($$splitComponentImporter$A, "component"),
  head: () => ({
    meta: [{
      title: "Admin Login — HRMS"
    }]
  })
});
const $$splitErrorComponentImporter$2 = () => import("../_admin.admin.dashboard-DzrMbcqk.mjs");
const $$splitComponentImporter$z = () => import("../_admin.admin.dashboard-BK2yj3rv.mjs");
const Route$z = createFileRoute("/_admin/admin/dashboard")({
  component: lazyRouteComponent($$splitComponentImporter$z, "component"),
  head: () => ({
    meta: [{
      title: "Platform Dashboard — HRMS Admin"
    }]
  }),
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter$2, "errorComponent")
});
const $$splitComponentImporter$y = () => import("../_portal.portal._pipelineId.index-DbAEPo_M.mjs");
const Route$y = createFileRoute("/_portal/portal/$pipelineId/")({
  head: () => ({
    meta: [{
      title: "Your Application"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$y, "component")
});
const $$splitComponentImporter$x = () => import("../_app.settings.roles.index-XmKPsCOx.mjs");
const Route$x = createFileRoute("/_app/settings/roles/")({
  component: lazyRouteComponent($$splitComponentImporter$x, "component"),
  head: () => ({
    meta: [{
      title: "Roles — Settings — HRMS"
    }]
  })
});
const $$splitComponentImporter$w = () => import("../_app.settings.payroll.index-DpcCIJy9.mjs");
const Route$w = createFileRoute("/_app/settings/payroll/")({
  component: lazyRouteComponent($$splitComponentImporter$w, "component"),
  pendingComponent: () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 28 }) }),
  head: () => ({
    meta: [{
      title: "Salary Components — Settings — HRMS"
    }, {
      name: "description",
      content: "Configure the earnings, deductions, and employer contributions used to build salary structures."
    }, {
      property: "og:title",
      content: "Salary Components — Settings — HRMS"
    }, {
      property: "og:description",
      content: "Configure the earnings, deductions, and employer contributions used to build salary structures."
    }]
  })
});
const $$splitComponentImporter$v = () => import("../_app.settings.leave.index-CqIs885t.mjs");
const Route$v = createFileRoute("/_app/settings/leave/")({
  component: lazyRouteComponent($$splitComponentImporter$v, "component"),
  pendingComponent: () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 28 }) }),
  head: () => ({
    meta: [{
      title: "Leave Types — Settings — HRMS"
    }, {
      name: "description",
      content: "Configure leave types, accrual, and quotas."
    }, {
      property: "og:title",
      content: "Leave Types — Settings — HRMS"
    }, {
      property: "og:description",
      content: "Configure leave types, accrual, and quotas."
    }]
  })
});
const $$splitComponentImporter$u = () => import("../_app.settings.forms.index-DzMGUvFi.mjs");
const Route$u = createFileRoute("/_app/settings/forms/")({
  component: lazyRouteComponent($$splitComponentImporter$u, "component"),
  head: () => ({
    meta: [{
      title: "Form Library — Settings — HRMS"
    }]
  })
});
const $$splitErrorComponentImporter$1 = () => import("../_app.reports.builder.index-BDbZYGcN.mjs");
const $$splitComponentImporter$t = () => import("../_app.reports.builder.index-DrK_iyob.mjs");
const Route$t = createFileRoute("/_app/reports/builder/")({
  component: lazyRouteComponent($$splitComponentImporter$t, "component"),
  pendingComponent: BuilderSkeleton,
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter$1, "errorComponent"),
  head: () => ({
    meta: [{
      title: "New Custom Report — HRMS"
    }, {
      name: "description",
      content: "Build a custom report by choosing a data source, fields, filters, grouping and sorting."
    }, {
      property: "og:title",
      content: "New Custom Report — HRMS"
    }, {
      property: "og:description",
      content: "Build a custom report by choosing a data source, fields, filters, grouping and sorting."
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary"
    }]
  })
});
function BuilderSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-64 rounded-sm bg-[#F2F2F0] animate-pulse" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-72 rounded-md border border-[#E5E5E3] bg-white animate-pulse" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-64 rounded-md border border-[#E5E5E3] bg-white animate-pulse" })
  ] });
}
const $$splitComponentImporter$s = () => import("../_app.payroll.runs.index-n4oaLiIT.mjs");
const Route$s = createFileRoute("/_app/payroll/runs/")({
  component: lazyRouteComponent($$splitComponentImporter$s, "component"),
  head: () => ({
    meta: [{
      title: "Payroll Runs — HRMS"
    }, {
      name: "description",
      content: "Create and track monthly payroll runs from draft through payment."
    }, {
      property: "og:title",
      content: "Payroll Runs — HRMS"
    }, {
      property: "og:description",
      content: "Create and track monthly payroll runs from draft through payment."
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary"
    }]
  })
});
const $$splitComponentImporter$r = () => import("../_app.attendance.regularization.index-CKmcIOI5.mjs");
const Route$r = createFileRoute("/_app/attendance/regularization/")({
  component: lazyRouteComponent($$splitComponentImporter$r, "component"),
  head: () => ({
    meta: [{
      title: "My Regularizations — HRMS"
    }, {
      name: "description",
      content: "Apply for attendance regularization and track the status of your requests."
    }, {
      property: "og:title",
      content: "My Regularizations — HRMS"
    }, {
      property: "og:description",
      content: "Apply for attendance regularization and track the status of your requests."
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary"
    }]
  })
});
const $$splitComponentImporter$q = () => import("../_portal.portal._pipelineId.offer-B_A6-OTn.mjs");
const Route$q = createFileRoute("/_portal/portal/$pipelineId/offer")({
  head: () => ({
    meta: [{
      title: "Your Offer"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$q, "component")
});
const $$splitComponentImporter$p = () => import("../_portal.portal._pipelineId.form-DJm8WcbT.mjs");
const Route$p = createFileRoute("/_portal/portal/$pipelineId/form")({
  head: () => ({
    meta: [{
      title: "Application Form"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$p, "component")
});
const $$splitComponentImporter$o = () => import("../_app.settings.roles.new-Bq2IvCd8.mjs");
const Route$o = createFileRoute("/_app/settings/roles/new")({
  component: lazyRouteComponent($$splitComponentImporter$o, "component"),
  head: () => ({
    meta: [{
      title: "Create Role — Settings — HRMS"
    }]
  })
});
const $$splitComponentImporter$n = () => import("../_app.settings.roles.delegation-NrLpE_lo.mjs");
const Route$n = createFileRoute("/_app/settings/roles/delegation")({
  component: lazyRouteComponent($$splitComponentImporter$n, "component"),
  head: () => ({
    meta: [{
      title: "Delegation — Settings — HRMS"
    }]
  })
});
const $$splitComponentImporter$m = () => import("../_app.settings.roles.audit-DXKLqltd.mjs");
const Route$m = createFileRoute("/_app/settings/roles/audit")({
  component: lazyRouteComponent($$splitComponentImporter$m, "component"),
  head: () => ({
    meta: [{
      title: "Access Audit Log — Settings — HRMS"
    }]
  })
});
const $$splitComponentImporter$l = () => import("../_app.settings.roles.assignments--2yl97Jq.mjs");
const Route$l = createFileRoute("/_app/settings/roles/assignments")({
  component: lazyRouteComponent($$splitComponentImporter$l, "component"),
  head: () => ({
    meta: [{
      title: "Role Assignments — Settings — HRMS"
    }]
  })
});
const $$splitComponentImporter$k = () => import("../_app.settings.payroll.structures-Cenxo25W.mjs");
const Route$k = createFileRoute("/_app/settings/payroll/structures")({
  component: lazyRouteComponent($$splitComponentImporter$k, "component"),
  pendingComponent: () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 28 }) }),
  head: () => ({
    meta: [{
      title: "Salary Structures — Settings — HRMS"
    }, {
      name: "description",
      content: "Build and manage salary structures assigned to employees."
    }, {
      property: "og:title",
      content: "Salary Structures — Settings — HRMS"
    }, {
      property: "og:description",
      content: "Build and manage salary structures assigned to employees."
    }]
  })
});
const $$splitComponentImporter$j = () => import("../_app.settings.leave.policies-DPooK1Wx.mjs");
const Route$j = createFileRoute("/_app/settings/leave/policies")({
  component: lazyRouteComponent($$splitComponentImporter$j, "component"),
  pendingComponent: () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 28 }) }),
  head: () => ({
    meta: [{
      title: "Leave Policies — Settings — HRMS"
    }, {
      name: "description",
      content: "Configure leave policies and allocations by employment type."
    }, {
      property: "og:title",
      content: "Leave Policies — Settings — HRMS"
    }, {
      property: "og:description",
      content: "Configure leave policies and allocations by employment type."
    }]
  })
});
const $$splitComponentImporter$i = () => import("../_app.settings.hiring.rejection-reasons-JT6ab3sM.mjs");
const Route$i = createFileRoute("/_app/settings/hiring/rejection-reasons")({
  component: lazyRouteComponent($$splitComponentImporter$i, "component"),
  head: () => ({
    meta: [{
      title: "Rejection reasons — Hiring settings"
    }, {
      name: "description",
      content: "Curate the reasons your team can pick from when rejecting a candidate."
    }, {
      property: "og:title",
      content: "Rejection reasons — Hiring settings"
    }, {
      property: "og:description",
      content: "Curate the reasons your team can pick from when rejecting a candidate."
    }]
  })
});
const $$splitComponentImporter$h = () => import("../_app.settings.forms.new-CxVeWIxU.mjs");
const Route$h = createFileRoute("/_app/settings/forms/new")({
  component: lazyRouteComponent($$splitComponentImporter$h, "component"),
  head: () => ({
    meta: [{
      title: "New Form — Settings — HRMS"
    }]
  })
});
const $$splitComponentImporter$g = () => import("../_app.settings.company.work-calendar-UGMfqxLH.mjs");
const Route$g = createFileRoute("/_app/settings/company/work-calendar")({
  component: lazyRouteComponent($$splitComponentImporter$g, "component"),
  head: () => ({
    meta: [{
      title: "Work calendar — Settings — HRMS"
    }]
  })
});
const $$splitComponentImporter$f = () => import("../_app.settings.company.holidays-B_MxEJar.mjs");
const Route$f = createFileRoute("/_app/settings/company/holidays")({
  component: lazyRouteComponent($$splitComponentImporter$f, "component"),
  head: () => ({
    meta: [{
      title: "Holidays — Settings — HRMS"
    }]
  })
});
const $$splitComponentImporter$e = () => import("../_app.settings.company.designations-BveeBFeK.mjs");
const Route$e = createFileRoute("/_app/settings/company/designations")({
  component: lazyRouteComponent($$splitComponentImporter$e, "component"),
  head: () => ({
    meta: [{
      title: "Designations — Settings — HRMS"
    }]
  })
});
const $$splitComponentImporter$d = () => import("../_app.settings.company.departments-DhDxpub4.mjs");
const Route$d = createFileRoute("/_app/settings/company/departments")({
  component: lazyRouteComponent($$splitComponentImporter$d, "component"),
  head: () => ({
    meta: [{
      title: "Departments — Settings — HRMS"
    }]
  })
});
const $$splitErrorComponentImporter = () => import("../_app.reports.builder._reportId-DwDeE_GF.mjs");
const $$splitComponentImporter$c = () => import("../_app.reports.builder._reportId-BeTfQk9U.mjs");
const Route$c = createFileRoute("/_app/reports/builder/$reportId")({
  component: lazyRouteComponent($$splitComponentImporter$c, "component"),
  pendingComponent: EditBuilderSkeleton,
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
  head: () => ({
    meta: [{
      title: "Edit Custom Report — HRMS"
    }, {
      name: "description",
      content: "Edit an existing saved custom report's fields, filters, grouping and sorting."
    }, {
      property: "og:title",
      content: "Edit Custom Report — HRMS"
    }, {
      property: "og:description",
      content: "Edit an existing saved custom report's fields, filters, grouping and sorting."
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary"
    }]
  })
});
function EditBuilderSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-64 rounded-sm bg-[#F2F2F0] animate-pulse" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-72 rounded-md border border-[#E5E5E3] bg-white animate-pulse" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-64 rounded-md border border-[#E5E5E3] bg-white animate-pulse" })
  ] });
}
const $$splitComponentImporter$b = () => import("../_app.performance.team._employeeId-keHzDeXZ.mjs");
const Route$b = createFileRoute("/_app/performance/team/$employeeId")({
  component: lazyRouteComponent($$splitComponentImporter$b, "component"),
  pendingComponent: () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 28 }) }),
  head: () => ({
    meta: [{
      title: "Direct Report — Performance — HRMS"
    }, {
      name: "description",
      content: "Review goals, write manager reviews and manage improvement plans for a direct report."
    }, {
      property: "og:title",
      content: "Direct Report — Performance — HRMS"
    }, {
      property: "og:description",
      content: "Review goals, write manager reviews and manage improvement plans for a direct report."
    }]
  })
});
const $$splitComponentImporter$a = () => import("../_app.performance.reviews._reviewId-p-VfyWfi.mjs");
const Route$a = createFileRoute("/_app/performance/reviews/$reviewId")({
  component: lazyRouteComponent($$splitComponentImporter$a, "component"),
  pendingComponent: () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 28 }) }),
  head: () => ({
    meta: [{
      title: "Review Detail — Performance — HRMS"
    }, {
      name: "description",
      content: "View the outcome and ratings for a completed performance review."
    }, {
      property: "og:title",
      content: "Review Detail — Performance — HRMS"
    }, {
      property: "og:description",
      content: "View the outcome and ratings for a completed performance review."
    }]
  })
});
const $$splitComponentImporter$9 = () => import("../_app.payroll.runs._runId-nQFVuRQt.mjs");
const Route$9 = createFileRoute("/_app/payroll/runs/$runId")({
  component: lazyRouteComponent($$splitComponentImporter$9, "component"),
  head: () => ({
    meta: [{
      title: "Payroll Run Detail — HRMS"
    }, {
      name: "description",
      content: "Review employee entries, resolve validation issues, and progress a payroll run to payment."
    }, {
      property: "og:title",
      content: "Payroll Run Detail — HRMS"
    }, {
      property: "og:description",
      content: "Review employee entries, resolve validation issues, and progress a payroll run to payment."
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary"
    }]
  })
});
const $$splitComponentImporter$8 = () => import("../_app.employees._employeeId.edit-CV7dxlbb.mjs");
const Route$8 = createFileRoute("/_app/employees/$employeeId/edit")({
  component: lazyRouteComponent($$splitComponentImporter$8, "component"),
  head: () => ({
    meta: [{
      title: "Edit Employee — HRMS"
    }]
  })
});
const $$splitComponentImporter$7 = () => import("../_app.attendance.regularization.approvals-C64A9pzZ.mjs");
const Route$7 = createFileRoute("/_app/attendance/regularization/approvals")({
  component: lazyRouteComponent($$splitComponentImporter$7, "component"),
  head: () => ({
    meta: [{
      title: "Regularization Approvals — HRMS"
    }, {
      name: "description",
      content: "Review and act on pending attendance regularization requests from your team."
    }, {
      property: "og:title",
      content: "Regularization Approvals — HRMS"
    }, {
      property: "og:description",
      content: "Review and act on pending attendance regularization requests from your team."
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary"
    }]
  })
});
const $$splitComponentImporter$6 = () => import("../_admin.admin.tenants.new-DgqMXZXQ.mjs");
const Route$6 = createFileRoute("/_admin/admin/tenants/new")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component"),
  head: () => ({
    meta: [{
      title: "New tenant — HRMS Admin"
    }]
  })
});
const $$splitComponentImporter$5 = () => import("../_admin.admin.tenants._tenantId-DVDx3IRG.mjs");
const Route$5 = createFileRoute("/_admin/admin/tenants/$tenantId")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component"),
  head: ({
    params
  }) => ({
    meta: [{
      title: `Tenant — ${params.tenantId}`
    }]
  })
});
const $$splitComponentImporter$4 = () => import("../_app.settings.roles._roleId.index-CiBhn0vs.mjs");
const Route$4 = createFileRoute("/_app/settings/roles/$roleId/")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component"),
  head: () => ({
    meta: [{
      title: "Role — Settings — HRMS"
    }]
  })
});
const $$splitComponentImporter$3 = () => import("../_app.settings.forms._formId.index-DFBwCQ_0.mjs");
const Route$3 = createFileRoute("/_app/settings/forms/$formId/")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component"),
  head: () => ({
    meta: [{
      title: "Edit Form — Settings — HRMS"
    }]
  })
});
const $$splitComponentImporter$2 = () => import("../_app.settings.roles._roleId.edit-D49PunE-.mjs");
const Route$2 = createFileRoute("/_app/settings/roles/$roleId/edit")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component"),
  head: () => ({
    meta: [{
      title: "Edit Role — Settings — HRMS"
    }]
  })
});
const $$splitComponentImporter$1 = () => import("../_app.settings.forms._formId.submissions-B170Pihm.mjs");
const Route$1 = createFileRoute("/_app/settings/forms/$formId/submissions")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component"),
  head: () => ({
    meta: [{
      title: "Form Submissions — Settings — HRMS"
    }]
  })
});
const $$splitComponentImporter = () => import("../_app.settings.forms._formId.preview-C-EyOh2C.mjs");
const Route = createFileRoute("/_app/settings/forms/$formId/preview")({
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  head: () => ({
    meta: [{
      title: "Preview Form — Settings — HRMS"
    }]
  })
});
const PortalRoute = Route$1r.update({
  id: "/_portal",
  getParentRoute: () => Route$1s
});
const PlatformRoute = Route$1q.update({
  id: "/_platform",
  getParentRoute: () => Route$1s
});
const AppRoute = Route$1p.update({
  id: "/_app",
  getParentRoute: () => Route$1s
});
const AdminRoute = Route$1o.update({
  id: "/_admin",
  getParentRoute: () => Route$1s
});
const IndexRoute = Route$1n.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$1s
});
const PlatformOnboardingRoute = Route$1m.update({
  id: "/onboarding",
  path: "/onboarding",
  getParentRoute: () => PlatformRoute
});
const PlatformLoginRoute = Route$1l.update({
  id: "/login",
  path: "/login",
  getParentRoute: () => PlatformRoute
});
const AppSettingsRoute = Route$1k.update({
  id: "/settings",
  path: "/settings",
  getParentRoute: () => AppRoute
});
const AppOrgChartRoute = Route$1j.update({
  id: "/org-chart",
  path: "/org-chart",
  getParentRoute: () => AppRoute
});
const AppNotificationsRoute = Route$1i.update({
  id: "/notifications",
  path: "/notifications",
  getParentRoute: () => AppRoute
});
const AppMeRoute = Route$1h.update({
  id: "/me",
  path: "/me",
  getParentRoute: () => AppRoute
});
const AppEmployeesRoute = Route$1g.update({
  id: "/employees",
  path: "/employees",
  getParentRoute: () => AppRoute
});
const AppDashboardRoute = Route$1f.update({
  id: "/dashboard",
  path: "/dashboard",
  getParentRoute: () => AppRoute
});
const AppAnnouncementsRoute = Route$1e.update({
  id: "/announcements",
  path: "/announcements",
  getParentRoute: () => AppRoute
});
const AppAiAssistantRoute = Route$1d.update({
  id: "/ai-assistant",
  path: "/ai-assistant",
  getParentRoute: () => AppRoute
});
const PortalPortalIndexRoute = Route$1c.update({
  id: "/portal/",
  path: "/portal/",
  getParentRoute: () => PortalRoute
});
const AppReportsIndexRoute = Route$1b.update({
  id: "/reports/",
  path: "/reports/",
  getParentRoute: () => AppRoute
});
const AppPerformanceIndexRoute = Route$1a.update({
  id: "/performance/",
  path: "/performance/",
  getParentRoute: () => AppRoute
});
const AppPayrollIndexRoute = Route$19.update({
  id: "/payroll/",
  path: "/payroll/",
  getParentRoute: () => AppRoute
});
const AppLeaveIndexRoute = Route$18.update({
  id: "/leave/",
  path: "/leave/",
  getParentRoute: () => AppRoute
});
const AppHelpdeskIndexRoute = Route$17.update({
  id: "/helpdesk/",
  path: "/helpdesk/",
  getParentRoute: () => AppRoute
});
const AppExpensesIndexRoute = Route$16.update({
  id: "/expenses/",
  path: "/expenses/",
  getParentRoute: () => AppRoute
});
const AppEmployeesIndexRoute = Route$15.update({
  id: "/",
  path: "/",
  getParentRoute: () => AppEmployeesRoute
});
const AppCandidatesIndexRoute = Route$14.update({
  id: "/candidates/",
  path: "/candidates/",
  getParentRoute: () => AppRoute
});
const AppAttendanceIndexRoute = Route$13.update({
  id: "/attendance/",
  path: "/attendance/",
  getParentRoute: () => AppRoute
});
const PlatformOnboardingReviewRoute = Route$12.update({
  id: "/review",
  path: "/review",
  getParentRoute: () => PlatformOnboardingRoute
});
const PlatformOnboardingBrandRoute = Route$11.update({
  id: "/brand",
  path: "/brand",
  getParentRoute: () => PlatformOnboardingRoute
});
const PlatformOnboardingAdminRoute = Route$10.update({
  id: "/admin",
  path: "/admin",
  getParentRoute: () => PlatformOnboardingRoute
});
const AppSettingsRolesRoute = Route$$.update({
  id: "/roles",
  path: "/roles",
  getParentRoute: () => AppSettingsRoute
});
const AppSettingsCompanyRoute = Route$_.update({
  id: "/company",
  path: "/company",
  getParentRoute: () => AppSettingsRoute
});
const AppSettingsAttendanceRoute = Route$Z.update({
  id: "/attendance",
  path: "/attendance",
  getParentRoute: () => AppSettingsRoute
});
const AppReportsReportSlugRoute = Route$Y.update({
  id: "/reports/$reportSlug",
  path: "/reports/$reportSlug",
  getParentRoute: () => AppRoute
});
const AppPerformanceTeamRoute = Route$X.update({
  id: "/performance/team",
  path: "/performance/team",
  getParentRoute: () => AppRoute
});
const AppPerformanceReviewsRoute = Route$W.update({
  id: "/performance/reviews",
  path: "/performance/reviews",
  getParentRoute: () => AppRoute
});
const AppPerformanceGoalsRoute = Route$V.update({
  id: "/performance/goals",
  path: "/performance/goals",
  getParentRoute: () => AppRoute
});
const AppPerformanceCalibrationRoute = Route$U.update({
  id: "/performance/calibration",
  path: "/performance/calibration",
  getParentRoute: () => AppRoute
});
const AppPerformanceAdminRoute = Route$T.update({
  id: "/performance/admin",
  path: "/performance/admin",
  getParentRoute: () => AppRoute
});
const AppPayrollPayslipsRoute = Route$S.update({
  id: "/payroll/payslips",
  path: "/payroll/payslips",
  getParentRoute: () => AppRoute
});
const AppPayrollDeclarationsRoute = Route$R.update({
  id: "/payroll/declarations",
  path: "/payroll/declarations",
  getParentRoute: () => AppRoute
});
const AppLeaveRequestsRoute = Route$Q.update({
  id: "/leave/requests",
  path: "/leave/requests",
  getParentRoute: () => AppRoute
});
const AppLeaveCalendarRoute = Route$P.update({
  id: "/leave/calendar",
  path: "/leave/calendar",
  getParentRoute: () => AppRoute
});
const AppLeaveBalancesRoute = Route$O.update({
  id: "/leave/balances",
  path: "/leave/balances",
  getParentRoute: () => AppRoute
});
const AppLeaveApprovalsRoute = Route$N.update({
  id: "/leave/approvals",
  path: "/leave/approvals",
  getParentRoute: () => AppRoute
});
const AppLeaveApplyRoute = Route$M.update({
  id: "/leave/apply",
  path: "/leave/apply",
  getParentRoute: () => AppRoute
});
const AppHelpdeskNewRoute = Route$L.update({
  id: "/helpdesk/new",
  path: "/helpdesk/new",
  getParentRoute: () => AppRoute
});
const AppExpensesNewRoute = Route$K.update({
  id: "/expenses/new",
  path: "/expenses/new",
  getParentRoute: () => AppRoute
});
const AppEmployeesNewRoute = Route$J.update({
  id: "/new",
  path: "/new",
  getParentRoute: () => AppEmployeesRoute
});
const AppEmployeesEmployeeIdRoute = Route$I.update({
  id: "/$employeeId",
  path: "/$employeeId",
  getParentRoute: () => AppEmployeesRoute
});
const AppCandidatesInviteRoute = Route$H.update({
  id: "/candidates/invite",
  path: "/candidates/invite",
  getParentRoute: () => AppRoute
});
const AppCandidatesCandidateIdRoute = Route$G.update({
  id: "/candidates/$candidateId",
  path: "/candidates/$candidateId",
  getParentRoute: () => AppRoute
});
const AppAttendanceTeamRoute = Route$F.update({
  id: "/attendance/team",
  path: "/attendance/team",
  getParentRoute: () => AppRoute
});
const AppAttendanceRegularizationRoute = Route$E.update({
  id: "/attendance/regularization",
  path: "/attendance/regularization",
  getParentRoute: () => AppRoute
});
const AppAttendanceRecordsRoute = Route$D.update({
  id: "/attendance/records",
  path: "/attendance/records",
  getParentRoute: () => AppRoute
});
const AdminAdminTenantsRoute = Route$C.update({
  id: "/admin/tenants",
  path: "/admin/tenants",
  getParentRoute: () => AdminRoute
});
const AdminAdminSettingsRoute = Route$B.update({
  id: "/admin/settings",
  path: "/admin/settings",
  getParentRoute: () => AdminRoute
});
const AdminAdminLoginRoute = Route$A.update({
  id: "/admin/login",
  path: "/admin/login",
  getParentRoute: () => AdminRoute
});
const AdminAdminDashboardRoute = Route$z.update({
  id: "/admin/dashboard",
  path: "/admin/dashboard",
  getParentRoute: () => AdminRoute
});
const PortalPortalPipelineIdIndexRoute = Route$y.update({
  id: "/portal/$pipelineId/",
  path: "/portal/$pipelineId/",
  getParentRoute: () => PortalRoute
});
const AppSettingsRolesIndexRoute = Route$x.update({
  id: "/",
  path: "/",
  getParentRoute: () => AppSettingsRolesRoute
});
const AppSettingsPayrollIndexRoute = Route$w.update({
  id: "/payroll/",
  path: "/payroll/",
  getParentRoute: () => AppSettingsRoute
});
const AppSettingsLeaveIndexRoute = Route$v.update({
  id: "/leave/",
  path: "/leave/",
  getParentRoute: () => AppSettingsRoute
});
const AppSettingsFormsIndexRoute = Route$u.update({
  id: "/forms/",
  path: "/forms/",
  getParentRoute: () => AppSettingsRoute
});
const AppReportsBuilderIndexRoute = Route$t.update({
  id: "/reports/builder/",
  path: "/reports/builder/",
  getParentRoute: () => AppRoute
});
const AppPayrollRunsIndexRoute = Route$s.update({
  id: "/payroll/runs/",
  path: "/payroll/runs/",
  getParentRoute: () => AppRoute
});
const AppAttendanceRegularizationIndexRoute = Route$r.update({
  id: "/",
  path: "/",
  getParentRoute: () => AppAttendanceRegularizationRoute
});
const PortalPortalPipelineIdOfferRoute = Route$q.update({
  id: "/portal/$pipelineId/offer",
  path: "/portal/$pipelineId/offer",
  getParentRoute: () => PortalRoute
});
const PortalPortalPipelineIdFormRoute = Route$p.update({
  id: "/portal/$pipelineId/form",
  path: "/portal/$pipelineId/form",
  getParentRoute: () => PortalRoute
});
const AppSettingsRolesNewRoute = Route$o.update({
  id: "/new",
  path: "/new",
  getParentRoute: () => AppSettingsRolesRoute
});
const AppSettingsRolesDelegationRoute = Route$n.update({
  id: "/delegation",
  path: "/delegation",
  getParentRoute: () => AppSettingsRolesRoute
});
const AppSettingsRolesAuditRoute = Route$m.update({
  id: "/audit",
  path: "/audit",
  getParentRoute: () => AppSettingsRolesRoute
});
const AppSettingsRolesAssignmentsRoute = Route$l.update({
  id: "/assignments",
  path: "/assignments",
  getParentRoute: () => AppSettingsRolesRoute
});
const AppSettingsPayrollStructuresRoute = Route$k.update({
  id: "/payroll/structures",
  path: "/payroll/structures",
  getParentRoute: () => AppSettingsRoute
});
const AppSettingsLeavePoliciesRoute = Route$j.update({
  id: "/leave/policies",
  path: "/leave/policies",
  getParentRoute: () => AppSettingsRoute
});
const AppSettingsHiringRejectionReasonsRoute = Route$i.update({
  id: "/hiring/rejection-reasons",
  path: "/hiring/rejection-reasons",
  getParentRoute: () => AppSettingsRoute
});
const AppSettingsFormsNewRoute = Route$h.update({
  id: "/forms/new",
  path: "/forms/new",
  getParentRoute: () => AppSettingsRoute
});
const AppSettingsCompanyWorkCalendarRoute = Route$g.update({
  id: "/work-calendar",
  path: "/work-calendar",
  getParentRoute: () => AppSettingsCompanyRoute
});
const AppSettingsCompanyHolidaysRoute = Route$f.update({
  id: "/holidays",
  path: "/holidays",
  getParentRoute: () => AppSettingsCompanyRoute
});
const AppSettingsCompanyDesignationsRoute = Route$e.update({
  id: "/designations",
  path: "/designations",
  getParentRoute: () => AppSettingsCompanyRoute
});
const AppSettingsCompanyDepartmentsRoute = Route$d.update({
  id: "/departments",
  path: "/departments",
  getParentRoute: () => AppSettingsCompanyRoute
});
const AppReportsBuilderReportIdRoute = Route$c.update({
  id: "/reports/builder/$reportId",
  path: "/reports/builder/$reportId",
  getParentRoute: () => AppRoute
});
const AppPerformanceTeamEmployeeIdRoute = Route$b.update({
  id: "/$employeeId",
  path: "/$employeeId",
  getParentRoute: () => AppPerformanceTeamRoute
});
const AppPerformanceReviewsReviewIdRoute = Route$a.update({
  id: "/$reviewId",
  path: "/$reviewId",
  getParentRoute: () => AppPerformanceReviewsRoute
});
const AppPayrollRunsRunIdRoute = Route$9.update({
  id: "/payroll/runs/$runId",
  path: "/payroll/runs/$runId",
  getParentRoute: () => AppRoute
});
const AppEmployeesEmployeeIdEditRoute = Route$8.update({
  id: "/edit",
  path: "/edit",
  getParentRoute: () => AppEmployeesEmployeeIdRoute
});
const AppAttendanceRegularizationApprovalsRoute = Route$7.update({
  id: "/approvals",
  path: "/approvals",
  getParentRoute: () => AppAttendanceRegularizationRoute
});
const AdminAdminTenantsNewRoute = Route$6.update({
  id: "/new",
  path: "/new",
  getParentRoute: () => AdminAdminTenantsRoute
});
const AdminAdminTenantsTenantIdRoute = Route$5.update({
  id: "/$tenantId",
  path: "/$tenantId",
  getParentRoute: () => AdminAdminTenantsRoute
});
const AppSettingsRolesRoleIdIndexRoute = Route$4.update({
  id: "/$roleId/",
  path: "/$roleId/",
  getParentRoute: () => AppSettingsRolesRoute
});
const AppSettingsFormsFormIdIndexRoute = Route$3.update({
  id: "/forms/$formId/",
  path: "/forms/$formId/",
  getParentRoute: () => AppSettingsRoute
});
const AppSettingsRolesRoleIdEditRoute = Route$2.update({
  id: "/$roleId/edit",
  path: "/$roleId/edit",
  getParentRoute: () => AppSettingsRolesRoute
});
const AppSettingsFormsFormIdSubmissionsRoute = Route$1.update({
  id: "/forms/$formId/submissions",
  path: "/forms/$formId/submissions",
  getParentRoute: () => AppSettingsRoute
});
const AppSettingsFormsFormIdPreviewRoute = Route.update({
  id: "/forms/$formId/preview",
  path: "/forms/$formId/preview",
  getParentRoute: () => AppSettingsRoute
});
const AdminAdminTenantsRouteChildren = {
  AdminAdminTenantsTenantIdRoute,
  AdminAdminTenantsNewRoute
};
const AdminAdminTenantsRouteWithChildren = AdminAdminTenantsRoute._addFileChildren(AdminAdminTenantsRouteChildren);
const AdminRouteChildren = {
  AdminAdminDashboardRoute,
  AdminAdminLoginRoute,
  AdminAdminSettingsRoute,
  AdminAdminTenantsRoute: AdminAdminTenantsRouteWithChildren
};
const AdminRouteWithChildren = AdminRoute._addFileChildren(AdminRouteChildren);
const AppEmployeesEmployeeIdRouteChildren = {
  AppEmployeesEmployeeIdEditRoute
};
const AppEmployeesEmployeeIdRouteWithChildren = AppEmployeesEmployeeIdRoute._addFileChildren(
  AppEmployeesEmployeeIdRouteChildren
);
const AppEmployeesRouteChildren = {
  AppEmployeesEmployeeIdRoute: AppEmployeesEmployeeIdRouteWithChildren,
  AppEmployeesNewRoute,
  AppEmployeesIndexRoute
};
const AppEmployeesRouteWithChildren = AppEmployeesRoute._addFileChildren(
  AppEmployeesRouteChildren
);
const AppSettingsCompanyRouteChildren = {
  AppSettingsCompanyDepartmentsRoute,
  AppSettingsCompanyDesignationsRoute,
  AppSettingsCompanyHolidaysRoute,
  AppSettingsCompanyWorkCalendarRoute
};
const AppSettingsCompanyRouteWithChildren = AppSettingsCompanyRoute._addFileChildren(AppSettingsCompanyRouteChildren);
const AppSettingsRolesRouteChildren = {
  AppSettingsRolesAssignmentsRoute,
  AppSettingsRolesAuditRoute,
  AppSettingsRolesDelegationRoute,
  AppSettingsRolesNewRoute,
  AppSettingsRolesIndexRoute,
  AppSettingsRolesRoleIdEditRoute,
  AppSettingsRolesRoleIdIndexRoute
};
const AppSettingsRolesRouteWithChildren = AppSettingsRolesRoute._addFileChildren(AppSettingsRolesRouteChildren);
const AppSettingsRouteChildren = {
  AppSettingsAttendanceRoute,
  AppSettingsCompanyRoute: AppSettingsCompanyRouteWithChildren,
  AppSettingsRolesRoute: AppSettingsRolesRouteWithChildren,
  AppSettingsFormsNewRoute,
  AppSettingsHiringRejectionReasonsRoute,
  AppSettingsLeavePoliciesRoute,
  AppSettingsPayrollStructuresRoute,
  AppSettingsFormsIndexRoute,
  AppSettingsLeaveIndexRoute,
  AppSettingsPayrollIndexRoute,
  AppSettingsFormsFormIdPreviewRoute,
  AppSettingsFormsFormIdSubmissionsRoute,
  AppSettingsFormsFormIdIndexRoute
};
const AppSettingsRouteWithChildren = AppSettingsRoute._addFileChildren(
  AppSettingsRouteChildren
);
const AppAttendanceRegularizationRouteChildren = {
  AppAttendanceRegularizationApprovalsRoute,
  AppAttendanceRegularizationIndexRoute
};
const AppAttendanceRegularizationRouteWithChildren = AppAttendanceRegularizationRoute._addFileChildren(
  AppAttendanceRegularizationRouteChildren
);
const AppPerformanceReviewsRouteChildren = {
  AppPerformanceReviewsReviewIdRoute
};
const AppPerformanceReviewsRouteWithChildren = AppPerformanceReviewsRoute._addFileChildren(
  AppPerformanceReviewsRouteChildren
);
const AppPerformanceTeamRouteChildren = {
  AppPerformanceTeamEmployeeIdRoute
};
const AppPerformanceTeamRouteWithChildren = AppPerformanceTeamRoute._addFileChildren(AppPerformanceTeamRouteChildren);
const AppRouteChildren = {
  AppAiAssistantRoute,
  AppAnnouncementsRoute,
  AppDashboardRoute,
  AppEmployeesRoute: AppEmployeesRouteWithChildren,
  AppMeRoute,
  AppNotificationsRoute,
  AppOrgChartRoute,
  AppSettingsRoute: AppSettingsRouteWithChildren,
  AppAttendanceRecordsRoute,
  AppAttendanceRegularizationRoute: AppAttendanceRegularizationRouteWithChildren,
  AppAttendanceTeamRoute,
  AppCandidatesCandidateIdRoute,
  AppCandidatesInviteRoute,
  AppExpensesNewRoute,
  AppHelpdeskNewRoute,
  AppLeaveApplyRoute,
  AppLeaveApprovalsRoute,
  AppLeaveBalancesRoute,
  AppLeaveCalendarRoute,
  AppLeaveRequestsRoute,
  AppPayrollDeclarationsRoute,
  AppPayrollPayslipsRoute,
  AppPerformanceAdminRoute,
  AppPerformanceCalibrationRoute,
  AppPerformanceGoalsRoute,
  AppPerformanceReviewsRoute: AppPerformanceReviewsRouteWithChildren,
  AppPerformanceTeamRoute: AppPerformanceTeamRouteWithChildren,
  AppReportsReportSlugRoute,
  AppAttendanceIndexRoute,
  AppCandidatesIndexRoute,
  AppExpensesIndexRoute,
  AppHelpdeskIndexRoute,
  AppLeaveIndexRoute,
  AppPayrollIndexRoute,
  AppPerformanceIndexRoute,
  AppReportsIndexRoute,
  AppPayrollRunsRunIdRoute,
  AppReportsBuilderReportIdRoute,
  AppPayrollRunsIndexRoute,
  AppReportsBuilderIndexRoute
};
const AppRouteWithChildren = AppRoute._addFileChildren(AppRouteChildren);
const PlatformOnboardingRouteChildren = {
  PlatformOnboardingAdminRoute,
  PlatformOnboardingBrandRoute,
  PlatformOnboardingReviewRoute
};
const PlatformOnboardingRouteWithChildren = PlatformOnboardingRoute._addFileChildren(PlatformOnboardingRouteChildren);
const PlatformRouteChildren = {
  PlatformLoginRoute,
  PlatformOnboardingRoute: PlatformOnboardingRouteWithChildren
};
const PlatformRouteWithChildren = PlatformRoute._addFileChildren(
  PlatformRouteChildren
);
const PortalRouteChildren = {
  PortalPortalIndexRoute,
  PortalPortalPipelineIdFormRoute,
  PortalPortalPipelineIdOfferRoute,
  PortalPortalPipelineIdIndexRoute
};
const PortalRouteWithChildren = PortalRoute._addFileChildren(PortalRouteChildren);
const rootRouteChildren = {
  IndexRoute,
  AdminRoute: AdminRouteWithChildren,
  AppRoute: AppRouteWithChildren,
  PlatformRoute: PlatformRouteWithChildren,
  PortalRoute: PortalRouteWithChildren
};
const routeTree = Route$1s._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreload: "intent",
    defaultPreloadDelay: 40,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  setStatus as $,
  downloadCsv as A,
  employeesToCsv as B,
  archiveEmployees as C,
  dateKey$1 as D,
  pad2$1 as E,
  createStore as F,
  fail as G,
  uid as H,
  initialsFromName as I,
  RUN_STATUS_LABELS as J,
  formatRange as K,
  getStandardReport as L,
  EXPORT_LARGE_ROW_THRESHOLD as M,
  exportReport as N,
  currentFinancialYear as O,
  parseCurrencyInput as P,
  toKey as Q,
  Route$1c as R,
  Spinner as S,
  overlaps as T,
  startOfDay as U,
  calculateWorkingDays as V,
  nextEmployeeCode as W,
  createEmployee as X,
  maskAccount as Y,
  computeCompleteness as Z,
  getEmployee as _,
  attendanceApi as a,
  updateDocument as a0,
  Route$y as a1,
  fieldsForDataSource as a2,
  filterFieldsForDataSource as a3,
  DATA_SOURCE_LABELS as a4,
  updateReport as a5,
  saveReport as a6,
  monthOptions as a7,
  Route$q as a8,
  Route$p as a9,
  computeBreakup as aa,
  getSavedReport as ab,
  Route$b as ac,
  Route$a as ad,
  downloadTextFile as ae,
  updateEmployee as af,
  Route$5 as ag,
  router as ah,
  formatMinutes as b,
  cn as c,
  delay as d,
  essApi as e,
  formatDate as f,
  formatClock as g,
  getCurrentPosition as h,
  leaveApi as i,
  formatCurrency as j,
  interpretNlQuery as k,
  listEmployees as l,
  monthLabel as m,
  runCustomReport as n,
  ok as o,
  payrollApi as p,
  getExecutiveKpis as q,
  relativeTime as r,
  settingsApi as s,
  STANDARD_REPORT_SLUGS as t,
  uiStore as u,
  STANDARD_REPORT_META as v,
  listSavedReports as w,
  deleteReport as x,
  performanceApi as y,
  objectiveDisplayProgress as z
};
