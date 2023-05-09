import Head from 'next/head';
import { useEffect } from 'react';
import BottomBarLayout from '../bottombar/BottomBar';
import TopBarLayout from '../topbar/TopBar';

interface PrimaryLayoutProps {
  children: React.ReactNode;
}

const PrimaryLayout = ({ children }: PrimaryLayoutProps) => {
  // This code solves a problem where the viewport of mobile devices is not really 100%. we need to check for window because no window in ssr
  // This will be executed on the client. window and navigator are not defined on the server. wrapp them inside useEffect to run them on the client side
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    window.addEventListener('resize', () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  }, []);
  return (
    <div className="mobile-h-screen flex flex-col justify-between">
      <TopBarLayout />
      <main className="flex justify-center">{children}</main>
      <BottomBarLayout />
    </div>
  );
};

export default PrimaryLayout;
