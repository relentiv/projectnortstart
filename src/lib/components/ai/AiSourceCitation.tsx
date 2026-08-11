/** Renders the list of sources an AI answer was grounded on. */
import type { AiSource } from "@/lib/types/ai";
import { cn } from "@/lib/utils";

const TYPE_LABEL: Record<AiSource["type"], string> = {
  policy_doc: "Policy",
  data_query: "Your data",
  general_knowledge: "General",
};

export function AiSourceCitation({ sources, className }: { sources: AiSource[]; className?: string }) {
  if (!sources.length) return null;
  return (
    <div className={cn("mt-2 flex flex-wrap gap-1.5", className)}>
      {sources.map((s, i) => (
        <span
          key={`${s.label}-${i}`}
          className="inline-flex items-center gap-1 rounded-sm border border-[#E5E5E3] bg-[#FAFAF8] px-2 py-0.5 text-[11px] text-[#6B6B6B]"
          title={TYPE_LABEL[s.type]}
        >
          <span aria-hidden>📄</span>
          {s.label}
        </span>
      ))}
    </div>
  );
}
