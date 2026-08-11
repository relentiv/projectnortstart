import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { P as PageHeader } from "./_ssr/PageHeader-CpfbD_86.mjs";
import { C as Card } from "./_ssr/Card-C9YFlUub.mjs";
import { l as listEmployees, i as leaveApi, S as Spinner } from "./_ssr/router-LFebWAoY.mjs";
import { E as EmptyState } from "./_ssr/EmptyState-C_t8YrDr.mjs";
import { s as showToast } from "./_ssr/Toast-n7pN7q8Q.mjs";
import { L as LeaveBalanceGrid } from "./_ssr/LeaveBalanceGrid-Dq7ZncoQ.mjs";
import { L as LeaveRequestCard } from "./_ssr/LeaveRequestCard-CyFhgni2.mjs";
import { a as authStore } from "./_ssr/auth-Dq95Bc2W.mjs";

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
import "./_ssr/LeaveBalanceCard-j6CT0g6w.mjs";
import "./_ssr/Button-B92Yl16p.mjs";
import "./_ssr/Avatar-BQ6VYrPZ.mjs";
import "./_ssr/LeaveStatusBadge-D8rrrJ3p.mjs";
import "./_ssr/Badge-BQrIKnVV.mjs";
import "./_ssr/leave-Cc9GP3pR.mjs";
import "./_ssr/LeaveTypeBadge-CbvvgH9D.mjs";
import "./_ssr/rbac-B_cCMzV8.mjs";
import "./_ssr/rbac-B1d7raBj.mjs";
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "My leave", description: "Balances, requests and approval progress for the current year." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LeaveBalanceGrid, { balances }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { padded: false, className: "p-0 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4 border-b border-[#E5E5E3]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[15px] font-semibold", children: "My requests" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-[#6B6B6B] mt-0.5", children: "Most recent first" })
      ] }),
      requests.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No leave requests yet.", subtitle: "Your submitted requests will appear here." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 space-y-3", children: requests.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(LeaveRequestCard, { request: r, onCancel: r.status === "pending" ? () => void cancel(r.id) : void 0 }, r.id)) })
    ] })
  ] });
}
export {
  LeaveDashboard as component
};
