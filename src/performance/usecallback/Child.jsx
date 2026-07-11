import { memo } from "react";

const Child = ({ onClick }) => {
  console.log("Child Rendered");

  return (
    <div>
      <button onClick={onClick}>
        Child Button
      </button>
    </div>
  );
};

export default memo(Child);