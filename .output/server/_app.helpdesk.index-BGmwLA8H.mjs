import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { d as useNavigate } from "./_libs/tanstack__react-router.mjs";
import { P as PageHeader } from "./_ssr/PageHeader-CpfbD_86.mjs";
import { c as cn, S as Spinner, r as relativeTime, f as formatDate, e as essApi } from "./_ssr/router-CPP24NZe.mjs";
import { B as Button } from "./_ssr/Button-CFBbQAsZ.mjs";
import { T as Textarea } from "./_ssr/Textarea-DsONP0BR.mjs";
import { B as Badge } from "./_ssr/Badge-DOnZHL7Z.mjs";
import { E as EmptyState } from "./_ssr/EmptyState-Cs_2WXRJ.mjs";
import { S as SlideOver } from "./_ssr/SlideOver-COdJD426.mjs";
import { s as showToast } from "./_ssr/Toast-DgpI28ao.mjs";
import { C as Card } from "./_ssr/Card-AgXmnnkq.mjs";
import { T as TICKET_STATUS_LABELS, a as TICKET_CATEGORY_LABELS, b as TICKET_PRIORITY_LABELS } from "./_ssr/ess-DxDpqIfW.mjs";
import { a as authStore } from "./_ssr/auth-BAvMo5G5.mjs";

import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval.mjs";
import "./_libs/unenv.mjs";


import "./_libs/seroval-plugins.mjs";


import "./_libs/react-dom.mjs";
import "./_libs/isbot.mjs";
import "./_libs/tanstack__query-core.mjs";
import "./_libs/tanstack__react-query.mjs";
import "./_libs/clsx.mjs";
import "./_libs/tailwind-merge.mjs";
import "./_libs/zod.mjs";
import "./_ssr/rbac-BwLVdIYU.mjs";
import "./_ssr/rbac-Ci1w5KuA.mjs";
const statusVariant = {
  open: "warning",
  in_progress: "warning",
  resolved: "success",
  closed: "default"
};
const priorityVariant = {
  low: "default",
  medium: "default",
  high: "warning",
  urgent: "danger"
};
function TicketCard({ ticket, onOpen }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { padded: false, className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      type: "button",
      onClick: onOpen,
      className: "w-full text-left p-5 hover:bg-[#FAFAF8] transition-colors rounded-md",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] font-mono text-[#6B6B6B]", children: ticket.code }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: statusVariant[ticket.status], children: TICKET_STATUS_LABELS[ticket.status] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: priorityVariant[ticket.priority], children: TICKET_PRIORITY_LABELS[ticket.priority] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[12px] text-[#6B6B6B] ml-auto", children: [
            "Updated ",
            relativeTime(ticket.updatedAt)
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[15px] font-semibold text-[#0A0A0A]", children: ticket.subject }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[13px] text-[#6B6B6B] line-clamp-2", children: ticket.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-[12px] text-[#6B6B6B]", children: [
          TICKET_CATEGORY_LABELS[ticket.category],
          ticket.assignedTo ? ` · Assigned to ${ticket.assignedTo}` : " · Unassigned",
          ticket.comments.length > 0 ? ` · ${ticket.comments.length} update${ticket.comments.length > 1 ? "s" : ""}` : ""
        ] })
      ]
    }
  ) });
}
const STATUSES = ["all", "open", "in_progress", "resolved", "closed"];
function HelpdeskPage() {
  const navigate = useNavigate();
  const user = authStore.useSelector((s) => s.user);
  const [tickets, setTickets] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [status, setStatus] = reactExports.useState("all");
  const [openTicket, setOpenTicket] = reactExports.useState(null);
  const [reply, setReply] = reactExports.useState("");
  const [busy, setBusy] = reactExports.useState(false);
  const reload = () => {
    void essApi.listTickets().then((r) => {
      setTickets(r.data ?? []);
      setLoading(false);
    });
  };
  reactExports.useEffect(reload, []);
  const shown = reactExports.useMemo(() => status === "all" ? tickets : tickets.filter((t) => t.status === status), [tickets, status]);
  const postReply = async () => {
    if (!openTicket || !reply.trim()) return;
    setBusy(true);
    const res = await essApi.addTicketComment(openTicket.id, {
      author: user?.fullName ?? "You",
      message: reply.trim()
    });
    setBusy(false);
    if (res.error) return showToast(res.error.message, "error");
    setReply("");
    setOpenTicket(res.data ?? null);
    reload();
    showToast("Reply added.", "success");
  };
  const close = async () => {
    if (!openTicket) return;
    const res = await essApi.closeTicket(openTicket.id);
    if (res.error) return showToast(res.error.message, "error");
    setOpenTicket(res.data ?? null);
    reload();
    showToast("Ticket closed.", "info");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Helpdesk", description: "Raise a request and follow it through to resolution.", actions: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", onClick: () => navigate({
      to: "/helpdesk/new"
    }), children: "Raise a ticket" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: STATUSES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setStatus(s), className: cn("rounded-full border px-3 py-1.5 text-[12px] font-medium transition-colors", status === s ? "border-transparent text-white" : "border-[#E5E5E3] text-[#3F3F46] hover:bg-[#FAFAF8]"), style: status === s ? {
      background: "var(--tenant-primary)"
    } : void 0, children: s === "all" ? "All" : TICKET_STATUS_LABELS[s] }, s)) }),
    loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 28 }) }) : shown.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No tickets here", subtitle: "Raise a ticket and the support team will pick it up.", action: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", onClick: () => navigate({
      to: "/helpdesk/new"
    }), children: "Raise a ticket" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 max-w-3xl", children: shown.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(TicketCard, { ticket: t, onOpen: () => setOpenTicket(t) }, t.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SlideOver, { open: openTicket !== null, onClose: () => setOpenTicket(null), title: openTicket?.subject ?? "Ticket", description: openTicket ? `${openTicket.code} · raised ${formatDate(openTicket.createdAt)}` : void 0, width: "lg", footer: openTicket && openTicket.status !== "closed" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", loading: busy, onClick: () => void postReply(), disabled: !reply.trim(), children: "Post reply" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", onClick: () => void close(), children: "Close ticket" })
    ] }) : void 0, children: openTicket && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "default", children: TICKET_CATEGORY_LABELS[openTicket.category] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "warning", children: TICKET_PRIORITY_LABELS[openTicket.priority] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "default", children: TICKET_STATUS_LABELS[openTicket.status] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] leading-relaxed text-[#3F3F46]", children: openTicket.description }),
      openTicket.attachmentName && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[12px] text-[#6B6B6B]", children: [
        "Attachment: ",
        openTicket.attachmentName
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[13px] font-semibold mb-2", children: "Updates" }),
        openTicket.comments.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#6B6B6B]", children: "No updates yet." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: openTicket.comments.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "rounded-md border border-[#E5E5E3] px-3 py-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] font-medium", children: c.author }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-[#9CA3AF]", children: relativeTime(c.at) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#3F3F46] mt-1", children: c.message })
        ] }, c.id)) })
      ] }),
      openTicket.status !== "closed" && /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { label: "Add a reply", rows: 4, value: reply, onChange: (e) => setReply(e.target.value), placeholder: "Share more detail or respond to the support team…" })
    ] }) })
  ] });
}
export {
  HelpdeskPage as component
};
