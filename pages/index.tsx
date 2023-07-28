import Head from 'next/head';
import type { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
      </Head>
      <h1 className="text-xs font-normal sm:text-xl">
        <div className="flex">
          <div>
            <br />
            <span>Welcome to my</span>
            <span className="bg-red-500 px-2 py-1 text-white">Portfolio</span>
          </div>
          <div>

            <div className=" fa fa-github pl-14 text-red-500 sm:pl-20 "></div>
            <a
              className="px-2  sm:text-sm"
              href="https://github.com/alex-girma"
              target="_blank"
              rel="noreferrer"
            >
              @alex-girma
            </a>
          </div>
        </div>
      </h1>
    </>
  );
};

export default Home;
