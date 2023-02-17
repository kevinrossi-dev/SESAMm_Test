import ICity from "../types/city";
import { useState, KeyboardEvent } from "react";
import { findCitiesByName } from "../services/weatherServices";
interface CitySelectionProps {
  handleSelectCity: (city: ICity) => Promise<void>;
}
const CitySelection = ({ handleSelectCity }: CitySelectionProps) => {
  const [cities, setCities] = useState<ICity[]>([]);
  const [city, setCity] = useState<string>("");
  const handleFindCities = async () => {
    const data = await findCitiesByName(city);
    const json = await data.json();
    setCities(json);
  };
  const handleCityKeyDown = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      handleFindCities();
    } else {
      setCities([]);
    }
  };
  return (
    <div className="search-container relative ">
      <input
        type="text"
        placeholder="City name ..."
        className="h-10 w-100 h-10 rounded bg-white outline-none text-gray-700 pl-2 pr-7 font-bold border"
        onKeyDown={handleCityKeyDown}
        value={city}
        onChange={(e) => setCity(e.target.value)}
        list="data"
      />
      <button
        onClick={handleFindCities}
        className="h-10 px-4 text-sm text-indigo-100 bg-orange-500 rounded-lg cursor-pointer hover:bg-orange-600"
      >
        Search
      </button>
      {cities.length > 0 && (
        <ul className="absolute border p-2 divide-y cursor-pointer w-full bg-white">
          {cities.map((city, index) => (
            <li
              onClick={() => {
                handleSelectCity(city);
                setCities([]);
              }}
              className="p-2 hover:bg-gray-100"
              key={index}
            >{`${city.name} ${city.state ? city.state : ""} | ${
              city.country
            }`}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CitySelection;
