import { UilSearch, UilBell } from "@iconscout/react-unicons";

export const NavTop = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px 10px",
        alignItems: "center",
      }}
    >
      <h1 style={{ margin: 0 }}>Chain</h1>
      <div style={{ display: "flex", gap: "16px" }}>
        <UilSearch />
        <UilBell />
      </div>
    </nav>
  );
};
