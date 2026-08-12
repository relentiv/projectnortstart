import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { d as useNavigate } from "./_libs/tanstack__react-router.mjs";
import { S as StepIndicator } from "./_ssr/StepIndicator-D128JVPB.mjs";
import { o as onboardingStore, S as StepCard } from "./_ssr/onboarding-B_p3mUJU.mjs";
import { B as Button } from "./_ssr/Button-Crtgy6Xx.mjs";
import { I as Input } from "./_ssr/Input-CHeJoRlX.mjs";
import { p as passwordStrength } from "./_ssr/validation-QPSwBS_q.mjs";
import { c as cn } from "./_ssr/router-Arl77cRa.mjs";
import { a9 as EyeOff, aa as Eye } from "./_libs/lucide-react.mjs";

import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval.mjs";
import "./_libs/unenv.mjs";


import "./_libs/seroval-plugins.mjs";


import "./_libs/react-dom.mjs";
import "./_libs/isbot.mjs";
import "./_ssr/defaults-CvUaCo6_.mjs";
import "./_libs/zod.mjs";
import "./_libs/tanstack__query-core.mjs";
import "./_libs/tanstack__react-query.mjs";
import "./_libs/clsx.mjs";
import "./_libs/tailwind-merge.mjs";
const STEPS = ["Company details", "Brand", "Admin account", "Review"];
const STRENGTH_LABELS = ["Too short", "Weak", "Fair", "Strong", "Very strong"];
const STRENGTH_COLORS = ["#E5E5E3", "#DC2626", "#F59E0B", "#16A34A", "#15803D"];
function OnboardingStep3() {
  const navigate = useNavigate();
  const draft = onboardingStore.useSelector((s) => s);
  const [confirm, setConfirm] = reactExports.useState("");
  const [show, setShow] = reactExports.useState(false);
  const [errors, setErrors] = reactExports.useState({});
  const strength = reactExports.useMemo(() => passwordStrength(draft.adminPassword), [draft.adminPassword]);
  const matches = draft.adminPassword.length > 0 && draft.adminPassword === confirm;
  const canContinue = matches && strength >= 2;
  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    if (draft.adminFullName.trim().length < 2) errs.adminFullName = "Required";
    if (strength < 2) errs.adminPassword = "Min 8 chars, 1 uppercase, 1 number";
    if (!matches) errs.confirm = "Passwords don't match";
    setErrors(errs);
    if (Object.keys(errs).length === 0) navigate({
      to: "/onboarding/review"
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, noValidate: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(StepIndicator, { steps: STEPS, currentStep: 2, className: "mb-10" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StepCard, { title: "Create your admin account.", description: "You'll be the first user. Invite teammates from your dashboard.", footer: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "ghost", onClick: () => navigate({
        to: "/onboarding/brand"
      }), children: "← Back" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", size: "lg", disabled: !canContinue, children: "Continue →" })
    ] }), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Full name", value: draft.adminFullName, onChange: (e) => onboardingStore.update({
        adminFullName: e.target.value
      }), error: errors.adminFullName, autoFocus: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Work email", type: "email", value: draft.hrContactEmail, readOnly: true, disabled: true, hint: "Pre-filled from step 1" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Password", type: show ? "text" : "password", value: draft.adminPassword, onChange: (e) => onboardingStore.update({
            adminPassword: e.target.value
          }), error: errors.adminPassword, hint: "Min 8 characters, 1 uppercase, 1 number" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setShow((v) => !v), onKeyDown: (e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setShow((v) => !v);
            }
          }, "aria-label": show ? "Hide password" : "Show password", className: "absolute right-3 top-[34px] text-[#6B6B6B] hover:text-[#0A0A0A] transition-colors", children: show ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { size: 18 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { size: 18 }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex gap-1.5", children: [0, 1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 flex-1 rounded-full transition-colors duration-150 motion-reduce:transition-none", style: {
          background: i < strength ? STRENGTH_COLORS[strength] : "#E5E5E3"
        } }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: cn("mt-2 text-[13px]", strength >= 2 ? "text-[#16A34A]" : "text-[#6B6B6B]"), children: STRENGTH_LABELS[strength] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Confirm password", type: show ? "text" : "password", value: confirm, onChange: (e) => setConfirm(e.target.value), error: errors.confirm }) })
    ] }) })
  ] });
}
export {
  OnboardingStep3 as component
};
