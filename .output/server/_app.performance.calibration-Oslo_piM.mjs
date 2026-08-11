import { j as jsxRuntimeExports, r as reactExports } from "./_libs/react.mjs";
import { P as PageHeader } from "./_ssr/PageHeader-CpfbD_86.mjs";
import { T as Textarea } from "./_ssr/Textarea-DmSlcYuH.mjs";
import { S as Select } from "./_ssr/Select-CT_4ow88.mjs";
import { C as Card } from "./_ssr/Card-C9YFlUub.mjs";
import { y as performanceApi, l as listEmployees, S as Spinner, c as cn } from "./_ssr/router-LFebWAoY.mjs";
import { E as EmptyState } from "./_ssr/EmptyState-C_t8YrDr.mjs";
import { s as showToast } from "./_ssr/Toast-n7pN7q8Q.mjs";
import { P as PermissionGuard } from "./_ssr/PermissionGuard-CtwjQNn8.mjs";
import { R as RatingInput } from "./_ssr/RatingInput-BQ5wPmzA.mjs";
import { E as EmployeeAvatar } from "./_ssr/EmployeeAvatar-C6yRCmSB.mjs";

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
import "./_ssr/usePermission-5FQzLb5G.mjs";
import "./_ssr/rbac-B_cCMzV8.mjs";
import "./_ssr/rbac-B1d7raBj.mjs";
const POTENTIALS = ["high", "medium", "low"];
const PERFORMANCES = ["low", "medium", "high"];
const CELL_LABEL = {
  "low-high": "Enigma",
  "medium-high": "Growth potential",
  "high-high": "Star",
  "low-medium": "Inconsistent",
  "medium-medium": "Core player",
  "high-medium": "High performer",
  "low-low": "Risk",
  "medium-low": "Solid citizen",
  "high-low": "Trusted expert"
};
function NineBoxGrid({ entries, selectedReviewId, onSelect, onPlace }) {
  const byCell = /* @__PURE__ */ new Map();
  entries.forEach((e) => {
    if (!e.review.ninebox) return;
    const key = `${e.review.ninebox.performance}-${e.review.ninebox.potential}`;
    byCell.set(key, [...byCell.get(key) ?? [], e]);
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2", children: [
    POTENTIALS.map(
      (pot) => PERFORMANCES.map((perf) => {
        const key = `${perf}-${pot}`;
        const cellEntries = byCell.get(key) ?? [];
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => {
              if (selectedReviewId && onPlace) onPlace(selectedReviewId, { performance: perf, potential: pot });
            },
            className: cn(
              "min-h-[110px] rounded-md border border-[#E5E5E3] bg-white p-2 text-left align-top transition-colors",
              selectedReviewId && "hover:bg-[#FAFAF8] cursor-pointer"
            ),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-semibold uppercase tracking-[0.08em] text-[#9CA3AF]", children: CELL_LABEL[key] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1.5 flex flex-wrap gap-1.5", children: cellEntries.map(({ review, employee }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  role: "button",
                  tabIndex: 0,
                  onClick: (e) => {
                    e.stopPropagation();
                    onSelect?.(review.id);
                  },
                  title: `${employee.firstName} ${employee.lastName}`,
                  className: cn(
                    "inline-flex rounded-full ring-2",
                    selectedReviewId === review.id ? "ring-[var(--tenant-primary)]" : "ring-transparent"
                  ),
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(EmployeeAvatar, { employee, size: "sm" })
                },
                review.id
              )) })
            ]
          },
          key
        );
      })
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-3 flex justify-between text-[11px] text-[#6B6B6B] px-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "← Low performance" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "High performance →" })
    ] })
  ] });
}
function CalibrationRatingDistribution({ scale, ratings }) {
  const counts = scale.labels.map((l) => ratings.filter((r) => Math.round(r) === l.value).length);
  const max = Math.max(1, ...counts);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5", children: scale.labels.map((l, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "w-36 shrink-0 text-[12px] text-[#6B6B6B] truncate", children: [
      l.value,
      " — ",
      l.label
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-3 rounded-full bg-[#F2F2F0] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "h-full rounded-full",
        style: { width: `${counts[i] / max * 100}%`, background: l.color ?? "var(--tenant-primary)" }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-6 text-right text-[12px] tabular-nums text-[#0A0A0A]", children: counts[i] })
  ] }, l.value)) });
}
function CalibrationPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PermissionGuard, { permission: "performance.manage", fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 text-[14px] text-[#6B6B6B]", children: "You don't have permission to calibrate reviews." }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(CalibrationInner, {}) });
}
function CalibrationInner() {
  const [loading, setLoading] = reactExports.useState(true);
  const [cycles, setCycles] = reactExports.useState([]);
  const [cycleId, setCycleId] = reactExports.useState("");
  const [reviews, setReviews] = reactExports.useState([]);
  const [employees, setEmployees] = reactExports.useState([]);
  const [scale, setScale] = reactExports.useState(null);
  const [selectedId, setSelectedId] = reactExports.useState(null);
  const [note, setNote] = reactExports.useState("");
  reactExports.useEffect(() => {
    let alive = true;
    void (async () => {
      const [cRes, eRes] = await Promise.all([performanceApi.listCycles(), listEmployees()]);
      if (!alive) return;
      setCycles(cRes.data ?? []);
      setEmployees(eRes.data ?? []);
      setCycleId(cRes.data?.[0]?.id ?? "");
      setLoading(false);
    })();
    return () => {
      alive = false;
    };
  }, []);
  const loadReviews = async (id) => {
    const [rRes, cRes, sRes] = await Promise.all([performanceApi.listReviews({
      cycleId: id
    }), performanceApi.getCycle(id), performanceApi.getSettings()]);
    setReviews(rRes.data ?? []);
    setScale(sRes.data?.ratingScales.find((s) => s.id === cRes.data?.ratingScaleId) ?? sRes.data?.ratingScales[0] ?? null);
  };
  reactExports.useEffect(() => {
    if (cycleId) void loadReviews(cycleId);
  }, [cycleId]);
  const entries = reactExports.useMemo(() => reviews.map((r) => ({
    review: r,
    employee: employees.find((e) => e.id === r.employeeId)
  })).filter((e) => !!e.employee), [reviews, employees]);
  const selected = reviews.find((r) => r.id === selectedId) ?? null;
  reactExports.useEffect(() => {
    setNote(selected?.calibrationNote ?? "");
  }, [selectedId]);
  const place = async (reviewId, position) => {
    const res = await performanceApi.calibrate(reviewId, {
      ninebox: position
    });
    if (res.error) return showToast(res.error.message, "error");
    showToast("Placement saved.", "success");
    await loadReviews(cycleId);
  };
  const setCalibratedRating = async (value) => {
    if (!selected) return;
    const res = await performanceApi.calibrate(selected.id, {
      calibratedRating: value
    });
    if (res.error) return showToast(res.error.message, "error");
    showToast("Calibrated rating updated.", "success");
    await loadReviews(cycleId);
  };
  const saveNote = async () => {
    if (!selected) return;
    const res = await performanceApi.calibrate(selected.id, {
      calibrationNote: note
    });
    if (res.error) return showToast(res.error.message, "error");
    showToast("Calibration note saved.", "success");
    await loadReviews(cycleId);
  };
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 28 }) });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Calibration", description: "Place employees on the 9-box grid and adjust calibrated ratings." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { className: "max-w-72", label: "Review cycle", value: cycleId, onChange: (e) => setCycleId(e.target.value), options: cycles.map((c) => ({
      value: c.id,
      label: c.name
    })) }),
    entries.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No reviews in this cycle", subtitle: "Select a different cycle, or wait until reviews are in progress." }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "lg:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NineBoxGrid, { entries, selectedReviewId: selectedId, onSelect: setSelectedId, onPlace: place }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        scale && /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CalibrationRatingDistribution, { scale, ratings: reviews.map((r) => r.calibratedRating ?? r.managerReview?.overallRating).filter((v) => v !== void 0) }) }),
        selected && scale && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[13px] font-medium text-[#0A0A0A]", children: [
            employees.find((e) => e.id === selected.employeeId)?.firstName,
            " ",
            employees.find((e) => e.id === selected.employeeId)?.lastName
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(RatingInput, { scale, label: "Manager rating", value: selected.managerReview?.overallRating, disabled: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(RatingInput, { scale, label: "Calibrated rating", value: selected.calibratedRating, onChange: setCalibratedRating }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { label: "Calibration note", rows: 3, value: note, onChange: (e) => setNote(e.target.value), onBlur: saveNote })
        ] }),
        !selected && /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "Select an employee", subtitle: "Pick an avatar on the grid to adjust their calibrated rating." })
      ] })
    ] })
  ] });
}
export {
  CalibrationPage as component
};
