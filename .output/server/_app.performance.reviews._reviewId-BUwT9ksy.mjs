import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { P as PageHeader } from "./_ssr/PageHeader-CpfbD_86.mjs";
import { C as Card } from "./_ssr/Card-Dnu0IoXY.mjs";
import { ad as Route$a, y as performanceApi, S as Spinner } from "./_ssr/router-Arl77cRa.mjs";
import { E as EmptyState } from "./_ssr/EmptyState-DCYWhDnT.mjs";
import { R as ReviewStatusBadge } from "./_ssr/ReviewStatusBadge-BH0ZYZ9i.mjs";
import { R as RatingInput } from "./_ssr/RatingInput-ChQ19i0W.mjs";

import "./_libs/tanstack__query-core.mjs";
import "./_libs/tanstack__react-query.mjs";
import "./_libs/tanstack__react-router.mjs";
import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval.mjs";
import "./_libs/unenv.mjs";


import "./_libs/seroval-plugins.mjs";


import "./_libs/react-dom.mjs";
import "./_libs/isbot.mjs";
import "./_libs/clsx.mjs";
import "./_libs/tailwind-merge.mjs";
import "./_libs/zod.mjs";
import "./_ssr/Badge-Cm1DzmgP.mjs";
import "./_ssr/performance-Bre1KeEI.mjs";
function ReviewDetailPage() {
  const {
    reviewId
  } = Route$a.useParams();
  const [loading, setLoading] = reactExports.useState(true);
  const [review, setReview] = reactExports.useState(null);
  const [cycle, setCycle] = reactExports.useState(null);
  const [scale, setScale] = reactExports.useState(null);
  reactExports.useEffect(() => {
    let alive = true;
    void (async () => {
      const r = await performanceApi.getReview(reviewId);
      if (!alive) return;
      if (r.data) {
        setReview(r.data);
        const [c, s] = await Promise.all([performanceApi.getCycle(r.data.cycleId), performanceApi.getSettings()]);
        setCycle(c.data ?? null);
        setScale(s.data?.ratingScales.find((x) => x.id === c.data?.ratingScaleId) ?? s.data?.ratingScales[0] ?? null);
      }
      setLoading(false);
    })();
    return () => {
      alive = false;
    };
  }, [reviewId]);
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 28 }) });
  if (!review) return /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "Review not found" });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 max-w-3xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: cycle?.name ?? "Review", description: "Review outcome and ratings." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] font-medium", children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ReviewStatusBadge, { status: review.status })
      ] }),
      !review.isSharedWithEmployee ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "Not shared yet", subtitle: "Results will appear here once HR shares them with you." }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 pt-2 border-t border-[#E5E5E3]", children: [
        scale && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(RatingInput, { scale, value: review.selfAssessment?.overallRating, label: "Self rating", disabled: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(RatingInput, { scale, value: review.managerReview?.overallRating, label: "Manager rating", disabled: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(RatingInput, { scale, value: review.calibratedRating, label: "Calibrated rating", disabled: true })
        ] }),
        review.managerReview?.overallComment && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] font-medium text-[#0A0A0A]", children: "Manager comments" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#6B6B6B] mt-1", children: review.managerReview.overallComment })
        ] })
      ] })
    ] })
  ] });
}
export {
  ReviewDetailPage as component
};
