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
    <div className="flex flex-col text-center bg-zinc-950 rounded-lg shadow-md items-center justify-center p-4 gap-5 w-200">
      <h2 className="text-2xl font-bold">Use State</h2>
      <p className="text-gray-600">
        <strong>useState</strong> is a React Hook that lets you add state to
        functional components. State allows your component to remember values
        and update the UI when those values change.
        <br />
        <br />
        <strong>Without useState:</strong> The <code>count</code> variable is
        re-initialized every render, so its value does not persist or trigger UI
        updates.
        <br />
        <strong>With useState:</strong> The <code>countWithState</code> variable
        uses React state, so its value persists between renders and updates the
        UI automatically when changed.
      </p>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => handleClick()}
      >
        Add Count
      </button>

      <p className="text-gray-400 text-sm">
        Current value without state: <strong>{count}</strong> (does not persist
        or update UI)
      </p>
      <p className="text-gray-400 text-sm">
        Current value with <code>useState</code>:{" "}
        <strong>{countWithState}</strong> (persists and updates UI)
      </p>
    </div>
  );
};

export default UseState;
