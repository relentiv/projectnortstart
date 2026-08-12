import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { j as formatCurrency, c as cn, P as parseCurrencyInput } from "./router-CPP24NZe.mjs";
function CurrencyInput({
  label,
  value,
  onChange,
  placeholder = "0",
  min,
  max,
  error,
  hint,
  disabled,
  className,
  id
}) {
  const reactId = reactExports.useId();
  const inputId = id ?? reactId;
  const [focused, setFocused] = reactExports.useState(false);
  const [raw, setRaw] = reactExports.useState(value === null ? "" : String(value));
  const [localError, setLocalError] = reactExports.useState();
  reactExports.useEffect(() => {
    if (!focused) setRaw(value === null || value === void 0 ? "" : String(value));
  }, [value, focused]);
  const shown = focused ? raw : value === null || value === void 0 ? "" : formatCurrency(value);
  const shownError = error ?? localError;
  const handleChange = (next) => {
    setRaw(next);
    if (next.trim() === "") {
      setLocalError(void 0);
      onChange(null);
      return;
    }
    const parsed = parseCurrencyInput(next);
    if (parsed === null) {
      setLocalError("Enter a valid amount.");
      onChange(null);
      return;
    }
    if (min !== void 0 && parsed < min) {
      setLocalError(`Minimum is ${formatCurrency(min)}.`);
      onChange(null);
      return;
    }
    if (max !== void 0 && parsed > max) {
      setLocalError(`Maximum is ${formatCurrency(max)}.`);
      onChange(null);
      return;
    }
    setLocalError(void 0);
    onChange(parsed);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("w-full", className), children: [
    label && /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: inputId, className: "mb-1.5 block text-[13px] font-medium text-[#0A0A0A]", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        id: inputId,
        inputMode: "decimal",
        disabled,
        value: shown,
        placeholder,
        "aria-invalid": !!shownError,
        onFocus: () => {
          setFocused(true);
          setRaw(value === null || value === void 0 ? "" : String(value));
        },
        onBlur: () => setFocused(false),
        onChange: (e) => handleChange(e.target.value),
        className: cn(
          "w-full h-11 rounded-sm border bg-white px-3 text-[15px] tabular-nums text-[#0A0A0A] placeholder:text-[#6B6B6B]",
          "transition-colors duration-150 ease-out outline-none focus:ring-2 focus:ring-[#F97316]/30",
          shownError ? "border-[#DC2626] focus:border-[#DC2626]" : "border-[#E5E5E3] focus:border-[#0A0A0A]",
          "disabled:bg-[#F2F2F0] disabled:cursor-not-allowed"
        )
      }
    ),
    shownError ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { "aria-live": "polite", className: "mt-1.5 text-[13px] text-[#DC2626]", children: shownError }) : hint ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-[13px] text-[#6B6B6B]", children: hint }) : null
  ] });
}
export {
  CurrencyInput as C
};
