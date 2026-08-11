import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { d as useNavigate } from "./_libs/tanstack__react-router.mjs";
import { B as Button } from "./_ssr/Button-B92Yl16p.mjs";
import { I as Input } from "./_ssr/Input-DkwuDyVZ.mjs";
import { T as Textarea } from "./_ssr/Textarea-DmSlcYuH.mjs";
import { S as Select } from "./_ssr/Select-CT_4ow88.mjs";
import { C as Card } from "./_ssr/Card-C9YFlUub.mjs";
import { B as Breadcrumb } from "./_ssr/Breadcrumb-BAW4dGjH.mjs";
import { s as showToast } from "./_ssr/Toast-n7pN7q8Q.mjs";
import { a as adminApi } from "./_ssr/admin-epIiHo3E.mjs";

import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval.mjs";
import "./_libs/unenv.mjs";


import "./_libs/seroval-plugins.mjs";


import "./_libs/react-dom.mjs";
import "./_libs/isbot.mjs";
import "./_ssr/router-LFebWAoY.mjs";
import "./_libs/tanstack__query-core.mjs";
import "./_libs/tanstack__react-query.mjs";
import "./_libs/clsx.mjs";
import "./_libs/tailwind-merge.mjs";
import "./_libs/zod.mjs";
import "./_ssr/defaults-CvUaCo6_.mjs";
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
function NewTenantPage() {
  const navigate = useNavigate();
  const [form, setForm] = reactExports.useState({
    companyName: "",
    domain: "",
    industry: "",
    size: "",
    country: "",
    hrContactName: "",
    hrContactEmail: "",
    plan: "Trial",
    trialEndsAt: "",
    internalNotes: ""
  });
  const [errors, setErrors] = reactExports.useState({});
  const [saving, setSaving] = reactExports.useState(false);
  const set = (patch) => setForm((f) => ({
    ...f,
    ...patch
  }));
  const submit = async (e) => {
    e.preventDefault();
    const errs = {};
    if (form.companyName.trim().length < 2) errs.companyName = "Required";
    if (!form.industry) errs.industry = "Required";
    if (!form.size) errs.size = "Required";
    if (!form.country) errs.country = "Required";
    if (form.hrContactName.trim().length < 2) errs.hrContactName = "Required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.hrContactEmail)) errs.hrContactEmail = "Invalid email";
    if (form.plan === "Trial" && !form.trialEndsAt) errs.trialEndsAt = "Required for trial plans";
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setSaving(true);
    const res = await adminApi.createTenantManual(form);
    setSaving(false);
    if (res.error || !res.data) {
      showToast(res.error?.message ?? "Create failed", "error");
      return;
    }
    showToast(`Tenant created. Invite email sent to ${form.hrContactEmail}.`, "success");
    navigate({
      to: "/admin/tenants/$tenantId",
      params: {
        tenantId: res.data.id
      }
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumb, { items: [{
      label: "Platform",
      to: "/admin/dashboard"
    }, {
      label: "Tenants",
      to: "/admin/tenants"
    }, {
      label: "New"
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-[28px] font-bold tracking-[-0.01em]", children: "Create tenant manually" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, noValidate: true, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Company name", value: form.companyName, onChange: (e) => set({
            companyName: e.target.value
          }), error: errors.companyName, autoFocus: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Domain", placeholder: "https://acme.com", value: form.domain, onChange: (e) => set({
            domain: e.target.value
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { label: "Industry", placeholder: "Select industry", options: INDUSTRIES, value: form.industry, onChange: (e) => set({
            industry: e.target.value
          }), error: errors.industry }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { label: "Size", placeholder: "Select size", options: SIZES, value: form.size, onChange: (e) => set({
            size: e.target.value
          }), error: errors.size }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { label: "Country", placeholder: "Select country", options: COUNTRIES, value: form.country, onChange: (e) => set({
            country: e.target.value
          }), error: errors.country }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { label: "Plan", options: PLANS, value: form.plan, onChange: (e) => set({
            plan: e.target.value
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "HR contact name", value: form.hrContactName, onChange: (e) => set({
            hrContactName: e.target.value
          }), error: errors.hrContactName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "HR contact email", type: "email", value: form.hrContactEmail, onChange: (e) => set({
            hrContactEmail: e.target.value
          }), error: errors.hrContactEmail }),
          form.plan === "Trial" && /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Trial end date", type: "text", placeholder: "YYYY-MM-DD", value: form.trialEndsAt, onChange: (e) => set({
            trialEndsAt: e.target.value
          }), error: errors.trialEndsAt })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { label: "Internal notes", hint: "Not visible to the tenant.", rows: 3, value: form.internalNotes, onChange: (e) => set({
          internalNotes: e.target.value
        }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center justify-end gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: () => navigate({
          to: "/admin/tenants"
        }), type: "button", children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", loading: saving, children: "Create tenant" })
      ] })
    ] })
  ] });
}
export {
  NewTenantPage as component
};
