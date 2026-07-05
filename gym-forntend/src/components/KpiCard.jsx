import Card from "../utils/Card";
import {
 ArrowUpRight, ArrowDownRight
} from "lucide-react";
function KpiCard({ label, value, delta, deltaPositive, icon: Icon, accent, suffix }) {
  return (
    <Card style={{ padding: 20, position: "relative", overflow: "hidden" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <div style={{ fontSize: 13, color: "#8B92A5", fontWeight: 500, marginBottom: 8 }}>{label}</div>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 30, fontWeight: 700, color: "#F2F4F8", lineHeight: 1 }}>
            {value}
            {suffix && <span style={{ fontSize: 15, color: "#8B92A5", fontWeight: 600, marginLeft: 4 }}>{suffix}</span>}
          </div>
        </div>
        <div style={{ width: 38, height: 38, borderRadius: 10, background: `${accent}1c`, display: "flex", alignItems: "center", justifyContent: "center", color: accent, flexShrink: 0 }}>
          <Icon size={19} />
        </div>
      </div>
      {delta && (
        <div style={{ marginTop: 14, display: "flex", alignItems: "center", gap: 5, fontSize: 13, fontWeight: 600, color: deltaPositive ? "#2ECC71" : "#FF6B35" }}>
          {deltaPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
          {delta}
        </div>
      )}
      <div style={{ position: "absolute", bottom: -20, right: -20, width: 90, height: 90, borderRadius: "50%", background: `${accent}10`, filter: "blur(6px)" }} />
    </Card>
  );
}
export default KpiCard;