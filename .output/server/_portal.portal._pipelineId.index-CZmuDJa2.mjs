import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { d as useNavigate, L as Link } from "./_libs/tanstack__react-router.mjs";
import { B as Button } from "./_ssr/Button-Crtgy6Xx.mjs";
import { B as Badge } from "./_ssr/Badge-Cm1DzmgP.mjs";
import { C as Card } from "./_ssr/Card-Dnu0IoXY.mjs";
import { S as STEP_DEFINITIONS } from "./_ssr/candidate-CM1ucsTB.mjs";
import { a1 as Route$y, c as cn } from "./_ssr/router-Arl77cRa.mjs";
import { getPortalSession, getPipelineById, getCandidateById, getDraftSavedAt, getSubmissionsForPipeline } from "./_ssr/localStorage-DOek0dff.mjs";

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
function PortalStepItem({ label, description, state, href }) {
  const icon = state === "completed" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#16A34A] text-white text-[13px]", children: "✓" }) : state === "active" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--tenant-primary)] text-[var(--tenant-text-on-primary)] text-[13px]", children: "●" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#E5E5E3] text-[#9CA3AF] text-[13px]", children: "○" });
  const content = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 py-2", children: [
    icon,
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: cn("text-[14px] font-medium", state === "locked" ? "text-[#9CA3AF]" : "text-[#0A0A0A]"), children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-[#6B6B6B]", children: description })
    ] })
  ] });
  if (href && state !== "locked") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: href, className: "block rounded-md -mx-2 px-2 hover:bg-[#F2F2F0] transition-colors", children: content });
  }
  return content;
}
function PortalStepList({ pipelineId, status }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col divide-y divide-[#F2F2F0]", children: STEP_DEFINITIONS.map((step) => {
    const state = step.completedStatuses.includes(status) ? "completed" : step.activeStatuses.includes(status) ? "active" : "locked";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      PortalStepItem,
      {
        label: step.label,
        description: step.description,
        state,
        href: state === "active" ? step.route?.(pipelineId) ?? null : null
      },
      step.id
    );
  }) });
}
function formatDateTime(iso) {
  return new Date(iso).toLocaleString(void 0, {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit"
  });
}
function PortalDashboard() {
  const {
    pipelineId
  } = Route$y.useParams();
  const navigate = useNavigate();
  const [ready, setReady] = reactExports.useState(false);
  const [pipeline, setPipeline] = reactExports.useState(null);
  const [candidate, setCandidate] = reactExports.useState(null);
  const [draftSavedAt, setDraftSavedAt] = reactExports.useState(null);
  const [submissions, setSubmissions] = reactExports.useState([]);
  reactExports.useEffect(() => {
    const session = getPortalSession();
    if (!session || session.pipelineId !== pipelineId) {
      navigate({
        to: "/portal",
        search: {
          expired: "true"
        }
      });
      return;
    }
    const p = getPipelineById(pipelineId);
    if (!p) {
      navigate({
        to: "/portal",
        search: {
          expired: "true"
        }
      });
      return;
    }
    setPipeline(p);
    setCandidate(getCandidateById(p.candidateId));
    setDraftSavedAt(getDraftSavedAt(pipelineId));
    setSubmissions(getSubmissionsForPipeline(pipelineId));
    setReady(true);
  }, [pipelineId, navigate]);
  if (!ready || !pipeline) return null;
  const latestSubmission = submissions[submissions.length - 1] ?? null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-[18px] font-semibold text-[#0A0A0A]", children: [
          "Welcome back, ",
          candidate?.firstName ?? "there",
          "."
        ] }),
        pipeline.roleName ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#6B6B6B] mt-1", children: pipeline.roleName }) : null
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { padded: false, className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PortalStepList, { pipelineId: pipeline.id, status: pipeline.status }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      (pipeline.status === "portal_opened" || pipeline.status === "form_in_progress") && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[16px] font-semibold text-[#0A0A0A]", children: "Continue your application" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[14px] text-[#6B6B6B]", children: "Fill in your details so we can move your application forward." }),
        draftSavedAt ? /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-[12px] text-[#9CA3AF]", children: [
          "Resume where you left off — last saved ",
          formatDateTime(draftSavedAt)
        ] }) : null,
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "tenant", onClick: () => navigate({
          to: "/portal/$pipelineId/form",
          params: {
            pipelineId
          }
        }), children: "Start form" }) })
      ] }),
      pipeline.status === "submitted" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-[#BBF7D0] bg-[#F0FDF4]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "success", children: "Submitted" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-[16px] font-semibold text-[#0A0A0A]", children: "Thanks — your application has been submitted!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[14px] text-[#166534]", children: "Our team is reviewing your application. We'll be in touch soon." })
        ] }),
        latestSubmission ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[14px] font-semibold text-[#0A0A0A] mb-3", children: "Your submission" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("dl", { className: "grid grid-cols-1 gap-2 text-[13px]", children: Object.entries(latestSubmission.responses).map(([key, value]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between gap-4 border-b border-[#F2F2F0] py-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-[#6B6B6B]", children: key }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "text-[#0A0A0A] text-right break-words", children: String(value ?? "—") })
          ] }, key)) })
        ] }) : null
      ] }),
      (pipeline.status === "changes_requested" || pipeline.status === "resubmitting") && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-[#FDE68A] bg-[#FFFBEB]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "warning", children: "Changes needed" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-[16px] font-semibold text-[#0A0A0A]", children: "Update your application" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[14px] text-[#92400E]", children: pipeline.changeRequestNote || "HR has requested changes to your application." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "tenant", onClick: () => navigate({
          to: "/portal/$pipelineId/form",
          params: {
            pipelineId
          }
        }), children: "Update your application" }) })
      ] }),
      pipeline.status === "approved" && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-[#99F6E4] bg-[#F0FDFA]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "success", children: "Approved" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-[16px] font-semibold text-[#0A0A0A]", children: "Congratulations!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[14px] text-[#0F766E]", children: "Your application has been approved. We'll send your offer letter shortly." })
      ] }),
      (pipeline.status === "offer_pending" || pipeline.status === "offer_sent") && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[16px] font-semibold text-[#0A0A0A]", children: "Your offer is ready" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[14px] text-[#6B6B6B]", children: "Review the details of your offer and let us know your decision." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "tenant", onClick: () => navigate({
          to: "/portal/$pipelineId/offer",
          params: {
            pipelineId
          }
        }), children: "View offer" }) })
      ] }),
      (pipeline.status === "candidate_signed" || pipeline.status === "countersigned" || pipeline.status === "onboarding") && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[16px] font-semibold text-[#0A0A0A]", children: "Offer signed" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[14px] text-[#6B6B6B]", children: "We're getting things ready for your first day. Check back for onboarding updates." })
      ] }),
      pipeline.status === "converted" && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[16px] font-semibold text-[#0A0A0A]", children: "Welcome to the team!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[14px] text-[#6B6B6B]", children: "You're officially onboard. Your HR team will reach out with next steps." })
      ] }),
      (pipeline.status === "rejected" || pipeline.status === "withdrawn" || pipeline.status === "offer_rejected") && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[16px] font-semibold text-[#0A0A0A]", children: "This application is closed" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[14px] text-[#6B6B6B]", children: "There is no further action needed at this time." })
      ] })
    ] })
  ] });
}
export {
  PortalDashboard as component
};
