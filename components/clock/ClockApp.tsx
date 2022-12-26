import { useEffect, useState } from 'react';
import AppWindowWrapper from '../utility/AppWindowWrapper';
import { toIntlDateFormat } from '../utility/functions';

const ClockApp = () => {
  const [locale, setLocale] = useState<string>('en-US');

  useEffect(() => {
    setLocale(navigator.language);
  }, []);
  return (
    <AppWindowWrapper>
      <div className="flex flex-col items-center gap-6 p-5">
        <div className="bg-slate-300 w-64 h-64 rounded-full flex justify-center items-center shadow2">
          <div className="bg-slate-50 w-h-62 rounded-full relative">
            <div className="absolute right-8 top-1/2 -translate-y-1/2 text-xxxs font-bold origin-left border-2 border-slate-300 p-0.5 shadow-inner">
              {toIntlDateFormat(locale, new Date())}
            </div>
            <div className="w-16 h-1.5 bg-orange-500 absolute left-1/2 top-1/2  -translate-y-1/2 rotate-12 origin-left rounded-full shadow-hour z-10"></div>
            <div className="w-20 h-1.5 bg-blue-500 absolute left-1/2 top-1/2  -translate-y-1/2  rotate-45 origin-left rounded-full shadow-min z-20"></div>
            <div className="w-28 h-1 bg-red-500 absolute left-1/2 top-1/2 -translate-x-4 -translate-y-1/2 rotate-90 sec-t-origin rounded-full shadow-sec z-30"></div>
            <div className="w-3 h-3 bg-slate-600 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full shadow z-40"></div>

            <div className="absolute left-1/2 top-5 -translate-x-1/2 -translate-y-1/2 font-bold text-gray-500">
              12
            </div>
            <div className="absolute right-3 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-gray-500">
              3
            </div>
            <div className="absolute left-1/2 -bottom-1 -translate-x-1/2 -translate-y-1/2 font-bold text-gray-500">
              6
            </div>
            <div className="absolute left-5 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-gray-500">
              9
            </div>

            <div className="w-3 h-1 bg-slate-500 absolute left-1/2 top-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full shadow rotate-90"></div>
            <div className="w-62 h-0.5 bg-transparent absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-30 rounded-full flex justify-between">
              <div className="w-2 h-full bg-slate-500"></div>
              <div className="w-2 h-full bg-slate-500"></div>
            </div>
            <div className="w-62 h-0.5 bg-transparent absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-60 rounded-full flex justify-between">
              <div className="w-2 h-full bg-slate-500"></div>
              <div className="w-2 h-full bg-slate-500"></div>
            </div>
            <div className="w-3 h-1 bg-slate-500 absolute top-1/2 -right-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full shadow "></div>
            <div className="w-62 h-0.5 bg-transparent absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-120 rounded-full flex justify-between">
              <div className="w-2 h-full bg-slate-500"></div>
              <div className="w-2 h-full bg-slate-500"></div>
            </div>
            <div className="w-62 h-0.5 bg-transparent absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-160 rounded-full flex justify-between">
              <div className="w-2 h-full bg-slate-500"></div>
              <div className="w-2 h-full bg-slate-500"></div>
            </div>
            <div className="w-3 h-1 bg-slate-500 absolute left-1/2 bottom-0.5 -translate-x-1/2 -translate-y-1/2 rounded-full shadow rotate-90"></div>
            <div className="w-3 h-1 bg-slate-500 absolute top-1/2 left-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full shadow "></div>
          </div>
        </div>
        <div className="">Time</div>
        <div className="flex justify-between w-full">
          <div>Alarm</div>
          <div>Time</div>
          <div>Stopwatch</div>
        </div>
      </div>
    </AppWindowWrapper>
  );
};

export default ClockApp;
