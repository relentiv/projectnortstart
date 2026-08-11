/** Compensation + payslips shown inside the employee profile. */
import { useEffect, useState } from "react";
import { Card, EmptyState, Spinner } from "@/lib/components/ui";
import { payrollApi } from "@/lib/api/payroll";
import { maskAccount } from "@/lib/api/payroll";
import { formatCurrency } from "@/lib/utils/format";
import type { EmployeeSalary, Payslip } from "@/lib/types/payroll";
import type { Employee } from "@/lib/types/employee";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function EmployeeCompensationTab({ employee }: { employee: Employee }) {
  const [salary, setSalary] = useState<EmployeeSalary | null>(null);
  const [payslips, setPayslips] = useState<Payslip[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    setLoading(true);
    void Promise.all([
      payrollApi.getCurrentSalary(employee.id),
      payrollApi.listPayslips(employee.id),
    ]).then(([s, p]) => {
      if (!alive) return;
      setSalary(s.data ?? null);
      setPayslips(p.data ?? []);
      setLoading(false);
    });
    return () => { alive = false; };
  }, [employee.id]);

  if (loading) return <Card className="flex justify-center py-10"><Spinner /></Card>;

  const ctc = salary?.annualCtc ?? employee.ctcAnnual ?? 0;

  return (
    <div className="space-y-4">
      <Card>
        <h3 className="text-[13px] font-semibold text-[#0A0A0A] mb-3">Compensation</h3>
        <dl className="grid grid-cols-2 gap-y-2 text-[13px]">
          <dt className="text-[#6B6B6B]">Annual CTC</dt>
          <dd className="text-[#0A0A0A]">{ctc ? formatCurrency(ctc) : "—"}</dd>
          <dt className="text-[#6B6B6B]">Effective from</dt>
          <dd className="text-[#0A0A0A]">{salary?.effectiveFrom?.slice(0, 10) ?? "—"}</dd>
          <dt className="text-[#6B6B6B]">Bank</dt>
          <dd className="text-[#0A0A0A]">{salary?.bankName ?? employee.bankName ?? "—"}</dd>
          <dt className="text-[#6B6B6B]">Account</dt>
          <dd className="text-[#0A0A0A]">{maskAccount(salary?.bankAccountNumber ?? employee.bankAccountNumber)}</dd>
          <dt className="text-[#6B6B6B]">IFSC</dt>
          <dd className="text-[#0A0A0A]">{salary?.bankIfsc ?? employee.bankIfsc ?? "—"}</dd>
          <dt className="text-[#6B6B6B]">PAN</dt>
          <dd className="text-[#0A0A0A]">{salary?.panNumber ?? "—"}</dd>
        </dl>
      </Card>
      <Card>
        <h3 className="text-[13px] font-semibold text-[#0A0A0A] mb-3">Payslips</h3>
        {payslips.length === 0 ? (
          <EmptyState title="No payslips yet" subtitle="Payslips appear here once a payroll run is finalised." />
        ) : (
          <ul className="divide-y divide-[#E5E5E3]">
            {payslips.map((p) => (
              <li key={p.id} className="py-2.5 flex items-center justify-between gap-3">
                <span className="text-[13px] text-[#0A0A0A]">{MONTHS[p.month - 1]} {p.year}</span>
                <span className="text-[13px] text-[#6B6B6B]">
                  Gross {formatCurrency(p.grossEarnings)} · Net{" "}
                  <span className="text-[#0A0A0A] font-medium">{formatCurrency(p.netPay)}</span>
                </span>
              </li>
            ))}
          </ul>
        )}
      </Card>
    </div>
  );
}
