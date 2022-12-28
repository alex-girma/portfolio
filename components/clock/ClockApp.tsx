import { useEffect, useState } from 'react';
import AppWindowWrapper from '../utility/AppWindowWrapper';
import { toIntlDateFormat } from '../utility/functions';

const ClockApp = () => {
  const [locale, setLocale] = useState<string>('en-US');
  const [secondDeg, setSecondDeg] = useState(0);
  const [minuteDeg, setMinuteDeg] = useState(0);
  const [hourDeg, setHourDeg] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      const now = new Date();
      setSecondDeg((now.getSeconds() + 1) * 6);
      setMinuteDeg(now.getMinutes() * 6);
      setHourDeg(
        now.getHours() * 30 +
          ((30 / 60) * now.getMinutes() + (30 / 60 / 60) * now.getSeconds())
      );
    }, 1000);
    return () => clearTimeout(timer);
  }, [secondDeg]);
  useEffect(() => {
    setLocale(navigator.language);
  }, []);
  return (
    <AppWindowWrapper>
      <div className="flex flex-col items-center gap-6 p-5">
        <div className="flex justify-center items-center bg-slate-300 w-64 h-64 rounded-full shadow-clock">
          <div className="relative bg-slate-50 w-h-62 rounded-full">
            <div className="absolute right-8 top-1/2 -translate-y-1/2 text-xxxs font-bold origin-left border-2 border-slate-300 p-0.5 shadow-inner">
              {toIntlDateFormat(locale, new Date())}
            </div>
            <div
              style={{ transform: `rotate(${hourDeg}deg)` }}
              className="w-1.5 h-16 bg-orange-500 position-hands shadow-hour z-20"
            ></div>
            <div
              style={{ transform: `rotate(${minuteDeg}deg)` }}
              className="w-1.5 h-20 bg-blue-500 position-hands shadow-min z-30 duration-200 ease-out"
            ></div>
            <div
              style={{ transform: ` rotate(${secondDeg}deg)` }}
              className="w-1 h-28 bg-red-500 position-hands shadow-sec z-40 duration-100 ease-out"
            ></div>
            <div className="w-3 h-3 bg-slate-600 absolute-l-t translate-center rounded-full shadow z-50"></div>

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
