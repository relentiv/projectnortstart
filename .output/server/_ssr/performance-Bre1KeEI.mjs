const GOAL_PERIOD_LABELS = {
  q1: "Q1",
  q2: "Q2",
  q3: "Q3",
  q4: "Q4",
  h1: "H1",
  h2: "H2",
  annual: "Annual",
  custom: "Custom"
};
const GOAL_STATUS_LABELS = {
  draft: "Draft",
  active: "Active",
  on_track: "On Track",
  at_risk: "At Risk",
  behind: "Behind",
  completed: "Completed",
  cancelled: "Cancelled"
};
const CYCLE_STATUS_LABELS = {
  draft: "Draft",
  active: "Active",
  review_in_progress: "In Progress",
  calibration: "Calibration",
  completed: "Completed"
};
const REVIEW_STATUS_LABELS = {
  not_started: "Not started",
  self_pending: "Self pending",
  self_complete: "Self complete",
  manager_pending: "Manager pending",
  manager_complete: "Manager complete",
  peer_pending: "Peer pending",
  completed: "Completed"
};
export {
  CYCLE_STATUS_LABELS as C,
  GOAL_STATUS_LABELS as G,
  REVIEW_STATUS_LABELS as R,
  GOAL_PERIOD_LABELS as a
};
