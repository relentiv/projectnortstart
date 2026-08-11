import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { f as useParams, d as useNavigate } from "./_libs/tanstack__react-router.mjs";
import { C as Card } from "./_ssr/Card-C9YFlUub.mjs";
import { S as Spinner, Z as computeCompleteness, _ as getEmployee, s as settingsApi, $ as setStatus, c as cn, a0 as updateDocument, p as payrollApi, j as formatCurrency, Y as maskAccount, i as leaveApi, a as attendanceApi, y as performanceApi, z as objectiveDisplayProgress, l as listEmployees } from "./_ssr/router-LFebWAoY.mjs";
import { E as EmptyState } from "./_ssr/EmptyState-C_t8YrDr.mjs";
import { T as Tabs } from "./_ssr/Tabs-kBWeCyR5.mjs";
import { B as Breadcrumb } from "./_ssr/Breadcrumb-BAW4dGjH.mjs";
import { s as showToast } from "./_ssr/Toast-n7pN7q8Q.mjs";
import { P as ProgressBar } from "./_ssr/ProgressBar-wYNX7x5K.mjs";
import { B as Button } from "./_ssr/Button-B92Yl16p.mjs";
import { E as EmployeeAvatar } from "./_ssr/EmployeeAvatar-C6yRCmSB.mjs";
import { E as EmployeeStatusBadge } from "./_ssr/EmployeeStatusBadge-0v7L__QJ.mjs";
import { F as FileUpload } from "./_ssr/FileUpload-Kqoemt1c.mjs";
import { B as Badge } from "./_ssr/Badge-BQrIKnVV.mjs";
import { S as SlideOver } from "./_ssr/SlideOver-DGRd3Ojy.mjs";
import { T as Textarea } from "./_ssr/Textarea-DmSlcYuH.mjs";
import { L as LeaveBalanceGrid } from "./_ssr/LeaveBalanceGrid-Dq7ZncoQ.mjs";
import { L as LeaveStatusBadge } from "./_ssr/LeaveStatusBadge-D8rrrJ3p.mjs";
import { A as AttendanceStatusBadge } from "./_ssr/AttendanceStatusBadge-CAFJA9p8.mjs";
import { G as GoalProgressRing } from "./_ssr/GoalProgressRing-CMq4AJ3m.mjs";
import { R as ReviewStatusBadge } from "./_ssr/ReviewStatusBadge-DcekrMOn.mjs";
import { R as RoleBadge } from "./_ssr/RoleBadge-BEg-SbCS.mjs";
import { R as RoleAssignmentRow } from "./_ssr/RoleAssignmentRow-DzUJJhjf.mjs";
import { P as PermissionGuard } from "./_ssr/PermissionGuard-CtwjQNn8.mjs";
import { D as DelegationCard } from "./_ssr/DelegationCard-ChfkTylj.mjs";
import { B as BUILT_IN_ROLE_IDS, g as getEffectivePermissionsSync, r as revokeDelegation, P as PERMISSIONS, l as listRoles, a as listAssignments, b as listDelegations, c as assignRole } from "./_ssr/rbac-B1d7raBj.mjs";

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
import "./_ssr/LeaveBalanceCard-j6CT0g6w.mjs";
import "./_ssr/leave-Cc9GP3pR.mjs";
import "./_ssr/attendance-DW5Ch_bj.mjs";
import "./_ssr/performance-Bre1KeEI.mjs";
import "./_ssr/Select-CT_4ow88.mjs";
import "./_ssr/usePermission-5FQzLb5G.mjs";
import "./_ssr/rbac-B_cCMzV8.mjs";
function ProfileCompletenessBar({ percentage, missingFields, className }) {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("relative", className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => setOpen((o) => !o),
        onMouseEnter: () => setOpen(true),
        onMouseLeave: () => setOpen(false),
        className: "w-full text-left",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProgressBar, { value: percentage, label: `Profile ${percentage}% complete` })
      }
    ),
    open && missingFields.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute z-10 mt-2 w-80 rounded-md border border-[#E5E5E3] bg-white shadow-md p-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold uppercase tracking-[0.1em] text-[#6B6B6B] mb-2", children: "Missing" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1 text-[13px] text-[#0A0A0A]", children: missingFields.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        "• ",
        f
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
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => setOpen((o) => !o),
        "aria-haspopup": "menu",
        "aria-expanded": open,
        className: "h-9 w-9 inline-flex items-center justify-center rounded-md border border-[#E5E5E3] bg-white hover:bg-[#F2F2F0]",
        children: "⋯"
      }
    ),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { role: "menu", className: "absolute right-0 mt-1 w-56 rounded-md border border-[#E5E5E3] bg-white shadow-md z-20", children: actions.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        role: "menuitem",
        onClick: () => {
          setOpen(false);
          onTransition(a.to);
        },
        className: "block w-full text-left px-3 py-2 text-[13px] hover:bg-[#FAFAF8] " + (a.danger ? "text-[#DC2626]" : "text-[#0A0A0A]"),
        children: a.label
      },
      a.label
    )) })
  ] });
}
function ProfileHeader({ employee, departmentName, designationName, onEdit, onTransition }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-md border border-[#E5E5E3] bg-white p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(EmployeeAvatar, { employee, size: "xl", showStatus: true, status: employee.employmentStatus }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-[24px] font-bold text-[#0A0A0A] truncate", children: [
          employee.firstName,
          " ",
          employee.lastName
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-[14px] text-[#6B6B6B]", children: [
          designationName ?? "—",
          " · ",
          departmentName ?? "—"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center gap-2 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-semibold uppercase tracking-[0.08em] text-[#6B6B6B] bg-[#F2F2F0] px-2 py-0.5 rounded-sm", children: employee.employeeCode }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(EmployeeStatusBadge, { status: employee.employmentStatus })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: onEdit, children: "Edit profile" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatusTransitionMenu, { status: employee.employmentStatus, onTransition })
    ] })
  ] }) });
}
const statusBadge = {
  pending: { label: "Pending", variant: "default" },
  uploaded: { label: "Uploaded", variant: "tenant-accent" },
  verified: { label: "Verified", variant: "success" },
  rejected: { label: "Rejected", variant: "danger" }
};
function DocumentItem({ doc, canVerify, onUpload, onVerify, onReject }) {
  const s = statusBadge[doc.status];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-[#E5E5E3] bg-white p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-[14px] text-[#0A0A0A]", children: doc.label }),
        doc.uploadedAt && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[12px] text-[#6B6B6B]", children: [
          "Uploaded ",
          new Date(doc.uploadedAt).toLocaleDateString()
        ] }),
        doc.rejectedNote && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-[12px] text-[#92400E] bg-[#FEF3C7] rounded-sm px-2 py-1", children: [
          "Reason: ",
          doc.rejectedNote
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: s.variant, children: s.label })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3", children: doc.status === "verified" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[12px] text-[#6B6B6B]", children: [
      doc.fileName ?? "Verified document",
      " — cannot be replaced."
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      FileUpload,
      {
        onFileSelect: onUpload,
        currentFile: doc.fileName ? { name: doc.fileName, sizeKB: 120 } : null,
        onFileRemove: () => {
        }
      }
    ) }),
    canVerify && doc.status === "uploaded" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: onVerify, className: "text-[12px] text-[#166534] hover:underline", children: "Mark as verified" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: onReject, className: "text-[12px] text-[#DC2626] hover:underline", children: "Reject" })
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
    employee.documents.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(
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
    )),
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
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { label: "Rejection reason", value: note, onChange: (e) => setNote(e.target.value), rows: 4 })
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
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "flex justify-center py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, {}) });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[13px] font-semibold text-[#0A0A0A] mb-3", children: "Balances" }),
      balances.length ? /* @__PURE__ */ jsxRuntimeExports.jsx(LeaveBalanceGrid, { balances }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#6B6B6B]", children: "No balances configured yet." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[13px] font-semibold text-[#0A0A0A] mb-3", children: "Leave history" }),
      requests.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No leave requests", subtitle: "This employee has not applied for leave yet." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-[#E5E5E3]", children: requests.slice(0, 20).map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "py-2.5 flex items-center justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#0A0A0A] truncate", children: typeName(r.leaveTypeId) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[12px] text-[#6B6B6B]", children: [
            new Date(r.startDate).toLocaleDateString(),
            " → ",
            new Date(r.endDate).toLocaleDateString(),
            " · ",
            r.workingDays,
            " day",
            r.workingDays === 1 ? "" : "s"
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
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "flex justify-center py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, {}) });
  const count = (s) => records.filter((r) => r.status === s).length;
  const stats = [
    ["Present", count("present")],
    ["Late", count("late")],
    ["Absent", count("absent")],
    ["On leave", count("on_leave")]
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[13px] font-semibold text-[#0A0A0A] mb-3", children: "Last 30 days" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3", children: stats.map(([label, value]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-sm border border-[#E5E5E3] p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] uppercase tracking-wider text-[#6B6B6B]", children: label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[20px] font-semibold text-[#0A0A0A]", children: value })
      ] }, label)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[13px] font-semibold text-[#0A0A0A] mb-3", children: "Recent records" }),
      records.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No attendance records", subtitle: "Nothing recorded for this employee in the last 30 days." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-[#E5E5E3]", children: records.slice(0, 15).map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "py-2.5 flex items-center justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#0A0A0A]", children: r.date }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[12px] text-[#6B6B6B]", children: [
            "In ",
            r.clockIn ? new Date(r.clockIn).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : "—",
            " ·",
            " ",
            "Out ",
            r.clockOut ? new Date(r.clockOut).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : "—"
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
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "flex justify-center py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, {}) });
  const ctc = salary?.annualCtc ?? employee.ctcAnnual ?? 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[13px] font-semibold text-[#0A0A0A] mb-3", children: "Compensation" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "grid grid-cols-2 gap-y-2 text-[13px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-[#6B6B6B]", children: "Annual CTC" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "text-[#0A0A0A]", children: ctc ? formatCurrency(ctc) : "—" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-[#6B6B6B]", children: "Effective from" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "text-[#0A0A0A]", children: salary?.effectiveFrom?.slice(0, 10) ?? "—" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-[#6B6B6B]", children: "Bank" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "text-[#0A0A0A]", children: salary?.bankName ?? employee.bankName ?? "—" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-[#6B6B6B]", children: "Account" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "text-[#0A0A0A]", children: maskAccount(salary?.bankAccountNumber ?? employee.bankAccountNumber) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-[#6B6B6B]", children: "IFSC" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "text-[#0A0A0A]", children: salary?.bankIfsc ?? employee.bankIfsc ?? "—" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-[#6B6B6B]", children: "PAN" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "text-[#0A0A0A]", children: salary?.panNumber ?? "—" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[13px] font-semibold text-[#0A0A0A] mb-3", children: "Payslips" }),
      payslips.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No payslips yet", subtitle: "Payslips appear here once a payroll run is finalised." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-[#E5E5E3]", children: payslips.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "py-2.5 flex items-center justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[13px] text-[#0A0A0A]", children: [
          MONTHS[p.month - 1],
          " ",
          p.year
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[13px] text-[#6B6B6B]", children: [
          "Gross ",
          formatCurrency(p.grossEarnings),
          " · Net",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#0A0A0A] font-medium", children: formatCurrency(p.netPay) })
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
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "flex justify-center py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, {}) });
  const cycleName = (id) => cycles.find((c) => c.id === id)?.name ?? "Review cycle";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[13px] font-semibold text-[#0A0A0A] mb-3", children: "Goals" }),
      objectives.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No goals set", subtitle: "This employee has no objectives for the current period." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: objectives.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(GoalProgressRing, { value: objectiveDisplayProgress(o), size: 40 }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#0A0A0A] truncate", children: o.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[12px] text-[#6B6B6B]", children: [
            o.period,
            " ",
            o.year,
            " · ",
            o.keyResults.length,
            " key result",
            o.keyResults.length === 1 ? "" : "s"
          ] })
        ] })
      ] }, o.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[13px] font-semibold text-[#0A0A0A] mb-3", children: "Review history" }),
      reviews.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No reviews", subtitle: "Reviews appear once a cycle includes this employee." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-[#E5E5E3]", children: reviews.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "py-2.5 flex items-center justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#0A0A0A] truncate", children: cycleName(r.cycleId) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-[#6B6B6B]", children: r.calibratedRating ?? r.managerReview?.overallRating ? `Rating ${r.calibratedRating ?? r.managerReview?.overallRating}` : "Not rated yet" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ReviewStatusBadge, { status: r.status })
      ] }, r.id)) })
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
