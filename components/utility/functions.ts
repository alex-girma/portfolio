export const getMonthNames = (locale: string) => {
  const currMonth = new Date().getMonth();
  // get name of each month depending on user language
  const months: string[] = [
    currMonth,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
  ].map((month) =>
    new Intl.DateTimeFormat(locale, { month: 'long' }).format(
      new Date(2022, month, 1)
    )
  );
  return months;
};

export const getWeekdayNames = (locale: string) => {
  // get name of weekdays depending on user language
  const weekdayNames: string[] = [1, 2, 3, 4, 5, 6, 7].map((day) =>
    new Intl.DateTimeFormat(locale, { weekday: 'short' }).format(
      new Date(2020, 10, day) // random day which starts with sunday. 1.10.2022
    )
  );
  return weekdayNames;
};

// how many days in a given month
export const getDaysInMonth = () => {
  const currMonth = new Date().getMonth() + 1;
  const currYear = new Date().getFullYear();
  // get name of each month depending on user language
  const daysInMonths: number[] = [
    currMonth,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
  ].map((month) => new Date(currYear, month, 0).getDate());
  return daysInMonths;
};

export const createMonthArray = (
  days: number,
  index: number,
  year: number,
  locale: string
) => {
  const weekdayNames = getWeekdayNames(locale);

  if (index === 0) index = 12;
  const date = new Date(year, index - 1, 1).toISOString();
  const weekday = new Intl.DateTimeFormat(locale, {
    weekday: 'short',
  }).format(new Date(date)); // random day which starts with sunday. 1.10.2022

  const test = weekdayNames.indexOf(weekday);

  const arr = [];
  for (let i = 0; i < test; i++) {
    arr.push('\u00a0');
  }
  for (let i = 0; i < days; i++) {
    arr.push(i + 1);
  }
  return arr;
};

const getMonthNumberFromName = (monthName: string) => {
  const t = new Date(`${monthName} 1, 2022 01:00:00`);
  console.log('test: ', t.toLocaleString('en-US'));
  const test = t.getMonth();
  console.log(monthName, t, test);
  return test;
};
