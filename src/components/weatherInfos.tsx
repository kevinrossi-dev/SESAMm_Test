import IWeather from "../types/weather";
interface WeatherInfosProps {
  weather: IWeather;
}
const WeatherInfos = ({ weather }: WeatherInfosProps) => {
  return (
    <div className="mt-5 p-5 flex justify-center">
      <div className="border-orange-400 border rounded px-20 py-10">
        {weather.queryDate && (
          <span className="text-orange-400">
            {new Date(weather.queryDate).toLocaleString("fr-FR", {
              day: "2-digit",
              month: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        )}
        <h2 className="font-thin text-xl">{weather.name}</h2>
        <span className="font-medium text-3xl	">
          {Math.round(weather.main.temp)}°C
        </span>
        <div>
          <span className="font-medium">
            ( Feels like {Math.round(weather.main.feels_like)}°C )
          </span>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfos;
