import { j as jsxRuntimeExports } from "./_libs/react.mjs";
import { L as Link } from "./_libs/tanstack__react-router.mjs";
import { B as Button } from "./_ssr/Button-CFBbQAsZ.mjs";
import { A as Alert } from "./_ssr/Alert-COamyPgG.mjs";

import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval.mjs";
import "./_libs/unenv.mjs";


import "./_libs/seroval-plugins.mjs";


import "./_libs/react-dom.mjs";
import "./_libs/isbot.mjs";
import "./_ssr/router-CPP24NZe.mjs";
import "./_libs/tanstack__query-core.mjs";
import "./_libs/tanstack__react-query.mjs";
import "./_libs/clsx.mjs";
import "./_libs/tailwind-merge.mjs";
import "./_libs/zod.mjs";
function EditBuilderError({
  reset
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { variant: "error", children: "Something went wrong loading this report." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: reset, children: "Try again" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/reports", className: "text-[13px] text-[var(--tenant-primary)] hover:underline self-center", children: "← Back to reports" })
    ] })
  ] });
}
export {
  EditBuilderError as errorComponent
};
