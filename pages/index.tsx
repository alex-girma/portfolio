import { ReactElement } from 'react';
import HomeLayout from '../components/layouts/home/HomeLayout';
import type { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <h1 className="font-normal text-xl">
        Welcome to my <span className=" text-red-600 underline">Portfolio</span>
      </h1>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};

export default Home;
