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
        <strong>What is state?</strong> In React, <em>state</em> is like a
        memory for your component. It lets your app "remember" things, like a
        score or a user's input, and update the screen when those things change.
        <br />
        <br />
        <strong>Why not just use variables?</strong> Regular variables (like{" "}
        <code>count</code>) reset every time your component re-renders. Imagine
        writing on a whiteboard, but it gets erased every time you look away!
        <br />
        <br />
        <strong>useState</strong> is a special tool from React that lets you
        keep values between renders and automatically updates the UI when those
        values change.
        <br />
        <br />
        <strong>Without useState:</strong> <code>count</code> is re-initialized
        every render, so its value does not persist or update the UI.
        <br />
        <strong>With useState:</strong> <code>countWithState</code> uses React
        state, so its value is remembered and the UI updates instantly when it
        changes.
        <br />
        <br />
        <em>
          Think of <code>useState</code> as a sticky note that React never
          throws away, even when it redraws your component!
        </em>
      </p>

      <button
        className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white px-4 py-2 rounded cursor-pointer transition-colors duration-200"
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
