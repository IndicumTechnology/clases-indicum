import { useEffect, useState, useRef } from "react";
import { Toast } from "primereact/toast";

export const Button = ({ text, icon }) => {
  const [message, setMessage] = useState(null);

  const toastTL = useRef(null);

  useEffect(() => {
    if (message !== null)
      toastTL.current.show({
        severity: "info",
        summary: "Info Message",
        detail: message,
        life: 3000,
      });
  }, [message]);

  return (
    <>
      <Toast ref={toastTL} position="top-left" />
      <div style={{ display: "grid", gap: "5px", textAlign: "center" }}>
        <button
          onClick={() => setMessage("Hola")}
          style={{
            color: "#F5F5F7",
            width: "56px",
            height: "50px",
            background: "#232531",
            border: "none",
            borderRadius: "10px",
          }}
        >
          {icon}
        </button>
        <span>{text}</span>
      </div>
    </>
  );
};
