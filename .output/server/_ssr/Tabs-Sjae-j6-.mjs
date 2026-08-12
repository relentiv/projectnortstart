import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as cn } from "./router-Arl77cRa.mjs";
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
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        role: "tablist",
        "aria-label": "Tabs",
        className: "flex items-center gap-1 sm:gap-2 border-b border-[#E5E5E3] overflow-x-auto no-scrollbar scroll-smooth w-full flex-nowrap pb-px",
        children: tabs.map((t, i) => {
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
                "relative px-3.5 py-2.5 sm:px-4 sm:py-3 text-[13px] sm:text-[14px] font-bold tracking-tight rounded-t-xl transition-all duration-150 outline-none whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer",
                selected ? "text-[#0A0A0A] bg-[#FAFAF9]" : "text-[#6B6B6B] hover:text-[#0A0A0A] hover:bg-[#FAFAF9]/60"
              ),
              children: [
                t.label,
                typeof t.badge === "number" && t.badge > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: cn(
                      "ml-1 inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold tabular-nums",
                      selected ? "bg-[#0A0A0A] text-white" : "bg-[#E5E5E3] text-[#6B6B6B]"
                    ),
                    children: t.badge
                  }
                ),
                selected && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "absolute inset-x-0 -bottom-px h-0.5 bg-[#0A0A0A] rounded-full",
                    "aria-hidden": true
                  }
                )
              ]
            },
            t.id
          );
        })
      }
    ),
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
