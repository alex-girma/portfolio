import { useEffect, useState } from 'react';

const ClockAppTopBar: React.FC = () => {
  const [time, setTime] = useState('00:00:00');

  useEffect(() => {
    const locale = navigator.language ?? 'en-US';
    const timer = setTimeout(
      () => setTime(new Date().toLocaleTimeString(locale, { hour12: false })),
      1000
    );
    return () => clearTimeout(timer);
  }, [time]);

  return <div>{time}</div>;
};

export default ClockAppTopBar;
