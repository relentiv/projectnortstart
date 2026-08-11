/** Accessible tab group with arrow-key navigation. */
import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface TabsItem {
  id: string;
  label: string;
  content: ReactNode;
  /** Optional count pill rendered next to the label. */
  badge?: number;
}

export interface TabsProps {
  tabs: TabsItem[];
  defaultTab?: string;
  /** Controlled mode — pair with onTabChange (e.g. URL-synced tabs). */
  activeTab?: string;
  onTabChange?: (id: string) => void;
  className?: string;
}

export function Tabs({ tabs, defaultTab, activeTab, onTabChange, className }: TabsProps) {
  const [internal, setInternal] = useState(defaultTab ?? tabs[0]?.id);
  const active = activeTab ?? internal;
  const setActive = (id: string) => {
    setInternal(id);
    onTabChange?.(id);
  };
  const id = useId();
  const refs = useRef<Record<string, HTMLButtonElement | null>>({});

  const onKey = (e: KeyboardEvent<HTMLButtonElement>, idx: number) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft" && e.key !== "Home" && e.key !== "End") return;
    e.preventDefault();
    const next =
      e.key === "ArrowRight" ? (idx + 1) % tabs.length
      : e.key === "ArrowLeft" ? (idx - 1 + tabs.length) % tabs.length
      : e.key === "Home" ? 0 : tabs.length - 1;
    const target = tabs[next];
    setActive(target.id);
    refs.current[target.id]?.focus();
  };

  return (
    <div className={className}>
      <div role="tablist" aria-label="Tabs" className="flex gap-6 border-b border-[#E5E5E3]">
        {tabs.map((t, i) => {
          const selected = t.id === active;
          return (
            <button
              key={t.id}
              ref={(el) => { refs.current[t.id] = el; }}
              role="tab"
              type="button"
              id={`${id}-trigger-${t.id}`}
              aria-controls={`${id}-panel-${t.id}`}
              aria-selected={selected}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(t.id)}
              onKeyDown={(e) => onKey(e, i)}
              className={cn(
                "relative py-3 text-[14px] font-medium transition-colors duration-150 outline-none",
                "focus-visible:text-[var(--tenant-primary)]",
                selected ? "text-[var(--tenant-primary)]" : "text-[#6B6B6B] hover:text-[#0A0A0A]",
              )}
            >
              {t.label}
              {typeof t.badge === "number" && t.badge > 0 && (
                <span className="ml-1.5 inline-flex items-center rounded-full bg-[#F2F2F0] px-1.5 py-0.5 text-[11px] font-semibold text-[#6B6B6B]">
                  {t.badge}
                </span>
              )}
              {selected && (
                <span className="absolute inset-x-0 -bottom-px h-0.5" style={{ background: "var(--tenant-primary)" }} aria-hidden />
              )}
            </button>
          );
        })}
      </div>
      {tabs.map((t) => (
        <div
          key={t.id}
          role="tabpanel"
          id={`${id}-panel-${t.id}`}
          aria-labelledby={`${id}-trigger-${t.id}`}
          hidden={t.id !== active}
          className="pt-6"
        >
          {t.id === active && t.content}
        </div>
      ))}
    </div>
  );
}
