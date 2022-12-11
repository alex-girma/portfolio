import Head from 'next/head';
import BottombarLayout from '../bottombar/BottomBar';
import TopbarLayout from '../topbar/TopBar';

interface PrimaryLayoutProps {
  children: React.ReactNode;
}

const PrimaryLayout: React.FC<PrimaryLayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Layouts Example</title>
      </Head>
      <TopbarLayout />
      <main>{children}</main>
      <BottombarLayout />
    </>
  );
};

export default PrimaryLayout;
