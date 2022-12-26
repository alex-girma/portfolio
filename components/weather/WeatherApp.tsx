import { useEffect, useState } from 'react';
import AppWindowWrapper from '../utility/AppWindowWrapper';
import { toIntlDateFormat } from '../utility/functions';

export interface WeatherAppProps {
  name: string;
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
  };
  weather: {
    0: {
      main: string;
      description: string;
    };
  };
}

const WeatherApp = () => {
  const [weather, setWeather] = useState<WeatherAppProps>();
  const [locale, setLocale] = useState<string>('en-US');

  useEffect(() => {
    setWeather(JSON.parse(sessionStorage.getItem('fetchedWeather') || ''));
    setLocale(navigator.language);
  }, []);

  if (!weather) return <div>Refresh the Page please</div>;

  return (
    <AppWindowWrapper>
      <div className="flex flex-col items-center text-gray-600">
        <div className="py-32 px-20 bg-neutral-200">
          {weather.weather[0].description}
        </div>
        <div className="py-1 font-bold">{weather.name}</div>
        <div className="text-xs">{toIntlDateFormat(locale, new Date())}</div>
        <div className="flex items-end pt-10 pb-4 ">
          <div className="text-2xl font-bold ">
            {String(Math.round(weather.main.temp_min))}
          </div>
          <div className="text-5xl mx-6 font-bold">
            {String(Math.round(weather.main.temp))}
          </div>
          <div className="text-2xl font-bold">
            {String(Math.round(weather.main.temp_max))}
          </div>
        </div>
      </div>
    </AppWindowWrapper>
  );
};

export default WeatherApp;
