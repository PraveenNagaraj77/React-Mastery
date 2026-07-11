import { useCallback, useState } from "react";
import Child from "./Child";

const Parent = () => {
  console.log("Parent Rendered");

  const [count, setCount] = useState(0);

//   function handleClick() {
//     console.log("Button Clicked");
//   }

  const handleClick = useCallback(()=>{
    console.log("Button Clicked");
  },[])

  return (
    <div>
      <h2>Counter : {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <Child onClick={handleClick} />
    </div>
  );
};

export default Parent;