import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { d as useNavigate, L as Link } from "./_libs/tanstack__react-router.mjs";
import { B as Button } from "./_ssr/Button-B92Yl16p.mjs";
import { I as Input } from "./_ssr/Input-DkwuDyVZ.mjs";
import { C as Card } from "./_ssr/Card-C9YFlUub.mjs";
import { a as authApi } from "./_ssr/auth-BINuB2XC.mjs";
import { a as authStore } from "./_ssr/auth-Dq95Bc2W.mjs";
import { t as tenantStore } from "./_ssr/tenant-qT2uFABr.mjs";
import { a as applyTenantTheme } from "./_ssr/utils-CYd_2Wqf.mjs";
import { u as uiStore } from "./_ssr/router-LFebWAoY.mjs";
import { D as DEFAULT_THEME } from "./_ssr/defaults-CvUaCo6_.mjs";

import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval.mjs";
import "./_libs/unenv.mjs";


import "./_libs/seroval-plugins.mjs";


import "./_libs/react-dom.mjs";
import "./_libs/isbot.mjs";
import "./_ssr/tenants-D2UmHO3Z.mjs";
import "./_ssr/rbac-B_cCMzV8.mjs";
import "./_ssr/rbac-B1d7raBj.mjs";
import "./_libs/tanstack__query-core.mjs";
import "./_libs/tanstack__react-query.mjs";
import "./_libs/clsx.mjs";
import "./_libs/tailwind-merge.mjs";
import "./_libs/zod.mjs";
const DEMO_PASSWORD = "demo1234";
const DEMO_EMAIL = "admin@acme.demo";
const TENANTS_KEY = "hrms.tenants";
const CRED_KEY = "hrms.credentials";
const TENANT_ID = "tn_demo";
function mkUser(id, fullName, email, role) {
  return { id, tenantId: TENANT_ID, fullName, email, role };
}
const DEMO_ACCOUNTS = [
  {
    key: "hr",
    label: "HR Admin",
    blurb: "Full access — people, payroll, settings",
    email: DEMO_EMAIL,
    password: DEMO_PASSWORD,
    user: mkUser("u_demo", "Jordan Reyes", DEMO_EMAIL, "hr_admin")
  },
  {
    key: "manager",
    label: "Manager",
    blurb: "Team view — approvals and performance",
    email: "riley.chen@acme.demo",
    password: DEMO_PASSWORD,
    user: mkUser("u_demo_mgr", "Riley Chen", "riley.chen@acme.demo", "manager")
  },
  {
    key: "employee",
    label: "Employee",
    blurb: "Self-service — attendance, leave, payslips",
    email: "aisha.khan@acme.demo",
    password: DEMO_PASSWORD,
    user: mkUser("u_demo_emp", "Aisha Khan", "aisha.khan@acme.demo", "employee")
  }
];
const DEMO_TENANT = {
  id: TENANT_ID,
  createdAt: (/* @__PURE__ */ new Date()).toISOString(),
  theme: {
    ...DEFAULT_THEME,
    primaryColor: "#1E40AF",
    accentColor: "#F97316",
    textOnPrimary: "#FFFFFF"
  },
  settings: {
    companyName: "Acme Inc.",
    domain: "https://acme.demo",
    industry: "Software & Technology",
    size: "201-500",
    country: "United States",
    hrContactName: "Jordan Reyes",
    hrContactEmail: DEMO_EMAIL
  }
};
function seedDemoData() {
  if (typeof window === "undefined") return;
  try {
    const tenants = JSON.parse(window.localStorage.getItem(TENANTS_KEY) ?? "[]");
    if (!tenants.some((t) => t.id === TENANT_ID)) {
      window.localStorage.setItem(TENANTS_KEY, JSON.stringify([...tenants, DEMO_TENANT]));
    }
    const creds = JSON.parse(window.localStorage.getItem(CRED_KEY) ?? "[]");
    const missing = DEMO_ACCOUNTS.filter((a) => !creds.some((c) => c.email === a.email)).map((a) => ({
      email: a.email,
      password: a.password,
      user: a.user
    }));
    if (missing.length) {
      window.localStorage.setItem(CRED_KEY, JSON.stringify([...creds, ...missing]));
    }
  } catch {
  }
}
function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  reactExports.useEffect(() => {
    seedDemoData();
    if (typeof window !== "undefined" && window.localStorage.getItem("hrms.auth")) {
      navigate({
        to: "/dashboard"
      });
    }
  }, [navigate]);
  const signIn = async (mail, pass) => {
    setError(null);
    setLoading(true);
    const res = await authApi.login(mail, pass);
    setLoading(false);
    if (res.error || !res.data) {
      setError(res.error?.message ?? "Incorrect email or password.");
      return;
    }
    tenantStore.setTenant(res.data.tenant);
    applyTenantTheme(res.data.tenant.theme);
    authStore.signIn(res.data.user, res.data.token);
    navigate({
      to: "/dashboard"
    });
  };
  const submit = async (e) => {
    e.preventDefault();
    await signIn(email, password);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-[70vh] flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "w-full max-w-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-[32px] font-semibold tracking-[-0.01em]", children: "Welcome back." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[14px] text-[#6B6B6B]", children: "Sign in to your workspace." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 rounded-lg border border-dashed border-[#E5E5E3] bg-[#FAFAF8] p-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold uppercase tracking-[0.12em] text-[#6B6B6B]", children: "Explore a demo role" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2.5 space-y-1.5", children: DEMO_ACCOUNTS.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 rounded-md bg-white border border-[#E5E5E3] px-3 py-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-semibold text-[#0A0A0A]", children: a.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate text-[11px] text-[#6B6B6B]", children: a.blurb })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", disabled: loading, onClick: () => {
          setEmail(a.email);
          setPassword(a.password);
          void signIn(a.email, a.password);
        }, className: "shrink-0 rounded-md px-2.5 py-1.5 text-[12px] font-semibold text-white active:scale-95 transition disabled:opacity-50", style: {
          background: "var(--tenant-primary)"
        }, children: "Sign in" })
      ] }, a.key)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-[11px] text-[#6B6B6B]", children: [
        "Platform admin?",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/admin/login", className: "underline underline-offset-4 text-[#0A0A0A]", children: "Admin portal →" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, noValidate: true, className: "mt-6 space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Work email", type: "email", value: email, onChange: (e) => setEmail(e.target.value), autoFocus: true, required: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Password", type: "password", value: password, onChange: (e) => setPassword(e.target.value), required: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => uiStore.pushToast({
        message: "Coming soon",
        variant: "info"
      }), className: "text-[13px] text-[#6B6B6B] hover:text-[#0A0A0A] transition-colors", children: "Forgot password?" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "w-full", loading, children: loading ? "Signing in…" : "Sign in" }),
      error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { role: "alert", "aria-live": "polite", className: "text-[13px] text-[#DC2626] text-center", children: error })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-8 text-center text-[13px] text-[#6B6B6B]", children: [
      "New company?",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/onboarding", className: "text-[#0A0A0A] underline underline-offset-4", children: "Set up your workspace →" })
    ] })
  ] }) });
}
export {
  LoginPage as component
};
