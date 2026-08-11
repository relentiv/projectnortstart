import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { L as Link } from "./_libs/tanstack__react-router.mjs";
import { B as Button } from "./_ssr/Button-B92Yl16p.mjs";
import { I as Input } from "./_ssr/Input-DkwuDyVZ.mjs";
import { A as Avatar } from "./_ssr/Avatar-BQ6VYrPZ.mjs";
import { e as essApi, S as Spinner, f as formatDate } from "./_ssr/router-LFebWAoY.mjs";
import { A as Alert } from "./_ssr/Alert-DctqS4QO.mjs";
import { S as StatCard } from "./_ssr/StatCard-MC6T_-Xi.mjs";
import { B as Breadcrumb } from "./_ssr/Breadcrumb-BAW4dGjH.mjs";
import { s as showToast } from "./_ssr/Toast-n7pN7q8Q.mjs";
import { u as useCurrentEmployee } from "./_ssr/useCurrentEmployee-9Y57ts2r.mjs";
import { m as BadgeCheck, n as Mail, o as Calendar, A as ArrowUpRight, C as Clock, p as ShieldCheck, q as Briefcase, r as PenLine, s as Building, l as Lock } from "./_libs/lucide-react.mjs";

import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval.mjs";
import "./_libs/unenv.mjs";


import "./_libs/seroval-plugins.mjs";


