import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { L as Link } from "./_libs/tanstack__react-router.mjs";
import { l as listEmployees, y as performanceApi, z as objectiveDisplayProgress, S as Spinner } from "./_ssr/router-CPP24NZe.mjs";
import { S as StatCard } from "./_ssr/StatCard-D4dqMa3u.mjs";
import { E as EmptyState } from "./_ssr/EmptyState-Cs_2WXRJ.mjs";
import { B as Breadcrumb } from "./_ssr/Breadcrumb-Bx825HWE.mjs";
import { G as GoalStatusBadge } from "./_ssr/GoalStatusBadge-pT1aYIzn.mjs";
import { G as GoalProgressRing } from "./_ssr/GoalProgressRing-C5SFRSti.mjs";
import { R as ReviewCycleBadge } from "./_ssr/ReviewCycleBadge-DEW3hYNX.mjs";
import { a as authStore } from "./_ssr/auth-BAvMo5G5.mjs";
import { d as Target, A as ArrowUpRight, V as FileText, i as ChartColumn, a2 as TrendingUp, C as Clock, a3 as Award, q as ShieldCheck } from "./_libs/lucide-react.mjs";
import { R as ResponsiveContainer, B as BarChart, X as XAxis, Y as YAxis, T as Tooltip, a as Bar, C as Cell } from "./_libs/recharts.mjs";

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
import "./_ssr/Badge-DOnZHL7Z.mjs";
import "./_ssr/performance-Bre1KeEI.mjs";
import "./_ssr/rbac-BwLVdIYU.mjs";
import "./_ssr/rbac-Ci1w5KuA.mjs";
import "./_libs/lodash.mjs";
import "./_libs/tiny-invariant.mjs";
import "./_libs/react-is.mjs";
import "./_libs/d3-shape.mjs";
import "./_libs/d3-path.mjs";
import "./_libs/react-smooth.mjs";
import "./_libs/prop-types.mjs";
import "./_libs/fast-equals.mjs";
import "./_libs/victory-vendor.mjs";
import "./_libs/d3-scale.mjs";
import "./_libs/internmap.mjs";
import "./_libs/d3-array.mjs";
import "./_libs/d3-time-format.mjs";
import "./_libs/d3-time.mjs";
import "./_libs/d3-interpolate.mjs";
import "./_libs/d3-color.mjs";
import "./_libs/d3-format.mjs";
import "./_libs/recharts-scale.mjs";
import "./_libs/decimal.js-light.mjs";
import "./_libs/eventemitter3.mjs";
function PerformanceDashboard() {
  const user = authStore.useSelector((s) => s.user);
  const [loading, setLoading] = reactExports.useState(true);
  const [me, setMe] = reactExports.useState(null);
  const [cycles, setCycles] = reactExports.useState([]);
  const [objectives, setObjectives] = reactExports.useState([]);
  const [reviews, setReviews] = reactExports.useState([]);
  const [goalFilter, setGoalFilter] = reactExports.useState("all");
  reactExports.useEffect(() => {
    let alive = true;
    void (async () => {
      const emps = await listEmployees();
      const meEmp = emps.data?.find((e) => e.workEmail === user?.email) ?? emps.data?.[0] ?? null;
      if (!meEmp) {
        if (alive) setLoading(false);
        return;
      }
      const [c, o, r] = await Promise.all([performanceApi.listCycles(), performanceApi.listObjectives({
        ownerId: meEmp.id
      }), performanceApi.listReviews({
        employeeId: meEmp.id
      })]);
      if (!alive) return;
      setMe(meEmp);
      setCycles(c.data ?? []);
      setObjectives(o.data ?? []);
      setReviews(r.data ?? []);
      setLoading(false);
    })();
    return () => {
      alive = false;
    };
  }, [user?.email]);
  const activeCycle = reactExports.useMemo(() => cycles.find((c) => c.status === "active" || c.status === "review_in_progress"), [cycles]);
  const avgProgress = reactExports.useMemo(() => objectives.length ? Math.round(objectives.reduce((s, o) => s + objectiveDisplayProgress(o), 0) / objectives.length) : 0, [objectives]);
  const pendingReviews = reactExports.useMemo(() => reviews.filter((r) => ["not_started", "self_pending", "manager_pending", "peer_pending"].includes(r.status)), [reviews]);
  const sharedReviews = reactExports.useMemo(() => reviews.filter((r) => r.isSharedWithEmployee).slice(0, 3), [reviews]);
  const filteredObjectives = reactExports.useMemo(() => {
    if (goalFilter === "all") return objectives;
    return objectives.filter((o) => o.status === goalFilter);
  }, [objectives, goalFilter]);
  const chartData = reactExports.useMemo(() => {
    return objectives.slice(0, 6).map((o) => ({
      name: o.title.length > 18 ? `${o.title.substring(0, 18)}...` : o.title,
      progress: objectiveDisplayProgress(o)
    }));
  }, [objectives]);
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center items-center py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 32 }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto space-y-6 sm:space-y-7 pb-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumb, { items: [{
      label: "Overview",
      to: "/dashboard"
    }, {
      label: "Performance Hub"
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "rounded-3xl border border-[#E5E5E3] bg-white p-6 sm:p-7 shadow-xs relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-[24px] sm:text-[28px] font-extrabold tracking-tight text-[#0A0A0A] font-sans", children: "Performance Hub" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[13px] sm:text-[14px] text-[#6B6B6B] font-medium", children: "Track active review cycles, OKRs, goal progress, and continuous feedback." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/performance/goals", className: "group inline-flex items-center gap-1.5 rounded-xl bg-[#FAFAF9] hover:bg-[#F2F2F0] border border-[#E5E5E3] px-3.5 py-2 text-xs font-bold text-[#0A0A0A] transition-all active:scale-95 shadow-2xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-3.5 h-3.5 text-[#8E8E8E]" }),
          "My Goals",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-3.5 h-3.5 text-[#8E8E8E] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#0A0A0A]" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/performance/reviews", className: "group inline-flex items-center gap-1.5 rounded-xl bg-[#FAFAF9] hover:bg-[#F2F2F0] border border-[#E5E5E3] px-3.5 py-2 text-xs font-bold text-[#0A0A0A] transition-all active:scale-95 shadow-2xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-3.5 h-3.5 text-[#8E8E8E]" }),
          "Reviews",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-3.5 h-3.5 text-[#8E8E8E] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#0A0A0A]" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/performance/calibration", className: "group inline-flex items-center gap-1.5 rounded-xl bg-[#FAFAF9] hover:bg-[#F2F2F0] border border-[#E5E5E3] px-3.5 py-2 text-xs font-bold text-[#0A0A0A] transition-all active:scale-95 shadow-2xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "w-3.5 h-3.5 text-[#8E8E8E]" }),
          "Team Calibration",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-3.5 h-3.5 text-[#8E8E8E] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#0A0A0A]" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Active Objectives", value: String(objectives.length), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-4 h-4 text-orange-500" }), trend: "OKRs in progress", trendDir: "up" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Avg. Goal Progress", value: `${avgProgress}%`, icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-4 h-4 text-emerald-600" }), trend: avgProgress >= 70 ? "Target on track" : "Pacing needed", trendDir: avgProgress >= 70 ? "up" : "neutral", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 w-full bg-[#E5E5E3] h-1.5 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-emerald-500 rounded-full transition-all duration-300", style: {
        width: `${avgProgress}%`
      } }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Pending Review Tasks", value: String(pendingReviews.length), variant: pendingReviews.length > 0 ? "dark" : "default", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4" }), trend: pendingReviews.length > 0 ? "Action required" : "All completed", trendDir: pendingReviews.length > 0 ? "down" : "up", actionHint: true, children: pendingReviews.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block w-2 h-2 rounded-full bg-orange-500 animate-ping" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-medium text-neutral-300", children: "Requires self or manager review" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Active Cycle", value: activeCycle ? "In Progress" : "None", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-4 h-4 text-amber-500" }), trend: activeCycle ? activeCycle.name : "No active cycle", trendDir: "neutral" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-[#E5E5E3] bg-white p-6 sm:p-7 shadow-xs relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 mb-4 border-b border-[#F2F2F0]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[20px] sm:text-[22px] font-extrabold text-[#0A0A0A] tracking-tight", children: activeCycle ? activeCycle.name : "No Review Cycle Running Currently" }),
          activeCycle && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-[13px] text-[#6B6B6B] font-medium", children: [
            "Self-review deadline:",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-extrabold text-[#0A0A0A] tabular-nums", children: new Date(activeCycle.selfReviewDeadline).toLocaleDateString(void 0, {
              weekday: "short",
              month: "short",
              day: "numeric",
              year: "numeric"
            }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          activeCycle && /* @__PURE__ */ jsxRuntimeExports.jsx(ReviewCycleBadge, { status: activeCycle.status }),
          me && /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/performance/reviews", className: "group inline-flex items-center gap-1 text-xs font-bold text-white bg-[#0A0A0A] hover:bg-neutral-800 px-4 py-2 rounded-xl transition-all shadow-2xs", children: [
            "Go to reviews",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })
          ] })
        ] })
      ] }),
      activeCycle && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3 text-[12px] pt-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(PhaseStep, { label: "1. Self Review", active: ["active", "review_in_progress"].includes(activeCycle.status) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PhaseStep, { label: "2. Manager Review", active: ["review_in_progress", "calibration"].includes(activeCycle.status) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PhaseStep, { label: "3. Calibration", active: ["calibration", "shared"].includes(activeCycle.status) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PhaseStep, { label: "4. Results Shared", active: activeCycle.status === "completed" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-5 gap-5 sm:gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-3 rounded-3xl border border-[#E5E5E3] bg-white p-6 sm:p-7 shadow-xs space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#F2F2F0]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-4 h-4 text-orange-500" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[18px] sm:text-[20px] font-extrabold text-[#0A0A0A] tracking-tight", children: "My Goals & OKR Breakdown" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-[#6B6B6B]", children: "Progress summary for the active evaluation period" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/performance/goals", className: "group inline-flex items-center gap-1 text-xs font-bold text-[#0A0A0A] hover:text-orange-600 transition-colors", children: [
            "View all goals",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })
          ] })
        ] }),
        chartData.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-2xl bg-[#FAFAF9] border border-[#E5E5E3]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-extrabold uppercase tracking-wider text-[#8E8E8E] mb-3", children: "Completion Distribution (%)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-44 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { data: chartData, margin: {
            top: 10,
            right: 10,
            left: -20,
            bottom: 0
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "name", tick: {
              fontSize: 10,
              fill: "#8E8E8E"
            }, axisLine: false, tickLine: false }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { domain: [0, 100], tick: {
              fontSize: 10,
              fill: "#8E8E8E"
            }, axisLine: false, tickLine: false }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: {
              backgroundColor: "#111111",
              borderRadius: "12px",
              border: "none",
              color: "#FFF",
              fontSize: "12px"
            }, formatter: (val) => [`${val}%`, "Progress"] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "progress", radius: [6, 6, 0, 0], children: chartData.map((entry, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: entry.progress >= 80 ? "#10B981" : entry.progress >= 40 ? "#F97316" : "#F59E0B" }, `cell-${index}`)) })
          ] }) }) })
        ] }),
        filteredObjectives.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No goals found", subtitle: "Create your first objective to start tracking progress." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-[#F2F2F0]", children: filteredObjectives.slice(0, 5).map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-3.5 flex items-center justify-between gap-4 group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3.5 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(GoalProgressRing, { value: objectiveDisplayProgress(o), size: 38 }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-bold text-[#0A0A0A] truncate group-hover:text-orange-600 transition-colors", children: o.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-[#8E8E8E] truncate", children: [
                o.keyResults?.length ?? 0,
                " Key Results · Target: ",
                o.period || "Q3"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(GoalStatusBadge, { status: o.status })
        ] }, o.id)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-[#111111] text-white p-6 sm:p-7 border border-[#222222] shadow-xl relative overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-16 -right-16 w-48 h-48 rounded-full bg-orange-500/10 blur-3xl pointer-events-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex items-center justify-between pb-4 mb-4 border-b border-[#262626]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[16px] sm:text-[18px] font-bold text-white tracking-tight", children: "Recent Feedback & Score" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-extrabold uppercase tracking-wider text-neutral-400 bg-white/10 px-2 py-0.5 rounded-full border border-white/10", children: "Shared" })
          ] }),
          sharedReviews.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 py-6 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-neutral-400 font-medium", children: "No shared review feedback yet." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-neutral-500 mt-1", children: "Calibrated ratings appear here once HR releases results." })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 space-y-3", children: sharedReviews.map((r) => {
            const rating = r.calibratedRating ?? r.managerReview?.overallRating ?? 0;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[13px]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-neutral-300", children: "Overall Performance Score" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[18px] font-extrabold text-white tabular-nums", children: rating }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] text-neutral-400", children: "/ 5" })
                ] })
              ] }),
              r.managerReview?.summary && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[12px] text-neutral-400 italic line-clamp-2", children: [
                '"',
                r.managerReview.summary,
                '"'
              ] })
            ] }, r.id);
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShortcutTile, { title: "My Goals & OKRs", subtitle: "Update Key Results", to: "/performance/goals", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-4 h-4 text-orange-500" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShortcutTile, { title: "Review Tasks", subtitle: "Pending Workflows", to: "/performance/reviews", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-4 h-4 text-emerald-500" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShortcutTile, { title: "Calibration", subtitle: "Team Ratings", to: "/performance/calibration", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "w-4 h-4 text-amber-500" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShortcutTile, { title: "Admin Tools", subtitle: "Settings & Templates", to: "/performance/admin", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-4 h-4 text-cyan-500" }) })
        ] })
      ] })
    ] })
  ] });
}
function PhaseStep({
  label,
  active
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-3 rounded-2xl border flex items-center gap-2 transition-all ${active ? "bg-[#0A0A0A] text-white border-[#0A0A0A]" : "bg-[#FAFAF9] text-[#8E8E8E] border-[#E5E5E3]"}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `w-2 h-2 rounded-full ${active ? "bg-orange-500 animate-pulse" : "bg-[#D1D5DB]"}` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-[11px] truncate", children: label })
  ] });
}
function ShortcutTile({
  title,
  subtitle,
  to,
  icon
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to, className: "group p-4 rounded-2xl border border-[#E5E5E3] bg-white hover:bg-[#FAFAF9] hover:border-[#A3A3A3] transition-all duration-200 shadow-2xs flex flex-col justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 rounded-xl bg-[#FAFAF9] border border-[#E5E5E3] group-hover:scale-105 transition-transform", children: icon }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-4 h-4 text-[#8E8E8E] group-hover:text-[#0A0A0A] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-extrabold text-[#0A0A0A] tracking-tight", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-[#8E8E8E] font-medium", children: subtitle })
    ] })
  ] });
}
export {
  PerformanceDashboard as component
};
