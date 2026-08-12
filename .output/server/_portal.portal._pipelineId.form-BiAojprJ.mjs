import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { d as useNavigate } from "./_libs/tanstack__react-router.mjs";
import { C as Card } from "./_ssr/Card-AgXmnnkq.mjs";
import { a9 as Route$p, S as Spinner, u as uiStore } from "./_ssr/router-CPP24NZe.mjs";
import { F as FormRenderer } from "./_ssr/FormRenderer-DU0FcgMB.mjs";
import { p as portalApi } from "./_ssr/candidates-DAX-Qu8a.mjs";
import { getPortalSession, getPipelineById, getLocalFormByVersionId, getLocalFormById, getSubmissionsForPipeline, getDraft, saveDraft } from "./_ssr/localStorage-DOek0dff.mjs";

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
import "./_ssr/Alert-COamyPgG.mjs";
import "./_ssr/formConditions-CF1AFMuj.mjs";
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
import "./_ssr/candidate-CM1ucsTB.mjs";
function PortalFormPage() {
  const {
    pipelineId
  } = Route$p.useParams();
  const navigate = useNavigate();
  const [ready, setReady] = reactExports.useState(false);
  const [pipeline, setPipeline] = reactExports.useState(null);
  const [schema, setSchema] = reactExports.useState(null);
  const [initialValues, setInitialValues] = reactExports.useState({});
  const [readOnlyValues, setReadOnlyValues] = reactExports.useState(null);
  reactExports.useEffect(() => {
    const session = getPortalSession();
    if (!session || session.pipelineId !== pipelineId) {
      navigate({
        to: "/portal",
        search: {
          expired: "true"
        }
      });
      return;
    }
    const p = getPipelineById(pipelineId);
    if (!p) {
      navigate({
        to: "/portal",
        search: {
          expired: "true"
        }
      });
      return;
    }
    setPipeline(p);
    const form = p.formVersionId && getLocalFormByVersionId(p.formVersionId) || p.formId && getLocalFormById(p.formId) || null;
    setSchema(form);
    if (p.status === "submitted") {
      const subs = getSubmissionsForPipeline(pipelineId);
      const last = subs[subs.length - 1];
      setReadOnlyValues(last?.responses ?? {});
    } else {
      const draft = getDraft(pipelineId);
      if (draft) {
        setInitialValues(draft);
      } else if (p.status === "changes_requested") {
        const subs = getSubmissionsForPipeline(pipelineId);
        const last = subs[subs.length - 1];
        setInitialValues(last?.responses ?? {});
      }
      portalApi.markFormStarted(pipelineId);
    }
    setReady(true);
  }, [pipelineId, navigate]);
  if (!ready) return null;
  if (!schema) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "text-center py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-[16px] font-semibold text-[#0A0A0A]", children: "Form not available" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[14px] text-[#6B6B6B]", children: "There isn't an application form configured yet. Please contact HR." })
    ] });
  }
  if (!pipeline) return /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 24 });
  if (readOnlyValues) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(FormRenderer, { schema, initialValues: readOnlyValues, onSubmit: async () => {
    }, readOnly: true, isPreview: false });
  }
  const banner = pipeline.status === "changes_requested" && pipeline.changeRequestNote ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6 rounded-md border border-[#FDE68A] bg-[#FFFBEB] px-4 py-3 text-[13px] text-[#92400E]", children: pipeline.changeRequestNote }) : void 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(FormRenderer, { schema, initialValues, onDraftSave: (values) => saveDraft(pipelineId, values), onSubmit: async (values) => {
    const res = await portalApi.submit(pipelineId, values);
    if (res.data) {
      uiStore.pushToast({
        message: "Your application has been submitted.",
        variant: "success"
      });
      navigate({
        to: "/portal/$pipelineId",
        params: {
          pipelineId
        }
      });
    } else {
      uiStore.pushToast({
        message: res.error?.message ?? "Something went wrong.",
        variant: "error"
      });
    }
  }, banner });
}
export {
  PortalFormPage as component
};
