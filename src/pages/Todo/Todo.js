import { useState } from "react";

import { getDate } from "../../utility/utilFunc";
import NewToDo from "./NewToDo";
import ToDoList from "./ToDoList";

const Todo = ({ selectedDate, today }) => {
	const allToDos = {
		"1.1.2022": [
			{ val: "Test1", done: false },
			{ val: "Test2", done: false },
			{ val: "Test3", done: false },
		],
		"2.1.2022": [
			{ val: "Test4", done: false },
			{ val: "Test5", done: false },
			{ val: "Test6", done: false },
		],
	};
	const [toDos, setToDos] = useState(
		[
			{ val: "Test1", done: false },
			{ val: "Test2", done: false },
			{ val: "Test3", done: false },
		] || []
	);

	return (
		<div id="todo" className="hidden pt-4 rounded-sm border border-slate-400 pl-2 pr-2">
			<p className="text-center pb-4 text-slate-200">
				{getDate(selectedDate, "en-EN") || getDate(today, "en-EN")}
			</p>
			<NewToDo toDos={toDos} setToDos={setToDos} />
			{toDos.map((todo, ind) => {
				return (
					<ToDoList
						key={ind + todo.val}
						todo={todo.val}
						todoDone={todo.done}
						ind={ind}
						toDos={toDos}
						setToDos={setToDos}
					/>
				);
			})}
		</div>
	);
};

export default Todo;
