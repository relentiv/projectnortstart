import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { E as EmptyState } from "./EmptyState-DCYWhDnT.mjs";
import { D as DataTable } from "./DataTable-ChSCAfLO.mjs";
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
