import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { d as useNavigate } from "./_libs/tanstack__react-router.mjs";
import { P as PageHeader } from "./_ssr/PageHeader-CpfbD_86.mjs";
import { B as Button } from "./_ssr/Button-Crtgy6Xx.mjs";
import { I as Input } from "./_ssr/Input-CHeJoRlX.mjs";
import { T as Textarea } from "./_ssr/Textarea-DXR3KTuM.mjs";
import { S as Select } from "./_ssr/Select-Bg687n3T.mjs";
import { C as Card } from "./_ssr/Card-Dnu0IoXY.mjs";
import { A as Alert } from "./_ssr/Alert-DIhou9mC.mjs";
import { s as showToast } from "./_ssr/Toast-DlQQlIf6.mjs";
import { F as FileUpload } from "./_ssr/FileUpload-GznQ7qkH.mjs";
import { D as DatePicker } from "./_ssr/DatePicker-GAit8DxM.mjs";
import { C as CurrencyInput } from "./_ssr/CurrencyInput-iJIPpSaU.mjs";
import { e as essApi } from "./_ssr/router-Arl77cRa.mjs";
import { a as authStore } from "./_ssr/auth-CjdYhZTR.mjs";
import { u as useCurrentEmployee } from "./_ssr/useCurrentEmployee-BAch-pa0.mjs";
import { c as EXPENSE_CATEGORY_LABELS } from "./_ssr/ess-DxDpqIfW.mjs";

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
import "./_ssr/rbac-CiXrabhS.mjs";
import "./_ssr/rbac-CHd75bNv.mjs";
function NewExpensePage() {
  const navigate = useNavigate();
  const user = authStore.useSelector((s) => s.user);
  const {
    employee
  } = useCurrentEmployee();
  const [title, setTitle] = reactExports.useState("");
  const [category, setCategory] = reactExports.useState("travel");
  const [amount, setAmount] = reactExports.useState(null);
  const [spentOn, setSpentOn] = reactExports.useState("");
  const [description, setDescription] = reactExports.useState("");
  const [file, setFile] = reactExports.useState(null);
  const [error, setError] = reactExports.useState(null);
  const [busy, setBusy] = reactExports.useState(false);
  const save = async (submit) => {
    setBusy(true);
    setError(null);
    const res = await essApi.createExpense({
      title,
      category,
      amount,
      spentOn,
      description,
      receiptName: file?.name,
      employeeId: employee?.id ?? "",
      employeeName: user?.fullName ?? "You",
      submit
    });
    setBusy(false);
    if (res.error) return setError(res.error.message);
    showToast(submit ? `Claim ${res.data?.code} submitted.` : "Draft saved.", "success");
    navigate({
      to: "/expenses"
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 max-w-2xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "New expense claim", description: "Attach a receipt so approvals move faster." }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { variant: "error", title: "Could not save", children: error }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Title", value: title, onChange: (e) => setTitle(e.target.value), placeholder: "e.g. Client visit — cab fare" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { label: "Category", value: category, onChange: (e) => setCategory(e.target.value), options: Object.keys(EXPENSE_CATEGORY_LABELS).map((c) => ({
        value: c,
        label: EXPENSE_CATEGORY_LABELS[c]
      })) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CurrencyInput, { label: "Amount", value: amount, onChange: setAmount }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DatePicker, { label: "Spent on", value: spentOn, onChange: setSpentOn, maxDate: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { label: "Notes (optional)", rows: 4, value: description, onChange: (e) => setDescription(e.target.value) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FileUpload, { label: "Receipt (optional)", currentFile: file, onFileSelect: (f) => setFile({
        name: f.name,
        sizeKB: Math.round(f.size / 1024)
      }), onFileRemove: () => setFile(null) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 pt-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", loading: busy, onClick: () => void save(true), children: "Submit claim" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: () => void save(false), children: "Save as draft" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", onClick: () => navigate({
          to: "/expenses"
        }), children: "Cancel" })
      ] })
    ] })
  ] });
}
export {
  NewExpensePage as component
};
