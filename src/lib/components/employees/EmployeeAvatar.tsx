/** Avatar with initials fallback + optional status dot. */
import { cn } from "@/lib/utils";
import type { EmploymentStatus } from "@/lib/types/employee";

const sizeMap = { sm: 24, md: 36, lg: 64, xl: 80 } as const;

const statusColor: Record<EmploymentStatus, string> = {
  active: "#16A34A",
  probation: "#F59E0B",
  inactive: "#9CA3AF",
  notice_period: "#F97316",
  exited: "#DC2626",
};

export interface EmployeeAvatarProps {
  employee: { firstName: string; lastName: string; avatarUrl?: string };
  size?: keyof typeof sizeMap;
  showStatus?: boolean;
  status?: EmploymentStatus;
  className?: string;
}

export function EmployeeAvatar({ employee, size = "md", showStatus, status, className }: EmployeeAvatarProps) {
  const px = sizeMap[size];
  const initials = (employee.firstName[0] ?? "?") + (employee.lastName[0] ?? "");
  return (
    <span className={cn("relative inline-flex shrink-0", className)} style={{ width: px, height: px }}>
      {employee.avatarUrl ? (
        <img src={employee.avatarUrl} alt="" className="h-full w-full rounded-full object-cover" />
      ) : (
        <span
          className="h-full w-full rounded-full inline-flex items-center justify-center font-semibold uppercase"
          style={{
            background: "var(--tenant-secondary)",
            color: "var(--tenant-text-on-secondary)",
            fontSize: Math.round(px * 0.4),
          }}
        >
          {initials}
        </span>
      )}
      {showStatus && status && (
        <span
          aria-label={status}
          className="absolute bottom-0 right-0 rounded-full ring-2 ring-white"
          style={{
            background: statusColor[status],
            width: Math.max(8, Math.round(px * 0.22)),
            height: Math.max(8, Math.round(px * 0.22)),
          }}
        />
      )}
    </span>
  );
}