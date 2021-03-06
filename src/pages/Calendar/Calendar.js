import { useState } from "react";
import Calendarmonthcontainer from "../../components/Calendarmonthcontainer";
import { resetCalendarLayout } from "../../utility/functions";
import Todo from "../Todo/Todo";

const Calendar = () => {
	const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	const today = new Date();
	const [year, setYear] = useState(today.getFullYear());
	const [selectedDate, setSelectedDate] = useState(
		`${today.getMonth()}/${today.getDate()}/${today.getFullYear()}`
	);
	return (
		<div
			id="calendar__window"
			className=" bg-black bg-opacity-50 backdrop-blur-3xl rounded-md mt-2 w-1/3 cursor-default shadow-lg hidden"
		>
			{/* changed input field to a div with button to remove rendering on every key stoke and improve performance */}
			<div
				className="text-center font-semibold text-white w-full appearance-none focus:outline-none rounded-t-md bg-blue-400 bg-opacity-50 cursor-default"
				onClick={resetCalendarLayout}
			>
				<button
					className="bg-blue-400 hover:bg-blue-500 text-white font-bold py px-4 rounded m-1 mr-6 transition duration-200"
					onClick={() => setYear(year - 1)}
				>
					-
				</button>
				{year}
				<button
					className="bg-blue-400 hover:bg-blue-500 text-white font-bold py px-4 rounded m-1 ml-6 transition duration-200"
					onClick={() => setYear(year + 1)}
				>
					+
				</button>
			</div>
			<div className=" grid grid-cols-3 grid-rows-4 gap-2 p-2 ">
				{daysInMonth.map((val, ind) => {
					return (
						<Calendarmonthcontainer
							key={ind * val}
							month={ind + 1}
							year={year}
							maxDay={val}
							today={today}
							setSelectedDate={setSelectedDate}
						/>
					);
				})}
				<Todo
					selectedDate={selectedDate}
					today={`${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`}
				/>
			</div>
		</div>
	);
};

export default Calendar;
