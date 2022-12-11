import Head from 'next/head';
import BottomBarLayout from '../bottombar/BottomBar';
import TopBarLayout from '../topbar/TopBar';

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen flex-col justify-between mb-52">
      <Head>
        <title>Home</title>
      </Head>
      <TopBarLayout />
      <main className="flex justify-center mt-48">{children}</main>
      <BottomBarLayout />
      <div className="mb-60"></div>
    </div>
  );
};

export default HomeLayout;
