import { useEffect, useState } from 'react';
import { createDaysInMonthArray, getWeekdayNames } from '../utility/functions';
import CalendarDaysContainer from './CalendarDaysContainer';
import CalendarWeekContainer from './CalendarWeekContainer';
// import TodoApp from '../todo/TodoApp';
// import TodoList from '../todo/TodoList';
// import { createMonthArray, toIntlDateFormat } from '../utility/functions';
// import CalendarWeekContainer from './CalendarWeekContainer';

interface CalendarMonthContainerProps {
  monthName: string;
  locale: string;
  year: number;
  index: number;
  setTodoDate: any;
  todoDate: string;
  allTodoList: any;
  // weekdays: string[];
  // daysInMonth: number;
}

const CalendarMonthContainer = ({
  monthName,
  locale,
  year,
  index,
  setTodoDate,
  todoDate,
  allTodoList,
}: // weekdays,
// daysInMonth,
// setYear,
CalendarMonthContainerProps) => {
  const [weekdayNames, setWeekdayNames] = useState<string[]>([]);
  const [daysInMonthArray, setDaysInMonthArray] = useState<string[]>([]);
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  useEffect(() => {
    setWeekdayNames(getWeekdayNames(locale));
    setDaysInMonthArray(createDaysInMonthArray(locale, index, year));
  }, [year]);
  // const currYear = new Date().getFullYear();
  // const today = new Date().getDate();
  // const [allTodoList, setAllTodoList] = useState(
  //   //@ts-ignore
  //   JSON.parse(localStorage.getItem('allTodoList')) || {}
  // );

  // const handleClick = (val: number) => {
  //   setYear(year + val);
  // };

  // const handleClickDay = (e: any): void => {
  //   if (e.target.textContent === '\u00a0') return;
  //   let month = Number(index);
  //   if (month === 0) month = new Date().getMonth() + 1;
  //   const day = Number(e.target.textContent);
  //   const date = new Date(year, month - 1, day).toISOString();
  //   setTodoDate(toIntlDateFormat(locale, date));
  // };
  // useEffect(() => {
  //   const temp = { ...allTodoList };
  //   if (!(todoDate in allTodoList)) {
  //     temp[todoDate] = {
  //       todos: [],
  //       status: [],
  //     };
  //   }
  //   setAllTodoList(temp);
  //   localStorage.setItem('allTodoList', JSON.stringify(temp));
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [todoDate]);

  // const highlightTodoDays = (day: string | number) => {
  //   let month = Number(index);
  //   if (month === 0) month = new Date().getMonth() + 1;
  //   const days = Number(day);
  //   const date = new Date(year, month - 1, days).toISOString();
  //   const test = toIntlDateFormat(locale, date);

  //   if (test in allTodoList && allTodoList[test].todos.length)
  //     return ' underline text-orange-600 ';
  //   return;
  // };
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
              index={index}
              year={year}
              setTodoDate={setTodoDate}
              todoDate={todoDate}
            />
          );
        })}
      </div>
    </div>

    // <div
    //   className={
    //     'px-4 pt-16 border-2 border-orange-100 hidden md:block' +
    //     (index === 0
    //       ? ' col-span-6 row-span-3 bg-stone-200 xs:block md:col-span-2 md:row-span-3 '
    //       : '')
    //   }
    // >
    //   {index === 0 ? (
    //     <div className="flex justify-center pb-12 gap-2 text-xl">
    //       <button
    //         className=" px-4 text-xs h-7 hover:bg-gray-100"
    //         onClick={() => handleClick(-1)}
    //       >
    //         -
    //       </button>
    //       <p>{year}</p>
    //       <button
    //         className=" px-4 text-xs h-7 hover:bg-gray-100"
    //         onClick={() => handleClick(+1)}
    //       >
    //         +
    //       </button>
    //     </div>
    //   ) : (
    //     ''
    //   )}
    //   <div className="text-2xl pb-1 text-orange-700 border-b-2 mb-1 border-orange-100">
    //     {monthName}
    //   </div>
    //   <div className="flex gap-1 justify-around text-xxxs">
    //     {weekdays.map((day, ind) => {
    //       return <CalendarWeekContainer day={day} ind={ind} key={day} />;
    //     })}
    //   </div>
    //   <div className="grid grid-cols-7 grid-rows-6 place-items-center text-xxs">
    //     {daysPerMonthArray.map((day, ind) => {
    //       return (
    //         <button
    //           key={monthName + day + ind}
    //           className={
    //             '' +
    //             (index === 0 && day === today && currYear === year
    //               ? 'text-red-600 font-bold'
    //               : '') +
    //             highlightTodoDays(day)
    //           }
    //           onClick={handleClickDay}
    //         >
    //           {day}
    //         </button>
    //       );
    //     })}
    //   </div>
    //   {index === 0 ? (
    //     <div className="pt-4">
    //       <TodoApp
    //         allTodoList={allTodoList}
    //         todoList={allTodoList[todoDate] ? allTodoList[todoDate].todos : []}
    //         todoListStatus={
    //           allTodoList[todoDate] ? allTodoList[todoDate].status : []
    //         }
    //         setAllTodoList={setAllTodoList}
    //         todoDate={todoDate}
    //       />
    //       <div className="pb-2 flex justify-center underline ">
    //         <p>{todoDate}</p>
    //       </div>
    //       {allTodoList[todoDate] ? (
    //         <div>
    //           {allTodoList[todoDate].todos.map((todo: string, ind: number) => {
    //             return (
    //               <TodoList
    //                 key={todo + ind}
    //                 todo={todo}
    //                 ind={ind}
    //                 allTodoList={allTodoList}
    //                 setAllTodoList={setAllTodoList}
    //                 todoDate={todoDate}
    //               />
    //             );
    //           })}
    //         </div>
    //       ) : (
    //         <></>
    //       )}
    //     </div>
    //   ) : (
    //     ''
    //   )}
    // </div>
  );
};

export default CalendarMonthContainer;
