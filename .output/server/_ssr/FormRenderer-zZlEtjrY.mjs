import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as Alert } from "./Alert-DIhou9mC.mjs";
import { g as getVisibleFields, i as isFieldRequired, v as validateStep, a as validateField } from "./formConditions-CF1AFMuj.mjs";
import { c as cn } from "./router-Arl77cRa.mjs";
import { I as Input } from "./Input-CHeJoRlX.mjs";
import { T as Textarea } from "./Textarea-DXR3KTuM.mjs";
import { P as PhoneInput } from "./PhoneInput-D8qcNOA-.mjs";
import { D as DatePicker } from "./DatePicker-GAit8DxM.mjs";
import { T as TimePicker } from "./TimePicker-UTFoibMP.mjs";
import { C as Checkbox } from "./Checkbox-JVDCHRr9.mjs";
import { R as RadioGroup } from "./RadioGroup-Dl_ThJE1.mjs";
import { S as Select } from "./Select-Bg687n3T.mjs";
import { M as MultiSelect } from "./MultiSelect-TfWZYelZ.mjs";
import { F as FileUpload } from "./FileUpload-GznQ7qkH.mjs";
import { B as Button } from "./Button-Crtgy6Xx.mjs";
import { uuid } from "./localStorage-DOek0dff.mjs";
import { P as ProgressBar } from "./ProgressBar-DzmeKi_t.mjs";
function ShortTextField({ field, value, onChange, disabled }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Input,
    {
      value: value ?? "",
      placeholder: field.placeholder,
      disabled,
      onChange: (e) => onChange(e.target.value)
    }
  );
}
function LongTextField({ field, value, onChange, disabled }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Textarea,
    {
      value: value ?? "",
      placeholder: field.placeholder,
      rows: field.rows ?? 4,
      disabled,
      onChange: (e) => onChange(e.target.value)
    }
  );
}
function EmailField({ field, value, onChange, disabled }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Input,
    {
      type: "email",
      value: value ?? "",
      placeholder: field.placeholder ?? "name@example.com",
      disabled,
      onChange: (e) => onChange(e.target.value)
    }
  );
}
function PhoneField({ value, onChange }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PhoneInput, { value: value ?? "", onChange });
}
function NumberField({ field, value, onChange, disabled }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Input,
    {
      type: "number",
      value: value ?? "",
      placeholder: field.placeholder,
      disabled,
      onChange: (e) => onChange(e.target.value === "" ? "" : Number(e.target.value))
    }
  );
}
function DateField({ field, value, onChange }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    DatePicker,
    {
      value: value ?? "",
      onChange,
      minDate: field.minDate,
      maxDate: field.maxDate
    }
  );
}
function TimeField({ value, onChange, disabled }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TimePicker, { value: value ?? "", onChange, disabled });
}
function CheckboxGroupField({ field, value, onChange, disabled }) {
  const selected = Array.isArray(value) ? value : [];
  const toggle = (v) => {
    onChange(selected.includes(v) ? selected.filter((x) => x !== v) : [...selected, v]);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: (field.options ?? []).map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    Checkbox,
    {
      label: opt.label,
      checked: selected.includes(opt.value),
      disabled,
      onChange: () => toggle(opt.value)
    },
    opt.id
  )) });
}
function RadioField({ field, value, onChange }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    RadioGroup,
    {
      options: (field.options ?? []).map((o) => ({ value: o.value, label: o.label })),
      value: value ?? "",
      onChange
    }
  );
}
function DropdownField({ field, value, onChange, disabled }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Select,
    {
      value: value ?? "",
      disabled,
      placeholder: field.placeholder ?? "Select…",
      options: (field.options ?? []).map((o) => ({ value: o.value, label: o.label })),
      onChange: (e) => onChange(e.target.value)
    }
  );
}
function MultiSelectField({ field, value, onChange }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    MultiSelect,
    {
      options: (field.options ?? []).map((o) => ({ value: o.value, label: o.label })),
      value: Array.isArray(value) ? value : [],
      onChange
    }
  );
}
function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
function FileUploadField({ field, value, onChange, error, disabled }) {
  const files = Array.isArray(value) ? value : [];
  const maxFiles = field.maxFiles ?? 1;
  const accept = field.acceptedFileTypes?.length ? field.acceptedFileTypes.map((t) => `.${t}`).join(",") : void 0;
  const handleSelect = async (file) => {
    const dataUrl = await fileToDataUrl(file);
    const next = { name: file.name, sizeKB: Math.round(file.size / 1024), dataUrl };
    onChange(maxFiles === 1 ? [next] : [...files, next]);
  };
  const handleRemove = (idx) => {
    onChange(files.filter((_, i) => i !== idx));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
    files.map((f, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 rounded-md border border-[#E5E5E3] bg-[#FAFAF8] px-3 py-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, className: "text-[#16A34A]", children: "✓" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] truncate text-[#0A0A0A]", children: f.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[12px] text-[#6B6B6B] shrink-0", children: [
          f.sizeKB,
          " KB"
        ] })
      ] }),
      !disabled && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => handleRemove(idx), className: "text-[12px] text-[#DC2626] hover:underline", children: "Remove" })
    ] }, idx)),
    !disabled && files.length < maxFiles && /* @__PURE__ */ jsxRuntimeExports.jsx(
      FileUpload,
      {
        accept,
        maxSizeMB: field.maxFileSizeMB,
        onFileSelect: handleSelect,
        error
      }
    )
  ] });
}
function SignatureField({ value, onChange, disabled }) {
  const canvasRef = reactExports.useRef(null);
  const [drawing, setDrawing] = reactExports.useState(false);
  const hasValue = typeof value === "string" && value.length > 0;
  reactExports.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !hasValue) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const img = new Image();
    img.onload = () => ctx.drawImage(img, 0, 0);
    img.src = value;
  }, [hasValue, value]);
  const getPos = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };
  const onPointerDown = (e) => {
    if (disabled) return;
    setDrawing(true);
    const ctx = canvasRef.current?.getContext("2d");
    const { x, y } = getPos(e);
    ctx?.beginPath();
    ctx?.moveTo(x, y);
  };
  const onPointerMove = (e) => {
    if (!drawing || disabled) return;
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    const { x, y } = getPos(e);
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#0A0A0A";
    ctx.lineTo(x, y);
    ctx.stroke();
  };
  const onPointerUp = () => {
    if (!drawing) return;
    setDrawing(false);
    const canvas = canvasRef.current;
    if (canvas) onChange(canvas.toDataURL("image/png"));
  };
  const clear = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (canvas && ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
    onChange(null);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "canvas",
      {
        ref: canvasRef,
        width: 480,
        height: 160,
        className: "w-full max-w-full touch-none rounded-md border border-[#E5E5E3] bg-white",
        onPointerDown,
        onPointerMove,
        onPointerUp,
        onPointerLeave: onPointerUp
      }
    ),
    !disabled && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "ghost", size: "sm", className: "mt-2", onClick: clear, children: "Clear signature" })
  ] });
}
const COMPONENT_LABELS = {
  line1: "Address line 1",
  line2: "Address line 2",
  city: "City",
  state: "State",
  pincode: "Pincode",
  country: "Country"
};
function AddressField({ field, value, onChange, disabled }) {
  const address = value ?? {};
  const components = field.addressComponents?.length ? field.addressComponents : ["line1", "line2", "city", "state", "pincode", "country"];
  const setPart = (key, v) => {
    onChange({ ...address, [key]: v });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: components.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: c === "line1" || c === "line2" ? "sm:col-span-2" : void 0, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-1.5 block text-[13px] font-medium text-[#0A0A0A]", children: COMPONENT_LABELS[c] }),
    c === "country" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      Select,
      {
        value: address.country ?? "",
        disabled,
        placeholder: "Select country",
        options: [
          { value: "IN", label: "India" },
          { value: "US", label: "United States" },
          { value: "GB", label: "United Kingdom" },
          { value: "AE", label: "United Arab Emirates" },
          { value: "SG", label: "Singapore" }
        ],
        onChange: (e) => setPart("country", e.target.value)
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        value: address[c] ?? "",
        disabled,
        onChange: (e) => setPart(c, e.target.value)
      }
    )
  ] }, c)) });
}
function YesNoField({ value, onChange }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    RadioGroup,
    {
      orientation: "horizontal",
      options: [
        { value: "true", label: "Yes" },
        { value: "false", label: "No" }
      ],
      value: value === true ? "true" : value === false ? "false" : "",
      onChange: (v) => onChange(v === "true")
    }
  );
}
function SectionHeadingField({ field }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[17px] font-semibold text-[#0A0A0A]", children: field.label }),
    field.helpText && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[13px] text-[#6B6B6B]", children: field.helpText })
  ] });
}
function ParagraphField({ field }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] leading-relaxed text-[#3F3F3F] whitespace-pre-wrap", children: field.label });
}
function DividerField(_props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "border-t border-[#E5E5E3]" });
}
function RepeatableGroupField({ field, value, onChange, disabled }) {
  const rows = Array.isArray(value) ? value : [];
  const subFields = field.fields ?? [];
  const maxRows = field.maxRows ?? Infinity;
  const minRows = field.minRows ?? 0;
  const addRow = () => {
    if (rows.length >= maxRows) return;
    onChange([...rows, { _rowId: uuid() }]);
  };
  const removeRow = (idx) => {
    if (rows.length <= minRows) return;
    onChange(rows.filter((_, i) => i !== idx));
  };
  const updateRow = (idx, fieldId, v) => {
    onChange(rows.map((row, i) => i === idx ? { ...row, [fieldId]: v } : row));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    rows.map((row, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-[#E5E5E3] p-4 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[13px] font-medium text-[#6B6B6B]", children: [
          "Entry ",
          idx + 1
        ] }),
        !disabled && rows.length > minRows && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => removeRow(idx),
            className: "text-[12px] text-[#DC2626] hover:underline",
            children: "Remove"
          }
        )
      ] }),
      subFields.map((sub) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        FormFieldRenderer,
        {
          field: sub,
          value: row[sub.id],
          onChange: (v) => updateRow(idx, sub.id, v),
          error: validateField(sub, row[sub.id], row) ?? void 0,
          disabled,
          formValues: row
        },
        sub.id
      ))
    ] }, row._rowId ?? idx)),
    !disabled && rows.length < maxRows && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "secondary", size: "sm", onClick: addRow, children: "+ Add entry" })
  ] });
}
const NON_DATA_TYPES = /* @__PURE__ */ new Set(["section_heading", "paragraph", "divider"]);
const LAYOUT_TYPES = /* @__PURE__ */ new Set(["section_heading", "paragraph", "divider"]);
function formatReadOnlyValue(field, value) {
  if (value === null || value === void 0 || value === "") return "—";
  if (field.type === "yes_no") return value === true ? "Yes" : value === false ? "No" : "—";
  if (field.type === "checkbox_group" || field.type === "multi_select") {
    const values = Array.isArray(value) ? value : [];
    const labels = values.map((v) => field.options?.find((o) => o.value === v)?.label ?? v);
    return labels.length ? labels.join(", ") : "—";
  }
  if (field.type === "radio" || field.type === "dropdown") {
    return field.options?.find((o) => o.value === value)?.label ?? String(value);
  }
  if (field.type === "file_upload") {
    const files = Array.isArray(value) ? value : [];
    return files.length ? files.map((f) => f.name).join(", ") : "—";
  }
  if (field.type === "address") {
    const addr = value;
    return Object.values(addr ?? {}).filter(Boolean).join(", ") || "—";
  }
  if (field.type === "signature") return value ? "Signed" : "—";
  return String(value);
}
function FormFieldRenderer({
  field,
  value,
  onChange,
  error,
  disabled,
  readOnly,
  formValues
}) {
  const required = isFieldRequired(field, formValues);
  const componentProps = { field, value, onChange, error, disabled };
  if (LAYOUT_TYPES.has(field.type)) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-field-id": field.id, children: [
      field.type === "section_heading" && /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeadingField, { ...componentProps }),
      field.type === "paragraph" && /* @__PURE__ */ jsxRuntimeExports.jsx(ParagraphField, { ...componentProps }),
      field.type === "divider" && /* @__PURE__ */ jsxRuntimeExports.jsx(DividerField, { ...componentProps })
    ] });
  }
  if (readOnly) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-field-id": field.id, className: "py-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-[#6B6B6B]", children: field.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-[14px] text-[#0A0A0A] whitespace-pre-wrap", children: formatReadOnlyValue(field, value) })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-field-id": field.id, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "mb-1.5 block text-[13px] font-medium text-[#0A0A0A]", children: [
      field.label,
      required && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#DC2626] ml-0.5", children: "*" })
    ] }),
    field.type === "short_text" && /* @__PURE__ */ jsxRuntimeExports.jsx(ShortTextField, { ...componentProps }),
    field.type === "long_text" && /* @__PURE__ */ jsxRuntimeExports.jsx(LongTextField, { ...componentProps }),
    field.type === "email" && /* @__PURE__ */ jsxRuntimeExports.jsx(EmailField, { ...componentProps }),
    field.type === "phone" && /* @__PURE__ */ jsxRuntimeExports.jsx(PhoneField, { ...componentProps }),
    field.type === "number" && /* @__PURE__ */ jsxRuntimeExports.jsx(NumberField, { ...componentProps }),
    field.type === "date" && /* @__PURE__ */ jsxRuntimeExports.jsx(DateField, { ...componentProps }),
    field.type === "time" && /* @__PURE__ */ jsxRuntimeExports.jsx(TimeField, { ...componentProps }),
    field.type === "checkbox_group" && /* @__PURE__ */ jsxRuntimeExports.jsx(CheckboxGroupField, { ...componentProps }),
    field.type === "radio" && /* @__PURE__ */ jsxRuntimeExports.jsx(RadioField, { ...componentProps }),
    field.type === "dropdown" && /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownField, { ...componentProps }),
    field.type === "multi_select" && /* @__PURE__ */ jsxRuntimeExports.jsx(MultiSelectField, { ...componentProps }),
    field.type === "file_upload" && /* @__PURE__ */ jsxRuntimeExports.jsx(FileUploadField, { ...componentProps }),
    field.type === "signature" && /* @__PURE__ */ jsxRuntimeExports.jsx(SignatureField, { ...componentProps }),
    field.type === "address" && /* @__PURE__ */ jsxRuntimeExports.jsx(AddressField, { ...componentProps }),
    field.type === "yes_no" && /* @__PURE__ */ jsxRuntimeExports.jsx(YesNoField, { ...componentProps }),
    field.type === "repeatable_group" && /* @__PURE__ */ jsxRuntimeExports.jsx(RepeatableGroupField, { ...componentProps }),
    field.helpText && !NON_DATA_TYPES.has(field.type) && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-[13px] text-[#6B6B6B]", children: field.helpText }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { "aria-live": "polite", className: cn("mt-1.5 text-[13px] text-[#DC2626]"), children: error })
  ] });
}
function FormStepRenderer({
  step,
  values,
  errors,
  onFieldChange,
  disabled,
  readOnly
}) {
  const visibleFields = getVisibleFields(step, values);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    step.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] text-[#6B6B6B]", children: step.description }),
    visibleFields.map((field) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      FormFieldRenderer,
      {
        field,
        value: values[field.id],
        onChange: (v) => onFieldChange(field.id, v),
        error: errors[field.id],
        disabled,
        readOnly,
        formValues: values
      },
      field.id
    ))
  ] });
}
function FormProgress({ steps, currentStepIndex }) {
  if (steps.length <= 1) return null;
  const pct = Math.round((currentStepIndex + 1) / steps.length * 100);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProgressBar, { value: pct }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5", children: steps.map((step, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: cn(
            "flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-medium",
            idx === currentStepIndex ? "text-white" : idx < currentStepIndex ? "bg-[#0A0A0A] text-white" : "bg-[#F2F2F0] text-[#6B6B6B]"
          ),
          style: idx === currentStepIndex ? { background: "var(--tenant-primary)" } : void 0,
          children: idx < currentStepIndex ? "✓" : idx + 1
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: cn(
            "text-[12px]",
            idx === currentStepIndex ? "font-medium text-[#0A0A0A]" : "text-[#6B6B6B]"
          ),
          children: step.title
        }
      )
    ] }, step.id)) })
  ] });
}
function FormNavigation({
  isFirstStep,
  isLastStep,
  submitting,
  submitLabel,
  onBack,
  onNext,
  onSubmit,
  readOnly
}) {
  if (readOnly) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-center justify-between border-t border-[#E5E5E3] pt-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "secondary", onClick: onBack, disabled: isFirstStep, children: "Back" }),
    isLastStep ? /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "tenant", loading: submitting, onClick: onSubmit, children: submitLabel }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "tenant", onClick: onNext, children: "Next" })
  ] });
}
function DraftSaveIndicator({ status, className }) {
  if (status === "idle") return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: cn("text-[12px] text-[#6B6B6B]", className), "aria-live": "polite", children: status === "saving" ? "Saving…" : "Saved just now" });
}
const AUTOSAVE_DELAY_MS = 1200;
function scrollToFirstError(errors) {
  const firstId = Object.keys(errors)[0];
  if (!firstId) return;
  requestAnimationFrame(() => {
    const el = document.querySelector(`[data-field-id="${firstId}"]`);
    el?.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}
function FormRenderer({
  schema,
  initialValues,
  onSubmit,
  onDraftSave,
  isPreview,
  readOnly,
  banner
}) {
  const [values, setValues] = reactExports.useState(initialValues ?? {});
  const [stepIndex, setStepIndex] = reactExports.useState(0);
  const [errors, setErrors] = reactExports.useState({});
  const [submitting, setSubmitting] = reactExports.useState(false);
  const [submitted, setSubmitted] = reactExports.useState(false);
  const [draftStatus, setDraftStatus] = reactExports.useState("idle");
  const autosaveTimer = reactExports.useRef(null);
  const isFirstRender = reactExports.useRef(true);
  const steps = schema.steps;
  const currentStep = steps[stepIndex];
  const isFirstStep = stepIndex === 0;
  const isLastStep = stepIndex === steps.length - 1;
  const canAutosave = !!schema.settings.allowDraftSaving && !isPreview && !readOnly && !!onDraftSave;
  reactExports.useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (!canAutosave) return;
    setDraftStatus("saving");
    if (autosaveTimer.current) clearTimeout(autosaveTimer.current);
    autosaveTimer.current = setTimeout(() => {
      onDraftSave?.(values);
      setDraftStatus("saved");
    }, AUTOSAVE_DELAY_MS);
    return () => {
      if (autosaveTimer.current) clearTimeout(autosaveTimer.current);
    };
  }, [values, canAutosave]);
  const handleFieldChange = (fieldId, value) => {
    setValues((prev) => ({ ...prev, [fieldId]: value }));
    if (errors[fieldId]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[fieldId];
        return next;
      });
    }
  };
  const validateCurrentStep = () => {
    const stepErrors = validateStep(currentStep, values);
    setErrors(stepErrors);
    if (Object.keys(stepErrors).length > 0) {
      scrollToFirstError(stepErrors);
      return false;
    }
    return true;
  };
  const handleNext = () => {
    if (!validateCurrentStep()) return;
    setStepIndex((i) => Math.min(i + 1, steps.length - 1));
  };
  const handleBack = () => {
    setStepIndex((i) => Math.max(i - 1, 0));
  };
  const handleSubmit = async () => {
    if (!validateCurrentStep()) return;
    setSubmitting(true);
    try {
      await onSubmit(values);
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };
  const submitLabel = reactExports.useMemo(
    () => schema.settings.submitButtonLabel || "Submit",
    [schema.settings.submitButtonLabel]
  );
  if (submitted) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { variant: "success", title: "Submitted", children: schema.settings.successMessage || "Thank you! Your response has been recorded." });
  }
  if (!currentStep) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { variant: "warning", title: "No fields configured", children: "This form has no steps to display yet." });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    banner,
    schema.settings.showProgressBar && /* @__PURE__ */ jsxRuntimeExports.jsx(FormProgress, { steps, currentStepIndex: stepIndex }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FormStepRenderer,
      {
        step: currentStep,
        values,
        errors,
        onFieldChange: handleFieldChange,
        disabled: submitting || readOnly,
        readOnly
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DraftSaveIndicator, { status: draftStatus }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FormNavigation,
      {
        isFirstStep,
        isLastStep,
        submitting,
        submitLabel,
        onBack: handleBack,
        onNext: handleNext,
        onSubmit: handleSubmit,
        readOnly
      }
    )
  ] });
}
export {
  FormRenderer as F
};
