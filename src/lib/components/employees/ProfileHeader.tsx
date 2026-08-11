/** Top section of employee profile page. */
import { Button } from "@/lib/components/ui";
import type { Employee } from "@/lib/types/employee";
import { EmployeeAvatar } from "./EmployeeAvatar";
import { EmployeeStatusBadge } from "./EmployeeStatusBadge";
import { StatusTransitionMenu } from "./StatusTransitionMenu";
import type { EmploymentStatus } from "@/lib/types/employee";

export interface ProfileHeaderProps {
  employee: Employee;
  departmentName?: string;
  designationName?: string;
  onEdit: () => void;
  onTransition: (next: EmploymentStatus) => void;
}

export function ProfileHeader({ employee, departmentName, designationName, onEdit, onTransition }: ProfileHeaderProps) {
  return (
    <div className="rounded-md border border-[#E5E5E3] bg-white p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4 min-w-0">
          <EmployeeAvatar employee={employee} size="xl" showStatus status={employee.employmentStatus} />
          <div className="min-w-0">
            <h1 className="text-[24px] font-bold text-[#0A0A0A] truncate">
              {employee.firstName} {employee.lastName}
            </h1>
            <p className="mt-1 text-[14px] text-[#6B6B6B]">
              {designationName ?? "—"} · {departmentName ?? "—"}
            </p>
            <div className="mt-2 flex items-center gap-2 flex-wrap">
              <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#6B6B6B] bg-[#F2F2F0] px-2 py-0.5 rounded-sm">
                {employee.employeeCode}
              </span>
              <EmployeeStatusBadge status={employee.employmentStatus} />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <Button variant="secondary" onClick={onEdit}>Edit profile</Button>
          <StatusTransitionMenu status={employee.employmentStatus} onTransition={onTransition} />
        </div>
      </div>
    </div>
  );
}