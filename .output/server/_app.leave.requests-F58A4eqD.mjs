import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { L as Link } from "./_libs/tanstack__react-router.mjs";
import { P as PageHeader } from "./_ssr/PageHeader-CpfbD_86.mjs";
import { l as listEmployees, c as cn, S as Spinner, i as leaveApi } from "./_ssr/router-Arl77cRa.mjs";
import { B as Button } from "./_ssr/Button-Crtgy6Xx.mjs";
import { T as Textarea } from "./_ssr/Textarea-DXR3KTuM.mjs";
import { M as Modal } from "./_ssr/Modal-BWxmma2i.mjs";
import { E as EmptyState } from "./_ssr/EmptyState-DCYWhDnT.mjs";
import { S as SlideOver } from "./_ssr/SlideOver-DXNNm8Us.mjs";
import { s as showToast } from "./_ssr/Toast-DlQQlIf6.mjs";
import { L as LeaveRequestCard } from "./_ssr/LeaveRequestCard-CTy-41Wg.mjs";
import { a as authStore } from "./_ssr/auth-CjdYhZTR.mjs";
import { J as Plus, A as ArrowUpRight, ae as Funnel, x as CircleCheck, af as CircleX, C as Clock } from "./_libs/lucide-react.mjs";

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
import "./_ssr/Avatar-B65jymUr.mjs";
import "./_ssr/LeaveStatusBadge-Cuij4VBS.mjs";
import "./_ssr/leave-Cc9GP3pR.mjs";
import "./_ssr/LeaveTypeBadge-CkIIldAd.mjs";
import "./_ssr/rbac-CiXrabhS.mjs";
import "./_ssr/rbac-CHd75bNv.mjs";
function fmt(d) {
  return d.toLocaleString("en-GB", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" });
}
function LeaveTimeline({ request }) {
  const steps = [
    { key: "applied", label: "Request Submitted", meta: fmt(request.appliedAt), state: "done", comment: request.reason },
    ...request.approvals.map((a) => ({
      key: a.id,
      label: `${a.level === "manager" ? "Manager" : "HR Admin"} ${a.action === "approved" ? "Approved" : "Rejected"}`,
      meta: `${a.approverName} · ${fmt(a.actionAt)}`,
      state: a.action === "approved" ? "done" : "rejected",
      comment: a.comment
    }))
  ];
  if (request.status === "pending") {
    steps.push({
      key: "awaiting",
      label: request.twoLevel && request.approvals.length === 1 ? "Awaiting HR Admin Approval" : "Awaiting Manager Approval",
      meta: "Pending Decision",
      state: "pending",
      comment: void 0
    });
  }
  if (request.status === "cancelled") {
    steps.push({ key: "cancelled", label: "Cancelled by Employee", meta: request.cancelledAt ? fmt(request.cancelledAt) : "", state: "rejected", comment: request.cancelReason });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-[#E5E5E3] bg-[#FAFAF9] p-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[12px] font-extrabold uppercase tracking-[0.1em] text-[#8E8E8E] mb-4", children: "Approval Progress & Timeline" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "relative pl-6 space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-[11px] top-3 bottom-3 w-0.5 bg-[#E5E5E3]", "aria-hidden": true }),
      steps.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "relative flex items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "span",
          {
            className: cn(
              "absolute -left-6 top-0.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white ring-4 ring-[#FAFAF9] text-white shrink-0",
              s.state === "done" && "bg-emerald-600",
              s.state === "rejected" && "bg-rose-600",
              s.state === "pending" && "bg-amber-500 animate-pulse"
            ),
            children: [
              s.state === "done" && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5" }),
              s.state === "rejected" && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-3.5 h-3.5" }),
              s.state === "pending" && /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3.5 h-3.5" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-bold text-[#0A0A0A] tracking-tight", children: s.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-semibold text-[#8E8E8E]", children: s.meta })
          ] }),
          s.comment && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 p-3 rounded-xl bg-white border border-[#E5E5E3] text-[12px] text-[#4B4B4B] shadow-2xs leading-relaxed", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-[#0A0A0A]", children: "Note: " }),
            s.comment
          ] })
        ] })
      ] }, s.key))
    ] })
  ] });
}
const FILTERS = [{
  id: "all",
  label: "All Requests"
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
  const getCount = (f) => {
    if (!f.statuses) return requests.length;
    return requests.filter((r) => f.statuses.includes(r.status)).length;
  };
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-7 pb-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "My leave requests", description: "Track the status of your leave requests, or cancel a pending one.", actions: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/leave/apply", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "primary", className: "gap-1.5 font-bold shadow-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
      "Apply for leave",
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-3.5 h-3.5 text-neutral-400 group-hover:text-white" })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-[#FAFAF9] border border-[#E5E5E3]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#8E8E8E] flex items-center gap-1.5 shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { className: "w-3.5 h-3.5 text-orange-500" }),
        "Filter:"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center gap-1.5 flex-1", children: FILTERS.map((f) => {
        const count = getCount(f);
        const isSelected = filter === f.id;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setFilter(f.id), className: cn("inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[12px] font-extrabold transition-all duration-200 active:scale-95", isSelected ? "bg-[#0A0A0A] text-white shadow-2xs" : "bg-white hover:bg-[#F2F2F0] text-[#6B6B6B] border border-[#E5E5E3]"), children: [
          f.label,
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("px-1.5 py-0.2 rounded-md text-[10px] tabular-nums font-bold", isSelected ? "bg-white/20 text-white" : "bg-[#F4F4F2] text-[#8E8E8E]"), children: count })
        ] }, f.id);
      }) })
    ] }),
    loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 28 }) }) : filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-[#E5E5E3] bg-white p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No requests found", subtitle: "Try a different filter, or apply for leave to get started." }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: filtered.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(LeaveRequestCard, { request: r, onOpen: () => setSelected(r), onCancel: r.status === "pending" ? () => setPendingCancel(r) : void 0 }, r.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SlideOver, { open: !!selected, onClose: () => setSelected(null), title: "Request Details", description: selected ? `${selected.leaveType.name} · ${selected.workingDays} working day(s)` : void 0, footer: selected?.status === "pending" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", className: "rounded-xl font-bold", onClick: () => setPendingCancel(selected), children: "Cancel request" }) : void 0, children: selected && /* @__PURE__ */ jsxRuntimeExports.jsx(LeaveTimeline, { request: selected }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal, { open: !!pendingCancel, onClose: () => {
      if (!cancelling) {
        setPendingCancel(null);
        setCancelReason("");
      }
    }, title: "Cancel this leave request?", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] text-[#6B6B6B] leading-relaxed", children: "This cannot be undone. You may optionally add a reason for cancellation." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { label: "Reason (optional)", value: cancelReason, onChange: (e) => setCancelReason(e.target.value), placeholder: "Why are you cancelling this request?" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center justify-end gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", className: "rounded-xl font-bold", onClick: () => {
          setPendingCancel(null);
          setCancelReason("");
        }, disabled: cancelling, children: "Keep request" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "danger", className: "rounded-xl font-bold", onClick: doCancel, loading: cancelling, children: "Cancel request" })
      ] })
    ] })
  ] });
}
export {
  MyRequestsPage as component
};
