import Head from 'next/head';
import { useEffect } from 'react';
import BottomBarLayout from '../bottombar/BottomBar';
import TopBarLayout from '../topbar/TopBar';

interface PrimaryLayoutProps {
  children: React.ReactNode;
}

const PrimaryLayout = ({ children }: PrimaryLayoutProps) => {
  // This code solves a problem where the viewport of mobile devices is not really 100%. we need to check for window because no window ssr
  // This will be executed on the client. window and navigator are not defined on server. wrapp them inside useEffect to run them on the client side
  // if (typeof window !== 'undefined') {
  //   let vh = window.innerHeight * 0.01;
  //   // we create a root css property and use it to calculate the viewport od the device. used in css class mobile-h-screen
  //   document.documentElement.style.setProperty('--vh', `${vh}px`);
  // }
  // // update viewport on resize. Not good because it triggers a repaint of the page. refactor if possible
  // if (typeof window !== 'undefined') {
  //   window.addEventListener('resize', () => {
  //     let vh = window.innerHeight * 0.01;
  //     document.documentElement.style.setProperty('--vh', `${vh}px`);
  //   });
  // }

  // A better way of doing the above
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    window.addEventListener('resize', () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  }, []);
  return (
    <div className="flex mobile-h-screen flex-col justify-between">
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
