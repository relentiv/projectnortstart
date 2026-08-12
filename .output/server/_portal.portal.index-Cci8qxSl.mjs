import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { d as useNavigate } from "./_libs/tanstack__react-router.mjs";
import { C as Card } from "./_ssr/Card-AgXmnnkq.mjs";
import { R as Route$1c, S as Spinner } from "./_ssr/router-CPP24NZe.mjs";
import { p as portalApi } from "./_ssr/candidates-DAX-Qu8a.mjs";

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
import "./_ssr/candidate-CM1ucsTB.mjs";
import "./_ssr/localStorage-DOek0dff.mjs";
function MagicLinkLanding({ title, description, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center gap-3 py-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-[20px] font-semibold text-[#0A0A0A]", children: title }),
    description ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] text-[#6B6B6B] max-w-sm", children: description }) : null,
    children
  ] });
}
function MagicLinkPage() {
  const {
    token,
    expired
  } = Route$1c.useSearch();
  const navigate = useNavigate();
  const [status, setStatus] = reactExports.useState(token ? "loading" : "none");
  reactExports.useEffect(() => {
    if (!token) return;
    let cancelled = false;
    portalApi.authenticate(token).then((res) => {
      if (cancelled) return;
      if (res.data) {
        setStatus("success");
        navigate({
          to: "/portal/$pipelineId",
          params: {
            pipelineId: res.data.pipelineId
          }
        });
      } else {
        setStatus("expired");
      }
    });
    return () => {
      cancelled = true;
    };
  }, [token, navigate]);
  if (status === "loading") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(MagicLinkLanding, { title: "Verifying your access…", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 28, className: "text-[var(--tenant-primary)]" }) });
  }
  if (status === "expired") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "text-center py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-[18px] font-semibold text-[#0A0A0A]", children: "This invitation link has expired." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[14px] text-[#6B6B6B]", children: "Contact HR to request a new link." })
    ] });
  }
  if (expired === "true") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "text-center py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-[18px] font-semibold text-[#0A0A0A]", children: "Your session has expired." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[14px] text-[#6B6B6B]", children: "Please use your original invitation link to sign in again." })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "text-center py-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-[18px] font-semibold text-[#0A0A0A]", children: "Candidate Portal" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[14px] text-[#6B6B6B]", children: "Please use the invitation link sent to your email to access your application." })
  ] });
}
export {
  MagicLinkPage as component
};
