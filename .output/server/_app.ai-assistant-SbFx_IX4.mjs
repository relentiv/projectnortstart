import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { B as Button } from "./_ssr/Button-CFBbQAsZ.mjs";
import { M as Modal } from "./_ssr/Modal-G0zeYD84.mjs";
import { E as EmptyState } from "./_ssr/EmptyState-Cs_2WXRJ.mjs";
import { B as Breadcrumb } from "./_ssr/Breadcrumb-Bx825HWE.mjs";
import { u as usePermission } from "./_ssr/usePermission-DoLX-EvC.mjs";
import { u as useAiChat, A as AiChatMessageBubble, a as AiThinkingBubble, b as AiUnavailableState, c as AiSuggestedPrompts, d as AiChatInput } from "./_ssr/useAiChat-Ck1aAVp5.mjs";
import { r as relativeTime, c as cn } from "./_ssr/router-CPP24NZe.mjs";
import { I as MessageSquare, J as Plus } from "./_libs/lucide-react.mjs";

import "./_libs/tanstack__react-router.mjs";
import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval.mjs";
import "./_libs/unenv.mjs";


import "./_libs/seroval-plugins.mjs";


import "./_libs/react-dom.mjs";
import "./_libs/isbot.mjs";
import "./_ssr/rbac-BwLVdIYU.mjs";
import "./_ssr/rbac-Ci1w5KuA.mjs";
import "./_ssr/Alert-COamyPgG.mjs";
import "./_ssr/ai-p4aGx585.mjs";
import "./_ssr/auth-BAvMo5G5.mjs";
import "./_ssr/useCurrentEmployee-s2MqyCVo.mjs";
import "./_libs/tanstack__query-core.mjs";
import "./_libs/tanstack__react-query.mjs";
import "./_libs/clsx.mjs";
import "./_libs/tailwind-merge.mjs";
import "./_libs/zod.mjs";
function AiSessionList({ sessions, activeId, onSelect, onNew }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full bg-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 border-b border-[#E5E5E3]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: onNew,
        className: "w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#0A0A0A] hover:bg-neutral-800 text-white px-3.5 py-2.5 text-[13px] font-bold transition-all shadow-2xs active:scale-95 cursor-pointer",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4 text-orange-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "New Conversation" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto divide-y divide-[#F2F2F0]", children: sessions.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-8 text-center text-[12.5px] text-[#8E8E8E] flex flex-col items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "w-5 h-5 text-neutral-300" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "No conversations yet." })
    ] }) : sessions.map((s) => {
      const isActive = activeId === s.id;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => onSelect(s.id),
          className: cn(
            "block w-full text-left px-3.5 py-3 transition-colors cursor-pointer relative group",
            isActive ? "bg-[#FAFAF9] font-bold text-[#0A0A0A]" : "hover:bg-[#FAFAF9] text-[#404040]"
          ),
          children: [
            isActive && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-orange-500" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] truncate leading-tight group-hover:text-orange-600 transition-colors", children: s.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-[#8E8E8E] mt-1 font-medium", children: relativeTime(s.lastActiveAt) })
          ]
        },
        s.id
      );
    }) })
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
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumb, { items: [{
        label: "AI Assistant"
      }] }),
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-[calc(100dvh-185px)] md:h-[calc(100vh-115px)] space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "secondary", size: "sm", onClick: () => setMobileSessionsOpen(true), className: "rounded-xl w-full flex items-center justify-center font-bold shrink-0 py-2.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "w-4 h-4 mr-2 text-orange-600 shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0", children: "Conversations" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 min-h-0 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block w-64 shrink-0 rounded-2xl border border-[#E5E5E3] bg-white overflow-hidden shadow-xs", children: sessionRail }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0 rounded-2xl border border-[#E5E5E3] bg-[#FAFAF9] shadow-xs flex flex-col overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: scrollRef, className: "flex-1 overflow-y-auto p-3.5 sm:p-5 space-y-4", children: [
          messages.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(AiChatMessageBubble, { message: m, onFeedback: (v) => chat.setFeedback(m.id, v ?? null) }, m.id)),
          chat.sending && /* @__PURE__ */ jsxRuntimeExports.jsx(AiThinkingBubble, {}),
          lastIsError && !chat.sending && /* @__PURE__ */ jsxRuntimeExports.jsx(AiUnavailableState, {}),
          messages.filter((m) => m.role === "user").length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(AiSuggestedPrompts, { role: chat.role, onSelect: (p) => void chat.send(p) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AiChatInput, { onSend: (t) => void chat.send(t), onNewSession: () => void chat.newSession(), onToggleHistory: () => setMobileSessionsOpen(true), disabled: chat.sending || chat.cooldown, cooldown: chat.cooldown })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Modal, { open: mobileSessionsOpen, onClose: () => setMobileSessionsOpen(false), title: "Conversations", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-96 -mx-6 -mb-6", children: sessionRail }) })
  ] });
}
export {
  AiAssistantPage as component
};
