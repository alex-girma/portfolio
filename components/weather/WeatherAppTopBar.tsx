import { useEffect, useState } from 'react';
import { WeatherAppProps } from './WeatherApp';

const WeatherAppTopBar = () => {
  const [weather, setWeather] = useState<WeatherAppProps>();
  const [lang, setLang] = useState('en');

  useEffect(() => {
    // save to session storage to avoid fetching weather on refresh etc...
    if (
      sessionStorage.getItem('fetchedWeather') &&
      lang !== navigator.language.slice(0, 2)
    ) {
      return setWeather(
        JSON.parse(sessionStorage.getItem('fetchedWeather') || '')
      );
    }
    navigator.geolocation.getCurrentPosition(
      // position allowed
      ({ coords }) => {
        const { latitude, longitude } = coords;
        requestWeather(latitude, longitude);
      },
      // if position declined by client set germany
      () => requestWeather(50, 8)
    );
    async function requestWeather(latitude: number, longitude: number) {
      try {
        setLang(navigator.language.slice(0, 2));
        // forwarding an api call to the server to protect api key
        const response = await fetch(
          `/api/weather_api?lat=${latitude}&lon=${longitude}&lang=${lang}`
        );
        const data = await response.json();
        setWeather(data);
        sessionStorage.setItem('fetchedWeather', JSON.stringify(data));
      } catch (error) {
        console.error(error);
      }
    }
  }, [lang]);
  return (
    <div className="flex gap-x-4">
      <p>{weather?.weather[0].description}</p>
      <p>{String(Math.round(weather?.main.temp || 0))}&#176;</p>
      <p>{weather?.name}</p>
    </div>
  );
};

export default WeatherAppTopBar;
