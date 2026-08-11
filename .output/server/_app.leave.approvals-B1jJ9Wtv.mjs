import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { P as PageHeader } from "./_ssr/PageHeader-CpfbD_86.mjs";
import { B as Button } from "./_ssr/Button-B92Yl16p.mjs";
import { T as Textarea } from "./_ssr/Textarea-DmSlcYuH.mjs";
import { C as Checkbox } from "./_ssr/Checkbox-CgTT_66V.mjs";
import { C as Card } from "./_ssr/Card-C9YFlUub.mjs";
import { M as Modal } from "./_ssr/Modal-DIFPhA7e.mjs";
import { l as listEmployees, T as overlaps, S as Spinner, i as leaveApi, K as formatRange } from "./_ssr/router-LFebWAoY.mjs";
import { A as Alert } from "./_ssr/Alert-DctqS4QO.mjs";
import { E as EmptyState } from "./_ssr/EmptyState-C_t8YrDr.mjs";
import { D as DataTable } from "./_ssr/DataTable-QZdOUOks.mjs";
import { s as showToast } from "./_ssr/Toast-n7pN7q8Q.mjs";
import { L as LeaveTypeBadge } from "./_ssr/LeaveTypeBadge-CbvvgH9D.mjs";
import { L as LeaveStatusBadge } from "./_ssr/LeaveStatusBadge-D8rrrJ3p.mjs";
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
import "./_ssr/Badge-BQrIKnVV.mjs";
import "./_ssr/leave-Cc9GP3pR.mjs";
import "./_ssr/rbac-B_cCMzV8.mjs";
import "./_ssr/rbac-B1d7raBj.mjs";
function ApprovalsPage() {
  const user = authStore.useSelector((s) => s.user);
  const [loading, setLoading] = reactExports.useState(true);
  const [me, setMe] = reactExports.useState(null);
  const [requests, setRequests] = reactExports.useState([]);
  const [selection, setSelection] = reactExports.useState(/* @__PURE__ */ new Set());
  const [rejecting, setRejecting] = reactExports.useState(null);
  const [bulkRejecting, setBulkRejecting] = reactExports.useState(false);
  const [comment, setComment] = reactExports.useState("");
  const [busy, setBusy] = reactExports.useState(false);
  const load = (manager) => {
    setLoading(true);
    void leaveApi.listRequests({
      managerId: manager.id,
      statuses: ["pending"]
    }).then((r) => {
      setRequests(r.data ?? []);
      setSelection(/* @__PURE__ */ new Set());
      setLoading(false);
    });
  };
  reactExports.useEffect(() => {
    let alive = true;
    void listEmployees().then((emps) => {
      const found = emps.data?.find((e) => e.workEmail === user?.email) ?? emps.data?.[0];
      if (!found || !alive) return;
      setMe(found);
      load(found);
    });
    return () => {
      alive = false;
    };
  }, [user?.email]);
  const conflicts = reactExports.useMemo(() => {
    const map = /* @__PURE__ */ new Map();
    for (const r of requests) {
      const overlapping = requests.filter((o) => o.id !== r.id && overlaps(r.startDate, r.endDate, o.startDate, o.endDate));
      if (overlapping.length) map.set(r.id, overlapping);
    }
    return map;
  }, [requests]);
  const approve = async (r) => {
    if (!me) return;
    const level = r.twoLevel && r.approvals.some((a) => a.level === "manager" && a.action === "approved") ? "hr_admin" : "manager";
    const res = await leaveApi.actOnRequest({
      id: r.id,
      level,
      action: "approved",
      approverId: me.id,
      approverName: `${me.firstName} ${me.lastName}`
    });
    if (res.error) {
      showToast(res.error.message, "error");
      return;
    }
    showToast("Request approved.", "success");
    load(me);
  };
  const doReject = async () => {
    if (!rejecting || !me) return;
    if (!comment.trim()) return;
    setBusy(true);
    const res = await leaveApi.actOnRequest({
      id: rejecting.id,
      level: "manager",
      action: "rejected",
      approverId: me.id,
      approverName: `${me.firstName} ${me.lastName}`,
      comment: comment.trim()
    });
    setBusy(false);
    if (res.error) {
      showToast(res.error.message, "error");
      return;
    }
    showToast("Request rejected.", "info");
    setRejecting(null);
    setComment("");
    load(me);
  };
  const doBulkApprove = async () => {
    if (!me || selection.size === 0) return;
    setBusy(true);
    await leaveApi.bulkAct(Array.from(selection), {
      level: "manager",
      action: "approved",
      approverId: me.id,
      approverName: `${me.firstName} ${me.lastName}`
    });
    setBusy(false);
    showToast(`${selection.size} request(s) approved.`, "success");
    load(me);
  };
  const doBulkReject = async () => {
    if (!me || selection.size === 0 || !comment.trim()) return;
    setBusy(true);
    await leaveApi.bulkAct(Array.from(selection), {
      level: "manager",
      action: "rejected",
      approverId: me.id,
      approverName: `${me.firstName} ${me.lastName}`,
      comment: comment.trim()
    });
    setBusy(false);
    showToast(`${selection.size} request(s) rejected.`, "info");
    setBulkRejecting(false);
    setComment("");
    load(me);
  };
  const toggleAll = () => setSelection(selection.size === requests.length ? /* @__PURE__ */ new Set() : new Set(requests.map((r) => r.id)));
  const toggleOne = (id) => setSelection((prev) => {
    const next = new Set(prev);
    next.has(id) ? next.delete(id) : next.add(id);
    return next;
  });
  const columns = [{
    key: "select",
    label: "",
    className: "w-10",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { checked: selection.has(r.id), onChange: () => toggleOne(r.id), "aria-label": `Select ${r.employeeName}` })
  }, {
    key: "employee",
    label: "Employee",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: r.employeeName }),
      conflicts.has(r.id) && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-[#B45309] mt-0.5", children: [
        "⚠ Overlaps with ",
        conflicts.get(r.id).length,
        " other request(s)"
      ] })
    ] })
  }, {
    key: "type",
    label: "Type",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsx(LeaveTypeBadge, { leaveType: r.leaveType, size: "sm" })
  }, {
    key: "dates",
    label: "Dates",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatRange(r.startDate, r.endDate) })
  }, {
    key: "days",
    label: "Days",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
      r.workingDays,
      r.isHalfDay ? " (half)" : ""
    ] })
  }, {
    key: "reason",
    label: "Reason",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "line-clamp-2 max-w-xs block text-[13px] text-[#6B6B6B]", children: r.reason || "—" })
  }, {
    key: "status",
    label: "Status",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsx(LeaveStatusBadge, { status: r.status })
  }, {
    key: "actions",
    label: "",
    align: "right",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "tenant", onClick: () => approve(r), children: "Approve" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "secondary", onClick: () => setRejecting(r), children: "Reject" })
    ] })
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Leave approvals", description: "Review pending requests from your team." }),
    selection.size > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { variant: "info", title: `${selection.size} request(s) selected`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "tenant", onClick: doBulkApprove, disabled: busy, children: "Bulk approve" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "secondary", onClick: () => setBulkRejecting(true), disabled: busy, children: "Bulk reject" })
    ] }) }),
    loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 28 }) }) : requests.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No pending approvals", subtitle: "You're all caught up — new requests will appear here." }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { checked: selection.size === requests.length, onChange: toggleAll, label: "Select all" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DataTable, { columns, data: requests, getRowKey: (r) => r.id })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal, { open: !!rejecting, onClose: () => {
      if (!busy) {
        setRejecting(null);
        setComment("");
      }
    }, title: "Reject leave request", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[14px] text-[#6B6B6B] leading-relaxed", children: [
        "A comment is required to reject ",
        rejecting?.employeeName,
        "'s request."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { label: "Comment", value: comment, onChange: (e) => setComment(e.target.value), placeholder: "Explain why this request is being rejected", error: !comment.trim() ? void 0 : void 0 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center justify-end gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: () => {
          setRejecting(null);
          setComment("");
        }, disabled: busy, children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "danger", onClick: doReject, loading: busy, disabled: !comment.trim(), children: "Reject request" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal, { open: bulkRejecting, onClose: () => {
      if (!busy) {
        setBulkRejecting(false);
        setComment("");
      }
    }, title: "Reject selected requests", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[14px] text-[#6B6B6B] leading-relaxed", children: [
        "A comment is required to reject ",
        selection.size,
        " request(s)."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { label: "Comment", value: comment, onChange: (e) => setComment(e.target.value), placeholder: "Explain why these requests are being rejected" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center justify-end gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: () => {
          setBulkRejecting(false);
          setComment("");
        }, disabled: busy, children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "danger", onClick: doBulkReject, loading: busy, disabled: !comment.trim(), children: "Reject all" })
      ] })
    ] })
  ] });
}
export {
  ApprovalsPage as component
};
