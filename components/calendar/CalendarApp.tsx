import { useEffect, useState } from 'react';

const CalendarApp: React.FC = () => {
  const [monthNames, setMonthNames] = useState([]);

  useEffect(() => {
    const locale = navigator.language ?? 'en-US';
    // get name of each month depending on the language of the user
    const months: any = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((month) =>
      new Intl.DateTimeFormat(locale, { month: 'long' }).format(
        new Date(2022, month, 1)
      )
    );
    setMonthNames(months);
  }, []);
  return <div>{monthNames[0]}</div>;
};

export default CalendarApp;
