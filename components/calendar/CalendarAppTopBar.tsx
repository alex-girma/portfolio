import { useEffect, useState } from 'react';

const CalendarAppTopBar = () => {
  const [date, setDate] = useState('');

  useEffect(() => {
    const locale = navigator.language ?? 'en-US';
    setDate(
      new Date().toLocaleDateString(locale, {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
      })
    );
  }, []);

  return <div>{date}</div>;
};

export default CalendarAppTopBar;
