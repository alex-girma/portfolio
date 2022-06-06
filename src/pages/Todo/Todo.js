import { useState } from "react";

import { getDate } from "../../utility/utilFunc";
import NewToDo from "./NewToDo";
import ToDoList from "./ToDoList";

const Todo = ({ selectedDate, today }) => {
	const [toDos, setToDos] = useState(["Test1", "Test2", "Test3"]);
	const allToDos = {};
	return (
		<div id="todo" className="hidden pt-4 rounded-sm border border-slate-400 pl-2 pr-2">
			<p className="text-center pb-4 text-slate-200">
				{getDate(selectedDate, "en-EN") || getDate(today, "en-EN")}
			</p>
			<NewToDo toDos={toDos} setToDos={setToDos} />
			{toDos.map((todo, ind) => {
				return <ToDoList key={ind} todo={todo} ind={ind} toDos={toDos} setToDos={setToDos} />;
			})}
		</div>
	);
};

export default Todo;
