export const RowGrid = ({ crypto }) => {
  return (
    <div
      style={{
        padding: "8px 0",
        borderBottom: "1px solid #262626",
        display: "flex",
        gap: "8px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "48px",
          minWidth: "48px",
          background: "#FFFFFF",
          borderRadius: "16px",
        }}
      >
        <img style={{ height: "40px", width: "40px" }} src={crypto.image}></img>
      </div>
      <div style={{ width: "100%", display: "grid", gap: "8px" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>{crypto.name}</span>
          <span>{crypto.currentValue}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: "8px" }}>
            <span style={{ color: "#C2CDD9" }}>{crypto.value1}</span>
            <span style={{ color: "#7BF896" }}>{crypto.value2}</span>
          </div>
          <span style={{ color: "#C2CDD9" }}>{crypto.value3}</span>
        </div>
      </div>
    </div>
  );
};
