import { j as jsxRuntimeExports, r as reactExports } from "./_libs/react.mjs";
import { B as Button } from "./_ssr/Button-B92Yl16p.mjs";
import { I as Input } from "./_ssr/Input-DkwuDyVZ.mjs";
import { T as Textarea } from "./_ssr/Textarea-DmSlcYuH.mjs";
import { S as Select } from "./_ssr/Select-CT_4ow88.mjs";
import { B as Badge } from "./_ssr/Badge-BQrIKnVV.mjs";
import { C as Card } from "./_ssr/Card-C9YFlUub.mjs";
import { S as Spinner, a as attendanceApi } from "./_ssr/router-LFebWAoY.mjs";
import { A as Alert } from "./_ssr/Alert-DctqS4QO.mjs";
import { E as EmptyState } from "./_ssr/EmptyState-C_t8YrDr.mjs";
import { s as showToast } from "./_ssr/Toast-n7pN7q8Q.mjs";
import { T as Toggle } from "./_ssr/Toggle-DjmT4lpt.mjs";
import { T as TimePicker } from "./_ssr/TimePicker-dQnAs5Sh.mjs";
import { P as PermissionGuard } from "./_ssr/PermissionGuard-CtwjQNn8.mjs";

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
import "./_ssr/usePermission-5FQzLb5G.mjs";
import "./_ssr/rbac-B_cCMzV8.mjs";
import "./_ssr/rbac-B1d7raBj.mjs";
const CAPTURE_MODE_OPTIONS = [{
  value: "web",
  label: "Web clock-in only"
}, {
  value: "web_biometric",
  label: "Web + biometric"
}, {
  value: "biometric",
  label: "Biometric only"
}];
function emptyFence() {
  return {
    name: "",
    lat: "",
    lng: "",
    radiusMeters: "200"
  };
}
function SettingsAttendancePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PermissionGuard, { permission: "attendance.configure", fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { variant: "error", children: "You don't have access to attendance settings." }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(SettingsAttendanceInner, {}) });
}
function SettingsAttendanceInner() {
  const [settings, setSettings] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [saving, setSaving] = reactExports.useState(false);
  const [ipText, setIpText] = reactExports.useState("");
  const [fenceForm, setFenceForm] = reactExports.useState(emptyFence());
  const load = async () => {
    setLoading(true);
    const res = await attendanceApi.getSettings();
    if (res.data) {
      setSettings(res.data);
      setIpText(res.data.allowedIps.join("\n"));
    }
    setLoading(false);
  };
  reactExports.useEffect(() => {
    void load();
  }, []);
  const patch = async (partial, message) => {
    if (!settings) return;
    setSaving(true);
    const res = await attendanceApi.saveSettings(partial);
    setSaving(false);
    if (res.error) {
      showToast(res.error.message, "error");
      return;
    }
    setSettings(res.data ?? null);
    if (message) showToast(message, "success");
  };
  const saveIps = async () => {
    const list = ipText.split("\n").map((v) => v.trim()).filter(Boolean);
    await patch({
      allowedIps: list
    }, "IP allowlist updated");
  };
  const addFence = async () => {
    if (!fenceForm.name.trim() || !fenceForm.lat || !fenceForm.lng) {
      showToast("Name, latitude and longitude are required", "error");
      return;
    }
    const res = await attendanceApi.upsertGeoFence({
      name: fenceForm.name.trim(),
      lat: Number(fenceForm.lat),
      lng: Number(fenceForm.lng),
      radiusMeters: Number(fenceForm.radiusMeters) || 200
    });
    if (res.error) {
      showToast(res.error.message, "error");
      return;
    }
    setSettings(res.data ?? null);
    setFenceForm(emptyFence());
    showToast("Geo-fence added", "success");
  };
  const removeFence = async (fence) => {
    const res = await attendanceApi.deleteGeoFence(fence.id);
    if (res.error) {
      showToast(res.error.message, "error");
      return;
    }
    setSettings(res.data ?? null);
    showToast("Geo-fence removed", "success");
  };
  if (loading || !settings) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 28 }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 max-w-3xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[20px] font-semibold", children: "Attendance settings" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#6B6B6B] mt-1", children: "Configure how employees clock in, and the rules used to derive daily status." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-5 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[15px] font-semibold", children: "Clock-in method" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { label: "Capture mode", options: CAPTURE_MODE_OPTIONS, value: settings.captureMode, onChange: (e) => void patch({
        captureMode: e.target.value
      }, "Capture mode updated") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] font-medium text-[#0A0A0A]", children: "Break tracking" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#6B6B6B]", children: "Allow employees to log breaks during their shift." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { checked: settings.breakTrackingEnabled, onChange: (v) => void patch({
          breakTrackingEnabled: v
        }, "Updated") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] font-medium text-[#0A0A0A]", children: "Allow regularization" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#6B6B6B]", children: "Employees can request corrections to missed or wrong punches." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { checked: settings.allowRegularization, onChange: (v) => void patch({
          allowRegularization: v
        }, "Updated") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Regularization window (days)", type: "number", value: settings.regularizationWindowDays, onChange: (e) => void patch({
          regularizationWindowDays: Number(e.target.value) || 0
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Max regularizations / month", type: "number", value: settings.maxRegularizationsPerMonth, onChange: (e) => void patch({
          maxRegularizationsPerMonth: Number(e.target.value) || 0
        }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-5 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[15px] font-semibold", children: "Timing rules" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Late grace period (minutes)", type: "number", value: settings.lateGraceMinutes, onChange: (e) => void patch({
          lateGraceMinutes: Number(e.target.value) || 0
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TimePicker, { label: "Auto clock-out time", value: settings.autoClockOutTime, onChange: (v) => void patch({
          autoClockOutTime: v
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Half-day threshold (minutes worked)", type: "number", value: settings.halfDayMinutes, onChange: (e) => void patch({
          halfDayMinutes: Number(e.target.value) || 0
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Full-day threshold (minutes worked)", type: "number", value: settings.fullDayMinutes, onChange: (e) => void patch({
          fullDayMinutes: Number(e.target.value) || 0
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Overtime after (minutes)", type: "number", value: settings.overtimeAfterMinutes, onChange: (e) => void patch({
          overtimeAfterMinutes: Number(e.target.value) || 0
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", loading: saving, onClick: () => showToast("Timing rules saved", "success"), children: "Save timing rules" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-5 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[15px] font-semibold", children: "Geo-fencing" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#6B6B6B]", children: "Restrict web clock-in to within a radius of approved locations." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { checked: settings.enforceGeo, onChange: (v) => void patch({
          enforceGeo: v
        }, "Updated") })
      ] }),
      settings.geoFences.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No geo-fences configured.", subtitle: "Add a location below to start restricting clock-in by geography." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: settings.geoFences.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border border-[#E5E5E3] rounded-sm px-3 py-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] font-medium text-[#0A0A0A]", children: f.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[12px] text-[#6B6B6B]", children: [
            f.lat.toFixed(4),
            ", ",
            f.lng.toFixed(4),
            " · ",
            f.radiusMeters,
            "m radius"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", onClick: () => void removeFence(f), children: "Remove" })
      ] }, f.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-4 gap-3 items-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Name", value: fenceForm.name, onChange: (e) => setFenceForm({
          ...fenceForm,
          name: e.target.value
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Latitude", type: "number", value: fenceForm.lat, onChange: (e) => setFenceForm({
          ...fenceForm,
          lat: e.target.value
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Longitude", type: "number", value: fenceForm.lng, onChange: (e) => setFenceForm({
          ...fenceForm,
          lng: e.target.value
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Radius (m)", type: "number", value: fenceForm.radiusMeters, onChange: (e) => setFenceForm({
          ...fenceForm,
          radiusMeters: e.target.value
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "secondary", onClick: addFence, children: "+ Add geo-fence" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-5 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[15px] font-semibold", children: "IP allowlist" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-[#6B6B6B]", children: "Restrict web clock-in to approved office networks (CIDR or IP, one per line)." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { checked: settings.enforceIp, onChange: (v) => void patch({
          enforceIp: v
        }, "Updated") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { rows: 4, value: ipText, onChange: (e) => setIpText(e.target.value), placeholder: "192.168.0.0/16" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        settings.allowedIps.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "warning", children: "No IPs configured" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: settings.allowedIps.map((ip) => /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "default", children: ip }, ip)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", loading: saving, onClick: saveIps, children: "Save allowlist" })
      ] })
    ] })
  ] });
}
export {
  SettingsAttendancePage as component
};
