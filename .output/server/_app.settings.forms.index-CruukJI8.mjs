import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { d as useNavigate } from "./_libs/tanstack__react-router.mjs";
import { B as Button } from "./_ssr/Button-Crtgy6Xx.mjs";
import { B as Badge } from "./_ssr/Badge-Cm1DzmgP.mjs";
import { C as Card } from "./_ssr/Card-Dnu0IoXY.mjs";
import { S as Spinner, c as cn } from "./_ssr/router-Arl77cRa.mjs";
import { E as EmptyState } from "./_ssr/EmptyState-DCYWhDnT.mjs";
import { C as ConfirmDialog } from "./_ssr/ConfirmDialog-C1NdmGJ3.mjs";
import { B as Breadcrumb } from "./_ssr/Breadcrumb-eir09VHE.mjs";
import { s as showToast } from "./_ssr/Toast-DlQQlIf6.mjs";
import { P as PermissionGuard } from "./_ssr/PermissionGuard-DHUddp2f.mjs";
import { s as submissionCount, f as formsApi, c as countFields } from "./_ssr/forms-DH39HwWx.mjs";
import { F as FORM_CATEGORY_LABELS } from "./_ssr/formConditions-CF1AFMuj.mjs";

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
import "./_ssr/Modal-BWxmma2i.mjs";
import "./_ssr/usePermission-C7-ELJsH.mjs";
import "./_ssr/rbac-CiXrabhS.mjs";
import "./_ssr/rbac-CHd75bNv.mjs";
import "./_ssr/localStorage-DOek0dff.mjs";
function SectionLabel({ number, label, className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: cn("text-[11px] font-semibold uppercase tracking-[0.08em] text-[#6B6B6B]", className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#0A0A0A]", children: number }),
    " / ",
    label
  ] });
}
const CATEGORY_ORDER = ["candidate_onboarding", "employee_onboarding", "custom"];
const STATUS_BADGE = {
  draft: {
    label: "Draft",
    variant: "default"
  },
  published: {
    label: "Published",
    variant: "success"
  },
  archived: {
    label: "Archived",
    variant: "warning"
  }
};
function FormLibraryCard({
  form,
  onEdit,
  onPreview,
  onSubmissions,
  onDuplicate,
  onDelete
}) {
  const status = STATUS_BADGE[form.status];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "flex flex-col gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[15px] font-semibold text-[#0A0A0A]", children: form.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: status.variant, children: status.label })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-x-4 gap-y-1 text-[12px] text-[#6B6B6B]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "v",
        form.version
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        countFields(form),
        " fields"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        submissionCount(form.id),
        " submissions"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "Updated ",
        new Date(form.updatedAt).toLocaleDateString()
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto flex flex-wrap gap-2 pt-2 border-t border-[#F2F2F0]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "secondary", onClick: onEdit, children: "Edit" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", onClick: onPreview, children: "Preview" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", onClick: onSubmissions, children: "Submissions" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", onClick: onDuplicate, children: "Duplicate" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PermissionGuard, { permission: ["forms.create", "forms.manage_all"], children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", onClick: onDelete, children: form.status === "archived" ? "Archived" : "Archive" }) })
    ] })
  ] });
}
function FormLibraryPage() {
  const navigate = useNavigate();
  const [forms, setForms] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [deleteTarget, setDeleteTarget] = reactExports.useState(null);
  const load = async () => {
    setLoading(true);
    const res = await formsApi.list();
    if (res.data) setForms(res.data);
    setLoading(false);
  };
  reactExports.useEffect(() => {
    void load();
  }, []);
  const createForm = async () => {
    const res = await formsApi.create();
    if (res.error || !res.data) {
      showToast(res.error?.message ?? "Could not create form.", "error");
      return;
    }
    await navigate({
      to: "/settings/forms/$formId",
      params: {
        formId: res.data.id
      }
    });
  };
  const duplicate = async (id) => {
    const res = await formsApi.duplicate(id);
    if (res.error) {
      showToast(res.error.message, "error");
      return;
    }
    showToast("Form duplicated.", "success");
    await load();
  };
  const remove = async () => {
    if (!deleteTarget) return;
    const res = await formsApi.remove(deleteTarget.id);
    if (res.data?.archived) showToast("Form has submissions — archived instead of deleted.", "info");
    else showToast("Form deleted.", "success");
    await load();
  };
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 24 }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumb, { items: [{
      label: "Settings",
      to: "/settings/company"
    }, {
      label: "Forms"
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-[22px] font-semibold text-[#0A0A0A]", children: "Form Library" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#6B6B6B] mt-1", children: "Build and manage onboarding and custom forms." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PermissionGuard, { permission: ["forms.create", "forms.manage_all"], children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: createForm, children: "+ Create form" }) })
    ] }),
    forms.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No forms yet.", subtitle: "Create your first form to start collecting structured information.", action: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: createForm, children: "Create form" }) }) : CATEGORY_ORDER.map((category, i) => {
      const inCategory = forms.filter((f) => f.category === category);
      if (inCategory.length === 0) return null;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { number: String(i + 1).padStart(2, "0"), label: `${FORM_CATEGORY_LABELS[category].toUpperCase()} FORMS` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3", children: inCategory.map((form) => /* @__PURE__ */ jsxRuntimeExports.jsx(FormLibraryCard, { form, onEdit: () => navigate({
          to: "/settings/forms/$formId",
          params: {
            formId: form.id
          }
        }), onPreview: () => navigate({
          to: "/settings/forms/$formId/preview",
          params: {
            formId: form.id
          }
        }), onSubmissions: () => navigate({
          to: "/settings/forms/$formId/submissions",
          params: {
            formId: form.id
          }
        }), onDuplicate: () => duplicate(form.id), onDelete: () => setDeleteTarget(form) }, form.id)) })
      ] }, category);
    }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ConfirmDialog, { open: !!deleteTarget, onOpenChange: (o) => !o && setDeleteTarget(null), title: "Archive or delete this form?", description: deleteTarget && submissionCount(deleteTarget.id) > 0 ? `"${deleteTarget.title}" has submissions and will be archived instead of deleted.` : `Delete "${deleteTarget?.title}"? This cannot be undone.`, confirmLabel: deleteTarget && submissionCount(deleteTarget.id) > 0 ? "Archive" : "Delete", variant: "danger", onConfirm: remove })
  ] });
}
export {
  FormLibraryPage as component
};
