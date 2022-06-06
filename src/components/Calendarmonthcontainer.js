import { goToClickedMonth } from "../utility/functions";
import { createArray, getDayName, getMonthName } from "../utility/utilFunc";

const Calendarmonthcontainer = ({ month, year, maxDay, today }) => {
	const date = `${month}/01/${year}`; // to get month names for the given language
	const locale = navigator.language;
	const currYearDay = getDayName(date, "en-EN").slice(0, 2);
	const weekDays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
	const fillDays = createArray(
		maxDay,
		weekDays.indexOf(currYearDay),
		42 - maxDay - weekDays.indexOf(currYearDay)
	);
	const handelClick = () => {
		goToClickedMonth(month);
	};

	return (
		<div
			id={`calendar__${month}`}
			className={
				"grid grid-cols-7 grid-rows-8 place-items-center text-xs text-slate-200 rounded-sm border border-slate-400 hover:bg-[#72707049] shadow-md shadow-slate-800 hover:shadow-md hover:shadow-slate-700 hover:scale-105 transition duration-300 " +
				(month === today.getMonth() + 1 && year === today.getFullYear() ? "border-blue-400" : "")
			}
			onClick={handelClick}
		>
			<div className="col-start-1 col-span-7 row-start-1 row-span-1 font-semibold">
				{getMonthName(date, locale)}
			</div>
			<p key={month + "Mo"}>Mo</p>
			<p key={month + "Tu"}>Tu</p>
			<p key={month + "We"}>We</p>
			<p key={month + "Th"}>Th</p>
			<p key={month + "Fr"}>Fr</p>
			<p key={month + "Sa"}>Sa</p>
			<p key={month + "Su"}>Su</p>

			{fillDays.map((day, ind) => {
				return (
					<p
						key={month + ind}
						className={
							"" +
							(day === today.getDate() &&
							month === today.getMonth() + 1 &&
							year === today.getFullYear()
								? "text-blue-400 font-semibold scale-125"
								: "")
						}
					>
						{day}
					</p>
				);
			})}
		</div>
	);
};

export default Calendarmonthcontainer;
