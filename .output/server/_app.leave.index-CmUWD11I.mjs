import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { L as Link } from "./_libs/tanstack__react-router.mjs";
import { P as PageHeader } from "./_ssr/PageHeader-CpfbD_86.mjs";
import { B as Button } from "./_ssr/Button-Crtgy6Xx.mjs";
import { l as listEmployees, i as leaveApi, S as Spinner } from "./_ssr/router-Arl77cRa.mjs";
import { E as EmptyState } from "./_ssr/EmptyState-DCYWhDnT.mjs";
import { s as showToast } from "./_ssr/Toast-DlQQlIf6.mjs";
import { L as LeaveBalanceGrid } from "./_ssr/LeaveBalanceGrid-D2gD6Sdj.mjs";
import { L as LeaveRequestCard } from "./_ssr/LeaveRequestCard-CTy-41Wg.mjs";
import { a as authStore } from "./_ssr/auth-CjdYhZTR.mjs";
import { J as Plus, A as ArrowUpRight, c as CalendarDays } from "./_libs/lucide-react.mjs";

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
import "./_ssr/LeaveBalanceCard-B4yHVgso.mjs";
import "./_ssr/Avatar-B65jymUr.mjs";
import "./_ssr/LeaveStatusBadge-Cuij4VBS.mjs";
import "./_ssr/leave-Cc9GP3pR.mjs";
import "./_ssr/LeaveTypeBadge-CkIIldAd.mjs";
import "./_ssr/rbac-CiXrabhS.mjs";
import "./_ssr/rbac-CHd75bNv.mjs";
function LeaveDashboard() {
  const user = authStore.useSelector((s) => s.user);
  const [loading, setLoading] = reactExports.useState(true);
  const [balances, setBalances] = reactExports.useState([]);
  const [requests, setRequests] = reactExports.useState([]);
  reactExports.useEffect(() => {
    let alive = true;
    void (async () => {
      const emps = await listEmployees();
      const me = emps.data?.find((e) => e.workEmail === user?.email) ?? emps.data?.[0];
      if (!me) {
        if (alive) setLoading(false);
        return;
      }
      const [b, r] = await Promise.all([leaveApi.listBalances(me.id), leaveApi.listRequests({
        employeeId: me.id
      })]);
      if (!alive) return;
      setBalances(b.data ?? []);
      setRequests(r.data ?? []);
      setLoading(false);
    })();
    return () => {
      alive = false;
    };
  }, [user?.email]);
  const cancel = async (id) => {
    const res = await leaveApi.cancelRequest(id);
    if (res.error) return showToast(res.error.message, "error");
    setRequests((prev) => prev.map((r) => r.id === id ? {
      ...r,
      status: "cancelled"
    } : r));
    showToast("Leave request cancelled", "info");
  };
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 28 }) });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-7 pb-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "My leave", description: "Balances, requests and approval progress for the current year.", actions: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/leave/apply", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "primary", className: "gap-1.5 font-bold shadow-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
      "Apply for leave",
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-3.5 h-3.5 text-neutral-400 group-hover:text-white" })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-orange-500" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[11px] font-extrabold uppercase tracking-[0.1em] text-[#8E8E8E]", children: "Leave Balances & Allocations" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] font-bold text-[#8E8E8E]", children: [
          balances.length,
          " Leave Types"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LeaveBalanceGrid, { balances })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-[#E5E5E3] bg-white overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.03)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4 border-b border-[#F2F2F0] flex items-center justify-between bg-[#FAFAF9]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "w-4 h-4 text-orange-500" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[15px] font-bold text-[#0A0A0A] tracking-tight", children: "My Requests" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-medium text-[#8E8E8E]", children: "Recent submissions and status" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/leave/requests", className: "inline-flex items-center gap-1 text-xs font-bold text-[#0A0A0A] hover:text-orange-600 transition-colors group", children: [
          "View all",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })
        ] })
      ] }),
      requests.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No leave requests yet.", subtitle: "Your submitted leave requests and approval status will appear here." }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5 space-y-4 bg-[#FAFAF9]/30", children: requests.slice(0, 5).map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(LeaveRequestCard, { request: r, onCancel: r.status === "pending" ? () => void cancel(r.id) : void 0 }, r.id)) })
    ] })
  ] });
}
export {
  LeaveDashboard as component
};
