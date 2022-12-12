import { useEffect, useState } from 'react';

const CalendarTopBar: React.FC = () => {
  const [date, setDate] = useState('');

  useEffect(() => {
    const locale = navigator.language ?? 'en-US';
    const timer = setTimeout(
      () => setDate(new Date().toLocaleDateString(locale)),
      1000
    );
    return () => clearTimeout(timer);
  });

  return <div>{date}</div>;
};

export default CalendarTopBar;
