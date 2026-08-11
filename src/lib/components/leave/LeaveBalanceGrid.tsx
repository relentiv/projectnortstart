import { EmptyState } from "@/lib/components/ui";
import type { LeaveBalance } from "@/lib/types/leave";
import { LeaveBalanceCard } from "./LeaveBalanceCard";

export function LeaveBalanceGrid({ balances, onApply }: { balances: LeaveBalance[]; onApply?: (leaveTypeId: string) => void }) {
  if (!balances.length) {
    return <EmptyState title="No leave allocated yet." subtitle="Your HR team hasn't assigned a leave policy to you." />;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {balances.map((b) => (
        <LeaveBalanceCard key={b.leaveTypeId} balance={b} onApply={onApply ? () => onApply(b.leaveTypeId) : undefined} />
      ))}
    </div>
  );
}
