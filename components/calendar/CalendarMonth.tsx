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
      className={'' + (index === 0 ? 'text-red-500 col-span-2 row-span-4' : '')}
    >
      <div className="text-2xl">{monthName}</div>
      <div className="flex gap-1">
        {weekdays.map((day) => {
          return <div key={day}>{day}</div>;
        })}
      </div>
      <div className="grid grid-cols-7 grid-rows-6">
        {daysPerMonthArray.map((day) => {
          return <div key={monthName + day + index}>{day}</div>;
        })}
      </div>
    </div>
  );
};

export default CalendarMonth;
