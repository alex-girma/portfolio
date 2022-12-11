import Link from 'next/link';

interface BottombarProps {}

const BottombarLayout: React.FC<BottombarProps> = () => {
  return (
    <nav>
      <Link href="/calendar">Calendar</Link>
      <Link href="/weather">Weather</Link>
      <Link href="/clock">Clock</Link>
    </nav>
  );
};

export default BottombarLayout;
