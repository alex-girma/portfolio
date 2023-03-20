import { useEffect, useState } from 'react';

const CalendarAppTopBar: React.FC = () => {
  const [date, setDate] = useState('');

  useEffect(() => {
    // this needs to be inside useEffect because navigator will be undefined outside.
    // windows and navigator are not defined on server. wrapp them inside useEffect to run them on the client side
    const locale = navigator.language ?? 'en-US';
    setDate(new Date().toLocaleDateString(locale));
  }, []);

  return <div>{date}</div>;
};

export default CalendarAppTopBar;
