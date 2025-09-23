import { useEffect, useState } from "react";

const WeatherApi = () => {
  const lat = 14.853232710086909;
  const lon = 120.81303217409064;
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${lat}&lon=${lon}`,
          {
            headers: {
              "User-Agent": "React-Tutorial-3-State/1.0",
            },
          }
        );
        const data = await res.json();

        const rawCurrentWeather = data.properties.timeseries[0];
        const current = {
          temp:
            rawCurrentWeather.data.instant.details.air_temperature || "Unknown",
          humidity:
            rawCurrentWeather.data.instant.details.relative_humidity ||
            "Unknown",
          condition:
            rawCurrentWeather.data.next_1_hours?.summary?.symbol_code ||
            "Unknown",
        };
        const next_1_hours = {
          temp:
            rawCurrentWeather.data.next_1_hours?.summary?.symbol_code ||
            "Unknown",
          humidity:
            rawCurrentWeather.data.next_1_hours?.summary?.symbol_code ||
            "Unknown",
          condition:
            rawCurrentWeather.data.next_1_hours?.summary?.symbol_code ||
            "Unknown",
        };
        const next_6_hours = {
          temp:
            rawCurrentWeather.data.next_6_hours?.summary?.symbol_code ||
            "Unknown",
          humidity:
            rawCurrentWeather.data.next_6_hours?.summary?.symbol_code ||
            "Unknown",
          condition:
            rawCurrentWeather.data.next_6_hours?.summary?.symbol_code ||
            "Unknown",
        };

        console.log("Current weather data:", data);

        setWeatherData({
          current,
          next_1_hours,
          next_6_hours,
        });
      } catch (err) {
        console.error("Failed to fetch weather", err);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="flex flex-col items-center bg-zinc-950 text-white p-4 rounded-xl shadow-lg w-64">
      {weatherData ? (
        <>
          <div className="text-2xl font-bold capitalize">
            {weatherData.current.condition}
          </div>
          <div className="text-4xl font-bold mt-2">
            {weatherData.current.temp}°C
          </div>
          <div className="text-md text-zinc-300 mt-1">
            💧 {weatherData.current.humidity}%
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WeatherApi;
