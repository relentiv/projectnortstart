import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { E as EmptyState } from "./EmptyState-Cs_2WXRJ.mjs";
import { D as DataTable } from "./DataTable-DBeYYWhW.mjs";
function ReportTable({
  columns,
  rows,
  loading
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    DataTable,
    {
      columns: columns.map((c) => ({ key: c.key, label: c.label })),
      data: rows,
      loading,
      getRowKey: (r) => JSON.stringify(r),
      emptyState: /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No rows", subtitle: "Adjust filters or fields to see results." })
    }
  );
}
export {
  ReportTable as R
};
