/** List of prior AI chat sessions for the current employee. */
import type { AiChatSession } from "@/lib/types/ai";
import { relativeTime } from "@/lib/utils/format";
import { cn } from "@/lib/utils";

export interface AiSessionListProps {
  sessions: AiChatSession[];
  activeId?: string | null;
  onSelect: (id: string) => void;
  onNew: () => void;
}

export function AiSessionList({ sessions, activeId, onSelect, onNew }: AiSessionListProps) {
  return (
    <div className="flex flex-col h-full">
      <div className="p-3 border-b border-[#E5E5E3]">
        <button
          type="button"
          onClick={onNew}
          className="w-full rounded-md border border-[#E5E5E3] bg-white px-3 py-2 text-[13px] font-medium hover:bg-[#F2F2F0] transition-colors"
        >
          + New conversation
        </button>
      </div>
      <div className="flex-1 overflow-y-auto">
        {sessions.length === 0 ? (
          <p className="px-4 py-6 text-center text-[12.5px] text-[#6B6B6B]">No conversations yet.</p>
        ) : (
          sessions.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => onSelect(s.id)}
              className={cn(
                "block w-full text-left px-3.5 py-2.5 border-b border-[#F2F2F0] hover:bg-[#FAFAF8] transition-colors",
                activeId === s.id && "bg-[#FAFAF8]",
              )}
            >
              <p className="text-[13px] font-medium truncate">{s.title}</p>
              <p className="text-[11px] text-[#9CA3AF] mt-0.5">{relativeTime(s.lastActiveAt)}</p>
            </button>
          ))
        )}
      </div>
    </div>
  );
}
