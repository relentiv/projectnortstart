import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { B as Button } from "./Button-B92Yl16p.mjs";
import { S as StepIndicator } from "./StepIndicator-C52LiouO.mjs";
import { I as Input } from "./Input-DkwuDyVZ.mjs";
import { D as DatePicker } from "./DatePicker-CJAMdAK9.mjs";
import { P as PhoneInput } from "./PhoneInput-D45tounx.mjs";
import { C as Checkbox } from "./Checkbox-CgTT_66V.mjs";
import { F as FileUpload } from "./FileUpload-Kqoemt1c.mjs";
import { S as Spinner } from "./router-LFebWAoY.mjs";
import { e as extractOcrFields } from "./ai-Cs4yquvb.mjs";
import { A as AiBadge } from "./AiBadge-CDW3a6Ir.mjs";
import { B as Badge } from "./Badge-BQrIKnVV.mjs";
function StepForm({
  steps,
  currentStep,
  onBack,
  onContinue,
  onSubmit,
  submitLabel = "Submit",
  isSubmitting,
  continueDisabled,
  children
}) {
  const isLast = currentStep === steps.length - 1;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(StepIndicator, { steps: steps.map((s) => s.label), currentStep }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-center justify-between border-t border-[#E5E5E3] pt-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: currentStep > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: onBack, disabled: isSubmitting, children: "← Back" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: isLast ? /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", onClick: onSubmit, loading: isSubmitting, disabled: continueDisabled, children: submitLabel }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", onClick: onContinue, disabled: continueDisabled, children: "Continue →" }) })
    ] })
  ] });
}
function OcrFieldDiffRow({ field, formValue, applicable, onApply, onKeepFormValue, applied }) {
  const hasConflict = applicable && !!formValue && formValue.trim() !== "" && formValue.trim() !== field.extractedValue.trim();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-sm border border-[#E5E5E3] bg-[#FAFAF8] p-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-[#0A0A0A]", children: field.fieldLabel }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        field.confidence === "low" && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "default", className: "border border-[#F59E0B] text-[#B45309] bg-transparent", children: "Verify this" }),
        applied && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "success", children: "Applied" })
      ] })
    ] }),
    hasConflict ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 grid grid-cols-2 gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-sm border border-[#E5E5E3] bg-white p-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] uppercase tracking-[0.06em] text-[#6B6B6B]", children: "Form value" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#0A0A0A] mt-0.5", children: formValue }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "secondary", className: "mt-2", onClick: onKeepFormValue, children: "Keep form value" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-sm border border-[#E5E5E3] bg-white p-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] uppercase tracking-[0.06em] text-[#6B6B6B]", children: "Document value" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#0A0A0A] mt-0.5", children: field.extractedValue }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "secondary", className: "mt-2", onClick: onApply, disabled: applied, children: "Use document value" })
      ] })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex items-center justify-between gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#3F3F46]", children: field.extractedValue }),
      applicable && field.confidence === "low" && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "secondary", onClick: onApply, disabled: applied, children: "Apply" })
    ] })
  ] });
}
const FIELD_TARGET_MAP = {
  dob: "dateOfBirth",
  aadhaar_no: "aadhaarNumber",
  pan_no: "panNumber"
};
function OcrExtractedFieldsReview({ documentType, triggerKey, formValues, onApplyFields }) {
  const [status, setStatus] = reactExports.useState("loading");
  const [fields, setFields] = reactExports.useState([]);
  const [appliedKeys, setAppliedKeys] = reactExports.useState(/* @__PURE__ */ new Set());
  const [batchApplied, setBatchApplied] = reactExports.useState(false);
  reactExports.useEffect(() => {
    let alive = true;
    setStatus("loading");
    setAppliedKeys(/* @__PURE__ */ new Set());
    setBatchApplied(false);
    void extractOcrFields(documentType).then((r) => {
      if (!alive) return;
      if (r.error || !r.data) {
        setStatus("error");
        return;
      }
      setFields(r.data.fields);
      setStatus("success");
    }).catch(() => alive && setStatus("error"));
    return () => {
      alive = false;
    };
  }, [documentType, triggerKey]);
  if (status === "loading") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[13px] text-[#6B6B6B] flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 14 }),
      " Reading document…"
    ] });
  }
  if (status === "error") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#6B6B6B]", children: "Couldn't read this document automatically. Please fill the fields manually below." });
  }
  const target = (f) => FIELD_TARGET_MAP[f.fieldKey];
  const applicableFields = fields.filter((f) => !!target(f));
  const isEmptyOnForm = (f) => !formValues[target(f)] || formValues[target(f)].trim() === "";
  const isConflict = (f) => {
    const key = target(f);
    const v = formValues[key];
    return !!v && v.trim() !== "" && v.trim() !== f.extractedValue.trim();
  };
  const batchable = applicableFields.filter((f) => f.confidence === "high" && isEmptyOnForm(f) && !appliedKeys.has(target(f)));
  const applyOne = (f) => {
    const key = target(f);
    onApplyFields({ [key]: f.extractedValue });
    setAppliedKeys((s) => new Set(s).add(key));
  };
  const applyAll = () => {
    const patch = {};
    for (const f of batchable) patch[target(f)] = f.extractedValue;
    onApplyFields(patch);
    setAppliedKeys((s) => {
      const next = new Set(s);
      batchable.forEach((f) => next.add(target(f)));
      return next;
    });
    setBatchApplied(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-[#E5E5E3] bg-white p-3 space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AiBadge, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-[#0A0A0A]", children: "Fields detected from this document" })
      ] }),
      batchable.length > 0 && !batchApplied && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "secondary", onClick: applyAll, children: "Apply all →" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: fields.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      OcrFieldDiffRow,
      {
        field: f,
        formValue: target(f) ? formValues[target(f)] : void 0,
        applicable: !!target(f),
        applied: target(f) ? appliedKeys.has(target(f)) : false,
        onApply: () => applyOne(f),
        onKeepFormValue: () => setAppliedKeys((s) => new Set(s).add(target(f)))
      },
      f.fieldKey
    )) }),
    applicableFields.some(isConflict) && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-[#6B6B6B]", children: "Some detected values differ from what's already on this form — choose which to keep above." })
  ] });
}
function StepPersonal({ draft, errors, onChange }) {
  const ca = draft.currentAddress;
  const pa = draft.permanentAddress;
  const set = (k, v) => onChange({ [k]: v });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[13px] font-semibold text-[#0A0A0A] mb-3", children: "Personal details" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "First name", value: draft.firstName ?? "", onChange: (e) => set("firstName", e.target.value), error: errors.firstName }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Middle name", value: draft.middleName ?? "", onChange: (e) => set("middleName", e.target.value) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Last name", value: draft.lastName ?? "", onChange: (e) => set("lastName", e.target.value), error: errors.lastName }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "email", label: "Personal email", value: draft.personalEmail ?? "", onChange: (e) => set("personalEmail", e.target.value), error: errors.personalEmail }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PhoneInput, { label: "Phone number", value: draft.phone ?? "", onChange: (v) => set("phone", v), error: errors.phone }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DatePicker, { label: "Date of birth", value: draft.dateOfBirth ?? "", onChange: (v) => set("dateOfBirth", v), maxDate: new Date(Date.now() - 18 * 365 * 864e5).toISOString().slice(0, 10) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Blood group", value: draft.bloodGroup ?? "", onChange: (e) => set("bloodGroup", e.target.value) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Nationality", value: draft.nationality ?? "", onChange: (e) => set("nationality", e.target.value) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[13px] font-semibold text-[#0A0A0A] mb-3", children: "Emergency contact" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Name", value: draft.emergencyContact?.name ?? "", onChange: (e) => set("emergencyContact", { ...draft.emergencyContact, name: e.target.value }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Relationship", value: draft.emergencyContact?.relationship ?? "", onChange: (e) => set("emergencyContact", { ...draft.emergencyContact, relationship: e.target.value }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PhoneInput, { label: "Phone", value: draft.emergencyContact?.phone ?? "", onChange: (v) => set("emergencyContact", { ...draft.emergencyContact, phone: v }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[13px] font-semibold text-[#0A0A0A] mb-3", children: "Current address" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Address line 1", value: ca.line1, onChange: (e) => set("currentAddress", { ...ca, line1: e.target.value }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Address line 2", value: ca.line2 ?? "", onChange: (e) => set("currentAddress", { ...ca, line2: e.target.value }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "City", value: ca.city, onChange: (e) => set("currentAddress", { ...ca, city: e.target.value }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "State", value: ca.state, onChange: (e) => set("currentAddress", { ...ca, state: e.target.value }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Pincode", value: ca.pincode, onChange: (e) => set("currentAddress", { ...ca, pincode: e.target.value }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Country", value: ca.country, onChange: (e) => set("currentAddress", { ...ca, country: e.target.value }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Checkbox,
        {
          label: "Permanent address is same as current",
          checked: !!draft.sameAddress,
          onChange: (e) => set("sameAddress", e.target.checked)
        }
      ) }),
      !draft.sameAddress && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 mt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Permanent line 1", value: pa?.line1 ?? "", onChange: (e) => set("permanentAddress", { ...pa ?? { line1: "", city: "", state: "", pincode: "", country: "India" }, line1: e.target.value }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Permanent city", value: pa?.city ?? "", onChange: (e) => set("permanentAddress", { ...pa ?? { line1: "", city: "", state: "", pincode: "", country: "India" }, city: e.target.value }) })
      ] })
    ] })
  ] });
}
function validatePersonal(d) {
  const e = {};
  if (!d.firstName?.trim()) e.firstName = "Required";
  if (!d.lastName?.trim()) e.lastName = "Required";
  if (!d.personalEmail?.includes("@")) e.personalEmail = "Valid email required";
  if (!d.phone || d.phone.replace(/\D/g, "").length < 7) e.phone = "Valid phone required";
  return e;
}
function StepProfessional({ draft, errors, onChange, employees, departments, designations, generatedCode, generatedWorkEmail }) {
  const filteredDesigs = draft.departmentId ? designations.filter((d) => d.departmentIds.includes(draft.departmentId)) : designations;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Employee code", value: draft.employeeCode ?? generatedCode, onChange: (e) => onChange({ employeeCode: e.target.value }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Work email", value: draft.workEmail ?? generatedWorkEmail, onChange: (e) => onChange({ workEmail: e.target.value }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "mb-1.5 block text-[13px] font-medium text-[#0A0A0A]", children: [
          "Department ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#DC2626]", children: "*" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: draft.departmentId ?? "", onChange: (e) => onChange({ departmentId: e.target.value, designationId: void 0 }), className: "w-full h-11 px-3 rounded-md border border-[#E5E5E3] bg-white text-[14px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select department" }),
          departments.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: d.id, children: d.name }, d.id))
        ] }),
        errors.departmentId && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-[13px] text-[#DC2626]", children: errors.departmentId })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "mb-1.5 block text-[13px] font-medium text-[#0A0A0A]", children: [
          "Designation ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#DC2626]", children: "*" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: draft.designationId ?? "", onChange: (e) => {
          const dz = filteredDesigs.find((d) => d.id === e.target.value);
          onChange({ designationId: e.target.value, grade: dz?.grade });
        }, className: "w-full h-11 px-3 rounded-md border border-[#E5E5E3] bg-white text-[14px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select designation" }),
          filteredDesigs.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: d.id, children: d.name }, d.id))
        ] }),
        errors.designationId && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-[13px] text-[#DC2626]", children: errors.designationId })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Grade / Band", value: draft.grade ?? "", onChange: (e) => onChange({ grade: e.target.value }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-1.5 block text-[13px] font-medium text-[#0A0A0A]", children: "Reporting manager" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: draft.reportingManagerId ?? "", onChange: (e) => onChange({ reportingManagerId: e.target.value || void 0 }), className: "w-full h-11 px-3 rounded-md border border-[#E5E5E3] bg-white text-[14px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "None" }),
          employees.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: e.id, children: [
            e.firstName,
            " ",
            e.lastName,
            " (",
            e.employeeCode,
            ")"
          ] }, e.id))
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "mb-1.5 block text-[13px] font-medium text-[#0A0A0A]", children: [
          "Employment type ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#DC2626]", children: "*" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: draft.employmentType ?? "full_time", onChange: (e) => onChange({ employmentType: e.target.value }), className: "w-full h-11 px-3 rounded-md border border-[#E5E5E3] bg-white text-[14px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "full_time", children: "Full-time" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "part_time", children: "Part-time" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "contract", children: "Contract" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "intern", children: "Intern" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Work location", value: draft.workLocation ?? "", onChange: (e) => onChange({ workLocation: e.target.value }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DatePicker, { label: "Date of joining", required: true, value: draft.dateOfJoining ?? "", onChange: (v) => onChange({ dateOfJoining: v, probationEndDate: new Date(new Date(v).getTime() + 90 * 864e5).toISOString().slice(0, 10) }), error: errors.dateOfJoining }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DatePicker, { label: "Probation end date", value: draft.probationEndDate ?? "", onChange: (v) => onChange({ probationEndDate: v }) })
    ] })
  ] });
}
function validateProfessional(d) {
  const e = {};
  if (!d.departmentId) e.departmentId = "Required";
  if (!d.designationId) e.designationId = "Required";
  if (!d.dateOfJoining) e.dateOfJoining = "Required";
  return e;
}
function maskAadhaar(v) {
  const digits = v.replace(/\D/g, "").slice(0, 12);
  return digits.replace(/(\d{4})(\d{4})(\d{0,4})/, (_m, a, b, c) => [a, b, c].filter(Boolean).join(" "));
}
function StepCompensation({ draft, errors, onChange }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          label: "Annual CTC (₹)",
          type: "number",
          value: draft.ctcAnnual ? String(draft.ctcAnnual) : "",
          onChange: (e) => onChange({ ctcAnnual: e.target.value ? Number(e.target.value) : void 0 })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Payment mode", value: "Bank transfer", disabled: true })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Bank name", value: draft.bankName ?? "", onChange: (e) => onChange({ bankName: e.target.value }), error: errors.bankName }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "IFSC code", value: draft.bankIfsc ?? "", onChange: (e) => onChange({ bankIfsc: e.target.value.toUpperCase() }), error: errors.bankIfsc }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Bank account number", value: draft.bankAccountNumber ?? "", onChange: (e) => onChange({ bankAccountNumber: e.target.value }), error: errors.bankAccountNumber }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Confirm account number", value: draft.bankAccountConfirm ?? "", onChange: (e) => onChange({ bankAccountConfirm: e.target.value }), error: errors.bankAccountConfirm }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "PAN number", value: draft.panNumber ?? "", onChange: (e) => onChange({ panNumber: e.target.value.toUpperCase() }), error: errors.panNumber }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Aadhaar number", value: draft.aadhaarNumber ?? "", onChange: (e) => onChange({ aadhaarNumber: maskAadhaar(e.target.value) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-[#6B6B6B] bg-[#FAFAF8] border border-[#E5E5E3] rounded-sm px-3 py-2", children: "This information is used for payroll processing. It is encrypted and only accessible to authorised HR and Finance personnel." })
  ] });
}
function validateCompensation(d) {
  const e = {};
  if (!d.bankName) e.bankName = "Required";
  if (!d.bankIfsc) e.bankIfsc = "Required";
  if (!d.bankAccountNumber) e.bankAccountNumber = "Required";
  if (d.bankAccountConfirm !== d.bankAccountNumber) e.bankAccountConfirm = "Does not match";
  if (d.panNumber && !/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(d.panNumber)) e.panNumber = "Format: ABCDE1234F";
  return e;
}
const OCR_ELIGIBLE = ["aadhaar", "pan", "passport"];
const SLOTS = [
  { type: "aadhaar", label: "Aadhaar Card", required: true },
  { type: "pan", label: "PAN Card", required: true },
  { type: "passport", label: "Passport", required: false },
  { type: "education_certificate", label: "Education Certificate", required: false },
  { type: "previous_experience", label: "Previous Experience Letter", required: false }
];
function StepDocuments({ draft, onChange }) {
  const docs = reactExports.useMemo(() => draft.documents ?? [], [draft.documents]);
  const [ocrTrigger, setOcrTrigger] = reactExports.useState({});
  const setDoc = (type, file, label) => {
    const others = docs.filter((d) => d.type !== type);
    if (!file) return onChange({ documents: others });
    const next = {
      id: type + "_" + Date.now(),
      type,
      label,
      status: "uploaded",
      fileName: file.name,
      uploadedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    onChange({ documents: [...others, next] });
    if (OCR_ELIGIBLE.includes(type)) {
      setOcrTrigger((s) => ({ ...s, [type]: Date.now() }));
    }
  };
  const missingRequired = SLOTS.filter((s) => s.required && !docs.some((d) => d.type === s.type)).length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    SLOTS.map((s) => {
      const existing = docs.find((d) => d.type === s.type);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-[#E5E5E3] bg-white p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[14px] font-medium text-[#0A0A0A]", children: [
          s.label,
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.08em] ml-2 " + (s.required ? "text-[#DC2626]" : "text-[#6B6B6B]"), children: s.required ? "Required" : "Optional" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          FileUpload,
          {
            onFileSelect: (f) => setDoc(s.type, f, s.label),
            onFileRemove: () => setDoc(s.type, null, s.label),
            currentFile: existing?.fileName ? { name: existing.fileName, sizeKB: 120 } : null
          }
        ),
        existing && OCR_ELIGIBLE.includes(s.type) && ocrTrigger[s.type] && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          OcrExtractedFieldsReview,
          {
            documentType: s.type,
            triggerKey: ocrTrigger[s.type],
            formValues: { dateOfBirth: draft.dateOfBirth, aadhaarNumber: draft.aadhaarNumber, panNumber: draft.panNumber },
            onApplyFields: (patch) => onChange(patch)
          }
        ) })
      ] }, s.type);
    }),
    missingRequired > 0 && draft.employmentType === "full_time" && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[12px] text-[#92400E] bg-[#FEF3C7] rounded-sm px-3 py-2", children: [
      missingRequired,
      " required document",
      missingRequired > 1 ? "s" : "",
      " missing. Aadhaar and PAN are required for full-time employees."
    ] })
  ] });
}
function validateDocuments(d) {
  const e = {};
  if (d.employmentType === "full_time") {
    const types = new Set((d.documents ?? []).map((x) => x.type));
    if (!types.has("aadhaar")) e.aadhaar = "Aadhaar required";
    if (!types.has("pan")) e.pan = "PAN required";
  }
  return e;
}
function StepAccessReview({ draft, onChange, departments, designations, onJumpTo }) {
  const dept = departments.find((d) => d.id === draft.departmentId)?.name ?? "—";
  const desig = designations.find((d) => d.id === draft.designationId)?.name ?? "—";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[13px] font-semibold text-[#0A0A0A] mb-3", children: "Access" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] uppercase tracking-[0.08em] text-[#6B6B6B]", children: "Work email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px]", children: draft.workEmail ?? "—" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-1.5 block text-[13px] font-medium text-[#0A0A0A]", children: "Role" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: draft.role ?? "employee", onChange: (e) => onChange({ role: e.target.value }), className: "w-full h-11 px-3 rounded-md border border-[#E5E5E3] bg-white text-[14px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "employee", children: "Employee" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "manager", children: "Manager" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "hr_admin", children: "HR Admin" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { label: "Send login credentials to work email", checked: !!draft.sendCredentials, onChange: (e) => onChange({ sendCredentials: e.target.checked }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-md border border-[#E5E5E3] bg-[#FAFAF8] p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[13px] font-semibold text-[#0A0A0A] mb-3", children: "Review" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "space-y-2 text-[13px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Name", value: `${draft.firstName ?? ""} ${draft.lastName ?? ""}`.trim() || "—", onEdit: () => onJumpTo(0) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Employee code", value: draft.employeeCode ?? "—" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Department", value: dept, onEdit: () => onJumpTo(1) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Designation", value: desig, onEdit: () => onJumpTo(1) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Employment type", value: draft.employmentType ?? "—", onEdit: () => onJumpTo(1) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Joining date", value: draft.dateOfJoining ?? "—" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "CTC", value: draft.ctcAnnual ? `₹${draft.ctcAnnual.toLocaleString("en-IN")} / year` : "—", onEdit: () => onJumpTo(2) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Documents", value: `${draft.documents?.length ?? 0} uploaded`, onEdit: () => onJumpTo(3) })
      ] })
    ] })
  ] });
}
function Row({ label, value, onEdit }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 border-b border-[#E5E5E3] last:border-0 pb-1.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#6B6B6B]", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[#0A0A0A] flex items-center gap-2", children: [
      value,
      onEdit && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: onEdit, className: "text-[11px] text-[var(--tenant-primary)] hover:underline", children: "Edit" })
    ] })
  ] });
}
export {
  StepForm as S,
  StepPersonal as a,
  StepProfessional as b,
  StepCompensation as c,
  StepDocuments as d,
  StepAccessReview as e,
  validateProfessional as f,
  validateCompensation as g,
  validateDocuments as h,
  validatePersonal as v
};
