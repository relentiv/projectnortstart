/** Role-aware starter prompt chips shown at the start of a conversation. */
import type { Role } from "@/lib/types/user";

const PROMPTS_BY_ROLE: Partial<Record<Role, string[]>> = {
  employee: [
    "What's my leave balance?",
    "When is the next payroll run?",
    "What's the WFH policy?",
    "Do I have any pending approvals?",
  ],
  manager: [
    "Do I have any pending approvals?",
    "What's the WFH policy?",
    "Tell me about probation policy",
    "What's my leave balance?",
  ],
  hr_admin: [
    "What's the WFH policy?",
    "Tell me about attrition trends",
    "What's the probation policy?",
    "When is the next payroll run?",
  ],
};

const DEFAULT_PROMPTS = ["What's my leave balance?", "When is the next payroll run?", "What's the WFH policy?"];

export function AiSuggestedPrompts({ role, onSelect }: { role: string; onSelect: (prompt: string) => void }) {
  const prompts = PROMPTS_BY_ROLE[role as Role] ?? DEFAULT_PROMPTS;
  return (
    <div className="flex flex-wrap gap-2">
      {prompts.map((p) => (
        <button
          key={p}
          type="button"
          onClick={() => onSelect(p)}
          className="rounded-full border border-[#E5E5E3] bg-white px-3 py-1.5 text-[12.5px] text-[#0A0A0A] hover:bg-[#F2F2F0] transition-colors"
        >
          {p}
        </button>
      ))}
    </div>
  );
}
