import { useState } from 'react';
import AppWindowWrapper from '../utility/AppWindowWrapper';
import CalculatorButtons from './CalculatorButtons';

const CalculatorApp = () => {
  const [prev, setPrev] = useState(''); // first operand
  const [curr, setCurr] = useState('0'); // current operand beeing typed
  const digits = [
    'c',
    'ce',
    'del',
    '÷',
    '7',
    '8',
    '9',
    'x',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '±',
    '0',
    '.',
    '=',
  ];
  return (
    <div>
      <AppWindowWrapper>
        <div className="m-2 grid cursor-default grid-cols-1 grid-rows-2 content-center gap-1">
          <p className="col-span-full mt-3 flex h-10 place-content-end items-center pr-4 text-right  text-gray-400">
            {prev}
          </p>
          <p className="col-span-full flex h-10 place-content-end items-center pr-4 text-right text-gray-400 ">
            {curr}
          </p>
          <div className="mb-2 grid grid-cols-4 grid-rows-5 gap-1">
            {digits.map((digit) => {
              return (
                <CalculatorButtons
                  key={digit}
                  digit={digit}
                  setPrev={setPrev}
                  setCurr={setCurr}
                  prev={prev}
                  curr={curr}
                />
              );
            })}
          </div>
        </div>
      </AppWindowWrapper>
    </div>
  );
};

export default CalculatorApp;
