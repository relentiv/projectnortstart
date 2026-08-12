import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { f as useParams, L as Link } from "./_libs/tanstack__react-router.mjs";
import { B as Badge } from "./_ssr/Badge-Cm1DzmgP.mjs";
import { S as Spinner } from "./_ssr/router-Arl77cRa.mjs";
import { s as showToast } from "./_ssr/Toast-DlQQlIf6.mjs";
import { f as formsApi } from "./_ssr/forms-DH39HwWx.mjs";
import { F as FormRenderer } from "./_ssr/FormRenderer-zZlEtjrY.mjs";

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
import "./_ssr/Alert-DIhou9mC.mjs";
import "./_ssr/Input-CHeJoRlX.mjs";
import "./_ssr/Textarea-DXR3KTuM.mjs";
import "./_ssr/PhoneInput-D8qcNOA-.mjs";
import "./_ssr/DatePicker-GAit8DxM.mjs";
import "./_ssr/TimePicker-UTFoibMP.mjs";
import "./_ssr/Checkbox-JVDCHRr9.mjs";
import "./_ssr/RadioGroup-Dl_ThJE1.mjs";
import "./_ssr/Select-Bg687n3T.mjs";
import "./_ssr/MultiSelect-TfWZYelZ.mjs";
import "./_ssr/FileUpload-GznQ7qkH.mjs";
import "./_ssr/Button-Crtgy6Xx.mjs";
import "./_ssr/ProgressBar-DzmeKi_t.mjs";
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
