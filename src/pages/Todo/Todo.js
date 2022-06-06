import { getDate } from "../../utility/utilFunc";
import NewToDo from "./NewToDo";
import ToDoList from "./ToDoList";

const Todo = ({ selectedDate, today }) => {
	return (
		<div id="todo" className="hidden pt-4 rounded-sm border border-slate-400 pl-2 pr-2">
			<p className="text-center pb-4 text-slate-200">
				{getDate(selectedDate, "en-EN") || getDate(today, "en-EN")}
			</p>
			<NewToDo />
			<ToDoList />
			<ToDoList />
			<ToDoList />
		</div>
	);
};

export default Todo;
