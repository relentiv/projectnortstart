import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { B as Button } from "./Button-B92Yl16p.mjs";
import { B as Badge } from "./Badge-BQrIKnVV.mjs";
import { C as Card } from "./Card-C9YFlUub.mjs";
import { f as formatDate } from "./router-LFebWAoY.mjs";
import { A as ANNOUNCEMENT_CATEGORY_LABELS } from "./ess-DxDpqIfW.mjs";
const variantFor = {
  general: "default",
  policy: "tenant-accent",
  event: "success",
  celebration: "success",
  urgent: "danger"
};
function AnnouncementCard({ announcement, onAcknowledge }) {
  const a = announcement;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: variantFor[a.category], children: ANNOUNCEMENT_CATEGORY_LABELS[a.category] }),
      a.pinned && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "warning", children: "Pinned" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] text-[#6B6B6B] ml-auto", children: formatDate(a.publishedAt) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[16px] font-semibold text-[#0A0A0A]", children: a.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-[14px] leading-relaxed text-[#3F3F46]", children: a.body })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 pt-1 border-t border-[#F2F2F0]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[12px] text-[#6B6B6B]", children: [
        a.author,
        " · ",
        a.audience
      ] }),
      a.requiresAck && (a.acknowledged ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] font-medium text-[#15803D]", children: "Acknowledged" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "secondary", onClick: onAcknowledge, children: "Acknowledge" }))
    ] })
  ] });
}
export {
  AnnouncementCard as A
};
