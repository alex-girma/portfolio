import Link from 'next/link';
import CalendarTopBar from '../../calendar/CalendarTopBar';
import ClockTopBar from '../../clock/ClockTopBar';
import WeatherTopBar from '../../weather/WeatherTopBar';

const TopBarLayout: React.FC = () => {
  return (
    <nav className="flex justify-center text-xs ">
      <Link href="/calendar" className="bg-orange-500 px-6 py-1">
        <CalendarTopBar />
      </Link>
      <Link href="/weather" className="bg-orange-500 px-10 py-1">
        <WeatherTopBar />
      </Link>
      <Link href="/clock" className="bg-orange-500 px-6 py-1">
        <ClockTopBar />
      </Link>
    </nav>
  );
};

export default TopBarLayout;
