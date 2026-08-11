/** Quiet top-bar button that opens the AI chat panel — styled like NotificationBell. */
import { MessageSquare } from "lucide-react";
import { uiStore } from "@/lib/store/ui";

export function AiTopBarButton() {
  return (
    <button
      type="button"
      aria-label="Ask AI"
      onClick={uiStore.toggleAiPanel}
      className="relative h-9 px-2.5 rounded-full flex items-center gap-1.5 hover:bg-black/5 transition-colors"
    >
      <MessageSquare size={17} aria-hidden />
      <span className="text-[13px] font-medium hidden sm:inline">Ask AI</span>
    </button>
  );
}
