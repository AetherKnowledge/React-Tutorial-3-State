import { useState } from "react";

const UseState = () => {
  let count = 0;
  const [countWithState, setCountWithState] = useState(0);

  function handleClick() {
    count++;
    setCountWithState(countWithState + 1);

    console.log("Without State: ", count);
    console.log("With State: ", countWithState);
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => handleClick()}
      >
        Add Count
      </button>
      <p>Without State: {count}</p>
      <p>With State: {countWithState}</p>
    </div>
  );
};

export default UseState;
