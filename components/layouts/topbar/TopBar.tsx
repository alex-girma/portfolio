import Link from 'next/link';
import ClockTopBar from '../../clock/ClockTopBar';
import WeatherTopBar from '../../weather/WeatherTopBar';

interface TopBarProps {}

const TopBarLayout: React.FC<TopBarProps> = () => {
  return (
    <nav className="flex justify-center gap-x-12 text-xs border-b-2 ">
      <Link href="/calendar">Calendar</Link>
      <Link href="/weather">
        <WeatherTopBar />
      </Link>
      <Link href="/clock">
        <ClockTopBar />
      </Link>
    </nav>
  );
};

export default TopBarLayout;
