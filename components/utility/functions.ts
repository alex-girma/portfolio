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
  return new Date(year, month, 0).getDate(); // passing 0 as the day of the month in the new Date constructor will give you the last day of the previous month. that is why we pass index + 1 as month.
};

export const creatRandomArray = (size: number) => {
  const array: ArrayProp[] = [];
  const numbers: number[] = [];

  while (array.length != size) {
    const number = Math.floor(Math.random() * 50);

    if (!numbers.includes(number)) {
      numbers.push(number);
      const temp: ArrayProp = {
        value: number,
        selected: false,
        sorted: false,
        translateY: false,
        sement: false,
      };

      array.push(temp);
    }
  }
  return array;
};

export const generateGrid = (
  startPosition: number[],
  endPosition: number[],
  wall: number[][]
) => {
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

      col.push(cell);
    }
    grid.push(col);
  }
  // set start and end position
  grid[startPosition[0]][startPosition[1]].isStart = true;
  grid[endPosition[0]][endPosition[1]].isFinish = true;

  // set walls
  for (let i = 0; i < wall.length; i++) {
    if (
      grid[wall[i][0]][wall[i][1]].isStart ||
      grid[wall[i][0]][wall[i][1]].isFinish
    )
      continue;
    grid[wall[i][0]][wall[i][1]].isWall = true;
  }

  return grid;
};

export const generateWall = () => {
  // probability of a cell being a wall
  const WALL_PROBABILITY = 0.25;
  const wall: number[][] = [];

  // randomly set a cell to a wall
  for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 30; j++) {
      if (Math.random() < WALL_PROBABILITY) {
        wall.push([i, j]);
      }
    }
  }
  return wall;
};
