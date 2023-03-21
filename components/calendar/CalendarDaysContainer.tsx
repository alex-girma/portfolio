import { useEffect, useState } from 'react';

interface CalendarDaysContainerProps {
  day: string;
  index: number;
  year: number;
  todoDate: string;
  setTodoDate: any;
}

const CalendarDaysContainer = ({
  day,
  index,
  year,
  setTodoDate,
  todoDate,
}: CalendarDaysContainerProps) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const today = String(new Date().getDate());
  const [alltodoList, setAllTotoList] = useState({});
  const date = `${index + 1}.${day}.${year}`;

  const handleClickedDay = () => {
    setTodoDate(date);
  };

  const getTodoListFromStorage = () => {
    if (!localStorage.getItem('allTodoList')) return;
    const List = JSON.parse(localStorage.getItem('allTodoList') || '');
    return setAllTotoList(List);
  };

  // const highlightTodoDays = () => {
  //   if (!localStorage.getItem('allTodoList')) return;
  //   const allTodoList = JSON.parse(localStorage.getItem('allTodoList') || '');
  //   const date = `${index + 1}.${day}.${year}`;
  //   if (date in allTodoList && allTodoList[date].todos.length)
  //     return ' underline text-blue-600 ';
  // };
  useEffect(() => {
    getTodoListFromStorage();
  }, [todoDate]);

  const highlightTodoDays = alltodoList[date] ? ' text-red-600 ' : '';

  const highlightCurrDayClass =
    index === currentMonth && day === today && currentYear === year
      ? 'text-red-600 font-bold underline'
      : '';

  return (
    <button
      onClick={handleClickedDay}
      className={highlightCurrDayClass + highlightTodoDays}
    >
      {day}
    </button>
  );
};

export default CalendarDaysContainer;
