/** Grid view card for an employee. */
import { Link } from "@tanstack/react-router";
import type { Employee } from "@/lib/types/employee";
import { EmployeeAvatar } from "./EmployeeAvatar";
import { EmployeeStatusBadge } from "./EmployeeStatusBadge";

export interface EmployeeCardProps {
  employee: Employee;
  designationName?: string;
  departmentName?: string;
}

export function EmployeeCard({ employee, designationName, departmentName }: EmployeeCardProps) {
  return (
    <Link
      to="/employees/$employeeId"
      params={{ employeeId: employee.id }}
      className="group block rounded-md border border-[#E5E5E3] bg-white p-5 hover:shadow-md transition-shadow"
    >
      <div className="flex flex-col items-center text-center">
        <EmployeeAvatar employee={employee} size="lg" showStatus status={employee.employmentStatus} />
        <p className="mt-3 font-semibold text-[14px] text-[#0A0A0A] truncate w-full">
          {employee.firstName} {employee.lastName}
        </p>
        <p className="text-[13px] text-[#6B6B6B] truncate w-full">{designationName ?? "—"}</p>
        <p className="text-[12px] text-[#9CA3AF] truncate w-full">{departmentName ?? "—"}</p>
        <div className="mt-3">
          <EmployeeStatusBadge status={employee.employmentStatus} size="sm" />
        </div>
        <span className="mt-3 text-[12px] text-[var(--tenant-primary)] opacity-0 group-hover:opacity-100 transition-opacity">
          View profile →
        </span>
      </div>
    </Link>
  );
}