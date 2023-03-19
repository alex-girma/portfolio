import { useEffect, useState } from 'react';
import { WeatherAppProps } from './WeatherApp';

const WeatherAppTopBar = () => {
  const [weather, setWeather] = useState<WeatherAppProps>();

  useEffect(() => {
    // save to session storage to avoid fetching weather on refresh etc...
    if (sessionStorage.getItem('fetchedWeather')) {
      return setWeather(
        JSON.parse(sessionStorage.getItem('fetchedWeather') || '')
      );
    }
    navigator.geolocation.getCurrentPosition(
      // position allowed
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        requestWeather(lat, lon);
      },
      // if position declined set germany
      function () {
        requestWeather(50, 8);
      }
    );
    async function requestWeather(lat: number, lon: number) {
      try {
        const data = await fetch(`/api/weather_api?lat=${lat}&lon=${lon}`);
        const json = await data.json();
        setWeather(json);
        sessionStorage.setItem('fetchedWeather', JSON.stringify(json));
      } catch (error) {
        console.error(error);
      }
    }
  }, []);
  return (
    <div className="flex gap-x-4">
      <p>{weather?.weather[0].description}</p>
      <p>{String(Math.round(weather?.main.temp || 0))}&#176;</p>
      <p>{weather?.name}</p>
    </div>
  );
};

export default WeatherAppTopBar;
