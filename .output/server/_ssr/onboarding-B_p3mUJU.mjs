import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { F as createStore, c as cn } from "./router-Arl77cRa.mjs";
import { D as DEFAULT_THEME } from "./defaults-CvUaCo6_.mjs";
function StepCard({ title, description, children, footer, className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("w-full", className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-[48px] leading-[1.05] font-bold tracking-[-0.01em] text-[#0A0A0A]", children: title }),
    description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-[15px] text-[#6B6B6B] max-w-xl", children: description }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10", children }),
    footer && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 flex items-center justify-between gap-4", children: footer })
  ] });
}
const initial = {
  companyName: "",
  domain: "",
  industry: "",
  size: "",
  country: "",
  hrContactName: "",
  hrContactEmail: "",
  primaryColor: DEFAULT_THEME.primaryColor,
  secondaryColor: DEFAULT_THEME.secondaryColor,
  accentColor: DEFAULT_THEME.accentColor,
  adminFullName: "",
  adminPassword: ""
};
const STORAGE_KEY = "hrms.onboarding";
function load() {
  if (typeof window === "undefined") return initial;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? { ...initial, ...JSON.parse(raw) } : initial;
  } catch {
    return initial;
  }
}
const store = createStore(load());
const onboardingStore = {
  ...store,
  update(patch) {
    store.set(patch);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(store.get()));
    }
  },
  reset() {
    store.reset();
    if (typeof window !== "undefined") window.localStorage.removeItem(STORAGE_KEY);
  },
  toSettings() {
    const s = store.get();
    return {
      companyName: s.companyName,
      domain: s.domain,
      industry: s.industry,
      size: s.size || "1-50",
      country: s.country,
      hrContactName: s.hrContactName,
      hrContactEmail: s.hrContactEmail,
      logoDataUrl: s.logoDataUrl
    };
  },
  toTheme() {
    const s = store.get();
    return {
      primaryColor: s.primaryColor,
      secondaryColor: s.secondaryColor,
      accentColor: s.accentColor,
      textOnPrimary: "#FFFFFF",
      textOnSecondary: "#0A0A0A"
    };
  }
};
export {
  StepCard as S,
  onboardingStore as o
};
