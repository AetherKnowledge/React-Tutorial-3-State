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
      <div className="flex flex-col items-center mb-6 bg-zinc-950 p-6 rounded-xl shadow-lg w-200 gap-2">
        <h1 className="text-3xl font-bold">API Examples</h1>
        <p className="text-gray-600">
          <strong>What is an API?</strong> An API (Application Programming Interface) is like a messenger that lets your app talk to other services or databases to get information.<br /><br />
          In React, you often use APIs to fetch data from the internet—like facts, weather, or user info—and display it in your app.<br /><br />
          This component shows how to fetch a random cat fact from an API and display it. When you click the button, it asks the API for a new fact and updates the screen.<br /><br />
          <em>APIs help your app stay up-to-date and interactive by bringing in fresh data from the outside world!</em>
        </p>
      </div>

      <WeatherApi />
      <div className="flex flex-col items-center justify-center bg-zinc-950 p-4 rounded-xl shadow-lg w-200">
        {catFact ? (
          <div className="text-lg text-center">{catFact}</div>
        ) : (
          <p>Loading...</p>
        )}
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white px-4 py-2 rounded cursor-pointer transition-colors duration-200"
          onClick={getCatFact}
        >
          Get New Cat Fact
        </button>
      </div>
    </div>
  );
};

export default Api;
