import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as cn } from "./router-LFebWAoY.mjs";
const sizeMap = { sm: 24, md: 36, lg: 64, xl: 80 };
const statusColor = {
  active: "#16A34A",
  probation: "#F59E0B",
  inactive: "#9CA3AF",
  notice_period: "#F97316",
  exited: "#DC2626"
};
function EmployeeAvatar({ employee, size = "md", showStatus, status, className }) {
  const px = sizeMap[size];
  const initials = (employee.firstName[0] ?? "?") + (employee.lastName[0] ?? "");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: cn("relative inline-flex shrink-0", className), style: { width: px, height: px }, children: [
    employee.avatarUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: employee.avatarUrl, alt: "", className: "h-full w-full rounded-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: "h-full w-full rounded-full inline-flex items-center justify-center font-semibold uppercase",
        style: {
          background: "var(--tenant-secondary)",
          color: "var(--tenant-text-on-secondary)",
          fontSize: Math.round(px * 0.4)
        },
        children: initials
      }
    ),
    showStatus && status && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        "aria-label": status,
        className: "absolute bottom-0 right-0 rounded-full ring-2 ring-white",
        style: {
          background: statusColor[status],
          width: Math.max(8, Math.round(px * 0.22)),
          height: Math.max(8, Math.round(px * 0.22))
        }
      }
    )
  ] });
}
export {
  EmployeeAvatar as E
};
