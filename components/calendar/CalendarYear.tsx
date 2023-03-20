import { Dispatch, SetStateAction } from 'react';

export interface CalendarYearProps {
  year: number;
  setYear: Dispatch<SetStateAction<number>>;
}

const CalendarYear = ({ year, setYear }: CalendarYearProps) => {
  return (
    <div className="flex justify-center py-2 gap-2 text-l">
      <button
        className=" px-3 text-xs h-6 hover:bg-gray-100"
        onClick={() => setYear(year - 1)}
      >
        -
      </button>
      <p>{year}</p>
      <button
        className=" px-3 text-xs h-6 hover:bg-gray-100"
        onClick={() => setYear(year + 1)}
      >
        +
      </button>
    </div>
  );
};

export default CalendarYear;
