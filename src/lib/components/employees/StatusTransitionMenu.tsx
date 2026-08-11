/** Three-dot dropdown for status transitions. */
import { useEffect, useRef, useState } from "react";
import type { EmploymentStatus } from "@/lib/types/employee";

export interface StatusTransitionMenuProps {
  status: EmploymentStatus;
  onTransition: (next: EmploymentStatus, note?: string) => void;
}

const ACTIONS: Record<EmploymentStatus, Array<{ to: EmploymentStatus; label: string; danger?: boolean }>> = {
  active: [
    { to: "notice_period", label: "Put on notice period" },
    { to: "inactive", label: "Deactivate" },
    { to: "exited", label: "Mark as exited", danger: true },
  ],
  probation: [
    { to: "active", label: "Confirm employment" },
    { to: "exited", label: "Mark as exited", danger: true },
  ],
  inactive: [
    { to: "active", label: "Reactivate" },
    { to: "exited", label: "Mark as exited", danger: true },
  ],
  notice_period: [
    { to: "exited", label: "Mark as exited", danger: true },
    { to: "active", label: "Retract notice" },
  ],
  exited: [{ to: "active", label: "Reactivate (rehire)" }],
};

export function StatusTransitionMenu({ status, onTransition }: StatusTransitionMenuProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);
  const actions = ACTIONS[status];
  return (
    <div ref={ref} className="relative inline-block">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="h-9 w-9 inline-flex items-center justify-center rounded-md border border-[#E5E5E3] bg-white hover:bg-[#F2F2F0]"
      >
        ⋯
      </button>
      {open && (
        <div role="menu" className="absolute right-0 mt-1 w-56 rounded-md border border-[#E5E5E3] bg-white shadow-md z-20">
          {actions.map((a) => (
            <button
              key={a.label}
              type="button"
              role="menuitem"
              onClick={() => {
                setOpen(false);
                onTransition(a.to);
              }}
              className={
                "block w-full text-left px-3 py-2 text-[13px] hover:bg-[#FAFAF8] " +
                (a.danger ? "text-[#DC2626]" : "text-[#0A0A0A]")
              }
            >
              {a.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}