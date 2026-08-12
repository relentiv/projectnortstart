import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { B as Button } from "./_ssr/Button-CFBbQAsZ.mjs";
import { B as Badge } from "./_ssr/Badge-DOnZHL7Z.mjs";
import { C as Card } from "./_ssr/Card-AgXmnnkq.mjs";
import { C as ColorPicker } from "./_ssr/ColorPicker-fBsjsZd0.mjs";
import { T as ThemePreview } from "./_ssr/ThemePreview-BNUp3DUk.mjs";
import { P as PageHeader } from "./_ssr/PageHeader-CpfbD_86.mjs";
import { t as tenantStore } from "./_ssr/tenant-BBKCiWas.mjs";
import { t as tenantsApi } from "./_ssr/tenants-DRPBH7oN.mjs";
import { c as computeTextColor, d as contrastRatio, a as applyTenantTheme, b as buildTheme } from "./_ssr/utils-CYd_2Wqf.mjs";
import { D as DEFAULT_THEME } from "./_ssr/defaults-CvUaCo6_.mjs";
import { u as uiStore } from "./_ssr/router-CPP24NZe.mjs";

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
function CompanySettings() {
  const tenant = tenantStore.useSelector((s) => s.tenant);
  const theme = tenantStore.useSelector((s) => s.theme);
  const [primary, setPrimary] = reactExports.useState(theme.primaryColor);
  const [secondary, setSecondary] = reactExports.useState(theme.secondaryColor);
  const [accent, setAccent] = reactExports.useState(theme.accentColor);
  const [saving, setSaving] = reactExports.useState(false);
  if (!tenant) return null;
  const onPrimary = computeTextColor(primary);
  const warn = contrastRatio(primary, onPrimary) < 4.5;
  const save = async () => {
    setSaving(true);
    const next = buildTheme({
      primaryColor: primary,
      secondaryColor: secondary,
      accentColor: accent
    });
    const res = await tenantsApi.updateTheme(tenant.id, next);
    setSaving(false);
    if (res.error || !res.data) {
      uiStore.pushToast({
        message: res.error?.message ?? "Save failed",
        variant: "error"
      });
      return;
    }
    tenantStore.updateTheme(next);
    applyTenantTheme(next);
    uiStore.pushToast({
      message: "Brand updated",
      variant: "success"
    });
  };
  const reset = async () => {
    const res = await tenantsApi.updateTheme(tenant.id, DEFAULT_THEME);
    if (res.data) {
      setPrimary(DEFAULT_THEME.primaryColor);
      setSecondary(DEFAULT_THEME.secondaryColor);
      setAccent(DEFAULT_THEME.accentColor);
      tenantStore.updateTheme(DEFAULT_THEME);
      applyTenantTheme(DEFAULT_THEME);
      uiStore.pushToast({
        message: "Reset to defaults",
        variant: "info"
      });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Company brand", description: "Update how your workspace looks for everyone on your team." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-[1fr_320px] gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ColorPicker, { label: "Primary color", value: primary, onChange: setPrimary }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ColorPicker, { label: "Secondary color", value: secondary, onChange: setSecondary }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ColorPicker, { label: "Accent color", value: accent, onChange: setAccent }),
        warn && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "warning", children: "Contrast warning — text on primary may be hard to read" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-4 border-t border-[#E5E5E3]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: reset, className: "text-[13px] text-[#6B6B6B] hover:text-[#0A0A0A] underline underline-offset-4", children: "Reset to defaults" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: save, loading: saving, variant: "tenant", children: "Save changes" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold uppercase tracking-[0.08em] text-[#6B6B6B] mb-3", children: "Live preview" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ThemePreview, { primary, secondary, accent, companyName: tenant.settings.companyName })
      ] })
    ] })
  ] });
}
export {
  CompanySettings as component
};
