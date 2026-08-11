/** Attendance summary + recent records shown inside the employee profile. */
import { useEffect, useState } from "react";
import { Card, EmptyState, Spinner } from "@/lib/components/ui";
import { AttendanceStatusBadge } from "@/lib/components/attendance/AttendanceStatusBadge";
import { attendanceApi } from "@/lib/api/attendance";
import type { DailyAttendance } from "@/lib/types/attendance";
import type { Employee } from "@/lib/types/employee";

function iso(d: Date) { return d.toISOString().slice(0, 10); }

export function EmployeeAttendanceTab({ employee }: { employee: Employee }) {
  const [records, setRecords] = useState<DailyAttendance[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    setLoading(true);
    const to = new Date();
    const from = new Date(); from.setDate(from.getDate() - 29);
    void attendanceApi.listRecords({ employeeId: employee.id, from: iso(from), to: iso(to) }).then((res) => {
      if (!alive) return;
      setRecords([...(res.data ?? [])].sort((a, b) => b.date.localeCompare(a.date)));
      setLoading(false);
    });
    return () => { alive = false; };
  }, [employee.id]);

  if (loading) return <Card className="flex justify-center py-10"><Spinner /></Card>;

  const count = (s: string) => records.filter((r) => r.status === s).length;
  const stats: Array<[string, number]> = [
    ["Present", count("present")],
    ["Late", count("late")],
    ["Absent", count("absent")],
    ["On leave", count("on_leave")],
  ];

  return (
    <div className="space-y-4">
      <Card>
        <h3 className="text-[13px] font-semibold text-[#0A0A0A] mb-3">Last 30 days</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {stats.map(([label, value]) => (
            <div key={label} className="rounded-sm border border-[#E5E5E3] p-3">
              <p className="text-[11px] uppercase tracking-wider text-[#6B6B6B]">{label}</p>
              <p className="text-[20px] font-semibold text-[#0A0A0A]">{value}</p>
            </div>
          ))}
        </div>
      </Card>
      <Card>
        <h3 className="text-[13px] font-semibold text-[#0A0A0A] mb-3">Recent records</h3>
        {records.length === 0 ? (
          <EmptyState title="No attendance records" subtitle="Nothing recorded for this employee in the last 30 days." />
        ) : (
          <ul className="divide-y divide-[#E5E5E3]">
            {records.slice(0, 15).map((r) => (
              <li key={r.id ?? r.date} className="py-2.5 flex items-center justify-between gap-3">
                <div>
                  <p className="text-[13px] text-[#0A0A0A]">{r.date}</p>
                  <p className="text-[12px] text-[#6B6B6B]">
                    In {r.clockIn ? new Date(r.clockIn).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : "—"} ·
                    {" "}Out {r.clockOut ? new Date(r.clockOut).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : "—"}
                  </p>
                </div>
                <AttendanceStatusBadge status={r.status} />
              </li>
            ))}
          </ul>
        )}
      </Card>
    </div>
  );
}
