import { useEffect, useState } from 'react';
import { toIntlTimeFormat } from '../utility/functions';

const ClockAppTopBar = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const locale = navigator.language || 'en-US';
    // to avoid showing empty time on screen because of the 1s delay
    if (time === '') setTime(toIntlTimeFormat(locale, new Date()));
    const timer = setTimeout(
      () => setTime(toIntlTimeFormat(locale, new Date())),
      1000
    );
    return () => clearTimeout(timer);
  }, [time]);

  return <div>{time}</div>;
};

export default ClockAppTopBar;
