import { useEffect, useState } from "react";

export const Card = () => {
  const [dataWallet, setDataWallet] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getWallet();
  }, []);

  useEffect(() => {
    if (dataWallet !== null) setIsLoading(false);
  }, [dataWallet]);

  const getWallet = async () => {
    const wallet = await fetch(
      "https://72e497b1-72f3-488f-9584-eb37805899dd.mock.pstmn.io/wallet"
    );
    setDataWallet(await wallet.json());
  };

  return (
    <div
      style={{
        display: "grid",
        gap: "8px",
        border: "2px solid #6992C3",
        borderRadius: "16px",
        padding: "16px 24px",
        background:
          "linear-gradient(148deg, rgb(105 146 195 / 40%) 0%, rgb(24 17 32) 80%)",
      }}
    >
      <span style={{ color: "#C2CDD9", fontSize: "13px" }}>Total funds</span>
      <h2 style={{ margin: 0, fontSize: "32px" }}>
        {isLoading ? "-------" : dataWallet?.totalAmount}
      </h2>
      <span style={{ color: "#7BF896", fontSize: "16px" }}>
        {isLoading ? "-------" : dataWallet?.value1}
      </span>
      <span style={{ color: "#C2CDD9", fontSize: "13px" }}>
        vs. provius week ({isLoading ? "-------" : dataWallet?.date})
      </span>
    </div>
  );
};
