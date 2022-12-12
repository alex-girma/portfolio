import Link from 'next/link';
import CalendarAppTopBar from '../../calendar/CalendarAppTopBar';
import ClockAppTopBar from '../../clock/ClockAppTopBar';
import WeatherAppTopBar from '../../weather/WeatherAppTopBar';

const TopBarLayout: React.FC = () => {
  return (
    <nav className="flex justify-center text-xs text-white">
      <Link
        href="/calendar"
        aria-label="Calendar"
        className="link rounded-bl-md"
      >
        <CalendarAppTopBar />
      </Link>
      <Link href="/weather" aria-label="Weather" className="link">
        <WeatherAppTopBar />
      </Link>
      <Link href="/clock" aria-label="Clock" className="link rounded-br-md">
        <ClockAppTopBar />
      </Link>
    </nav>
  );
};

export default TopBarLayout;
