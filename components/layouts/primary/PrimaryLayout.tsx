import Head from 'next/head';
import BottomBarLayout from '../bottombar/BottomBar';
import TopBarLayout from '../topbar/TopBar';

interface PrimaryLayoutProps {
  children: React.ReactNode;
}

const PrimaryLayout: React.FC<PrimaryLayoutProps> = ({ children }) => {
  if (typeof window !== 'undefined') {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  return (
    <div className="flex mob-h-screen flex-col justify-between">
      <Head>
        <title>Portfolio</title>
      </Head>
      <TopBarLayout />
      <main className="flex justify-center">{children}</main>
      <BottomBarLayout />
    </div>
  );
};

export default PrimaryLayout;
