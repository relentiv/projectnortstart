import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as cn } from "./router-CPP24NZe.mjs";
import { e as useRouterState, L as Link } from "../_libs/tanstack__react-router.mjs";
import { A as Alert } from "./Alert-COamyPgG.mjs";
import { a as aiApi } from "./ai-p4aGx585.mjs";
import { a as authStore } from "./auth-BAvMo5G5.mjs";
import { u as useCurrentEmployee } from "./useCurrentEmployee-s2MqyCVo.mjs";
import { K as CircleAlert, f as Sparkles, A as ArrowUpRight, N as History, O as SquarePen, Q as SendHorizontal, V as FileText, Y as Database, _ as BookOpen, $ as ThumbsUp, a0 as ThumbsDown } from "../_libs/lucide-react.mjs";
const TYPE_CONFIG = {
  policy_doc: { label: "Policy", icon: BookOpen },
  data_query: { label: "Data", icon: Database },
  general_knowledge: { label: "General", icon: FileText }
};
function AiSourceCitation({ sources, className }) {
  if (!sources.length) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("mt-2.5 flex flex-wrap items-center gap-1.5 pt-2 border-t border-[#F2F2F0]", className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold uppercase tracking-[0.1em] text-[#8E8E8E] mr-1", children: "Sources:" }),
    sources.map((s, i) => {
      const cfg = TYPE_CONFIG[s.type];
      const Icon = cfg.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "span",
        {
          className: "inline-flex items-center gap-1.5 rounded-full border border-[#E5E5E3] bg-[#FAFAF9] px-2.5 py-0.5 text-[11px] font-semibold text-neutral-700 shadow-2xs",
          title: cfg.label,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-3 h-3 text-orange-600" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: s.label })
          ]
        },
        `${s.label}-${i}`
      );
    })
  ] });
}
function AiFeedbackButtons({ value, onChange, onNote }) {
  const [note, setNote] = reactExports.useState("");
  const showNote = value === "not_helpful";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2.5 pt-1.5 flex flex-col gap-1.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          "aria-label": "Helpful",
          "aria-pressed": value === "helpful",
          onClick: () => onChange(value === "helpful" ? null : "helpful"),
          className: cn(
            "w-7 h-7 rounded-lg flex items-center justify-center transition-colors cursor-pointer",
            value === "helpful" ? "bg-emerald-50 text-emerald-600 border border-emerald-200" : "text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100"
          ),
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ThumbsUp, { className: "w-3.5 h-3.5" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          "aria-label": "Not helpful",
          "aria-pressed": value === "not_helpful",
          onClick: () => onChange(value === "not_helpful" ? null : "not_helpful"),
          className: cn(
            "w-7 h-7 rounded-lg flex items-center justify-center transition-colors cursor-pointer",
            value === "not_helpful" ? "bg-rose-50 text-rose-600 border border-rose-200" : "text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100"
          ),
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ThumbsDown, { className: "w-3.5 h-3.5" })
        }
      )
    ] }),
    showNote && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "textarea",
      {
        value: note,
        onChange: (e) => setNote(e.target.value),
        onBlur: () => note.trim() && onNote?.(note.trim()),
        placeholder: "What went wrong? (optional)",
        rows: 2,
        className: "mt-1 w-full max-w-xs rounded-xl border border-[#E5E5E3] bg-[#FAFAF9] focus:bg-white p-2 text-[12px] text-[#0A0A0A] placeholder:text-neutral-400 outline-hidden focus:border-[#0A0A0A]"
      }
    )
  ] });
}
function AiChatMessageBubble({ message, onFeedback, onFeedbackNote }) {
  const isUser = message.role === "user";
  if (message.isError) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-start", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[85%] rounded-2xl border border-rose-200/80 bg-rose-50/80 px-4 py-3 text-[13px] text-rose-800 flex items-start gap-2.5 shadow-2xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-4 h-4 text-rose-600 shrink-0 mt-0.5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: message.content })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex", isUser ? "justify-end" : "justify-start"), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "max-w-[88%] rounded-2xl px-4 py-3 text-[13.5px] leading-relaxed whitespace-pre-wrap transition-all",
        isUser ? "bg-[#0A0A0A] text-white shadow-xs" : "bg-white border border-[#E5E5E3] text-[#0A0A0A] shadow-2xs"
      ),
      children: [
        message.content,
        !isUser && message.sources && message.sources.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(AiSourceCitation, { sources: message.sources }),
        !isUser && message.unverified && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[12px] text-amber-700 bg-amber-50 px-2.5 py-1.5 rounded-xl border border-amber-200/60 font-medium", children: "This answer could not be verified against your company data — please confirm with HR." }),
        !isUser && onFeedback && /* @__PURE__ */ jsxRuntimeExports.jsx(AiFeedbackButtons, { value: message.feedback, onChange: onFeedback, onNote: onFeedbackNote })
      ]
    }
  ) });
}
function AiThinkingBubble() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-start", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[85%] rounded-2xl bg-white border border-[#E5E5E3] px-4 py-3 text-[13px] text-neutral-600 flex items-center gap-2.5 shadow-2xs", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4 text-orange-500 animate-pulse" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium animate-pulse", children: "Thinking…" })
  ] }) });
}
function AiChatInput({ onSend, onNewSession, onToggleHistory, disabled, cooldown }) {
  const [value, setValue] = reactExports.useState("");
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 140)}px`;
  }, [value]);
  const send = () => {
    const trimmed = value.trim();
    if (!trimmed || disabled) return;
    onSend(trimmed);
    setValue("");
  };
  const onKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };
  const canSend = !!value.trim() && !disabled;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-[#E5E5E3] bg-white p-3 sm:p-3.5 space-y-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end gap-1.5 sm:gap-2 bg-[#FAFAF9] p-1.5 rounded-2xl border border-[#E5E5E3] focus-within:bg-white focus-within:border-[#0A0A0A] focus-within:ring-2 focus-within:ring-orange-500/20 transition-all shadow-2xs", children: [
      onToggleHistory && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: onToggleHistory,
          title: "Conversations History",
          "aria-label": "Conversations History",
          className: "h-9 w-9 shrink-0 rounded-xl flex items-center justify-center text-neutral-500 hover:text-[#0A0A0A] hover:bg-neutral-200/60 active:scale-95 transition-all cursor-pointer",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(History, { className: "w-4 h-4" })
        }
      ),
      onNewSession && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: onNewSession,
          title: "New Chat",
          "aria-label": "New Chat",
          className: "h-9 w-9 shrink-0 rounded-xl flex items-center justify-center text-neutral-500 hover:text-orange-600 hover:bg-orange-50 active:scale-95 transition-all cursor-pointer",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(SquarePen, { className: "w-4 h-4" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "textarea",
        {
          ref,
          value,
          onChange: (e) => setValue(e.target.value),
          onKeyDown,
          rows: 1,
          disabled,
          placeholder: "Ask about leave, payroll, policies…",
          className: cn(
            "flex-1 resize-none bg-transparent px-2.5 py-2 text-[13.5px] text-[#0A0A0A]",
            "placeholder:text-neutral-400 outline-hidden border-none",
            "disabled:opacity-60 disabled:cursor-not-allowed"
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: send,
          disabled: !canSend,
          "aria-label": "Send message",
          className: cn(
            "h-9 w-9 shrink-0 rounded-xl flex items-center justify-center transition-all cursor-pointer",
            canSend ? "bg-[#0A0A0A] text-white hover:bg-orange-600 active:scale-95 shadow-2xs" : "bg-neutral-200 text-neutral-400 cursor-not-allowed"
          ),
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(SendHorizontal, { className: "w-4 h-4" })
        }
      )
    ] }),
    cooldown && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[11px] text-amber-700 font-medium px-1", children: "Please wait a moment before sending another message." })
  ] });
}
const PROMPTS_BY_ROLE = {
  employee: [
    "What's my leave balance?",
    "When is the next payroll run?",
    "What's the WFH policy?",
    "Do I have any pending approvals?"
  ],
  manager: [
    "Do I have any pending approvals?",
    "What's the WFH policy?",
    "Tell me about probation policy",
    "What's my leave balance?"
  ],
  hr_admin: [
    "What's the WFH policy?",
    "Tell me about attrition trends",
    "What's the probation policy?",
    "When is the next payroll run?"
  ]
};
const DEFAULT_PROMPTS = ["What's my leave balance?", "When is the next payroll run?", "What's the WFH policy?"];
function AiSuggestedPrompts({ role, onSelect }) {
  const prompts = PROMPTS_BY_ROLE[role] ?? DEFAULT_PROMPTS;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2.5 pt-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] font-semibold uppercase tracking-[0.1em] text-[#8E8E8E] flex items-center gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3 h-3 text-orange-500" }),
      "Suggested Questions"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: prompts.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => onSelect(p),
        className: "group inline-flex items-center gap-1.5 rounded-2xl border border-[#E5E5E3] bg-white px-3.5 py-2 text-[12.5px] font-medium text-[#0A0A0A] hover:border-neutral-300 hover:shadow-2xs hover:text-orange-600 transition-all cursor-pointer active:scale-95",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: p }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-3.5 h-3.5 text-neutral-400 group-hover:text-orange-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })
        ]
      },
      p
    )) })
  ] });
}
function AiUnavailableState() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { variant: "warning", title: "AI assistant is temporarily unavailable", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Please try again shortly. In the meantime you can:" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex flex-col gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/announcements", className: "underline underline-offset-2", children: "Check announcements" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/helpdesk/new", className: "underline underline-offset-2", children: "Raise a helpdesk ticket" })
    ] })
  ] });
}
function useAiChat(active) {
  const user = authStore.useSelector((s) => s.user);
  const { employee } = useCurrentEmployee();
  const route = useRouterState({ select: (s) => s.location.pathname });
  const [sessions, setSessions] = reactExports.useState([]);
  const [activeSession, setActiveSession] = reactExports.useState(null);
  const [sending, setSending] = reactExports.useState(false);
  const [cooldown, setCooldown] = reactExports.useState(false);
  const cooldownTimer = reactExports.useRef(null);
  const employeeId = employee?.id ?? "unassigned";
  const refreshSessions = reactExports.useCallback(async () => {
    const res = await aiApi.listSessions(employeeId);
    setSessions(res.data ?? []);
    return res.data ?? [];
  }, [employeeId]);
  reactExports.useEffect(() => {
    if (!active || !employee) return;
    let alive = true;
    void (async () => {
      const list = await refreshSessions();
      if (!alive) return;
      if (list.length > 0) {
        setActiveSession(list[0]);
      } else {
        const created = await aiApi.createSession(employeeId);
        if (created.data && alive) {
          setActiveSession(created.data);
          void refreshSessions();
        }
      }
    })();
    return () => {
      alive = false;
    };
  }, [active, employee]);
  const selectSession = reactExports.useCallback(async (id) => {
    const res = await aiApi.getSession(id);
    if (res.data) setActiveSession(res.data);
  }, []);
  const newSession = reactExports.useCallback(async () => {
    const res = await aiApi.createSession(employeeId);
    if (res.data) {
      setActiveSession(res.data);
      void refreshSessions();
    }
  }, [employeeId, refreshSessions]);
  const clearConversation = reactExports.useCallback(async () => {
    const res = await aiApi.clearSession(employeeId);
    if (res.data) {
      setActiveSession(res.data);
      void refreshSessions();
    }
  }, [employeeId, refreshSessions]);
  const send = reactExports.useCallback(
    async (text) => {
      if (!activeSession) return;
      setSending(true);
      const res = await aiApi.sendMessage(activeSession.id, text, { route, role: user?.role ?? "employee" });
      setSending(false);
      if (res.error?.message === "rate_limited") {
        setCooldown(true);
        if (cooldownTimer.current) clearTimeout(cooldownTimer.current);
        cooldownTimer.current = setTimeout(() => setCooldown(false), 1500);
        return;
      }
      if (res.data) {
        setActiveSession(res.data);
        void refreshSessions();
      }
    },
    [activeSession, route, user?.role, refreshSessions]
  );
  const setFeedback = reactExports.useCallback(
    async (messageId, value) => {
      if (!activeSession) return;
      const res = await aiApi.setFeedback(activeSession.id, messageId, value);
      if (res.data) setActiveSession(res.data);
    },
    [activeSession]
  );
  return {
    role: user?.role ?? "employee",
    sessions,
    activeSession,
    sending,
    cooldown,
    selectSession,
    newSession,
    clearConversation,
    send,
    setFeedback
  };
}
export {
  AiChatMessageBubble as A,
  AiThinkingBubble as a,
  AiUnavailableState as b,
  AiSuggestedPrompts as c,
  AiChatInput as d,
  useAiChat as u
};
