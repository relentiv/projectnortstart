import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { d as useNavigate } from "./_libs/tanstack__react-router.mjs";
import { P as PageHeader } from "./_ssr/PageHeader-CpfbD_86.mjs";
import { B as Button } from "./_ssr/Button-CFBbQAsZ.mjs";
import { E as EmptyState } from "./_ssr/EmptyState-Cs_2WXRJ.mjs";
import { s as showToast } from "./_ssr/Toast-DgpI28ao.mjs";
import { P as PermissionGuard } from "./_ssr/PermissionGuard-DrHCZdH7.mjs";
import { P as PayrollRunCard } from "./_ssr/PayrollRunCard-BnEg24Cy.mjs";
import { T as Textarea } from "./_ssr/Textarea-DsONP0BR.mjs";
import { S as Select } from "./_ssr/Select-CDtKs7RG.mjs";
import { S as SlideOver } from "./_ssr/SlideOver-COdJD426.mjs";
import { p as payrollApi, a7 as monthOptions } from "./_ssr/router-CPP24NZe.mjs";
import { a as authStore } from "./_ssr/auth-BAvMo5G5.mjs";

import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval.mjs";
import "./_libs/unenv.mjs";


import "./_libs/seroval-plugins.mjs";


import "./_libs/react-dom.mjs";
import "./_libs/isbot.mjs";
import "./_ssr/usePermission-DoLX-EvC.mjs";
import "./_ssr/rbac-BwLVdIYU.mjs";
import "./_ssr/rbac-Ci1w5KuA.mjs";
import "./_ssr/Card-AgXmnnkq.mjs";
import "./_ssr/PayrollRunStatusBadge-DuWm_Pgf.mjs";
import "./_ssr/Badge-DOnZHL7Z.mjs";
import "./_libs/tanstack__query-core.mjs";
import "./_libs/tanstack__react-query.mjs";
import "./_libs/clsx.mjs";
import "./_libs/tailwind-merge.mjs";
import "./_libs/zod.mjs";
function CreateRunModal({ open, onClose, onCreate }) {
  const options = monthOptions(12);
  const [value, setValue] = reactExports.useState(options[0]?.value ?? "");
  const [notes, setNotes] = reactExports.useState("");
  const [saving, setSaving] = reactExports.useState(false);
  const [error, setError] = reactExports.useState();
  reactExports.useEffect(() => {
    if (open) {
      setValue(options[0]?.value ?? "");
      setNotes("");
      setError(void 0);
    }
  }, [open]);
  const submit = async () => {
    if (!value) return;
    const [year, month] = value.split("-").map(Number);
    setSaving(true);
    setError(void 0);
    try {
      await onCreate({ month, year, notes: notes.trim() || void 0 });
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not create payroll run.");
    } finally {
      setSaving(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    SlideOver,
    {
      open,
      onClose,
      width: "sm",
      title: "Create payroll run",
      description: "Pick the month you want to run payroll for. All active employees will be included.",
      footer: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: onClose, disabled: saving, children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", onClick: submit, loading: saving, children: "Create run" })
      ] }),
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#DC2626]", children: error }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { label: "Month", value, onChange: (e) => setValue(e.target.value), options }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { label: "Notes (optional)", rows: 3, value: notes, onChange: (e) => setNotes(e.target.value) })
      ] })
    }
  );
}
function PayrollRunsPage() {
  const navigate = useNavigate();
  const user = authStore.useSelector((s) => s.user);
  const [loading, setLoading] = reactExports.useState(true);
  const [runs, setRuns] = reactExports.useState([]);
  const [createOpen, setCreateOpen] = reactExports.useState(false);
  const reload = () => {
    setLoading(true);
    void payrollApi.listRuns().then((r) => {
      setRuns(r.data ?? []);
      setLoading(false);
    });
  };
  reactExports.useEffect(reload, []);
  const create = async (input) => {
    const res = await payrollApi.createRun({
      ...input,
      initiatedBy: user?.fullName ?? "You"
    });
    if (res.error) throw new Error(res.error.message);
    showToast("Payroll run created.", "success");
    setCreateOpen(false);
    reload();
    if (res.data) navigate({
      to: "/payroll/runs/$runId",
      params: {
        runId: res.data.id
      }
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Payroll runs", description: "Every payroll run, from draft to paid.", actions: /* @__PURE__ */ jsxRuntimeExports.jsx(PermissionGuard, { permission: "payroll.run", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", onClick: () => setCreateOpen(true), children: "Create new run" }) }) }),
    loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [0, 1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[96px] rounded-md border border-[#E5E5E3] bg-white animate-pulse" }, i)) }) : runs.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No payroll runs yet", subtitle: "Create a payroll run for the current month to get started.", action: /* @__PURE__ */ jsxRuntimeExports.jsx(PermissionGuard, { permission: "payroll.run", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", onClick: () => setCreateOpen(true), children: "Create new run" }) }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: runs.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(PayrollRunCard, { run: r }, r.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CreateRunModal, { open: createOpen, onClose: () => setCreateOpen(false), onCreate: create })
  ] });
}
export {
  PayrollRunsPage as component
};
