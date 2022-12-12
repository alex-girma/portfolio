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
        className="link rounded-bl-md"
      >
        <CalendarTopBar />
      </Link>
      <Link href="/weather" aria-label="Weather" className="link">
        <WeatherTopBar />
      </Link>
      <Link href="/clock" aria-label="Clock" className="link rounded-br-md">
        <ClockTopBar />
      </Link>
    </nav>
  );
};

export default TopBarLayout;
