import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as cn, S as Spinner } from "./router-LFebWAoY.mjs";
import { e as useRouterState, L as Link } from "../_libs/tanstack__react-router.mjs";
import { A as Alert } from "./Alert-DctqS4QO.mjs";
import { a as aiApi } from "./ai-Cs4yquvb.mjs";
import { a as authStore } from "./auth-Dq95Bc2W.mjs";
import { u as useCurrentEmployee } from "./useCurrentEmployee-9Y57ts2r.mjs";
const TYPE_LABEL = {
  policy_doc: "Policy",
  data_query: "Your data",
  general_knowledge: "General"
};
function AiSourceCitation({ sources, className }) {
  if (!sources.length) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("mt-2 flex flex-wrap gap-1.5", className), children: sources.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: "inline-flex items-center gap-1 rounded-sm border border-[#E5E5E3] bg-[#FAFAF8] px-2 py-0.5 text-[11px] text-[#6B6B6B]",
      title: TYPE_LABEL[s.type],
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, children: "📄" }),
        s.label
      ]
    },
    `${s.label}-${i}`
  )) });
}
function AiFeedbackButtons({ value, onChange, onNote }) {
  const [note, setNote] = reactExports.useState("");
  const showNote = value === "not_helpful";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          "aria-label": "Helpful",
          "aria-pressed": value === "helpful",
          onClick: () => onChange(value === "helpful" ? null : "helpful"),
          className: cn(
            "w-6 h-6 rounded-sm flex items-center justify-center text-[13px] hover:bg-black/5 transition-colors",
            value === "helpful" ? "text-[#16A34A]" : "text-[#9CA3AF]"
          ),
          children: "👍"
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
            "w-6 h-6 rounded-sm flex items-center justify-center text-[13px] hover:bg-black/5 transition-colors",
            value === "not_helpful" ? "text-[#DC2626]" : "text-[#9CA3AF]"
          ),
          children: "👎"
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
        className: "mt-1.5 w-full max-w-xs rounded-sm border border-[#E5E5E3] bg-white p-1.5 text-[12px] text-[#0A0A0A] placeholder:text-[#9CA3AF] outline-none focus:border-[#0A0A0A]"
      }
    )
  ] });
}
function AiChatMessageBubble({ message, onFeedback, onFeedbackNote }) {
  const isUser = message.role === "user";
  if (message.isError) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-start", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[85%] rounded-md border border-[#FECACA] bg-[#FEF2F2] px-3.5 py-2.5 text-[13px] text-[#991B1B]", children: message.content }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex", isUser ? "justify-end" : "justify-start"), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "max-w-[85%] rounded-md px-3.5 py-2.5 text-[13.5px] leading-relaxed whitespace-pre-wrap",
        isUser ? "text-[var(--tenant-text-on-primary)]" : "bg-white border border-[#E5E5E3] text-[#0A0A0A]"
      ),
      style: isUser ? { background: "var(--tenant-primary)" } : void 0,
      children: [
        message.content,
        !isUser && message.sources && message.sources.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(AiSourceCitation, { sources: message.sources }),
        !isUser && message.unverified && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[12px] text-[#6B6B6B] italic", children: "This answer could not be verified against your company data — please confirm with HR." }),
        !isUser && onFeedback && /* @__PURE__ */ jsxRuntimeExports.jsx(AiFeedbackButtons, { value: message.feedback, onChange: onFeedback, onNote: onFeedbackNote })
      ]
    }
  ) });
}
function AiThinkingBubble() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-start", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[85%] rounded-md bg-white border border-[#E5E5E3] px-3.5 py-2.5 text-[13.5px] text-[#6B6B6B] flex items-center gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 14 }),
    "Thinking…"
  ] }) });
}
function AiChatInput({ onSend, disabled, cooldown }) {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-[#E5E5E3] p-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end gap-2", children: [
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
            "flex-1 resize-none rounded-md border border-[#E5E5E3] bg-white px-3 py-2 text-[13.5px] text-[#0A0A0A]",
            "placeholder:text-[#9CA3AF] outline-none focus:border-[#0A0A0A] transition-colors",
            "disabled:opacity-60 disabled:cursor-not-allowed"
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: send,
          disabled: disabled || !value.trim(),
          "aria-label": "Send message",
          className: "h-9 px-3 rounded-md text-[13px] font-medium disabled:opacity-40 disabled:cursor-not-allowed transition-colors",
          style: { background: "var(--tenant-primary)", color: "var(--tenant-text-on-primary)" },
          children: "Send"
        }
      )
    ] }),
    cooldown && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-[12px] text-[#6B6B6B]", children: "Please wait a moment before sending another message." })
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: prompts.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      onClick: () => onSelect(p),
      className: "rounded-full border border-[#E5E5E3] bg-white px-3 py-1.5 text-[12.5px] text-[#0A0A0A] hover:bg-[#F2F2F0] transition-colors",
      children: p
    },
    p
  )) });
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
