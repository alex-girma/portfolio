import { useEffect, useState } from 'react';

const ClockTopBar: React.FC = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const locale = navigator.language ?? 'en-US';
    const timer = setTimeout(
      () => setTime(new Date().toLocaleTimeString(locale, { hour12: false })),
      1000
    );
    return () => clearTimeout(timer);
  });

  return <div>{time}</div>;
};

export default ClockTopBar;
