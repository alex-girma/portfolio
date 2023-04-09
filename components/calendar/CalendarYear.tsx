import { Dispatch, SetStateAction } from 'react';

export interface CalendarYearProps {
  year: number;
  setYear: Dispatch<SetStateAction<number>>;
}

const CalendarYear = ({ year, setYear }: CalendarYearProps) => {
  return (
    <div className="text-l flex justify-center gap-2 py-2">
      <button
        className=" h-6 px-3 text-xs hover:bg-gray-100"
        onClick={() => setYear(year - 1)}
      >
        -
      </button>
      <p>{year}</p>
      <button
        className=" h-6 px-3 text-xs hover:bg-gray-100"
        onClick={() => setYear(year + 1)}
      >
        +
      </button>
    </div>
  );
};

export default CalendarYear;
