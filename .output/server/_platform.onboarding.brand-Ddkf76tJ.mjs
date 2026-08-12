import { j as jsxRuntimeExports, r as reactExports } from "./_libs/react.mjs";
import { d as useNavigate } from "./_libs/tanstack__react-router.mjs";
import { S as StepIndicator } from "./_ssr/StepIndicator-PPUn9war.mjs";
import { o as onboardingStore, S as StepCard } from "./_ssr/onboarding-DmJywyTI.mjs";
import { T as ThemePreview } from "./_ssr/ThemePreview-BNUp3DUk.mjs";
import { C as ColorPicker } from "./_ssr/ColorPicker-fBsjsZd0.mjs";
import { c as cn } from "./_ssr/router-CPP24NZe.mjs";
import { B as Button } from "./_ssr/Button-CFBbQAsZ.mjs";
import { B as Badge } from "./_ssr/Badge-DOnZHL7Z.mjs";
import { c as computeTextColor, d as contrastRatio } from "./_ssr/utils-CYd_2Wqf.mjs";
import { D as DEFAULT_THEME } from "./_ssr/defaults-CvUaCo6_.mjs";

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
const MAX_BYTES = 2 * 1024 * 1024;
const ALLOWED = ["image/png", "image/jpeg", "image/svg+xml"];
function LogoUpload({ value, onChange, className }) {
  const ref = reactExports.useRef(null);
  const [drag, setDrag] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const handleFile = (file) => {
    setError(null);
    if (!ALLOWED.includes(file.type)) return setError("PNG, JPG, or SVG only.");
    if (file.size > MAX_BYTES) return setError("Max file size is 2MB.");
    const reader = new FileReader();
    reader.onload = () => onChange(reader.result);
    reader.readAsDataURL(file);
  };
  const onDrop = (e) => {
    e.preventDefault();
    setDrag(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-1.5 text-[13px] font-medium text-[#0A0A0A]", children: "Company logo" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        onClick: () => ref.current?.click(),
        onDragOver: (e) => {
          e.preventDefault();
          setDrag(true);
        },
        onDragLeave: () => setDrag(false),
        onDrop,
        role: "button",
        tabIndex: 0,
        onKeyDown: (e) => (e.key === "Enter" || e.key === " ") && ref.current?.click(),
        className: cn(
          "flex items-center gap-4 rounded-md border-2 border-dashed p-4 cursor-pointer",
          "transition-colors duration-150 ease-out motion-reduce:transition-none",
          drag ? "border-[#F97316] bg-[#F97316]/5" : "border-[#E5E5E3] hover:border-[#0A0A0A]"
        ),
        children: [
          value ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: value, alt: "Uploaded logo", className: "h-14 w-14 rounded-sm object-cover bg-[#F2F2F0]" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-14 w-14 rounded-sm bg-[#F2F2F0] flex items-center justify-center text-[#6B6B6B] text-[11px] uppercase tracking-[0.08em]", children: "Logo" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] text-[#0A0A0A] font-medium", children: value ? "Replace logo" : "Drag a file here or click to upload" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#6B6B6B]", children: "PNG, SVG or JPG. Max 2MB." })
          ] }),
          value && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: (e) => {
                e.stopPropagation();
                onChange(void 0);
              },
              className: "text-[13px] text-[#6B6B6B] hover:text-[#DC2626] transition-colors",
              children: "Remove"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              ref,
              type: "file",
              accept: ALLOWED.join(","),
              className: "hidden",
              onChange: (e) => e.target.files?.[0] && handleFile(e.target.files[0])
            }
          )
        ]
      }
    ),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { "aria-live": "polite", className: "mt-1.5 text-[13px] text-[#DC2626]", children: error })
  ] });
}
const STEPS = ["Company details", "Brand", "Admin account", "Review"];
function OnboardingStep2() {
  const navigate = useNavigate();
  const draft = onboardingStore.useSelector((s) => s);
  const set = (patch) => onboardingStore.update(patch);
  const onPrimary = computeTextColor(draft.primaryColor);
  const contrast = contrastRatio(draft.primaryColor, onPrimary);
  const showWarning = contrast < 4.5;
  const skip = () => {
    set({
      primaryColor: DEFAULT_THEME.primaryColor,
      secondaryColor: DEFAULT_THEME.secondaryColor,
      accentColor: DEFAULT_THEME.accentColor
    });
    navigate({
      to: "/onboarding/admin"
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
    e.preventDefault();
    navigate({
      to: "/onboarding/admin"
    });
  }, noValidate: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(StepIndicator, { steps: STEPS, currentStep: 1, className: "mb-10" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StepCard, { title: "Make it yours.", description: "Upload your logo and pick brand colors. You can change these later.", footer: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "ghost", onClick: () => navigate({
          to: "/onboarding"
        }), children: "← Back" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: skip, className: "text-[13px] text-[#6B6B6B] hover:text-[#0A0A0A] underline underline-offset-4 transition-colors", children: "Skip for now (use defaults)" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", size: "lg", children: "Continue →" })
    ] }), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-[1fr_320px] gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LogoUpload, { value: draft.logoDataUrl, onChange: (v) => set({
          logoDataUrl: v
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ColorPicker, { label: "Primary color", value: draft.primaryColor, onChange: (v) => set({
          primaryColor: v
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ColorPicker, { label: "Secondary color", value: draft.secondaryColor, onChange: (v) => set({
          secondaryColor: v
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ColorPicker, { label: "Accent color", value: draft.accentColor, onChange: (v) => set({
          accentColor: v
        }) }),
        showWarning && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "warning", children: "Contrast warning — text on primary may be hard to read" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold uppercase tracking-[0.08em] text-[#6B6B6B] mb-3", children: "Live preview" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ThemePreview, { primary: draft.primaryColor, secondary: draft.secondaryColor, accent: draft.accentColor, companyName: draft.companyName || "Your Company" })
      ] })
    ] }) })
  ] });
}
export {
  OnboardingStep2 as component
};
