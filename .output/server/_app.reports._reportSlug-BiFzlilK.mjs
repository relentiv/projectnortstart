import { j as jsxRuntimeExports, r as reactExports } from "./_libs/react.mjs";
import { f as useParams, L as Link } from "./_libs/tanstack__react-router.mjs";
import { B as Button } from "./_ssr/Button-Crtgy6Xx.mjs";
import { L as getStandardReport, S as Spinner } from "./_ssr/router-Arl77cRa.mjs";
import { A as Alert } from "./_ssr/Alert-DIhou9mC.mjs";
import { E as EmptyState } from "./_ssr/EmptyState-DCYWhDnT.mjs";
import { B as Breadcrumb } from "./_ssr/Breadcrumb-eir09VHE.mjs";
import { P as PermissionGuard } from "./_ssr/PermissionGuard-DHUddp2f.mjs";
import { R as ReportExportMenu } from "./_ssr/ReportExportMenu-D9ZI_VUZ.mjs";
import { R as ReportTable } from "./_ssr/ReportTable-DYN8I8dj.mjs";
import { ab as Download } from "./_libs/lucide-react.mjs";

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
import "./_ssr/usePermission-C7-ELJsH.mjs";
import "./_ssr/rbac-CiXrabhS.mjs";
import "./_ssr/rbac-CHd75bNv.mjs";
import "./_ssr/Toast-DlQQlIf6.mjs";
import "./_ssr/DataTable-ChSCAfLO.mjs";
function ReportChart({ title, points, kind, height = 220 }) {
  if (points.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-[#E5E5E3] bg-white p-5", children: [
      title && /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[13px] font-semibold text-[#0A0A0A] mb-3", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#6B6B6B]", children: "No data to chart." })
    ] });
  }
  const width = Math.max(360, points.length * 70);
  const padding = 32;
  const max = Math.max(1, ...points.map((p) => p.value));
  const innerH = height - padding * 2;
  const innerW = width - padding * 2;
  const step = points.length > 1 ? innerW / (points.length - 1) : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-[#E5E5E3] bg-white p-5 overflow-x-auto", children: [
    title && /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[13px] font-semibold text-[#0A0A0A] mb-3", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width, height, role: "img", "aria-label": title, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: padding, y1: height - padding, x2: width - padding, y2: height - padding, stroke: "#E5E5E3", strokeWidth: 1 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: padding, y1: padding, x2: padding, y2: height - padding, stroke: "#E5E5E3", strokeWidth: 1 }),
      kind === "bar" && points.map((p, i) => {
        const barW = Math.min(40, innerW / points.length - 12);
        const x = padding + innerW / points.length * i + (innerW / points.length - barW) / 2;
        const h = p.value / max * innerH;
        const y = height - padding - h;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x, y, width: barW, height: h, fill: p.color ?? "var(--tenant-primary)", rx: 2 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: x + barW / 2, y: height - padding + 14, textAnchor: "middle", fontSize: 10, fill: "#6B6B6B", children: p.label.length > 10 ? `${p.label.slice(0, 9)}…` : p.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: x + barW / 2, y: y - 4, textAnchor: "middle", fontSize: 10, fill: "#0A0A0A", children: p.value })
        ] }, p.label);
      }),
      kind === "line" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "polyline",
          {
            fill: "none",
            stroke: "var(--tenant-primary)",
            strokeWidth: 2,
            points: points.map((p, i) => `${padding + i * step},${height - padding - p.value / max * innerH}`).join(" ")
          }
        ),
        points.map((p, i) => {
          const x = padding + i * step;
          const y = height - padding - p.value / max * innerH;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: x, cy: y, r: 3, fill: "var(--tenant-primary)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x, y: height - padding + 14, textAnchor: "middle", fontSize: 10, fill: "#6B6B6B", children: p.label.length > 10 ? `${p.label.slice(0, 9)}…` : p.label })
          ] }, p.label);
        })
      ] })
    ] })
  ] });
}
function ReportFilterBar({ onExportClick, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 rounded-md border border-[#E5E5E3] bg-white px-4 py-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center gap-3", children }),
    onExportClick && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "secondary", leadingIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { size: 14 }), onClick: onExportClick, children: "Export" })
  ] });
}
function StandardReportPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PermissionGuard, { permission: "reports.view", fallback: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumb, { items: [{
      label: "Reports",
      to: "/reports"
    }, {
      label: "Report"
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { variant: "warning", children: "You don't have permission to view reports. Contact your administrator if you believe this is a mistake." })
  ] }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(StandardReportInner, {}) });
}
function StandardReportInner() {
  const {
    reportSlug
  } = useParams({
    from: "/_app/reports/$reportSlug"
  });
  const [report, setReport] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [notFound, setNotFound] = reactExports.useState(false);
  reactExports.useEffect(() => {
    setLoading(true);
    setNotFound(false);
    void getStandardReport(reportSlug).then((r) => {
      if (r.error || !r.data) {
        setNotFound(true);
      } else {
        setReport(r.data);
      }
      setLoading(false);
    });
  }, [reportSlug]);
  if (!loading && notFound) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumb, { items: [{
        label: "Reports",
        to: "/reports"
      }, {
        label: "Unknown report"
      }] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "We don't have a report by that name", subtitle: "It may have been renamed or removed. Head back to browse the available reports.", action: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/reports", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", children: "← Back to reports" }) }) })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumb, { items: [{
      label: "Reports",
      to: "/reports"
    }, {
      label: report?.title ?? "Report"
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-[28px] font-semibold tracking-[-0.01em] text-[#0A0A0A]", children: loading ? "Loading…" : report?.title }),
      report?.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[15px] text-[#6B6B6B]", children: report.description })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ReportFilterBar, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] text-[#6B6B6B]", children: "Standard report — data refreshed automatically." }) }),
    loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 28 }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-4", children: report?.charts.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(ReportChart, { title: c.title, points: c.points, kind: c.kind }, c.title)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ReportExportMenu, { rows: report?.rows ?? [], columns: report?.columns ?? [], filenameBase: reportSlug }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ReportTable, { columns: report?.columns ?? [], rows: report?.rows ?? [] })
    ] })
  ] });
}
export {
  StandardReportPage as component
};
