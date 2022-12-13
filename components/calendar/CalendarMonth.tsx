import { Dispatch, SetStateAction, useState } from 'react';
import TodoApp from '../todo/TodoApp';
import { createMonthArray, toIntlDateFormat } from '../utility/functions';

interface CalendarMonthProps {
  monthName: string;
  index: number;
  weekdays: string[];
  daysInMonth: number;
  year: number;
  setYear: Dispatch<SetStateAction<number>>;
  locale: string;
  todoDate: string;
  setTodoDate: Dispatch<SetStateAction<string>>;
}

const CalendarMonth: React.FC<CalendarMonthProps> = ({
  monthName,
  index,
  weekdays,
  daysInMonth,
  year,
  locale,
  setYear,
  todoDate,
  setTodoDate,
}) => {
  const daysPerMonthArray = createMonthArray(daysInMonth, index, year, locale);
  const today = new Date().getDate();
  const [todoList, setTodoList] = useState(['Milk', 'Egg', 'Bread']);

  const handleClick = (val: number) => {
    setYear(year + val);
  };

  const handleClickDay = (e: any): void => {
    let month = Number(e.target.value);
    if (month === 0) month = new Date().getMonth() + 1;
    const day = Number(e.target.textContent);
    const date = new Date(year, month - 1, day).toISOString();
    setTodoDate(toIntlDateFormat(locale, date));
  };

  return (
    <div
      className={
        'px-4 pt-16 border-2 border-orange-100 ' +
        (index === 0 ? ' col-span-2 row-span-3 bg-stone-200' : '')
      }
    >
      {index === 0 ? (
        <div className="flex justify-center pb-12 gap-2 text-xl">
          <button
            className=" px-4 text-xs h-7 hover:bg-gray-100"
            onClick={() => handleClick(-1)}
          >
            -
          </button>
          <p>{year}</p>
          <button
            className=" px-4 text-xs h-7 hover:bg-gray-100"
            onClick={() => handleClick(+1)}
          >
            +
          </button>
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
      <div className="grid grid-cols-7 grid-rows-6 place-items-center text-xxs">
        {daysPerMonthArray.map((day, ind) => {
          return (
            <button
              key={monthName + day + ind}
              value={index}
              className={
                '' +
                (index === 0 && day === today ? 'text-red-600 font-bold' : '')
              }
              onClick={(e) => handleClickDay(e)}
            >
              {day}
            </button>
          );
        })}
      </div>
      {index === 0 ? (
        <div className="pt-4">
          <TodoApp />
          <div className="pb-2 flex justify-center underline ">
            <p>{todoDate}</p>
          </div>
          {todoList.map((todo) => {
            return <div key={todo}> {todo} </div>;
          })}
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default CalendarMonth;
