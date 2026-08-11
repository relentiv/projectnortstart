/** Coloured pill for EmploymentStatus. */
import { cn } from "@/lib/utils";
import { EMPLOYMENT_STATUS_LABELS, type EmploymentStatus } from "@/lib/types/employee";

const styles: Record<EmploymentStatus, string> = {
  active: "bg-[#DCFCE7] text-[#166534]",
  probation: "bg-[#FEF3C7] text-[#92400E]",
  inactive: "bg-[#F2F2F0] text-[#6B6B6B]",
  notice_period: "bg-[#FFEDD5] text-[#9A3412]",
  exited: "bg-[#FEE2E2] text-[#991B1B]",
};

export interface EmployeeStatusBadgeProps {
  status: EmploymentStatus;
  size?: "sm" | "md";
  className?: string;
}

export function EmployeeStatusBadge({ status, size = "md", className }: EmployeeStatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full font-medium",
        size === "sm" ? "px-2 py-0.5 text-[11px]" : "px-2.5 py-1 text-[12px]",
        styles[status],
        className,
      )}
    >
      {EMPLOYMENT_STATUS_LABELS[status]}
    </span>
  );
}