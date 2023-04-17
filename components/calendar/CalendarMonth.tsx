import { Dispatch, SetStateAction } from 'react';

export interface CalendarMonthProps {
  index: number;
  currentMonthName: string;
  setMonthIndex: Dispatch<SetStateAction<number>>;
}

const CalendarMonth = ({
  index,
  currentMonthName,
  setMonthIndex,
}: CalendarMonthProps) => {
  return (
    <div className="text-l flex justify-center gap-2 py-2">
      <button
        className=" h-6 px-3 text-xs hover:bg-gray-100"
        onClick={() => setMonthIndex(index - 1)}
      >
        -
      </button>
      <p>{currentMonthName}</p>
      <button
        className=" h-6 px-3 text-xs hover:bg-gray-100"
        onClick={() => setMonthIndex(index + 1)}
      >
        +
      </button>
    </div>
  );
};

export default CalendarMonth;
