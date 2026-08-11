const FIELD_TYPE_LABELS = {
  short_text: "Short text",
  long_text: "Long text",
  email: "Email",
  phone: "Phone",
  number: "Number",
  date: "Date",
  time: "Time",
  checkbox_group: "Checkbox group",
  radio: "Radio",
  dropdown: "Dropdown",
  multi_select: "Multi select",
  file_upload: "File upload",
  signature: "Signature",
  address: "Address",
  section_heading: "Section heading",
  paragraph: "Paragraph",
  divider: "Divider",
  repeatable_group: "Repeatable group",
  yes_no: "Yes / No"
};
const FIELD_TYPE_GLYPHS = {
  short_text: "T",
  long_text: "¶",
  email: "@",
  phone: "☎",
  number: "#",
  date: "▤",
  time: "◷",
  checkbox_group: "☑",
  radio: "◉",
  dropdown: "▾",
  multi_select: "≣",
  file_upload: "⇪",
  signature: "✎",
  address: "⌂",
  section_heading: "H",
  paragraph: "≡",
  divider: "—",
  repeatable_group: "⧉",
  yes_no: "⊙"
};
const NON_DATA_FIELD_TYPES = ["section_heading", "paragraph", "divider"];
const FIELD_TYPE_GROUPS = [
  { label: "Basic", types: ["short_text", "long_text", "email", "phone", "number", "date", "time"] },
  { label: "Choice", types: ["dropdown", "radio", "checkbox_group", "multi_select", "yes_no"] },
  { label: "Advanced", types: ["file_upload", "signature", "address", "repeatable_group"] },
  { label: "Layout", types: ["section_heading", "paragraph", "divider"] }
];
const FORM_CATEGORY_LABELS = {
  candidate_onboarding: "Candidate onboarding",
  employee_onboarding: "Employee onboarding",
  custom: "Custom"
};
function isEmpty(value) {
  if (value === null || value === void 0) return true;
  if (typeof value === "string") return value.trim() === "";
  if (Array.isArray(value)) return value.length === 0;
  if (typeof value === "object") return Object.keys(value).length === 0;
  return false;
}
function toComparable(value) {
  if (value === null || value === void 0) return "";
  if (Array.isArray(value)) return value.map(String).join(",");
  return String(value);
}
function toNumber(value) {
  const n = typeof value === "number" ? value : parseFloat(String(value ?? ""));
  return Number.isFinite(n) ? n : NaN;
}
function evaluateCondition(condition, formValues) {
  if (!condition.rules.length) return false;
  const results = condition.rules.map((rule) => {
    const actual = formValues[rule.fieldId];
    switch (rule.operator) {
      case "equals":
        if (Array.isArray(actual)) return actual.map(String).includes(String(rule.value));
        if (typeof actual === "boolean") return actual === (rule.value === true || rule.value === "true");
        return toComparable(actual) === String(rule.value);
      case "not_equals":
        if (Array.isArray(actual)) return !actual.map(String).includes(String(rule.value));
        return toComparable(actual) !== String(rule.value);
      case "contains":
        return toComparable(actual).toLowerCase().includes(String(rule.value).toLowerCase());
      case "not_contains":
        return !toComparable(actual).toLowerCase().includes(String(rule.value).toLowerCase());
      case "greater_than": {
        const a = toNumber(actual);
        const b = toNumber(rule.value);
        return Number.isFinite(a) && Number.isFinite(b) && a > b;
      }
      case "less_than": {
        const a = toNumber(actual);
        const b = toNumber(rule.value);
        return Number.isFinite(a) && Number.isFinite(b) && a < b;
      }
      case "is_empty":
        return isEmpty(actual);
      case "is_not_empty":
        return !isEmpty(actual);
      default:
        return false;
    }
  });
  return condition.logic === "or" ? results.some(Boolean) : results.every(Boolean);
}
function isFieldVisible(field, formValues) {
  const c = field.condition;
  if (!c || !c.rules.length) return true;
  if (c.effect === "show") return evaluateCondition(c, formValues);
  if (c.effect === "hide") return !evaluateCondition(c, formValues);
  return true;
}
function isFieldRequired(field, formValues) {
  if (NON_DATA_FIELD_TYPES.includes(field.type)) return false;
  const c = field.condition;
  if (!c || !c.rules.length) return field.required;
  if (c.effect === "require") return evaluateCondition(c, formValues) ? true : field.required;
  if (c.effect === "make_optional") return evaluateCondition(c, formValues) ? false : field.required;
  return field.required;
}
function getVisibleFields(step, formValues) {
  return step.fields.filter((f) => isFieldVisible(f, formValues));
}
function validateField(field, value, formValues) {
  if (NON_DATA_FIELD_TYPES.includes(field.type)) return null;
  const required = isFieldRequired(field, formValues);
  if (required && isEmpty(value)) return `${field.label || "This field"} is required.`;
  if (isEmpty(value)) return null;
  if (field.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value))) {
    return "Enter a valid email address.";
  }
  if (field.type === "phone" && String(value).replace(/\D/g, "").length < 7) {
    return "Enter a valid phone number.";
  }
  if (field.type === "date") {
    const t = new Date(String(value)).getTime();
    if (Number.isNaN(t)) return "Enter a valid date.";
    if (field.minDate && t < new Date(field.minDate).getTime())
      return `Date must be on or after ${field.minDate.slice(0, 10)}.`;
    if (field.maxDate && t > new Date(field.maxDate).getTime())
      return `Date must be on or before ${field.maxDate.slice(0, 10)}.`;
  }
  for (const rule of field.validation ?? []) {
    const str = toComparable(value);
    const num = toNumber(value);
    switch (rule.type) {
      case "min":
        if (Number.isFinite(num) && num < toNumber(rule.value)) return rule.message;
        break;
      case "max":
        if (Number.isFinite(num) && num > toNumber(rule.value)) return rule.message;
        break;
      case "min_length":
        if (str.length < toNumber(rule.value)) return rule.message;
        break;
      case "max_length":
        if (str.length > toNumber(rule.value)) return rule.message;
        break;
      case "pattern":
      case "custom":
        try {
          if (!new RegExp(String(rule.value)).test(str)) return rule.message;
        } catch {
        }
        break;
    }
  }
  return null;
}
function validateStep(step, formValues) {
  const errors = {};
  for (const field of getVisibleFields(step, formValues)) {
    if (field.type === "repeatable_group") {
      const rows = Array.isArray(formValues[field.id]) ? formValues[field.id] : [];
      if (isFieldRequired(field, formValues) && rows.length === 0) {
        errors[field.id] = `${field.label} requires at least one entry.`;
        continue;
      }
      if (field.minRows && rows.length < field.minRows) {
        errors[field.id] = `Add at least ${field.minRows} entries.`;
        continue;
      }
      const rowError = rows.some(
        (row) => (field.fields ?? []).some((sub) => validateField(sub, row?.[sub.id], row ?? {}) !== null)
      );
      if (rowError) errors[field.id] = "Some entries are incomplete.";
      continue;
    }
    const err = validateField(field, formValues[field.id], formValues);
    if (err) errors[field.id] = err;
  }
  return errors;
}
function detectCircularConditions(schema) {
  const deps = /* @__PURE__ */ new Map();
  const collect = (fields) => {
    for (const f of fields) {
      if (f.condition?.rules.length) {
        deps.set(f.id, f.condition.rules.map((r) => r.fieldId));
      }
      if (f.fields?.length) collect(f.fields);
    }
  };
  schema.steps.forEach((s) => collect(s.fields));
  const state = /* @__PURE__ */ new Map();
  const circular = /* @__PURE__ */ new Set();
  const visit = (id, stack) => {
    const st = state.get(id);
    if (st === 1) {
      const start = stack.indexOf(id);
      stack.slice(start === -1 ? 0 : start).forEach((n) => circular.add(n));
      return;
    }
    if (st === 2) return;
    state.set(id, 1);
    for (const dep of deps.get(id) ?? []) visit(dep, [...stack, id]);
    state.set(id, 2);
  };
  for (const id of deps.keys()) visit(id, []);
  return [...circular];
}
export {
  FORM_CATEGORY_LABELS as F,
  NON_DATA_FIELD_TYPES as N,
  validateField as a,
  FIELD_TYPE_GROUPS as b,
  FIELD_TYPE_LABELS as c,
  detectCircularConditions as d,
  FIELD_TYPE_GLYPHS as e,
  getVisibleFields as g,
  isFieldRequired as i,
  validateStep as v
};
