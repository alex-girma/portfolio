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
      <div className="shadow-clock flex h-64 w-64 items-center justify-center rounded-full bg-slate-500">
        <div className="relative h-62 w-62 rounded-full  bg-slate-50">
          <div className="absolute right-8 top-1/2 origin-left -translate-y-1/2 border-2 border-slate-300 p-0.5 text-xxxs font-bold shadow-inner">
            {toIntlDateFormat(locale, new Date())}
          </div>
          <div
            style={{
              transform: `rotate(${
                hour * 30 + ((30 / 60) * minute + (30 / 60 / 60) * second)
              }deg)`,
            }}
            className="position-hands shadow-hour z-20 h-16 w-1.5 bg-orange-500"
          ></div>
          <div
            style={{ transform: `rotate(${minute * 6}deg)` }}
            className="position-hands shadow-min z-30 h-20 w-1.5 bg-blue-500 ease-out"
          ></div>
          <div
            style={{ transform: `rotate(${second * 6}deg)` }}
            className="position-hands shadow-sec z-40 h-28 w-1 bg-red-500 ease-out"
          ></div>
          <div className="absolute-l-t z-50 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-600 shadow"></div>

          <div className="position-hours absolute left-1/2 top-5">12</div>
          <div className="position-hours absolute right-3 top-1/2">3</div>
          <div className="position-hours absolute left-1/2 -bottom-1">6</div>
          <div className="position-hours absolute left-5 top-1/2">9</div>

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
      <div className="flex gap-2 rounded bg-slate-900 py-2 px-6 text-white shadow">
        <p>{toIntlTimeFormat(locale, new Date())}</p>
      </div>
    </>
  );
};

export default AnalogDigitalClock;
