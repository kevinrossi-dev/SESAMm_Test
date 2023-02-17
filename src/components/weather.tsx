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
import TokenInput from "./tokenInput";

const Weather = () => {
  const [weather, setWeather] = useState<IWeather>();

  const handleSelectCity = async (city: ICity) => {
    const data = await getWeatherByLonLat(city);
    const json = await data.json();
    json.queryDate = Date.now();
    setWeather(json);
  };
  return (
    <div className="weather-container">
      <div className="flex items-center justify-center bg-gray-100 p-5">
        <TokenInput />
      </div>
      <div className="mt-6 flex items-center justify-center ">
        <CitySelection handleSelectCity={handleSelectCity} />
      </div>
      {weather && <WeatherInfos weather={weather} />}
    </div>
  );
};

export default Weather;
