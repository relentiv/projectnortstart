import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { L as Link } from "./_libs/tanstack__react-router.mjs";
import { P as PageHeader } from "./_ssr/PageHeader-CpfbD_86.mjs";
import { e as essApi, S as Spinner, c as cn, r as relativeTime } from "./_ssr/router-Arl77cRa.mjs";
import { B as Button } from "./_ssr/Button-Crtgy6Xx.mjs";
import { B as Badge } from "./_ssr/Badge-Cm1DzmgP.mjs";
import { C as Card } from "./_ssr/Card-Dnu0IoXY.mjs";
import { E as EmptyState } from "./_ssr/EmptyState-DCYWhDnT.mjs";
import { N as NOTIFICATION_CATEGORY_LABELS } from "./_ssr/ess-DxDpqIfW.mjs";

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
const FILTERS = ["all", "unread", "leave", "attendance", "payroll", "performance", "helpdesk", "expense", "announcement"];
function NotificationsPage() {
  const [items, setItems] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [filter, setFilter] = reactExports.useState("all");
  reactExports.useEffect(() => {
    void essApi.listNotifications().then((r) => {
      setItems(r.data ?? []);
      setLoading(false);
    });
  }, []);
  const shown = reactExports.useMemo(() => {
    if (filter === "all") return items;
    if (filter === "unread") return items.filter((n) => !n.read);
    return items.filter((n) => n.category === filter);
  }, [items, filter]);
  const unread = items.filter((n) => !n.read).length;
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 28 }) });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Notifications", description: unread > 0 ? `${unread} unread update${unread > 1 ? "s" : ""}` : "You're all caught up.", actions: unread > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: () => void essApi.markAllRead().then((r) => setItems(r.data ?? [])), children: "Mark all read" }) : void 0 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: FILTERS.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setFilter(f), className: cn("rounded-full border px-3 py-1.5 text-[12px] font-medium transition-colors", filter === f ? "border-transparent text-white" : "border-[#E5E5E3] text-[#3F3F46] hover:bg-[#FAFAF8]"), style: filter === f ? {
      background: "var(--tenant-primary)"
    } : void 0, children: f === "all" ? "All" : f === "unread" ? "Unread" : NOTIFICATION_CATEGORY_LABELS[f] }, f)) }),
    shown.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "Nothing here", subtitle: "No notifications match this filter." }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { padded: false, className: "p-0 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { children: shown.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: cn("px-5 py-4 border-b border-[#F2F2F0] last:border-0 flex items-start gap-3", !n.read && "bg-[#FAFAF8]"), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "default", children: NOTIFICATION_CATEGORY_LABELS[n.category] }),
          !n.read && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "warning", children: "New" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] text-[#9CA3AF]", children: relativeTime(n.createdAt) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-[14px] font-medium text-[#0A0A0A]", children: n.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#6B6B6B] mt-0.5", children: n.body }),
        n.actionTo && /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: n.actionTo, onClick: () => void essApi.markRead(n.id).then((r) => setItems(r.data ?? [])), className: "inline-block mt-2 text-[13px] font-medium", style: {
          color: "var(--tenant-primary)"
        }, children: n.actionLabel ?? "Open" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1 shrink-0", children: [
        !n.read && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", onClick: () => void essApi.markRead(n.id).then((r) => setItems(r.data ?? [])), children: "Mark read" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", onClick: () => void essApi.clearNotification(n.id).then((r) => setItems(r.data ?? [])), children: "Clear" })
      ] })
    ] }, n.id)) }) })
  ] });
}
export {
  NotificationsPage as component
};
