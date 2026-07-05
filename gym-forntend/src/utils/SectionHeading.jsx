function SectionHeading({ eyebrow, title, action }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 18, flexWrap: "wrap", gap: 12 }}>
      <div>
        {eyebrow && (
          <div style={{ fontSize: 12, fontWeight: 600, color: "#3D7FFF", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 4 }}>
            {eyebrow}
          </div>
        )}
        <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 26, fontWeight: 700, color: "#F2F4F8", margin: 0 }}>
          {title}
        </h1>
      </div>
      {action}
    </div>
  );
}
export default SectionHeading;