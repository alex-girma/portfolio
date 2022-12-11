import Head from 'next/head';
import BottombarLayout from '../bottombar/BottomBar';
import TopbarLayout from '../topbar/TopBar';

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen flex-col  justify-between">
      <Head>
        <title>Portfolio</title>
      </Head>
      <TopbarLayout />
      <main className="flex justify-center">{children}</main>
      <BottombarLayout />
    </div>
  );
};

export default HomeLayout;
