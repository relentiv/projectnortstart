import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { f as useParams, L as Link } from "./_libs/tanstack__react-router.mjs";
import { B as Badge } from "./_ssr/Badge-DOnZHL7Z.mjs";
import { S as Spinner } from "./_ssr/router-CPP24NZe.mjs";
import { s as showToast } from "./_ssr/Toast-DgpI28ao.mjs";
import { f as formsApi } from "./_ssr/forms-PzgPrb8p.mjs";
import { F as FormRenderer } from "./_ssr/FormRenderer-DU0FcgMB.mjs";

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
import "./_ssr/localStorage-DOek0dff.mjs";
import "./_ssr/Alert-COamyPgG.mjs";
import "./_ssr/Input-BJe__i93.mjs";
import "./_ssr/Textarea-DsONP0BR.mjs";
import "./_ssr/PhoneInput-BobMRa8A.mjs";
import "./_ssr/DatePicker-CLkrqJ5Y.mjs";
import "./_ssr/TimePicker-BrzZEFJW.mjs";
import "./_ssr/Checkbox-EmLzttzJ.mjs";
import "./_ssr/RadioGroup-CC5uRvq5.mjs";
import "./_ssr/Select-CDtKs7RG.mjs";
import "./_ssr/MultiSelect-AJ9L18N2.mjs";
import "./_ssr/FileUpload-COmUKg3_.mjs";
import "./_ssr/Button-CFBbQAsZ.mjs";
import "./_ssr/ProgressBar-BBqPQ_Z7.mjs";
function FormPreviewPage() {
  const {
    formId
  } = useParams({
    from: "/_app/settings/forms/$formId/preview"
  });
  const [schema, setSchema] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
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
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 24 }) });
  }
  if (!schema) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl space-y-4 py-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/settings/forms/$formId", params: {
        formId
      }, className: "text-[13px] text-[#6B6B6B] hover:text-[#0A0A0A]", children: "← Back to builder" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { children: "Preview" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FormRenderer, { schema, isPreview: true, onSubmit: () => showToast("This is a preview — responses are not saved.", "info") })
  ] });
}
export {
  FormPreviewPage as component
};
