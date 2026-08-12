import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as cn } from "./router-CPP24NZe.mjs";
function StepIndicator({ steps, currentStep, className }) {
  const idx = (currentStep + 1).toString().padStart(2, "0");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex flex-col items-start gap-3", className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", role: "list", "aria-label": "Onboarding progress", children: steps.map((s, i) => {
      const state = i < currentStep ? "done" : i === currentStep ? "current" : "upcoming";
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          role: "listitem",
          "aria-current": state === "current" ? "step" : void 0,
          className: cn(
            "h-2.5 w-2.5 rounded-full transition-colors duration-150 motion-reduce:transition-none",
            state === "done" && "bg-[#F97316]",
            state === "current" && "bg-[#0A0A0A]",
            state === "upcoming" && "bg-transparent ring-1 ring-[#E5E5E3]"
          )
        },
        s
      );
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] font-semibold uppercase tracking-[0.08em] text-[#6B6B6B]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#0A0A0A]", children: idx }),
      " / ",
      steps[currentStep]
    ] })
  ] });
}
export {
  StepIndicator as S
};
