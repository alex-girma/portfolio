import Link from 'next/link';

const BottomBarLayout: React.FC = () => {
  return (
    <nav className="flex justify-center gap-x-2">
      <Link href="/">Home</Link>
      <Link href="/calendar">Calendar</Link>
      <Link href="/weather">Weather</Link>
      <Link href="/clock">Clock</Link>
    </nav>
  );
};

export default BottomBarLayout;
