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
          condition:
            rawCurrentWeather.data.next_1_hours?.summary?.symbol_code ||
            "Unknown",
        };
        const next_6_hours = {
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
    <div className="flex flex-row items-center p-4 rounded-xl shadow-lg gap-5 text-center">
      {weatherData ? (
        <>
          <WeatherBox
            temp={weatherData.current.temp}
            humidity={weatherData.current.humidity}
            condition={weatherData.current.condition}
            conditionNextHour={weatherData.next_1_hours.condition}
            conditionNext6Hours={weatherData.next_6_hours.condition}
          />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

function WeatherBox({ temp, humidity, condition, conditionNextHour, conditionNext6Hours }) {
  return (
    <div className="flex flex-col items-center justify-center bg-zinc-950 p-4 rounded-lg shadow-md">
      <h2 className="text-4xl font-bold">Weather</h2>
      <div className="flex flex-row gap-10 items-center justify-center">
        <WeatherImage condition={condition} time="Now" />
        <WeatherImage condition={conditionNextHour} time="In 1 Hour" />
        <WeatherImage condition={conditionNext6Hours} time="In 6 Hours" />
      </div>

      <div className="text-2xl font-bold mt-2">
        {temp}°C
      </div>
      <div className="text-md text-zinc-300 mt-1">
        💧 {humidity}%
      </div>
    </div>
  )
}

function WeatherImage({ condition, time }) {
  return (
    <div className="flex flex-col items-center justify-center w-30">
      <img
        src={`/weather/${condition}.svg`}
        alt={condition}
        className="w-20 h-20 mx-auto my-2"
      />
      <p className="text-2xl font-bold capitalize">
        {time}
      </p>
    </div>
  )
}

export default WeatherApi;
