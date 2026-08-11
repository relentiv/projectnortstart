import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { d as useNavigate, O as Outlet } from "./_libs/tanstack__react-router.mjs";
import { t as tenantStore } from "./_ssr/tenant-qT2uFABr.mjs";
import { a as applyTenantTheme } from "./_ssr/utils-CYd_2Wqf.mjs";
import { getPortalSession, getCandidateById, clearPortalSession } from "./_ssr/localStorage-DOek0dff.mjs";

import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval.mjs";
import "./_libs/unenv.mjs";


import "./_libs/seroval-plugins.mjs";


import "./_libs/react-dom.mjs";
import "./_libs/isbot.mjs";
import "./_ssr/router-LFebWAoY.mjs";
import "./_libs/tanstack__query-core.mjs";
import "./_libs/tanstack__react-query.mjs";
import "./_libs/clsx.mjs";
import "./_libs/tailwind-merge.mjs";
import "./_libs/zod.mjs";
import "./_ssr/defaults-CvUaCo6_.mjs";
function PortalLayout() {
  const navigate = useNavigate();
  const tenant = tenantStore.useSelector((s) => s.tenant);
  const theme = tenantStore.useSelector((s) => s.theme);
  const [candidateName, setCandidateName] = reactExports.useState(null);
  reactExports.useEffect(() => {
    applyTenantTheme(theme);
  }, [theme]);
  reactExports.useEffect(() => {
    const session = getPortalSession();
    if (session) {
      const candidate = getCandidateById(session.candidateId);
      if (candidate) setCandidateName(`${candidate.firstName} ${candidate.lastName}`);
    }
  }, []);
  const onSignOut = () => {
    clearPortalSession();
    navigate({
      to: "/portal"
    });
  };
  const companyName = tenant?.settings.companyName ?? "HRMS";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col bg-[#F9F9F7] text-[#0A0A0A] font-sans antialiased", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "h-16 px-6 border-b border-[#E5E5E3] bg-white flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [
        tenant?.settings.logoDataUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: tenant.settings.logoDataUrl, alt: companyName, className: "h-8 w-8 rounded object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-8 w-8 items-center justify-center rounded bg-[var(--tenant-primary)] text-[var(--tenant-text-on-primary)] font-semibold text-[13px]", children: companyName.charAt(0).toUpperCase() }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[15px] font-semibold truncate", children: companyName })
      ] }),
      candidateName ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14px] text-[#6B6B6B] hidden sm:inline", children: candidateName }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: onSignOut, className: "text-[13px] text-[#6B6B6B] hover:text-[#0A0A0A] underline underline-offset-4", children: "Sign out" })
      ] }) : null
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 flex justify-center px-6 py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full max-w-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "py-6 text-center text-[12px] text-[#9CA3AF]", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " ",
      companyName,
      ". All rights reserved."
    ] })
  ] });
}
export {
  PortalLayout as component
};
