import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { d as useNavigate } from "./_libs/tanstack__react-router.mjs";
import { B as Button } from "./_ssr/Button-Crtgy6Xx.mjs";
import { I as Input } from "./_ssr/Input-CHeJoRlX.mjs";
import { C as Card } from "./_ssr/Card-Dnu0IoXY.mjs";
import { S as SUPER_ADMIN_CREDS, a as adminApi } from "./_ssr/admin-BnYXwmfu.mjs";
import { b as adminAuthStore } from "./_ssr/auth-CjdYhZTR.mjs";

import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval.mjs";
import "./_libs/unenv.mjs";


import "./_libs/seroval-plugins.mjs";


import "./_libs/react-dom.mjs";
import "./_libs/isbot.mjs";
import "./_ssr/router-Arl77cRa.mjs";
import "./_libs/tanstack__query-core.mjs";
import "./_libs/tanstack__react-query.mjs";
import "./_libs/clsx.mjs";
import "./_libs/tailwind-merge.mjs";
import "./_libs/zod.mjs";
import "./_ssr/defaults-CvUaCo6_.mjs";
import "./_ssr/rbac-CiXrabhS.mjs";
import "./_ssr/rbac-CHd75bNv.mjs";
function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (adminAuthStore.isAuthenticated) navigate({
      to: "/admin/dashboard"
    });
  }, [navigate]);
  const submit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const res = await adminApi.login(email, password);
    setLoading(false);
    if (res.error || !res.data) {
      setError(res.error?.message ?? "Login failed.");
      return;
    }
    adminAuthStore.signIn(res.data.name, res.data.token);
    navigate({
      to: "/admin/dashboard"
    });
  };
  const fillDemo = () => {
    setEmail(SUPER_ADMIN_CREDS.email);
    setPassword(SUPER_ADMIN_CREDS.password);
    setError(null);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen flex items-center justify-center px-4 py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "w-full max-w-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold uppercase tracking-[0.12em] text-[#6B6B6B]", children: "HRMS Platform" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-1 text-[32px] font-semibold tracking-[-0.01em]", children: "Admin sign in." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[14px] text-[#6B6B6B]", children: "Internal platform access only." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, noValidate: true, className: "mt-8 space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-sm border border-dashed border-[#E5E5E3] bg-[#FAFAF8] p-3 text-[12px] text-[#6B6B6B] flex items-start justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-[#0A0A0A]", children: "Demo platform admin" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "font-mono", children: SUPER_ADMIN_CREDS.email }),
            " · ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "font-mono", children: SUPER_ADMIN_CREDS.password })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: fillDemo, className: "shrink-0 text-[12px] font-semibold text-[#0A0A0A] underline underline-offset-4 hover:text-[#F97316] transition-colors", children: "Use demo" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Platform email", type: "email", value: email, onChange: (e) => setEmail(e.target.value), autoFocus: true, required: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Password", type: "password", value: password, onChange: (e) => setPassword(e.target.value), required: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "w-full", loading, children: loading ? "Signing in…" : "Sign in" }),
      error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { role: "alert", className: "text-[13px] text-[#DC2626] text-center", children: error })
    ] })
  ] }) });
}
export {
  AdminLogin as component
};
