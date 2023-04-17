import { Dispatch, SetStateAction, useState } from 'react';

export interface CalendarMonthProps {
  year: number;
  index: number;
  currentMonthName: string;
  setYear: Dispatch<SetStateAction<number>>;
  setMonthIndex: Dispatch<SetStateAction<number>>;
}

const CalendarMonth = ({
  year,
  index,
  currentMonthName,
  setMonthIndex,
  setYear,
}: CalendarMonthProps) => {
  const test1 = () => {
    if (index < 1) {
      setYear(year - 1);
      setMonthIndex(11);
      return;
    }
    setMonthIndex(index - 1);
  };
  const test = () => {
    if (index > 10) {
      setYear(year + 1);
      setMonthIndex(0);
      return;
    }
    setMonthIndex(index + 1);
  };
  return (
    <div className="text-l flex justify-center gap-2 py-2">
      <button className=" h-6 px-3 text-xs hover:bg-gray-100" onClick={test1}>
        -
      </button>
      <p>
        {currentMonthName} - {year}
      </p>
      <button
        className=" h-6 px-3 text-xs hover:bg-gray-100"
        // onClick={() => setMonthIndex(index + 1)}
        onClick={test}
      >
        +
      </button>
    </div>
  );
};

export default CalendarMonth;
