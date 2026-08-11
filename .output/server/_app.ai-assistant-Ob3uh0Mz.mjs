import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { B as Button } from "./_ssr/Button-B92Yl16p.mjs";
import { M as Modal } from "./_ssr/Modal-DIFPhA7e.mjs";
import { E as EmptyState } from "./_ssr/EmptyState-C_t8YrDr.mjs";
import { B as Breadcrumb } from "./_ssr/Breadcrumb-BAW4dGjH.mjs";
import { u as usePermission } from "./_ssr/usePermission-5FQzLb5G.mjs";
import { u as useAiChat, A as AiChatMessageBubble, a as AiThinkingBubble, b as AiUnavailableState, c as AiSuggestedPrompts, d as AiChatInput } from "./_ssr/useAiChat-B2PIJfKS.mjs";
import { r as relativeTime, c as cn } from "./_ssr/router-LFebWAoY.mjs";

import "./_libs/tanstack__react-router.mjs";
import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval.mjs";
import "./_libs/unenv.mjs";


import "./_libs/seroval-plugins.mjs";


import "./_libs/react-dom.mjs";
import "./_libs/isbot.mjs";
import "./_ssr/rbac-B_cCMzV8.mjs";
import "./_ssr/rbac-B1d7raBj.mjs";
import "./_ssr/Alert-DctqS4QO.mjs";
import "./_ssr/ai-Cs4yquvb.mjs";
import "./_ssr/auth-Dq95Bc2W.mjs";
import "./_ssr/useCurrentEmployee-9Y57ts2r.mjs";
import "./_libs/tanstack__query-core.mjs";
import "./_libs/tanstack__react-query.mjs";
import "./_libs/clsx.mjs";
import "./_libs/tailwind-merge.mjs";
import "./_libs/zod.mjs";
function AiSessionList({ sessions, activeId, onSelect, onNew }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 border-b border-[#E5E5E3]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: onNew,
        className: "w-full rounded-md border border-[#E5E5E3] bg-white px-3 py-2 text-[13px] font-medium hover:bg-[#F2F2F0] transition-colors",
        children: "+ New conversation"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto", children: sessions.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "px-4 py-6 text-center text-[12.5px] text-[#6B6B6B]", children: "No conversations yet." }) : sessions.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => onSelect(s.id),
        className: cn(
          "block w-full text-left px-3.5 py-2.5 border-b border-[#F2F2F0] hover:bg-[#FAFAF8] transition-colors",
          activeId === s.id && "bg-[#FAFAF8]"
        ),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium truncate", children: s.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-[#9CA3AF] mt-0.5", children: relativeTime(s.lastActiveAt) })
        ]
      },
      s.id
    )) })
  ] });
}
function AiAssistantPage() {
  const canChat = usePermission("ai.chat");
  const [mobileSessionsOpen, setMobileSessionsOpen] = reactExports.useState(false);
  const scrollRef = reactExports.useRef(null);
  const chat = useAiChat(true);
  reactExports.useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth"
    });
  }, [chat.activeSession?.messages.length, chat.sending]);
  if (!canChat) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumb, { items: [{
        label: "AI Assistant"
      }], className: "mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "You don't have access to the AI Assistant", subtitle: "Contact your administrator if you believe this is a mistake." })
    ] });
  }
  const messages = chat.activeSession?.messages ?? [];
  const lastIsError = messages[messages.length - 1]?.isError;
  const sessionRail = /* @__PURE__ */ jsxRuntimeExports.jsx(AiSessionList, { sessions: chat.sessions, activeId: chat.activeSession?.id, onSelect: (id) => {
    void chat.selectSession(id);
    setMobileSessionsOpen(false);
  }, onNew: () => {
    void chat.newSession();
    setMobileSessionsOpen(false);
  } });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumb, { items: [{
      label: "AI Assistant"
    }], className: "mb-4" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-[26px] font-semibold tracking-[-0.01em] text-[#0A0A0A] mb-1", children: "AI Assistant" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] text-[#6B6B6B] mb-6", children: "Ask about leave, payroll, policies, and your pending approvals." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", size: "sm", onClick: () => setMobileSessionsOpen(true), children: "Conversations" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 h-[calc(100vh-260px)] min-h-[420px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block w-60 shrink-0 rounded-md border border-[#E5E5E3] bg-white overflow-hidden", children: sessionRail }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0 rounded-md border border-[#E5E5E3] bg-[#F9F9F7] flex flex-col overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: scrollRef, className: "flex-1 overflow-y-auto p-4 space-y-3", children: [
          messages.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(AiChatMessageBubble, { message: m, onFeedback: (v) => chat.setFeedback(m.id, v ?? null) }, m.id)),
          chat.sending && /* @__PURE__ */ jsxRuntimeExports.jsx(AiThinkingBubble, {}),
          lastIsError && !chat.sending && /* @__PURE__ */ jsxRuntimeExports.jsx(AiUnavailableState, {}),
          messages.filter((m) => m.role === "user").length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(AiSuggestedPrompts, { role: chat.role, onSelect: (p) => void chat.send(p) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AiChatInput, { onSend: (t) => void chat.send(t), disabled: chat.sending || chat.cooldown, cooldown: chat.cooldown })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Modal, { open: mobileSessionsOpen, onClose: () => setMobileSessionsOpen(false), title: "Conversations", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-96 -mx-6 -mb-6", children: sessionRail }) })
  ] });
}
export {
  AiAssistantPage as component
};
