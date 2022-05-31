import { createArray, getDayName, getMonthName } from "../utility/utilFunc";

const Calendarmonthcontainer = ({ month, currYear, maxDay }) => {
	const date = `${month}/01/${currYear}`;
	const currYearDay = getDayName(`${month}/01/${currYear}`, "en-EN").slice(0, 2);
	const weekDays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
	const locale = navigator.language;
	const fillDays = createArray(
		maxDay,
		weekDays.indexOf(currYearDay),
		42 - maxDay - weekDays.indexOf(currYearDay)
	);

	// const days = new Array(Number(maxDay)).fill(null);
	// const skips = new Array(weekDays.indexOf(currYearDay)).fill(null);
	return (
		<div className="grid grid-cols-7 grid-rows-8 place-items-center bg-slate-200  text-xs  rounded-sm">
			<p className="col-start-1 col-span-7 row-start-1 row-span-1">{getMonthName(date, locale)}</p>
			<p>Mo</p>
			<p>Tu</p>
			<p>We</p>
			<p>Th</p>
			<p>Fr</p>
			<p>Sa</p>
			<p>Su</p>

			{fillDays.map((day, ind) => {
				return <p key={month + ind}>{day}</p>;
			})}
		</div>
	);
};

export default Calendarmonthcontainer;
