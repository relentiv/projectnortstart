import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { f as useParams, d as useNavigate } from "./_libs/tanstack__react-router.mjs";
import { _ as getEmployee, s as settingsApi, l as listEmployees, S as Spinner, af as updateEmployee } from "./_ssr/router-LFebWAoY.mjs";
import { A as Alert } from "./_ssr/Alert-DctqS4QO.mjs";
import { B as Breadcrumb } from "./_ssr/Breadcrumb-BAW4dGjH.mjs";
import { s as showToast } from "./_ssr/Toast-n7pN7q8Q.mjs";
import { S as StepForm, a as StepPersonal, b as StepProfessional, c as StepCompensation, d as StepDocuments, e as StepAccessReview, v as validatePersonal, f as validateProfessional, g as validateCompensation } from "./_ssr/StepAccessReview-DoLlakwS.mjs";

import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval.mjs";
import "./_libs/unenv.mjs";


import "./_libs/seroval-plugins.mjs";


import "./_libs/react-dom.mjs";
import "./_libs/isbot.mjs";
import "./_libs/tanstack__query-core.mjs";
import "./_libs/tanstack__react-query.mjs";
import "./_libs/clsx.mjs";
import "./_libs/tailwind-merge.mjs";
import "./_libs/zod.mjs";
import "./_ssr/Button-B92Yl16p.mjs";
import "./_ssr/StepIndicator-C52LiouO.mjs";
import "./_ssr/Input-DkwuDyVZ.mjs";
import "./_ssr/DatePicker-CJAMdAK9.mjs";
import "./_ssr/PhoneInput-D45tounx.mjs";
import "./_ssr/Checkbox-CgTT_66V.mjs";
import "./_ssr/FileUpload-Kqoemt1c.mjs";
import "./_ssr/ai-Cs4yquvb.mjs";
import "./_ssr/AiBadge-CDW3a6Ir.mjs";
import "./_ssr/Badge-BQrIKnVV.mjs";
const STEPS = [{
  id: "personal",
  label: "Personal info"
}, {
  id: "professional",
  label: "Professional info"
}, {
  id: "compensation",
  label: "Compensation"
}, {
  id: "documents",
  label: "Documents"
}, {
  id: "access",
  label: "Access & review"
}];
function EditEmployeePage() {
  const {
    employeeId
  } = useParams({
    from: "/_app/employees/$employeeId/edit"
  });
  const navigate = useNavigate();
  const [employee, setEmployee] = reactExports.useState(null);
  const [draft, setDraft] = reactExports.useState(null);
  const [step, setStep] = reactExports.useState(0);
  const [errors, setErrors] = reactExports.useState({});
  const [submitting, setSubmitting] = reactExports.useState(false);
  const [err, setErr] = reactExports.useState(null);
  const [departments, setDepartments] = reactExports.useState([]);
  const [designations, setDesignations] = reactExports.useState([]);
  const [employees, setEmployees] = reactExports.useState([]);
  reactExports.useEffect(() => {
    void Promise.all([getEmployee(employeeId), settingsApi.listDepartments(), settingsApi.listDesignations(), listEmployees()]).then(([r, d, dz, em]) => {
      if (r.data) {
        setEmployee(r.data);
        setDraft({
          ...r.data,
          bankAccountConfirm: r.data.bankAccountNumber
        });
      }
      if (d.data) setDepartments(d.data);
      if (dz.data) setDesignations(dz.data);
      if (em.data) setEmployees(em.data.filter((e) => e.id !== employeeId));
    });
  }, [employeeId]);
  if (!employee || !draft) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 28 }) });
  const onChange = (patch) => setDraft((d) => d ? {
    ...d,
    ...patch
  } : d);
  const onSubmit = async () => {
    const e = step === 0 ? validatePersonal(draft) : step === 1 ? validateProfessional(draft) : step === 2 ? validateCompensation(draft) : {};
    setErrors(e);
    if (Object.keys(e).length) return;
    setSubmitting(true);
    setErr(null);
    const {
      bankAccountConfirm,
      sendCredentials,
      ...rest
    } = draft;
    const r = await updateEmployee(employee.id, rest, "HR Admin", "Profile edited from full edit page.");
    setSubmitting(false);
    if (r.error || !r.data) {
      setErr(r.error?.message ?? "Failed to save");
      return;
    }
    showToast("Profile updated.", "success");
    navigate({
      to: "/employees/$employeeId",
      params: {
        employeeId: employee.id
      }
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 max-w-4xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumb, { items: [{
      label: "Employees",
      to: "/employees"
    }, {
      label: `${employee.firstName} ${employee.lastName}`,
      to: `/employees/${employee.id}`
    }, {
      label: "Edit"
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-[28px] font-bold tracking-[-0.02em]", children: [
      "Edit ",
      employee.firstName,
      " ",
      employee.lastName
    ] }),
    err && /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { variant: "error", children: err }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 flex-wrap mb-2", children: STEPS.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setStep(i), className: "text-[12px] px-3 py-1 rounded-full border " + (i === step ? "bg-[#0A0A0A] text-white border-[#0A0A0A]" : "border-[#E5E5E3] text-[#6B6B6B] hover:bg-[#F2F2F0]"), children: s.label }, s.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(StepForm, { steps: STEPS, currentStep: step, onBack: () => setStep((s) => Math.max(0, s - 1)), onContinue: () => setStep((s) => Math.min(STEPS.length - 1, s + 1)), onSubmit, submitLabel: "Save changes →", isSubmitting: submitting, children: [
      step === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(StepPersonal, { draft, errors, onChange }),
      step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(StepProfessional, { draft, errors, onChange, employees, departments, designations, generatedCode: draft.employeeCode ?? "", generatedWorkEmail: draft.workEmail ?? "" }),
      step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsx(StepCompensation, { draft, errors, onChange }),
      step === 3 && /* @__PURE__ */ jsxRuntimeExports.jsx(StepDocuments, { draft, onChange }),
      step === 4 && /* @__PURE__ */ jsxRuntimeExports.jsx(StepAccessReview, { draft, onChange, departments, designations, onJumpTo: setStep })
    ] })
  ] });
}
export {
  EditEmployeePage as component
};
