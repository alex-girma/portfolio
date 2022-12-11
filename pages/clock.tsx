import { useEffect } from 'react';
import type { NextPageWithLayout } from './_app';

const Clock: NextPageWithLayout = () => {
  // useEffect(() => {
  //   const data = fetch(`/api/hello`);
  //   console.log(data);
  // }, []);
  return (
    <div id="Test">
      <h1 className="font-normal text-xl">
        Welcome to my <span className=" text-red-600 underline">Clock</span>
      </h1>
    </div>
  );
};

export default Clock;
