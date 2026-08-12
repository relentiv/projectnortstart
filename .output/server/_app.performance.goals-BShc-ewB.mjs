import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { B as Button } from "./_ssr/Button-Crtgy6Xx.mjs";
import { I as Input } from "./_ssr/Input-CHeJoRlX.mjs";
import { T as Textarea } from "./_ssr/Textarea-DXR3KTuM.mjs";
import { S as Select } from "./_ssr/Select-Bg687n3T.mjs";
import { l as listEmployees, z as objectiveDisplayProgress, S as Spinner, y as performanceApi } from "./_ssr/router-Arl77cRa.mjs";
import { S as StatCard } from "./_ssr/StatCard-BGUt0oGs.mjs";
import { E as EmptyState } from "./_ssr/EmptyState-DCYWhDnT.mjs";
import { S as SlideOver } from "./_ssr/SlideOver-DXNNm8Us.mjs";
import { B as Breadcrumb } from "./_ssr/Breadcrumb-eir09VHE.mjs";
import { s as showToast } from "./_ssr/Toast-DlQQlIf6.mjs";
import { O as ObjectiveCard } from "./_ssr/ObjectiveCard-CkvlBAZ7.mjs";
import { a as authStore } from "./_ssr/auth-CjdYhZTR.mjs";
import { a as GOAL_PERIOD_LABELS, G as GOAL_STATUS_LABELS } from "./_ssr/performance-Bre1KeEI.mjs";
import { d as Target, a2 as TrendingUp, x as CircleCheck, T as TriangleAlert, ae as Funnel } from "./_libs/lucide-react.mjs";

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
import "./_ssr/Card-Dnu0IoXY.mjs";
import "./_ssr/GoalProgressRing-CvqKV00g.mjs";
import "./_ssr/GoalStatusBadge-BW0XD3XC.mjs";
import "./_ssr/rbac-CiXrabhS.mjs";
import "./_ssr/rbac-CHd75bNv.mjs";
function MyGoalsPage() {
  const user = authStore.useSelector((s) => s.user);
  const [loading, setLoading] = reactExports.useState(true);
  const [me, setMe] = reactExports.useState(null);
  const [objectives, setObjectives] = reactExports.useState([]);
  const [periodFilter, setPeriodFilter] = reactExports.useState("all");
  const [statusFilter, setStatusFilter] = reactExports.useState("all");
  const [open, setOpen] = reactExports.useState(false);
  const [title, setTitle] = reactExports.useState("");
  const [description, setDescription] = reactExports.useState("");
  const [period, setPeriod] = reactExports.useState("q1");
  const [krs, setKrs] = reactExports.useState([{
    title: "",
    targetValue: "",
    currentValue: "0",
    unit: "%"
  }]);
  const [saving, setSaving] = reactExports.useState(false);
  const reload = async (ownerId) => {
    const res = await performanceApi.listObjectives({
      ownerId
    });
    setObjectives(res.data ?? []);
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
      await reload(meEmp.id);
      if (alive) setLoading(false);
    })();
    return () => {
      alive = false;
    };
  }, [user?.email]);
  const filtered = reactExports.useMemo(() => objectives.filter((o) => (periodFilter === "all" || o.period === periodFilter) && (statusFilter === "all" || o.status === statusFilter)), [objectives, periodFilter, statusFilter]);
  const avgProgress = reactExports.useMemo(() => objectives.length ? Math.round(objectives.reduce((s, o) => s + objectiveDisplayProgress(o), 0) / objectives.length) : 0, [objectives]);
  const onTrackCount = reactExports.useMemo(() => objectives.filter((o) => o.status === "on_track" || o.status === "completed").length, [objectives]);
  const atRiskCount = reactExports.useMemo(() => objectives.filter((o) => o.status === "behind" || o.status === "at_risk").length, [objectives]);
  const resetForm = () => {
    setTitle("");
    setDescription("");
    setPeriod("q1");
    setKrs([{
      title: "",
      targetValue: "",
      currentValue: "0",
      unit: "%"
    }]);
  };
  const saveObjective = async () => {
    if (!me || !title.trim()) return;
    setSaving(true);
    try {
      const keyResults = krs.filter((k) => k.title.trim()).map((k) => ({
        id: `kr_${Math.random().toString(36).slice(2, 9)}`,
        objectiveId: "",
        title: k.title,
        targetValue: Number(k.targetValue) || 0,
        currentValue: Number(k.currentValue) || 0,
        unit: k.unit,
        progress: 0,
        status: "active",
        lastUpdatedAt: (/* @__PURE__ */ new Date()).toISOString()
      }));
      const res = await performanceApi.saveObjective({
        title: title.trim(),
        description: description.trim() || void 0,
        ownerId: me.id,
        level: "individual",
        departmentId: me.departmentId,
        period,
        year: (/* @__PURE__ */ new Date()).getFullYear(),
        createdBy: me.id,
        keyResults
      });
      if (res.error) return showToast(res.error.message, "error");
      showToast("Objective created successfully.", "success");
      setOpen(false);
      resetForm();
      await reload(me.id);
    } finally {
      setSaving(false);
    }
  };
  const updateKr = async (objectiveId, krId, value) => {
    const res = await performanceApi.updateKeyResult(objectiveId, krId, value);
    if (res.error) return showToast(res.error.message, "error");
    showToast("Progress updated.", "success");
    if (me) await reload(me.id);
  };
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
      label: "My Goals"
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "rounded-3xl border border-[#E5E5E3] bg-white p-6 sm:p-7 shadow-xs relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-[24px] sm:text-[28px] font-extrabold tracking-tight text-[#0A0A0A] font-sans", children: "My Goals & OKRs" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[13px] sm:text-[14px] text-[#6B6B6B] font-medium", children: "Define objectives, track key results, and monitor progress across evaluation periods." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => setOpen(true), className: "gap-2 bg-[#0A0A0A] flex hover:bg-neutral-800 text-white font-bold px-5 rounded-xl shadow-2xs", children: "New Objective" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Total Objectives", value: String(objectives.length), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-4 h-4 text-orange-500" }), trend: "Active OKRs", trendDir: "up" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Avg. Completion Rate", value: `${avgProgress}%`, icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-4 h-4 text-emerald-600" }), trend: avgProgress >= 70 ? "On track" : "Needs attention", trendDir: avgProgress >= 70 ? "up" : "neutral", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 w-full bg-[#E5E5E3] h-1.5 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-emerald-500 rounded-full transition-all duration-300", style: {
        width: `${avgProgress}%`
      } }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "On Track / Achieved", value: String(onTrackCount), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-emerald-600" }), trend: "Meeting targets", trendDir: "up" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Behind / At Risk", value: String(atRiskCount), variant: atRiskCount > 0 ? "dark" : "default", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-4 h-4 text-amber-500" }), trend: atRiskCount > 0 ? "Requires focus" : "No risks", trendDir: atRiskCount > 0 ? "down" : "up", actionHint: true, children: atRiskCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block w-2 h-2 rounded-full bg-orange-500 animate-ping" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-medium text-neutral-300", children: "Action needed on key results" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-2xl bg-[#FAFAF9] border border-[#E5E5E3] flex flex-wrap items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { className: "w-4 h-4 text-[#8E8E8E]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] font-extrabold uppercase tracking-wider text-[#8E8E8E]", children: "Filter Goals:" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { className: "w-44 text-xs", value: periodFilter, onChange: (e) => setPeriodFilter(e.target.value), options: [{
          value: "all",
          label: "All Periods"
        }, ...Object.entries(GOAL_PERIOD_LABELS).map(([value, label]) => ({
          value,
          label
        }))] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { className: "w-44 text-xs", value: statusFilter, onChange: (e) => setStatusFilter(e.target.value), options: [{
          value: "all",
          label: "All Statuses"
        }, ...Object.entries(GOAL_STATUS_LABELS).map(([value, label]) => ({
          value,
          label
        }))] })
      ] })
    ] }),
    filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No goals found", subtitle: "Try adjusting your filters, or click 'New Objective' above to create one." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: filtered.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx(ObjectiveCard, { objective: o, editable: true, onUpdateKr: (krId, v) => updateKr(o.id, krId, v) }, o.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SlideOver, { open, onClose: () => {
      setOpen(false);
      resetForm();
    }, title: "Create New Objective", description: "Define your goal title, period, and measurable key results.", footer: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: () => {
        setOpen(false);
        resetForm();
      }, children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", loading: saving, disabled: !title.trim(), onClick: () => void saveObjective(), className: "bg-[#0A0A0A] hover:bg-neutral-800 text-white font-bold", children: "Create objective" })
    ] }), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Objective Title", placeholder: "e.g. Increase product engagement rate", value: title, onChange: (e) => setTitle(e.target.value) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { label: "Description (optional)", placeholder: "Provide context or alignment details...", rows: 3, value: description, onChange: (e) => setDescription(e.target.value) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { label: "Evaluation Period", value: period, onChange: (e) => setPeriod(e.target.value), options: Object.entries(GOAL_PERIOD_LABELS).map(([value, label]) => ({
        value,
        label
      })) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 pt-2 border-t border-[#E5E5E3]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] font-extrabold uppercase tracking-wider text-[#8E8E8E]", children: "Key Results" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "secondary", onClick: () => setKrs((prev) => [...prev, {
            title: "",
            targetValue: "",
            currentValue: "0",
            unit: "%"
          }]), className: "text-xs", children: "+ Add KR" })
        ] }),
        krs.map((k, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 rounded-2xl bg-[#FAFAF9] border border-[#E5E5E3] space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Key result title (e.g. Reach 50,000 MAU)", value: k.title, onChange: (e) => setKrs((prev) => prev.map((x, xi) => xi === i ? {
            ...x,
            title: e.target.value
          } : x)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Target value", value: k.targetValue, onChange: (e) => setKrs((prev) => prev.map((x, xi) => xi === i ? {
              ...x,
              targetValue: e.target.value
            } : x)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Unit (%, items, $)", value: k.unit, onChange: (e) => setKrs((prev) => prev.map((x, xi) => xi === i ? {
              ...x,
              unit: e.target.value
            } : x)) })
          ] })
        ] }, i))
      ] })
    ] }) })
  ] });
}
export {
  MyGoalsPage as component
};
