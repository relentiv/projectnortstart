import { j as jsxRuntimeExports, r as reactExports } from "./_libs/react.mjs";
import { P as PageHeader } from "./_ssr/PageHeader-CpfbD_86.mjs";
import { B as Button } from "./_ssr/Button-Crtgy6Xx.mjs";
import { S as Spinner, y as performanceApi, f as formatDate } from "./_ssr/router-Arl77cRa.mjs";
import { E as EmptyState } from "./_ssr/EmptyState-DCYWhDnT.mjs";
import { s as showToast } from "./_ssr/Toast-DlQQlIf6.mjs";
import { C as Card } from "./_ssr/Card-Dnu0IoXY.mjs";
import { P as ProgressBar } from "./_ssr/ProgressBar-DzmeKi_t.mjs";
import { R as ReviewCycleBadge } from "./_ssr/ReviewCycleBadge-DE2gxc2Q.mjs";
import { a as GOAL_PERIOD_LABELS } from "./_ssr/performance-Bre1KeEI.mjs";
import { P as PermissionGuard } from "./_ssr/PermissionGuard-DHUddp2f.mjs";

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
const FRAMEWORK_LABEL = { okr: "OKR", kra: "KRA", hybrid: "Hybrid" };
function daysLeft(iso) {
  return Math.ceil((new Date(iso).getTime() - Date.now()) / 864e5);
}
function ReviewCycleCard({ cycle, stats, actions, onView, onDuplicate, onClose }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[16px] font-semibold text-[#0A0A0A]", children: cycle.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[12px] text-[#6B6B6B] mt-0.5", children: [
          formatDate(cycle.startDate),
          " – ",
          formatDate(cycle.endDate),
          " · ",
          GOAL_PERIOD_LABELS[cycle.period],
          " ·",
          " ",
          FRAMEWORK_LABEL[cycle.framework]
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ReviewCycleBadge, { status: cycle.status })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProgressBar, { value: cycle.completionRate, label: `${cycle.employeeCount} employees · ${cycle.completionRate}% complete` }),
    stats && /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "grid grid-cols-3 gap-3 pt-2 border-t border-[#E5E5E3] text-[13px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-[11px] uppercase tracking-wide text-[#6B6B6B]", children: "Self-assessments" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("dd", { className: "tabular-nums", children: [
          stats.selfSubmitted,
          " / ",
          stats.total
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-[11px] uppercase tracking-wide text-[#6B6B6B]", children: "Manager reviews" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("dd", { className: "tabular-nums", children: [
          stats.managerComplete,
          " / ",
          stats.total
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-[11px] uppercase tracking-wide text-[#6B6B6B]", children: "Peer pending" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "tabular-nums", children: stats.peerPending })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[12px] text-[#6B6B6B]", children: [
      "Self-review by ",
      formatDate(cycle.selfReviewDeadline),
      " (",
      daysLeft(cycle.selfReviewDeadline),
      " days) · Manager review by",
      " ",
      formatDate(cycle.managerReviewDeadline),
      " (",
      daysLeft(cycle.managerReviewDeadline),
      " days)"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 pt-2 border-t border-[#E5E5E3]", children: [
      onView && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "secondary", onClick: onView, children: "View / edit" }),
      onDuplicate && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", onClick: onDuplicate, children: "Duplicate" }),
      onClose && cycle.status !== "completed" && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", onClick: onClose, children: "Close cycle" }),
      actions
    ] })
  ] });
}
function PerformanceAdminPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PermissionGuard, { permission: "performance.manage", fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 text-[14px] text-[#6B6B6B]", children: "You don't have permission to manage review cycles." }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(PerformanceAdminInner, {}) });
}
function PerformanceAdminInner() {
  const [loading, setLoading] = reactExports.useState(true);
  const [cycles, setCycles] = reactExports.useState([]);
  const load = async () => {
    setLoading(true);
    const res = await performanceApi.listCycles();
    const list = res.data ?? [];
    const withStats = await Promise.all(list.map(async (c) => {
      const s = await performanceApi.cycleStats(c.id);
      return {
        ...c,
        stats: s.data
      };
    }));
    setCycles(withStats);
    setLoading(false);
  };
  reactExports.useEffect(() => {
    void load();
  }, []);
  const launch = async (id) => {
    const res = await performanceApi.setCycleStatus(id, "active");
    if (res.error) return showToast(res.error.message, "error");
    showToast("Cycle launched.", "success");
    await load();
  };
  const close = async (id) => {
    const res = await performanceApi.setCycleStatus(id, "completed");
    if (res.error) return showToast(res.error.message, "error");
    showToast("Cycle closed.", "success");
    await load();
  };
  const remind = async (id) => {
    const res = await performanceApi.sendReminders(id);
    if (res.error) return showToast(res.error.message, "error");
    showToast(`Reminders sent to ${res.data ?? 0} pending participants.`, "success");
  };
  const share = async (id) => {
    const res = await performanceApi.shareReviews(id);
    if (res.error) return showToast(res.error.message, "error");
    showToast(`${res.data ?? 0} reviews shared with employees.`, "success");
    await load();
  };
  const reassignChanged = async (c) => {
    const changed = c.stats?.managerChanged ?? [];
    if (changed.length === 0) return;
    const res = await performanceApi.reassignManager(changed.map((r) => r.id), changed[0].managerId);
    if (res.error) return showToast(res.error.message, "error");
    showToast(`${res.data ?? 0} reviews reassigned to the current manager.`, "success");
    await load();
  };
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 28 }) });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Review cycles", description: "Launch, monitor and close performance review cycles." }),
    cycles.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No review cycles yet", subtitle: "Create a review cycle from Settings → Review Cycles." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: cycles.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(ReviewCycleCard, { cycle: c, stats: c.stats ?? void 0, onClose: c.status !== "draft" ? () => void close(c.id) : void 0, actions: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      c.status === "draft" && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "primary", onClick: () => void launch(c.id), children: "Launch cycle" }),
      c.status !== "draft" && c.status !== "completed" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", onClick: () => void remind(c.id), children: "Send reminders" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", onClick: () => void share(c.id), children: "Share completed reviews" }),
        (c.stats?.managerChanged.length ?? 0) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "ghost", onClick: () => void reassignChanged(c), children: [
          "Acknowledge ",
          c.stats?.managerChanged.length,
          " manager change(s)"
        ] })
      ] })
    ] }) }, c.id)) })
  ] });
}
export {
  PerformanceAdminPage as component
};
