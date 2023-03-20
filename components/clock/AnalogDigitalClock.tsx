import { useEffect, useState } from 'react';
import { toIntlDateFormat, toIntlTimeFormat } from '../utility/functions';

const AnalogDigitalClock = () => {
  const [locale, setLocale] = useState<string>('en-US');
  const [second, setSecond] = useState(new Date().getSeconds());
  const [minute, setMinute] = useState(new Date().getMinutes());
  const [hour, setHour] = useState(new Date().getHours());

  useEffect(() => {
    setLocale(navigator.language);
    const timer = setTimeout(() => {
      setSecond(new Date().getSeconds());
      setMinute(new Date().getMinutes());
      setHour(new Date().getHours());
    }, 1000);
    return () => clearTimeout(timer);
  }, [second, locale]);

  return (
    <>
      <div className="flex justify-center items-center bg-slate-500 w-64 h-64 rounded-full shadow-clock">
        <div className="relative bg-slate-50 w-62 h-62  rounded-full">
          <div className="absolute right-8 top-1/2 -translate-y-1/2 text-xxxs font-bold origin-left border-2 border-slate-300 p-0.5 shadow-inner">
            {toIntlDateFormat(locale, new Date())}
          </div>
          <div
            style={{
              transform: `rotate(${
                hour * 30 + ((30 / 60) * minute + (30 / 60 / 60) * second)
              }deg)`,
            }}
            className="w-1.5 h-16 bg-orange-500 position-hands shadow-hour z-20"
          ></div>
          <div
            style={{ transform: `rotate(${minute * 6}deg)` }}
            className="w-1.5 h-20 bg-blue-500 position-hands shadow-min z-30 ease-out"
          ></div>
          <div
            style={{ transform: `rotate(${second * 6}deg)` }}
            className="w-1 h-28 bg-red-500 position-hands shadow-sec z-40 ease-out"
          ></div>
          <div className="w-3 h-3 bg-slate-600 absolute-l-t -translate-x-1/2 -translate-y-1/2 rounded-full shadow z-50"></div>

          <div className="absolute left-1/2 top-5 position-hours">12</div>
          <div className="absolute right-3 top-1/2 position-hours">3</div>
          <div className="absolute left-1/2 -bottom-1 position-hours">6</div>
          <div className="absolute left-5 top-1/2 position-hours">9</div>

          <div className="marks-3-6-9-12-container ">
            <div className="marks-3-6-9-12"></div>
            <div className="marks-3-6-9-12"></div>
          </div>
          <div className="marks-3-6-9-12-container  rotate-90">
            <div className="marks-3-6-9-12"></div>
            <div className="marks-3-6-9-12"></div>
          </div>
          <div className="marks-container rotate-30">
            <div className="marks"></div>
            <div className="marks"></div>
          </div>
          <div className="marks-container rotate-60">
            <div className="marks"></div>
            <div className="marks"></div>
          </div>
          <div className="marks-container rotate-120">
            <div className="marks"></div>
            <div className="marks"></div>
          </div>
          <div className="marks-container rotate-160">
            <div className="marks"></div>
            <div className="marks"></div>
          </div>
        </div>
      </div>
      <div className="flex gap-2 bg-slate-900 py-2 px-6 text-white shadow rounded">
        <p>{toIntlTimeFormat(locale, new Date())}</p>
      </div>
    </>
  );
};

export default AnalogDigitalClock;
