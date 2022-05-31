import { useState } from "react";
import Calendarmonthcontainer from "../../components/Calendarmonthcontainer";
import Todo from "../Todo/Todo";

const Calendar = () => {
	const maxDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	const [currYear, setCurrYear] = useState(new Date().getFullYear());
	const handleClick = () => {
		for (let i = 0; i < 12; i++) {
			const calmonth = document.getElementById(`calendar__${i + 1}`);
			calmonth.classList.remove("hidden");
			calmonth.classList.remove("col-start-1");
			calmonth.classList.remove("col-end-4");
		}
		const todo = document.getElementById("todo");
		todo.classList.add("hidden");
	};
	return (
		<div
			id="calendar"
			className="col-start-3 col-span-2 row-start-1 row-end-3 bg-black bg-opacity-50 backdrop-blur-3xl rounded-md mt-2 w-1/3 justify-center cursor-default shadow-lg"
		>
			<input
				className="text-center font-semibold text-slate-200 w-full appearance-none focus:outline-none rounded-t-md bg-slate-900 bg-opacity-50 cursor-default"
				value={currYear}
				placeholder={currYear}
				onChange={(e) => {
					setCurrYear(e.target.value);
				}}
				onBlur={(e) => {
					setCurrYear(e.target.value);
				}}
				onClick={handleClick}
			/>
			<div className=" grid grid-cols-3 grid-rows-4 gap-2 p-2">
				{maxDay.map((days, ind) => {
					return (
						<Calendarmonthcontainer
							key={ind * days}
							month={ind + 1}
							currYear={currYear}
							maxDay={days}
						/>
					);
				})}
				<Todo />
			</div>
		</div>
	);
};

export default Calendar;
