import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { L as Link } from "./_libs/tanstack__react-router.mjs";
import { B as Breadcrumb } from "./_ssr/Breadcrumb-eir09VHE.mjs";
import { S as StatCard } from "./_ssr/StatCard-BGUt0oGs.mjs";
import { A as Avatar } from "./_ssr/Avatar-B65jymUr.mjs";
import { E as EmptyState } from "./_ssr/EmptyState-DCYWhDnT.mjs";
import { C as ConfirmDialog } from "./_ssr/ConfirmDialog-C1NdmGJ3.mjs";
import { s as showToast } from "./_ssr/Toast-DlQQlIf6.mjs";
import { d as delay, o as ok, a as attendanceApi, b as formatMinutes, g as formatClock, i as leaveApi, p as payrollApi, e as essApi, S as Spinner, j as formatCurrency, r as relativeTime, m as monthLabel, h as getCurrentPosition } from "./_ssr/router-Arl77cRa.mjs";
import { B as Button } from "./_ssr/Button-Crtgy6Xx.mjs";
import { B as Badge } from "./_ssr/Badge-Cm1DzmgP.mjs";
import { A as AnnouncementCard } from "./_ssr/AnnouncementCard-CCz6yyme.mjs";
import { u as useCurrentEmployee } from "./_ssr/useCurrentEmployee-BAch-pa0.mjs";
import { a as authStore } from "./_ssr/auth-CjdYhZTR.mjs";
import { t as tenantStore } from "./_ssr/tenant-DWe0InGL.mjs";
import { f as Sparkles, p as Calendar, A as ArrowUpRight, C as Clock, u as Play, v as Square, w as Coffee, x as CircleCheck, D as DollarSign, B as Bell, y as UserCheck, Z as Zap, U as Users, r as Briefcase, z as Check, X, F as Activity, G as UserX, c as CalendarDays } from "./_libs/lucide-react.mjs";

import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval.mjs";
import "./_libs/unenv.mjs";


import "./_libs/seroval-plugins.mjs";


