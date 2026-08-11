/** Two-month range calendar with weekend/holiday marking and team-leave dots. */
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { startOfDay, toKey } from "@/lib/utils/workingDays";

export interface DateRangePickerProps {
  startDate: Date | null;
  endDate: Date | null;
  onChange: (start: Date | null, end: Date | null) => void;
  minDate?: Date;
  maxDate?: Date;
  disabledDates?: Date[];
  nonWorkingDays?: number[];
  holidays?: { date: Date; name: string }[];
  teamLeaveCounts?: Record<string, number>;
  singleDay?: boolean;
  className?: string;
}

const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];

function monthMatrix(view: Date): (Date | null)[] {
  const first = new Date(view.getFullYear(), view.getMonth(), 1);
  const days = new Date(view.getFullYear(), view.getMonth() + 1, 0).getDate();
  const lead = first.getDay();
  const cells: (Date | null)[] = Array.from({ length: lead }, () => null);
  for (let d = 1; d <= days; d++) cells.push(new Date(view.getFullYear(), view.getMonth(), d));
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

export function DateRangePicker({
  startDate,
  endDate,
  onChange,
  minDate,
  maxDate,
  disabledDates = [],
  nonWorkingDays = [0, 6],
  holidays = [],
  teamLeaveCounts = {},
  singleDay = false,
  className,
}: DateRangePickerProps) {
  const [view, setView] = useState(() => startOfDay(startDate ?? new Date()));
  const [hover, setHover] = useState<Date | null>(null);

  const disabledSet = useMemo(() => new Set(disabledDates.map(toKey)), [disabledDates]);
  const holidayMap = useMemo(() => {
    const m = new Map<string, string>();
    holidays.forEach((h) => m.set(toKey(h.date), h.name));
    return m;
  }, [holidays]);

  const months = [view, new Date(view.getFullYear(), view.getMonth() + 1, 1)];

  const isDisabled = (d: Date) => {
    if (minDate && d.getTime() < startOfDay(minDate).getTime()) return true;
    if (maxDate && d.getTime() > startOfDay(maxDate).getTime()) return true;
    return disabledSet.has(toKey(d));
  };

  const rangeEnd = endDate ?? (startDate && !singleDay ? hover : null);

  const inRange = (d: Date) => {
    if (!startDate || !rangeEnd) return false;
    const a = Math.min(startDate.getTime(), rangeEnd.getTime());
    const b = Math.max(startDate.getTime(), rangeEnd.getTime());
    return d.getTime() > a && d.getTime() < b;
  };

  const pick = (d: Date) => {
    if (isDisabled(d)) return;
    if (singleDay) return onChange(d, d);
    if (!startDate || (startDate && endDate)) return onChange(d, null);
    if (d.getTime() < startDate.getTime()) return onChange(d, startDate);
    onChange(startDate, d);
  };

  return (
    <div className={cn("rounded-md border border-[#E5E5E3] bg-white p-4", className)}>
      <div className="flex items-center justify-between mb-3">
        <button
          type="button"
          aria-label="Previous month"
          onClick={() => setView(new Date(view.getFullYear(), view.getMonth() - 1, 1))}
          className="h-8 w-8 rounded-sm border border-[#E5E5E3] text-[#6B6B6B] hover:bg-[#F2F2F0] transition-colors"
        >
          ‹
        </button>
        <div className="flex gap-10 text-[13px] font-semibold">
          {months.map((m) => (
            <span key={m.toISOString()} className="min-w-[132px] text-center">
              {m.toLocaleDateString("en-GB", { month: "long", year: "numeric" })}
            </span>
          ))}
        </div>
        <button
          type="button"
          aria-label="Next month"
          onClick={() => setView(new Date(view.getFullYear(), view.getMonth() + 1, 1))}
          className="h-8 w-8 rounded-sm border border-[#E5E5E3] text-[#6B6B6B] hover:bg-[#F2F2F0] transition-colors"
        >
          ›
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {months.map((m) => (
          <div key={m.toISOString()}>
            <div className="grid grid-cols-7 mb-1">
              {WEEKDAYS.map((w, i) => (
                <span key={i} className="text-center text-[10px] font-semibold uppercase tracking-wide text-[#9CA3AF] py-1">{w}</span>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-y-0.5">
              {monthMatrix(m).map((d, i) => {
                if (!d) return <span key={i} />;
                const key = toKey(d);
                const disabled = isDisabled(d);
                const weekend = nonWorkingDays.includes(d.getDay());
                const holiday = holidayMap.get(key);
                const isStart = startDate && d.getTime() === startDate.getTime();
                const isEnd = rangeEnd && d.getTime() === rangeEnd.getTime();
                const mid = inRange(d);
                const teamCount = teamLeaveCounts[key] ?? 0;
                return (
                  <button
                    key={i}
                    type="button"
                    disabled={disabled}
                    title={holiday ?? (teamCount ? `${teamCount} teammate(s) on leave` : undefined)}
                    onMouseEnter={() => setHover(d)}
                    onFocus={() => setHover(d)}
                    onClick={() => pick(d)}
                    aria-label={d.toDateString()}
                    aria-pressed={!!(isStart || isEnd)}
                    className={cn(
                      "relative h-9 text-[13px] rounded-sm transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[var(--tenant-primary)]",
                      disabled && "text-[#D4D4D8] line-through cursor-not-allowed",
                      !disabled && weekend && "text-[#9CA3AF]",
                      !disabled && !weekend && "text-[#0A0A0A] hover:bg-[#F2F2F0]",
                      holiday && !disabled && "text-[#B45309]",
                      mid && "bg-[color-mix(in_srgb,var(--tenant-primary)_14%,transparent)]",
                      (isStart || isEnd) && "!bg-[var(--tenant-primary)] !text-[var(--tenant-text-on-primary)] font-semibold",
                    )}
                  >
                    {d.getDate()}
                    {teamCount > 0 && !isStart && !isEnd && (
                      <span
                        aria-hidden
                        className="absolute bottom-1 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-[#F59E0B]"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 pt-3 border-t border-[#F2F2F0] flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-[#6B6B6B]">
        <span className="inline-flex items-center gap-1.5"><i className="h-2 w-2 rounded-full bg-[var(--tenant-primary)]" />Selected</span>
        <span className="inline-flex items-center gap-1.5"><i className="h-2 w-2 rounded-full bg-[#F59E0B]" />Teammate on leave</span>
        <span className="inline-flex items-center gap-1.5 text-[#B45309]">Holiday</span>
        <span className="inline-flex items-center gap-1.5 line-through text-[#D4D4D8]">Unavailable</span>
      </div>
    </div>
  );
}
