interface CalendarWeekContainerProps {
  day: string;
  ind: number;
}

const CalendarWeekContainer: React.FC<CalendarWeekContainerProps> = ({
  day,
  ind,
}) => {
  console.log(day);
  return <div className={'' + (ind === 0 ? 'text-orange-700' : '')}>{day}</div>;
};

export default CalendarWeekContainer;
