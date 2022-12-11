import Head from 'next/head';
import BottombarLayout from '../bottombar/BottomBar';
import TopbarLayout from '../topbar/TopBar';

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <TopbarLayout />
      <main>{children}</main>
      <BottombarLayout />
    </>
  );
};

export default HomeLayout;
