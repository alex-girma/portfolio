import Head from 'next/head';
import { useEffect, useState } from 'react';
import AppWindowWrapper from '../utility/AppWindowWrapper';
import {
  getDaysInMonth,
  getMonthNames,
  getWeekdayNames,
  toIntlDateFormat,
} from '../utility/functions';
import CalendarMonthContainer from './CalendarMonthContainer';

const CalendarApp: React.FC = () => {
  const [monthNames, setMonthNames] = useState<string[]>([]);
  const [weekdayNames, setWeekdayNames] = useState<string[]>([]);
  const [daysInMonth, setDaysInMonth] = useState<number[]>([]);
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [locale, setLocale] = useState<string>('en-US');
  const [todoDate, setTodoDate] = useState(
    toIntlDateFormat(locale, new Date())
  ); // todo date to display

  useEffect(() => {
    setLocale(navigator.language);

    setMonthNames(getMonthNames(locale));

    setWeekdayNames(getWeekdayNames(locale));

    setDaysInMonth(getDaysInMonth());
  }, [locale]);

  return (
    <>
      <Head>
        <title>Calendar</title>
      </Head>
      <AppWindowWrapper>
        <div className="grid grid-cols-6 grid-rows-3 gap-2 text-xxs uppercase cursor-default monthdiv p-1">
          {monthNames.map((monthName, index) => {
            return (
              <CalendarMonthContainer
                key={monthName + index}
                monthName={monthName}
                index={index}
                weekdays={weekdayNames}
                daysInMonth={daysInMonth[index]}
                year={year} /* prop for corresponding month */
                setYear={setYear}
                locale={locale}
                todoDate={todoDate}
                setTodoDate={setTodoDate}
              />
            );
          })}
        </div>
      </AppWindowWrapper>
    </>
  );
};

export default CalendarApp;
