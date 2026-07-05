import { Menu,Search,Bell } from "lucide-react";
import Avatar from "../utils/Avatar";
function TopBar({ title, onMenu }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 24px", borderBottom: "1px solid rgba(235, 20, 20, 0.06)", position: "sticky", top: 0, background: "rgba(14,16,21,0.85)", backdropFilter: "blur(10px)", zIndex: 30 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <button className="hamburger" onClick={onMenu} style={{ background: "transparent", border: "none", color: "#F2F4F8", cursor: "pointer", display: "none" }}>
          <Menu size={22} />
        </button>
        <div className="topbar-search" style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(203, 38, 38, 0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, padding: "8px 12px", width: 280 }}>
          <Search size={15} color="#8B92A5" />
          <input placeholder="Search members, trainers, invoices…" style={{ background: "transparent", border: "none", outline: "none", color: "#F2F4F8", fontSize: 13, width: "100%", fontFamily: "'Inter', sans-serif" }} />
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <button style={{ position: "relative", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, width: 38, height: 38, display: "flex", alignItems: "center", justifyContent: "center", color: "#F2F4F8", cursor: "pointer" }}>
          <Bell size={17} />
          <span style={{ position: "absolute", top: 8, right: 9, width: 7, height: 7, borderRadius: 999, background: "#FF6B35" }} />
        </button>
        <Avatar initials="AK" color="#D4FF3D" size={38} />
      </div>
    </div>
  );
}
export default TopBar;