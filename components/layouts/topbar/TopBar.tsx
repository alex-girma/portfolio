import Link from 'next/link';
import CalendarTopBar from '../../calendar/CalendarTopBar';
import ClockTopBar from '../../clock/ClockTopBar';
import WeatherTopBar from '../../weather/WeatherTopBar';

const TopBarLayout: React.FC = () => {
  return (
    <nav className="flex justify-center text-xs text-white">
      <Link
        href="/calendar"
        aria-label="Calendar"
        className="bg-orange-500 px-6 py-1 hover:bg-red-500 duration-150 rounded-bl-md"
      >
        <CalendarTopBar />
      </Link>
      <Link
        href="/weather"
        aria-label="Weather"
        className="bg-orange-500 px-10 py-1 hover:bg-red-500 duration-150"
      >
        <WeatherTopBar />
      </Link>
      <Link
        href="/clock"
        aria-label="Clock"
        className="bg-orange-500 px-6 py-1 hover:bg-red-500 duration-150 rounded-br-md"
      >
        <ClockTopBar />
      </Link>
    </nav>
  );
};

export default TopBarLayout;
