import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as cn } from "./router-CPP24NZe.mjs";
function Tabs({ tabs, defaultTab, activeTab, onTabChange, className }) {
  const [internal, setInternal] = reactExports.useState(defaultTab ?? tabs[0]?.id);
  const active = activeTab ?? internal;
  const setActive = (id2) => {
    setInternal(id2);
    onTabChange?.(id2);
  };
  const id = reactExports.useId();
  const refs = reactExports.useRef({});
  const onKey = (e, idx) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft" && e.key !== "Home" && e.key !== "End") return;
    e.preventDefault();
    const next = e.key === "ArrowRight" ? (idx + 1) % tabs.length : e.key === "ArrowLeft" ? (idx - 1 + tabs.length) % tabs.length : e.key === "Home" ? 0 : tabs.length - 1;
    const target = tabs[next];
    setActive(target.id);
    refs.current[target.id]?.focus();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { role: "tablist", "aria-label": "Tabs", className: "flex gap-6 border-b border-[#E5E5E3]", children: tabs.map((t, i) => {
      const selected = t.id === active;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          ref: (el) => {
            refs.current[t.id] = el;
          },
          role: "tab",
          type: "button",
          id: `${id}-trigger-${t.id}`,
          "aria-controls": `${id}-panel-${t.id}`,
          "aria-selected": selected,
          tabIndex: selected ? 0 : -1,
          onClick: () => setActive(t.id),
          onKeyDown: (e) => onKey(e, i),
          className: cn(
            "relative py-3 text-[14px] font-medium transition-colors duration-150 outline-none",
            "focus-visible:text-[var(--tenant-primary)]",
            selected ? "text-[var(--tenant-primary)]" : "text-[#6B6B6B] hover:text-[#0A0A0A]"
          ),
          children: [
            t.label,
            typeof t.badge === "number" && t.badge > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1.5 inline-flex items-center rounded-full bg-[#F2F2F0] px-1.5 py-0.5 text-[11px] font-semibold text-[#6B6B6B]", children: t.badge }),
            selected && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-x-0 -bottom-px h-0.5", style: { background: "var(--tenant-primary)" }, "aria-hidden": true })
          ]
        },
        t.id
      );
    }) }),
    tabs.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        role: "tabpanel",
        id: `${id}-panel-${t.id}`,
        "aria-labelledby": `${id}-trigger-${t.id}`,
        hidden: t.id !== active,
        className: "pt-6",
        children: t.id === active && t.content
      },
      t.id
    ))
  ] });
}
export {
  Tabs as T
};
