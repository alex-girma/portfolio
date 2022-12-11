import Head from 'next/head';
import BottomBarLayout from '../bottombar/BottomBar';
import TopBarLayout from '../topbar/TopBar';

interface PrimaryLayoutProps {
  children: React.ReactNode;
}

const PrimaryLayout: React.FC<PrimaryLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen flex-col justify-between">
      <Head>
        <title>Portfolio</title>
      </Head>
      <TopBarLayout />
      <main className="flex justify-center ">{children}</main>
      <BottomBarLayout />
    </div>
  );
};

export default PrimaryLayout;
