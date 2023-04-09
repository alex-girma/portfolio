import Head from 'next/head';
import { useEffect, useState } from 'react';
import TodoApp from '../todo/TodoApp';
import AppWindowWrapper from '../utility/AppWindowWrapper';
import { getMonthNames, toIntlDateFormat } from '../utility/functions';
import CalendarMonthContainer from './CalendarMonthContainer';
import CalendarYear from './CalendarYear';

const CalendarApp = () => {
  const [locale, setLocale] = useState('en-US');
  const [monthNames, setMonthNames] = useState<string[]>([]);
  const [year, setYear] = useState(new Date().getFullYear());
  const [todoDate, setTodoDate] = useState<string>('');
  const [highlightTodoDays, setHighlightTodoDays] = useState(false);

  useEffect(() => {
    setLocale(navigator.language);
    setTodoDate(toIntlDateFormat(locale, new Date()));
    setMonthNames(getMonthNames(locale));
  }, [locale]);

  return (
    <>
      <Head>
        <title>Calendar</title>
      </Head>
      <AppWindowWrapper>
        <CalendarYear year={year} setYear={setYear} />
        <div className="monthdiv grid cursor-default grid-cols-6 grid-rows-3 gap-2 p-1 text-xxs uppercase">
          <div className="col-span-6 row-span-3 bg-stone-200 px-3 pt-4 xs:block md:col-span-2 md:row-span-3">
            <TodoApp
              todoDate={todoDate}
              highlightTodoDays={highlightTodoDays}
              setHighlightTodoDays={setHighlightTodoDays}
            />
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
                highlightTodoDays={highlightTodoDays}
              />
            );
          })}
        </div>
      </AppWindowWrapper>
    </>
  );
};

export default CalendarApp;
