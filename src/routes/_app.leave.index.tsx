import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/lib/components/layout";
import { Card, EmptyState, Spinner, showToast } from "@/lib/components/ui";
import { LeaveBalanceGrid, LeaveRequestCard } from "@/lib/components/leave";
import { leaveApi } from "@/lib/api/leave";
import { listEmployees } from "@/lib/api/employees";
import { authStore } from "@/lib/store/auth";
import type { LeaveBalance, LeaveRequest } from "@/lib/types/leave";

export const Route = createFileRoute("/_app/leave/")({
  component: LeaveDashboard,
  head: () => ({
    meta: [
      { title: "My Leave — HRMS" },
      { name: "description", content: "Track your leave balances, apply for time off, and follow approval progress." },
      { property: "og:title", content: "My Leave — HRMS" },
      { property: "og:description", content: "Track your leave balances, apply for time off, and follow approval progress." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});

function LeaveDashboard() {
  const user = authStore.useSelector((s) => s.user);
  const [loading, setLoading] = useState(true);
  const [balances, setBalances] = useState<LeaveBalance[]>([]);
  const [requests, setRequests] = useState<LeaveRequest[]>([]);

  useEffect(() => {
    let alive = true;
    void (async () => {
      const emps = await listEmployees();
      const me = emps.data?.find((e) => e.workEmail === user?.email) ?? emps.data?.[0];
      if (!me) { if (alive) setLoading(false); return; }
      const [b, r] = await Promise.all([
        leaveApi.listBalances(me.id),
        leaveApi.listRequests({ employeeId: me.id }),
      ]);
      if (!alive) return;
      setBalances(b.data ?? []);
      setRequests(r.data ?? []);
      setLoading(false);
    })();
    return () => { alive = false; };
  }, [user?.email]);

  const cancel = async (id: string) => {
    const res = await leaveApi.cancelRequest(id);
    if (res.error) return showToast(res.error.message, "error");
    setRequests((prev) => prev.map((r) => (r.id === id ? { ...r, status: "cancelled" } : r)));
    showToast("Leave request cancelled", "info");
  };

  if (loading) return <div className="flex justify-center py-20"><Spinner size={28} /></div>;

  return (
    <div className="space-y-6">
      <PageHeader title="My leave" description="Balances, requests and approval progress for the current year." />
      <LeaveBalanceGrid balances={balances} />
      <Card padded={false} className="p-0 overflow-hidden">
        <div className="px-5 py-4 border-b border-[#E5E5E3]">
          <h2 className="text-[15px] font-semibold">My requests</h2>
          <p className="text-[12px] text-[#6B6B6B] mt-0.5">Most recent first</p>
        </div>
        {requests.length === 0 ? (
          <EmptyState title="No leave requests yet." subtitle="Your submitted requests will appear here." />
        ) : (
          <div className="p-4 space-y-3">
            {requests.map((r) => (
              <LeaveRequestCard
                key={r.id}
                request={r}
                onCancel={r.status === "pending" ? () => void cancel(r.id) : undefined}
              />
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}
