import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { B as Button } from "./_ssr/Button-Crtgy6Xx.mjs";
import { T as Textarea } from "./_ssr/Textarea-DXR3KTuM.mjs";
import { S as Select } from "./_ssr/Select-Bg687n3T.mjs";
import { A as Alert } from "./_ssr/Alert-DIhou9mC.mjs";
import { E as EmptyState } from "./_ssr/EmptyState-DCYWhDnT.mjs";
import { S as SlideOver } from "./_ssr/SlideOver-DXNNm8Us.mjs";
import { s as showToast } from "./_ssr/Toast-DlQQlIf6.mjs";
import { D as DatePicker } from "./_ssr/DatePicker-GAit8DxM.mjs";
import { P as PermissionGuard } from "./_ssr/PermissionGuard-DHUddp2f.mjs";
import { D as DelegationCard } from "./_ssr/DelegationCard-DRF2MdLn.mjs";
import { l as listEmployees } from "./_ssr/router-Arl77cRa.mjs";
import { l as listRoles, b as listDelegations, r as revokeDelegation, f as createDelegation } from "./_ssr/rbac-CHd75bNv.mjs";

import "./_ssr/usePermission-C7-ELJsH.mjs";
import "./_ssr/rbac-CiXrabhS.mjs";
import "./_ssr/Badge-Cm1DzmgP.mjs";
import "./_ssr/Card-Dnu0IoXY.mjs";
import "./_libs/tanstack__query-core.mjs";
import "./_libs/tanstack__react-query.mjs";
import "./_libs/tanstack__react-router.mjs";
import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval.mjs";
import "./_libs/unenv.mjs";


import "./_libs/seroval-plugins.mjs";


import "./_libs/react-dom.mjs";
import "./_libs/isbot.mjs";
import "./_libs/clsx.mjs";
import "./_libs/tailwind-merge.mjs";
import "./_libs/zod.mjs";
const MAX_DAYS = 90;
function DelegationPage() {
  const [employees, setEmployees] = reactExports.useState([]);
  const [roles, setRoles] = reactExports.useState([]);
  const [delegations, setDelegations] = reactExports.useState([]);
  const [open, setOpen] = reactExports.useState(false);
  const [fromId, setFromId] = reactExports.useState("");
  const [toId, setToId] = reactExports.useState("");
  const [roleId, setRoleId] = reactExports.useState("");
  const [start, setStart] = reactExports.useState("");
  const [end, setEnd] = reactExports.useState("");
  const [reason, setReason] = reactExports.useState("");
  const [err, setErr] = reactExports.useState(null);
  const reload = () => {
    void Promise.all([listEmployees(), listRoles(), listDelegations()]).then(([em, rl, dl]) => {
      if (em.data) setEmployees(em.data);
      if (rl.data) setRoles(rl.data);
      if (dl.data) setDelegations(dl.data);
    });
  };
  reactExports.useEffect(reload, []);
  const empName = (id) => {
    const e = employees.find((x) => x.id === id);
    return e ? `${e.firstName} ${e.lastName}` : id;
  };
  const roleName = (id) => roles.find((r) => r.id === id)?.name ?? "Role";
  const active = delegations.filter((d) => d.status === "active");
  const past = delegations.filter((d) => d.status !== "active");
  const submit = async () => {
    setErr(null);
    if (!fromId || !toId || !roleId || !start || !end) {
      setErr("All fields required.");
      return;
    }
    if (fromId === toId) {
      setErr("From and To must be different.");
      return;
    }
    const days = (new Date(end).getTime() - new Date(start).getTime()) / 864e5;
    if (days <= 0) {
      setErr("End date must be after start.");
      return;
    }
    if (days > MAX_DAYS) {
      setErr(`Max delegation is ${MAX_DAYS} days.`);
      return;
    }
    await createDelegation({
      fromEmployeeId: fromId,
      toEmployeeId: toId,
      roleId,
      startDate: new Date(start).toISOString(),
      endDate: new Date(end).toISOString(),
      reason: reason || void 0
    });
    showToast(`Delegation created. ${empName(toId)} has been notified.`, "success");
    setOpen(false);
    setFromId("");
    setToId("");
    setRoleId("");
    setStart("");
    setEnd("");
    setReason("");
    reload();
  };
  const onRevoke = async (id) => {
    await revokeDelegation(id);
    showToast("Delegation revoked.", "success");
    reload();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PermissionGuard, { permission: "settings.roles.manage", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", onClick: () => setOpen(true), children: "New delegation" }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-semibold uppercase tracking-[0.1em] text-[#6B6B6B]", children: "Active delegations" }),
      active.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No active delegations." }) : active.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(DelegationCard, { delegation: d, fromName: empName(d.fromEmployeeId), toName: empName(d.toEmployeeId), roleName: roleName(d.roleId), onRevoke }, d.id))
    ] }),
    past.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-semibold uppercase tracking-[0.1em] text-[#6B6B6B] mb-3", children: "Past delegations" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-md border border-[#E5E5E3] bg-white overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-[#FAFAF8] text-left text-[11px] uppercase text-[#6B6B6B]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2", children: "From" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2", children: "To" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2", children: "Role" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2", children: "Period" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2", children: "Status" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: past.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-[#E5E5E3] text-[13px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2", children: empName(d.fromEmployeeId) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2", children: empName(d.toEmployeeId) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2", children: roleName(d.roleId) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-2 text-[12px]", children: [
            new Date(d.startDate).toLocaleDateString(),
            " – ",
            new Date(d.endDate).toLocaleDateString()
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 capitalize", children: d.status })
        ] }, d.id)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(SlideOver, { open, onClose: () => setOpen(false), title: "New delegation", description: "Temporarily grant a role to another employee.", footer: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: () => setOpen(false), children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", onClick: submit, children: "Create delegation" })
    ] }), children: [
      err && /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { variant: "error", className: "mb-3", children: err }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { label: "Delegate FROM", placeholder: "Choose employee", value: fromId, onChange: (e) => setFromId(e.target.value), options: employees.map((e) => ({
          value: e.id,
          label: `${e.firstName} ${e.lastName}`
        })) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { label: "Delegate TO", placeholder: "Choose employee", value: toId, onChange: (e) => setToId(e.target.value), options: employees.map((e) => ({
          value: e.id,
          label: `${e.firstName} ${e.lastName}`
        })) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { label: "Role to delegate", placeholder: "Choose role", value: roleId, onChange: (e) => setRoleId(e.target.value), options: roles.map((r) => ({
          value: r.id,
          label: r.name
        })) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DatePicker, { label: "Start date", value: start, onChange: setStart }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DatePicker, { label: "End date", value: end, onChange: setEnd })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { label: "Reason (optional)", rows: 2, value: reason, onChange: (e) => setReason(e.target.value.slice(0, 200)), hint: `Max ${MAX_DAYS} days. ${reason.length}/200` })
      ] })
    ] })
  ] });
}
export {
  DelegationPage as component
};
