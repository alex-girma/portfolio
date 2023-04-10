import Head from 'next/head';
import type { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-xl font-normal ">
        Welcome to my
        <span className="bg-red-500 px-2 py-1 text-white">Portfolio</span>
      </h1>
    </>
  );
};

export default Home;
