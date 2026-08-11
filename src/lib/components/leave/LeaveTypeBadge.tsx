import { cn } from "@/lib/utils";
import type { LeaveType } from "@/lib/types/leave";

export function LeaveTypeBadge({ leaveType, size = "md", className }: { leaveType: Pick<LeaveType, "name" | "code" | "color">; size?: "sm" | "md"; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full font-semibold",
        size === "sm" ? "text-[10px] px-2 py-0.5" : "text-[11px] px-2.5 py-1",
        className,
      )}
      style={{ background: `color-mix(in srgb, ${leaveType.color} 12%, transparent)`, color: leaveType.color }}
    >
      <i className="h-1.5 w-1.5 rounded-full" style={{ background: leaveType.color }} aria-hidden />
      {leaveType.name}
    </span>
  );
}
