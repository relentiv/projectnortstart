/** Single document row inside DocumentVault. */
import { FileUpload } from "@/lib/components/ui/FileUpload";
import { Badge } from "@/lib/components/ui/Badge";
import type { EmployeeDocument } from "@/lib/types/employee";

export interface DocumentItemProps {
  doc: EmployeeDocument;
  canVerify?: boolean;
  onUpload: (file: File) => void;
  onVerify?: () => void;
  onReject?: () => void;
}

import type { BadgeVariant } from "@/lib/components/ui/Badge";
const statusBadge: Record<EmployeeDocument["status"], { label: string; variant: BadgeVariant }> = {
  pending: { label: "Pending", variant: "default" },
  uploaded: { label: "Uploaded", variant: "tenant-accent" },
  verified: { label: "Verified", variant: "success" },
  rejected: { label: "Rejected", variant: "danger" },
};

export function DocumentItem({ doc, canVerify, onUpload, onVerify, onReject }: DocumentItemProps) {
  const s = statusBadge[doc.status];
  return (
    <div className="rounded-md border border-[#E5E5E3] bg-white p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-medium text-[14px] text-[#0A0A0A]">{doc.label}</p>
          {doc.uploadedAt && (
            <p className="text-[12px] text-[#6B6B6B]">Uploaded {new Date(doc.uploadedAt).toLocaleDateString()}</p>
          )}
          {doc.rejectedNote && (
            <p className="mt-2 text-[12px] text-[#92400E] bg-[#FEF3C7] rounded-sm px-2 py-1">
              Reason: {doc.rejectedNote}
            </p>
          )}
        </div>
        <Badge variant={s.variant}>{s.label}</Badge>
      </div>
      <div className="mt-3">
        {doc.status === "verified" ? (
          <p className="text-[12px] text-[#6B6B6B]">{doc.fileName ?? "Verified document"} — cannot be replaced.</p>
        ) : (
          <FileUpload
            onFileSelect={onUpload}
            currentFile={doc.fileName ? { name: doc.fileName, sizeKB: 120 } : null}
            onFileRemove={() => { /* keep as uploaded */ }}
          />
        )}
      </div>
      {canVerify && doc.status === "uploaded" && (
        <div className="mt-3 flex items-center gap-2">
          <button type="button" onClick={onVerify} className="text-[12px] text-[#166534] hover:underline">
            Mark as verified
          </button>
          <button type="button" onClick={onReject} className="text-[12px] text-[#DC2626] hover:underline">
            Reject
          </button>
        </div>
      )}
    </div>
  );
}