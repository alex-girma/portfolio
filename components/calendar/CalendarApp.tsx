import Head from 'next/head';
import { useEffect, useState } from 'react';
import TodoApp from '../todo/TodoApp';
import AppWindowWrapper from '../utility/AppWindowWrapper';
import { getMonthNames } from '../utility/functions';
import CalendarMonthContainer from './CalendarMonthContainer';
import CalendarYear from './CalendarYear';

const CalendarApp: React.FC = () => {
  const [locale, setLocale] = useState<string>('en-US');
  const [monthNames, setMonthNames] = useState<string[]>([]);
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [todoDate, setTodoDate] = useState<string>('1.1.2023');
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
          <div className="col-span-6 row-span-3 bg-stone-200 pt-4 px-3 xs:block md:col-span-2 md:row-span-3">
            <TodoApp todoDate={todoDate} />
          </div>
          {monthNames.map((monthName, index) => {
            return (
              <CalendarMonthContainer
                key={monthName + index}
                monthName={monthName}
                locale={locale}
                year={year}
                index={index}
                setTodoDate={setTodoDate}
                todoDate={todoDate}
                // weekdays={weekdayNames}
                // daysInMonth={daysInMonth[index]}
                // setYear={setYear}
              />
            );
          })}
        </div>
      </AppWindowWrapper>
    </>
  );
};

export default CalendarApp;
