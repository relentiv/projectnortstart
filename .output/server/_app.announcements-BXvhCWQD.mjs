import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { P as PageHeader } from "./_ssr/PageHeader-CpfbD_86.mjs";
import { e as essApi, S as Spinner, c as cn } from "./_ssr/router-CPP24NZe.mjs";
import { E as EmptyState } from "./_ssr/EmptyState-Cs_2WXRJ.mjs";
import { s as showToast } from "./_ssr/Toast-DgpI28ao.mjs";
import { S as SearchInput } from "./_ssr/SearchInput-BMSvxbwE.mjs";
import { A as AnnouncementCard } from "./_ssr/AnnouncementCard-Cm1pauym.mjs";
import { A as ANNOUNCEMENT_CATEGORY_LABELS } from "./_ssr/ess-DxDpqIfW.mjs";

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
import "./_ssr/Button-CFBbQAsZ.mjs";
import "./_ssr/Badge-DOnZHL7Z.mjs";
import "./_ssr/Card-AgXmnnkq.mjs";
const CATEGORIES = ["all", "general", "policy", "event", "celebration", "urgent"];
function AnnouncementsPage() {
  const [items, setItems] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [category, setCategory] = reactExports.useState("all");
  const [q, setQ] = reactExports.useState("");
  reactExports.useEffect(() => {
    void essApi.listAnnouncements().then((r) => {
      setItems(r.data ?? []);
      setLoading(false);
    });
  }, []);
  const shown = reactExports.useMemo(() => {
    const term = q.trim().toLowerCase();
    return items.filter((a) => (category === "all" || a.category === category) && (term === "" || a.title.toLowerCase().includes(term) || a.body.toLowerCase().includes(term)));
  }, [items, category, q]);
  const acknowledge = async (id) => {
    const res = await essApi.acknowledgeAnnouncement(id);
    if (res.data) {
      setItems(res.data.slice().sort((a, b) => Number(b.pinned) - Number(a.pinned) || b.publishedAt.localeCompare(a.publishedAt)));
      showToast("Acknowledged. Thanks!", "success");
    }
  };
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 28 }) });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Announcements", description: "News, policy changes and events from across the company." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SearchInput, { value: q, onChange: setQ, placeholder: "Search announcements…", className: "w-full sm:w-80" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: CATEGORIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setCategory(c), className: cn("rounded-full border px-3 py-1.5 text-[12px] font-medium transition-colors", category === c ? "border-transparent text-white" : "border-[#E5E5E3] text-[#3F3F46] hover:bg-[#FAFAF8]"), style: category === c ? {
        background: "var(--tenant-primary)"
      } : void 0, children: c === "all" ? "All" : ANNOUNCEMENT_CATEGORY_LABELS[c] }, c)) })
    ] }),
    shown.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No announcements", subtitle: "Nothing matches your search or filter." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4 max-w-3xl", children: shown.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx(AnnouncementCard, { announcement: a, onAcknowledge: () => void acknowledge(a.id) }, a.id)) })
  ] });
}
export {
  AnnouncementsPage as component
};
