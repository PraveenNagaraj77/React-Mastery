import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Praveen");
  const [age, setAge] = useState(26);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  


  return (
    <div>
      <h1>Counter</h1>
      <h2>Count: {count}</h2>
      <h2>{name}</h2>
      <h2>{age}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={()=>setCount(0)}>Reset</button>
    </div>
  );
};

export default Counter;
