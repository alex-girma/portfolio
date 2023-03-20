interface CalendarWeekContainerProps {
  day: string;
  ind: number;
}

const CalendarWeekContainer = ({ day, ind }: CalendarWeekContainerProps) => {
  return <div className={'' + (ind === 0 ? 'text-orange-700' : '')}>{day}</div>;
};

export default CalendarWeekContainer;
