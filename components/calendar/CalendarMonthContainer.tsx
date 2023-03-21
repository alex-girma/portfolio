import { useEffect, useState } from 'react';
import { createDaysInMonthArray, getWeekdayNames } from '../utility/functions';
import CalendarDaysContainer from './CalendarDaysContainer';
import CalendarWeekContainer from './CalendarWeekContainer';

interface CalendarMonthContainerProps {
  year: number;
  index: number;
  locale: string;
  monthName: string;
  highlightTodoDays: boolean;
  setTodoDate: React.Dispatch<React.SetStateAction<string>>;
}

const CalendarMonthContainer = ({
  monthName,
  locale,
  year,
  index,
  setTodoDate,
  highlightTodoDays,
}: CalendarMonthContainerProps) => {
  const [weekdayNames, setWeekdayNames] = useState<string[]>([]);
  const [daysInMonthArray, setDaysInMonthArray] = useState<string[]>([]);
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  useEffect(() => {
    console.log('test');
    setWeekdayNames(getWeekdayNames(locale));
    setDaysInMonthArray(createDaysInMonthArray(locale, index, year));
  }, [year, locale, index]);

  const highlichtMonthClass =
    index === currentMonth && year === currentYear ? ' text-blue-500' : '';

  return (
    <div className="px-4 pt-16 border-2 border-orange-100 hidden md:block">
      <div
        className={
          'text-xl pb-1 text-orange-700 border-b-2 mb-1 border-orange-100' +
          highlichtMonthClass
        }
      >
        {monthName}
      </div>
      <div className="flex gap-1 justify-around text-xxxs">
        {weekdayNames.map((day, ind) => {
          return <CalendarWeekContainer day={day} ind={ind} key={day} />;
        })}
      </div>
      <div className="grid grid-cols-7 grid-rows-6 place-items-center text-xxs">
        {daysInMonthArray.map((day, ind) => {
          return (
            <CalendarDaysContainer
              key={monthName + day + ind}
              day={day}
              year={year}
              index={index}
              locale={locale}
              setTodoDate={setTodoDate}
              highlightTodoDays={highlightTodoDays}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CalendarMonthContainer;
