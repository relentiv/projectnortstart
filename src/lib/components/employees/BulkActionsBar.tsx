/** Bar shown when 1+ rows selected in directory. */
import { Button } from "@/lib/components/ui";

export interface BulkActionsBarProps {
  count: number;
  onExport: () => void;
  onArchive: () => void;
  onClear: () => void;
}

export function BulkActionsBar({ count, onExport, onArchive, onClear }: BulkActionsBarProps) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-md border border-[#0A0A0A]/10 bg-[#0A0A0A] text-white px-4 py-3">
      <p className="text-[13px] font-medium">{count} employee{count === 1 ? "" : "s"} selected</p>
      <div className="flex items-center gap-2">
        <Button variant="secondary" size="sm" onClick={onExport}>Export CSV</Button>
        <Button variant="danger" size="sm" onClick={onArchive}>Archive</Button>
        <button type="button" onClick={onClear} className="text-[12px] text-white/70 hover:text-white">Deselect all</button>
      </div>
    </div>
  );
}