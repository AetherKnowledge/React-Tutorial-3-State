import { useState } from "react";

const Conditional = () => {
  const [name, setName] = useState("");
  const [showBox, setShowBox] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="text-center w-full bg-zinc-950 p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold">Ternary Operator</h2>
        <p className="text-gray-600">
          The <strong>ternary operator</strong> is a quick way to write <em>if-else</em> logic in a single line. It's like asking: "Is this true? If yes, do one thing; if not, do something else."<br /><br />
          <code>condition ? valueIfTrue : valueIfFalse</code><br /><br />
          In React, it's often used to show different text or UI based on a condition. For example, here we greet you if you enter your name, or prompt you if you haven't.<br />
          <em>Think of it as a shortcut switch for your UI!</em>
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
          <strong>Conditional rendering</strong> lets your React app decide what to show based on certain conditions. It's like telling your app: "Show this only if something is true."<br /><br />
          For example, you can show or hide a box depending on a button click. This makes your UI interactive and dynamic.<br />
          <em>Imagine a magic window that only appears when you want it to!</em>
        </p>
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white px-4 py-2 rounded cursor-pointer transition-colors duration-200"
          onClick={() => setShowBox(!showBox)}
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
