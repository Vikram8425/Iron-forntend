import React, { useState, useMemo } from "react";
import SectionHeading from "../utils/SectionHeading";
import Button from "../utils/Button";
import Card from "../utils/Card";
import {Plus} from "lucide-react"

import {classSchedule} from "../assets/data";
function ScheduleView() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const hours = Array.from({ length: 13 }, (_, i) => i + 6); // 6am - 6pm+
  const [hoveredClass, setHoveredClass] = useState(null);

  return (
    <div>
      <SectionHeading
        eyebrow="Operations"
        title="Class Schedule"
        action={<Button variant="primary" icon={Plus}>Create Class</Button>}
      />

      <div style={{ display: "flex", gap: 16, marginBottom: 16, flexWrap: "wrap" }}>
        {[
          { color: "#D4FF3D", label: "Yoga & Mobility" },
          { color: "#FF6B35", label: "CrossFit / HIIT" },
          { color: "#3D7FFF", label: "Strength" },
        ].map((l) => (
          <div key={l.label} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 12, color: "#8B92A5" }}>
            <span style={{ width: 9, height: 9, borderRadius: 999, background: l.color }} /> {l.label}
          </div>
        ))}
      </div>

      <Card style={{ padding: 0, overflow: "hidden" }}>
        <div style={{ overflowX: "auto" }}>
          <div style={{ minWidth: 760, display: "grid", gridTemplateColumns: "70px repeat(6, 1fr)" }}>
            <div style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", borderRight: "1px solid rgba(255,255,255,0.06)" }} />
            {days.map((d) => (
              <div key={d} style={{ padding: "14px 0", textAlign: "center", fontSize: 13, fontWeight: 700, color: "#F2F4F8", borderBottom: "1px solid rgba(255,255,255,0.08)", borderRight: "1px solid rgba(255,255,255,0.04)", fontFamily: "'Space Grotesk', sans-serif" }}>
                {d}
              </div>
            ))}

            {hours.map((h) => (
              <React.Fragment key={h}>
                <div style={{ padding: "18px 10px", fontSize: 11, color: "#8B92A5", borderRight: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.04)", fontFamily: "'JetBrains Mono', monospace", textAlign: "right" }}>
                  {h > 12 ? h - 12 : h}{h >= 12 ? "pm" : "am"}
                </div>
                {days.map((d) => {
                  const cls = classSchedule.find((c) => c.day === d && Math.floor(c.start) === h);
                  return (
                    <div key={d + h} style={{ position: "relative", minHeight: 56, borderRight: "1px solid rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.04)", padding: 3 }}>
                      {cls && (
                        <div
                          onMouseEnter={() => setHoveredClass(cls.id)}
                          onMouseLeave={() => setHoveredClass(null)}
                          style={{
                            background: `${cls.color}1e`, border: `1px solid ${cls.color}55`, borderLeft: `3px solid ${cls.color}`,
                            borderRadius: 8, padding: "6px 8px", height: `calc(${cls.dur * 100}% - 6px)`, minHeight: 48,
                            cursor: "pointer", transition: "transform 0.12s ease",
                            transform: hoveredClass === cls.id ? "scale(1.03)" : "scale(1)",
                            position: "relative", zIndex: hoveredClass === cls.id ? 5 : 1,
                          }}
                        >
                          <div style={{ fontSize: 11.5, fontWeight: 700, color: "#F2F4F8", lineHeight: 1.2 }}>{cls.name}</div>
                          <div style={{ fontSize: 10.5, color: "#8B92A5", marginTop: 2 }}>{cls.instructor}</div>
                          <div style={{ fontSize: 10, fontWeight: 700, color: cls.booked >= cls.cap ? "#FF6B35" : cls.color, marginTop: 3 }}>
                            {cls.booked}/{cls.cap} {cls.booked >= cls.cap && "· FULL"}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </React.Fragment>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
export default ScheduleView;