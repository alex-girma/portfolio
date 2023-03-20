interface CalendarDaysContainerProps {
  day: string;
  index: number;
  year: number;
}

const CalendarDaysContainer = ({
  day,
  index,
  year,
}: CalendarDaysContainerProps) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();

  const today = String(new Date().getDate());
  return (
    <button
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
