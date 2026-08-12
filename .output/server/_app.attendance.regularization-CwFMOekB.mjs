import { j as jsxRuntimeExports } from "./_libs/react.mjs";
import { e as useRouterState, L as Link, O as Outlet } from "./_libs/tanstack__react-router.mjs";
import { B as Breadcrumb } from "./_ssr/Breadcrumb-Bx825HWE.mjs";
import { u as usePermission } from "./_ssr/usePermission-DoLX-EvC.mjs";
import { p as Calendar, A as ArrowUpRight, U as Users, C as Clock, aq as SquareCheckBig } from "./_libs/lucide-react.mjs";

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
import "./_ssr/rbac-BwLVdIYU.mjs";
import "./_ssr/rbac-Ci1w5KuA.mjs";
function RegularizationLayout() {
  const pathname = useRouterState({
    select: (s) => s.location.pathname
  });
  const canApprove = usePermission(["attendance.manage", "attendance.view_team"]);
  const tabs = [{
    label: "My requests",
    to: "/attendance/regularization",
    icon: Clock
  }, ...canApprove ? [{
    label: "Approvals queue",
    to: "/attendance/regularization/approvals",
    icon: SquareCheckBig
  }] : []];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto space-y-6 sm:space-y-7 pb-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumb, { items: [{
      label: "Overview",
      to: "/dashboard"
    }, {
      label: "Attendance",
      to: "/attendance"
    }, {
      label: "Regularization"
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "rounded-3xl border border-[#E5E5E3] bg-white p-6 sm:p-7 shadow-xs relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-[24px] sm:text-[28px] font-extrabold tracking-tight text-[#0A0A0A] font-sans", children: "Regularization" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[13px] sm:text-[14px] text-[#6B6B6B] font-medium", children: "Fix missed clock-ins or clock-outs and manage team regularization requests." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/attendance", className: "group inline-flex items-center gap-1.5 rounded-xl bg-[#FAFAF9] hover:bg-[#F2F2F0] border border-[#E5E5E3] px-3.5 py-2 text-xs font-bold text-[#0A0A0A] transition-all active:scale-95 shadow-2xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3.5 h-3.5 text-[#8E8E8E]" }),
          "My Attendance",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-3.5 h-3.5 text-[#8E8E8E] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#0A0A0A]" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/attendance/team", className: "group inline-flex items-center gap-1.5 rounded-xl bg-[#FAFAF9] hover:bg-[#F2F2F0] border border-[#E5E5E3] px-3.5 py-2 text-xs font-bold text-[#0A0A0A] transition-all active:scale-95 shadow-2xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-3.5 h-3.5 text-[#8E8E8E]" }),
          "Team Attendance",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-3.5 h-3.5 text-[#8E8E8E] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#0A0A0A]" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { "aria-label": "Regularization sections", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center gap-1 p-1 rounded-2xl bg-[#FAFAF9] border border-[#E5E5E3] shadow-xs", children: tabs.map((t) => {
      const active = t.to === "/attendance/regularization" ? pathname === t.to || pathname === t.to + "/" : pathname.startsWith(t.to);
      const Icon = t.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: t.to, className: `inline-flex items-center gap-2 px-4 py-2 text-[13px] font-bold rounded-xl transition-all duration-200 ${active ? "bg-[#0A0A0A] text-white shadow-sm" : "text-[#6B6B6B] hover:text-[#0A0A0A] hover:bg-[#F2F2F0]"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `w-4 h-4 ${active ? "text-orange-400" : "text-[#8E8E8E]"}` }),
        t.label
      ] }, t.to);
    }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {})
  ] });
}
export {
  RegularizationLayout as component
};
