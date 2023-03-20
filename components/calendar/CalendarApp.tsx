import Head from 'next/head';
import { useEffect, useState } from 'react';
import AppWindowWrapper from '../utility/AppWindowWrapper';
import { getMonthNames } from '../utility/functions';
import CalendarMonthContainer from './CalendarMonthContainer';
import CalendarYear from './CalendarYear';

const CalendarApp: React.FC = () => {
  const [locale, setLocale] = useState<string>('en-US');
  const [monthNames, setMonthNames] = useState<string[]>([]);
  const [year, setYear] = useState<number>(new Date().getFullYear());
  // const [todoDate, setTodoDate] = useState(
  //   toIntlDateFormat(locale, new Date())
  // ); // todo date to display

  useEffect(() => {
    setLocale(navigator.language);
    setMonthNames(getMonthNames(locale));
  }, [locale]);

  return (
    <>
      <Head>
        <title>Calendar</title>
      </Head>
      <AppWindowWrapper>
        <CalendarYear year={year} setYear={setYear} />
        <div className="grid grid-cols-6 grid-rows-3 gap-2 text-xxs uppercase cursor-default monthdiv p-1">
          {monthNames.map((monthName, index) => {
            return (
              <CalendarMonthContainer
                key={monthName + index}
                monthName={monthName}
                locale={locale}
                year={year}
                index={index}
                // weekdays={weekdayNames}
                // daysInMonth={daysInMonth[index]}
                // setYear={setYear}
                // todoDate={todoDate}
                // setTodoDate={setTodoDate}
              />
            );
          })}
        </div>
      </AppWindowWrapper>
    </>
  );
};

export default CalendarApp;
