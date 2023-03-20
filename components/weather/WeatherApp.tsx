import Image from 'next/image';
import { useEffect, useState } from 'react';
import AppWindowWrapper from '../utility/AppWindowWrapper';
import { toIntlDateFormat } from '../utility/functions';

//TODO: add refresh weather button
export interface WeatherAppProps {
  name: string;
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
  };
  weather: {
    0: {
      icon: string;
      description: string;
    };
  };
}

const WeatherApp = () => {
  const [weather, setWeather] = useState<WeatherAppProps>();
  const [locale, setLocale] = useState<string>('en-US');

  useEffect(() => {
    if (!sessionStorage.getItem('fetchedWeather')) return;
    setWeather(JSON.parse(sessionStorage.getItem('fetchedWeather') || ''));
    setLocale(navigator.language);
  }, []);

  if (!weather) return <div>Refresh the Page please</div>;

  return (
    <AppWindowWrapper>
      <div className="flex flex-col items-center text-gray-600">
        <div className="flex flex-col items-center py-28 px-20 bg-neutral-200">
          <Image
            src="https://openweathermap.org/img/wn/10d@2x.png"
            alt="weather icon"
            width={60}
            height={60}
          />
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
