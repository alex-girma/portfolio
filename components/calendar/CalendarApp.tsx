import Head from 'next/head';
import { useEffect, useState } from 'react';
import TodoApp from '../todo/TodoApp';
import AppWindowWrapper from '../utility/AppWindowWrapper';
import {
  getMonthName,
  getMonthNames,
  toIntlDateFormat,
} from '../utility/functions';
import CalendarMonthContainer from './CalendarMonthContainer';
import CalendarYear from './CalendarYear';
import CalendarMonth from './CalendarMonth';

const CalendarApp = () => {
  const [locale, setLocale] = useState('en-US');
  const [monthNames, setMonthNames] = useState<string[]>([]);
  const [year, setYear] = useState(new Date().getFullYear());
  const [todoDate, setTodoDate] = useState<string>('');
  const [highlightTodoDays, setHighlightTodoDays] = useState(false);
  const [currentMonthName, setCurrentMonthName] = useState('');
  const [monthIndex, setMonthIndex] = useState(new Date().getMonth());

  useEffect(() => {
    setLocale(navigator.language);
    setTodoDate(toIntlDateFormat(locale, new Date()));
    setMonthNames(getMonthNames(locale));
    setCurrentMonthName(getMonthName(locale, monthIndex));
  }, [locale, monthIndex]);

  return (
    <>
      <Head>
        <title>Calendar</title>
      </Head>
      <AppWindowWrapper>
        <CalendarYear year={year} setYear={setYear} />
        <div className="grid cursor-default grid-cols-3 gap-2 p-1 text-xxs uppercase">
          <div className=" col-span-3 bg-stone-200 px-3 pt-4 md:col-span-1">
            <TodoApp
              todoDate={todoDate}
              highlightTodoDays={highlightTodoDays}
              setHighlightTodoDays={setHighlightTodoDays}
            />
            <CalendarMonth
              index={monthIndex}
              setMonthIndex={setMonthIndex}
              currentMonthName={currentMonthName}
            />
            <div>
              <CalendarMonthContainer
                key={'currentMonth'}
                monthName={currentMonthName}
                locale={locale}
                year={year}
                index={new Date().getMonth()}
                setTodoDate={setTodoDate}
                highlightTodoDays={highlightTodoDays}
              />
            </div>
          </div>
          <div className=" hidden cursor-default grid-cols-4 grid-rows-3 gap-2 md:col-span-2 md:grid">
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
        </div>
      </AppWindowWrapper>
    </>
  );
};

export default CalendarApp;
