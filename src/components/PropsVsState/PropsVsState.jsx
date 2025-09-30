import { useState } from "react";

const PropsVsState = () => {
  // Example for State
  const [count, setCount] = useState(0);

  // Props -- Layouting
  const Greeting = ({ name }) => (
    <div className="p-12 border-2 border-blue-500 shadow-xl rounded-2xl bg-zinc-900 text-center w-full max-w-2xl flex flex-col gap-6 transition-transform hover:scale-105 flex-wrap">
      <h2 className="text-5xl font-extrabold mb-6 text-blue-400 drop-shadow">
        Props
      </h2>
      <p className="text-2xl text-white">
        Hello, <span className="font-semibold text-blue-300">{name}</span>! 👋
      </p>
      <p className="text-lg text-zinc-400 mt-2 italic">
        (This text comes from props)
      </p>
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-br from-zinc-800 via-zinc-900 to-blue-950">
      <h1 className="text-7xl font-extrabold mb-20 text-center text-white drop-shadow-lg tracking-tight">
        Props <span className="text-blue-400">Vs</span> State
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 p-10 w-full max-w-6xl flex-wrap">
        {/* Props Example */}
        <Greeting name="Roi" />

        {/* State Example */}
        <div className="p-12 border-2 border-blue-500 shadow-xl rounded-2xl bg-zinc-900 text-center flex flex-col gap-6 w-full max-w-2xl transition-transform hover:scale-105">
          <h2 className="text-5xl font-extrabold mb-6 text-blue-400 drop-shadow">
            State
          </h2>
          <p className="text-2xl text-white font-semibold mb-2">
            You clicked <span className="text-blue-300">{count}</span> times
          </p>
          <button
            onClick={() => setCount(count + 1)}
            className="mt-2 px-8 py-3 bg-blue-600 text-white text-xl font-bold rounded-lg hover:bg-blue-500 transition-colors shadow-md mx-auto"
          >
            Click Me
          </button>
          <button
            onClick={() => setCount(0)}
            className="mt-2 px-8 py-3 bg-red-600 text-white text-xl font-bold rounded-lg hover:bg-red-500 transition-colors shadow-md mx-auto"
          >
            Clear
          </button>
          <p className="text-lg text-zinc-400 italic">
            (This number updates with state)
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropsVsState;
