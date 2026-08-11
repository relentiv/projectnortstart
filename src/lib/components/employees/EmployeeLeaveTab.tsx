/** Leave history + balances shown inside the employee profile. */
import { useEffect, useState } from "react";
import { Card, EmptyState, Spinner } from "@/lib/components/ui";
import { LeaveBalanceGrid } from "@/lib/components/leave/LeaveBalanceGrid";
import { LeaveStatusBadge } from "@/lib/components/leave/LeaveStatusBadge";
import { leaveApi } from "@/lib/api/leave";
import type { LeaveBalance, LeaveRequest, LeaveType } from "@/lib/types/leave";
import type { Employee } from "@/lib/types/employee";

export function EmployeeLeaveTab({ employee }: { employee: Employee }) {
  const [balances, setBalances] = useState<LeaveBalance[]>([]);
  const [requests, setRequests] = useState<LeaveRequest[]>([]);
  const [types, setTypes] = useState<LeaveType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    setLoading(true);
    void Promise.all([
      leaveApi.listBalances(employee.id),
      leaveApi.listRequests({ employeeId: employee.id }),
      leaveApi.listLeaveTypes(),
    ]).then(([b, r, t]) => {
      if (!alive) return;
      setBalances(b.data ?? []);
      setRequests(r.data ?? []);
      setTypes(t.data ?? []);
      setLoading(false);
    });
    return () => { alive = false; };
  }, [employee.id]);

  const typeName = (id: string) => types.find((t) => t.id === id)?.name ?? "Leave";

  if (loading) return <Card className="flex justify-center py-10"><Spinner /></Card>;

  return (
    <div className="space-y-4">
      <Card>
        <h3 className="text-[13px] font-semibold text-[#0A0A0A] mb-3">Balances</h3>
        {balances.length ? <LeaveBalanceGrid balances={balances} /> : <p className="text-[13px] text-[#6B6B6B]">No balances configured yet.</p>}
      </Card>
      <Card>
        <h3 className="text-[13px] font-semibold text-[#0A0A0A] mb-3">Leave history</h3>
        {requests.length === 0 ? (
          <EmptyState title="No leave requests" subtitle="This employee has not applied for leave yet." />
        ) : (
          <ul className="divide-y divide-[#E5E5E3]">
            {requests.slice(0, 20).map((r) => (
              <li key={r.id} className="py-2.5 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-[13px] text-[#0A0A0A] truncate">{typeName(r.leaveTypeId)}</p>
                  <p className="text-[12px] text-[#6B6B6B]">
                    {new Date(r.startDate).toLocaleDateString()} → {new Date(r.endDate).toLocaleDateString()} · {r.workingDays} day{r.workingDays === 1 ? "" : "s"}
                  </p>
                </div>
                <LeaveStatusBadge status={r.status} />
              </li>
            ))}
          </ul>
        )}
      </Card>
    </div>
  );
}
