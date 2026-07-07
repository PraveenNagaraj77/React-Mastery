import React, { useCallback, useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(()=>{
    console.log("Child Button Clicked");
  },[])
  console.log("Parent Rendered");

  return (
    <div>
      <h1>Parent Component</h1>

      <h2>Count : {count}</h2>

      <button onClick={() => setCount((prev) => prev + 1)}>
        Increment
      </button>

      <hr />

      <Child onClick={handleClick} />
    </div>
  );
};

export default Parent;