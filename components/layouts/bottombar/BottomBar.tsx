import Link from 'next/link';

interface BottomBarProps {}

const BottomBarLayout: React.FC<BottomBarProps> = () => {
  return (
    <nav className="flex justify-center gap-x-2">
      <Link href="/calendar">Calendar</Link>
      <Link href="/weather">Weather</Link>
      <Link href="/clock">Clock</Link>
    </nav>
  );
};

export default BottomBarLayout;
