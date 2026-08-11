import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { L as Link, O as Outlet } from "./_libs/tanstack__react-router.mjs";
import { r as resetToDefaultTheme } from "./_ssr/utils-CYd_2Wqf.mjs";

import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval.mjs";
import "./_libs/unenv.mjs";


import "./_libs/seroval-plugins.mjs";


import "./_libs/react-dom.mjs";
import "./_libs/isbot.mjs";
import "./_ssr/defaults-CvUaCo6_.mjs";
function PlatformLayout() {
  reactExports.useEffect(() => {
    resetToDefaultTheme();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-[#F9F9F7] text-[#0A0A0A] font-sans antialiased", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "h-16 px-6 md:px-10 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/onboarding", className: "text-[20px] font-bold tracking-[-0.01em]", children: "HRMS." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/login", className: "text-[14px] text-[#6B6B6B] hover:text-[#0A0A0A] transition-colors", children: [
        "Already have an account? ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "underline underline-offset-4", children: "Sign in" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "px-6 md:px-10 pb-20 pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto w-full max-w-5xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }) })
  ] });
}
export {
  PlatformLayout as component
};
