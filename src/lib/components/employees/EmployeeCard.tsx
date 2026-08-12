/** Grid view card for an employee. */
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
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
      className="group relative block rounded-2xl border border-[#E5E5E3] bg-white p-5 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-lg overflow-hidden"
    >
      <div className="flex items-start justify-between gap-2 mb-4">
        <EmployeeStatusBadge status={employee.employmentStatus} size="sm" />
        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#FAFAF9] text-[#8E8E8E] border border-[#F2F2F0] group-hover:bg-[#0A0A0A] group-hover:text-white group-hover:border-[#0A0A0A] transition-colors">
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>

      <div className="flex flex-col items-center text-center pt-1">
        <EmployeeAvatar employee={employee} size="lg" showStatus status={employee.employmentStatus} />
        
        <h3 className="mt-3.5 font-bold text-[15px] text-[#0A0A0A] tracking-tight truncate w-full group-hover:text-orange-600 transition-colors">
          {employee.firstName} {employee.lastName}
        </h3>
        
        <p className="mt-0.5 text-[13px] font-medium text-[#404040] truncate w-full">
          {designationName ?? "—"}
        </p>

        <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#8E8E8E] truncate w-full">
          {departmentName ?? "—"}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-[#F2F2F0] flex items-center justify-between text-[11px] text-[#8E8E8E]">
        <span className="font-medium">Code: <span className="text-[#0A0A0A] font-semibold">{employee.employeeCode}</span></span>
        <span className="font-semibold text-orange-600 group-hover:underline inline-flex items-center gap-0.5">
          View Profile
        </span>
      </div>
    </Link>
  );
}