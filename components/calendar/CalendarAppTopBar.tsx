import { useEffect, useState } from 'react';

const CalendarAppTopBar: React.FC = () => {
  const [date, setDate] = useState('');

  useEffect(() => {
    const locale = navigator.language ?? 'en-US';
    setDate(new Date().toLocaleDateString(locale));
  }, []);

  return <div>{date}</div>;
};

export default CalendarAppTopBar;
