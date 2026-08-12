import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { B as Button } from "./_ssr/Button-Crtgy6Xx.mjs";
import { l as listEmployees, S as Spinner, y as performanceApi } from "./_ssr/router-Arl77cRa.mjs";
import { S as StatCard } from "./_ssr/StatCard-BGUt0oGs.mjs";
import { E as EmptyState } from "./_ssr/EmptyState-DCYWhDnT.mjs";
import { B as Breadcrumb } from "./_ssr/Breadcrumb-eir09VHE.mjs";
import { s as showToast } from "./_ssr/Toast-DlQQlIf6.mjs";
import { R as ReviewCycleBadge } from "./_ssr/ReviewCycleBadge-DE2gxc2Q.mjs";
import { R as ReviewFormRenderer } from "./_ssr/ReviewFormRenderer-DATX8wP_.mjs";
import { L as Link } from "./_libs/tanstack__react-router.mjs";
import { C as Card } from "./_ssr/Card-Dnu0IoXY.mjs";
import { I as InfoTooltip } from "./_ssr/InfoTooltip-CiBS8Xkj.mjs";
import { R as ReviewStatusBadge } from "./_ssr/ReviewStatusBadge-BH0ZYZ9i.mjs";
import { B as Badge } from "./_ssr/Badge-Cm1DzmgP.mjs";
import { M as MultiSelect } from "./_ssr/MultiSelect-TfWZYelZ.mjs";
import { a as authStore } from "./_ssr/auth-CjdYhZTR.mjs";
import { C as Clock, U as Users, a3 as Award, ac as Save, ad as Send } from "./_libs/lucide-react.mjs";

import "./_libs/tanstack__query-core.mjs";
import "./_libs/tanstack__react-query.mjs";
import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval.mjs";
import "./_libs/unenv.mjs";


import "./_libs/seroval-plugins.mjs";


