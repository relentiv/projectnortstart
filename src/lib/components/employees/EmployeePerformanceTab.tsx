/** Goals + review history shown inside the employee profile. */
import { useEffect, useState } from "react";
import { Card, EmptyState, Spinner } from "@/lib/components/ui";
import { GoalProgressRing } from "@/lib/components/performance/GoalProgressRing";
import { ReviewStatusBadge } from "@/lib/components/performance/ReviewStatusBadge";
import { performanceApi, objectiveDisplayProgress } from "@/lib/api/performance";
import type { Objective, Review, ReviewCycle } from "@/lib/types/performance";
import type { Employee } from "@/lib/types/employee";

export function EmployeePerformanceTab({ employee }: { employee: Employee }) {
  const [objectives, setObjectives] = useState<Objective[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [cycles, setCycles] = useState<ReviewCycle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    setLoading(true);
    void Promise.all([
      performanceApi.listObjectives({ ownerId: employee.id }),
      performanceApi.listReviews({ employeeId: employee.id }),
      performanceApi.listCycles(),
    ]).then(([o, r, c]) => {
      if (!alive) return;
      setObjectives(o.data ?? []);
      setReviews(r.data ?? []);
      setCycles(c.data ?? []);
      setLoading(false);
    });
    return () => { alive = false; };
  }, [employee.id]);

  if (loading) return <Card className="flex justify-center py-10"><Spinner /></Card>;

  const cycleName = (id: string) => cycles.find((c) => c.id === id)?.name ?? "Review cycle";

  return (
    <div className="space-y-4">
      <Card>
        <h3 className="text-[13px] font-semibold text-[#0A0A0A] mb-3">Goals</h3>
        {objectives.length === 0 ? (
          <EmptyState title="No goals set" subtitle="This employee has no objectives for the current period." />
        ) : (
          <ul className="space-y-3">
            {objectives.map((o) => (
              <li key={o.id} className="flex items-center gap-3">
                <GoalProgressRing value={objectiveDisplayProgress(o)} size={40} />
                <div className="min-w-0">
                  <p className="text-[13px] text-[#0A0A0A] truncate">{o.title}</p>
                  <p className="text-[12px] text-[#6B6B6B]">{o.period} {o.year} · {o.keyResults.length} key result{o.keyResults.length === 1 ? "" : "s"}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </Card>
      <Card>
        <h3 className="text-[13px] font-semibold text-[#0A0A0A] mb-3">Review history</h3>
        {reviews.length === 0 ? (
          <EmptyState title="No reviews" subtitle="Reviews appear once a cycle includes this employee." />
        ) : (
          <ul className="divide-y divide-[#E5E5E3]">
            {reviews.map((r) => (
              <li key={r.id} className="py-2.5 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-[13px] text-[#0A0A0A] truncate">{cycleName(r.cycleId)}</p>
                  <p className="text-[12px] text-[#6B6B6B]">
                    {r.calibratedRating ?? r.managerReview?.overallRating
                      ? `Rating ${r.calibratedRating ?? r.managerReview?.overallRating}`
                      : "Not rated yet"}
                  </p>
                </div>
                <ReviewStatusBadge status={r.status} />
              </li>
            ))}
          </ul>
        )}
      </Card>
    </div>
  );
}
