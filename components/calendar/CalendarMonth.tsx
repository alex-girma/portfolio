import { createMonthArray } from '../utility/functions';

interface CalendarMonthProps {
  monthName: string;
  index: number;
  weekdays: string[];
  daysInMonth: number;
  year: number;
}

const CalendarMonth: React.FC<CalendarMonthProps> = ({
  monthName,
  index,
  weekdays,
  daysInMonth,
  year,
}) => {
  const daysPerMonthArray = createMonthArray(daysInMonth, monthName, year);

  return (
    <div
      className={
        'px-6 pt-24 border-2 border-orange-100 ' +
        (index === 0 ? ' col-span-2 row-span-3 bg-stone-200' : '')
      }
    >
      <div className="text-2xl pb-1 text-orange-700 border-b-2 mb-1 border-orange-100">
        {monthName}
      </div>
      <div className="flex gap-1 justify-around text-xxxs">
        {weekdays.map((day) => {
          return (
            <div
              key={day}
              className={'' + (day === 'Sun' ? 'text-orange-700' : '')}
            >
              {day}
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-7 grid-rows-6 place-items-center">
        {daysPerMonthArray.map((day, index) => {
          return <div key={monthName + day + index}>{day}</div>;
        })}
      </div>
      {index === 0 ? <input type="text" /> : ''}
    </div>
  );
};

export default CalendarMonth;
