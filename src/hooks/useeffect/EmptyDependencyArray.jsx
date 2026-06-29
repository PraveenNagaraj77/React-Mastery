import React, { useEffect, useState } from "react";

const EmptyDependencyArray = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component Mounted");
  }, []);
  return (
    <div>
      <h2>Count : {count}</h2>

      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  );
};

export default EmptyDependencyArray;
