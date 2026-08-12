import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { d as useNavigate } from "./_libs/tanstack__react-router.mjs";
import { A as Alert } from "./_ssr/Alert-DIhou9mC.mjs";
import { B as Breadcrumb } from "./_ssr/Breadcrumb-eir09VHE.mjs";
import { s as showToast } from "./_ssr/Toast-DlQQlIf6.mjs";
import { S as StepForm, a as StepPersonal, b as StepProfessional, c as StepCompensation, d as StepDocuments, e as StepAccessReview, v as validatePersonal, f as validateProfessional, g as validateCompensation, h as validateDocuments } from "./_ssr/StepAccessReview-Cr3184qh.mjs";
import { s as settingsApi, l as listEmployees, W as nextEmployeeCode, X as createEmployee } from "./_ssr/router-Arl77cRa.mjs";
import { t as tenantStore } from "./_ssr/tenant-DWe0InGL.mjs";

import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval.mjs";
import "./_libs/unenv.mjs";


import "./_libs/seroval-plugins.mjs";


import "./_libs/react-dom.mjs";
import "./_libs/isbot.mjs";
import "./_ssr/Button-Crtgy6Xx.mjs";
import "./_ssr/StepIndicator-D128JVPB.mjs";
import "./_ssr/Input-CHeJoRlX.mjs";
import "./_ssr/DatePicker-GAit8DxM.mjs";
import "./_ssr/PhoneInput-D8qcNOA-.mjs";
import "./_ssr/Checkbox-JVDCHRr9.mjs";
import "./_ssr/FileUpload-GznQ7qkH.mjs";
import "./_ssr/ai-wwVHtzhQ.mjs";
import "./_ssr/AiBadge-BWGWOCRE.mjs";
import "./_ssr/Badge-Cm1DzmgP.mjs";
import "./_libs/tanstack__query-core.mjs";
import "./_libs/tanstack__react-query.mjs";
import "./_libs/clsx.mjs";
import "./_libs/tailwind-merge.mjs";
import "./_libs/zod.mjs";
import "./_ssr/defaults-CvUaCo6_.mjs";
const EMPTY_DRAFT = {
  firstName: "",
  lastName: "",
  personalEmail: "",
  workEmail: "",
  phone: "",
  currentAddress: { line1: "", city: "", state: "", pincode: "", country: "India" },
  sameAddress: true,
  emergencyContact: { name: "", relationship: "", phone: "" },
  employmentType: "full_time",
  employmentStatus: "active",
  dateOfJoining: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
  role: "employee",
  sendCredentials: true,
  documents: []
};
const DRAFT_KEY = "hrms.newEmployee.draft";
const STEP_KEY = "hrms.newEmployee.step";
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
function NewEmployeePage() {
  const navigate = useNavigate();
  const tenant = tenantStore.useSelector((s) => s.tenant);
  const [draft, setDraft] = reactExports.useState(EMPTY_DRAFT);
  const [step, setStep] = reactExports.useState(0);
  const [errors, setErrors] = reactExports.useState({});
  const [submitErr, setSubmitErr] = reactExports.useState(null);
  const [submitting, setSubmitting] = reactExports.useState(false);
  const [departments, setDepartments] = reactExports.useState([]);
  const [designations, setDesignations] = reactExports.useState([]);
  const [employees, setEmployees] = reactExports.useState([]);
  const [generatedCode, setGeneratedCode] = reactExports.useState("EMP-0001");
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    const sd = window.sessionStorage.getItem(DRAFT_KEY);
    const ss = window.sessionStorage.getItem(STEP_KEY);
    if (sd) try {
      setDraft({
        ...EMPTY_DRAFT,
        ...JSON.parse(sd)
      });
    } catch {
    }
    if (ss) setStep(Number(ss) || 0);
  }, []);
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    window.sessionStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
    window.sessionStorage.setItem(STEP_KEY, String(step));
  }, [draft, step]);
  reactExports.useEffect(() => {
    void Promise.all([settingsApi.listDepartments(), settingsApi.listDesignations(), listEmployees(), nextEmployeeCode()]).then(([d, dz, em, code]) => {
      if (d.data) setDepartments(d.data);
      if (dz.data) setDesignations(dz.data);
      if (em.data) setEmployees(em.data);
      setGeneratedCode(code);
    });
  }, []);
  const generatedWorkEmail = reactExports.useMemo(() => {
    const domain = (tenant?.settings.domain ?? "company.com").replace(/^https?:\/\//, "");
    const slug = `${(draft.firstName ?? "").toLowerCase()}.${(draft.lastName ?? "").toLowerCase()}`.replace(/[^a-z.]/g, "");
    return slug ? `${slug}@${domain}` : "";
  }, [draft.firstName, draft.lastName, tenant]);
  const onChange = (patch) => setDraft((d) => ({
    ...d,
    ...patch
  }));
  const validateCurrent = () => {
    if (step === 0) return validatePersonal(draft);
    if (step === 1) return validateProfessional(draft);
    if (step === 2) return validateCompensation(draft);
    if (step === 3) return validateDocuments(draft);
    return {};
  };
  const onContinue = () => {
    const e = validateCurrent();
    setErrors(e);
    if (Object.keys(e).length === 0) setStep((s) => Math.min(STEPS.length - 1, s + 1));
  };
  const onSubmit = async () => {
    const e = validateCurrent();
    setErrors(e);
    if (Object.keys(e).length) return;
    setSubmitting(true);
    setSubmitErr(null);
    const finalDraft = {
      ...draft,
      employeeCode: draft.employeeCode ?? generatedCode,
      workEmail: draft.workEmail ?? generatedWorkEmail
    };
    const res = await createEmployee(finalDraft);
    setSubmitting(false);
    if (res.error || !res.data) {
      setSubmitErr(res.error?.message ?? "Failed to create employee");
      return;
    }
    if (typeof window !== "undefined") {
      window.sessionStorage.removeItem(DRAFT_KEY);
      window.sessionStorage.removeItem(STEP_KEY);
    }
    showToast(`${res.data.firstName} ${res.data.lastName} added successfully.`, "success");
    navigate({
      to: "/employees/$employeeId",
      params: {
        employeeId: res.data.id
      }
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 max-w-4xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumb, { items: [{
      label: "Employees",
      to: "/employees"
    }, {
      label: "Add employee"
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-[28px] font-bold tracking-[-0.02em]", children: "Add employee" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[14px] text-[#6B6B6B]", children: "Five guided steps. Progress is saved as you go." })
    ] }),
    submitErr && /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { variant: "error", children: submitErr }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(StepForm, { steps: STEPS, currentStep: step, onBack: () => setStep((s) => Math.max(0, s - 1)), onContinue, onSubmit, submitLabel: "Create employee →", isSubmitting: submitting, children: [
      step === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(StepPersonal, { draft, errors, onChange }),
      step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(StepProfessional, { draft, errors, onChange, employees, departments, designations, generatedCode, generatedWorkEmail }),
      step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsx(StepCompensation, { draft, errors, onChange }),
      step === 3 && /* @__PURE__ */ jsxRuntimeExports.jsx(StepDocuments, { draft, onChange }),
      step === 4 && /* @__PURE__ */ jsxRuntimeExports.jsx(StepAccessReview, { draft, onChange, departments, designations, onJumpTo: setStep })
    ] })
  ] });
}
export {
  NewEmployeePage as component
};
