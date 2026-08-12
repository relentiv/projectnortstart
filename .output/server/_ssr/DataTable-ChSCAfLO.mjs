import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as cn } from "./router-Arl77cRa.mjs";
function DataTable({
  columns,
  data,
  loading,
  emptyState,
  sortKey,
  sortDir,
  onSort,
  getRowKey,
  selectable,
  selectedKeys = [],
  onSelectionChange,
  isRowSelectable,
  className
}) {
  const keyOf = (row, i) => getRowKey ? getRowKey(row) : String(i);
  const selectableRows = selectable ? data.filter((r) => isRowSelectable ? isRowSelectable(r) : true) : [];
  const selectableKeys = selectableRows.map((r, i) => keyOf(r, i));
  const allSelected = selectableKeys.length > 0 && selectableKeys.every((k) => selectedKeys.includes(k));
  const toggleAll = () => onSelectionChange?.(allSelected ? [] : selectableKeys);
  const toggleOne = (k) => onSelectionChange?.(selectedKeys.includes(k) ? selectedKeys.filter((x) => x !== k) : [...selectedKeys, k]);
  const colCount = columns.length + (selectable ? 1 : 0);
  const handleSort = (key) => {
    if (!onSort) return;
    const nextDir = sortKey !== key ? "asc" : sortDir === "asc" ? "desc" : sortDir === "desc" ? null : "asc";
    onSort(key, nextDir);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("rounded-2xl border border-[#E5E5E3] bg-white overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.03)]", className), children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-[14px] min-w-[640px] border-collapse", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-[#FAFAF9] border-b border-[#E5E5E3]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
      selectable && /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: "w-10 px-4 py-3.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "checkbox",
          "aria-label": "Select all rows",
          checked: allSelected,
          onChange: toggleAll,
          className: "h-4 w-4 accent-[#0A0A0A] rounded cursor-pointer"
        }
      ) }),
      columns.map((col) => {
        const active = sortKey === col.key;
        const chev = active ? sortDir === "asc" ? "↑" : sortDir === "desc" ? "↓" : "" : "";
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          "th",
          {
            scope: "col",
            className: cn(
              "px-4 py-3.5 text-left text-[11px] font-extrabold uppercase tracking-[0.1em] text-[#8E8E8E]",
              col.align === "right" && "text-right",
              col.className
            ),
            children: col.sortable && onSort ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => handleSort(col.key),
                onKeyDown: (e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), handleSort(col.key)),
                className: "inline-flex items-center gap-1 hover:text-[#0A0A0A] transition-colors focus:outline-none focus-visible:text-[#0A0A0A]",
                children: [
                  col.label,
                  chev && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, children: chev })
                ]
              }
            ) : col.label
          },
          col.key
        );
      })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-[#F2F2F0]", children: loading ? Array.from({ length: 6 }).map((_, ri) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-[#F2F2F0] last:border-0", children: [
      selectable && /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-4" }),
      columns.map((c, ci) => /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: cn("px-4 py-4", c.className), children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block h-3.5 rounded-lg bg-[#F2F2F0] animate-pulse", style: { width: `${40 + (ri + ci) % 4 * 12}%` } }) }, ci))
    ] }, ri)) : data.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: colCount, className: "px-4 py-12", children: emptyState ?? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-[#6B6B6B] text-[14px]", children: "No data." }) }) }) : data.map((row, ri) => {
      const rowKey = keyOf(row, ri);
      const canSelect = isRowSelectable ? isRowSelectable(row) : true;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "tr",
        {
          className: "border-b border-[#F2F2F0] last:border-0 hover:bg-[#FAFAF9]/80 transition-colors",
          children: [
            selectable && /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "checkbox",
                "aria-label": "Select row",
                disabled: !canSelect,
                checked: selectedKeys.includes(rowKey),
                onChange: () => toggleOne(rowKey),
                className: "h-4 w-4 accent-[#0A0A0A] rounded disabled:opacity-40 cursor-pointer"
              }
            ) }),
            columns.map((col) => /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: cn("px-4 py-4 text-[#0A0A0A] font-medium", col.align === "right" && "text-right", col.className), children: col.render ? col.render(row) : String(row[col.key] ?? "") }, col.key))
          ]
        },
        rowKey
      );
    }) })
  ] }) }) });
}
export {
  DataTable as D
};
