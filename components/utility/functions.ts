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
  // set current month to its correct index
  if (index === 0) index = new Date().getMonth() + 1;
  // converting to ISO for international purpose
  const date = new Date(year, index - 1, 1).toISOString(); // random day which starts with sunday.
  const weekday = new Intl.DateTimeFormat(locale, {
    weekday: 'short',
  }).format(new Date(date));

  const filler = weekdayNames.indexOf(weekday);

  const arr = [];
  for (let i = 0; i < filler; i++) {
    arr.push('\u00a0');
  }
  for (let i = 0; i < days; i++) {
    arr.push(i + 1);
  }
  return arr;
};

export const toIntlDateFormat = (locale: string, date: Date) => {
  const intlDate = new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date);
  return intlDate;
};

export const toIntlTimeFormat = (locale: string, time: Date) => {
  const intlDate = new Intl.DateTimeFormat(locale, {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).format(time);
  return intlDate;
};
