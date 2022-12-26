import { useState } from 'react';
import AppWindowWrapper from '../utility/AppWindowWrapper';
import CalculatorButtons from './CalculatorButtons';

const CalculatorApp: React.FC = () => {
  const [prev, setPrev] = useState('');
  const [curr, setCurr] = useState('0');
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
        <div className="grid grid-cols-1 grid-rows-2 gap-1 m-2 cursor-default content-center">
          <p className="col-span-full text-right pr-4 h-10 text-gray-400 flex items-center place-content-end  mt-3">
            {prev}
          </p>
          <p className="col-span-full text-right pr-4 h-10 text-gray-400 flex items-center place-content-end ">
            {curr}
          </p>
          <div className="grid grid-cols-4 grid-rows-5 gap-1 mb-2">
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
