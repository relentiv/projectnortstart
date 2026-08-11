import { Avatar, Button } from "@/lib/components/ui";
import { formatRange } from "@/lib/utils/workingDays";
import type { LeaveRequest } from "@/lib/types/leave";
import { LeaveStatusBadge } from "./LeaveStatusBadge";
import { LeaveTypeBadge } from "./LeaveTypeBadge";

export interface LeaveRequestCardProps {
  request: LeaveRequest;
  showEmployee?: boolean;
  onApprove?: () => void;
  onReject?: () => void;
  onCancel?: () => void;
  onOpen?: () => void;
}

export function LeaveRequestCard({ request, showEmployee, onApprove, onReject, onCancel, onOpen }: LeaveRequestCardProps) {
  return (
    <div className="bg-white rounded-md border border-[#E5E5E3] p-4 flex items-start gap-3">
      {showEmployee && <Avatar name={request.employeeName} size={36} className="shrink-0" />}
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          {showEmployee && <span className="text-[14px] font-medium truncate">{request.employeeName}</span>}
          <LeaveTypeBadge leaveType={request.leaveType} size="sm" />
          <LeaveStatusBadge status={request.status} />
        </div>
        <p className="mt-1 text-[13px] text-[#0A0A0A]">
          {formatRange(request.startDate, request.endDate)}
          <span className="text-[#6B6B6B]"> · {request.workingDays} working day{request.workingDays === 1 ? "" : "s"}</span>
          {request.isHalfDay && <span className="text-[#6B6B6B]"> · half day</span>}
        </p>
        {request.reason && <p className="mt-1 text-[12px] text-[#6B6B6B] line-clamp-2">{request.reason}</p>}
        <div className="mt-3 flex flex-wrap gap-2">
          {onApprove && <Button size="sm" variant="tenant" onClick={onApprove}>Approve</Button>}
          {onReject && <Button size="sm" variant="secondary" onClick={onReject}>Reject</Button>}
          {onCancel && <Button size="sm" variant="ghost" onClick={onCancel}>Cancel request</Button>}
          {onOpen && <Button size="sm" variant="ghost" onClick={onOpen}>Details</Button>}
        </div>
      </div>
    </div>
  );
}
