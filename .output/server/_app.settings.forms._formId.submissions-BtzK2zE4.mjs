import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { f as useParams, L as Link } from "./_libs/tanstack__react-router.mjs";
import { B as Button } from "./_ssr/Button-CFBbQAsZ.mjs";
import { S as Spinner } from "./_ssr/router-CPP24NZe.mjs";
import { E as EmptyState } from "./_ssr/EmptyState-Cs_2WXRJ.mjs";
import { S as SlideOver } from "./_ssr/SlideOver-COdJD426.mjs";
import { D as DataTable } from "./_ssr/DataTable-DBeYYWhW.mjs";
import { s as showToast } from "./_ssr/Toast-DgpI28ao.mjs";
import { f as formsApi } from "./_ssr/forms-PzgPrb8p.mjs";
import { getLocalSubmissions } from "./_ssr/localStorage-DOek0dff.mjs";

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
import "./_ssr/formConditions-CF1AFMuj.mjs";
function toCsv(schema, rows) {
  const fieldIds = schema.steps.flatMap((s) => s.fields.filter((f) => f.type !== "section_heading" && f.type !== "paragraph" && f.type !== "divider").map((f) => ({
    id: f.id,
    label: f.label
  })));
  const header = ["Submission #", "Submitted at", ...fieldIds.map((f) => f.label)];
  const lines = rows.map((r) => [String(r.submissionNumber), r.submittedAt, ...fieldIds.map((f) => JSON.stringify(r.responses?.[f.id] ?? "").replace(/^"|"$/g, ""))]);
  return [header, ...lines].map((row) => row.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(",")).join("\n");
}
function FormSubmissionsPage() {
  const {
    formId
  } = useParams({
    from: "/_app/settings/forms/$formId/submissions"
  });
  const [schema, setSchema] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [selected, setSelected] = reactExports.useState(null);
  reactExports.useEffect(() => {
    void (async () => {
      setLoading(true);
      const res = await formsApi.get(formId);
      if (res.error || !res.data) {
        showToast(res.error?.message ?? "Form not found.", "error");
      } else {
        setSchema(res.data);
      }
      setLoading(false);
    })();
  }, [formId]);
  const submissions = reactExports.useMemo(() => {
    if (!schema) return [];
    return getLocalSubmissions().filter((s) => !s.isDraft && s.formVersionId === schema.versionId).sort((a, b) => b.submissionNumber - a.submissionNumber);
  }, [schema]);
  const exportCsv = () => {
    if (!schema) return;
    const csv = toCsv(schema, submissions);
    const blob = new Blob([csv], {
      type: "text/csv"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${schema.title.replace(/\s+/g, "_")}_submissions.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };
  if (loading || !schema) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 24 }) });
  }
  const columns = [{
    key: "submissionNumber",
    label: "#",
    render: (r) => `#${r.submissionNumber}`
  }, {
    key: "submittedAt",
    label: "Submitted",
    render: (r) => new Date(r.submittedAt).toLocaleString()
  }, {
    key: "actions",
    label: "",
    align: "right",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "secondary", onClick: () => setSelected(r), children: "View" })
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/settings/forms/$formId", params: {
          formId
        }, className: "text-[13px] text-[#6B6B6B] hover:text-[#0A0A0A]", children: "← Back to builder" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-[20px] font-semibold mt-1", children: [
          schema.title,
          " — Submissions"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: exportCsv, disabled: submissions.length === 0, children: "Export CSV" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DataTable, { columns, data: submissions, getRowKey: (s) => s.id, emptyState: /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No submissions yet.", subtitle: "Responses will appear here once candidates submit this form." }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SlideOver, { open: !!selected, onClose: () => setSelected(null), title: selected ? `Submission #${selected.submissionNumber}` : "", children: selected && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: schema.steps.flatMap((s) => s.fields).filter((f) => f.type !== "section_heading" && f.type !== "paragraph" && f.type !== "divider").map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] font-medium text-[#6B6B6B]", children: f.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] text-[#0A0A0A]", children: JSON.stringify(selected.responses?.[f.id] ?? "—") })
    ] }, f.id)) }) })
  ] });
}
export {
  FormSubmissionsPage as component
};
