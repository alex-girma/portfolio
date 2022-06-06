import { getDate } from "../../utility/utilFunc";

const Todo = ({ selectedDate, today }) => {
	return (
		<div id="todo" className="hidden pt-4">
			<p className="text-center pb-4">
				{getDate(selectedDate, "en-EN") || getDate(today, "en-EN")}
			</p>
			<input
				type="text"
				className=" text-slate-200 w-full h-7 appearance-none focus:outline-none rounded-md pl-2"
			/>
		</div>
	);
};

export default Todo;
