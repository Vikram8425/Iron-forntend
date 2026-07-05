function Button({ children, variant = "primary", icon: Icon, onClick, style, small }) {
  const variants = {
    primary: { background: "#3D7FFF", color: "#fff", border: "1px solid #3D7FFF" },
    orange: { background: "#FF6B35", color: "#0E1015", border: "1px solid #FF6B35" },
    ghost: { background: "transparent", color: "#F2F4F8", border: "1px solid rgba(255,255,255,0.12)" },
    subtle: { background: "rgba(255,255,255,0.06)", color: "#F2F4F8", border: "1px solid rgba(255,255,255,0.08)" },
  };
  return (
    <button
      onClick={onClick}
      style={{
        ...variants[variant],
        display: "inline-flex", alignItems: "center", gap: 8,
        padding: small ? "8px 12px" : "10px 16px",
        borderRadius: 10, fontFamily: "'Inter', sans-serif",
        fontWeight: 600, fontSize: small ? 13 : 14, cursor: "pointer",
        transition: "transform 0.12s ease, filter 0.12s ease",
        whiteSpace: "nowrap",
        ...style,
      }}
      onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.97)")}
      onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      {Icon && <Icon size={small ? 14 : 16} />}
      {children}
    </button>
  );
}
export default Button;