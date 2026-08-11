import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { B as Breadcrumb } from "./_ssr/Breadcrumb-BAW4dGjH.mjs";
import { E as EmployeeAvatar } from "./_ssr/EmployeeAvatar-C6yRCmSB.mjs";
import { l as listEmployees, s as settingsApi, c as cn } from "./_ssr/router-LFebWAoY.mjs";
import { S as SearchInput } from "./_ssr/SearchInput-B8rrkKGc.mjs";
import { B as Button } from "./_ssr/Button-B92Yl16p.mjs";

import "./_libs/tanstack__react-router.mjs";
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
function OrgNode({ employee, highlighted, hasChildren, collapsed, onToggle, designationName }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "rounded-md border bg-white px-3 py-2 inline-flex items-center gap-2 min-w-[180px] transition-all",
        highlighted ? "border-[var(--tenant-primary)] shadow-md" : "border-[#E5E5E3] hover:border-[var(--tenant-primary)]/40"
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(EmployeeAvatar, { employee, size: "sm" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[12px] font-semibold text-[#0A0A0A] truncate", children: [
            employee.firstName,
            " ",
            employee.lastName
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-[#6B6B6B] truncate", children: designationName ?? "—" })
        ] }),
        hasChildren && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: onToggle,
            "aria-label": collapsed ? "Expand" : "Collapse",
            className: "h-5 w-5 rounded-sm text-[#6B6B6B] hover:bg-[#F2F2F0]",
            children: collapsed ? "+" : "−"
          }
        )
      ]
    }
  );
}
function buildTree(employees) {
  const byId = /* @__PURE__ */ new Map();
  employees.forEach((e) => byId.set(e.id, { emp: e, children: [] }));
  const roots = [];
  employees.forEach((e) => {
    const node = byId.get(e.id);
    const parent = e.reportingManagerId ? byId.get(e.reportingManagerId) : void 0;
    if (parent) parent.children.push(node);
    else roots.push(node);
  });
  return roots;
}
function NodeBlock({
  node,
  designations,
  highlightedId
}) {
  const [collapsed, setCollapsed] = reactExports.useState(false);
  const desigName = designations.find((d) => d.id === node.emp.designationId)?.name;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex flex-col items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      OrgNode,
      {
        employee: node.emp,
        highlighted: highlightedId === node.emp.id,
        hasChildren: node.children.length > 0,
        collapsed,
        onToggle: () => setCollapsed((c) => !c),
        designationName: desigName
      }
    ),
    !collapsed && node.children.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-4 w-px bg-[var(--tenant-primary)]/30", "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "flex items-start gap-6 pt-0 relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-0 right-0 top-0 h-px bg-[var(--tenant-primary)]/30", "aria-hidden": true }),
        node.children.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex flex-col items-center pt-4 relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-0 left-1/2 h-4 w-px -translate-x-1/2 bg-[var(--tenant-primary)]/30", "aria-hidden": true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(NodeBlock, { node: c, designations, highlightedId })
        ] }, c.emp.id))
      ] })
    ] })
  ] });
}
function OrgChart({ employees, designations, query, zoom }) {
  const tree = reactExports.useMemo(() => buildTree(employees), [employees]);
  const highlightedId = reactExports.useMemo(() => {
    if (!query) return void 0;
    const q = query.toLowerCase();
    return employees.find((e) => `${e.firstName} ${e.lastName}`.toLowerCase().includes(q))?.id;
  }, [query, employees]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-auto p-8 bg-[#FAFAF8] rounded-md border border-[#E5E5E3] h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { transform: `scale(${zoom})`, transformOrigin: "top left", display: "inline-block" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex items-start gap-8", children: tree.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(NodeBlock, { node: r, designations, highlightedId }, r.emp.id)) }) }) });
}
function OrgChartControls({ query, onQuery, onZoomIn, onZoomOut, onFit }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold uppercase tracking-[0.1em] text-[#6B6B6B] mb-2", children: "Search" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SearchInput, { placeholder: "Search by name…", value: query, onChange: onQuery })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold uppercase tracking-[0.1em] text-[#6B6B6B] mb-2", children: "View" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", size: "sm", onClick: onZoomOut, children: "−" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", size: "sm", onClick: onZoomIn, children: "+" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", size: "sm", onClick: onFit, children: "Fit" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-[#6B6B6B]", children: "Click a node to expand or collapse its reports." })
  ] });
}
function OrgChartPage() {
  const [employees, setEmployees] = reactExports.useState([]);
  const [designations, setDesignations] = reactExports.useState([]);
  const [query, setQuery] = reactExports.useState("");
  const [zoom, setZoom] = reactExports.useState(1);
  reactExports.useEffect(() => {
    void Promise.all([listEmployees(), settingsApi.listDesignations()]).then(([e, d]) => {
      if (e.data) setEmployees(e.data);
      if (d.data) setDesignations(d.data);
    });
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 h-[calc(100vh-6rem)] flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumb, { items: [{
      label: "Org chart"
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-[28px] font-bold tracking-[-0.02em]", children: "Org chart" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-4 min-h-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "rounded-md border border-[#E5E5E3] bg-white p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(OrgChartControls, { query, onQuery: setQuery, onZoomIn: () => setZoom((z) => Math.min(1.6, z + 0.1)), onZoomOut: () => setZoom((z) => Math.max(0.5, z - 0.1)), onFit: () => setZoom(1) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(OrgChart, { employees, designations, query, zoom }) })
    ] })
  ] });
}
export {
  OrgChartPage as component
};
