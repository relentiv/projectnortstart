import { Badge, type BadgeVariant } from "@/lib/components/ui";
import { LEAVE_STATUS_LABELS, type LeaveRequestStatus } from "@/lib/types/leave";

const map: Record<LeaveRequestStatus, BadgeVariant> = {
  draft: "default",
  pending: "warning",
  approved: "success",
  auto_approved: "success",
  rejected: "danger",
  cancelled: "default",
};

export function LeaveStatusBadge({ status, className }: { status: LeaveRequestStatus; className?: string }) {
  return <Badge variant={map[status]} className={className}>{LEAVE_STATUS_LABELS[status]}</Badge>;
}
