import { Dispatch, SetStateAction } from 'react';
import { createMonthArray } from '../utility/functions';

interface CalendarMonthProps {
  monthName: string;
  index: number;
  weekdays: string[];
  daysInMonth: number;
  year: number;
  setYear: Dispatch<SetStateAction<number>>;
  locale: string;
}

const CalendarMonth: React.FC<CalendarMonthProps> = ({
  monthName,
  index,
  weekdays,
  daysInMonth,
  year,
  locale,
  setYear,
}) => {
  const daysPerMonthArray = createMonthArray(daysInMonth, index, year, locale);
  const handleClick = (val: number) => {
    setYear(year + val);
  };

  return (
    <div
      className={
        'px-4 pt-20 border-2 border-orange-100 ' +
        (index === 0 ? ' col-span-2 row-span-3 bg-stone-200' : '')
      }
    >
      {index === 0 ? (
        <div className="flex justify-center pb-20 gap-2 text-xl">
          <button onClick={() => handleClick(-1)}>-</button>
          <p>{year}</p>
          <button onClick={() => handleClick(+1)}>+</button>
        </div>
      ) : (
        ''
      )}
      <div className="text-2xl pb-1 text-orange-700 border-b-2 mb-1 border-orange-100">
        {monthName}
      </div>
      <div className="flex gap-1 justify-around text-xxxs">
        {weekdays.map((day, index) => {
          return (
            <div
              key={day}
              className={'' + (index === 0 ? 'text-orange-700' : '')}
            >
              {day}
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-7 grid-rows-6 place-items-center text-xxxs">
        {daysPerMonthArray.map((day, index) => {
          return <div key={monthName + day + index}>{day}</div>;
        })}
      </div>
      {index === 0 ? <input type="text" /> : ''}
    </div>
  );
};

export default CalendarMonth;
