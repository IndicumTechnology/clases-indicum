import { useState } from "react";

export const ButtonCount = ({ initialNumber = 0 }) => {
  const [count, setCount] = useState(initialNumber);

  return (
    <button onClick={() => setCount(count + 1)}>el contador es {count}</button>
  );
};
