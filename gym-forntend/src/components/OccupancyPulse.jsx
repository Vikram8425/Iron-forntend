import Card from "../utils/Card";
function OccupancyPulse() {
  const pct = 68;
  return (
    <Card style={{ padding: "18px 22px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12, flexWrap: "wrap", gap: 8 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ position: "relative", width: 10, height: 10, display: "inline-block" }}>
            <span style={{ position: "absolute", inset: 0, borderRadius: 999, background: "#D4FF3D", animation: "pulseDot 1.8s ease-out infinite" }} />
            <span style={{ position: "absolute", inset: 0, borderRadius: 999, background: "#D4FF3D" }} />
          </span>
          <span style={{ fontSize: 13, fontWeight: 700, color: "#F2F4F8", letterSpacing: "0.02em" }}>LIVE FLOOR OCCUPANCY</span>
        </div>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: "#8B92A5" }}>136 / 200 capacity</span>
      </div>
      <div style={{ height: 10, borderRadius: 999, background: "rgba(255,255,255,0.06)", overflow: "hidden", position: "relative" }}>
        <div style={{ width: `${pct}%`, height: "100%", borderRadius: 999, background: "linear-gradient(90deg, #3D7FFF, #D4FF3D)" }} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8, fontSize: 12, color: "#8B92A5" }}>
        <span>Quiet</span><span style={{ color: "#D4FF3D", fontWeight: 600 }}>{pct}% full · peak window approaching</span><span>Packed</span>
      </div>
    </Card>
  );
}
export default OccupancyPulse;