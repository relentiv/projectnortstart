import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { d as useNavigate } from "./_libs/tanstack__react-router.mjs";
import { B as Button } from "./_ssr/Button-CFBbQAsZ.mjs";
import { I as Input } from "./_ssr/Input-BJe__i93.mjs";
import { C as Card } from "./_ssr/Card-AgXmnnkq.mjs";
import { A as Avatar } from "./_ssr/Avatar-CLw1eWNp.mjs";
import { C as ConfirmDialog } from "./_ssr/ConfirmDialog-BeoeULKD.mjs";
import { T as Tabs } from "./_ssr/Tabs-s82fblAm.mjs";
import { B as Breadcrumb } from "./_ssr/Breadcrumb-Bx825HWE.mjs";
import { s as showToast } from "./_ssr/Toast-DgpI28ao.mjs";
import { T as ThemePreview } from "./_ssr/ThemePreview-BNUp3DUk.mjs";
import { T as TenantStatusBadge } from "./_ssr/TenantStatusBadge-A8Tjp31h.mjs";
import { a as adminApi } from "./_ssr/admin-O86AsBES.mjs";
import { i as impersonationStateStore } from "./_ssr/auth-BAvMo5G5.mjs";
import { ag as Route$5 } from "./_ssr/router-CPP24NZe.mjs";

import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval.mjs";
import "./_libs/unenv.mjs";


import "./_libs/seroval-plugins.mjs";


