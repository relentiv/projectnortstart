import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { d as useNavigate } from "./_libs/tanstack__react-router.mjs";
import { P as PageHeader } from "./_ssr/PageHeader-CpfbD_86.mjs";
import { B as Button } from "./_ssr/Button-B92Yl16p.mjs";
import { I as Input } from "./_ssr/Input-DkwuDyVZ.mjs";
import { T as Textarea } from "./_ssr/Textarea-DmSlcYuH.mjs";
import { S as Select } from "./_ssr/Select-CT_4ow88.mjs";
import { C as Card } from "./_ssr/Card-C9YFlUub.mjs";
import { A as Alert } from "./_ssr/Alert-DctqS4QO.mjs";
import { s as showToast } from "./_ssr/Toast-n7pN7q8Q.mjs";
import { F as FileUpload } from "./_ssr/FileUpload-Kqoemt1c.mjs";
import { R as RadioGroup } from "./_ssr/RadioGroup-DGseX15k.mjs";
import { e as essApi } from "./_ssr/router-LFebWAoY.mjs";
import { a as authStore } from "./_ssr/auth-Dq95Bc2W.mjs";
import { u as useCurrentEmployee } from "./_ssr/useCurrentEmployee-9Y57ts2r.mjs";
import { a as TICKET_CATEGORY_LABELS, b as TICKET_PRIORITY_LABELS } from "./_ssr/ess-DxDpqIfW.mjs";

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
import "./_ssr/rbac-B_cCMzV8.mjs";
import "./_ssr/rbac-B1d7raBj.mjs";
function NewTicketPage() {
  const navigate = useNavigate();
  const user = authStore.useSelector((s) => s.user);
  const {
    employee
  } = useCurrentEmployee();
  const [subject, setSubject] = reactExports.useState("");
  const [description, setDescription] = reactExports.useState("");
  const [category, setCategory] = reactExports.useState("it");
  const [priority, setPriority] = reactExports.useState("medium");
  const [file, setFile] = reactExports.useState(null);
  const [error, setError] = reactExports.useState(null);
  const [busy, setBusy] = reactExports.useState(false);
  const submit = async () => {
    setBusy(true);
    setError(null);
    const res = await essApi.createTicket({
      subject,
      description,
      category,
      priority,
      raisedByEmployeeId: employee?.id ?? "",
      raisedByName: user?.fullName ?? "You",
      attachmentName: file?.name
    });
    setBusy(false);
    if (res.error) return setError(res.error.message);
    showToast(`Ticket ${res.data?.code} created.`, "success");
    navigate({
      to: "/helpdesk"
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 max-w-2xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Raise a ticket", description: "Tell us what you need and we'll route it to the right team." }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { variant: "error", title: "Could not submit", children: error }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Subject", value: subject, onChange: (e) => setSubject(e.target.value), placeholder: "Short summary of the issue" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { label: "Category", value: category, onChange: (e) => setCategory(e.target.value), options: Object.keys(TICKET_CATEGORY_LABELS).map((c) => ({
        value: c,
        label: TICKET_CATEGORY_LABELS[c]
      })) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium mb-2", children: "Priority" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroup, { orientation: "horizontal", value: priority, onChange: (v) => setPriority(v), options: Object.keys(TICKET_PRIORITY_LABELS).map((p) => ({
          value: p,
          label: TICKET_PRIORITY_LABELS[p]
        })) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { label: "Description", rows: 5, value: description, onChange: (e) => setDescription(e.target.value), hint: "Include steps, dates and anything the team needs to reproduce or verify." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FileUpload, { label: "Attachment (optional)", currentFile: file, onFileSelect: (f) => setFile({
        name: f.name,
        sizeKB: Math.round(f.size / 1024)
      }), onFileRemove: () => setFile(null) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", loading: busy, onClick: () => void submit(), children: "Submit ticket" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", onClick: () => navigate({
          to: "/helpdesk"
        }), children: "Cancel" })
      ] })
    ] })
  ] });
}
export {
  NewTicketPage as component
};
