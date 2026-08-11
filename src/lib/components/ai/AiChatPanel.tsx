/** 400px right slide-in AI chat panel, own chrome (not SlideOver). */
import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ConfirmDialog } from "@/lib/components/ui";
import { uiStore } from "@/lib/store/ui";
import { cn } from "@/lib/utils";
import { useAiChat } from "./useAiChat";
import { AiChatMessageBubble, AiThinkingBubble } from "./AiChatMessageBubble";
import { AiChatInput } from "./AiChatInput";
import { AiSuggestedPrompts } from "./AiSuggestedPrompts";
import { AiUnavailableState } from "./AiUnavailableState";

export function AiChatPanel() {
  const open = uiStore.useSelector((s) => s.aiPanelOpen);
  const [menuOpen, setMenuOpen] = useState(false);
  const [confirmClear, setConfirmClear] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const chat = useAiChat(open);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [chat.activeSession?.messages.length, chat.sending]);

  const messages = chat.activeSession?.messages ?? [];
  const lastIsError = messages[messages.length - 1]?.isError;

  return (
    <div
      aria-hidden={!open}
      className={cn(
        "fixed inset-0 z-40 pointer-events-none",
        open && "pointer-events-auto",
      )}
    >
      <button
        aria-label="Close AI assistant"
        onClick={uiStore.closeAiPanel}
        className={cn(
          "absolute inset-0 bg-black/20 transition-opacity duration-200",
          open ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="AI Assistant"
        className={cn(
          "absolute right-0 top-0 h-full w-full sm:max-[480px]:w-full bg-[#F9F9F7] border-l border-[#E5E5E3] shadow-2xl flex flex-col",
          "transition-transform duration-[250ms] ease-out",
          "max-[480px]:w-full sm:w-[400px]",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="h-14 shrink-0 border-b border-[#E5E5E3] bg-white px-4 flex items-center justify-between">
          <p className="text-[14px] font-semibold">AI Assistant</p>
          <div className="flex items-center gap-1 relative">
            <button
              type="button"
              aria-label="More options"
              onClick={() => setMenuOpen((v) => !v)}
              className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-black/5 transition-colors text-[16px]"
            >
              ⋯
            </button>
            {menuOpen && (
              <div className="absolute right-0 top-9 w-48 rounded-md border border-[#E5E5E3] bg-white shadow-lg z-10 overflow-hidden">
                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false);
                    setConfirmClear(true);
                  }}
                  className="w-full text-left px-3.5 py-2.5 text-[13px] hover:bg-[#F2F2F0] transition-colors"
                >
                  Clear conversation
                </button>
                <Link
                  to="/ai-assistant"
                  onClick={() => {
                    setMenuOpen(false);
                    uiStore.closeAiPanel();
                  }}
                  className="block px-3.5 py-2.5 text-[13px] hover:bg-[#F2F2F0] transition-colors"
                >
                  Open full page →
                </Link>
              </div>
            )}
            <button
              type="button"
              aria-label="Close"
              onClick={uiStore.closeAiPanel}
              className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-black/5 transition-colors text-[18px] leading-none"
            >
              ×
            </button>
          </div>
        </div>

        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((m) => (
            <AiChatMessageBubble
              key={m.id}
              message={m}
              onFeedback={(v) => chat.setFeedback(m.id, v ?? null)}
            />
          ))}
          {chat.sending && <AiThinkingBubble />}
          {lastIsError && !chat.sending && <AiUnavailableState />}
          {messages.filter((m) => m.role === "user").length === 0 && (
            <AiSuggestedPrompts role={chat.role} onSelect={(p) => void chat.send(p)} />
          )}
        </div>

        <AiChatInput onSend={(t) => void chat.send(t)} disabled={chat.sending || chat.cooldown} cooldown={chat.cooldown} />
      </div>

      <ConfirmDialog
        open={confirmClear}
        onOpenChange={setConfirmClear}
        title="Clear conversation"
        description="This will permanently remove your chat history with the AI assistant. This cannot be undone."
        confirmLabel="Clear"
        variant="danger"
        onConfirm={() => chat.clearConversation()}
      />
    </div>
  );
}
