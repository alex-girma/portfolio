import type { NextPageWithLayout } from './_app';

const Calendar: NextPageWithLayout = () => {
  return (
    <>
      <h1 className="font-normal text-xl">
        Welcome to my <span className=" text-red-600 underline">Clock</span>
      </h1>
    </>
  );
};

export default Calendar;
