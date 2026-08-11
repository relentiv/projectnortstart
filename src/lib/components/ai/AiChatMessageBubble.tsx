/** A single chat message bubble — user right/tenant-primary, assistant left/white. */
import { Spinner } from "@/lib/components/ui";
import type { AiChatMessage } from "@/lib/types/ai";
import { cn } from "@/lib/utils";
import { AiSourceCitation } from "./AiSourceCitation";
import { AiFeedbackButtons } from "./AiFeedbackButtons";

export interface AiChatMessageBubbleProps {
  message: AiChatMessage;
  onFeedback?: (value: AiChatMessage["feedback"]) => void;
  onFeedbackNote?: (note: string) => void;
}

export function AiChatMessageBubble({ message, onFeedback, onFeedbackNote }: AiChatMessageBubbleProps) {
  const isUser = message.role === "user";

  if (message.isError) {
    return (
      <div className="flex justify-start">
        <div className="max-w-[85%] rounded-md border border-[#FECACA] bg-[#FEF2F2] px-3.5 py-2.5 text-[13px] text-[#991B1B]">
          {message.content}
        </div>
      </div>
    );
  }

  return (
    <div className={cn("flex", isUser ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[85%] rounded-md px-3.5 py-2.5 text-[13.5px] leading-relaxed whitespace-pre-wrap",
          isUser ? "text-[var(--tenant-text-on-primary)]" : "bg-white border border-[#E5E5E3] text-[#0A0A0A]",
        )}
        style={isUser ? { background: "var(--tenant-primary)" } : undefined}
      >
        {message.content}
        {!isUser && message.sources && message.sources.length > 0 && <AiSourceCitation sources={message.sources} />}
        {!isUser && message.unverified && (
          <p className="mt-2 text-[12px] text-[#6B6B6B] italic">
            This answer could not be verified against your company data — please confirm with HR.
          </p>
        )}
        {!isUser && onFeedback && (
          <AiFeedbackButtons value={message.feedback} onChange={onFeedback} onNote={onFeedbackNote} />
        )}
      </div>
    </div>
  );
}

export function AiThinkingBubble() {
  return (
    <div className="flex justify-start">
      <div className="max-w-[85%] rounded-md bg-white border border-[#E5E5E3] px-3.5 py-2.5 text-[13.5px] text-[#6B6B6B] flex items-center gap-2">
        <Spinner size={14} />
        Thinking…
      </div>
    </div>
  );
}
