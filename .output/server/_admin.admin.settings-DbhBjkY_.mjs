import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { B as Button } from "./_ssr/Button-CFBbQAsZ.mjs";
import { I as Input } from "./_ssr/Input-BJe__i93.mjs";
import { S as Select } from "./_ssr/Select-CDtKs7RG.mjs";
import { C as Card } from "./_ssr/Card-AgXmnnkq.mjs";
import { C as ConfirmDialog } from "./_ssr/ConfirmDialog-BeoeULKD.mjs";
import { B as Breadcrumb } from "./_ssr/Breadcrumb-Bx825HWE.mjs";
import { s as showToast } from "./_ssr/Toast-DgpI28ao.mjs";
import { a as adminApi } from "./_ssr/admin-O86AsBES.mjs";

import "./_ssr/router-CPP24NZe.mjs";
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
import "./_ssr/Modal-G0zeYD84.mjs";
import "./_ssr/defaults-CvUaCo6_.mjs";
const PLANS = [{
  value: "Trial",
  label: "Trial"
}, {
  value: "Starter",
  label: "Starter"
}, {
  value: "Growth",
  label: "Growth"
}, {
  value: "Enterprise",
  label: "Enterprise"
}];
function AdminSettings() {
  const [s, setS] = reactExports.useState(null);
  const [confirmClear, setConfirmClear] = reactExports.useState(false);
  reactExports.useEffect(() => {
    void adminApi.getSettings().then((r) => r.data && setS(r.data));
  }, []);
  if (!s) return null;
  const save = async () => {
    const res = await adminApi.saveSettings(s);
    if (res.error) {
      showToast(res.error.message, "error");
      return;
    }
    showToast("Settings saved", "success");
  };
  const clearTest = async () => {
    const r = await adminApi.clearTestTenants();
    showToast(`${r.data ?? 0} test tenants deleted`, "success");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumb, { items: [{
      label: "Platform",
      to: "/admin/dashboard"
    }, {
      label: "Settings"
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-[28px] font-bold tracking-[-0.01em]", children: "Platform settings" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[15px] font-semibold", children: "Branding" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Platform name", value: s.platformName, onChange: (e) => setS({
        ...s,
        platformName: e.target.value
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Support email", type: "email", value: s.supportEmail, onChange: (e) => setS({
        ...s,
        supportEmail: e.target.value
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[15px] font-semibold", children: "Onboarding defaults" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Default trial period (days)", type: "number", value: String(s.defaultTrialDays), onChange: (e) => setS({
        ...s,
        defaultTrialDays: Number(e.target.value) || 0
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { label: "Default plan for self-serve", options: PLANS, value: s.defaultPlan, onChange: (e) => setS({
        ...s,
        defaultPlan: e.target.value
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: save, children: "Save settings" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-[#FECACA]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[15px] font-semibold text-[#991B1B]", children: "Danger zone" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#6B6B6B] mt-1 mb-4", children: "Permanently delete all tenants marked as test." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "danger", onClick: () => setConfirmClear(true), children: "Clear all test tenants" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ConfirmDialog, { open: confirmClear, onOpenChange: setConfirmClear, title: "Clear all test tenants?", description: "This deletes every tenant flagged as test. This cannot be undone.", confirmLabel: "Clear test tenants", variant: "danger", onConfirm: clearTest })
  ] });
}
export {
  AdminSettings as component
};
