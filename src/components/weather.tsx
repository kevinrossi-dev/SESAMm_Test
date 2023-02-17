import { KeyboardEvent, useState } from "react";
import {
  findCitiesByName,
  getWeatherByLonLat,
} from "../services/weatherServices";
import ICity from "../types/city";
import IWeather from "../types/weather";
import WeatherInfos from "./weatherInfos";
import CitySelection from "./citySelection";
import { setGlobalApiKey } from "../services/weatherServices";
import { toast } from "react-toastify";

const Weather = () => {
  const [apiKey, setApiKey] = useState<string>("");
  const [weather, setWeather] = useState<IWeather>();
  const handleApiKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      setGlobalApiKey(apiKey);
      toast.success("Token set");
    }
  };
  const handleSelectCity = async (city: ICity) => {
    const data = await getWeatherByLonLat(city);
    const json = await data.json();
    json.queryDate = Date.now();
    setWeather(json);
  };
  return (
    <div className="weather-container">
      <div className="flex items-center justify-center bg-gray-100 p-5">
        <label htmlFor="api" className="m-2 font-bold">
          API Key
        </label>
        <input
          name="api"
          type="text"
          placeholder="Api Key"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          onKeyDown={(e) => {
            handleApiKeyDown(e);
          }}
          className="  w-30 h-10 rounded bg-white outline-none text-gray-700 pl-2 pr-7 font-bold"
        />
        <button
          onClick={() => {
            setGlobalApiKey(apiKey);
            toast.success("Token set");
          }}
          className="h-10 px-4 text-sm text-white bg-green-500 rounded-lg cursor-pointer hover:bg-green-600"
        >
          V
        </button>
      </div>
      <div className="mt-6 flex items-center justify-center ">
        <CitySelection handleSelectCity={handleSelectCity} />
      </div>
      {weather && <WeatherInfos weather={weather} />}
    </div>
  );
};

export default Weather;
