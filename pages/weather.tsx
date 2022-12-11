import { useEffect } from 'react';
import type { NextPageWithLayout } from './_app';

const Weather: NextPageWithLayout = () => {
  return (
    <div id="Test">
      <h1 className="font-normal text-xl">
        Welcome to my <span className=" text-red-600 underline">Weather</span>
      </h1>
    </div>
  );
};

export default Weather;
