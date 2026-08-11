/** Auto-grow chat input — Enter to send, Shift+Enter for newline. */
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface AiChatInputProps {
  onSend: (text: string) => void;
  disabled?: boolean;
  cooldown?: boolean;
}

export function AiChatInput({ onSend, disabled, cooldown }: AiChatInputProps) {
  const [value, setValue] = useState("");
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
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

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <div className="border-t border-[#E5E5E3] p-3">
      <div className="flex items-end gap-2">
        <textarea
          ref={ref}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={onKeyDown}
          rows={1}
          disabled={disabled}
          placeholder="Ask about leave, payroll, policies…"
          className={cn(
            "flex-1 resize-none rounded-md border border-[#E5E5E3] bg-white px-3 py-2 text-[13.5px] text-[#0A0A0A]",
            "placeholder:text-[#9CA3AF] outline-none focus:border-[#0A0A0A] transition-colors",
            "disabled:opacity-60 disabled:cursor-not-allowed",
          )}
        />
        <button
          type="button"
          onClick={send}
          disabled={disabled || !value.trim()}
          aria-label="Send message"
          className="h-9 px-3 rounded-md text-[13px] font-medium disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          style={{ background: "var(--tenant-primary)", color: "var(--tenant-text-on-primary)" }}
        >
          Send
        </button>
      </div>
      {cooldown && (
        <p className="mt-1.5 text-[12px] text-[#6B6B6B]">Please wait a moment before sending another message.</p>
      )}
    </div>
  );
}
