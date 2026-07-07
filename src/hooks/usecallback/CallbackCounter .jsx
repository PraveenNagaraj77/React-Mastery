import React, { useCallback, useState } from "react";

const CallbackCounter = () => {
  const [count, setCount] = useState(0);

  const handleShowCount = useCallback(() => {
    console.log("Count:", count);
  }, [count]);

  return (
    <div>
      <h1>Callback Counter</h1>

      <h2>{count}</h2>

      <button onClick={() => setCount((prev) => prev + 1)}>
        Increment
      </button>

      <button onClick={handleShowCount}>
        Show Count
      </button>
    </div>
  );
};

export default CallbackCounter;