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

export const getDaysInMonth = (locale: string) => {
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
  monthName: string,
  year: number
) => {
  const weekdayNames = getWeekdayNames('en-US');
  const month = getMonthNumberFromName(monthName);
  const date = new Date(year, month, 1);
  const weekday = date.toLocaleDateString('en-US', {
    weekday: 'short',
  });

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
  return new Date(`${monthName} 1, 2022`).getMonth();
};
