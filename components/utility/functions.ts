export const getMonthNames = (locale: string) => {
  // get name of each month depending on user language
  const monthNames: string[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(
    (month) =>
      new Intl.DateTimeFormat(locale, { month: 'long' }).format(
        new Date(2022, month, 1)
      )
  );
  return monthNames;
};
export const getMonthName = (locale: string, index: number) => {
  // get name of each month depending on user language
  const monthName: string = new Intl.DateTimeFormat(locale, {
    month: 'long',
  }).format(new Date(2022, index, 1));

  return monthName;
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

export const createDaysInMonthArray = (
  locale: string,
  index: number,
  year: number
) => {
  // array to return
  const daysInMonthArray: string[] = [];
  // get how many days the given month(index) has
  const daysInMonth = getDays(year, index + 1);

  // converting to ISO for international purpose
  const date = new Date(year, index, 1).toISOString();
  const weekday = new Intl.DateTimeFormat(locale, {
    weekday: 'short',
  }).format(new Date(date));
  const weekdayNames = getWeekdayNames(locale);
  // to fill the array with '' untill 1 weekday of the month
  const filler = weekdayNames.indexOf(weekday);

  for (let i = 0; i < filler; i++) {
    daysInMonthArray.push('');
  }

  for (let i = 0; i < daysInMonth; i++) {
    daysInMonthArray.push(String(i + 1));
  }
  return daysInMonthArray;
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

const getDays = (year: number, month: number) => {
  return new Date(year, month, 0).getDate();
};

export const creatRandomArray = (size: number) => {
  const array: number[] = [];
  let number = Math.floor(Math.random() * 50);

  while (array.length != size) {
    if (!array.includes(number)) array.push(number);
    number = Math.floor(Math.random() * 50);
  }
  return array;
};

export const toggleClass = (id: number, className: string) => {
  document.getElementById(String(id))?.classList.toggle(className);
};
export const addClass = (id: number, className: string) => {
  document.getElementById(String(id))?.classList.add(className);
};
export const removeClass = (id: number, className: string) => {
  document.getElementById(String(id))?.classList.remove(className);
};
