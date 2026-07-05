import {
  STATUS_STYLES,
  revenueData,
  peakHoursData,
  members,
  classSchedule,
  attendanceLog,
  workoutPlan,
  trainers,
  ptBookings,
  transactions
} from "../../src/assets/data";

function StatusPill({ status }) {
  const s = STATUS_STYLES[status] || STATUS_STYLES.active;
  return (
    <span
      style={{
        background: s.bg, color: s.color, fontSize: 12, fontWeight: 600,
        padding: "4px 10px", borderRadius: 999, display: "inline-flex",
        alignItems: "center", gap: 6, whiteSpace: "nowrap",
      }}
    >
      <span style={{ width: 6, height: 6, borderRadius: 999, background: s.color }} />
      {s.label}
    </span>
  );
}
export default StatusPill;