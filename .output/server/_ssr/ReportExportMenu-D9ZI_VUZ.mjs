import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { B as Button } from "./Button-Crtgy6Xx.mjs";
import { s as showToast } from "./Toast-DlQQlIf6.mjs";
import { M as EXPORT_LARGE_ROW_THRESHOLD, N as exportReport } from "./router-Arl77cRa.mjs";
import { l as ChevronDown, ab as Download } from "../_libs/lucide-react.mjs";
function ReportExportMenu({
  rows,
  columns,
  filenameBase = "report",
  disabled
}) {
  const [open, setOpen] = reactExports.useState(false);
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);
  const handle = (format) => {
    setOpen(false);
    if (rows.length > EXPORT_LARGE_ROW_THRESHOLD) {
      showToast("Preparing your export — this may take a moment for large reports…", "info");
    }
    exportReport(rows, columns, format, filenameBase);
    if (rows.length <= EXPORT_LARGE_ROW_THRESHOLD) {
      showToast(`Export ready — ${rows.length} rows.`, "success");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref, className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "secondary", disabled, leadingIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { size: 14 }), trailingIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 14 }), onClick: () => setOpen((o) => !o), children: "Export" }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-0 z-20 mt-1 w-40 rounded-md border border-[#E5E5E3] bg-white shadow-md py-1", children: ["csv", "excel", "pdf"].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => handle(f),
        className: "w-full text-left px-3 py-2 text-[13px] text-[#0A0A0A] hover:bg-[#FAFAF8]",
        children: f === "csv" ? "CSV" : f === "excel" ? "Excel (.xls)" : "PDF"
      },
      f
    )) })
  ] });
}
export {
  ReportExportMenu as R
};
