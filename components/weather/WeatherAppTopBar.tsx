import { useEffect, useState } from 'react';

interface WeatherProps {
  name?: string;
  main?: {
    temp: number;
  };
  weather?: {
    0: {
      main: string;
    };
  };
}

const WeatherAppTopBar: React.FC = () => {
  const [weather, setWeather] = useState<WeatherProps>({});

  useEffect(() => {
    if (localStorage.getItem('fetchedWeather')) {
      return setWeather(
        JSON.parse(localStorage.getItem('fetchedWeather') || '')
      );
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        requestWeather(lat, lon);
      },
      function () {
        requestWeather(50, 8);
      }
    );
    async function requestWeather(lat: number, lon: number) {
      try {
        const data = await fetch(`/api/weather_api?lat=${lat}&lon=${lon}`);
        const json = await data.json();
        setWeather(json);
        localStorage.setItem('fetchedWeather', JSON.stringify(json));
      } catch (error) {
        console.error(error);
      }
    }
  }, []);
  return (
    <div className="flex gap-x-4">
      <p>{weather.weather?.[0].main}</p>
      <p>{weather.main?.temp}&#176;</p>
      <p>{weather.name}</p>
    </div>
  );
};

export default WeatherAppTopBar;
