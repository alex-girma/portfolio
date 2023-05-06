export interface ArrayProp {
  value: number;
  selected: boolean;
  sorted: boolean;
  translateY: boolean;
  sement: boolean;
}

export interface GridProps {
  isStart: boolean;
  isVisited: boolean;
  isWall: boolean;
  isFinish: boolean;
  isPath: boolean;
  isInQueue: boolean;
}

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
  const year = new Date().getFullYear();
  const monthName: string = new Intl.DateTimeFormat(locale, {
    month: 'long',
  }).format(new Date(year, index, 1));

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
  const array: ArrayProp[] = [];
  const numbers: number[] = [];

  while (array.length != size) {
    const number = Math.floor(Math.random() * 50);

    if (!numbers.includes(number)) {
      numbers.push(number);
      const temp: ArrayProp = {
        value: 0,
        selected: false,
        sorted: false,
        translateY: false,
        sement: false,
      };
      temp.value = number;
      temp.selected = false;
      temp.sorted = false;
      temp.translateY = false;
      temp.sement = false;

      array.push(temp);
    }
  }
  return array;
};

export const generateGrid = () => {
  const grid: GridProps[][] = [];
  for (let i = 0; i < 15; i++) {
    const col: GridProps[] = [];
    for (let j = 0; j < 30; j++) {
      const cell: GridProps = {
        isStart: false,
        isVisited: false,
        isWall: false,
        isFinish: false,
        isPath: false,
        isInQueue: false,
      };
      cell.isStart = false;
      cell.isVisited = false;
      cell.isWall = false;
      cell.isFinish = false;
      cell.isPath = false;
      cell.isInQueue = false;

      col.push(cell);
    }
    grid.push(col);
  }
  //test
  grid[6][5].isStart = true;
  grid[6][24].isFinish = true;
  grid[0][13].isWall = true;
  grid[1][13].isWall = true;
  grid[2][13].isWall = true;
  grid[3][13].isWall = true;
  grid[4][13].isWall = true;
  grid[5][13].isWall = true;
  grid[6][13].isWall = true;
  grid[7][13].isWall = true;
  grid[8][13].isWall = true;

  return grid;
};
