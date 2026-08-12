import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { T as Textarea } from "./Textarea-DXR3KTuM.mjs";
import { C as Card } from "./Card-Dnu0IoXY.mjs";
import { R as RatingInput } from "./RatingInput-ChQ19i0W.mjs";
import { G as GoalProgressRing } from "./GoalProgressRing-CvqKV00g.mjs";
function CompetencyRatingGroup({ competencies, scale, values, onChange, disabled }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-[#E5E5E3]", children: competencies.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-3 flex flex-col md:flex-row md:items-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-[#0A0A0A]", children: c.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-[#6B6B6B]", children: c.description })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RatingInput, { scale, value: values[c.id], onChange: (v) => onChange(c.id, v), disabled })
  ] }, c.id)) });
}
function key(questionId, competencyId) {
  return competencyId ? `${questionId}::${competencyId}` : questionId;
}
function ReviewFormRenderer({
  sections,
  respondent,
  scale,
  competencies,
  goals,
  responses,
  onChange,
  readOnly,
  showConfidential = true
}) {
  const map = new Map(responses.map((r) => [key(r.questionId, r.competencyId), r]));
  const set = (r) => {
    const k = key(r.questionId, r.competencyId);
    const next = responses.filter((x) => key(x.questionId, x.competencyId) !== k);
    onChange([...next, r]);
  };
  const visible = sections.filter(
    (s) => s.respondents.includes(respondent) && (showConfidential || !s.isConfidential)
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-5", children: visible.map((sec) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[15px] font-semibold text-[#0A0A0A]", children: sec.title }),
      sec.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-[#6B6B6B] mt-0.5", children: sec.description }),
      sec.isConfidential && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 rounded-md bg-[#FEF3C7] border border-[#FCD34D] px-3 py-1.5 text-[12px] text-[#92400E]", children: "Confidential — visible to HR and managers only." })
    ] }),
    sec.questions.map((q) => {
      if (q.type === "goal_review") {
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-[#0A0A0A]", children: q.label }),
          goals.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "rounded-md bg-[#FEF3C7] border border-[#FCD34D] px-3 py-2 text-[12px] text-[#92400E]", children: "No goals found for this employee in this cycle period. Proceed with a qualitative review." }) : goals.map((g) => {
            const r2 = map.get(key(q.id, g.id));
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-[#E5E5E3] p-3 space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(GoalProgressRing, { value: g.progress, size: 40 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-[#0A0A0A]", children: g.title })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                RatingInput,
                {
                  scale,
                  value: r2?.rating,
                  disabled: readOnly,
                  onChange: (v) => set({ questionId: q.id, competencyId: g.id, rating: v, text: r2?.text })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  rows: 2,
                  disabled: readOnly,
                  placeholder: "Comment on this goal",
                  value: r2?.text ?? "",
                  onChange: (e) => set({ questionId: q.id, competencyId: g.id, rating: r2?.rating, text: e.target.value })
                }
              )
            ] }, g.id);
          })
        ] }, q.id);
      }
      if (q.type === "competency_group") {
        const comps = competencies.filter((c) => (q.competencyIds ?? []).includes(c.id));
        const values = {};
        comps.forEach((c) => {
          values[c.id] = map.get(key(q.id, c.id))?.rating;
        });
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[13px] font-medium text-[#0A0A0A]", children: [
            q.label,
            q.required && " *"
          ] }),
          q.helpText && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-[#6B6B6B]", children: q.helpText }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CompetencyRatingGroup,
            {
              competencies: comps,
              scale,
              values,
              disabled: readOnly,
              onChange: (cid, v) => set({ questionId: q.id, competencyId: cid, rating: v })
            }
          )
        ] }, q.id);
      }
      const r = map.get(key(q.id));
      if (q.type === "rating") {
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            RatingInput,
            {
              scale,
              label: `${q.label}${q.required ? " *" : ""}`,
              value: r?.rating,
              disabled: readOnly,
              onChange: (v) => set({ questionId: q.id, rating: v })
            }
          ),
          q.helpText && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[12px] text-[#6B6B6B]", children: q.helpText })
        ] }, q.id);
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        Textarea,
        {
          label: `${q.label}${q.required ? " *" : ""}`,
          hint: q.helpText,
          rows: 4,
          disabled: readOnly,
          value: r?.text ?? "",
          onChange: (e) => set({ questionId: q.id, text: e.target.value })
        },
        q.id
      );
    })
  ] }, sec.id)) });
}
export {
  ReviewFormRenderer as R
};
