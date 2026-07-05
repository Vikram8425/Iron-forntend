import { useState,useMemo } from "react";
import Card from "../utils/Card";
import { members } from "../assets/data";
import SectionHeading from "../utils/SectionHeading";
import Button from "../utils/Button";
import { Plus,MoreVertical,Search } from "lucide-react";
import Avatar from "../utils/Avatar";
import StatusPill from "../utils/StatusPill";

function MembersView({ openMember }) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");

  const filtered = useMemo(() => {
    return members.filter((m) => {
      const matchesQuery = (m.name + m.id + m.email).toLowerCase().includes(query.toLowerCase());
      const matchesFilter = filter === "all" || m.status === filter;
      return matchesQuery && matchesFilter;
    });
  }, [query, filter]);

  return (
    <div>
      <SectionHeading
        eyebrow="People"
        title="Member Management"
        action={<Button variant="primary" icon={Plus}>Add Member</Button>}
      />

      <Card style={{ padding: 16, marginBottom: 16 }}>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, padding: "9px 12px", flex: "1 1 240px" }}>
            <Search size={15} color="#8B92A5" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name, ID, or email…"
              style={{ background: "transparent", border: "none", outline: "none", color: "#F2F4F8", fontSize: 13, width: "100%", fontFamily: "'Inter', sans-serif" }}
            />
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {[
              { key: "all", label: "All" },
              { key: "active", label: "Active" },
              { key: "expiring", label: "Expiring" },
              { key: "overdue", label: "Overdue" },
            ].map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                style={{
                  padding: "8px 14px", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer",
                  border: filter === f.key ? "1px solid #3D7FFF" : "1px solid rgba(255,255,255,0.08)",
                  background: filter === f.key ? "rgba(61,127,255,0.14)" : "transparent",
                  color: filter === f.key ? "#3D7FFF" : "#8B92A5",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </Card>

      <Card style={{ overflow: "hidden" }}>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 720 }}>
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                {["Member", "ID", "Plan", "Joined", "Attendance", "Status", ""].map((h) => (
                  <th key={h} style={{ textAlign: "left", padding: "14px 18px", fontSize: 12, fontWeight: 600, color: "#8B92A5", textTransform: "uppercase", letterSpacing: "0.04em" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((m) => (
                <tr
                  key={m.id}
                  onClick={() => openMember(m)}
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", cursor: "pointer" }}
                  className="member-row"
                >
                  <td style={{ padding: "14px 18px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <Avatar initials={m.avatar} />
                      <div>
                        <div style={{ fontSize: 14, fontWeight: 600, color: "#F2F4F8" }}>{m.name}</div>
                        <div style={{ fontSize: 12, color: "#8B92A5" }}>{m.email}</div>
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: "14px 18px", fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: "#8B92A5" }}>{m.id}</td>
                  <td style={{ padding: "14px 18px", fontSize: 13, color: "#F2F4F8" }}>{m.plan}</td>
                  <td style={{ padding: "14px 18px", fontSize: 13, color: "#8B92A5" }}>{m.joined}</td>
                  <td style={{ padding: "14px 18px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <div style={{ width: 60, height: 6, borderRadius: 999, background: "rgba(255,255,255,0.08)", overflow: "hidden" }}>
                        <div style={{ width: `${m.attendance}%`, height: "100%", background: "#3D7FFF" }} />
                      </div>
                      <span style={{ fontSize: 12, color: "#8B92A5" }}>{m.attendance}%</span>
                    </div>
                  </td>
                  <td style={{ padding: "14px 18px" }}><StatusPill status={m.status} /></td>
                  <td style={{ padding: "14px 18px" }}><MoreVertical size={16} color="#8B92A5" /></td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td colSpan={7} style={{ padding: 40, textAlign: "center", color: "#8B92A5", fontSize: 14 }}>No members match your search.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
export default MembersView;