import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { B as Button } from "./_ssr/Button-B92Yl16p.mjs";
import { S as Spinner, c as cn } from "./_ssr/router-LFebWAoY.mjs";
import { E as EmptyState } from "./_ssr/EmptyState-C_t8YrDr.mjs";
import { h as listAuditLog } from "./_ssr/rbac-B1d7raBj.mjs";

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
const COLOR = {
  role_created: "bg-blue-100 text-blue-800",
  role_updated: "bg-amber-100 text-amber-800",
  role_deleted: "bg-red-100 text-red-800",
  role_assigned: "bg-green-100 text-green-800",
  role_unassigned: "bg-red-100 text-red-800",
  delegation_created: "bg-teal-100 text-teal-800",
  delegation_revoked: "bg-orange-100 text-orange-800"
};
function AuditLogRow({ entry }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-[#E5E5E3] last:border-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 pr-4 text-[12px] text-[#6B6B6B] whitespace-nowrap", children: new Date(entry.timestamp).toLocaleString() }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 pr-4 text-[13px] text-[#0A0A0A]", children: entry.actorName }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 pr-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("text-[11px] font-medium px-2 py-0.5 rounded", COLOR[entry.action]), children: entry.action.replace(/_/g, " ") }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 text-[13px] text-[#0A0A0A]", children: entry.details })
  ] });
}
function AuditPage() {
  const [entries, setEntries] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    void listAuditLog().then((r) => {
      if (r.data) setEntries(r.data);
      setLoading(false);
    });
  }, []);
  const exportCsv = () => {
    const rows = [["Timestamp", "Actor", "Action", "Details"], ...entries.map((e) => [e.timestamp, e.actorName, e.action, e.details])];
    const csv = rows.map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], {
      type: "text/csv"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "permission-audit.csv";
    a.click();
    URL.revokeObjectURL(url);
  };
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 28 }) });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: exportCsv, disabled: entries.length === 0, children: "Export audit log" }) }),
    entries.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No audit entries yet", subtitle: "Role changes and delegations will appear here." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-md border border-[#E5E5E3] bg-white overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-[#FAFAF8] text-left text-[11px] uppercase text-[#6B6B6B]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2", children: "Timestamp" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2", children: "Actor" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2", children: "Action" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2", children: "Details" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: entries.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsx(AuditLogRow, { entry: e }, e.id)) })
    ] }) })
  ] });
}
export {
  AuditPage as component
};
