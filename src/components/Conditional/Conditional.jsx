import { useState } from "react";

const Conditional = () => {
  const [name, setName] = useState("");
  const [showBox, setShowBox] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="text-center w-full bg-zinc-950 p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold">Ternary Operator</h2>
        <p className="text-gray-600">
          The ternary operator is a shorthand for if-else statements.
        </p>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-2 p-2 border border-gray-300 rounded w-full"
        />
        <p className="mt-2">
          {name ? `Hello, ${name}!` : "Please enter your name."}
        </p>
      </div>
      <div className="text-center w-full bg-zinc-950 p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold">Conditional Rendering</h2>
        <p className="text-gray-600">
          Conditional rendering is a technique used in React to render different
          UI elements based on certain conditions.
        </p>
        <button
          onClick={() => setShowBox(!showBox)}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {showBox ? "Hide" : "Show"} Box
        </button>
        {showBox && (
          <div className="mt-4 p-4 bg-green-100 border border-green-400 rounded text-zinc-950">
            This box is conditionally rendered!
          </div>
        )}
      </div>
    </div>
  );
};

export default Conditional;
