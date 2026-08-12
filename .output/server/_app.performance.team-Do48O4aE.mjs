import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { P as PageHeader } from "./_ssr/PageHeader-CpfbD_86.mjs";
import { E as EmptyState } from "./_ssr/EmptyState-Cs_2WXRJ.mjs";
import { D as DataTable } from "./_ssr/DataTable-DBeYYWhW.mjs";
import { L as Link } from "./_libs/tanstack__react-router.mjs";
import { E as EmployeeAvatar } from "./_ssr/EmployeeAvatar-DWNa9Ptn.mjs";
import { R as ReviewStatusBadge } from "./_ssr/ReviewStatusBadge-BE3YubWa.mjs";
import { B as Badge } from "./_ssr/Badge-DOnZHL7Z.mjs";
import { l as listEmployees, y as performanceApi } from "./_ssr/router-CPP24NZe.mjs";
import { a as authStore } from "./_ssr/auth-BAvMo5G5.mjs";

import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval.mjs";
import "./_libs/unenv.mjs";


import "./_libs/seroval-plugins.mjs";


import "./_libs/react-dom.mjs";
import "./_libs/isbot.mjs";
import "./_ssr/performance-Bre1KeEI.mjs";
import "./_libs/tanstack__query-core.mjs";
import "./_libs/tanstack__react-query.mjs";
import "./_libs/clsx.mjs";
import "./_libs/tailwind-merge.mjs";
import "./_libs/zod.mjs";
import "./_ssr/rbac-BwLVdIYU.mjs";
import "./_ssr/rbac-Ci1w5KuA.mjs";
function TeamReviewEmployeeCell({ employee }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(EmployeeAvatar, { employee, size: "sm" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "block text-[13px] font-medium truncate", children: [
        employee.firstName,
        " ",
        employee.lastName
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[11px] text-[#6B6B6B]", children: employee.employeeCode })
    ] })
  ] });
}
function TeamReviewGoalsCell({ goalCount, avgProgress }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "block w-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[12px] text-[#6B6B6B]", children: [
      goalCount,
      " goals — ",
      Math.round(avgProgress),
      "% avg"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 block h-1 rounded-full bg-[#E5E5E3] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block h-full rounded-full", style: { width: `${Math.min(100, avgProgress)}%`, background: "var(--tenant-primary)" } }) })
  ] });
}
function TeamReviewStatusCell({ review }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ReviewStatusBadge, { status: review.status });
}
function TeamReviewSelfCell({ review }) {
  if (review.selfMissed) return /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "danger", children: "Missed" });
  if (review.selfAssessment && !review.selfAssessment.isDraft) return /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "success", children: "Submitted" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "warning", children: "Pending" });
}
function TeamReviewActionCell({ row }) {
  const done = row.review.status === "manager_complete" || row.review.status === "completed";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Link,
    {
      to: "/performance/team/$employeeId",
      params: { employeeId: row.employee.id },
      className: "text-[13px] font-medium hover:underline",
      style: { color: "var(--tenant-primary)" },
      children: done ? "View →" : "Write review →"
    }
  );
}
function TeamReviewsPage() {
  const user = authStore.useSelector((s) => s.user);
  const [loading, setLoading] = reactExports.useState(true);
  const [rows, setRows] = reactExports.useState([]);
  reactExports.useEffect(() => {
    let alive = true;
    void (async () => {
      const emps = await listEmployees();
      const meEmp = emps.data?.find((e) => e.workEmail === user?.email) ?? emps.data?.[0] ?? null;
      if (!meEmp) {
        if (alive) setLoading(false);
        return;
      }
      const reports = (emps.data ?? []).filter((e) => e.reportingManagerId === meEmp.id);
      const built = [];
      for (const emp of reports) {
        const [rRes, oRes] = await Promise.all([performanceApi.listReviews({
          employeeId: emp.id,
          managerId: meEmp.id
        }), performanceApi.listObjectives({
          ownerId: emp.id
        })]);
        const review = rRes.data?.[0];
        if (!review) continue;
        const goals = oRes.data ?? [];
        const avgProgress = goals.length ? goals.reduce((s, g) => s + Math.min(100, g.progress), 0) / goals.length : 0;
        built.push({
          employee: emp,
          review,
          goalCount: goals.length,
          avgProgress
        });
      }
      if (!alive) return;
      setRows(built);
      setLoading(false);
    })();
    return () => {
      alive = false;
    };
  }, [user?.email]);
  const columns = reactExports.useMemo(() => [{
    key: "employee",
    label: "Employee",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsx(TeamReviewEmployeeCell, { employee: r.employee })
  }, {
    key: "goals",
    label: "Goal progress",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsx(TeamReviewGoalsCell, { goalCount: r.goalCount, avgProgress: r.avgProgress })
  }, {
    key: "self",
    label: "Self-assessment",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsx(TeamReviewSelfCell, { review: r.review })
  }, {
    key: "status",
    label: "Status",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsx(TeamReviewStatusCell, { review: r.review })
  }, {
    key: "action",
    label: "",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsx(TeamReviewActionCell, { row: r })
  }], []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "My team", description: "Direct reports' goal progress and review status." }),
    loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(DataTable, { columns, data: [], loading: true }) : rows.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No direct reports", subtitle: "You don't have any direct reports assigned yet." }) : /* @__PURE__ */ jsxRuntimeExports.jsx(DataTable, { columns, data: rows, getRowKey: (r) => r.review.id })
  ] });
}
export {
  TeamReviewsPage as component
};
