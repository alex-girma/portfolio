import { getDayName, getMonthName } from "../utility/utilFunc";

const Calendarmonthcontainer = ({ month, currYear, maxDay }) => {
	const date = `${month}/01/${currYear}`;
	const currYearDay = getDayName(`${month}/01/${currYear}`, "en-EN").slice(0, 2);
	const weekDays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
	const days = new Array(Number(maxDay)).fill(null);
	const locale = navigator.language;
	const skips = new Array(weekDays.indexOf(currYearDay)).fill(null);
	return (
		<div className="grid grid-cols-7 grid-rows-8 bg-slate-200 grid-rows-auto-fite text-xs place-items-center rounded-sm">
			<p className="col-start-1 col-span-7 row-start-1 row-span-1">{getMonthName(date, locale)}</p>
			<p>Mo</p>
			<p>Tu</p>
			<p>We</p>
			<p>Th</p>
			<p>Fr</p>
			<p>Sa</p>
			<p>Su</p>
			{skips.map((day, ind) => {
				return <p key={ind + 1}></p>;
			})}
			{days.map((day, ind) => {
				return <p key={ind + 1}>{ind + 1}</p>;
			})}
		</div>
	);
};

export default Calendarmonthcontainer;
