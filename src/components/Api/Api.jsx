import { useEffect, useState } from "react";
import WeatherApi from "./WeatherApi";


const Api = () => {
  const [catFact, setCatFact] = useState("");

  const getCatFact = async () => {
    try {
      const res = await fetch("https://catfact.ninja/fact");
      const data = await res.json();
      setCatFact(data.fact);
    } catch (error) {
      console.error("Failed to fetch cat fact", error);
    }
  };

  useEffect(() => {
    getCatFact();
  }, []);


  return (
    <div className="flex flex-col items-center justify-center h-full p-4 gap-5">
      <WeatherApi />
      <div className="flex flex-col items-center justify-center bg-zinc-950 text-white p-4 rounded-xl shadow-lg w-200">
      {catFact ? (
        <div className="text-lg text-center">{catFact}</div>
      ) : (
        <p>Loading...</p>
      )}
      <button
        onClick={getCatFact}
        className="mt-4 bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded"
      >
        Get New Cat Fact
      </button>
    </div>

    </div>
  );
};

export default Api;
