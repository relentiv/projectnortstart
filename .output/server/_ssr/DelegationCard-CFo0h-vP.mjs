import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { B as Button } from "./Button-CFBbQAsZ.mjs";
import { B as Badge } from "./Badge-DOnZHL7Z.mjs";
import { C as Card } from "./Card-AgXmnnkq.mjs";
import { c as cn } from "./router-CPP24NZe.mjs";
function DelegationCard({ delegation: d, fromName, toName, roleName, onRevoke }) {
  const start = new Date(d.startDate).getTime();
  const end = new Date(d.endDate).getTime();
  const now = Date.now();
  const pct = Math.max(0, Math.min(100, (now - start) / (end - start) * 100));
  const remainingMs = end - now;
  const expiringSoon = d.status === "active" && remainingMs > 0 && remainingMs < 1e3 * 60 * 60 * 48;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[14px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-[#0A0A0A]", children: fromName ?? d.fromEmployeeId }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-2 text-[#6B6B6B]", children: "→" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-[#0A0A0A]", children: toName ?? d.toEmployeeId })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        expiringSoon && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "warning", children: "Expiring soon" }),
        d.status === "active" && !expiringSoon && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "success", children: "Active" }),
        d.status === "expired" && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "default", children: "Expired" }),
        d.status === "revoked" && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "danger", children: "Revoked" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[13px] text-[#6B6B6B]", children: [
      "Delegated: ",
      d.roleId ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#0A0A0A] font-medium", children: roleName ?? "Role" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        d.permissions?.length ?? 0,
        " specific permissions"
      ] }),
      d.reason && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "block text-[12px] mt-1 italic", children: [
        '"',
        d.reason,
        '"'
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[12px] text-[#6B6B6B] mb-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: new Date(d.startDate).toLocaleDateString() }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: new Date(d.endDate).toLocaleDateString() })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 rounded-full bg-[#E5E5E3] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("h-full rounded-full"), style: { width: `${pct}%`, background: expiringSoon ? "#F59E0B" : "var(--tenant-primary)" } }) })
    ] }),
    d.status === "active" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", onClick: () => onRevoke(d.id), children: "Revoke" }) })
  ] });
}
export {
  DelegationCard as D
};
