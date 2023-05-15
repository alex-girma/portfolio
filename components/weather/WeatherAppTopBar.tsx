import { useEffect, useState } from 'react';
import { WeatherAppProps } from './WeatherApp';

const WeatherAppTopBar = () => {
  const [weather, setWeather] = useState<WeatherAppProps>();

  useEffect(() => {
    const lang = navigator.language.slice(0, 2);
    // get weather from session storage if allready fetched to avoid fetching weather on refresh etc...
    if (sessionStorage.getItem('fetchedWeather')) {
      return setWeather(
        JSON.parse(sessionStorage.getItem('fetchedWeather') || '')
      );
    }
    navigator.geolocation.getCurrentPosition(
      // if position allowed
      ({ coords }) => {
        const { latitude, longitude } = coords;
        requestWeather(latitude, longitude);
      },
      // if position declined by client set germany
      () => requestWeather(50, 8)
    );
    requestWeather(50, 8);
    async function requestWeather(latitude: number, longitude: number) {
      try {
        // forwarding an api call to the server to protect api key
        const response = await fetch(
          `/api/weather_api?lat=${latitude}&lon=${longitude}&lang=${lang}`
        );
        const data = await response.json();
        setWeather(data);
        // save fetched weather to session storage to avoid refetching
        sessionStorage.setItem('fetchedWeather', JSON.stringify(data));
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
