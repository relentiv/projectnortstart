import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { L as Link } from "./_libs/tanstack__react-router.mjs";
import { P as PageHeader } from "./_ssr/PageHeader-CpfbD_86.mjs";
import { l as listEmployees, c as cn, S as Spinner, i as leaveApi } from "./_ssr/router-LFebWAoY.mjs";
import { B as Button } from "./_ssr/Button-B92Yl16p.mjs";
import { T as Textarea } from "./_ssr/Textarea-DmSlcYuH.mjs";
import { C as Card } from "./_ssr/Card-C9YFlUub.mjs";
import { M as Modal } from "./_ssr/Modal-DIFPhA7e.mjs";
import { E as EmptyState } from "./_ssr/EmptyState-C_t8YrDr.mjs";
import { S as SlideOver } from "./_ssr/SlideOver-DGRd3Ojy.mjs";
import { s as showToast } from "./_ssr/Toast-n7pN7q8Q.mjs";
import { L as LeaveRequestCard } from "./_ssr/LeaveRequestCard-CyFhgni2.mjs";
import { a as authStore } from "./_ssr/auth-Dq95Bc2W.mjs";

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
import "./_ssr/Avatar-BQ6VYrPZ.mjs";
import "./_ssr/LeaveStatusBadge-D8rrrJ3p.mjs";
import "./_ssr/Badge-BQrIKnVV.mjs";
import "./_ssr/leave-Cc9GP3pR.mjs";
import "./_ssr/LeaveTypeBadge-CbvvgH9D.mjs";
import "./_ssr/rbac-B_cCMzV8.mjs";
import "./_ssr/rbac-B1d7raBj.mjs";
function fmt(d) {
  return d.toLocaleString("en-GB", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" });
}
function LeaveTimeline({ request }) {
  const steps = [
    { key: "applied", label: "Applied", meta: fmt(request.appliedAt), state: "done", comment: request.reason },
    ...request.approvals.map((a) => ({
      key: a.id,
      label: `${a.level === "manager" ? "Manager" : "HR Admin"} ${a.action === "approved" ? "approved" : "rejected"}`,
      meta: `${a.approverName} · ${fmt(a.actionAt)}`,
      state: a.action === "approved" ? "done" : "rejected",
      comment: a.comment
    }))
  ];
  if (request.status === "pending") {
    steps.push({
      key: "awaiting",
      label: request.twoLevel && request.approvals.length === 1 ? "Awaiting HR Admin" : "Awaiting manager",
      meta: "Pending",
      state: "pending",
      comment: void 0
    });
  }
  if (request.status === "cancelled") {
    steps.push({ key: "cancelled", label: "Cancelled by employee", meta: request.cancelledAt ? fmt(request.cancelledAt) : "", state: "rejected", comment: request.cancelReason });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "relative pl-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-[5px] top-2 bottom-2 w-px bg-[#E5E5E3]", "aria-hidden": true }),
    steps.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "relative pb-4 last:pb-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          "aria-hidden": true,
          className: cn(
            "absolute -left-5 top-1.5 h-[11px] w-[11px] rounded-full border-2 border-white",
            s.state === "done" && "bg-[#16A34A]",
            s.state === "rejected" && "bg-[#DC2626]",
            s.state === "pending" && "bg-[#F59E0B]"
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-[#0A0A0A]", children: s.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-[#6B6B6B]", children: s.meta }),
      s.comment && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[12px] text-[#4B4B4B] bg-[#F9F9F8] rounded-sm px-2.5 py-1.5", children: s.comment })
    ] }, s.key))
  ] });
}
const FILTERS = [{
  id: "all",
  label: "All"
}, {
  id: "pending",
  label: "Pending",
  statuses: ["pending"]
}, {
  id: "approved",
  label: "Approved",
  statuses: ["approved", "auto_approved"]
}, {
  id: "rejected",
  label: "Rejected",
  statuses: ["rejected"]
}, {
  id: "cancelled",
  label: "Cancelled",
  statuses: ["cancelled"]
}];
function MyRequestsPage() {
  const user = authStore.useSelector((s) => s.user);
  const [loading, setLoading] = reactExports.useState(true);
  const [employeeId, setEmployeeId] = reactExports.useState(null);
  const [requests, setRequests] = reactExports.useState([]);
  const [filter, setFilter] = reactExports.useState("all");
  const [selected, setSelected] = reactExports.useState(null);
  const [pendingCancel, setPendingCancel] = reactExports.useState(null);
  const [cancelReason, setCancelReason] = reactExports.useState("");
  const [cancelling, setCancelling] = reactExports.useState(false);
  const load = (empId) => {
    setLoading(true);
    void leaveApi.listRequests({
      employeeId: empId
    }).then((r) => {
      setRequests(r.data ?? []);
      setLoading(false);
    });
  };
  reactExports.useEffect(() => {
    let alive = true;
    void listEmployees().then((emps) => {
      const me = emps.data?.find((e) => e.workEmail === user?.email) ?? emps.data?.[0];
      if (!me || !alive) return;
      setEmployeeId(me.id);
      load(me.id);
    });
    return () => {
      alive = false;
    };
  }, [user?.email]);
  const active = FILTERS.find((f) => f.id === filter);
  const filtered = active?.statuses ? requests.filter((r) => active.statuses.includes(r.status)) : requests;
  const doCancel = async () => {
    if (!pendingCancel) return;
    setCancelling(true);
    const res = await leaveApi.cancelRequest(pendingCancel.id, cancelReason.trim() || void 0);
    setCancelling(false);
    if (res.error) {
      showToast(res.error.message, "error");
      return;
    }
    showToast("Leave request cancelled.", "info");
    setPendingCancel(null);
    setCancelReason("");
    setSelected(null);
    if (employeeId) load(employeeId);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "My leave requests", description: "Track the status of your leave requests, or cancel a pending one.", actions: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/leave/apply", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", children: "Apply for leave" }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 border-b border-[#E5E5E3] pb-4", children: FILTERS.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setFilter(f.id), className: cn("px-3 py-1.5 rounded-full text-[13px] font-medium border transition-colors", filter === f.id ? "border-[var(--tenant-primary)] bg-[color-mix(in_srgb,var(--tenant-primary)_10%,transparent)] text-[var(--tenant-primary)]" : "border-[#E5E5E3] text-[#6B6B6B] hover:bg-[#F2F2F0]"), children: f.label }, f.id)) }),
    loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 28 }) }) : filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No requests found", subtitle: "Try a different filter, or apply for leave to get started." }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: filtered.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(LeaveRequestCard, { request: r, onOpen: () => setSelected(r), onCancel: r.status === "pending" ? () => setPendingCancel(r) : void 0 }, r.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SlideOver, { open: !!selected, onClose: () => setSelected(null), title: "Request details", description: selected ? `${selected.leaveType.name} · ${selected.workingDays} working day(s)` : void 0, footer: selected?.status === "pending" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: () => setPendingCancel(selected), children: "Cancel request" }) : void 0, children: selected && /* @__PURE__ */ jsxRuntimeExports.jsx(LeaveTimeline, { request: selected }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal, { open: !!pendingCancel, onClose: () => {
      if (!cancelling) {
        setPendingCancel(null);
        setCancelReason("");
      }
    }, title: "Cancel this leave request?", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] text-[#6B6B6B] leading-relaxed", children: "This cannot be undone. You may optionally add a reason." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { label: "Reason (optional)", value: cancelReason, onChange: (e) => setCancelReason(e.target.value), placeholder: "Why are you cancelling this request?" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center justify-end gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: () => {
          setPendingCancel(null);
          setCancelReason("");
        }, disabled: cancelling, children: "Keep request" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "danger", onClick: doCancel, loading: cancelling, children: "Cancel request" })
      ] })
    ] })
  ] });
}
export {
  MyRequestsPage as component
};
