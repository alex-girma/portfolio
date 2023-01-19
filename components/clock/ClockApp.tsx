import React, { useEffect, useState } from 'react';
import AppWindowWrapper from '../utility/AppWindowWrapper';
import { toIntlDateFormat } from '../utility/functions';

//TODO: add remove button for alarms

const ClockApp = () => {
  const [locale, setLocale] = useState<string>('en-US');
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);
  const [alarms, setAlarms] = useState<string[]>([]);
  const [alarmBoolean, setAlarmBoolean] = useState<boolean[]>([]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setSecond(new Date().getSeconds());
      setMinute(new Date().getMinutes());
      setHour(new Date().getHours());
    }, 1000);
    return () => clearTimeout(timer);
  }, [second]);
  useEffect(() => {
    setLocale(navigator.language);
  }, [locale]);

  useEffect(() => {
    if (!alarms.length) return;
    alarms.forEach((element, ind) => {
      const alarm = alarms[ind].replace(/\s/g, '');
      const h = String(new Date().getHours()).padStart(2, '0');
      const m = String(new Date().getMinutes()).padStart(2, '0');
      const s = String(new Date().getSeconds()).padStart(2, '0');
      const now = `${h}:${m}:${s}`;
      const startAlarm =
        new Date('1970-01-01T' + alarm).getTime() -
        new Date('1970-01-01T' + now).getTime();
      if (startAlarm <= 0) return;
      const alarmTimer = setTimeout(() => {
        const tempBoolean = [...alarmBoolean];
        tempBoolean[ind] = true;
        setAlarmBoolean(tempBoolean);
      }, startAlarm);
      return () => clearTimeout(alarmTimer);
    });
  }, [alarms, alarmBoolean]);

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    const h = e.currentTarget.childNodes[0] as HTMLInputElement;
    const m = e.currentTarget.childNodes[2] as HTMLInputElement;
    const s = e.currentTarget.childNodes[4] as HTMLInputElement;
    if (h.value === '' || m.value === '' || s.value === '') return;
    const alarm = `${h.value.padStart(2, '0')} : ${m.value.padStart(
      2,
      '0'
    )} : ${s.value.padStart(2, '0')}`;
    const tempAlarms = [...alarms, alarm];
    const tempBoolean = [...alarmBoolean, false];
    setAlarms(tempAlarms);
    setAlarmBoolean(tempBoolean);
  };

  const handleDel = (ind: number) => {
    const tempAlarms = [...alarms];
    tempAlarms.splice(ind, 1);
    const tempBoolean = [...alarmBoolean];
    tempBoolean.splice(ind, 1);
    setAlarms(tempAlarms);
    setAlarmBoolean(tempBoolean);
  };
  return (
    <AppWindowWrapper>
      <div className="flex flex-col items-center gap-6 p-5">
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
              style={{ transform: ` rotate(${second * 6}deg)` }}
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
          <p>
            {new Date()
              .toLocaleTimeString(locale, { hour: '2-digit', hour12: true })
              .slice(0, 2)}{' '}
            :
          </p>
          <p>
            {new Date()
              .toLocaleTimeString(locale, { minute: '2-digit' })
              .padStart(2, '0')}{' '}
            :{' '}
          </p>
          <p>
            {new Date().toLocaleTimeString(locale, { hour12: false }).slice(-2)}
          </p>
          <p>
            {new Date().toLocaleTimeString(locale, { hour12: true }).slice(-2)}
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          <p className="py-2">Alarms</p>
          <form onSubmit={handleSubmit} className="pb-2">
            <input
              placeholder="00"
              type="number"
              min="0"
              max="23"
              className="appearance-none w-12 text-center bg-slate-50 text-gray-700 caret-orange-500 text-base border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-200"
            ></input>
            :
            <input
              placeholder="00"
              type="number"
              min="0"
              max="59"
              className="appearance-none w-12 text-center bg-slate-50 text-gray-700 caret-orange-500 text-base border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-200"
            ></input>
            :
            <input
              placeholder="00"
              type="number"
              min="0"
              max="59"
              className="appearance-none w-12 text-center bg-slate-50 text-gray-700 caret-orange-500 text-base border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-200"
            ></input>
            <button
              type="submit"
              className="bg-orange-600 hover:bg-orange-500 text-white text-sm px-3 ml-2 rounded transition duration-200"
            >
              Add
            </button>
          </form>
          {alarms.map((alarm, ind) => {
            return (
              <div
                key={alarm + ind}
                className="flex flex-row justify-center items-center w-full pb-2 "
              >
                <div
                  className={`border-b-4 border-transparent ${
                    alarmBoolean[ind] ? 'border1' : ''
                  }`}
                >
                  {alarm}
                </div>
                <button
                  onClick={() => handleDel(ind)}
                  type="submit"
                  className="bg-orange-600 hover:bg-orange-500 text-white text-sm px-3 ml-7 rounded transition duration-200 "
                >
                  Del
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </AppWindowWrapper>
  );
};

export default ClockApp;
