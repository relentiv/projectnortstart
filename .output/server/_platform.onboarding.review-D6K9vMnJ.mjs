import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { d as useNavigate } from "./_libs/tanstack__react-router.mjs";
import { S as StepIndicator } from "./_ssr/StepIndicator-PPUn9war.mjs";
import { o as onboardingStore, S as StepCard } from "./_ssr/onboarding-DmJywyTI.mjs";
import { T as ThemePreview } from "./_ssr/ThemePreview-BNUp3DUk.mjs";
import { B as Button } from "./_ssr/Button-CFBbQAsZ.mjs";
import { C as Checkbox } from "./_ssr/Checkbox-EmLzttzJ.mjs";
import { C as Card } from "./_ssr/Card-AgXmnnkq.mjs";
import { A as Alert } from "./_ssr/Alert-COamyPgG.mjs";
import { t as tenantsApi } from "./_ssr/tenants-DRPBH7oN.mjs";
import { a as authApi } from "./_ssr/auth-BCpiFv6T.mjs";
import { t as tenantStore } from "./_ssr/tenant-BBKCiWas.mjs";
import { a as authStore } from "./_ssr/auth-BAvMo5G5.mjs";
import { b as buildTheme, a as applyTenantTheme } from "./_ssr/utils-CYd_2Wqf.mjs";
import { x as CircleCheck } from "./_libs/lucide-react.mjs";

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
import "./_ssr/defaults-CvUaCo6_.mjs";
import "./_ssr/rbac-BwLVdIYU.mjs";
import "./_ssr/rbac-Ci1w5KuA.mjs";
const STEPS = ["Company details", "Brand", "Admin account", "Review"];
function OnboardingStep4() {
  const navigate = useNavigate();
  const draft = onboardingStore.useSelector((s) => s);
  const [agree, setAgree] = reactExports.useState(false);
  const [submitting, setSubmitting] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const [done, setDone] = reactExports.useState(null);
  const [countdown, setCountdown] = reactExports.useState(2.5);
  reactExports.useEffect(() => {
    if (!done) return;
    const start = Date.now();
    const t = window.setInterval(() => {
      const elapsed = (Date.now() - start) / 1e3;
      setCountdown(Math.max(0, 2.5 - elapsed));
      if (elapsed >= 2.5) {
        window.clearInterval(t);
        navigate({
          to: "/dashboard"
        });
      }
    }, 50);
    return () => window.clearInterval(t);
  }, [done, navigate]);
  const launch = async () => {
    setError(null);
    setSubmitting(true);
    const theme = buildTheme({
      primaryColor: draft.primaryColor,
      secondaryColor: draft.secondaryColor,
      accentColor: draft.accentColor
    });
    const tenantRes = await tenantsApi.create({
      settings: onboardingStore.toSettings(),
      theme
    });
    if (tenantRes.error || !tenantRes.data) {
      setError(tenantRes.error?.message ?? "Something went wrong. Please try again.");
      setSubmitting(false);
      return;
    }
    const authRes = await authApi.register({
      fullName: draft.adminFullName,
      email: draft.hrContactEmail,
      password: draft.adminPassword,
      tenantId: tenantRes.data.id
    });
    if (authRes.error || !authRes.data) {
      setError(authRes.error?.message ?? "Something went wrong. Please try again.");
      setSubmitting(false);
      return;
    }
    tenantStore.setTenant(tenantRes.data);
    applyTenantTheme(tenantRes.data.theme);
    authStore.signIn(authRes.data.user, authRes.data.token);
    onboardingStore.reset();
    setDone({
      name: draft.adminFullName
    });
  };
  if (done) {
    const progress = (2.5 - countdown) / 2.5 * 100;
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-[60vh] flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 64, className: "mx-auto text-[#16A34A]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-6 text-[48px] font-bold tracking-[-0.01em] text-[#0A0A0A] leading-tight", children: "Your workspace is ready." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-[15px] text-[#6B6B6B]", children: [
        "Logging you in as ",
        done.name,
        "…"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 h-1 w-full rounded-full bg-[#E5E5E3] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-[#F97316] transition-[width] duration-100", style: {
        width: `${progress}%`
      } }) })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
    e.preventDefault();
    if (agree) launch();
  }, noValidate: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(StepIndicator, { steps: STEPS, currentStep: 3, className: "mb-10" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(StepCard, { title: "Review and launch.", description: "Double-check the basics. You can edit everything from settings later.", footer: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "ghost", onClick: () => navigate({
        to: "/onboarding/admin"
      }), children: "← Back" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", size: "lg", loading: submitting, disabled: !agree || submitting, children: "Launch workspace →" })
    ] }), children: [
      error && /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { variant: "error", onDismiss: () => setError(null), className: "mb-6", children: error }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-[1fr_320px] gap-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[18px] font-semibold mb-4", children: draft.companyName }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "grid grid-cols-[140px_1fr] gap-y-3 text-[14px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-[#6B6B6B]", children: "Website" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "text-[#0A0A0A]", children: draft.domain }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-[#6B6B6B]", children: "Industry" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "text-[#0A0A0A]", children: draft.industry }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-[#6B6B6B]", children: "Size" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "text-[#0A0A0A]", children: draft.size }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-[#6B6B6B]", children: "Country" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "text-[#0A0A0A]", children: draft.country }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-[#6B6B6B]", children: "Admin" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "text-[#0A0A0A]", children: draft.adminFullName }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-[#6B6B6B]", children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "text-[#0A0A0A]", children: draft.hrContactEmail })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 pt-6 border-t border-[#E5E5E3]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { checked: agree, onChange: (e) => setAgree(e.target.checked), label: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            "I agree to the ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "underline", children: "Terms of Service" }),
            " and ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "underline", children: "Privacy Policy" }),
            "."
          ] }) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold uppercase tracking-[0.08em] text-[#6B6B6B] mb-3", children: "Your brand" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ThemePreview, { primary: draft.primaryColor, secondary: draft.secondaryColor, accent: draft.accentColor, companyName: draft.companyName })
        ] })
      ] })
    ] })
  ] });
}
export {
  OnboardingStep4 as component
};
