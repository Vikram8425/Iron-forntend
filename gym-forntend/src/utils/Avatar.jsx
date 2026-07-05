function Avatar({ initials, color = "#3D7FFF", size = 36 }) {
  return (
    <div
      style={{
        width: size, height: size, borderRadius: 10, background: `${color}22`,
        color, display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
        fontSize: size * 0.36, flexShrink: 0, border: `1px solid ${color}3a`,
      }}
    >
      {initials}
    </div>
  );
}
export default Avatar