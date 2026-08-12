import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { d as useNavigate } from "./_libs/tanstack__react-router.mjs";
import { S as StepIndicator } from "./_ssr/StepIndicator-PPUn9war.mjs";
import { o as onboardingStore, S as StepCard } from "./_ssr/onboarding-DmJywyTI.mjs";
import { B as Button } from "./_ssr/Button-CFBbQAsZ.mjs";
import { I as Input } from "./_ssr/Input-BJe__i93.mjs";
import { S as Select } from "./_ssr/Select-CDtKs7RG.mjs";
import { e as emailSchema } from "./_ssr/validation-QPSwBS_q.mjs";

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
const STEPS = ["Company details", "Brand", "Admin account", "Review"];
const INDUSTRIES = ["Software & Technology", "Financial Services", "Healthcare", "Retail & E-commerce", "Manufacturing", "Education", "Professional Services", "Media & Entertainment", "Other"].map((v) => ({
  value: v,
  label: v
}));
const SIZES = [{
  value: "1-50",
  label: "1–50 employees"
}, {
  value: "51-200",
  label: "51–200 employees"
}, {
  value: "201-500",
  label: "201–500 employees"
}, {
  value: "501-2000",
  label: "501–2,000 employees"
}, {
  value: "2000+",
  label: "2,000+ employees"
}];
const COUNTRIES = ["United States", "United Kingdom", "Canada", "Australia", "Germany", "France", "India", "Singapore", "United Arab Emirates", "Other"].map((v) => ({
  value: v,
  label: v
}));
function OnboardingStep1() {
  const navigate = useNavigate();
  const draft = onboardingStore.useSelector((s) => s);
  const [errors, setErrors] = reactExports.useState({});
  const [submitted, setSubmitted] = reactExports.useState(false);
  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const errs = {};
    if (draft.companyName.trim().length < 2) errs.companyName = "Min 2 characters";
    try {
      new URL(draft.domain.startsWith("http") ? draft.domain : `https://${draft.domain}`);
    } catch {
      errs.domain = "Enter a valid URL";
    }
    if (!draft.industry) errs.industry = "Required";
    if (!draft.size) errs.size = "Required";
    if (!draft.country) errs.country = "Required";
    if (draft.hrContactName.trim().length < 2) errs.hrContactName = "Required";
    const emailRes = emailSchema.safeParse(draft.hrContactEmail);
    if (!emailRes.success) errs.hrContactEmail = emailRes.error.issues[0].message;
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      navigate({
        to: "/onboarding/brand"
      });
    } else if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };
  const set = (patch) => onboardingStore.update(patch);
  const errorCount = Object.keys(errors).length;
  const showBanner = submitted && errorCount > 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, noValidate: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(StepIndicator, { steps: STEPS, currentStep: 0, className: "mb-10" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(StepCard, { title: "Let's set up your workspace.", description: "Takes about 4 minutes. No credit card required.", footer: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] text-[#6B6B6B]", children: "Step 1 of 4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", size: "lg", children: "Continue →" })
    ] }), children: [
      showBanner && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { role: "alert", "aria-live": "polite", className: "mb-6 rounded-sm border border-[#FECACA] bg-[#FEF2F2] px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[13px] font-semibold text-[#991B1B]", children: [
        "Please fix ",
        errorCount,
        " ",
        errorCount === 1 ? "field" : "fields",
        " before continuing."
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Company name", value: draft.companyName, onChange: (e) => set({
          companyName: e.target.value
        }), error: errors.companyName, autoFocus: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Company website", placeholder: "https://acme.com", value: draft.domain, onChange: (e) => set({
          domain: e.target.value
        }), error: errors.domain }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { label: "Industry", placeholder: "Select industry", options: INDUSTRIES, value: draft.industry, onChange: (e) => set({
          industry: e.target.value
        }), error: errors.industry }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { label: "Company size", placeholder: "Select size", options: SIZES, value: draft.size, onChange: (e) => set({
          size: e.target.value
        }), error: errors.size }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { label: "Country of incorporation", placeholder: "Select country", options: COUNTRIES, value: draft.country, onChange: (e) => set({
          country: e.target.value
        }), error: errors.country }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Primary HR contact name", value: draft.hrContactName, onChange: (e) => set({
          hrContactName: e.target.value
        }), error: errors.hrContactName }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Primary HR contact email", type: "email", value: draft.hrContactEmail, onChange: (e) => set({
          hrContactEmail: e.target.value
        }), error: errors.hrContactEmail })
      ] })
    ] })
  ] });
}
export {
  OnboardingStep1 as component
};
