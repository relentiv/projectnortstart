/** Shows % complete with hover-revealed missing fields list. */
import { useState } from "react";
import { ProgressBar } from "@/lib/components/ui/ProgressBar";
import { cn } from "@/lib/utils";

export interface ProfileCompletenessBarProps {
  percentage: number;
  missingFields: string[];
  className?: string;
}

export function ProfileCompletenessBar({ percentage, missingFields, className }: ProfileCompletenessBarProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="w-full text-left"
      >
        <ProgressBar value={percentage} label={`Profile ${percentage}% complete`} />
      </button>
      {open && missingFields.length > 0 && (
        <div className="absolute z-10 mt-2 w-80 rounded-md border border-[#E5E5E3] bg-white shadow-md p-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#6B6B6B] mb-2">Missing</p>
          <ul className="space-y-1 text-[13px] text-[#0A0A0A]">
            {missingFields.map((f) => (
              <li key={f}>• {f}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}