import { useState } from "react";

const UseState = () => {
  let count = 0;
  const [countWithState, setCountWithState] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleClick() {
    count++;
    setCountWithState(countWithState + 1);

    // Add animation effect
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);

    console.log("Without State: ", count);
    console.log("With State: ", countWithState);
  }

  function resetCount() {
    setCountWithState(0);
    console.log("State reset to 0");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-blue-900 flex items-center justify-center p-6 pt-100 w-full">
      <div className="max-w-4xl w-full bg-zinc-950 rounded-2xl shadow-2xl overflow-auto">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-2">
            ⚡ useState Hook
          </h2>
          <p className="text-blue-100 text-lg">
            Learn the difference between state and regular variables
          </p>
        </div>

        {/* Content Section */}
        <div className="p-8">
          {/* Explanation */}
          <div className="mb-8 text-gray-300 leading-relaxed">
            <div className="bg-zinc-800 p-6 rounded-xl mb-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-white mb-3">
                🧠 What is state?
              </h3>
              <p className="mb-4">
                In React, <strong className="text-blue-400">state</strong> is
                like a memory for your component. It lets your app "remember"
                things, like a score or user input, and automatically updates
                the screen when those things change.
              </p>
              <p className="text-yellow-300 italic">
                💡 Think of useState as a sticky note that React never throws
                away!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-red-900/20 p-6 rounded-xl border border-red-500/30">
                <h4 className="text-lg font-semibold text-red-400 mb-3">
                  ❌ Without useState
                </h4>
                <p className="text-sm">
                  Regular variables like{" "}
                  <code className="bg-zinc-700 px-2 py-1 rounded">count</code>{" "}
                  reset every time your component re-renders. It's like writing
                  on a whiteboard that gets erased every time you look away!
                </p>
              </div>

              <div className="bg-green-900/20 p-6 rounded-xl border border-green-500/30">
                <h4 className="text-lg font-semibold text-green-400 mb-3">
                  ✅ With useState
                </h4>
                <p className="text-sm">
                  State variables like{" "}
                  <code className="bg-zinc-700 px-2 py-1 rounded">
                    countWithState
                  </code>
                  persist between renders and automatically update the UI when
                  changed!
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Demo */}
          <div className="bg-zinc-800 p-8 rounded-xl mb-6">
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">
              🎮 Interactive Demo
            </h3>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button
                className={`px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 active:from-blue-700 active:to-blue-800 text-white font-semibold rounded-xl cursor-pointer transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg ${
                  isAnimating ? "animate-pulse" : ""
                }`}
                onClick={handleClick}
              >
                🚀 Increment Count
              </button>

              <button
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 active:from-red-700 active:to-red-800 text-white font-semibold rounded-xl cursor-pointer transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg"
                onClick={resetCount}
              >
                🔄 Reset State
              </button>
            </div>

            {/* Display Section */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Without State Display */}
              <div className="bg-red-900/30 p-6 rounded-xl border-2 border-red-500/50 text-center">
                <h4 className="text-lg font-semibold text-red-400 mb-4">
                  📋 Regular Variable
                </h4>
                <div className="text-6xl font-bold text-red-300 mb-4 font-mono">
                  {count}
                </div>
                <p className="text-red-200 text-sm mb-2">
                  <code className="bg-red-800/50 px-2 py-1 rounded">
                    let count = {count}
                  </code>
                </p>
                <p className="text-red-300 text-xs">
                  ⚠️ Resets every render • No UI updates
                </p>
              </div>

              {/* With State Display */}
              <div className="bg-green-900/30 p-6 rounded-xl border-2 border-green-500/50 text-center">
                <h4 className="text-lg font-semibold text-green-400 mb-4">
                  💾 useState Variable
                </h4>
                <div
                  className={`text-6xl font-bold text-green-300 mb-4 font-mono transition-all duration-300 ${
                    isAnimating ? "scale-110 text-yellow-400" : ""
                  }`}
                >
                  {countWithState}
                </div>
                <p className="text-green-200 text-sm mb-2">
                  <code className="bg-green-800/50 px-2 py-1 rounded">
                    useState({countWithState})
                  </code>
                </p>
                <p className="text-green-300 text-xs">
                  ✅ Persists across renders • Triggers UI updates
                </p>
              </div>
            </div>
          </div>

          {/* Code Examples */}
          <div className="bg-zinc-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-white mb-4">
              📝 Code Examples
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-zinc-900 p-4 rounded-lg">
                <h4 className="text-red-400 font-semibold mb-2">
                  ❌ Regular Variable
                </h4>
                <pre className="text-sm text-gray-300 overflow-x-auto">
                  {`let count = 0;

                    function increment() {
                      count++; // Doesn't update UI
                      console.log(count);
                    }`}
                </pre>
              </div>

              <div className="bg-zinc-900 p-4 rounded-lg">
                <h4 className="text-green-400 font-semibold mb-2">
                  ✅ useState Hook
                </h4>
                <pre className="text-sm text-gray-300 overflow-x-auto">
                  {`const [count, setCount] = useState(0);

                  function increment() {
                    setCount(count + 1); // Updates UI!
                    console.log(count);
                  }`}
                </pre>
              </div>
            </div>
          </div>

          {/* Try It Yourself Section */}
          <div className="mt-8 bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-xl border border-purple-500/30">
            <h3 className="text-xl font-semibold text-white mb-3">
              🎯 Try It Yourself!
            </h3>
            <p className="text-gray-300 mb-4">
              Click the buttons above and watch the console (F12) to see the
              difference between regular variables and state variables in
              action!
            </p>
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full">
                Current clicks: {countWithState}
              </span>
              <span className="bg-purple-600 text-white px-3 py-1 rounded-full">
                {countWithState === 0
                  ? "Start clicking!"
                  : countWithState < 5
                  ? "Keep going!"
                  : "Great job! 🎉"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseState;
