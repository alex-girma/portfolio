import { useEffect, useState } from 'react';

const CalendarAppTopBar: React.FC = () => {
  const [date, setDate] = useState('');

  useEffect(() => {
    const locale = navigator.language ?? 'en-US';
    const timer = setTimeout(() =>
      setDate(new Date().toLocaleDateString(locale))
    );
    return () => clearTimeout(timer);
  });

  return <div>{date}</div>;
};

export default CalendarAppTopBar;
