import { d as delay, o as ok, G as fail, H as uid, l as listEmployees } from "./router-Arl77cRa.mjs";
const SESSIONS_KEY = "hrms.ai.sessions";
const ANOMALIES_KEY = "hrms.ai.anomalies";
const RISK_FLAGS_KEY = "hrms.ai.riskFlags";
function read(key, seed) {
  if (typeof window === "undefined") return seed;
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) {
      window.localStorage.setItem(key, JSON.stringify(seed));
      return seed;
    }
    return JSON.parse(raw);
  } catch {
    return seed;
  }
}
function write(key, value) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(key, JSON.stringify(value));
}
function daysAgo(d) {
  return new Date(Date.now() - d * 864e5).toISOString();
}
const lastSendAt = /* @__PURE__ */ new Map();
let callCounter = 0;
function shouldSimulateFailure() {
  callCounter += 1;
  return callCounter % 12 === 0;
}
function loadSessions() {
  return read(SESSIONS_KEY, []);
}
function saveSessions(list) {
  write(SESSIONS_KEY, list);
}
function newSession(employeeId) {
  return {
    id: uid("aisess_"),
    employeeId,
    title: "New conversation",
    messages: [
      {
        id: uid("aimsg_"),
        role: "assistant",
        content: "Hi, I'm your HR assistant. Ask me about leave balances, payroll, policies or your pending approvals.",
        createdAt: (/* @__PURE__ */ new Date()).toISOString()
      }
    ],
    lastActiveAt: (/* @__PURE__ */ new Date()).toISOString()
  };
}
function titleFromText(text) {
  const trimmed = text.trim();
  return trimmed.length > 40 ? `${trimmed.slice(0, 40)}…` : trimmed || "New conversation";
}
async function currentEmployees() {
  const res = await listEmployees();
  return res.data ?? [];
}
function pick(arr, seedNum) {
  return arr[seedNum % arr.length];
}
async function buildCannedResponse(text, ctx) {
  const q = text.toLowerCase();
  const employees = await currentEmployees();
  if (q.includes("salary")) {
    const mentionsOther = employees.some((e) => {
      const full = `${e.firstName} ${e.lastName}`.toLowerCase();
      return full.length > 2 && q.includes(full);
    });
    if (mentionsOther || /salary of|others?['’]?\s*salary|colleague/.test(q)) {
      return {
        content: "I can only share salary information for your own account. For pay queries about other employees, please contact HR directly."
      };
    }
  }
  if (q.includes("leave") && (q.includes("balance") || q.includes("left") || q.includes("remaining"))) {
    return {
      content: "You currently have 12 days of Annual Leave, 6 days of Sick Leave, and 2 days of Casual Leave remaining for this cycle. Carry-forward is capped at 10 days and lapses on 31 March.",
      sources: [{ label: "My Leave Balances", type: "data_query" }, { label: "Leave Policy 2024", type: "policy_doc" }]
    };
  }
  if (q.includes("payroll") && (q.includes("run") || q.includes("date") || q.includes("when") || q.includes("pay day") || q.includes("salary credited"))) {
    return {
      content: "This month's payroll run is scheduled to process on the 28th, with salary credited to accounts by the 1st working day of next month.",
      sources: [{ label: "Payroll Run Schedule", type: "data_query" }]
    };
  }
  if (q.includes("wfh") || q.includes("work from home") || q.includes("remote")) {
    return {
      content: "Employees can work from home up to 2 days a week with manager approval, applied at least a day in advance through the attendance module. Fully remote arrangements need HR sign-off.",
      sources: [{ label: "Remote Work Policy", type: "policy_doc" }]
    };
  }
  if (q.includes("pending approval") || q.includes("approval") && q.includes("my")) {
    return {
      content: "You have 2 items awaiting your approval: 1 leave request from your team and 1 expense claim submitted 3 days ago.",
      sources: [{ label: "Approvals Queue", type: "data_query" }]
    };
  }
  if (q.includes("probation")) {
    return {
      content: "Standard probation period is 6 months from the date of joining, with a formal review at the 5-month mark. Extensions of up to 3 months can be requested by the reporting manager.",
      sources: [{ label: "Probation Policy", type: "policy_doc" }]
    };
  }
  if (q.includes("attrition")) {
    return {
      content: "Attrition across the org has trended down slightly this quarter. I don't have a source I can cite for the exact percentage right now — please confirm with People Analytics before sharing externally.",
      unverified: true
    };
  }
  if (q.includes("holiday")) {
    return {
      content: "The next company holiday is listed on your work calendar. Check Settings → Holidays for the full list this year.",
      sources: [{ label: "Holiday Calendar", type: "data_query" }]
    };
  }
  return {
    content: `I don't have a specific answer for that yet, but based on where you are (${ctx.route}), you may find relevant details in the related module, or I can help you raise a helpdesk ticket instead.`,
    unverified: true
  };
}
const aiApi = {
  async listSessions(employeeId) {
    const list = loadSessions().filter((s) => s.employeeId === employeeId).sort((a, b) => b.lastActiveAt.localeCompare(a.lastActiveAt));
    return delay(ok(list), 150);
  },
  async getSession(id) {
    const session = loadSessions().find((s) => s.id === id);
    if (!session) return delay(fail("Conversation not found."));
    return delay(ok(session), 100);
  },
  async createSession(employeeId) {
    const session = newSession(employeeId);
    const list = loadSessions();
    saveSessions([session, ...list]);
    return delay(ok(session), 120);
  },
  async sendMessage(sessionId, text, ctx) {
    const trimmed = text.trim();
    if (!trimmed) return delay(fail("Type a message first."));
    const now = Date.now();
    const last = lastSendAt.get(sessionId);
    if (last && now - last < 1500) {
      return delay(fail("rate_limited"), 40);
    }
    lastSendAt.set(sessionId, now);
    const list = loadSessions();
    const idx = list.findIndex((s) => s.id === sessionId);
    if (idx === -1) return delay(fail("Conversation not found."));
    const userMsg = {
      id: uid("aimsg_"),
      role: "user",
      content: trimmed,
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    let assistantMsg;
    if (shouldSimulateFailure()) {
      assistantMsg = {
        id: uid("aimsg_"),
        role: "assistant",
        content: "Something went wrong while reaching the AI service. Please try again in a moment.",
        isError: true,
        createdAt: (/* @__PURE__ */ new Date()).toISOString()
      };
    } else {
      const result = await buildCannedResponse(trimmed, ctx);
      assistantMsg = {
        id: uid("aimsg_"),
        role: "assistant",
        content: result.content,
        sources: result.sources,
        unverified: result.unverified,
        createdAt: (/* @__PURE__ */ new Date()).toISOString()
      };
    }
    const session = list[idx];
    const updated = {
      ...session,
      title: session.messages.filter((m) => m.role === "user").length === 0 ? titleFromText(trimmed) : session.title,
      messages: [...session.messages, userMsg, assistantMsg],
      lastActiveAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    const next = list.slice();
    next[idx] = updated;
    saveSessions(next);
    return delay(ok(updated), 500);
  },
  async clearSession(employeeId) {
    const list = loadSessions().filter((s) => s.employeeId !== employeeId);
    const fresh = newSession(employeeId);
    saveSessions([fresh, ...list]);
    return delay(ok(fresh), 120);
  },
  async setFeedback(sessionId, messageId, value) {
    const list = loadSessions();
    const idx = list.findIndex((s) => s.id === sessionId);
    if (idx === -1) return delay(fail("Conversation not found."));
    const updated = {
      ...list[idx],
      messages: list[idx].messages.map((m) => m.id === messageId ? { ...m, feedback: value } : m)
    };
    const next = list.slice();
    next[idx] = updated;
    saveSessions(next);
    return delay(ok(updated), 100);
  }
};
const ANOMALY_TYPES = [
  { type: "Overtime spike", explanation: "Overtime hours are 3.2x the employee's 6-month average for this run." },
  { type: "Missing deduction", explanation: "Provident fund deduction is absent despite an active enrolment." },
  { type: "Duplicate reimbursement", explanation: "The same travel reimbursement amount appears to have been paid twice in consecutive runs." },
  { type: "Salary jump", explanation: "Gross pay increased by more than 25% without a linked increment record." }
];
let anomalySeeded = false;
async function loadAnomalies() {
  const existing = read(ANOMALIES_KEY, []);
  if (existing.length > 0 || anomalySeeded) return existing;
  anomalySeeded = true;
  const employees = await currentEmployees();
  if (employees.length === 0) return existing;
  const seeded = employees.slice(0, 4).map((e, i) => {
    const a = pick(ANOMALY_TYPES, i);
    return {
      id: uid("anom_"),
      runId: "run_current",
      employeeId: e.id,
      employee: e,
      anomalyType: a.type,
      explanation: a.explanation,
      confidence: i % 2 === 0 ? "high" : "medium",
      status: "open"
    };
  });
  write(ANOMALIES_KEY, seeded);
  return seeded;
}
async function listPayrollAnomalies(runId) {
  const list = await loadAnomalies();
  return delay(ok(list.filter((a) => a.runId === runId || runId === "run_current")), 200);
}
async function dismissAnomaly(id, reason) {
  const list = await loadAnomalies();
  const next = list.map(
    (a) => a.id === id ? { ...a, status: "dismissed", dismissedReason: reason, dismissedAt: (/* @__PURE__ */ new Date()).toISOString() } : a
  );
  write(ANOMALIES_KEY, next);
  return delay(ok(next), 150);
}
const RISK_TYPES = ["chronic_lateness", "rising_absenteeism", "possible_burnout", "irregular_pattern"];
const RISK_RATIONALE = {
  chronic_lateness: "Clocked in after 10:15 AM on 9 of the last 14 working days.",
  rising_absenteeism: "Unplanned leave frequency has doubled compared to the prior 60-day window.",
  possible_burnout: "Average daily logged hours exceed 10.5 for three consecutive weeks with no leave taken.",
  irregular_pattern: "Clock-in/out times vary by more than 3 hours day-to-day with no approved shift change."
};
let riskSeeded = false;
async function loadRiskFlags() {
  const existing = read(RISK_FLAGS_KEY, []);
  if (existing.length > 0 || riskSeeded) return existing;
  riskSeeded = true;
  const employees = await currentEmployees();
  if (employees.length === 0) return existing;
  const seeded = employees.slice(0, 5).map((e, i) => ({
    id: uid("risk_"),
    employeeId: e.id,
    employee: e,
    riskType: pick(RISK_TYPES, i),
    rationale: RISK_RATIONALE[pick(RISK_TYPES, i)],
    detectedAt: daysAgo(i + 1),
    status: "open"
  }));
  write(RISK_FLAGS_KEY, seeded);
  return seeded;
}
async function listAttendanceRiskFlags(opts = {}) {
  const list = await loadRiskFlags();
  const filtered = opts.status ? list.filter((r) => r.status === opts.status) : list;
  return delay(ok(filtered.sort((a, b) => b.detectedAt.localeCompare(a.detectedAt))), 200);
}
async function dismissRiskFlag(id, reason) {
  const list = await loadRiskFlags();
  const next = list.map((r) => r.id === id ? { ...r, status: "dismissed", dismissedReason: reason } : r);
  write(RISK_FLAGS_KEY, next);
  return delay(ok(next), 150);
}
const OCR_FIELDS_BY_TYPE = {
  aadhaar: [
    { fieldKey: "name", fieldLabel: "Full name", extractedValue: "Aarav Sharma", confidence: "high" },
    { fieldKey: "dob", fieldLabel: "Date of birth", extractedValue: "1994-03-12", confidence: "high" },
    { fieldKey: "aadhaar_no", fieldLabel: "Aadhaar number", extractedValue: "XXXX XXXX 4821", confidence: "medium" }
  ],
  pan: [
    { fieldKey: "name", fieldLabel: "Full name", extractedValue: "AARAV SHARMA", confidence: "high" },
    { fieldKey: "pan_no", fieldLabel: "PAN number", extractedValue: "ABCPS1234D", confidence: "high" },
    { fieldKey: "father_name", fieldLabel: "Father's name", extractedValue: "Rakesh Sharma", confidence: "low" }
  ],
  offer_letter: [
    { fieldKey: "designation", fieldLabel: "Designation", extractedValue: "Software Engineer II", confidence: "high" },
    { fieldKey: "ctc", fieldLabel: "Annual CTC", extractedValue: "₹14,50,000", confidence: "low" },
    { fieldKey: "joining_date", fieldLabel: "Joining date", extractedValue: "2024-01-15", confidence: "low" }
  ]
};
async function extractOcrFields(documentType) {
  const fields = OCR_FIELDS_BY_TYPE[documentType] ?? [
    { fieldKey: "value", fieldLabel: "Detected text", extractedValue: "Unable to confidently extract structured fields.", confidence: "low" }
  ];
  return delay(ok({ documentType, fields }), 700);
}
export {
  aiApi as a,
  listPayrollAnomalies as b,
  dismissAnomaly as c,
  dismissRiskFlag as d,
  extractOcrFields as e,
  listAttendanceRiskFlags as l
};
