import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { L as Link } from "./_libs/tanstack__react-router.mjs";
import { B as Button } from "./_ssr/Button-CFBbQAsZ.mjs";
import { C as Card } from "./_ssr/Card-AgXmnnkq.mjs";
import { B as Breadcrumb } from "./_ssr/Breadcrumb-Bx825HWE.mjs";
import { I as Input } from "./_ssr/Input-BJe__i93.mjs";
import { T as Textarea } from "./_ssr/Textarea-DsONP0BR.mjs";
import { S as Select } from "./_ssr/Select-CDtKs7RG.mjs";
import { A as Alert } from "./_ssr/Alert-COamyPgG.mjs";
import { P as PhoneInput } from "./_ssr/PhoneInput-BobMRa8A.mjs";
import { E as EXPIRY_OPTIONS, c as candidatesApi } from "./_ssr/candidates-DAX-Qu8a.mjs";
import { f as formsApi } from "./_ssr/forms-PzgPrb8p.mjs";
import { P as PermissionGuard } from "./_ssr/PermissionGuard-DrHCZdH7.mjs";

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
import "./_ssr/candidate-CM1ucsTB.mjs";
import "./_ssr/localStorage-DOek0dff.mjs";
import "./_ssr/formConditions-CF1AFMuj.mjs";
import "./_ssr/usePermission-DoLX-EvC.mjs";
import "./_ssr/rbac-BwLVdIYU.mjs";
import "./_ssr/rbac-Ci1w5KuA.mjs";
function InviteForm({ onSuccess }) {
  const [firstName, setFirstName] = reactExports.useState("");
  const [lastName, setLastName] = reactExports.useState("");
  const [email, setEmail] = reactExports.useState("");
  const [phone, setPhone] = reactExports.useState("");
  const [roleName, setRoleName] = reactExports.useState("");
  const [formId, setFormId] = reactExports.useState("");
  const [expiryHours, setExpiryHours] = reactExports.useState(EXPIRY_OPTIONS[2].hours);
  const [hrNotes, setHrNotes] = reactExports.useState("");
  const [forms, setForms] = reactExports.useState([]);
  const [loadingForms, setLoadingForms] = reactExports.useState(true);
  const [error, setError] = reactExports.useState(null);
  const [duplicateId, setDuplicateId] = reactExports.useState(null);
  const [submitting, setSubmitting] = reactExports.useState(false);
  reactExports.useEffect(() => {
    void formsApi.publishedCandidateForms().then((r) => {
      if (r.data) setForms(r.data);
      setLoadingForms(false);
    });
  }, []);
  const submit = async (allowDuplicate = false) => {
    setError(null);
    setDuplicateId(null);
    if (!firstName.trim()) {
      setError("First name is required.");
      return;
    }
    setSubmitting(true);
    const input = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      phone: phone.trim() || void 0,
      roleName: roleName.trim() || void 0,
      formId: formId || null,
      expiryHours,
      hrNotes: hrNotes.trim() || void 0,
      allowDuplicate
    };
    const r = await candidatesApi.invite(input);
    setSubmitting(false);
    if (r.error) {
      if (r.error.code === "duplicate" && r.error.message.startsWith("DUPLICATE:")) {
        setDuplicateId(r.error.message.slice("DUPLICATE:".length));
        setError("A candidate with this email already has an active application for this role.");
      } else {
        setError(r.error.message);
      }
      return;
    }
    if (r.data) {
      onSuccess({ ...r.data, email: input.email });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "space-y-6", children: [
    error && /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { variant: "warning", title: "Heads up", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: error }),
      duplicateId && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "text-[13px] font-medium underline", onClick: () => void submit(true), children: "Yes, create new" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: `/candidates/${duplicateId}`,
            className: "text-[13px] font-medium underline",
            children: "View existing"
          }
        )
      ] })
    ] }),
    !loadingForms && forms.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { variant: "warning", title: "No published candidate forms", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "Publish a candidate onboarding form in",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/settings/forms", className: "underline font-medium", children: "Settings → Forms" }),
      " so candidates can fill it in, or continue below to send a form-less invite."
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "First name", value: firstName, onChange: (e) => setFirstName(e.target.value), required: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Last name", value: lastName, onChange: (e) => setLastName(e.target.value) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Email", type: "email", value: email, onChange: (e) => setEmail(e.target.value), required: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PhoneInput, { label: "Phone", value: phone, onChange: setPhone }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Role", value: roleName, onChange: (e) => setRoleName(e.target.value), placeholder: "e.g. Product Designer" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Select,
        {
          label: "Onboarding form",
          value: formId,
          onChange: (e) => setFormId(e.target.value),
          options: forms.map((f) => ({ value: f.id, label: `${f.title} (v${f.version})` })),
          placeholder: forms.length ? "Select a form (optional)" : "No published forms available"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Select,
        {
          label: "Link expiry",
          value: String(expiryHours),
          onChange: (e) => setExpiryHours(Number(e.target.value)),
          options: EXPIRY_OPTIONS.map((o) => ({ value: String(o.hours), label: o.label }))
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Textarea,
      {
        label: "Internal notes (optional)",
        value: hrNotes,
        onChange: (e) => setHrNotes(e.target.value),
        placeholder: "Not visible to the candidate…",
        rows: 3
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { loading: submitting, onClick: () => void submit(false), children: "Send invitation" }) })
  ] });
}
function InviteCandidatePage() {
  const [result, setResult] = reactExports.useState(null);
  const [copied, setCopied] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PermissionGuard, { permission: "employees.create", fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] text-[#6B6B6B]", children: "You don't have permission to invite candidates." }), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 max-w-2xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumb, { items: [{
      label: "Candidates",
      to: "/candidates"
    }, {
      label: "Invite"
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-[28px] font-bold tracking-[-0.02em]", children: "Invite candidate" }),
    result ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center py-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-12 w-12 rounded-full bg-[#DCFCE7] text-[#166534] inline-flex items-center justify-center text-2xl", children: "✓" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-[16px] font-semibold text-[#0A0A0A]", children: [
          "Invitation sent to ",
          result.email
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/candidates/$candidateId", search: {
          tab: "overview"
        }, params: {
          candidateId: result.candidateId
        }, className: "mt-2 text-[13px] text-[var(--tenant-primary)] hover:underline", children: "View candidate →" })
      ] }),
      false,
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: () => setResult(null), children: "Invite another" }) })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(InviteForm, { onSuccess: setResult })
  ] }) });
}
export {
  InviteCandidatePage as component
};
