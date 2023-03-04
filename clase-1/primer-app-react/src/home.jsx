import { useState, useEffect } from "react";
import { NavTop } from "./components/nav-top";
import { Card } from "./components/card";
import { Button as ButtonWallet } from "./components/button";
import { UilImport, UilMessage } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
import { RowGrid } from "./components/row-grid";

export const Home = () => {
  const [dataCrypto, setDataCrypto] = useState(null);
  useEffect(() => {
    getCrypto();
  }, []);

  const getCrypto = async () => {
    const crypto = await fetch(
      "https://72e497b1-72f3-488f-9584-eb37805899dd.mock.pstmn.io/cypto"
    );
    setDataCrypto(await crypto.json());
  };

  return (
    <main style={{ height: "100vh", maxHeight: "100vh", paddingTop: "16px" }}>
      <NavTop />
      <div style={{ padding: "16px 24px 24px" }}>
        <Card />
      </div>
      <div
        style={{
          display: "flex",
          gap: "24px",
          paddingLeft: "24px",
          paddingBottom: "24px",
        }}
      >
        <ButtonWallet text="Receive" icon={<UilImport />} />
        <Link to="/Send">
          <ButtonWallet text="Send" icon={<UilMessage />} />
        </Link>
        <ButtonWallet text="Swap" icon={<UilImport />} />
        <ButtonWallet text="Buy" icon={<UilImport />} />
      </div>
      <div
        style={{
          padding: "16px 24px 0",
          background: "#06080E",
          borderTopLeftRadius: "16px",
          borderTopRightRadius: "16px",
          overflow: "auto",
          height: "calc(100% - 332px)",
        }}
      >
        <div
          style={{
            display: "grid",
          }}
        >
          {dataCrypto?.map((crypto) => (
            <RowGrid crypto={crypto} key={crypto.name} />
          ))}
        </div>
      </div>
    </main>
  );
};
