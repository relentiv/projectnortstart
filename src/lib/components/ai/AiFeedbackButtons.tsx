/** Thumbs up / down feedback on an assistant message. Thumbs-down reveals a small note field. */
import { useState } from "react";
import type { AiFeedbackValue } from "@/lib/types/ai";
import { cn } from "@/lib/utils";

export interface AiFeedbackButtonsProps {
  value: AiFeedbackValue | undefined;
  onChange: (value: AiFeedbackValue) => void;
  onNote?: (note: string) => void;
}

export function AiFeedbackButtons({ value, onChange, onNote }: AiFeedbackButtonsProps) {
  const [note, setNote] = useState("");
  const showNote = value === "not_helpful";

  return (
    <div className="mt-2">
      <div className="flex items-center gap-1">
        <button
          type="button"
          aria-label="Helpful"
          aria-pressed={value === "helpful"}
          onClick={() => onChange(value === "helpful" ? null : "helpful")}
          className={cn(
            "w-6 h-6 rounded-sm flex items-center justify-center text-[13px] hover:bg-black/5 transition-colors",
            value === "helpful" ? "text-[#16A34A]" : "text-[#9CA3AF]",
          )}
        >
          👍
        </button>
        <button
          type="button"
          aria-label="Not helpful"
          aria-pressed={value === "not_helpful"}
          onClick={() => onChange(value === "not_helpful" ? null : "not_helpful")}
          className={cn(
            "w-6 h-6 rounded-sm flex items-center justify-center text-[13px] hover:bg-black/5 transition-colors",
            value === "not_helpful" ? "text-[#DC2626]" : "text-[#9CA3AF]",
          )}
        >
          👎
        </button>
      </div>
      {showNote && (
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          onBlur={() => note.trim() && onNote?.(note.trim())}
          placeholder="What went wrong? (optional)"
          rows={2}
          className="mt-1.5 w-full max-w-xs rounded-sm border border-[#E5E5E3] bg-white p-1.5 text-[12px] text-[#0A0A0A] placeholder:text-[#9CA3AF] outline-none focus:border-[#0A0A0A]"
        />
      )}
    </div>
  );
}
