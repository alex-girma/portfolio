import Link from 'next/link';
import ClockTopBar from '../../clock/ClockTopBar';

interface TopBarProps {}

const TopBarLayout: React.FC<TopBarProps> = () => {
  return (
    <nav className="flex justify-center gap-x-2 text-sm">
      <Link href="/calendar">Calendar</Link>
      <Link href="/weather">Weather</Link>
      <Link href="/clock">
        <ClockTopBar />
      </Link>
    </nav>
  );
};

export default TopBarLayout;
