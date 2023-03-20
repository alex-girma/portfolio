import { useEffect, useState } from 'react';

const ClockAppTopBar: React.FC = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const locale = navigator.language;
    const options: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    };
    if (time === '') setTime(new Date().toLocaleTimeString(locale, options));
    const timer = setTimeout(
      () => setTime(new Date().toLocaleTimeString(locale, options)),
      1000
    );
    return () => clearTimeout(timer);
  }, [time]);

  return <div>{time}</div>;
};

export default ClockAppTopBar;
