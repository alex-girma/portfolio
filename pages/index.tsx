import type { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <h1 className="text-xl font-normal ">
        Welcome to my
        <span className="bg-red-500 px-2 py-1 text-white">Portfolio</span>
      </h1>
    </>
  );
};

export default Home;
