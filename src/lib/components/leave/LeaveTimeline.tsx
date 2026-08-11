import type { LeaveRequest } from "@/lib/types/leave";
import { cn } from "@/lib/utils";

function fmt(d: Date) {
  return d.toLocaleString("en-GB", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" });
}

export function LeaveTimeline({ request }: { request: LeaveRequest }) {
  type Step = { key: string; label: string; meta: string; state: "done" | "rejected" | "pending"; comment?: string };
  const steps: Step[] = [
    { key: "applied", label: "Applied", meta: fmt(request.appliedAt), state: "done", comment: request.reason },
    ...request.approvals.map((a) => ({
      key: a.id,
      label: `${a.level === "manager" ? "Manager" : "HR Admin"} ${a.action === "approved" ? "approved" : "rejected"}`,
      meta: `${a.approverName} · ${fmt(a.actionAt)}`,
      state: (a.action === "approved" ? "done" : "rejected") as Step["state"],
      comment: a.comment,
    })),
  ];
  if (request.status === "pending") {
    steps.push({
      key: "awaiting",
      label: request.twoLevel && request.approvals.length === 1 ? "Awaiting HR Admin" : "Awaiting manager",
      meta: "Pending",
      state: "pending",
      comment: undefined,
    });
  }
  if (request.status === "cancelled") {
    steps.push({ key: "cancelled", label: "Cancelled by employee", meta: request.cancelledAt ? fmt(request.cancelledAt) : "", state: "rejected", comment: request.cancelReason });
  }

  return (
    <ol className="relative pl-5">
      <span className="absolute left-[5px] top-2 bottom-2 w-px bg-[#E5E5E3]" aria-hidden />
      {steps.map((s) => (
        <li key={s.key} className="relative pb-4 last:pb-0">
          <span
            aria-hidden
            className={cn(
              "absolute -left-5 top-1.5 h-[11px] w-[11px] rounded-full border-2 border-white",
              s.state === "done" && "bg-[#16A34A]",
              s.state === "rejected" && "bg-[#DC2626]",
              s.state === "pending" && "bg-[#F59E0B]",
            )}
          />
          <p className="text-[13px] font-medium text-[#0A0A0A]">{s.label}</p>
          <p className="text-[11px] text-[#6B6B6B]">{s.meta}</p>
          {s.comment && <p className="mt-1 text-[12px] text-[#4B4B4B] bg-[#F9F9F8] rounded-sm px-2.5 py-1.5">{s.comment}</p>}
        </li>
      ))}
    </ol>
  );
}
