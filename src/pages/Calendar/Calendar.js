import { useState } from "react";
import Calendarmonthcontainer from "../../components/Calendarmonthcontainer";
import { resetCalendarLayoutClickedInput } from "../../utility/functions";
import Todo from "../Todo/Todo";

const Calendar = () => {
	const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	const today = new Date();
	const [year, setYear] = useState(today.getFullYear());
	return (
		<div
			id="calendar"
			className=" bg-black bg-opacity-50 backdrop-blur-3xl rounded-md mt-2 w-1/3 cursor-default shadow-lg"
		>
			<input
				className="text-center font-semibold text-slate-200 w-full appearance-none focus:outline-none rounded-t-md bg-green-600 bg-opacity-50 cursor-default"
				value={year}
				placeholder={year}
				onChange={(e) => {
					setYear(e.target.value);
				}}
				onBlur={(e) => {
					setYear(e.target.value);
				}}
				onClick={resetCalendarLayoutClickedInput}
			/>
			<div className=" grid grid-cols-3 grid-rows-4 gap-2 p-2 ">
				{daysInMonth.map((val, ind) => {
					return (
						<Calendarmonthcontainer key={ind * val} month={ind + 1} year={year} maxDay={val} />
					);
				})}
				<Todo />
			</div>
		</div>
	);
};

export default Calendar;
