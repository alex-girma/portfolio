import Link from 'next/link';
import CalendarAppTopBar from '../../calendar/CalendarAppTopBar';
import ClockAppTopBar from '../../clock/ClockAppTopBar';
import WeatherAppTopBar from '../../weather/WeatherAppTopBar';

const TopBarLayout = () => {
  return (
    <nav className="flex justify-center text-xxxs text-white sm:text-xs">
      <Link
        href="/calendar"
        aria-label="Calendar"
        className="link rounded-bl-md hidden sm:block"
      >
        <CalendarAppTopBar />
      </Link>
      <Link
        href="/weather"
        aria-label="Weather"
        className="link rounded-bl-md sm:rounded-none"
      >
        <WeatherAppTopBar />
      </Link>
      <Link href="/clock" aria-label="Clock" className="link rounded-br-md">
        <ClockAppTopBar />
      </Link>
    </nav>
  );
};

export default TopBarLayout;
