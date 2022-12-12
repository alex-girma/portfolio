import type { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <h1 className="font-normal text-xl ">
        Welcome to my
        <span className="text-white bg-red-500 px-2 py-1">Portfolio</span>
      </h1>
    </div>
  );
};

export default Home;
