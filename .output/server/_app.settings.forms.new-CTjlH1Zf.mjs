import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { d as useNavigate } from "./_libs/tanstack__react-router.mjs";
import { S as Spinner } from "./_ssr/router-Arl77cRa.mjs";
import { s as showToast } from "./_ssr/Toast-DlQQlIf6.mjs";
import { f as formsApi } from "./_ssr/forms-DH39HwWx.mjs";

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
function NewFormPage() {
  const navigate = useNavigate();
  reactExports.useEffect(() => {
    void (async () => {
      const res = await formsApi.create();
      if (res.error || !res.data) {
        showToast(res.error?.message ?? "Could not create form.", "error");
        await navigate({
          to: "/settings/forms"
        });
        return;
      }
      await navigate({
        to: "/settings/forms/$formId",
        params: {
          formId: res.data.id
        }
      });
    })();
  }, [navigate]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 24 }) });
}
export {
  NewFormPage as component
};