import "./_libs/react-dom.mjs";
import "./_libs/isbot.mjs";
import "./_ssr/Modal-BWxmma2i.mjs";
import "./_libs/tanstack__query-core.mjs";
import "./_libs/tanstack__react-query.mjs";
import "./_libs/clsx.mjs";
import "./_libs/tailwind-merge.mjs";
import "./_libs/zod.mjs";
import "./_ssr/Card-Dnu0IoXY.mjs";
import "./_ssr/ess-DxDpqIfW.mjs";
import "./_ssr/rbac-CiXrabhS.mjs";
import "./_ssr/rbac-CHd75bNv.mjs";
import "./_ssr/defaults-CvUaCo6_.mjs";
function HRMetricGrid({ metrics }) {
  const hasPending = metrics.pendingApprovals > 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      StatCard,
      {
        label: "Total workforce",
        value: metrics.totalEmployees,
        trend: metrics.totalEmployeesNote,
        trendDir: "up",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4" }),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end gap-1.5 h-6 pt-2", "aria-hidden": true, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 bg-neutral-900 rounded-t h-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 bg-neutral-900/80 rounded-t h-[80%]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 bg-neutral-900/60 rounded-t h-[65%]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 bg-neutral-900/40 rounded-t h-[45%]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 bg-[#F97316] rounded-t h-[90%]" })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      StatCard,
      {
        label: "On leave today",
        value: metrics.onLeaveToday,
        trend: metrics.onLeaveTodayNote,
        trendDir: "neutral",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4" }),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex items-center justify-between text-xs text-[#6B6B6B]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "Present: ",
            Math.max(0, metrics.totalEmployees - metrics.onLeaveToday)
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-emerald-600", children: [
            metrics.totalEmployees ? Math.round((metrics.totalEmployees - metrics.onLeaveToday) / metrics.totalEmployees * 100) : 100,
            "% present"
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      StatCard,
      {
        label: "Open requisitions",
        value: metrics.openPositions,
        trend: metrics.openPositionsNote,
        trendDir: "neutral",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "w-4 h-4" }),
        actionHint: true,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block w-2 h-2 rounded-full bg-amber-500 animate-pulse" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-medium text-[#6B6B6B]", children: "Active recruiting pipelines" })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      StatCard,
      {
        label: "Pending approvals",
        value: metrics.pendingApprovals,
        trend: metrics.pendingApprovalsNote,
        trendDir: hasPending ? "down" : "up",
        variant: hasPending ? "dark" : "default",
        actionHint: true,
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "w-4 h-4" }),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: `inline-block w-2 h-2 rounded-full ${hasPending ? "bg-orange-500 animate-ping" : "bg-emerald-500"}`
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[11px] font-medium ${hasPending ? "text-neutral-300" : "text-[#6B6B6B]"}`, children: hasPending ? "Requires manager decision" : "Inbox zero" })
        ] })
      }
    )
  ] });
}
const APPROVALS_KEY = "hrms.dashboard.approvals";
function initials(name) {
  return name.split(" ").map((p) => p[0]).slice(0, 2).join("").toUpperCase();
}
function readApprovals() {
  if (typeof window === "undefined") return seededApprovals();
  try {
    const raw = window.localStorage.getItem(APPROVALS_KEY);
    if (raw) return JSON.parse(raw);
    const seed = seededApprovals();
    window.localStorage.setItem(APPROVALS_KEY, JSON.stringify(seed));
    return seed;
  } catch {
    return seededApprovals();
  }
}
function writeApprovals(list) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(APPROVALS_KEY, JSON.stringify(list));
}
function seededApprovals() {
  return [
    { id: "ap_1", employeeName: "Sarah Carter", employeeInitials: initials("Sarah Carter"), type: "leave", dateRange: "Jul 18 – Jul 22", reason: "Annual leave — family trip" },
    { id: "ap_2", employeeName: "Marcus Khan", employeeInitials: initials("Marcus Khan"), type: "leave", dateRange: "Jul 16", reason: "Sick leave" },
    { id: "ap_3", employeeName: "Priya Sharma", employeeInitials: initials("Priya Sharma"), type: "regularisation", dateRange: "Jul 14", reason: "Missed check-out" },
    { id: "ap_4", employeeName: "Daniel Okafor", employeeInitials: initials("Daniel Okafor"), type: "leave", dateRange: "Jul 21 – Jul 23", reason: "Casual leave" }
  ];
}
const dashboardApi = {
  async getMetrics() {
    const approvals = readApprovals().length;
    return delay(ok({
      totalEmployees: 298,
      totalEmployeesNote: "+2 joined this month",
      onLeaveToday: 14,
      onLeaveTodayNote: "8 approved · 6 pending",
      openPositions: 7,
      openPositionsNote: "3 closing this week",
      pendingApprovals: approvals,
      pendingApprovalsNote: approvals === 0 ? "All clear" : "Needs your action"
    }));
  },
  async listPendingApprovals() {
    return delay(ok(readApprovals()));
  },
  async resolveApproval(id, _decision) {
    writeApprovals(readApprovals().filter((a) => a.id !== id));
    return delay(ok(true), 200);
  },
  async listLeaveToday() {
    return delay(ok([
      { id: "l_1", employeeName: "Ava Mitchell", employeeInitials: initials("Ava Mitchell"), leaveType: "Annual", returnDate: "Jul 16" },
      { id: "l_2", employeeName: "Hiro Tanaka", employeeInitials: initials("Hiro Tanaka"), leaveType: "Sick", returnDate: "Jul 15" },
      { id: "l_3", employeeName: "Lena Müller", employeeInitials: initials("Lena Müller"), leaveType: "Annual", returnDate: "Jul 20" },
      { id: "l_4", employeeName: "Omar Haddad", employeeInitials: initials("Omar Haddad"), leaveType: "Casual", returnDate: "Jul 15" }
    ]));
  },
  async listUpcomingEvents() {
    return delay(ok([
      { id: "e_1", type: "birthday", employeeName: "Sarah Carter", description: "turns 32", date: "Jul 16" },
      { id: "e_2", type: "anniversary", employeeName: "Marcus Khan", description: "3 years at Acme", date: "Jul 17" },
      { id: "e_3", type: "probation", employeeName: "Yuki Sato", description: "probation ends in 3 days", date: "Jul 18" },
      { id: "e_4", type: "birthday", employeeName: "Daniel Okafor", description: "turns 28", date: "Jul 19" }
    ]));
  },
  async listRecentActivity() {
    return delay(ok([
      { id: "ac_1", actorName: "Jordan Reyes", actorInitials: initials("Jordan Reyes"), description: "Approved Sarah Carter's leave request", timestamp: "2 hours ago" },
      { id: "ac_2", actorName: "Theo Park", actorInitials: initials("Theo Park"), description: "Added Yuki Sato as a new employee", timestamp: "5 hours ago" },
      { id: "ac_3", actorName: "Maya Singh", actorInitials: initials("Maya Singh"), description: "Updated Engineering department head", timestamp: "Yesterday at 4:12 PM" },
      { id: "ac_4", actorName: "Jordan Reyes", actorInitials: initials("Jordan Reyes"), description: "Changed company theme accent color", timestamp: "Yesterday at 11:48 AM" },
      { id: "ac_5", actorName: "Riley Chen", actorInitials: initials("Riley Chen"), description: "Closed open requisition · Account Executive", timestamp: "2 days ago" }
    ]));
  }
};
function PendingApprovalsWidget({
  initial,
  onChange
}) {
  const [items, setItems] = reactExports.useState(initial);
  const [confirm, setConfirm] = reactExports.useState(null);
  const visible = items.slice(0, 5);
  const submit = async () => {
    if (!confirm) return;
    const { id, decision } = confirm;
    await dashboardApi.resolveApproval(id, decision);
    const next = items.filter((a) => a.id !== id);
    setItems(next);
    onChange?.(next);
    showToast(decision === "approve" ? "Request approved" : "Request declined", decision === "approve" ? "success" : "info");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-[#E5E5E3] bg-white p-0 shadow-[0_1px_3px_rgba(0,0,0,0.03)] overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4 border-b border-[#F2F2F0] flex items-center justify-between bg-[#FAFAF9]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 rounded-full bg-orange-500" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[14px] font-bold text-[#0A0A0A] tracking-tight", children: "Pending approvals" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-[#8E8E8E] font-medium", children: "Action required by manager" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => showToast("Leave module ships in Phase 5", "info"),
          className: "inline-flex items-center gap-1 text-[12px] font-semibold text-[#0A0A0A] hover:text-orange-600 transition-colors group",
          children: [
            "View all",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })
          ]
        }
      )
    ] }),
    visible.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "All caught up!", subtitle: "No pending approvals waiting for your action." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-[#F4F4F2]", children: visible.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "px-5 py-3.5 flex items-center gap-3.5 hover:bg-[#FAFAF9] transition-colors", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { initials: a.employeeInitials, className: "shrink-0 ring-2 ring-neutral-100" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-bold text-[#0A0A0A] truncate", children: a.employeeName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-600", children: a.type })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[12px] text-[#6B6B6B] truncate mt-0.5", children: [
          a.dateRange,
          " — ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#8E8E8E]", children: a.reason })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setConfirm({ id: a.id, decision: "approve" }),
            "aria-label": `Approve ${a.employeeName}`,
            className: "h-8 w-8 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 hover:bg-emerald-600 hover:text-white transition-all flex items-center justify-center shadow-2xs",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setConfirm({ id: a.id, decision: "decline" }),
            "aria-label": `Decline ${a.employeeName}`,
            className: "h-8 w-8 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 hover:bg-rose-600 hover:text-white transition-all flex items-center justify-center shadow-2xs",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
          }
        )
      ] })
    ] }, a.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmDialog,
      {
        open: !!confirm,
        onOpenChange: (o) => !o && setConfirm(null),
        title: confirm?.decision === "approve" ? "Approve request?" : "Decline request?",
        description: confirm?.decision === "approve" ? "The employee will be notified immediately that their request has been approved." : "The employee will be notified that their request was declined.",
        confirmLabel: confirm?.decision === "approve" ? "Approve" : "Decline",
        variant: confirm?.decision === "decline" ? "danger" : "default",
        onConfirm: submit
      }
    )
  ] });
}
function TeamCalendarWidget({ items }) {
  const visible = items.slice(0, 6);
  const extra = Math.max(0, items.length - 6);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-[#E5E5E3] bg-white p-0 shadow-[0_1px_3px_rgba(0,0,0,0.03)] overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4 border-b border-[#F2F2F0] flex items-center justify-between bg-[#FAFAF9]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(UserX, { className: "w-4 h-4 text-[#8E8E8E]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[14px] font-bold text-[#0A0A0A] tracking-tight", children: "On leave today" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-[#8E8E8E] font-medium", children: "Team availability status" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-neutral-100 text-neutral-800 border border-neutral-200", children: [
        items.length,
        " out"
      ] })
    ] }),
    visible.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "Full team in today!", subtitle: "Everyone is available and accounted for." }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "divide-y divide-[#F4F4F2]", children: [
      visible.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "px-5 py-3 flex items-center gap-3.5 hover:bg-[#FAFAF9] transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { initials: l.employeeInitials, className: "shrink-0 ring-2 ring-neutral-100" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-bold text-[#0A0A0A] truncate", children: l.employeeName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-[#8E8E8E] font-medium mt-0.5", children: l.leaveType })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-medium bg-[#F4F4F2] text-[#6B6B6B] border border-[#E5E5E3] shrink-0", children: [
          "Back ",
          l.returnDate
        ] })
      ] }, l.id)),
      extra > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "px-5 py-2.5 text-[12px] text-[#8E8E8E] font-semibold bg-[#FAFAF9]", children: [
        "+ ",
        extra,
        " more team members out"
      ] })
    ] })
  ] });
}
const ICONS = { birthday: "🎂", anniversary: "🎉", probation: "⏰" };
function UpcomingEventsWidget({ items }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-[#E5E5E3] bg-white p-0 shadow-[0_1px_3px_rgba(0,0,0,0.03)] overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4 border-b border-[#F2F2F0] flex items-center justify-between bg-[#FAFAF9]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "w-4 h-4 text-[#8E8E8E]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[14px] font-bold text-[#0A0A0A] tracking-tight", children: "Upcoming events" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-[#8E8E8E] font-medium", children: "Milestones in the next 7 days" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-2 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider bg-orange-50 text-orange-700 border border-orange-200", children: "Next 7 Days" })
    ] }),
    items.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No upcoming events.", subtitle: "No birthdays or work anniversaries this week." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-[#F4F4F2]", children: items.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "px-5 py-3 flex items-center gap-3.5 hover:bg-[#FAFAF9] transition-colors", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl flex items-center justify-center w-8 h-8 rounded-xl bg-[#F4F4F2] shrink-0", "aria-hidden": true, children: ICONS[e.type] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-bold text-[#0A0A0A] truncate", children: e.employeeName }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-[#8E8E8E] truncate mt-0.5", children: e.description })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-semibold text-[#0A0A0A] bg-[#FAFAF9] border border-[#E5E5E3] px-2 py-0.5 rounded-md shrink-0", children: e.date })
    ] }, e.id)) })
  ] });
}
function RecentActivityFeed({ items }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-[#E5E5E3] bg-white p-0 shadow-[0_1px_3px_rgba(0,0,0,0.03)] overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4 border-b border-[#F2F2F0] flex items-center gap-2 bg-[#FAFAF9]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-4 h-4 text-[#8E8E8E]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[14px] font-bold text-[#0A0A0A] tracking-tight", children: "Recent activity" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-[#8E8E8E] font-medium", children: "Real-time log of team events" })
      ] })
    ] }),
    items.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No recent activity logged." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-[#F4F4F2]", children: items.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "px-5 py-3 flex items-start gap-3.5 hover:bg-[#FAFAF9] transition-colors", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { initials: a.actorInitials, className: "shrink-0 mt-0.5 ring-2 ring-neutral-100" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[13px] text-[#0A0A0A] leading-snug", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: a.actorName }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#6B6B6B]", children: a.description })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-medium text-[#8E8E8E] mt-1", children: a.timestamp })
      ] })
    ] }, a.id)) })
  ] });
}
function useNow(active) {
  const [now, setNow] = reactExports.useState(null);
  reactExports.useEffect(() => {
    setNow(Date.now());
    if (!active) return;
    const t = setInterval(() => setNow(Date.now()), 1e3);
    return () => clearInterval(t);
  }, [active]);
  return now;
}
function WorkStatusCard({ employeeId, employeeName }) {
  const [record, setRecord] = reactExports.useState(null);
  const [settings, setSettings] = reactExports.useState(null);
  const [busy, setBusy] = reactExports.useState(false);
  reactExports.useEffect(() => {
    let alive = true;
    void (async () => {
      const [t, s] = await Promise.all([attendanceApi.getToday(employeeId), attendanceApi.getSettings()]);
      if (!alive) return;
      if (t.data) setRecord(t.data);
      if (s.data) setSettings(s.data);
    })();
    return () => {
      alive = false;
    };
  }, [employeeId]);
  const openBreak = record?.breaks.find((b) => !b.end);
  const state = !record?.clockIn ? "out" : record.clockOut ? "done" : openBreak ? "break" : "in";
  const ticking = state === "in";
  const now = useNow(ticking);
  const targetMinutes = settings?.fullDayMinutes ?? 480;
  const workedMinutes = reactExports.useMemo(() => {
    if (!record?.clockIn) return 0;
    if (record.clockOut) return record.workedMinutes;
    const end = state === "break" && openBreak ? new Date(openBreak.start).getTime() : now ?? Date.now();
    const gross = Math.max(0, Math.round((end - new Date(record.clockIn).getTime()) / 6e4));
    return Math.max(0, gross - (record.breakMinutes ?? 0));
  }, [record, now, state, openBreak]);
  const pct = Math.min(100, Math.round(workedMinutes / targetMinutes * 100));
  const remaining = Math.max(0, targetMinutes - workedMinutes);
  const run = async (fn, success) => {
    setBusy(true);
    const res = await fn();
    setBusy(false);
    if (res.error || !res.data) return showToast(res.error?.message ?? "Something went wrong", "error");
    setRecord(res.data);
    showToast(success, "success");
  };
  const punch = async (kind) => {
    const location = settings?.enforceGeo ? await getCurrentPosition() : void 0;
    await run(
      () => kind === "in" ? attendanceApi.clockIn(employeeId, { location: location ?? void 0 }) : attendanceApi.clockOut(employeeId, { location: location ?? void 0 }),
      kind === "in" ? "Checked in. Have a productive day!" : "Checked out. Rest well!"
    );
  };
  const statusLabel = state === "out" ? "Not Checked In" : state === "break" ? "On Break" : state === "done" ? "Shift Completed" : "Currently Active";
  const badgeBg = state === "in" ? "bg-emerald-50 text-emerald-700 border-emerald-200" : state === "break" ? "bg-amber-50 text-amber-700 border-amber-200" : state === "done" ? "bg-neutral-100 text-neutral-600 border-neutral-200" : "bg-rose-50 text-rose-700 border-rose-200";
  const dotClass = state === "in" ? "bg-emerald-500 animate-pulse" : state === "break" ? "bg-amber-500 animate-bounce" : state === "done" ? "bg-neutral-400" : "bg-rose-500";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-3xl border border-[#E5E5E3] bg-white p-6 sm:p-7 shadow-[0_2px_8px_rgba(0,0,0,0.04)] overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-x-0 top-0 h-1.5 transition-all duration-300",
        style: {
          background: state === "in" ? "linear-gradient(90deg, #10B981, #14B8A6)" : state === "break" ? "linear-gradient(90deg, #F59E0B, #D97706)" : state === "done" ? "linear-gradient(90deg, #6B7280, #9CA3AF)" : "linear-gradient(90deg, #F97316, #EA580C)"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${badgeBg}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-2 w-2 rounded-full ${dotClass}` }),
            statusLabel,
            employeeName ? ` · ${employeeName}` : ""
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-[11px] font-medium text-[#8E8E8E]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3.5 h-3.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "Shift: ",
              formatMinutes(targetMinutes)
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-baseline gap-3 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[44px] sm:text-[56px] leading-none font-bold tracking-tight text-[#0A0A0A] font-sans tabular-nums", children: formatMinutes(workedMinutes) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[15px] sm:text-[17px] font-semibold text-[#8E8E8E] font-sans", children: [
            "target: ",
            formatMinutes(targetMinutes),
            " (",
            pct,
            "%)"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 h-2.5 w-full max-w-lg rounded-full bg-[#F4F4F2] overflow-hidden p-0.5 border border-[#EBEBE8]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "h-full rounded-full transition-all duration-500 ease-out bg-gradient-to-r from-neutral-900 to-neutral-700",
            style: { width: `${pct}%` }
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-[#F2F2F0]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Meta, { label: "Checked in", value: formatClock(record?.clockIn) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Meta, { label: "Checked out", value: formatClock(record?.clockOut) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Meta, { label: "Break taken", value: formatMinutes(record?.breakMinutes ?? 0) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Meta,
            {
              label: state === "done" ? "Overtime logged" : "Remaining time",
              value: formatMinutes(state === "done" ? record?.overtimeMinutes ?? 0 : remaining)
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-center gap-3 lg:w-[220px] lg:border-l lg:border-[#F2F2F0] lg:pl-6", children: [
        state === "out" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "tenant",
            size: "lg",
            loading: busy,
            className: "w-full rounded-2xl py-3.5 text-sm font-semibold shadow-sm hover:shadow transition-all bg-[#0A0A0A] text-white hover:bg-[#222222]",
            onClick: () => void punch("in"),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "w-4 h-4 mr-2 inline" }),
              "Check In Now"
            ]
          }
        ),
        (state === "in" || state === "break") && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "primary",
              size: "lg",
              loading: busy,
              className: "w-full rounded-2xl py-3 text-sm font-semibold shadow-sm bg-rose-600 hover:bg-rose-700 text-white",
              onClick: () => void punch("out"),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Square, { className: "w-4 h-4 mr-2 inline" }),
                "Check Out"
              ]
            }
          ),
          settings?.breakTrackingEnabled && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "secondary",
              size: "md",
              loading: busy,
              className: "w-full rounded-2xl py-2.5 text-xs font-semibold border border-[#E5E5E3] bg-[#F9F9F7] text-[#0A0A0A] hover:bg-[#F2F2F0]",
              onClick: () => void run(
                () => openBreak ? attendanceApi.endBreak(employeeId) : attendanceApi.startBreak(employeeId),
                openBreak ? "Break ended." : "Break started."
              ),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Coffee, { className: "w-3.5 h-3.5 mr-1.5 inline" }),
                openBreak ? "Resume Work" : "Take Break"
              ]
            }
          )
        ] }),
        state === "done" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-[#F9F9F7] border border-[#E5E5E3] p-4 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-6 h-6 text-emerald-600 mx-auto mb-1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-[#0A0A0A]", children: "Shift Complete" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-[#6B6B6B] mt-0.5", children: [
            formatMinutes(record?.workedMinutes ?? 0),
            " logged today"
          ] })
        ] })
      ] })
    ] })
  ] });
}
function Meta({ label, value }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-wider font-semibold text-[#8E8E8E]", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] font-semibold text-[#0A0A0A] tabular-nums mt-0.5 truncate", children: value })
  ] });
}
const QUICK_LINKS = [
  { label: "Apply for leave", to: "/leave/apply", hint: "Plan your time off" },
  { label: "Regularise attendance", to: "/attendance/regularization", hint: "Fix a missing punch" },
  { label: "My payslips", to: "/payroll/payslips", hint: "Download pay slips" },
  { label: "Claim an expense", to: "/expenses/new", hint: "Get reimbursed" },
  { label: "Raise a ticket", to: "/helpdesk/new", hint: "IT, HR or payroll help" },
  { label: "My goals", to: "/performance/goals", hint: "Track your OKRs" }
];
function EmployeeHomeDashboard() {
  const { employee, loading: empLoading } = useCurrentEmployee();
  const [balances, setBalances] = reactExports.useState([]);
  const [payslip, setPayslip] = reactExports.useState(null);
  const [notifications, setNotifications] = reactExports.useState([]);
  const [announcements, setAnnouncements] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    if (!employee) return;
    let alive = true;
    void (async () => {
      const [b, p, n, a] = await Promise.all([
        leaveApi.listBalances(employee.id),
        payrollApi.listPayslips(employee.id),
        essApi.listNotifications(),
        essApi.listAnnouncements()
      ]);
      if (!alive) return;
      setBalances(b.data ?? []);
      setPayslip(p.data?.[0] ?? null);
      setNotifications(n.data ?? []);
      setAnnouncements(a.data ?? []);
      setLoading(false);
    })();
    return () => {
      alive = false;
    };
  }, [employee?.id]);
  if (empLoading || employee && loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 28 }) });
  }
  const totalAvailable = balances.reduce((n, b) => n + (b.available ?? 0), 0);
  const unread = notifications.filter((n) => !n.read);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Leave available", value: `${totalAvailable} days`, icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Last net pay", value: payslip ? formatCurrency(payslip.netPay) : "—", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "w-4 h-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Unread notifications", value: unread.length, icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "w-4 h-4" }), variant: unread.length > 0 ? "dark" : "default" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Employee code", value: employee?.employeeCode ?? "—", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(UserCheck, { className: "w-4 h-4" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-[#E5E5E3] bg-white p-5 sm:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.03)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-4 h-4 text-orange-500" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[14px] font-bold text-[#0A0A0A] tracking-tight", children: "Quick actions" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-3", children: QUICK_LINKS.map((q) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: q.to,
          className: "group rounded-2xl border border-[#E5E5E3] p-4 hover:border-[#D1D1CF] hover:bg-[#FAFAF9] transition-all flex flex-col justify-between",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-bold text-[#0A0A0A] group-hover:text-orange-600 transition-colors", children: q.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-3.5 h-3.5 text-[#8E8E8E] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-orange-600" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-[#6B6B6B] mt-1 font-medium", children: q.hint })
          ] })
        },
        q.to
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-5 gap-5 sm:gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-3 space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[14px] font-bold text-[#0A0A0A]", children: "Latest announcements" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/announcements", className: "text-[12px] font-semibold text-[#0A0A0A] hover:text-orange-600 flex items-center gap-1", children: [
            "View all ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-3 h-3" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: announcements.slice(0, 2).map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx(AnnouncementCard, { announcement: a }, a.id)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-5 sm:space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-[#E5E5E3] bg-white p-0 shadow-[0_1px_3px_rgba(0,0,0,0.03)] overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4 border-b border-[#F2F2F0] flex items-center justify-between bg-[#FAFAF9]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[14px] font-bold text-[#0A0A0A]", children: "Recent notifications" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/notifications", className: "text-[12px] text-[#6B6B6B] hover:text-[#0A0A0A]", children: "All" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-[#F4F4F2]", children: notifications.slice(0, 5).map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "px-5 py-3.5 hover:bg-[#FAFAF9] transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-bold text-[#0A0A0A] truncate", children: n.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-[#6B6B6B] line-clamp-2 mt-0.5", children: n.body })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-[#8E8E8E] shrink-0 font-medium", children: relativeTime(n.createdAt) })
          ] }) }, n.id)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-[#E5E5E3] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[14px] font-bold text-[#0A0A0A] mb-3", children: "Leave balances" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2.5", children: [
            balances.slice(0, 5).map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center justify-between text-[13px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#0A0A0A] font-medium", children: b.leaveType.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "default", children: [
                b.available,
                " left"
              ] })
            ] }, b.leaveTypeId)),
            balances.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-[12px] text-[#6B6B6B]", children: "No leave balances configured yet." })
          ] })
        ] }),
        payslip && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-[#E5E5E3] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[14px] font-bold text-[#0A0A0A]", children: "Latest pay slip" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-[#6B6B6B] mt-0.5", children: monthLabel(payslip.month, payslip.year) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[26px] font-bold text-[#0A0A0A] mt-2 tabular-nums", children: formatCurrency(payslip.netPay) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/payroll/payslips", className: "inline-flex items-center gap-1 mt-3 text-xs font-semibold text-orange-600 hover:underline", children: [
            "Open payslips ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-3.5 h-3.5" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
function greeting() {
  const h = (/* @__PURE__ */ new Date()).getHours();
  if (h < 12) return "Good morning";
  if (h < 18) return "Good afternoon";
  return "Good evening";
}
const ROLE_LABEL = {
  hr_admin: "HR Admin",
  super_admin: "Administrator",
  manager: "Manager",
  employee: "Employee"
};
const SHORTCUTS = {
  employee: [{
    label: "Apply for leave",
    to: "/leave/apply"
  }, {
    label: "Regularise attendance",
    to: "/attendance/regularization"
  }, {
    label: "My payslips",
    to: "/payroll/payslips"
  }, {
    label: "Raise a ticket",
    to: "/helpdesk/new"
  }],
  manager: [{
    label: "Leave approvals",
    to: "/leave/approvals"
  }, {
    label: "Team attendance",
    to: "/attendance/team"
  }, {
    label: "Team performance",
    to: "/performance/team"
  }, {
    label: "Apply for leave",
    to: "/leave/apply"
  }],
  hr_admin: [{
    label: "Add employee",
    to: "/employees/new"
  }, {
    label: "Leave approvals",
    to: "/leave/approvals"
  }, {
    label: "Run payroll",
    to: "/payroll/runs"
  }, {
    label: "Company settings",
    to: "/settings/company"
  }]
};
function Dashboard() {
  const user = authStore.useSelector((s) => s.user);
  const tenant = tenantStore.useSelector((s) => s.tenant);
  const {
    employee
  } = useCurrentEmployee();
  const [metrics, setMetrics] = reactExports.useState(null);
  const [approvals, setApprovals] = reactExports.useState([]);
  const [leave, setLeave] = reactExports.useState([]);
  const [events, setEvents] = reactExports.useState([]);
  const [activity, setActivity] = reactExports.useState([]);
  const role = user?.role ?? "employee";
  const isEss = role === "employee";
  reactExports.useEffect(() => {
    if (isEss) return;
    void Promise.all([dashboardApi.getMetrics(), dashboardApi.listPendingApprovals(), dashboardApi.listLeaveToday(), dashboardApi.listUpcomingEvents(), dashboardApi.listRecentActivity()]).then(([m, a, l, e, ac]) => {
      if (m.data) setMetrics(m.data);
      if (a.data) setApprovals(a.data);
      if (l.data) setLeave(l.data);
      if (e.data) setEvents(e.data);
      if (ac.data) setActivity(ac.data);
    });
  }, [isEss]);
  const firstName = user?.fullName.split(" ")[0] ?? "there";
  const dateLabel = (/* @__PURE__ */ new Date()).toLocaleDateString(void 0, {
    weekday: "long",
    day: "numeric",
    month: "long"
  });
  const shortcuts = SHORTCUTS[role] ?? SHORTCUTS.employee;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto space-y-6 sm:space-y-7 pb-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumb, { items: [{
      label: "Overview"
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-neutral-900 via-neutral-900 to-neutral-800 text-white shadow-md relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-24 -right-24 w-64 h-64 rounded-full bg-orange-500/15 blur-3xl pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-white/10 text-neutral-200 border border-white/15 backdrop-blur-md", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3 h-3 text-orange-400" }),
            tenant?.settings.companyName ?? "HR Portal"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-white text-neutral-900 uppercase tracking-wider", children: ROLE_LABEL[role] ?? role })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-[28px] sm:text-[38px] font-extrabold tracking-tight text-white truncate font-sans", children: [
          greeting(),
          ", ",
          firstName,
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-[13px] sm:text-[14px] text-neutral-400 flex items-center gap-1.5 font-medium", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3.5 h-3.5" }),
          dateLabel
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 flex flex-wrap items-center gap-2", children: shortcuts.slice(0, 4).map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: s.to, className: "group inline-flex items-center gap-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 px-3.5 py-2 text-xs font-semibold text-white backdrop-blur-md transition-all duration-200 active:scale-95", children: [
        s.label,
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-3.5 h-3.5 text-neutral-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" })
      ] }, s.to)) })
    ] }),
    employee && /* @__PURE__ */ jsxRuntimeExports.jsx(WorkStatusCard, { employeeId: employee.id, employeeName: `${employee.firstName} ${employee.lastName}` }),
    isEss ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmployeeHomeDashboard, {}) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      metrics ? /* @__PURE__ */ jsxRuntimeExports.jsx(HRMetricGrid, { metrics }) : /* @__PURE__ */ jsxRuntimeExports.jsx(MetricSkeleton, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-5 gap-5 sm:gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-3 space-y-5 sm:space-y-6 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(PendingApprovalsWidget, { initial: approvals, onChange: (next) => {
            setApprovals(next);
            setMetrics((m) => m ? {
              ...m,
              pendingApprovals: next.length,
              pendingApprovalsNote: next.length === 0 ? "All clear" : "Needs your action"
            } : m);
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(RecentActivityFeed, { items: activity })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-5 sm:space-y-6 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TeamCalendarWidget, { items: leave }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(UpcomingEventsWidget, { items: events })
        ] })
      ] })
    ] })
  ] });
}
function MetricSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4", children: Array.from({
    length: 4
  }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[124px] rounded-2xl bg-[#F2F2F0] animate-pulse" }, i)) });
}
export {
  Dashboard as component
};
