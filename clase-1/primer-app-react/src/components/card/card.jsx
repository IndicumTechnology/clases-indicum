export const Card = () => {
  return (
    <div
      style={{
        display: "grid",
        gap: "8px",
        border: "2px solid #6992C3",
        borderRadius: "10px",
        padding: "30px 20px",
        background:
          "linear-gradient(148deg, rgb(105 146 195 / 40%) 0%, rgb(24 17 32) 80%)",
      }}
    >
      <span style={{ color: "#C4CCD8" }}>Total funds</span>
      <h2 style={{ margin: 0, fontSize: "40px" }}>$401,871.12</h2>
      <span style={{ color: "#9AD0B6" }}>+ 249.41 (5.40%)</span>
      <span style={{ color: "#C4CCD8" }}>vs. provius week (20-27th Sep)</span>
    </div>
  );
};
