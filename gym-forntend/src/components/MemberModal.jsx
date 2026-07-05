import { useState } from "react";
import { X,Mail,Phone,QrCode,Activity,Salad,Download,CheckCircle2 } from "lucide-react";

import Button from "../utils/Button";
import Avatar from "../utils/Avatar";
import StatusPill from "../utils/StatusPill";
import { attendanceLog } from "../assets/data";
import { workoutPlan } from "../assets/data";

function MemberModal({ member, onClose }) {
  const [tab, setTab] = useState("checkin");
  if (!member) return null;

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.65)", backdropFilter: "blur(4px)", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }} onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} style={{ width: "100%", maxWidth: 560, maxHeight: "88vh", overflowY: "auto", background: "#161922", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20 }}>
        <div style={{ padding: "22px 24px", borderBottom: "1px solid rgba(255,255,255,0.07)", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
            <Avatar initials={member.avatar} size={50} />
            <div>
              <div style={{ fontSize: 18, fontWeight: 700, color: "#F2F4F8", fontFamily: "'Space Grotesk', sans-serif" }}>{member.name}</div>
              <div style={{ fontSize: 13, color: "#8B92A5", fontFamily: "'JetBrains Mono', monospace" }}>{member.id}</div>
            </div>
          </div>
          <button onClick={onClose} style={{ background: "rgba(255,255,255,0.06)", border: "none", borderRadius: 8, width: 32, height: 32, color: "#F2F4F8", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <X size={16} />
          </button>
        </div>

        <div style={{ padding: "16px 24px", display: "flex", gap: 20, flexWrap: "wrap", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#8B92A5" }}><Mail size={14} />{member.email}</div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#8B92A5" }}><Phone size={14} />{member.phone}</div>
          <div style={{ marginLeft: "auto" }}><StatusPill status={member.status} /></div>
        </div>

        <div style={{ display: "flex", gap: 4, padding: "12px 20px 0" }}>
          {[
            { key: "checkin", label: "Check-in QR", icon: QrCode },
            { key: "attendance", label: "Attendance", icon: Activity },
            { key: "workout", label: "Workout & Diet", icon: Salad },
          ].map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              style={{
                display: "flex", alignItems: "center", gap: 6, padding: "9px 14px",
                background: tab === t.key ? "rgba(61,127,255,0.12)" : "transparent",
                color: tab === t.key ? "#3D7FFF" : "#8B92A5",
                border: "none", borderRadius: "10px 10px 0 0", fontSize: 13, fontWeight: 600,
                cursor: "pointer", fontFamily: "'Inter', sans-serif",
              }}
            >
              <t.icon size={14} /> {t.label}
            </button>
          ))}
        </div>

        <div style={{ padding: 24 }}>
          {tab === "checkin" && (
            <div style={{ textAlign: "center" }}>
              <div style={{ display: "inline-block", padding: 16, background: "#fff", borderRadius: 16, position: "relative" }}>
                <svg width="160" height="160" viewBox="0 0 160 160">
                  <rect width="160" height="160" fill="#fff" />
                  {Array.from({ length: 12 }).map((_, r) =>
                    Array.from({ length: 12 }).map((_, c) => {
                      const seed = (r * 7 + c * 13 + member.id.length * 3) % 5;
                      return seed > 2 ? <rect key={`${r}-${c}`} x={c * 13.3} y={r * 13.3} width="13" height="13" fill="#0E1015" /> : null;
                    })
                  )}
                  <rect x="0" y="0" width="36" height="36" fill="#0E1015" />
                  <rect x="8" y="8" width="20" height="20" fill="#fff" />
                  <rect x="124" y="0" width="36" height="36" fill="#0E1015" />
                  <rect x="132" y="8" width="20" height="20" fill="#fff" />
                  <rect x="0" y="124" width="36" height="36" fill="#0E1015" />
                  <rect x="8" y="132" width="20" height="20" fill="#fff" />
                </svg>
              </div>
              <div style={{ fontSize: 13, color: "#8B92A5", marginTop: 14 }}>Scan at the front-desk kiosk for instant check-in</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: "#3D7FFF", marginTop: 4 }}>{member.id}</div>
              <Button variant="subtle" small style={{ marginTop: 16 }} icon={Download}>Download QR</Button>
            </div>
          )}

          {tab === "attendance" && (
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14 }}>
                <div style={{ fontSize: 13, color: "#8B92A5" }}>Consistency score</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#2ECC71" }}>{member.attendance}%</div>
              </div>
              {attendanceLog.map((a, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "11px 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <div style={{ width: 34, height: 34, borderRadius: 9, background: "rgba(46,204,113,0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "#2ECC71" }}>
                    <CheckCircle2 size={16} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "#F2F4F8" }}>{a.date}</div>
                    <div style={{ fontSize: 12, color: "#8B92A5" }}>Checked in {a.time}</div>
                  </div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "#8B92A5" }}>{a.duration}</div>
                </div>
              ))}
            </div>
          )}

          {tab === "workout" && (
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#F2F4F8", marginBottom: 10 }}>This week's split</div>
              {workoutPlan.map((w, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <div style={{ width: 38, fontSize: 12, fontWeight: 700, color: "#8B92A5" }}>{w.day}</div>
                  <div style={{ flex: 1, fontSize: 13, color: "#F2F4F8" }}>{w.focus}</div>
                  {w.done ? <CheckCircle2 size={16} color="#2ECC71" /> : <span style={{ width: 16, height: 16, borderRadius: 999, border: "1.5px solid #8B92A5" }} />}
                </div>
              ))}
              <div style={{ fontSize: 13, fontWeight: 700, color: "#F2F4F8", margin: "18px 0 10px" }}>Diet target</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
                {[{ l: "Calories", v: "2,400" }, { l: "Protein", v: "160g" }, { l: "Water", v: "3.5L" }].map((d) => (
                  <div key={d.l} style={{ background: "rgba(255,255,255,0.04)", borderRadius: 10, padding: 12, textAlign: "center" }}>
                    <div style={{ fontSize: 16, fontWeight: 700, color: "#D4FF3D", fontFamily: "'Space Grotesk', sans-serif" }}>{d.v}</div>
                    <div style={{ fontSize: 11, color: "#8B92A5", marginTop: 2 }}>{d.l}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default MemberModal;