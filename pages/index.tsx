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
      <h1 className="text-xl font-normal ">
        <div className="flex">
          <div>
            <br />
            <span>Welcome to my</span>
            <span className="bg-red-500 px-2 py-1 text-white">Portfolio</span>
          </div>
          <div>
            <div className="fa fa-linkedin  pl-20 text-red-500"></div>
            <a
              className="pl-2 text-sm"
              href="https://linkedin.com/in/alexgirmaw"
            >
              @alexgirmaw
            </a>

            <div className="invisible">Test</div>
            <div className=" fa fa-github pl-20 text-red-500 "></div>
            <a className="px-2  text-sm" href="https://github.com/alex-girma">
              @alex-girma
            </a>
          </div>
        </div>
      </h1>
    </>
  );
};

export default Home;
