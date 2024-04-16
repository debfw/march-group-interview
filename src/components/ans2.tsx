import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    //use prev
    setCount((prev) => prev + 1);
  }

  return (
    <div className="">
      <p>Count: {count}</p>
      <button onClick={incrementCount} className="text-xl w-[100px] h-[100px]">
        Increment
      </button>
    </div>
  );
}

export default Counter;
