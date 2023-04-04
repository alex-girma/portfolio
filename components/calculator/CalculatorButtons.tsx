import { Dispatch, SetStateAction } from 'react';

interface CalulatorProps {
  digit: string;
  prev: string;
  curr: string;
  setCurr: Dispatch<SetStateAction<string>>;
  setPrev: Dispatch<SetStateAction<string>>;
}

const CalculatorButtons = ({
  digit, // pressed key
  setCurr,
  setPrev,
  prev,
  curr,
}: CalulatorProps) => {
  const operator = ['+', '-', 'x', '÷', '='];
  const handleClick = () => {
    // Guardes
    if (digit === '±' && !curr.includes('-')) return setCurr('-' + curr); // positive or negativ numbers
    if (digit === '±' && curr.includes('-')) return setCurr(curr.slice(1));
    if (digit === 'c') return [setCurr('0'), setPrev('')];
    if (digit === 'ce') return setCurr('0');
    if (digit === 'del') return setCurr(curr.slice(0, -1));
    // Calculator
    const calculate = (first: number, second: number, operation: string) => {
      if (operation === '=') return first;
      if (operation === '+') return first + second;
      if (operation === '-') return first - second;
      if (operation === 'x') return first * second;
      if (operation === '÷') return first / second;
    };
    if (operator.includes(digit)) {
      setPrev(curr + digit);
      setCurr('0');
      if (prev === '') return;
      const result = calculate(
        Number(prev.slice(0, -1)),
        Number(curr),
        prev.slice(-1)
      );
      return setPrev(String(result) + digit);
    }
    // remove leading 0 when not decimal point
    if (curr === '0' && digit !== '.') return setCurr('' + digit);
    if (curr === '-0' && digit !== '.') return setCurr('-' + digit);
    // allow only one period(.)
    if (curr.includes('.') && digit === '.') return setCurr(curr);

    setCurr(curr + digit);
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
