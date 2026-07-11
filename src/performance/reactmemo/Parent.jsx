import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  console.log("Parent rendered");
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Counter</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child name={count}/>
    </div>
  );
};

export default Parent;