import "./_libs/clsx.mjs";
import "./_libs/tailwind-merge.mjs";
import "./_libs/zod.mjs";
import "./_libs/react-dom.mjs";
import "./_libs/isbot.mjs";
import "./_ssr/performance-Bre1KeEI.mjs";
import "./_ssr/Textarea-DXR3KTuM.mjs";
import "./_ssr/RatingInput-ChQ19i0W.mjs";
import "./_ssr/GoalProgressRing-CvqKV00g.mjs";
import "./_ssr/rbac-CiXrabhS.mjs";
import "./_ssr/rbac-CHd75bNv.mjs";
function ReviewSummaryCard({ review, cycle }) {
  const self = review.selfAssessment?.overallRating;
  const mgr = review.managerReview?.overallRating;
  const cal = review.calibratedRating;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "flex items-center justify-between gap-4 flex-wrap", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] font-medium text-[#0A0A0A]", children: cycle?.name ?? "Review cycle" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[12px] text-[#6B6B6B] mt-0.5", children: [
        review.isSharedWithEmployee ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Self: ",
          self ?? "—",
          " · Manager: ",
          mgr ?? "—",
          " · Calibrated: ",
          cal ?? "—"
        ] }) : "Results not shared yet",
        review.isSharedWithEmployee && cal !== void 0 && mgr !== void 0 && cal !== mgr && /* @__PURE__ */ jsxRuntimeExports.jsx(InfoTooltip, { content: "This rating was adjusted during the calibration process." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ReviewStatusBadge, { status: review.status }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/performance/reviews/$reviewId",
          params: { reviewId: review.id },
          className: "text-[13px] font-medium hover:underline",
          style: { color: "var(--tenant-primary)" },
          children: "View →"
        }
      )
    ] })
  ] });
}
function PeerNominationPanel({ review, employees, minPeers, onSave }) {
  const [ids, setIds] = reactExports.useState(review.peerNominees);
  const [saving, setSaving] = reactExports.useState(false);
  const options = employees.filter((e) => e.id !== review.employeeId).map((e) => ({ value: e.id, label: `${e.firstName} ${e.lastName}` }));
  const save = async () => {
    if (ids.includes(review.employeeId)) return showToast("You cannot nominate yourself as a peer reviewer.", "error");
    setSaving(true);
    try {
      await onSave(ids);
    } finally {
      setSaving(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[15px] font-semibold", children: "Peer reviewers" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[12px] text-[#6B6B6B]", children: [
        "Nominate at least ",
        minPeers,
        " colleagues."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MultiSelect, { options, value: ids, onChange: setIds, placeholder: "Select colleagues…" }),
    ids.length > 0 && ids.length < minPeers && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[12px] text-[#B45309]", children: [
      minPeers - ids.length,
      " more nomination(s) needed. If the minimum isn't met by the deadline, the cycle proceeds without them and the shortfall is noted on your record."
    ] }),
    review.peerReviews.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5 pt-2 border-t border-[#E5E5E3]", children: review.peerReviews.map((p) => {
      const e = employees.find((x) => x.id === p.reviewerId);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center justify-between text-[13px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: e ? `${e.firstName} ${e.lastName}` : p.reviewerId }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: p.status === "completed" ? "success" : p.status === "declined" ? "danger" : "warning", children: p.status })
      ] }, p.id);
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "primary", loading: saving, onClick: () => void save(), children: "Save nominations" }) })
  ] });
}
function MyReviewsPage() {
  const user = authStore.useSelector((s) => s.user);
  const [loading, setLoading] = reactExports.useState(true);
  const [me, setMe] = reactExports.useState(null);
  const [employees, setEmployees] = reactExports.useState([]);
  const [reviews, setReviews] = reactExports.useState([]);
  const [cycles, setCycles] = reactExports.useState([]);
  const [form, setForm] = reactExports.useState(null);
  const [scale, setScale] = reactExports.useState(null);
  const [goals, setGoals] = reactExports.useState([]);
  const [responses, setResponses] = reactExports.useState([]);
  const [comment, setComment] = reactExports.useState("");
  const [rating, setRating] = reactExports.useState(void 0);
  const [saving, setSaving] = reactExports.useState(false);
  const activeReview = reviews.find((r) => r.status !== "completed") ?? reviews[0];
  const activeCycle = cycles.find((c) => c.id === activeReview?.cycleId);
  const settings = performanceApi.getSettings;
  const load = async (meEmp) => {
    const [empRes, rRes, cRes] = await Promise.all([listEmployees(), performanceApi.listReviews({
      employeeId: meEmp.id
    }), performanceApi.listCycles()]);
    setEmployees(empRes.data ?? []);
    setReviews(rRes.data ?? []);
    setCycles(cRes.data ?? []);
    const first = (rRes.data ?? []).find((r) => r.status !== "completed") ?? (rRes.data ?? [])[0];
    if (first) {
      const cycle = (cRes.data ?? []).find((c) => c.id === first.cycleId);
      const [formRes, settingsRes, goalsRes] = await Promise.all([cycle ? performanceApi.getForm(cycle.reviewFormId) : Promise.resolve({
        data: void 0
      }), settings(), performanceApi.listObjectives({
        ownerId: meEmp.id,
        period: void 0
      })]);
      setForm(formRes.data ?? null);
      setScale(settingsRes.data?.ratingScales.find((s) => s.id === cycle?.ratingScaleId) ?? settingsRes.data?.ratingScales[0] ?? null);
      setGoals(goalsRes.data ?? []);
      setResponses(first.selfAssessment?.responses ?? []);
      setComment(first.selfAssessment?.overallComment ?? "");
      setRating(first.selfAssessment?.overallRating);
    }
  };
  reactExports.useEffect(() => {
    let alive = true;
    void (async () => {
      const emps = await listEmployees();
      const meEmp = emps.data?.find((e) => e.workEmail === user?.email) ?? emps.data?.[0] ?? null;
      if (!meEmp) {
        if (alive) setLoading(false);
        return;
      }
      setMe(meEmp);
      await load(meEmp);
      if (alive) setLoading(false);
    })();
    return () => {
      alive = false;
    };
  }, [user?.email]);
  const settingsMinPeers = 3;
  const submitSelf = async (isDraft) => {
    if (!activeReview) return;
    setSaving(true);
    try {
      const res = await performanceApi.saveSubmission(activeReview.id, "self", {
        submitterId: me.id,
        responses,
        overallRating: rating ?? 0,
        overallComment: comment,
        isDraft
      });
      if (res.error) return showToast(res.error.message, "error");
      showToast(isDraft ? "Draft saved successfully." : "Self-assessment submitted.", "success");
      if (me) await load(me);
    } finally {
      setSaving(false);
    }
  };
  const otherReviews = reactExports.useMemo(() => reviews.filter((r) => r.id !== activeReview?.id), [reviews, activeReview]);
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center items-center py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 32 }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto space-y-6 sm:space-y-7 pb-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumb, { items: [{
      label: "Overview",
      to: "/dashboard"
    }, {
      label: "Performance",
      to: "/performance"
    }, {
      label: "My Reviews"
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "rounded-3xl border border-[#E5E5E3] bg-white p-6 sm:p-7 shadow-xs relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-[24px] sm:text-[28px] font-extrabold tracking-tight text-[#0A0A0A] font-sans", children: "My Reviews & Assessments" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[13px] sm:text-[14px] text-[#6B6B6B] font-medium", children: "Complete self-evaluations, nominate peer reviewers, and inspect calibrated ratings." })
      ] }),
      activeCycle && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3 w-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ReviewCycleBadge, { status: activeCycle.status }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Self-Assessment Status", value: activeReview ? activeReview.status === "completed" ? "Completed" : activeReview.status === "self_pending" || activeReview.status === "not_started" ? "Pending" : "Under Review" : "No Active Review", variant: activeReview && activeReview.status !== "completed" ? "dark" : "default", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4" }), trend: activeReview ? activeReview.status : "Idle", trendDir: activeReview && activeReview.status !== "completed" ? "down" : "up", actionHint: true, children: activeReview && activeReview.status !== "completed" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block w-2 h-2 rounded-full bg-orange-500 animate-ping" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-medium text-neutral-300", children: "Self-assessment required" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Peer Nominations", value: activeReview?.peerIds ? `${activeReview.peerIds.length} / ${settingsMinPeers}` : `0 / ${settingsMinPeers}`, icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4 text-emerald-600" }), trend: "Minimum 3 required", trendDir: "neutral" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Active Evaluation Cycle", value: activeCycle ? activeCycle.name : "None", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-4 h-4 text-orange-500" }), trend: activeCycle ? `Deadline: ${new Date(activeCycle.selfReviewDeadline).toLocaleDateString()}` : "No cycle running", trendDir: "neutral" })
    ] }),
    !activeReview ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No active reviews found", subtitle: "You will see your self-assessment form here once HR initiates a review cycle." }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
      activeCycle?.includesPeerReview && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-3xl border border-[#E5E5E3] bg-white p-6 sm:p-7 shadow-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PeerNominationPanel, { review: activeReview, employees, minPeers: settingsMinPeers, onSave: async (ids) => {
        const res = await performanceApi.nominatePeers(activeReview.id, ids);
        if (res.error) return showToast(res.error.message, "error");
        showToast("Peer nominations saved successfully.", "success");
        if (me) await load(me);
      } }) }),
      form && scale ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-[#E5E5E3] bg-white p-6 sm:p-7 shadow-xs space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pb-4 mb-4 border-b border-[#F2F2F0] flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[18px] font-extrabold text-[#0A0A0A] tracking-tight", children: "Self-Assessment Questionnaire" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-[#6B6B6B]", children: "Evaluate your performance and goal achievements for this cycle." })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ReviewFormRenderer, { sections: form.sections, respondent: "self", scale, competencies: [], goals, responses, onChange: setResponses, readOnly: activeReview.status !== "not_started" && activeReview.status !== "self_pending", showConfidential: false }),
        (activeReview.status === "not_started" || activeReview.status === "self_pending") && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 border-t border-[#F2F2F0] flex items-center justify-end gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "secondary", loading: saving, onClick: () => void submitSelf(true), className: "gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-3.5 h-3.5" }),
            "Save draft"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "primary", loading: saving, onClick: () => void submitSelf(false), className: "gap-2 bg-[#0A0A0A] hover:bg-neutral-800 text-white font-bold px-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-3.5 h-3.5" }),
            "Submit self-assessment"
          ] })
        ] })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "Review form unavailable", subtitle: "The review form for this cycle could not be loaded." })
    ] }),
    otherReviews.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 pt-4 border-t border-[#E5E5E3]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[18px] font-extrabold text-[#0A0A0A] tracking-tight", children: "Past Review Cycles" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: otherReviews.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(ReviewSummaryCard, { review: r, cycle: cycles.find((c) => c.id === r.cycleId) }, r.id)) })
    ] })
  ] });
}
export {
  MyReviewsPage as component
};
