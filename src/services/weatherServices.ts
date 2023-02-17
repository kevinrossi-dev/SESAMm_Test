import ICity from "../types/city";
const findApi = "http://api.openweathermap.org/geo/1.0/direct";
const weatherApi = "https://api.openweathermap.org/data/2.5/weather";

let globalApiKey: string = "";
export const setGlobalApiKey = (key: string) => {
  globalApiKey = key;
};
export const getGlobalApiKey = (): string => {
  return globalApiKey;
};
export const findCitiesByName = (city: string) => {
  return fetch(`${findApi}?q=${city}&appid=${globalApiKey}&limit=5`);
};

export const getWeatherByLonLat = (city: ICity) => {
  return fetch(
    `${weatherApi}?lat=${city.lat}&lon=${city.lon}&appid=${globalApiKey}&units=metric`
  );
};
