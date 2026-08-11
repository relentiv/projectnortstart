import { cn } from "@/lib/utils";
import type { LeaveBalance } from "@/lib/types/leave";

export function LeaveBalanceCard({ balance, onApply, className }: { balance: LeaveBalance; onApply?: () => void; className?: string }) {
  const total = Math.max(balance.accrued + balance.carried, 1);
  const usedPct = Math.min(100, (balance.used / total) * 100);
  const pendingPct = Math.min(100 - usedPct, (balance.pending / total) * 100);
  const low = balance.available <= 2;

  return (
    <div className={cn("relative bg-white rounded-md border border-[#E5E5E3] p-5 overflow-hidden", className)}>
      <div className="absolute inset-x-0 top-0 h-1" style={{ background: balance.leaveType.color }} aria-hidden />
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[13px] font-semibold text-[#0A0A0A] truncate">{balance.leaveType.name}</p>
          <p className="text-[11px] text-[#6B6B6B] mt-0.5">{balance.leaveType.isPaid ? "Paid" : "Unpaid"} · {balance.leaveType.code}</p>
        </div>
        {onApply && (
          <button type="button" onClick={onApply} className="text-[11px] font-medium text-[#6B6B6B] hover:text-[#0A0A0A] transition-colors whitespace-nowrap">
            Apply →
          </button>
        )}
      </div>

      <p className="mt-4 flex items-baseline gap-1.5">
        <span className={cn("text-[30px] font-semibold tracking-[-0.02em]", low ? "text-[#B45309]" : "text-[#0A0A0A]")}>{balance.available}</span>
        <span className="text-[13px] text-[#6B6B6B]">of {balance.accrued + balance.carried} days left</span>
      </p>

      <div className="mt-3 h-1.5 w-full rounded-full bg-[#F2F2F0] overflow-hidden flex" role="img" aria-label={`${balance.used} used, ${balance.pending} pending`}>
        <span className="h-full" style={{ width: `${usedPct}%`, background: balance.leaveType.color }} />
        <span className="h-full opacity-40" style={{ width: `${pendingPct}%`, background: balance.leaveType.color }} />
      </div>

      <dl className="mt-3 grid grid-cols-3 gap-2 text-[11px]">
        <div><dt className="text-[#9CA3AF]">Used</dt><dd className="font-semibold">{balance.used}</dd></div>
        <div><dt className="text-[#9CA3AF]">Pending</dt><dd className="font-semibold">{balance.pending}</dd></div>
        <div><dt className="text-[#9CA3AF]">Carried</dt><dd className="font-semibold">{balance.carried}</dd></div>
      </dl>
    </div>
  );
}
