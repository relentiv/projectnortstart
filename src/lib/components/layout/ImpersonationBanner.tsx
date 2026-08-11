/** Persistent banner shown while super admin is impersonating a tenant. */
import { useNavigate } from "@tanstack/react-router";
import { impersonationStateStore } from "@/lib/store/auth";

export function ImpersonationBanner() {
  const navigate = useNavigate();
  const imp = impersonationStateStore.useSelector((s) => s.current);
  if (!imp) return null;

  const onExit = () => {
    impersonationStateStore.stop();
    navigate({ to: "/admin/dashboard" });
  };

  return (
    <div
      role="status"
      className="bg-[#FEF3C7] text-[#92400E] border-b border-[#FDE68A] px-6 py-3 flex items-center gap-4"
    >
      <span aria-hidden className="text-lg leading-none">⚠</span>
      <div className="flex-1 text-[13px]">
        <p className="font-semibold">You are viewing as {imp.companyName}</p>
        <p className="opacity-90">All actions here are real and will affect this tenant.</p>
      </div>
      <button
        type="button"
        onClick={onExit}
        className="text-[13px] font-semibold underline underline-offset-4 hover:opacity-80 whitespace-nowrap"
      >
        Exit impersonation ↗
      </button>
    </div>
  );
}