import "./_libs/react-dom.mjs";
import "./_libs/isbot.mjs";
import "./_ssr/Modal-G0zeYD84.mjs";
import "./_ssr/utils-CYd_2Wqf.mjs";
import "./_ssr/defaults-CvUaCo6_.mjs";
import "./_ssr/Badge-DOnZHL7Z.mjs";
import "./_ssr/rbac-BwLVdIYU.mjs";
import "./_ssr/rbac-Ci1w5KuA.mjs";
import "./_libs/tanstack__query-core.mjs";
import "./_libs/tanstack__react-query.mjs";
import "./_libs/clsx.mjs";
import "./_libs/tailwind-merge.mjs";
import "./_libs/zod.mjs";
function TenantDetailPage() {
  const {
    tenantId
  } = Route$5.useParams();
  const navigate = useNavigate();
  const [t, setT] = reactExports.useState(null);
  const [activity, setActivity] = reactExports.useState([]);
  const [editing, setEditing] = reactExports.useState(false);
  const [name, setName] = reactExports.useState("");
  const [domain, setDomain] = reactExports.useState("");
  const [confirm, setConfirm] = reactExports.useState(null);
  const load = async () => {
    const [r, a] = await Promise.all([adminApi.getTenant(tenantId), adminApi.getActivity(tenantId)]);
    if (r.data) {
      setT(r.data);
      setName(r.data.companyName);
      setDomain(r.data.tenant?.settings.domain ?? "");
    }
    if (a.data) setActivity(a.data);
  };
  reactExports.useEffect(() => {
    void load();
  }, [tenantId]);
  if (!t) return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#6B6B6B]", children: "Loading tenant…" });
  const impersonate = () => {
    impersonationStateStore.start(t.id, t.companyName);
    showToast(`Now viewing as ${t.companyName}`, "warning");
    navigate({
      to: "/dashboard"
    });
  };
  const saveBasics = async () => {
    const res = await adminApi.updateTenantBasics(t.id, {
      companyName: name,
      domain
    });
    if (res.error) {
      showToast(res.error.message, "error");
      return;
    }
    showToast("Tenant updated", "success");
    setEditing(false);
    await load();
  };
  const onConfirm = async () => {
    if (!confirm) return;
    if (confirm === "delete") {
      await adminApi.deleteTenant(t.id);
      showToast("Tenant deleted", "success");
      navigate({
        to: "/admin/tenants"
      });
      return;
    }
    const next = confirm === "suspend" ? "suspended" : "active";
    await adminApi.setStatus(t.id, next);
    showToast(`Status set to ${next}`, "success");
    await load();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumb, { items: [{
      label: "Platform",
      to: "/admin/dashboard"
    }, {
      label: "Tenants",
      to: "/admin/tenants"
    }, {
      label: t.companyName
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { name: t.companyName, size: 48 }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[20px] font-semibold", children: t.companyName }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-[#6B6B6B]", children: t.industry })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-[13px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: "Status", v: /* @__PURE__ */ jsxRuntimeExports.jsx(TenantStatusBadge, { status: t.status }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: "Plan", v: t.plan }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: "Employees", v: t.employees.toLocaleString() }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: "Domain", v: t.tenant?.settings.domain ?? "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: "Joined", v: new Date(t.joinedAt).toLocaleDateString() }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: "HR contact", v: t.tenant?.settings.hrContactName ?? "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: "Email", v: t.tenant?.settings.hrContactEmail ?? "—" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 pt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: impersonate, children: "Impersonate" }),
          t.status === "suspended" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: () => setConfirm("activate"), children: "Reactivate" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: () => setConfirm("suspend"), children: "Suspend" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "danger", onClick: () => setConfirm("delete"), children: "Delete tenant" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-0 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Tabs, { className: "px-6 pt-4", tabs: [{
        id: "overview",
        label: "Overview",
        content: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 pb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Employees", value: t.employees.toLocaleString() }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Plan", value: t.plan }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Subscription renews", value: "Auto-renews monthly" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Trial ends", value: t.trialEndsAt ? new Date(t.trialEndsAt).toLocaleDateString() : "—" })
          ] }),
          t.tenant && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold uppercase tracking-[0.08em] text-[#6B6B6B] mb-2", children: "Brand preview" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ThemePreview, { primary: t.tenant.theme.primaryColor, secondary: t.tenant.theme.secondaryColor, accent: t.tenant.theme.accentColor, companyName: t.companyName })
          ] })
        ] })
      }, {
        id: "activity",
        label: "Activity log",
        content: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pb-6", children: activity.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] text-[#6B6B6B] py-6", children: "No activity recorded." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-[#F2F2F0]", children: activity.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "py-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px]", children: a.action }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[12px] text-[#6B6B6B] mt-0.5", children: [
            new Date(a.timestamp).toLocaleString(),
            " · ",
            a.actor
          ] })
        ] }, a.id)) }) })
      }, {
        id: "settings",
        label: "Settings",
        content: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4 pb-6", children: editing ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Company name", value: name, onChange: (e) => setName(e.target.value) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Domain", value: domain, onChange: (e) => setDomain(e.target.value) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: saveBasics, children: "Save" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: () => setEditing(false), children: "Cancel" })
          ] })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Name", value: t.companyName }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Domain", value: t.tenant?.settings.domain ?? "—" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Industry", value: t.industry }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Size", value: t.tenant?.settings.size ?? "—" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Country", value: t.tenant?.settings.country ?? "—" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", size: "sm", onClick: () => setEditing(true), children: "Edit name & domain" })
        ] }) })
      }] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ConfirmDialog, { open: !!confirm, onOpenChange: (o) => !o && setConfirm(null), title: confirm === "delete" ? "Delete tenant?" : confirm === "suspend" ? "Suspend tenant?" : "Reactivate tenant?", description: confirm === "delete" ? `Delete ${t.companyName} permanently. This cannot be undone.` : confirm === "suspend" ? `${t.companyName} will lose access until reactivated.` : `${t.companyName} will regain access to the platform.`, confirmLabel: confirm === "delete" ? "Delete" : confirm === "suspend" ? "Suspend" : "Reactivate", variant: confirm === "delete" ? "danger" : "warning", onConfirm })
  ] });
}
function Row({
  k,
  v
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#6B6B6B]", children: k }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-right", children: v })
  ] });
}
function Stat({
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold uppercase tracking-[0.08em] text-[#6B6B6B]", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[14px]", children: value })
  ] });
}
export {
  TenantDetailPage as component
};
