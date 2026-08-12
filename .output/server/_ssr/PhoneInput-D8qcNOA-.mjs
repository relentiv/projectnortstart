import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as cn } from "./router-Arl77cRa.mjs";
const CODES = ["+91", "+1", "+44", "+61", "+65", "+971"];
function PhoneInput({ label, value, onChange, error, required, id, className }) {
  const match = /^(\+\d{1,3})\s*(.*)$/.exec(value ?? "");
  const code = match?.[1] ?? "+91";
  const rest = match?.[2] ?? (value ?? "").replace(/^\+\d+\s*/, "");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("w-full", className), children: [
    label && /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { htmlFor: id, className: "mb-1.5 block text-[13px] font-medium text-[#0A0A0A]", children: [
      label,
      " ",
      required && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#DC2626]", children: "*" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "select",
        {
          "aria-label": "Country code",
          value: code,
          onChange: (e) => onChange(`${e.target.value} ${rest}`.trim()),
          className: "h-11 rounded-l-md border border-r-0 border-[#E5E5E3] bg-white px-2 text-[14px] focus:outline-none",
          children: CODES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: c, children: c }, c))
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          id,
          type: "tel",
          value: rest,
          onChange: (e) => onChange(`${code} ${e.target.value}`.trim()),
          className: cn(
            "flex-1 h-11 px-3 rounded-r-md border bg-white text-[14px] text-[#0A0A0A] focus:outline-none focus:ring-2",
            error ? "border-[#DC2626] focus:ring-[#DC2626]/20" : "border-[#E5E5E3] focus:border-[var(--tenant-primary)] focus:ring-[var(--tenant-primary)]/20"
          )
        }
      )
    ] }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-[13px] text-[#DC2626]", children: error })
  ] });
}
export {
  PhoneInput as P
};
