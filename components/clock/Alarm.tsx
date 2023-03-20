import React, { useEffect, useState } from 'react';
import { toIntlTimeFormat } from '../utility/functions';

const Alarm = () => {
  const [alarms, setAlarms] = useState<string[]>([]);
  const [alarmBoolean, setAlarmBoolean] = useState<boolean[]>([]);

  useEffect(() => {
    if (!alarms.length) return;
    alarms.forEach((element, ind) => {
      const alarm = element.replace(/\s/g, '');
      const locale = navigator.language;
      const now = toIntlTimeFormat(locale, new Date());
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

  const handleAlarmSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    const hour = e.currentTarget.childNodes[0] as HTMLInputElement;
    const minute = e.currentTarget.childNodes[2] as HTMLInputElement;
    const second = e.currentTarget.childNodes[4] as HTMLInputElement;
    if (hour.value === '' || minute.value === '' || second.value === '') return;
    const alarm = `${hour.value.padStart(2, '0')} : ${minute.value.padStart(
      2,
      '0'
    )} : ${second.value.padStart(2, '0')}`;
    const tempAlarms = [...alarms, alarm];
    const tempBoolean = [...alarmBoolean, false];
    setAlarms(tempAlarms);
    setAlarmBoolean(tempBoolean);
    hour.value = '';
    minute.value = '';
    second.value = '';
  };

  const handleAlarmDelete = (ind: number) => {
    const tempAlarms = [...alarms];
    tempAlarms.splice(ind, 1);
    const tempBoolean = [...alarmBoolean];
    tempBoolean.splice(ind, 1);
    setAlarms(tempAlarms);
    setAlarmBoolean(tempBoolean);
  };
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <p className="py-2">Alarms</p>
      <form onSubmit={handleAlarmSubmit} className="pb-2">
        <input
          placeholder="00"
          type="number"
          min="0"
          max="23"
          className="alarm-input"
        />
        :
        <input
          placeholder="00"
          type="number"
          min="0"
          max="59"
          className="alarm-input"
        />
        :
        <input
          placeholder="00"
          type="number"
          min="0"
          max="59"
          className="alarm-input"
        />
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
              onClick={() => handleAlarmDelete(ind)}
              type="submit"
              className="bg-orange-600 hover:bg-orange-500 text-white text-sm px-3 ml-7 rounded transition duration-200 "
            >
              Del
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Alarm;
