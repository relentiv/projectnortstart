import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as cn } from "./router-LFebWAoY.mjs";
function FileUpload({
  label,
  accept = ".pdf,.jpg,.jpeg,.png",
  maxSizeMB = 5,
  onFileSelect,
  onFileRemove,
  currentFile,
  error,
  className
}) {
  const inputRef = reactExports.useRef(null);
  const [dragging, setDragging] = reactExports.useState(false);
  const [localErr, setLocalErr] = reactExports.useState(void 0);
  const validate = (f) => {
    const allowed = accept.split(",").map((a) => a.trim().toLowerCase().replace(".", ""));
    const ext = f.name.split(".").pop()?.toLowerCase() ?? "";
    if (!allowed.includes(ext)) return `Only ${accept} files accepted`;
    if (f.size > maxSizeMB * 1024 * 1024) return `File exceeds ${maxSizeMB}MB limit`;
    return null;
  };
  const handle = (file) => {
    const err = validate(file);
    if (err) {
      setLocalErr(err);
      return;
    }
    setLocalErr(void 0);
    onFileSelect(file);
  };
  const onDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const f = e.dataTransfer.files?.[0];
    if (f) handle(f);
  };
  const shownError = error ?? localErr;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("w-full", className), children: [
    label && /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-1.5 block text-[13px] font-medium text-[#0A0A0A]", children: label }),
    currentFile ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 rounded-md border border-[#E5E5E3] bg-[#FAFAF8] px-3 py-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, className: "text-[#16A34A]", children: "✓" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] truncate text-[#0A0A0A]", children: currentFile.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[12px] text-[#6B6B6B] shrink-0", children: [
          currentFile.sizeKB,
          " KB"
        ] })
      ] }),
      onFileRemove && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: onFileRemove, className: "text-[12px] text-[#DC2626] hover:underline", children: "Remove" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => inputRef.current?.click(),
        onKeyDown: (e) => (e.key === "Enter" || e.key === " ") && inputRef.current?.click(),
        onDragOver: (e) => {
          e.preventDefault();
          setDragging(true);
        },
        onDragLeave: () => setDragging(false),
        onDrop,
        className: cn(
          "w-full rounded-md border-2 border-dashed px-4 py-6 text-[13px] text-[#6B6B6B] transition-colors",
          dragging ? "border-[var(--tenant-primary)] bg-[var(--tenant-primary)]/5" : "border-[#E5E5E3] bg-white hover:bg-[#FAFAF8]",
          shownError && "border-[#DC2626]"
        ),
        children: [
          "Drag a file here or click to browse",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-[11px] text-[#9CA3AF]", children: [
            accept,
            " · max ",
            maxSizeMB,
            "MB"
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        ref: inputRef,
        type: "file",
        accept,
        className: "sr-only",
        onChange: (e) => {
          const f = e.target.files?.[0];
          if (f) handle(f);
          e.target.value = "";
        }
      }
    ),
    shownError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-[13px] text-[#DC2626]", children: shownError })
  ] });
}
export {
  FileUpload as F
};
