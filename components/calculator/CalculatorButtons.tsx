import { Dispatch, SetStateAction } from 'react';

interface Props {
  digit: string;
  prev: string;
  curr: string;
  setCurr: Dispatch<SetStateAction<string>>;
  setPrev: Dispatch<SetStateAction<string>>;
}

const CalculatorButtons: React.FC<Props> = ({
  digit,
  setCurr,
  setPrev,
  prev,
  curr,
}) => {
  const handleClick = () => {
    setCurr(digit);
  };
  return (
    <button
      onClick={handleClick}
      className={
        'bg-white px-4 py-3 text-center rounded shadow-md hover:bg-slate-50 active:shadow-sm duration-150 cursor-default'
      }
    >
      {digit}
    </button>
  );
};

export default CalculatorButtons;
