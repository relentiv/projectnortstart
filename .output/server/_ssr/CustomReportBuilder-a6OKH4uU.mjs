import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { B as Button } from "./Button-B92Yl16p.mjs";
import { I as Input } from "./Input-DkwuDyVZ.mjs";
import { T as Textarea } from "./Textarea-DmSlcYuH.mjs";
import { S as Select } from "./Select-CT_4ow88.mjs";
import { C as ConfirmDialog } from "./ConfirmDialog-CNV1l6_7.mjs";
import { s as showToast } from "./Toast-n7pN7q8Q.mjs";
import { n as runCustomReport, a2 as fieldsForDataSource, a3 as filterFieldsForDataSource, a4 as DATA_SOURCE_LABELS, a5 as updateReport, a6 as saveReport } from "./router-LFebWAoY.mjs";
import { C as Checkbox } from "./Checkbox-CgTT_66V.mjs";
import { R as ReportTable } from "./ReportTable-CeY2Quxx.mjs";
import { R as ReportExportMenu } from "./ReportExportMenu-iNuHgJS_.mjs";
import { a2 as Plus, a0 as Save, X } from "../_libs/lucide-react.mjs";
function ReportFieldPicker({
  fields,
  selected,
  onChange
}) {
  const toggle = (key) => onChange(selected.includes(key) ? selected.filter((k) => k !== key) : [...selected, key]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2 text-[13px] font-medium text-[#0A0A0A]", children: "Fields" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-2", children: fields.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { label: f.label, checked: selected.includes(f.key), onChange: () => toggle(f.key) }, f.key)) })
  ] });
}
const OPERATORS = [
  { value: "equals", label: "Equals" },
  { value: "not_equals", label: "Not equals" },
  { value: "contains", label: "Contains" },
  { value: "greater_than", label: "Greater than" },
  { value: "less_than", label: "Less than" },
  { value: "between", label: "Between" },
  { value: "in", label: "In (comma-separated)" }
];
function ReportFilterRow({
  fields,
  filter,
  onChange,
  onRemove
}) {
  const valueStr = Array.isArray(filter.value) ? filter.value.join(",") : String(filter.value ?? "");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Select,
      {
        className: "w-40",
        options: fields.map((f) => ({ value: f.key, label: f.label })),
        value: filter.field,
        onChange: (e) => onChange({ ...filter, field: e.target.value })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Select,
      {
        className: "w-40",
        options: OPERATORS,
        value: filter.operator,
        onChange: (e) => onChange({ ...filter, operator: e.target.value })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        className: "w-48",
        value: valueStr,
        onChange: (e) => {
          const raw = e.target.value;
          onChange({ ...filter, value: filter.operator === "in" || filter.operator === "between" ? raw.split(",").map((s) => s.trim()) : raw });
        },
        placeholder: "Value"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", onClick: onRemove, "aria-label": "Remove filter", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 14 }) })
  ] });
}
const DATA_SOURCES = ["employees", "leave", "attendance", "performance", "helpdesk", "expenses"];
function emptyConfig(source) {
  return { dataSource: source, fields: fieldsForDataSource(source).map((f) => f.key), filters: [] };
}
function CustomReportBuilder({ initial }) {
  const [config, setConfig] = reactExports.useState(initial?.config ?? emptyConfig("employees"));
  const [pendingSource, setPendingSource] = reactExports.useState(null);
  const [confirmOpen, setConfirmOpen] = reactExports.useState(false);
  const [preview, setPreview] = reactExports.useState({ columns: [], rows: [] });
  const [loadingPreview, setLoadingPreview] = reactExports.useState(false);
  const [saveOpen, setSaveOpen] = reactExports.useState(false);
  const [name, setName] = reactExports.useState(initial?.name ?? "");
  const [description, setDescription] = reactExports.useState(initial?.description ?? "");
  const [saving, setSaving] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (initial) return;
    try {
      const raw = window.sessionStorage.getItem("hrms.reports.nlDraft");
      if (raw) {
        const parsed = JSON.parse(raw);
        setConfig(parsed);
        window.sessionStorage.removeItem("hrms.reports.nlDraft");
      }
    } catch {
    }
  }, []);
  reactExports.useEffect(() => {
    setLoadingPreview(true);
    void runCustomReport(config).then((r) => {
      setPreview(r.data ?? { columns: [], rows: [] });
      setLoadingPreview(false);
    });
  }, [config]);
  const fields = fieldsForDataSource(config.dataSource);
  const filterFields = filterFieldsForDataSource(config.dataSource);
  const hasConfig = config.fields.length > 0 || config.filters.length > 0 || !!config.groupBy || !!config.sortBy;
  const changeSource = (source) => {
    if (source === config.dataSource) return;
    if (hasConfig) {
      setPendingSource(source);
      setConfirmOpen(true);
    } else {
      setConfig(emptyConfig(source));
    }
  };
  const confirmSourceChange = () => {
    if (pendingSource) setConfig(emptyConfig(pendingSource));
    setPendingSource(null);
  };
  const addFilter = () => {
    const first = filterFields[0];
    if (!first) return;
    setConfig({ ...config, filters: [...config.filters, { field: first.key, operator: "equals", value: "" }] });
  };
  const updateFilter = (idx, f) => {
    const next = [...config.filters];
    next[idx] = f;
    setConfig({ ...config, filters: next });
  };
  const removeFilter = (idx) => {
    setConfig({ ...config, filters: config.filters.filter((_, i) => i !== idx) });
  };
  const doSave = async () => {
    if (!name.trim()) {
      showToast("Give your report a name.", "error");
      return;
    }
    setSaving(true);
    const res = initial ? await updateReport(initial.id, { name: name.trim(), description: description.trim() || void 0, config }) : await saveReport({ name: name.trim(), description: description.trim() || void 0, config });
    setSaving(false);
    if (res.error) {
      showToast(res.error.message, "error");
      return;
    }
    showToast(initial ? "Report updated." : "Report saved.", "success");
    setSaveOpen(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-[#E5E5E3] bg-white p-5 space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Select,
        {
          label: "Data source",
          options: DATA_SOURCES.map((s) => ({ value: s, label: DATA_SOURCE_LABELS[s] })),
          value: config.dataSource,
          onChange: (e) => changeSource(e.target.value)
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ReportFieldPicker, { fields, selected: config.fields, onChange: (v) => setConfig({ ...config, fields: v }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-[#0A0A0A]", children: "Filters" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", leadingIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 14 }), onClick: addFilter, children: "Add filter" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          config.filters.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#6B6B6B]", children: "No filters — showing all rows." }),
          config.filters.map((f, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            ReportFilterRow,
            {
              fields: filterFields,
              filter: f,
              onChange: (nf) => updateFilter(idx, nf),
              onRemove: () => removeFilter(idx)
            },
            idx
          ))
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Select,
          {
            label: "Group by",
            placeholder: "No grouping",
            options: fields.map((f) => ({ value: f.key, label: f.label })),
            value: config.groupBy ?? "",
            onChange: (e) => setConfig({ ...config, groupBy: e.target.value || void 0 })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Select,
          {
            label: "Sort by",
            placeholder: "No sorting",
            options: fields.map((f) => ({ value: f.key, label: f.label })),
            value: config.sortBy ?? "",
            onChange: (e) => setConfig({ ...config, sortBy: e.target.value || void 0 })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Select,
          {
            label: "Sort direction",
            options: [{ value: "asc", label: "Ascending" }, { value: "desc", label: "Descending" }],
            value: config.sortDirection ?? "asc",
            onChange: (e) => setConfig({ ...config, sortDirection: e.target.value }),
            disabled: !config.sortBy
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[15px] font-semibold text-[#0A0A0A]", children: "Preview" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ReportExportMenu, { rows: preview.rows, columns: preview.columns, filenameBase: "custom-report", disabled: preview.rows.length === 0 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", leadingIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { size: 14 }), onClick: () => setSaveOpen(true), children: initial ? "Update report" : "Save this as a report" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ReportTable, { columns: preview.columns, rows: preview.rows, loading: loadingPreview }),
    saveOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-[#E5E5E3] bg-white p-5 space-y-4 max-w-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[15px] font-semibold text-[#0A0A0A]", children: initial ? "Update report" : "Save this report" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Name", value: name, onChange: (e) => setName(e.target.value), placeholder: "e.g. Active engineering headcount" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { label: "Description (optional)", value: description, onChange: (e) => setDescription(e.target.value), rows: 2 }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: () => setSaveOpen(false), children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", loading: saving, onClick: () => void doSave(), children: "Save" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmDialog,
      {
        open: confirmOpen,
        onOpenChange: setConfirmOpen,
        title: "Change data source?",
        description: "Switching the data source will clear your current fields, filters, grouping and sorting.",
        confirmLabel: "Switch data source",
        variant: "warning",
        onConfirm: confirmSourceChange,
        onCancel: () => setPendingSource(null)
      }
    )
  ] });
}
export {
  CustomReportBuilder as C
};
