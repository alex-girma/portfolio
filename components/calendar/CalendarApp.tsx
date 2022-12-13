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
  const [locale, setLocale] = useState<string>('en-US');

  useEffect(() => {
    setLocale(navigator.language);

    setMonthNames(getMonthNames(locale));

    setWeekdayNames(getWeekdayNames(locale));

    setDaysInMonth(getDaysInMonth());
  }, [locale]);

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
            setYear={setYear}
            locale={locale}
          />
        );
      })}
    </div>
  );
};

export default CalendarApp;
