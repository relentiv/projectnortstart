import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { B as Button } from "./Button-CFBbQAsZ.mjs";
import { B as Badge } from "./Badge-DOnZHL7Z.mjs";
import { C as Card } from "./Card-AgXmnnkq.mjs";
import { G as GoalProgressRing } from "./GoalProgressRing-C5SFRSti.mjs";
import { G as GoalStatusBadge } from "./GoalStatusBadge-pT1aYIzn.mjs";
import { I as Input } from "./Input-BJe__i93.mjs";
import { a as GOAL_PERIOD_LABELS } from "./performance-Bre1KeEI.mjs";
function KeyResultRow({ kr, editable, onUpdate }) {
  const [editing, setEditing] = reactExports.useState(false);
  const [value, setValue] = reactExports.useState(String(kr.currentValue));
  const [saving, setSaving] = reactExports.useState(false);
  const pct = Math.round(kr.progress);
  const save = async () => {
    const num = Number(value);
    if (Number.isNaN(num)) return;
    setSaving(true);
    try {
      await onUpdate?.(num);
      setEditing(false);
    } finally {
      setSaving(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 py-2.5 border-t border-[#E5E5E3] first:border-t-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#0A0A0A] truncate", children: kr.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1.5 h-1 rounded-full bg-[#E5E5E3] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "h-full rounded-full",
          style: { width: `${Math.min(100, pct)}%`, background: pct >= 100 ? "#16A34A" : "var(--tenant-primary)" }
        }
      ) })
    ] }),
    editing ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value, onChange: (e) => setValue(e.target.value), className: "w-24", "aria-label": "Current value" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "primary", loading: saving, onClick: () => void save(), children: "Save" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", onClick: () => setEditing(false), children: "Cancel" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[12px] tabular-nums text-[#6B6B6B] whitespace-nowrap", children: [
        kr.currentValue,
        " / ",
        kr.targetValue,
        " ",
        kr.unit
      ] }),
      pct >= 100 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "success", children: [
        pct,
        "%"
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(GoalStatusBadge, { status: kr.status }),
      editable && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", onClick: () => setEditing(true), children: "Update" })
    ] })
  ] });
}
function ObjectiveCard({
  objective: o,
  ownerLabel,
  editable,
  defaultExpanded,
  depth = 0,
  onUpdateKr,
  onAddChild,
  onDelete,
  children
}) {
  const [open, setOpen] = reactExports.useState(defaultExpanded ?? o.level === "company");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginLeft: depth * 20 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(GoalProgressRing, { value: o.progress }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[15px] font-semibold text-[#0A0A0A]", children: o.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(GoalStatusBadge, { status: o.status })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-[12px] text-[#6B6B6B]", children: [
            GOAL_PERIOD_LABELS[o.period],
            " ",
            o.year,
            " · ",
            ownerLabel ?? o.ownerId,
            " · ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "default", children: o.level })
          ] }),
          o.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-[13px] text-[#6B6B6B]", children: o.description })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => setOpen((v) => !v),
          className: "text-[12px] text-[var(--tenant-primary)] hover:underline",
          children: [
            open ? "Hide" : "Show",
            " ",
            o.keyResults.length,
            " key result",
            o.keyResults.length === 1 ? "" : "s"
          ]
        }
      ),
      open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-[#E5E5E3] pt-1", children: o.keyResults.map((kr) => /* @__PURE__ */ jsxRuntimeExports.jsx(KeyResultRow, { kr, editable, onUpdate: (v) => onUpdateKr?.(kr.id, v) }, kr.id)) }),
      (onAddChild || onDelete) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-2 border-t border-[#E5E5E3]", children: [
        onAddChild && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", onClick: onAddChild, children: "Add child objective" }),
        onDelete && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", onClick: onDelete, children: "Delete" })
      ] })
    ] }),
    children && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 space-y-3", children })
  ] });
}
export {
  ObjectiveCard as O
};
