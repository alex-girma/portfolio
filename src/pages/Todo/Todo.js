import { useState } from "react";
import { getDate } from "../../utility/utilFunc";
import NewToDo from "./NewToDo";
import ToDoList from "./ToDoList";

//TODO: ability to add todos for other days and show them when date selected. highlight date that have todos. edit todos. storage
const Todo = ({ selectedDate, today }) => {
	const [toDos, setToDos] = useState([]);

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
