const CANDIDATE_STATUS_LABELS = {
  invited: "Invited",
  portal_opened: "Link opened",
  form_in_progress: "In progress",
  submitted: "Under review",
  changes_requested: "Changes needed",
  resubmitting: "Resubmitting",
  approved: "Approved",
  offer_pending: "Offer pending",
  offer_sent: "Offer sent",
  candidate_signed: "Offer signed",
  offer_rejected: "Offer declined",
  countersigned: "Countersigned",
  onboarding: "Onboarding",
  converting: "Converting",
  converted: "Hired",
  rejected: "Rejected",
  withdrawn: "Withdrawn",
  expired: "Link expired"
};
const TERMINAL_STATUSES = [
  "converted",
  "rejected",
  "withdrawn",
  "offer_rejected"
];
const STEP_DEFINITIONS = [
  {
    id: "application",
    label: "Candidate Application",
    description: "Fill in your information",
    completedStatuses: [
      "submitted",
      "changes_requested",
      "resubmitting",
      "approved",
      "offer_pending",
      "offer_sent",
      "candidate_signed",
      "countersigned",
      "onboarding",
      "converted"
    ],
    activeStatuses: ["portal_opened", "form_in_progress"],
    route: (pipelineId) => `/portal/${pipelineId}/form`
  },
  {
    id: "hr_review",
    label: "HR Review",
    description: "Your application is being reviewed",
    completedStatuses: [
      "approved",
      "offer_pending",
      "offer_sent",
      "candidate_signed",
      "countersigned",
      "onboarding",
      "converted"
    ],
    activeStatuses: ["submitted", "changes_requested", "resubmitting"],
    route: null
  },
  {
    id: "offer_letter",
    label: "Offer Letter",
    description: "Review and sign your offer",
    completedStatuses: ["candidate_signed", "countersigned", "onboarding", "converted"],
    activeStatuses: ["offer_sent"],
    route: (pipelineId) => `/portal/${pipelineId}/offer`
  },
  {
    id: "joining",
    label: "Joining",
    description: "Welcome to the team!",
    completedStatuses: ["converted"],
    activeStatuses: ["onboarding", "countersigned"],
    route: null
  }
];
const REJECTION_CATEGORY_LABELS = {
  skills: "Skills & Experience",
  culture_fit: "Culture Fit",
  compensation: "Compensation",
  timeline: "Timeline",
  other: "Other"
};
export {
  CANDIDATE_STATUS_LABELS as C,
  REJECTION_CATEGORY_LABELS as R,
  STEP_DEFINITIONS as S,
  TERMINAL_STATUSES as T
};
