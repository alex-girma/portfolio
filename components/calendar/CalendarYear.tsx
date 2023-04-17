import { Dispatch, SetStateAction } from 'react';

export interface CalendarYearProps {
  year: number;
  setYear: Dispatch<SetStateAction<number>>;
}

const CalendarYear = ({ year, setYear }: CalendarYearProps) => {
  return (
    <div className="flex justify-center gap-2 py-2 ">
      <button
        className=" h-5 px-3 text-xs text-orange-500 hover:bg-gray-100"
        onClick={() => setYear(year - 1)}
      >
        -
      </button>
      <p className="text-sm font-semibold text-orange-500">{year}</p>
      <button
        className=" h-5 px-3 text-xs text-orange-500 hover:bg-gray-100"
        onClick={() => setYear(year + 1)}
      >
        +
      </button>
    </div>
  );
};

export default CalendarYear;
