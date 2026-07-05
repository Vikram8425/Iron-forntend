function Card({ children, style, className }) {
  return (
    <div
      className={className}
      style={{
        background: "linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.015))",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 16,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default Card;