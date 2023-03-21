interface CalendarDaysContainerProps {
  day: string;
  index: number;
  year: number;
  setTodoDate: any;
}

const CalendarDaysContainer = ({
  day,
  index,
  year,
  setTodoDate,
}: CalendarDaysContainerProps) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const today = String(new Date().getDate());

  const handleClickedDay = () => {
    const date = `${index + 1}.${day}.${year}`;
    setTodoDate(date);
  };

  return (
    <button
      onClick={handleClickedDay}
      className={
        '' +
        (index === currentMonth && day === today && currentYear === year
          ? 'text-red-600 font-bold underline'
          : '')
      }
    >
      {day}
    </button>
  );
};

export default CalendarDaysContainer;
