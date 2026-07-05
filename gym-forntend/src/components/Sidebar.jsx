import { Flame } from "lucide-react";
import Avatar from "../utils/Avatar";
import { NAV_ITEMS } from "../../src/assets/data";
function Sidebar({ active, setActive, mobileOpen, setMobileOpen }) {
  return (
    <>
    
        {mobileOpen && (
          <div
            onClick={() => setMobileOpen(false)}
            style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", zIndex: 40, display: "none" }}
            className="sidebar-overlay"/>
        )}
      <aside className={`sidebar ${mobileOpen ? "sidebar-open" : ""}`}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "22px 20px 26px" }}>
          <div style={{ width: 34, height: 34, borderRadius: 9, background: "linear-gradient(135deg,#3D7FFF,#D4FF3D)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Flame size={18} color="#0E1015" strokeWidth={2.5} />
          </div>
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 18, color: "#F2F4F8" }}>
            PULSE<span style={{ color: "#3D7FFF" }}>FIT</span>
          </span>
        </div>

        <div style={{ padding: "0 12px", display: "flex", flexDirection: "column", gap: 2, flex: 1 }}>
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.key;
            return (
              <button
                key={item.key}
                onClick={() => { setActive(item.key); setMobileOpen(false); }}
                style={{
                  display: "flex", alignItems: "center", gap: 12,
                  padding: "11px 14px", borderRadius: 10, border: "none",
                  background: isActive ? "rgba(61,127,255,0.14)" : "transparent",
                  color: isActive ? "#3D7FFF" : "#8B92A5",
                  fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 14,
                  cursor: "pointer", textAlign: "left", width: "100%",
                  transition: "background 0.15s, color 0.15s",
                }}
              >
                <item.icon size={18} />
                {item.label}
              </button>
            );
          })}
        </div>

        <div style={{ padding: 16, margin: 12, borderRadius: 14, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Avatar initials="AK" color="#D4FF3D" />
            <div style={{ overflow: "hidden" }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#F2F4F8" }}>Aarav Kapoor</div>
              <div style={{ fontSize: 12, color: "#8B92A5" }}>Gym Owner</div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
export default Sidebar;