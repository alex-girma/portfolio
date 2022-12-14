import WeatherApp from '../components/weather/WeatherApp';
import type { NextPageWithLayout } from './_app';

const Weather: NextPageWithLayout = () => {
  return (
    <div>
      <WeatherApp />
    </div>
  );
};

export default Weather;
