interface CalendarDaysContainerProps {
  day: string;
}

const CalendarDaysContainer = ({ day }: CalendarDaysContainerProps) => {
  return <button>{day}</button>;
};

export default CalendarDaysContainer;
