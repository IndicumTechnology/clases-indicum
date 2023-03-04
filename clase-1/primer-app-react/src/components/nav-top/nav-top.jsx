import { UilSearch, UilBell } from "@iconscout/react-unicons";

export const NavTop = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "0 24px",
        alignItems: "center",
        height: "48px",
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
