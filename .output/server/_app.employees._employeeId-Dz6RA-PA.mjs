import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { f as useParams, d as useNavigate } from "./_libs/tanstack__react-router.mjs";
import { C as Card } from "./_ssr/Card-AgXmnnkq.mjs";
import { S as Spinner, Z as computeCompleteness, _ as getEmployee, s as settingsApi, $ as setStatus, c as cn, a0 as updateDocument, p as payrollApi, j as formatCurrency, Y as maskAccount, i as leaveApi, a as attendanceApi, y as performanceApi, z as objectiveDisplayProgress, l as listEmployees } from "./_ssr/router-CPP24NZe.mjs";
import { E as EmptyState } from "./_ssr/EmptyState-Cs_2WXRJ.mjs";
import { T as Tabs } from "./_ssr/Tabs-s82fblAm.mjs";
import { B as Breadcrumb } from "./_ssr/Breadcrumb-Bx825HWE.mjs";
import { s as showToast } from "./_ssr/Toast-DgpI28ao.mjs";
import { P as ProgressBar } from "./_ssr/ProgressBar-BBqPQ_Z7.mjs";
import { E as EmployeeAvatar } from "./_ssr/EmployeeAvatar-DWNa9Ptn.mjs";
import { E as EmployeeStatusBadge } from "./_ssr/EmployeeStatusBadge-CKWfaA9_.mjs";
import { F as FileUpload } from "./_ssr/FileUpload-COmUKg3_.mjs";
import { B as Badge } from "./_ssr/Badge-DOnZHL7Z.mjs";
import { S as SlideOver } from "./_ssr/SlideOver-COdJD426.mjs";
import { B as Button } from "./_ssr/Button-CFBbQAsZ.mjs";
import { T as Textarea } from "./_ssr/Textarea-DsONP0BR.mjs";
import { L as LeaveBalanceGrid } from "./_ssr/LeaveBalanceGrid-CPxb9EC8.mjs";
import { L as LeaveStatusBadge } from "./_ssr/LeaveStatusBadge-AcqeXFUv.mjs";
import { A as AttendanceStatusBadge } from "./_ssr/AttendanceStatusBadge-BoubD3sX.mjs";
import { G as GoalProgressRing } from "./_ssr/GoalProgressRing-C5SFRSti.mjs";
import { R as ReviewStatusBadge } from "./_ssr/ReviewStatusBadge-BE3YubWa.mjs";
import { R as RoleBadge } from "./_ssr/RoleBadge-DX2dt138.mjs";
import { R as RoleAssignmentRow } from "./_ssr/RoleAssignmentRow-D-mTfAJM.mjs";
import { P as PermissionGuard } from "./_ssr/PermissionGuard-DrHCZdH7.mjs";
import { D as DelegationCard } from "./_ssr/DelegationCard-CFo0h-vP.mjs";
import { B as BUILT_IN_ROLE_IDS, g as getEffectivePermissionsSync, r as revokeDelegation, P as PERMISSIONS, l as listRoles, a as listAssignments, b as listDelegations, c as assignRole } from "./_ssr/rbac-Ci1w5KuA.mjs";
import { f as Sparkles, s as PenLine, ah as Info, x as CircleCheck, K as CircleAlert, ai as FolderCheck, aj as ShieldAlert, D as DollarSign, ak as Building2, al as Banknote, A as ArrowUpRight, am as TreePalm, p as Calendar, C as Clock, d as Target, a3 as Award, E as Ellipsis, l as ChevronDown, T as TriangleAlert, q as ShieldCheck, V as FileText, z as Check, X } from "./_libs/lucide-react.mjs";

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
import "./_ssr/employee-uFc04z2V.mjs";
import "./_ssr/LeaveBalanceCard-Dq_4GDSF.mjs";
import "./_ssr/leave-Cc9GP3pR.mjs";
import "./_ssr/attendance-DW5Ch_bj.mjs";
import "./_ssr/performance-Bre1KeEI.mjs";
import "./_ssr/Select-CDtKs7RG.mjs";
import "./_ssr/usePermission-DoLX-EvC.mjs";
import "./_ssr/rbac-BwLVdIYU.mjs";
function ProfileCompletenessBar({ percentage, missingFields, className }) {
  const [open, setOpen] = reactExports.useState(false);
  const isComplete = percentage === 100;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("relative rounded-2xl border border-[#E5E5E3] bg-white p-4 sm:p-5 shadow-xs", className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => setOpen((o) => !o),
        onMouseEnter: () => setOpen(true),
        onMouseLeave: () => setOpen(false),
        className: "w-full text-left focus:outline-hidden group",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-orange-500" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-semibold uppercase tracking-[0.1em] text-[#8E8E8E]", children: "Profile Completeness" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[18px] sm:text-[22px] font-bold tracking-tight text-[#0A0A0A] tabular-nums", children: [
                percentage,
                "%"
              ] }),
              missingFields.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "w-4 h-4 text-neutral-400 group-hover:text-orange-500 transition-colors" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ProgressBar, { value: percentage }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2.5 flex items-center justify-between text-[12px] text-neutral-500 font-medium", children: [
            isComplete ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-emerald-600 font-semibold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5" }),
              " All required fields complete"
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              missingFields.length,
              " field",
              missingFields.length === 1 ? "" : "s",
              " missing — hover to view"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neutral-400 group-hover:text-orange-600 font-semibold text-[11px] transition-colors", children: open ? "Hide details" : "Details →" })
          ] })
        ]
      }
    ),
    open && missingFields.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute left-0 right-0 z-30 mt-2 rounded-xl border border-[#E5E5E3] bg-white p-4 shadow-xl animate-in fade-in slide-in-from-top-1 duration-150", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2 pb-2 border-b border-[#F2F2F0]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-4 h-4 text-amber-500" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] font-bold uppercase tracking-[0.1em] text-[#0A0A0A]", children: [
          "Missing Information (",
          missingFields.length,
          ")"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2 text-[12px] text-[#404040]", children: missingFields.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-1.5 bg-[#FAFAF9] px-2.5 py-1.5 rounded-lg border border-[#F2F2F0]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: f })
      ] }, f)) })
    ] })
  ] });
}
const ACTIONS = {
  active: [
    { to: "notice_period", label: "Put on notice period" },
    { to: "inactive", label: "Deactivate" },
    { to: "exited", label: "Mark as exited", danger: true }
  ],
  probation: [
    { to: "active", label: "Confirm employment" },
    { to: "exited", label: "Mark as exited", danger: true }
  ],
  inactive: [
    { to: "active", label: "Reactivate" },
    { to: "exited", label: "Mark as exited", danger: true }
  ],
  notice_period: [
    { to: "exited", label: "Mark as exited", danger: true },
    { to: "active", label: "Retract notice" }
  ],
  exited: [{ to: "active", label: "Reactivate (rehire)" }]
};
function StatusTransitionMenu({ status, onTransition }) {
  const [open, setOpen] = reactExports.useState(false);
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);
  const actions = ACTIONS[status];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref, className: "relative inline-block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => setOpen((o) => !o),
        "aria-haspopup": "menu",
        "aria-expanded": open,
        className: "group inline-flex items-center gap-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 px-3.5 py-2.5 text-xs font-semibold text-white backdrop-blur-md transition-all active:scale-95 cursor-pointer",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Ellipsis, { className: "w-4 h-4 text-neutral-300 group-hover:text-white" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Actions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3.5 h-3.5 text-neutral-400 group-hover:text-white transition-transform group-aria-expanded:rotate-180" })
        ]
      }
    ),
    open && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        role: "menu",
        className: "absolute right-0 mt-2 w-56 rounded-xl border border-[#E5E5E3] bg-white shadow-xl py-1.5 z-30 divide-y divide-[#F2F2F0] animate-in fade-in slide-in-from-top-1 duration-150",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.1em] text-[#8E8E8E]", children: "Status Transitions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-1", children: actions.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              role: "menuitem",
              onClick: () => {
                setOpen(false);
                onTransition(a.to);
              },
              className: "w-full text-left px-3.5 py-2 text-[13px] font-medium transition-colors flex items-center justify-between group cursor-pointer " + (a.danger ? "text-rose-600 hover:bg-rose-50" : "text-[#0A0A0A] hover:bg-[#FAFAF9] hover:text-orange-600"),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: a.label }),
                a.danger ? /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-3.5 h-3.5 text-rose-500 opacity-60 group-hover:opacity-100" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-3.5 h-3.5 text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity" })
              ]
            },
            a.label
          )) })
        ]
      }
    )
  ] });
}
function ProfileHeader({ employee, departmentName, designationName, onEdit, onTransition }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-gradient-to-r from-neutral-900 via-neutral-900 to-neutral-800 text-white shadow-md relative overflow-hidden p-6 sm:p-7 border border-neutral-800", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-24 -right-24 w-64 h-64 rounded-full bg-orange-500/15 blur-3xl pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-start sm:items-center gap-5 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(EmployeeAvatar, { employee, size: "xl", showStatus: true, status: employee.employmentStatus, className: "shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-white/10 text-neutral-200 border border-white/15 backdrop-blur-md", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3 h-3 text-orange-400" }),
              employee.employeeCode
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(EmployeeStatusBadge, { status: employee.employmentStatus, size: "sm" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-[28px] sm:text-[34px] font-extrabold tracking-tight text-white font-sans truncate", children: [
            employee.firstName,
            " ",
            employee.lastName
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[14px] font-medium text-neutral-300 flex flex-wrap items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: designationName ?? "—" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neutral-500", children: "•" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neutral-400", children: departmentName ?? "—" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex items-center gap-2.5 shrink-0 self-start md:self-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: onEdit,
            className: "group inline-flex items-center gap-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 px-4 py-2.5 text-xs font-semibold text-white backdrop-blur-md transition-all active:scale-95 cursor-pointer",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(PenLine, { className: "w-3.5 h-3.5 text-neutral-300 group-hover:text-white" }),
              "Edit Profile"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatusTransitionMenu, { status: employee.employmentStatus, onTransition })
      ] })
    ] })
  ] });
}
const statusBadge = {
  pending: { label: "Pending", variant: "default", icon: Clock },
  uploaded: { label: "Uploaded", variant: "tenant-accent", icon: FileText },
  verified: { label: "Verified", variant: "success", icon: CircleCheck },
  rejected: { label: "Rejected", variant: "danger", icon: CircleAlert }
};
function DocumentItem({ doc, canVerify, onUpload, onVerify, onReject }) {
  const s = statusBadge[doc.status];
  const Icon = s.icon;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-[#E5E5E3] bg-white p-4 sm:p-5 shadow-xs transition-all duration-200 hover:shadow-md flex flex-col justify-between space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2.5 rounded-xl bg-[#FAFAF9] border border-[#F2F2F0] text-[#0A0A0A] shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5 text-orange-600" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-[14px] text-[#0A0A0A] truncate", children: doc.label }),
            doc.uploadedAt ? /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[12px] text-[#8E8E8E] font-medium", children: [
              "Uploaded ",
              new Date(doc.uploadedAt).toLocaleDateString()
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-[#8E8E8E] font-medium", children: "Not uploaded yet" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: s.variant, children: s.label })
      ] }),
      doc.rejectedNote && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 text-[12px] text-rose-700 bg-rose-50 border border-rose-200/60 rounded-xl p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-4 h-4 shrink-0 mt-0.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: "Rejection note:" }),
          " ",
          doc.rejectedNote
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 pt-1 border-t border-[#F2F2F0]", children: [
      doc.status === "verified" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-[12px] text-emerald-700 font-semibold bg-emerald-50/50 px-3 py-2 rounded-xl border border-emerald-200/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-emerald-600" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: doc.fileName ?? "Verified document" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        FileUpload,
        {
          onFileSelect: onUpload,
          currentFile: doc.fileName ? { name: doc.fileName, sizeKB: 120 } : null,
          onFileRemove: () => {
          }
        }
      ),
      canVerify && doc.status === "uploaded" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 pt-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: onVerify,
            className: "flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 text-xs font-semibold transition-colors cursor-pointer",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3.5 h-3.5" }),
              "Verify"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: onReject,
            className: "flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 text-xs font-semibold transition-colors cursor-pointer",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3.5 h-3.5" }),
              "Reject"
            ]
          }
        )
      ] })
    ] })
  ] });
}
function DocumentVault({ employee, canVerify, onUpdateDoc }) {
  const [rejectFor, setRejectFor] = reactExports.useState(null);
  const [note, setNote] = reactExports.useState("");
  const upload = async (doc, f) => {
    await onUpdateDoc(doc.id, {
      status: "uploaded",
      fileName: f.name,
      uploadedAt: (/* @__PURE__ */ new Date()).toISOString(),
      rejectedNote: void 0
    });
  };
  const verifiedCount = employee.documents.filter((d) => d.status === "verified").length;
  const totalCount = employee.documents.length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-[#E5E5E3] bg-[#FAFAF9] p-4 flex items-center justify-between flex-wrap gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2.5 rounded-xl bg-white border border-[#E5E5E3] text-[#0A0A0A] shadow-2xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FolderCheck, { className: "w-5 h-5 text-orange-600" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[14px] font-bold text-[#0A0A0A] tracking-tight", children: "Document Vault" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-[#8E8E8E]", children: "Official compliance & identity documents" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white border border-[#E5E5E3] text-[#0A0A0A] shadow-2xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-emerald-500" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "tabular-nums", children: [
          verifiedCount,
          " / ",
          totalCount
        ] }),
        " Verified"
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: employee.documents.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      DocumentItem,
      {
        doc: d,
        canVerify,
        onUpload: (f) => upload(d, f),
        onVerify: () => onUpdateDoc(d.id, { status: "verified", verifiedAt: (/* @__PURE__ */ new Date()).toISOString() }),
        onReject: () => {
          setRejectFor(d);
          setNote("");
        }
      },
      d.id
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SlideOver,
      {
        open: !!rejectFor,
        onClose: () => setRejectFor(null),
        title: `Reject ${rejectFor?.label ?? "document"}`,
        description: "The employee will see this note and be asked to re-upload.",
        footer: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: () => setRejectFor(null), children: "Cancel" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "danger",
              onClick: async () => {
                if (rejectFor) {
                  await onUpdateDoc(rejectFor.id, { status: "rejected", rejectedNote: note || "Document rejected." });
                  setRejectFor(null);
                }
              },
              children: "Reject document"
            }
          )
        ] }),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 pt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-rose-50 border border-rose-200/60 text-xs text-rose-800 flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "w-4 h-4 text-rose-600 shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "This action will notify the employee and prompt them to re-upload a compliant copy." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { label: "Rejection reason", value: note, onChange: (e) => setNote(e.target.value), rows: 4, placeholder: "e.g. Document copy is blurry or expired." })
        ] })
      }
    )
  ] });
}
function EmployeeLeaveTab({ employee }) {
  const [balances, setBalances] = reactExports.useState([]);
  const [requests, setRequests] = reactExports.useState([]);
  const [types, setTypes] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    let alive = true;
    setLoading(true);
    void Promise.all([
      leaveApi.listBalances(employee.id),
      leaveApi.listRequests({ employeeId: employee.id }),
      leaveApi.listLeaveTypes()
    ]).then(([b, r, t]) => {
      if (!alive) return;
      setBalances(b.data ?? []);
      setRequests(r.data ?? []);
      setTypes(t.data ?? []);
      setLoading(false);
    });
    return () => {
      alive = false;
    };
  }, [employee.id]);
  const typeName = (id) => types.find((t) => t.id === id)?.name ?? "Leave";
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-[#E5E5E3] bg-white p-12 flex justify-center items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, {}) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-[#E5E5E3] bg-white p-5 shadow-xs space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TreePalm, { className: "w-4 h-4 text-orange-600" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[14px] font-bold text-[#0A0A0A] tracking-tight", children: "Leave Entitlements & Balances" })
      ] }),
      balances.length ? /* @__PURE__ */ jsxRuntimeExports.jsx(LeaveBalanceGrid, { balances }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#8E8E8E] py-2", children: "No leave balances configured yet." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-[#E5E5E3] bg-white shadow-xs overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4 border-b border-[#F2F2F0] flex items-center justify-between bg-[#FAFAF9]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4 text-orange-600" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[14px] font-bold text-[#0A0A0A] tracking-tight", children: "Leave History" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] font-semibold text-[#8E8E8E] uppercase tracking-wider", children: [
          requests.length,
          " request",
          requests.length === 1 ? "" : "s"
        ] })
      ] }),
      requests.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No leave requests", subtitle: "This employee has not applied for leave yet." }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-[#F2F2F0]", children: requests.slice(0, 20).map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "px-5 py-3.5 flex items-center justify-between gap-3 hover:bg-[#FAFAF9] transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 space-y-0.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] font-bold text-[#0A0A0A] truncate", children: typeName(r.leaveTypeId) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#FAFAF9] text-[#404040] border border-[#E5E5E3] tabular-nums", children: [
              r.workingDays,
              " day",
              r.workingDays === 1 ? "" : "s"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[12px] text-[#8E8E8E] font-medium", children: [
            new Date(r.startDate).toLocaleDateString(),
            " → ",
            new Date(r.endDate).toLocaleDateString()
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(LeaveStatusBadge, { status: r.status })
      ] }, r.id)) })
    ] })
  ] });
}
function iso(d) {
  return d.toISOString().slice(0, 10);
}
function EmployeeAttendanceTab({ employee }) {
  const [records, setRecords] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    let alive = true;
    setLoading(true);
    const to = /* @__PURE__ */ new Date();
    const from = /* @__PURE__ */ new Date();
    from.setDate(from.getDate() - 29);
    void attendanceApi.listRecords({ employeeId: employee.id, from: iso(from), to: iso(to) }).then((res) => {
      if (!alive) return;
      setRecords([...res.data ?? []].sort((a, b) => b.date.localeCompare(a.date)));
      setLoading(false);
    });
    return () => {
      alive = false;
    };
  }, [employee.id]);
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-[#E5E5E3] bg-white p-12 flex justify-center items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, {}) });
  }
  const count = (s) => records.filter((r) => r.status === s).length;
  const stats = [
    { label: "Present", value: count("present"), color: "border-l-emerald-500 text-emerald-600" },
    { label: "Late", value: count("late"), color: "border-l-amber-500 text-amber-600" },
    { label: "Absent", value: count("absent"), color: "border-l-rose-500 text-rose-600" },
    { label: "On leave", value: count("on_leave"), color: "border-l-orange-500 text-orange-600" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-orange-500" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[11px] font-semibold uppercase tracking-[0.1em] text-[#8E8E8E]", children: "Attendance Summary (Last 30 Days)" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-4", children: stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-2xl border border-[#E5E5E3] bg-white p-4 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold uppercase tracking-[0.1em] text-[#8E8E8E] mb-1", children: s.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[32px] sm:text-[40px] leading-none font-bold tracking-tight text-[#0A0A0A] tabular-nums", children: s.value }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `mt-3 h-1 w-full rounded-full bg-neutral-100 overflow-hidden`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `h-full ${s.color.includes("emerald") ? "bg-emerald-500" : s.color.includes("amber") ? "bg-amber-500" : s.color.includes("rose") ? "bg-rose-500" : "bg-orange-500"}`,
                style: { width: `${Math.min(100, s.value / (records.length || 1) * 100)}%` }
              }
            ) })
          ]
        },
        s.label
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-[#E5E5E3] bg-white shadow-xs overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4 border-b border-[#F2F2F0] flex items-center justify-between bg-[#FAFAF9]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4 text-orange-600" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[14px] font-bold text-[#0A0A0A] tracking-tight", children: "Recent Attendance Records" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] font-semibold text-[#8E8E8E] uppercase tracking-wider", children: [
          "Showing last ",
          Math.min(15, records.length),
          " entries"
        ] })
      ] }),
      records.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No attendance records", subtitle: "Nothing recorded for this employee in the last 30 days." }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-[#F2F2F0]", children: records.slice(0, 15).map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "px-5 py-3.5 flex items-center justify-between gap-3 hover:bg-[#FAFAF9] transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 rounded-xl bg-[#FAFAF9] border border-[#F2F2F0] text-neutral-600", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4 text-neutral-500" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] font-semibold text-[#0A0A0A]", children: r.date }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[12px] text-[#8E8E8E] font-medium", children: [
              "Clock-in: ",
              r.clockIn ? new Date(r.clockIn).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : "—",
              " · Clock-out: ",
              r.clockOut ? new Date(r.clockOut).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : "—"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AttendanceStatusBadge, { status: r.status })
      ] }, r.id ?? r.date)) })
    ] })
  ] });
}
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function EmployeeCompensationTab({ employee }) {
  const [salary, setSalary] = reactExports.useState(null);
  const [payslips, setPayslips] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    let alive = true;
    setLoading(true);
    void Promise.all([
      payrollApi.getCurrentSalary(employee.id),
      payrollApi.listPayslips(employee.id)
    ]).then(([s, p]) => {
      if (!alive) return;
      setSalary(s.data ?? null);
      setPayslips(p.data ?? []);
      setLoading(false);
    });
    return () => {
      alive = false;
    };
  }, [employee.id]);
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-[#E5E5E3] bg-white p-12 flex justify-center items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, {}) });
  }
  const ctc = salary?.annualCtc ?? employee.ctcAnnual ?? 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-gradient-to-r from-neutral-900 via-neutral-900 to-neutral-800 border border-neutral-800 text-white p-6 sm:p-7 shadow-md relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-24 -right-24 w-64 h-64 rounded-full bg-orange-500/15 blur-3xl pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] font-semibold uppercase tracking-[0.1em] text-orange-400 mb-1.5 flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "w-3.5 h-3.5" }),
            "Annual Compensation Package (CTC)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[36px] sm:text-[48px] leading-none font-extrabold tracking-tight text-white font-sans tabular-nums", children: ctc ? formatCurrency(ctc) : "—" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-neutral-400", children: "/ annum" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-[12px] text-neutral-400", children: [
            "Effective from: ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-medium", children: salary?.effectiveFrom?.slice(0, 10) ?? "Current financial year" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 shrink-0 bg-white/5 p-3 rounded-2xl border border-white/10 backdrop-blur-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase font-bold tracking-wider text-neutral-400", children: "Monthly Gross" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[16px] font-bold text-white tabular-nums", children: ctc ? formatCurrency(ctc / 12) : "—" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase font-bold tracking-wider text-neutral-400", children: "Pay Frequency" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[16px] font-bold text-white", children: "Monthly" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-[#E5E5E3] bg-white p-5 shadow-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-4 h-4 text-orange-600" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[14px] font-bold text-[#0A0A0A] tracking-tight", children: "Disbursement & Tax Details" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 text-[13px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-[#FAFAF9] border border-[#F2F2F0]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold uppercase tracking-[0.1em] text-[#8E8E8E]", children: "Bank Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-bold text-[#0A0A0A] truncate", children: salary?.bankName ?? employee.bankName ?? "—" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-[#FAFAF9] border border-[#F2F2F0]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold uppercase tracking-[0.1em] text-[#8E8E8E]", children: "Account Number" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-bold text-[#0A0A0A] tabular-nums truncate", children: maskAccount(salary?.bankAccountNumber ?? employee.bankAccountNumber) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-[#FAFAF9] border border-[#F2F2F0]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold uppercase tracking-[0.1em] text-[#8E8E8E]", children: "IFSC Code" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-bold text-[#0A0A0A] tabular-nums truncate", children: salary?.bankIfsc ?? employee.bankIfsc ?? "—" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-[#FAFAF9] border border-[#F2F2F0]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold uppercase tracking-[0.1em] text-[#8E8E8E]", children: "PAN Number" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-bold text-[#0A0A0A] tabular-nums truncate", children: salary?.panNumber ?? "—" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-[#E5E5E3] bg-white shadow-xs overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4 border-b border-[#F2F2F0] flex items-center justify-between bg-[#FAFAF9]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Banknote, { className: "w-4 h-4 text-orange-600" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[14px] font-bold text-[#0A0A0A] tracking-tight", children: "Generated Payslips" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] font-semibold text-[#8E8E8E] uppercase tracking-wider", children: [
          payslips.length,
          " payslip",
          payslips.length === 1 ? "" : "s"
        ] })
      ] }),
      payslips.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No payslips yet", subtitle: "Payslips appear here once a payroll run is finalised." }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-[#F2F2F0]", children: payslips.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "px-5 py-3.5 flex items-center justify-between gap-3 hover:bg-[#FAFAF9] transition-colors group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 rounded-xl bg-orange-500/10 text-orange-600 font-bold text-xs uppercase", children: MONTHS[p.month - 1] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[14px] font-bold text-[#0A0A0A]", children: [
              MONTHS[p.month - 1],
              " ",
              p.year,
              " Payslip"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[12px] text-[#8E8E8E]", children: [
              "Gross: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-[#404040] tabular-nums", children: formatCurrency(p.grossEarnings) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] uppercase font-semibold text-[#8E8E8E]", children: "Net Pay" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] font-bold text-emerald-600 tabular-nums", children: formatCurrency(p.netPay) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#FAFAF9] text-[#8E8E8E] border border-[#F2F2F0] group-hover:bg-[#0A0A0A] group-hover:text-white transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-3.5 h-3.5" }) })
        ] })
      ] }, p.id)) })
    ] })
  ] });
}
function EmployeePerformanceTab({ employee }) {
  const [objectives, setObjectives] = reactExports.useState([]);
  const [reviews, setReviews] = reactExports.useState([]);
  const [cycles, setCycles] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    let alive = true;
    setLoading(true);
    void Promise.all([
      performanceApi.listObjectives({ ownerId: employee.id }),
      performanceApi.listReviews({ employeeId: employee.id }),
      performanceApi.listCycles()
    ]).then(([o, r, c]) => {
      if (!alive) return;
      setObjectives(o.data ?? []);
      setReviews(r.data ?? []);
      setCycles(c.data ?? []);
      setLoading(false);
    });
    return () => {
      alive = false;
    };
  }, [employee.id]);
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-[#E5E5E3] bg-white p-12 flex justify-center items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, {}) });
  }
  const cycleName = (id) => cycles.find((c) => c.id === id)?.name ?? "Review cycle";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-[#E5E5E3] bg-white p-5 shadow-xs space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-4 h-4 text-orange-600" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[14px] font-bold text-[#0A0A0A] tracking-tight", children: "Active Objectives & Goals" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] font-semibold text-[#8E8E8E] uppercase tracking-wider", children: [
          objectives.length,
          " goal",
          objectives.length === 1 ? "" : "s"
        ] })
      ] }),
      objectives.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No goals set", subtitle: "This employee has no objectives for the current period." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: objectives.map((o) => {
        const pct = objectiveDisplayProgress(o);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "p-4 rounded-xl border border-[#E5E5E3] bg-[#FAFAF9] hover:bg-white transition-colors flex items-start gap-3.5",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(GoalProgressRing, { value: pct, size: 44 }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] font-bold text-[#0A0A0A] truncate", children: o.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 text-[12px] text-[#8E8E8E]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-neutral-600", children: [
                    o.period,
                    " ",
                    o.year
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    o.keyResults.length,
                    " Key Result",
                    o.keyResults.length === 1 ? "" : "s"
                  ] })
                ] })
              ] })
            ]
          },
          o.id
        );
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-[#E5E5E3] bg-white shadow-xs overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4 border-b border-[#F2F2F0] flex items-center justify-between bg-[#FAFAF9]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-4 h-4 text-orange-600" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[14px] font-bold text-[#0A0A0A] tracking-tight", children: "Performance Reviews" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] font-semibold text-[#8E8E8E] uppercase tracking-wider", children: [
          reviews.length,
          " cycle",
          reviews.length === 1 ? "" : "s"
        ] })
      ] }),
      reviews.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No reviews", subtitle: "Reviews appear once a cycle includes this employee." }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-[#F2F2F0]", children: reviews.map((r) => {
        const rating = r.calibratedRating ?? r.managerReview?.overallRating;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "px-5 py-3.5 flex items-center justify-between gap-3 hover:bg-[#FAFAF9] transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 space-y-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] font-bold text-[#0A0A0A] truncate", children: cycleName(r.cycleId) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-[#8E8E8E] font-medium flex items-center gap-1.5", children: rating ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full text-[11px] font-bold tabular-nums", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3 h-3 text-emerald-600" }),
              "Rating: ",
              rating
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neutral-400", children: "Not rated yet" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ReviewStatusBadge, { status: r.status })
        ] }, r.id);
      }) })
    ] })
  ] });
}
function EmployeeAccessTab({ employee }) {
  const [roles, setRoles] = reactExports.useState([]);
  const [assignment, setAssignment] = reactExports.useState(null);
  const [delegations, setDelegations] = reactExports.useState([]);
  const [employees, setEmployees] = reactExports.useState([]);
  const [editing, setEditing] = reactExports.useState(false);
  const [showPerms, setShowPerms] = reactExports.useState(false);
  const reload = () => {
    void Promise.all([listRoles(), listAssignments(), listDelegations(), listEmployees()]).then(([rl, asg, dl, em]) => {
      if (rl.data) setRoles(rl.data);
      if (asg.data) setAssignment(asg.data.find((a) => a.employeeId === employee.id) ?? null);
      if (dl.data) setDelegations(dl.data);
      if (em.data) setEmployees(em.data);
    });
  };
  reactExports.useEffect(reload, [employee.id]);
  const roleId = assignment?.roleId ?? BUILT_IN_ROLE_IDS.employee;
  const role = roles.find((r) => r.id === roleId) ?? null;
  const empName = (id) => {
    const e = employees.find((x) => x.id === id);
    return e ? `${e.firstName} ${e.lastName}` : id;
  };
  const roleName = (id) => roles.find((r) => r.id === id)?.name ?? "Role";
  const mine = delegations.filter((d) => (d.fromEmployeeId === employee.id || d.toEmployeeId === employee.id) && d.status === "active");
  const effective = getEffectivePermissionsSync(employee.id, employee.role).permissions;
  const onSave = async (newRoleId) => {
    const r = roles.find((x) => x.id === newRoleId);
    await assignRole(employee.id, newRoleId, `${employee.firstName} ${employee.lastName}`, r?.name);
    showToast("Role updated.", "success");
    reload();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "space-y-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] uppercase tracking-wider text-[#6B6B6B] mb-1", children: "Current role" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: role ? /* @__PURE__ */ jsxRuntimeExports.jsx(RoleBadge, { roleName: role.name, roleType: role.type }) : "—" }),
        assignment && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[12px] text-[#6B6B6B] mt-1", children: [
          "Assigned ",
          new Date(assignment.assignedAt).toLocaleDateString()
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PermissionGuard, { permission: "settings.roles.manage", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", size: "sm", onClick: () => setEditing(true), children: "Change role" }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] uppercase tracking-wider text-[#6B6B6B]", children: "Active delegations" }),
      mine.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#6B6B6B]", children: "No active delegations for this employee." }) : mine.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(DelegationCard, { delegation: d, fromName: empName(d.fromEmployeeId), toName: empName(d.toEmployeeId), roleName: roleName(d.roleId), onRevoke: async (id) => {
        await revokeDelegation(id);
        reload();
      } }, d.id))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setShowPerms((v) => !v), className: "text-[13px] text-[var(--tenant-primary)] hover:underline", children: [
        showPerms ? "Hide" : "View",
        " effective permissions (",
        effective.length,
        ")"
      ] }),
      showPerms && /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: effective.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No permissions assigned" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 grid grid-cols-1 md:grid-cols-2 gap-1.5", children: effective.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-[12px] flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#0A0A0A]", children: PERMISSIONS[p.key] }),
        p.scope && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-wider text-[#6B6B6B]", children: p.scope })
      ] }, p.key)) }) })
    ] }),
    editing && /* @__PURE__ */ jsxRuntimeExports.jsx(
      RoleAssignmentRow,
      {
        open: editing,
        onClose: () => setEditing(false),
        employee,
        currentRole: role,
        roles,
        onSave
      }
    )
  ] });
}
function EmployeeProfilePage() {
  const {
    employeeId
  } = useParams({
    from: "/_app/employees/$employeeId"
  });
  const navigate = useNavigate();
  const [employee, setEmployee] = reactExports.useState(null);
  const [departments, setDepartments] = reactExports.useState([]);
  const [designations, setDesignations] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const load = async () => {
    setLoading(true);
    const [r, d, dz] = await Promise.all([getEmployee(employeeId), settingsApi.listDepartments(), settingsApi.listDesignations()]);
    if (r.data) setEmployee(r.data);
    if (d.data) setDepartments(d.data);
    if (dz.data) setDesignations(dz.data);
    setLoading(false);
  };
  reactExports.useEffect(() => {
    void load();
  }, [employeeId]);
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 28 }) });
  }
  if (!employee) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "Employee not found", subtitle: "They may have been removed." });
  }
  const deptName = departments.find((d) => d.id === employee.departmentId)?.name;
  const desigName = designations.find((d) => d.id === employee.designationId)?.name;
  const completeness = computeCompleteness(employee);
  const onTransition = async (next) => {
    const r = await setStatus(employee.id, next);
    if (r.data) {
      setEmployee(r.data);
      showToast(`Status changed to ${next.replace("_", " ")}`, "success");
    }
  };
  const onDocUpdate = async (docId, patch) => {
    const r = await updateDocument(employee.id, docId, patch);
    if (r.data) setEmployee(r.data);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumb, { items: [{
      label: "Employees",
      to: "/employees"
    }, {
      label: `${employee.firstName} ${employee.lastName}`
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProfileHeader, { employee, departmentName: deptName, designationName: desigName, onEdit: () => navigate({
      to: "/employees/$employeeId/edit",
      params: {
        employeeId: employee.id
      }
    }), onTransition }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProfileCompletenessBar, { percentage: completeness.pct, missingFields: completeness.missing }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Tabs, { tabs: [{
      id: "overview",
      label: "Overview",
      content: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[13px] font-semibold text-[#0A0A0A] mb-3", children: "Personal info" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DL, { pairs: [["Personal email", employee.personalEmail], ["Work email", employee.workEmail], ["Phone", employee.phone], ["DOB", employee.dateOfBirth?.slice(0, 10) ?? "—"], ["Gender", employee.gender ?? "—"], ["Blood group", employee.bloodGroup ?? "—"], ["Nationality", employee.nationality ?? "—"]] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[13px] font-semibold text-[#0A0A0A] mt-5 mb-3", children: "Address" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#0A0A0A]", children: employee.currentAddress ? `${employee.currentAddress.line1}, ${employee.currentAddress.city}, ${employee.currentAddress.state} ${employee.currentAddress.pincode}, ${employee.currentAddress.country}` : "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[13px] font-semibold text-[#0A0A0A] mt-5 mb-3", children: "Emergency contact" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#0A0A0A]", children: employee.emergencyContact ? `${employee.emergencyContact.name} (${employee.emergencyContact.relationship}) — ${employee.emergencyContact.phone}` : "—" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[13px] font-semibold text-[#0A0A0A] mb-3", children: "Professional" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DL, { pairs: [["Department", deptName ?? "—"], ["Designation", desigName ?? "—"], ["Grade", employee.grade ?? "—"], ["Employment type", employee.employmentType], ["Joined", employee.dateOfJoining.slice(0, 10)], ["Probation ends", employee.probationEndDate?.slice(0, 10) ?? "—"], ["Work location", employee.workLocation ?? "—"]] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[13px] font-semibold text-[#0A0A0A] mb-3", children: "System" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DL, { pairs: [["Employee code", employee.employeeCode], ["Role", employee.role ?? "—"], ["Added", new Date(employee.createdAt).toLocaleDateString()], ["Updated", new Date(employee.updatedAt).toLocaleDateString()]] })
          ] })
        ] })
      ] })
    }, {
      id: "documents",
      label: "Documents",
      content: /* @__PURE__ */ jsxRuntimeExports.jsx(DocumentVault, { employee, canVerify: true, onUpdateDoc: onDocUpdate })
    }, {
      id: "access",
      label: "Access",
      content: /* @__PURE__ */ jsxRuntimeExports.jsx(EmployeeAccessTab, { employee })
    }, {
      id: "compensation",
      label: "Compensation",
      content: /* @__PURE__ */ jsxRuntimeExports.jsx(EmployeeCompensationTab, { employee })
    }, {
      id: "leave",
      label: "Leave",
      content: /* @__PURE__ */ jsxRuntimeExports.jsx(EmployeeLeaveTab, { employee })
    }, {
      id: "attendance",
      label: "Attendance",
      content: /* @__PURE__ */ jsxRuntimeExports.jsx(EmployeeAttendanceTab, { employee })
    }, {
      id: "performance",
      label: "Performance",
      content: /* @__PURE__ */ jsxRuntimeExports.jsx(EmployeePerformanceTab, { employee })
    }, {
      id: "timeline",
      label: "Activity",
      content: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: employee.timeline.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-[13px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#0A0A0A] font-medium", children: t.actor }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[#6B6B6B]", children: [
          "— ",
          t.message
        ] }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[#9CA3AF]", children: [
          "· ",
          new Date(t.at).toLocaleString()
        ] })
      ] }, t.id)) }) })
    }] })
  ] });
}
function DL({
  pairs
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("dl", { className: "grid grid-cols-2 gap-y-2 text-[13px]", children: pairs.map(([k, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "contents", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-[#6B6B6B]", children: k }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "text-[#0A0A0A]", children: v || "—" })
  ] }, k)) });
}
export {
  EmployeeProfilePage as component
};
