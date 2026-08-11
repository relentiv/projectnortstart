/** Full-page AI Assistant — session rail + chat column. */
import { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumb, Button, EmptyState, Modal } from "@/lib/components/ui";
import { usePermission } from "@/lib/hooks/usePermission";
import {
  AiChatMessageBubble,
  AiThinkingBubble,
  AiChatInput,
  AiSessionList,
  AiSuggestedPrompts,
  AiUnavailableState,
  useAiChat,
} from "@/lib/components/ai";

export const Route = createFileRoute("/_app/ai-assistant")({
  component: AiAssistantPage,
  head: () => ({
    meta: [
      { title: "AI Assistant — HRMS" },
      { name: "description", content: "Ask the HR assistant about leave, payroll, policies and your pending approvals." },
      { property: "og:title", content: "AI Assistant — HRMS" },
      { property: "og:description", content: "Ask the HR assistant about leave, payroll, policies and your pending approvals." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});

function AiAssistantPage() {
  const canChat = usePermission("ai.chat");
  const [mobileSessionsOpen, setMobileSessionsOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const chat = useAiChat(true);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [chat.activeSession?.messages.length, chat.sending]);

  if (!canChat) {
    return (
      <div>
        <Breadcrumb items={[{ label: "AI Assistant" }]} className="mb-4" />
        <EmptyState
          title="You don't have access to the AI Assistant"
          subtitle="Contact your administrator if you believe this is a mistake."
        />
      </div>
    );
  }

  const messages = chat.activeSession?.messages ?? [];
  const lastIsError = messages[messages.length - 1]?.isError;

  const sessionRail = (
    <AiSessionList
      sessions={chat.sessions}
      activeId={chat.activeSession?.id}
      onSelect={(id) => {
        void chat.selectSession(id);
        setMobileSessionsOpen(false);
      }}
      onNew={() => {
        void chat.newSession();
        setMobileSessionsOpen(false);
      }}
    />
  );

  return (
    <div>
      <Breadcrumb items={[{ label: "AI Assistant" }]} className="mb-4" />
      <h1 className="text-[26px] font-semibold tracking-[-0.01em] text-[#0A0A0A] mb-1">AI Assistant</h1>
      <p className="text-[14px] text-[#6B6B6B] mb-6">Ask about leave, payroll, policies, and your pending approvals.</p>

      <div className="md:hidden mb-4">
        <Button variant="secondary" size="sm" onClick={() => setMobileSessionsOpen(true)}>
          Conversations
        </Button>
      </div>

      <div className="flex gap-4 h-[calc(100vh-260px)] min-h-[420px]">
        <div className="hidden md:block w-60 shrink-0 rounded-md border border-[#E5E5E3] bg-white overflow-hidden">
          {sessionRail}
        </div>

        <div className="flex-1 min-w-0 rounded-md border border-[#E5E5E3] bg-[#F9F9F7] flex flex-col overflow-hidden">
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((m) => (
              <AiChatMessageBubble key={m.id} message={m} onFeedback={(v) => chat.setFeedback(m.id, v ?? null)} />
            ))}
            {chat.sending && <AiThinkingBubble />}
            {lastIsError && !chat.sending && <AiUnavailableState />}
            {messages.filter((m) => m.role === "user").length === 0 && (
              <AiSuggestedPrompts role={chat.role} onSelect={(p) => void chat.send(p)} />
            )}
          </div>
          <AiChatInput onSend={(t) => void chat.send(t)} disabled={chat.sending || chat.cooldown} cooldown={chat.cooldown} />
        </div>
      </div>

      <Modal open={mobileSessionsOpen} onClose={() => setMobileSessionsOpen(false)} title="Conversations">
        <div className="h-96 -mx-6 -mb-6">{sessionRail}</div>
      </Modal>
    </div>
  );
}
