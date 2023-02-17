export default interface IWeather {
  queryDate: number;
  base: string;
  coord: {
    lon: number;
    lat: number;
  };
  clouds: { all: number };
  cod: number;

  dt: number;
  id: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  name: string;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  visibility: number;
  weather: [{ id: number; main: string; description: string; icon: string }];
  wind: { speed: number; deg: number };
}
