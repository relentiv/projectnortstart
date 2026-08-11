import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { B as Button } from "./_ssr/Button-B92Yl16p.mjs";
import { I as Input } from "./_ssr/Input-DkwuDyVZ.mjs";
import { B as Badge } from "./_ssr/Badge-BQrIKnVV.mjs";
import { C as Card } from "./_ssr/Card-C9YFlUub.mjs";
import { E as EmptyState } from "./_ssr/EmptyState-C_t8YrDr.mjs";
import { C as ConfirmDialog } from "./_ssr/ConfirmDialog-CNV1l6_7.mjs";
import { S as SlideOver } from "./_ssr/SlideOver-DGRd3Ojy.mjs";
import { D as DataTable } from "./_ssr/DataTable-QZdOUOks.mjs";
import { B as Breadcrumb } from "./_ssr/Breadcrumb-BAW4dGjH.mjs";
import { s as showToast } from "./_ssr/Toast-n7pN7q8Q.mjs";
import { T as Toggle } from "./_ssr/Toggle-DjmT4lpt.mjs";
import { R as RadioGroup } from "./_ssr/RadioGroup-DGseX15k.mjs";
import { P as PermissionGuard } from "./_ssr/PermissionGuard-CtwjQNn8.mjs";
import { r as reviewApi } from "./_ssr/candidates-BtsrOf4o.mjs";
import { R as REJECTION_CATEGORY_LABELS } from "./_ssr/candidate-CM1ucsTB.mjs";

import "./_ssr/router-LFebWAoY.mjs";
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
import "./_ssr/Modal-DIFPhA7e.mjs";
import "./_ssr/usePermission-5FQzLb5G.mjs";
import "./_ssr/rbac-B_cCMzV8.mjs";
import "./_ssr/rbac-B1d7raBj.mjs";
import "./_ssr/localStorage-DOek0dff.mjs";
const CATEGORY_OPTIONS = Object.entries(REJECTION_CATEGORY_LABELS).map(([value, label]) => ({
  value,
  label
}));
function RejectionReasonsPage() {
  const [reasons, setReasons] = reactExports.useState([]);
  const [editing, setEditing] = reactExports.useState(null);
  const [creating, setCreating] = reactExports.useState(false);
  const [deleteTarget, setDeleteTarget] = reactExports.useState(null);
  const [label, setLabel] = reactExports.useState("");
  const [category, setCategory] = reactExports.useState("other");
  const [error, setError] = reactExports.useState();
  const [saving, setSaving] = reactExports.useState(false);
  const load = () => setReasons(reviewApi.rejectionReasons());
  reactExports.useEffect(() => {
    load();
  }, []);
  const open = (r) => {
    setEditing(r);
    setCreating(r === null);
    setLabel(r?.label ?? "");
    setCategory(r?.category ?? "other");
    setError(void 0);
  };
  const close = () => {
    setEditing(null);
    setCreating(false);
    setError(void 0);
  };
  const save = async () => {
    setSaving(true);
    const r = await reviewApi.saveRejectionReason({
      id: editing?.id,
      label,
      category,
      isActive: editing?.isActive ?? true
    });
    setSaving(false);
    if (r.error) {
      setError(r.error.message);
      return;
    }
    showToast(editing ? "Reason updated." : "Reason added.", "success");
    close();
    load();
  };
  const toggleActive = async (r) => {
    await reviewApi.saveRejectionReason({
      id: r.id,
      label: r.label,
      category: r.category,
      isActive: !r.isActive
    });
    load();
  };
  const remove = async (r) => {
    const res = await reviewApi.deleteRejectionReason(r.id);
    if (res.error) {
      showToast(res.error.message, "error");
      return;
    }
    showToast("Reason deleted.", "success");
    load();
  };
  const columns = reactExports.useMemo(() => [{
    key: "label",
    label: "Reason",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: r.label })
  }, {
    key: "category",
    label: "Category",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "default", children: REJECTION_CATEGORY_LABELS[r.category] })
  }, {
    key: "usage",
    label: "Used",
    render: (r) => `${reviewApi.reasonUsageCount(r.id)} candidate(s)`
  }, {
    key: "active",
    label: "Visible",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsx(PermissionGuard, { permission: "settings.company.edit", fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: r.isActive ? "Yes" : "Hidden" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { checked: r.isActive, onChange: () => void toggleActive(r), label: r.isActive ? "Visible" : "Hidden" }) })
  }, {
    key: "actions",
    label: "",
    align: "right",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsx(PermissionGuard, { permission: "settings.company.edit", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "text-[12px] text-[var(--tenant-primary)] hover:underline", onClick: () => open(r), children: "Edit" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "text-[12px] text-[#DC2626] hover:underline", onClick: () => setDeleteTarget(r), children: "Delete" })
    ] }) })
  }], []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumb, { items: [{
      label: "Settings",
      to: "/settings"
    }, {
      label: "Rejection reasons"
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-[28px] font-bold tracking-[-0.02em]", children: "Rejection reasons" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] text-[#6B6B6B] mt-1", children: "These appear when someone rejects a candidate. Hide a reason to retire it without losing history." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PermissionGuard, { permission: "settings.company.edit", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => open(null), children: "Add reason" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-0 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DataTable, { columns, data: reasons, getRowKey: (r) => r.id, emptyState: /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No rejection reasons yet", subtitle: "Add reasons so rejections stay consistent and reportable." }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SlideOver, { open: creating || !!editing, onClose: close, title: editing ? "Edit reason" : "Add rejection reason", footer: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: close, children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: save, loading: saving, children: editing ? "Save changes" : "Add reason" })
    ] }), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Reason", required: true, value: label, onChange: (e) => setLabel(e.target.value), error, placeholder: "e.g. Salary expectations too high" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-1.5 text-[13px] font-medium text-[#0A0A0A]", children: "Category" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroup, { options: CATEGORY_OPTIONS, value: category, onChange: (v) => setCategory(v) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ConfirmDialog, { open: !!deleteTarget, onOpenChange: (o) => !o && setDeleteTarget(null), title: "Delete this reason?", description: `"${deleteTarget?.label ?? ""}" will no longer be available. Reasons already used on a candidate can't be deleted.`, confirmLabel: "Delete", variant: "danger", onConfirm: async () => {
      if (deleteTarget) await remove(deleteTarget);
    } })
  ] });
}
export {
  RejectionReasonsPage as component
};
