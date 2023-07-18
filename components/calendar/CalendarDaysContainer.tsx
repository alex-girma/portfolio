import { useEffect, useState } from 'react';
import { AllTodoListProp } from '../todo/TodoApp';
import { toIntlDateFormat } from '../utility/functions';

interface CalendarDaysContainerProps {
  day: string;
  year: number;
  index: number;
  locale: string;
  highlightTodoDays: boolean;
  setTodoDate: React.Dispatch<React.SetStateAction<string>>;
}

const CalendarDaysContainer = ({
  day,
  year,
  index,
  locale,
  setTodoDate,
  highlightTodoDays,
}: CalendarDaysContainerProps) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const today = String(new Date().getDate());
  const [alltodoList, setAllTotoList] = useState<AllTodoListProp>({});
  const [testDate, setTestDate] = useState('');
  const date = `${index + 1}.${day}.${year}`;

  const handleClickedDay = () => {
    setTestDate(toIntlDateFormat(locale, new Date(date)));
    setTodoDate(toIntlDateFormat(locale, new Date(date)));
  };

  const getTodoListFromStorage = () => {
    if (!localStorage.getItem('allTodoList')) return;
    const List = JSON.parse(localStorage.getItem('allTodoList') || '');
    return setAllTotoList(List);
  };

  // rerender this component whenever todo is added to the List
  useEffect(() => {
    getTodoListFromStorage();
  }, [highlightTodoDays]);

  const highlight = alltodoList[testDate] ? ' text-red-600 ' : '';

  const highlightCurrDayClass =
    index === currentMonth && day === today && currentYear === year
      ? 'text-red-600 font-bold underline'
      : '';

  return (
    <button
      onClick={handleClickedDay}
      className={highlightCurrDayClass + highlight}
    >
      {day}
    </button>
  );
};

export default CalendarDaysContainer;
