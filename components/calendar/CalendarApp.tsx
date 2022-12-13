import { useEffect, useState } from 'react';
import {
  getDaysInMonth,
  getMonthNames,
  getWeekdayNames,
} from '../utility/functions';
import CalendarMonth from './CalendarMonth';

const CalendarApp: React.FC = () => {
  const [monthNames, setMonthNames] = useState<string[]>([]);
  const [weekdayNames, setWeekdayNames] = useState<string[]>([]);
  const [daysInMonth, setDaysInMonth] = useState<number[]>([]);
  const [year, setYear] = useState<number>(2022);

  useEffect(() => {
    const locale = navigator.language ?? 'en-US';

    setMonthNames(getMonthNames(locale));

    setWeekdayNames(getWeekdayNames(locale));

    setDaysInMonth(getDaysInMonth(locale));
  }, []);

  return (
    <div className="grid grid-cols-6 grid-rows-3 gap-2 text-xxs uppercase">
      {monthNames.map((monthName, index) => {
        return (
          <CalendarMonth
            key={monthName + index}
            monthName={monthName}
            index={index}
            weekdays={weekdayNames}
            daysInMonth={daysInMonth[index]}
            year={year} /* prop for corresponding month */
          />
        );
      })}
    </div>
  );
};

export default CalendarApp;
