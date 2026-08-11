/** Search + filter bar above directory. */
import { SearchInput } from "@/lib/components/ui/SearchInput";
import { MultiSelect } from "@/lib/components/ui/MultiSelect";
import {
  EMPLOYMENT_STATUS_LABELS,
  EMPLOYMENT_TYPE_LABELS,
  type EmployeeFilters,
  type EmploymentStatus,
  type EmploymentType,
} from "@/lib/types/employee";
import type { Department, Designation } from "@/lib/api/settings";

export interface EmployeeSearchFiltersProps {
  filters: EmployeeFilters;
  onChange: (f: EmployeeFilters) => void;
  departments: Department[];
  designations: Designation[];
}

export function EmployeeSearchFilters({ filters, onChange, departments, designations }: EmployeeSearchFiltersProps) {
  const hasAny =
    !!filters.q || !!filters.departmentId || !!filters.designationId || !!filters.types?.length || !!filters.statuses?.length;
  const filteredDesigs = filters.departmentId
    ? designations.filter((d) => d.departmentIds.includes(filters.departmentId!))
    : designations;

  return (
    <div className="rounded-md border border-[#E5E5E3] bg-white p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
        <SearchInput
          placeholder="Search name, code, email…"
          value={filters.q ?? ""}
          onChange={(q) => onChange({ ...filters, q: q || undefined })}
          className="lg:col-span-2"
        />
        <select
          aria-label="Department"
          value={filters.departmentId ?? ""}
          onChange={(e) => onChange({ ...filters, departmentId: e.target.value || undefined, designationId: undefined })}
          className="h-10 px-3 rounded-md border border-[#E5E5E3] bg-white text-[14px]"
        >
          <option value="">All departments</option>
          {departments.map((d) => (
            <option key={d.id} value={d.id}>{d.name}</option>
          ))}
        </select>
        <select
          aria-label="Designation"
          value={filters.designationId ?? ""}
          onChange={(e) => onChange({ ...filters, designationId: e.target.value || undefined })}
          className="h-10 px-3 rounded-md border border-[#E5E5E3] bg-white text-[14px]"
        >
          <option value="">All designations</option>
          {filteredDesigs.map((d) => (
            <option key={d.id} value={d.id}>{d.name}</option>
          ))}
        </select>
        <div className="grid grid-cols-2 gap-2">
          <MultiSelect
            options={Object.entries(EMPLOYMENT_TYPE_LABELS).map(([value, label]) => ({ value, label }))}
            value={filters.types ?? []}
            onChange={(v) => onChange({ ...filters, types: v.length ? (v as EmploymentType[]) : undefined })}
            placeholder="All types"
          />
          <MultiSelect
            options={Object.entries(EMPLOYMENT_STATUS_LABELS).map(([value, label]) => ({ value, label }))}
            value={filters.statuses ?? []}
            onChange={(v) => onChange({ ...filters, statuses: v.length ? (v as EmploymentStatus[]) : undefined })}
            placeholder="All statuses"
          />
        </div>
      </div>
      {hasAny && (
        <button
          type="button"
          onClick={() => onChange({})}
          className="mt-3 text-[12px] text-[var(--tenant-primary)] hover:underline"
        >
          Clear all filters
        </button>
      )}
    </div>
  );
}