import "./_libs/react-dom.mjs";
import "./_libs/isbot.mjs";
import "./_libs/tanstack__query-core.mjs";
import "./_libs/tanstack__react-query.mjs";
import "./_libs/clsx.mjs";
import "./_libs/tailwind-merge.mjs";
import "./_libs/zod.mjs";
import "./_ssr/auth-Dq95Bc2W.mjs";
import "./_ssr/rbac-B_cCMzV8.mjs";
import "./_ssr/rbac-B1d7raBj.mjs";
const SENSITIVE = [{
  field: "bankAccountNumber",
  label: "Bank account number"
}, {
  field: "bankIfsc",
  label: "Bank IFSC code"
}, {
  field: "panNumber",
  label: "PAN card number"
}, {
  field: "aadhaarNumber",
  label: "Aadhaar card number"
}];
function MyProfilePage() {
  const {
    employee,
    loading
  } = useCurrentEmployee();
  const [phone, setPhone] = reactExports.useState("");
  const [personalEmail, setPersonalEmail] = reactExports.useState("");
  const [requests, setRequests] = reactExports.useState([]);
  const [drafts, setDrafts] = reactExports.useState({});
  const [savingContact, setSavingContact] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (!employee) return;
    setPhone(employee.phone || "");
    setPersonalEmail(employee.personalEmail || "");
    void essApi.listChangeRequests(employee.id).then((r) => setRequests(r.data ?? []));
  }, [employee?.id]);
  const pendingRequests = reactExports.useMemo(() => requests.filter((r) => r.status === "pending"), [requests]);
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center items-center py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 32 }) });
  }
  if (!employee) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { variant: "warning", title: "No employee record linked", children: "Your account is currently not associated with an active employee record in the system." }) });
  }
  const raise = async (field, label, currentValue) => {
    const requestedVal = (drafts[field] ?? "").trim();
    if (!requestedVal) {
      showToast("Please enter a new value first.", "error");
      return;
    }
    const res = await essApi.requestProfileChange({
      employeeId: employee.id,
      field,
      label,
      currentValue,
      requestedValue: requestedVal
    });
    if (res.error) return showToast(res.error.message, "error");
    setDrafts((d) => ({
      ...d,
      [field]: ""
    }));
    const list = await essApi.listChangeRequests(employee.id);
    setRequests(list.data ?? []);
    showToast("Change request sent to HR for approval.", "success");
  };
  const handleSaveContact = () => {
    setSavingContact(true);
    setTimeout(() => {
      setSavingContact(false);
      showToast("Contact details updated successfully.", "success");
    }, 400);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto space-y-6 sm:space-y-7 pb-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumb, { items: [{
      label: "Overview",
      to: "/dashboard"
    }, {
      label: "My Profile"
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "rounded-3xl border border-[#E5E5E3] bg-white p-6 sm:p-7 shadow-xs relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-center justify-between gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { name: `${employee.firstName} ${employee.lastName}`, src: employee.avatarUrl, size: 72, className: "rounded-2xl border-2 border-[#E5E5E3] shadow-xs" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 ring-2 ring-white", title: "Active Employee" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2.5 py-0.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-[#0A0A0A] text-white", children: employee.employeeCode || "EMP" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { className: "w-3 h-3 text-emerald-600" }),
              "Active Staff"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-[24px] sm:text-[28px] font-extrabold text-[#0A0A0A] tracking-tight font-sans", children: [
            employee.firstName,
            " ",
            employee.lastName
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex flex-wrap items-center gap-3 text-[13px] text-[#6B6B6B] font-medium", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-3.5 h-3.5 text-[#8E8E8E]" }),
              employee.workEmail
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3.5 h-3.5 text-[#8E8E8E]" }),
              "Joined ",
              formatDate(employee.dateOfJoining)
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 pt-2 md:pt-0 border-t md:border-t-0 border-[#F2F2F0]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/attendance", className: "group inline-flex items-center gap-1.5 rounded-xl bg-[#FAFAF9] hover:bg-[#F2F2F0] border border-[#E5E5E3] px-3.5 py-2 text-xs font-bold text-[#0A0A0A] transition-all active:scale-95 shadow-2xs", children: [
          "My Attendance",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-3.5 h-3.5 text-[#8E8E8E] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#0A0A0A]" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/leave/apply", className: "group inline-flex items-center gap-1.5 rounded-xl bg-[#FAFAF9] hover:bg-[#F2F2F0] border border-[#E5E5E3] px-3.5 py-2 text-xs font-bold text-[#0A0A0A] transition-all active:scale-95 shadow-2xs", children: [
          "Apply Leave",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-3.5 h-3.5 text-[#8E8E8E] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#0A0A0A]" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Pending HR Requests", value: String(pendingRequests.length), variant: pendingRequests.length > 0 ? "dark" : "default", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4" }), trend: pendingRequests.length > 0 ? "Under HR review" : "All records synced", trendDir: pendingRequests.length > 0 ? "down" : "up", actionHint: true, children: pendingRequests.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block w-2 h-2 rounded-full bg-orange-500 animate-ping" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-medium text-neutral-300", children: "Awaiting HR approval" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Profile Status", value: "Verified", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-4 h-4 text-emerald-600" }), trend: "Identity confirmed", trendDir: "up" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Employment Type", value: "Full-time", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "w-4 h-4 text-orange-500" }), trend: "Permanent staff", trendDir: "neutral" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-[#E5E5E3] bg-white p-6 shadow-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pb-4 mb-5 border-b border-[#F2F2F0]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(PenLine, { className: "w-4 h-4 text-orange-500" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[18px] font-extrabold text-[#0A0A0A] tracking-tight", children: "Contact Information" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-semibold text-[#8E8E8E] bg-[#FAFAF9] px-2.5 py-1 rounded-full border border-[#E5E5E3]", children: "Self Editable" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Phone Number", value: phone, onChange: (e) => setPhone(e.target.value), placeholder: "+1 (555) 000-0000" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Personal Email", type: "email", value: personalEmail, onChange: (e) => setPersonalEmail(e.target.value), placeholder: "personal@domain.com" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-3 flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "primary", onClick: handleSaveContact, loading: savingContact, className: "gap-2 bg-[#0A0A0A] hover:bg-neutral-800 text-white font-bold", children: [
              "Save changes",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-3.5 h-3.5" })
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-[#E5E5E3] bg-white p-6 shadow-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 pb-4 mb-5 border-b border-[#F2F2F0]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Building, { className: "w-4 h-4 text-orange-500" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[18px] font-extrabold text-[#0A0A0A] tracking-tight", children: "Employment & Organization Details" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4 text-[13px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DetailBox, { label: "Employee Code", value: employee.employeeCode || "EMP-001" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DetailBox, { label: "Work Email", value: employee.workEmail }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DetailBox, { label: "Date of Joining", value: formatDate(employee.dateOfJoining) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DetailBox, { label: "Employment Status", value: "Active / Full-Time", highlight: true })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-3xl border border-[#E5E5E3] bg-white p-6 shadow-xs h-full flex flex-col justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-4 mb-5 border-b border-[#F2F2F0]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-4 h-4 text-orange-500" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[18px] font-extrabold text-[#0A0A0A] tracking-tight", children: "Sensitive Records" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-[#6B6B6B]", children: "Locked financial and tax fields require HR review before updating." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: SENSITIVE.map(({
          field,
          label
        }) => {
          const current = String(employee[field] ?? "—");
          const pending = requests.find((r) => r.field === field && r.status === "pending");
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-[#E5E5E3] bg-[#FAFAF9] p-4 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-extrabold uppercase tracking-wider text-[#8E8E8E]", children: label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] font-bold text-[#0A0A0A] tabular-nums", children: current })
            ] }),
            pending ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 border-t border-[#E5E5E3] flex flex-col gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-200", children: "Pending HR Review" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: async () => {
                  await essApi.cancelChangeRequest(pending.id);
                  const list = await essApi.listChangeRequests(employee.id);
                  setRequests(list.data ?? []);
                  showToast("Change request cancelled.", "info");
                }, className: "text-[11px] font-semibold text-rose-600 hover:underline", children: "Cancel request" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-[#6B6B6B] truncate", children: [
                "Requested: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-[#0A0A0A]", children: pending.requestedValue })
              ] })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 border-t border-[#E5E5E3] flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: `New ${label.toLowerCase()}`, value: drafts[field] ?? "", onChange: (e) => setDrafts((d) => ({
                ...d,
                [field]: e.target.value
              })), className: "text-xs py-1.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "secondary", onClick: () => void raise(field, label, current), className: "shrink-0 text-xs font-semibold", children: "Request" })
            ] })
          ] }, field);
        }) })
      ] }) }) })
    ] })
  ] });
}
function DetailBox({
  label,
  value,
  highlight
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 rounded-2xl bg-[#FAFAF9] border border-[#E5E5E3]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-extrabold uppercase tracking-[0.1em] text-[#8E8E8E] block mb-1", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[14px] font-bold tracking-tight block ${highlight ? "text-emerald-700 font-extrabold" : "text-[#0A0A0A]"}`, children: value })
  ] });
}
export {
  MyProfilePage as component
};
