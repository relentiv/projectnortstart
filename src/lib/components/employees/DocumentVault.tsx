/** List of all employee documents with verification controls. */
import { useState } from "react";
import type { Employee, EmployeeDocument } from "@/lib/types/employee";
import { DocumentItem } from "./DocumentItem";
import { SlideOver } from "@/lib/components/ui/SlideOver";
import { Button, Textarea } from "@/lib/components/ui";

export interface DocumentVaultProps {
  employee: Employee;
  canVerify?: boolean;
  onUpdateDoc: (docId: string, patch: Partial<EmployeeDocument>) => Promise<void> | void;
}

export function DocumentVault({ employee, canVerify, onUpdateDoc }: DocumentVaultProps) {
  const [rejectFor, setRejectFor] = useState<EmployeeDocument | null>(null);
  const [note, setNote] = useState("");

  const upload = async (doc: EmployeeDocument, f: File) => {
    await onUpdateDoc(doc.id, {
      status: "uploaded",
      fileName: f.name,
      uploadedAt: new Date().toISOString(),
      rejectedNote: undefined,
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {employee.documents.map((d) => (
        <DocumentItem
          key={d.id}
          doc={d}
          canVerify={canVerify}
          onUpload={(f) => upload(d, f)}
          onVerify={() => onUpdateDoc(d.id, { status: "verified", verifiedAt: new Date().toISOString() })}
          onReject={() => {
            setRejectFor(d);
            setNote("");
          }}
        />
      ))}
      <SlideOver
        open={!!rejectFor}
        onClose={() => setRejectFor(null)}
        title={`Reject ${rejectFor?.label ?? "document"}`}
        description="The employee will see this note and be asked to re-upload."
        footer={
          <>
            <Button variant="secondary" onClick={() => setRejectFor(null)}>Cancel</Button>
            <Button
              variant="danger"
              onClick={async () => {
                if (rejectFor) {
                  await onUpdateDoc(rejectFor.id, { status: "rejected", rejectedNote: note || "Document rejected." });
                  setRejectFor(null);
                }
              }}
            >
              Reject document
            </Button>
          </>
        }
      >
        <Textarea label="Rejection reason" value={note} onChange={(e) => setNote(e.target.value)} rows={4} />
      </SlideOver>
    </div>
  );
}