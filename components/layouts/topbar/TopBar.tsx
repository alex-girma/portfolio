import Link from 'next/link';

interface TopbarProps {}

const TopbarLayout: React.FC<TopbarProps> = () => {
  return (
    <nav>
      <Link href="/calendar">Calendar</Link>
      <Link href="/weather">Weather</Link>
      <Link href="/clock">Clock</Link>
    </nav>
  );
};

export default TopbarLayout;
