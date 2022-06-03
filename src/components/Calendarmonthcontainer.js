import { useState } from "react";
import { goToClickedMonth } from "../utility/functions";
import { createArray, getDayName, getMonthName } from "../utility/utilFunc";

const Calendarmonthcontainer = ({ month, currYear, maxDay }) => {
	const date = `${month}/01/${currYear}`; // to get month names for the given language
	const locale = navigator.language;
	const currYearDay = getDayName(date, "en-EN").slice(0, 2);
	const weekDays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
	const fillDays = createArray(
		maxDay,
		weekDays.indexOf(currYearDay),
		42 - maxDay - weekDays.indexOf(currYearDay)
	);
	const [test, setTest] = useState("text-green-400 font-semibold");
	const handelClick = () => {
		goToClickedMonth(month);
	};

	return (
		<div
			id={`calendar__${month}`}
			className={
				"grid grid-cols-7 grid-rows-8 place-items-center text-xs text-slate-200 rounded-sm border border-slate-400 hover:bg-[#72707049] shadow-md shadow-slate-800 hover:shadow-md hover:shadow-slate-700 hover:scale-105 transition duration-300 " +
				(month === new Date().getMonth() + 1 && currYear === new Date().getFullYear()
					? " border-green-400 "
					: "")
			}
			onClick={handelClick}
		>
			<div className="col-start-1 col-span-7 row-start-1 row-span-1 font-semibold">
				{getMonthName(date, locale)}
			</div>
			<p>Mo</p>
			<p>Tu</p>
			<p>We</p>
			<p>Th</p>
			<p>Fr</p>
			<p>Sa</p>
			<p>Su</p>

			{fillDays.map((day, ind) => {
				return (
					<p
						key={month + ind}
						className={
							"" +
							(day === new Date().getDate() &&
							month === new Date().getMonth() + 1 &&
							currYear === new Date().getFullYear()
								? test
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
