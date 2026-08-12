import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { L as Link } from "./_libs/tanstack__react-router.mjs";
import { P as PageHeader } from "./_ssr/PageHeader-CpfbD_86.mjs";
import { B as Button } from "./_ssr/Button-CFBbQAsZ.mjs";
import { I as Input } from "./_ssr/Input-BJe__i93.mjs";
import { T as Textarea } from "./_ssr/Textarea-DsONP0BR.mjs";
import { C as Card } from "./_ssr/Card-AgXmnnkq.mjs";
import { ac as Route$b, l as listEmployees, S as Spinner, y as performanceApi, f as formatDate } from "./_ssr/router-CPP24NZe.mjs";
import { E as EmptyState } from "./_ssr/EmptyState-Cs_2WXRJ.mjs";
import { S as SlideOver } from "./_ssr/SlideOver-COdJD426.mjs";
import { s as showToast } from "./_ssr/Toast-DgpI28ao.mjs";
import { D as DatePicker } from "./_ssr/DatePicker-CLkrqJ5Y.mjs";
import { E as EmployeeAvatar } from "./_ssr/EmployeeAvatar-DWNa9Ptn.mjs";
import { O as ObjectiveCard } from "./_ssr/ObjectiveCard-DC56Yjnt.mjs";
import { R as ReviewStatusBadge } from "./_ssr/ReviewStatusBadge-BE3YubWa.mjs";
import { R as ReviewFormRenderer } from "./_ssr/ReviewFormRenderer-Dtk8phtK.mjs";
import { B as Badge } from "./_ssr/Badge-DOnZHL7Z.mjs";
import { a as authStore } from "./_ssr/auth-BAvMo5G5.mjs";

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
import "./_ssr/GoalProgressRing-C5SFRSti.mjs";
import "./_ssr/GoalStatusBadge-pT1aYIzn.mjs";
import "./_ssr/performance-Bre1KeEI.mjs";
import "./_ssr/RatingInput-f30bA8UL.mjs";
import "./_ssr/rbac-BwLVdIYU.mjs";
import "./_ssr/rbac-Ci1w5KuA.mjs";
const STATUS_VARIANT = {
  active: "warning",
  completed: "success",
  extended: "warning",
  terminated: "danger"
};
const GOAL_VARIANT = {
  pending: "default",
  in_progress: "warning",
  met: "success",
  not_met: "danger"
};
function PIPCard({ pip, editable, onSetGoalStatus, onAddCheckIn, children }) {
  const [note, setNote] = reactExports.useState("");
  const [saving, setSaving] = reactExports.useState(false);
  const submitCheckIn = async () => {
    if (!note.trim() || !onAddCheckIn) return;
    setSaving(true);
    try {
      await onAddCheckIn(note.trim());
      setNote("");
    } finally {
      setSaving(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[15px] font-semibold text-[#0A0A0A]", children: "Performance Improvement Plan" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[12px] text-[#6B6B6B] mt-0.5", children: [
          formatDate(pip.startDate),
          " – ",
          formatDate(pip.endDate)
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: STATUS_VARIANT[pip.status], children: pip.status.replace("_", " ") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#0A0A0A]", children: pip.reason }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 pt-2 border-t border-[#E5E5E3]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold uppercase tracking-[0.08em] text-[#6B6B6B]", children: "Goals" }),
      pip.goals.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 py-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#0A0A0A] truncate", children: g.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-[#6B6B6B]", children: [
            g.metric,
            " · due ",
            formatDate(g.dueDate)
          ] })
        ] }),
        editable ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "select",
          {
            value: g.status,
            onChange: (e) => onSetGoalStatus?.(g.id, e.target.value),
            className: "h-8 rounded-sm border border-[#E5E5E3] px-2 text-[12px]",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "pending", children: "Pending" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "in_progress", children: "In progress" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "met", children: "Met" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "not_met", children: "Not met" })
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: GOAL_VARIANT[g.status], children: g.status.replace("_", " ") })
      ] }, g.id))
    ] }),
    pip.checkIns.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 pt-2 border-t border-[#E5E5E3]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold uppercase tracking-[0.08em] text-[#6B6B6B]", children: "Check-ins" }),
      pip.checkIns.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[13px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-[#6B6B6B]", children: formatDate(c.date) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#0A0A0A]", children: c.notes })
      ] }, c.id))
    ] }),
    editable && onAddCheckIn && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 border-t border-[#E5E5E3] space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { rows: 2, placeholder: "Add a check-in note…", value: note, onChange: (e) => setNote(e.target.value) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "secondary", loading: saving, onClick: () => void submitCheckIn(), children: "Add check-in" }) })
    ] }),
    children
  ] });
}
function TeamMemberDetailPage() {
  const {
    employeeId
  } = Route$b.useParams();
  const user = authStore.useSelector((s) => s.user);
  const [loading, setLoading] = reactExports.useState(true);
  const [me, setMe] = reactExports.useState(null);
  const [employee, setEmployee] = reactExports.useState(null);
  const [objectives, setObjectives] = reactExports.useState([]);
  const [review, setReview] = reactExports.useState(null);
  const [cycle, setCycle] = reactExports.useState(null);
  const [form, setForm] = reactExports.useState(null);
  const [scale, setScale] = reactExports.useState(null);
  const [responses, setResponses] = reactExports.useState([]);
  const [comment, setComment] = reactExports.useState("");
  const [rating, setRating] = reactExports.useState(void 0);
  const [saving, setSaving] = reactExports.useState(false);
  const [pips, setPips] = reactExports.useState([]);
  const [pipOpen, setPipOpen] = reactExports.useState(false);
  const [pipReason, setPipReason] = reactExports.useState("");
  const [pipEnd, setPipEnd] = reactExports.useState("");
  const [pipGoals, setPipGoals] = reactExports.useState([{
    description: "",
    metric: "",
    dueDate: ""
  }]);
  const [pipSaving, setPipSaving] = reactExports.useState(false);
  const load = async (meEmp, emp) => {
    const [oRes, rRes, pRes] = await Promise.all([performanceApi.listObjectives({
      ownerId: emp.id
    }), performanceApi.listReviews({
      employeeId: emp.id,
      managerId: meEmp.id
    }), performanceApi.listPips({
      employeeId: emp.id
    })]);
    setObjectives(oRes.data ?? []);
    setPips(pRes.data ?? []);
    const r = rRes.data?.[0] ?? null;
    setReview(r);
    if (r) {
      const [cRes, sRes] = await Promise.all([performanceApi.getCycle(r.cycleId), performanceApi.getSettings()]);
      const c = cRes.data ?? null;
      setCycle(c);
      setScale(sRes.data?.ratingScales.find((s) => s.id === c?.ratingScaleId) ?? sRes.data?.ratingScales[0] ?? null);
      if (c) {
        const fRes = await performanceApi.getForm(c.reviewFormId);
        setForm(fRes.data ?? null);
      }
      setResponses(r.managerReview?.responses ?? []);
      setComment(r.managerReview?.overallComment ?? "");
      setRating(r.managerReview?.overallRating);
    } else {
      setCycle(null);
      setForm(null);
    }
  };
  reactExports.useEffect(() => {
    let alive = true;
    void (async () => {
      const emps = await listEmployees();
      const meEmp = emps.data?.find((e) => e.workEmail === user?.email) ?? emps.data?.[0] ?? null;
      const emp = emps.data?.find((e) => e.id === employeeId) ?? null;
      if (!meEmp || !emp) {
        if (alive) setLoading(false);
        return;
      }
      setMe(meEmp);
      setEmployee(emp);
      await load(meEmp, emp);
      if (alive) setLoading(false);
    })();
    return () => {
      alive = false;
    };
  }, [user?.email, employeeId]);
  const submitManagerReview = async (isDraft) => {
    if (!review || !me) return;
    setSaving(true);
    try {
      const res = await performanceApi.saveSubmission(review.id, "manager", {
        submitterId: me.id,
        responses,
        overallRating: rating ?? 0,
        overallComment: comment,
        isDraft
      });
      if (res.error) return showToast(res.error.message, "error");
      showToast(isDraft ? "Draft saved." : "Manager review submitted.", "success");
      if (employee) await load(me, employee);
    } finally {
      setSaving(false);
    }
  };
  const concludePip = async (pipId, outcome) => {
    if (!me || !employee) return;
    const res = await performanceApi.concludePip(pipId, outcome, `Concluded as ${outcome}.`);
    if (res.error) return showToast(res.error.message, "error");
    showToast("PIP concluded.", "success");
    await load(me, employee);
  };
  const createPip = async () => {
    if (!me || !employee || !pipReason.trim() || !pipEnd) {
      showToast("Reason and end date are required.", "error");
      return;
    }
    const goals = pipGoals.filter((g) => g.description.trim());
    if (goals.length === 0) {
      showToast("Add at least one improvement goal.", "error");
      return;
    }
    setPipSaving(true);
    try {
      const res = await performanceApi.createPip({
        employeeId: employee.id,
        managerId: me.id,
        createdBy: me.id,
        startDate: (/* @__PURE__ */ new Date()).toISOString(),
        endDate: new Date(pipEnd).toISOString(),
        reason: pipReason.trim(),
        goals
      });
      if (res.error) return showToast(res.error.message, "error");
      showToast("PIP created.", "success");
      setPipOpen(false);
      setPipReason("");
      setPipEnd("");
      setPipGoals([{
        description: "",
        metric: "",
        dueDate: ""
      }]);
      await load(me, employee);
    } finally {
      setPipSaving(false);
    }
  };
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 28 }) });
  if (!employee) return /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "Employee not found" });
  const canWrite = review && (review.status === "self_complete" || review.status === "manager_pending" || review.status === "not_started" || review.status === "self_pending");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: `${employee.firstName} ${employee.lastName}`, description: "Direct report's goals, review status and improvement plans.", actions: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/performance/team", className: "text-[13px] font-medium hover:underline", style: {
      color: "var(--tenant-primary)"
    }, children: "← Back to my team" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(EmployeeAvatar, { employee, size: "md" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[14px] font-medium text-[#0A0A0A]", children: [
          employee.firstName,
          " ",
          employee.lastName
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-[#6B6B6B]", children: employee.employeeCode })
      ] }),
      review && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ReviewStatusBadge, { status: review.status }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[15px] font-semibold text-[#0A0A0A]", children: "Goals" }),
      objectives.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No goals set", subtitle: "This employee hasn't created any objectives yet." }) : objectives.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx(ObjectiveCard, { objective: o }, o.id))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[15px] font-semibold text-[#0A0A0A]", children: "Manager review" }),
      !review ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No review cycle", subtitle: "There's no active review cycle for this employee yet." }) : !form || !scale ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "Review form unavailable", subtitle: "The review form for this cycle could not be loaded." }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ReviewFormRenderer, { sections: form.sections, respondent: "manager", scale, competencies: [], goals: objectives, responses, onChange: setResponses, readOnly: !canWrite, showConfidential: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { label: "Overall comment", rows: 3, disabled: !canWrite, value: comment, onChange: (e) => setComment(e.target.value) }),
        canWrite && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", loading: saving, onClick: () => void submitManagerReview(true), children: "Save draft" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", loading: saving, onClick: () => void submitManagerReview(false), children: "Submit review" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[15px] font-semibold text-[#0A0A0A]", children: "Performance Improvement Plans" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "secondary", onClick: () => setPipOpen(true), children: "+ Start PIP" })
      ] }),
      pips.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No PIPs", subtitle: "This employee is not currently on a performance improvement plan." }) : pips.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(PIPCard, { pip: p, editable: p.status === "active", onSetGoalStatus: async (goalId, status) => {
        await performanceApi.setPipGoalStatus(p.id, goalId, status);
        if (me && employee) await load(me, employee);
      }, onAddCheckIn: async (notes) => {
        if (!me) return;
        await performanceApi.addPipCheckIn(p.id, notes, me.id);
        if (employee) await load(me, employee);
      }, children: p.status === "active" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 pt-2 border-t border-[#E5E5E3]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "secondary", onClick: () => void concludePip(p.id, "improved"), children: "Conclude — Improved" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", onClick: () => void concludePip(p.id, "extended"), children: "Conclude — Extend" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", onClick: () => void concludePip(p.id, "separated"), children: "Conclude — Separate" })
      ] }) }, p.id))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SlideOver, { open: pipOpen, onClose: () => setPipOpen(false), title: "Start a Performance Improvement Plan", description: "Define the reason, timeline and improvement goals.", footer: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: () => setPipOpen(false), children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", loading: pipSaving, onClick: () => void createPip(), children: "Create PIP" })
    ] }), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { label: "Reason", rows: 3, value: pipReason, onChange: (e) => setPipReason(e.target.value) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DatePicker, { label: "End date", value: pipEnd, onChange: setPipEnd }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-[#0A0A0A]", children: "Improvement goals" }),
        pipGoals.map((g, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { className: "col-span-2", placeholder: "Goal description", value: g.description, onChange: (e) => setPipGoals((prev) => prev.map((x, xi) => xi === i ? {
            ...x,
            description: e.target.value
          } : x)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Success metric", value: g.metric, onChange: (e) => setPipGoals((prev) => prev.map((x, xi) => xi === i ? {
            ...x,
            metric: e.target.value
          } : x)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DatePicker, { value: g.dueDate, onChange: (v) => setPipGoals((prev) => prev.map((x, xi) => xi === i ? {
            ...x,
            dueDate: v
          } : x)) })
        ] }, i)),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", onClick: () => setPipGoals((prev) => [...prev, {
          description: "",
          metric: "",
          dueDate: ""
        }]), children: "+ Add goal" })
      ] })
    ] }) })
  ] });
}
export {
  TeamMemberDetailPage as component
};
