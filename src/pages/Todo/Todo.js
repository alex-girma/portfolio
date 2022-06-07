import { useEffect, useState } from "react";
import { getDate } from "../../utility/utilFunc";
import { todoDates } from "../../variables/Vars";
import NewToDo from "./NewToDo";
import Test from "./Test";
import ToDoList from "./ToDoList";

const Todo = ({ selectedDate, today }) => {
	const [allToDos, setAllToDos] = useState({});
	const test = allToDos[selectedDate] || [];

	useEffect(() => {
		todoDates.length = 0;
	}, [selectedDate]);
	console.log(todoDates);
	console.log(allToDos);

	return (
		<div id="todo" className="hidden pt-4 rounded-sm border border-slate-400 pl-2 pr-2">
			<p className="text-center pb-4 text-slate-200">
				{getDate(selectedDate, "en-EN") || getDate(today, "en-EN")}
			</p>
			<NewToDo
				allToDos={allToDos}
				setAllToDos={setAllToDos}
				selectedDate={selectedDate}
				arr={todoDates}
			/>
			{test.map((todo, ind) => {
				return (
					<ToDoList
						key={ind + todo.val}
						todo={todo.val}
						todoDone={todo.done}
						ind={ind}
						toDos={allToDos[selectedDate]}
					/>
				);
			})}
			<Test />
		</div>
	);
};

export default Todo;

// import { useEffect, useState } from "react";
// import { getDate } from "../../utility/utilFunc";
// import NewToDo from "./NewToDo";
// import ToDoList from "./ToDoList";

// const Todo = ({ selectedDate, today }) => {
// 	let allToDos = {};
// 	const [test, setTest] = useState(allToDos);
// 	const [toDos, setToDos] = useState(test[selectedDate] || []);
// 	const [t, setT] = useState(selectedDate);

// 	useEffect(() => {
// 		if (toDos.length) setTest({ ...test, [t]: toDos });
// 		setToDos([]);
// 		setT(selectedDate);
// 	}, [test, setTest, selectedDate]);

// 	return (
// 		<div id="todo" className="hidden pt-4 rounded-sm border border-slate-400 pl-2 pr-2">
// 			<p className="text-center pb-4 text-slate-200">
// 				{getDate(selectedDate, "en-EN") || getDate(today, "en-EN")}
// 			</p>
// 			<NewToDo toDos={toDos} setToDos={setToDos} />
// 			{toDos.map((todo, ind) => {
// 				return (
// 					<ToDoList
// 						key={ind + todo.val}
// 						todo={todo.val}
// 						todoDone={todo.done}
// 						ind={ind}
// 						toDos={test[selectedDate] === undefined ? toDos : test[selectedDate]}
// 						setToDos={setToDos}
// 					/>
// 				);
// 			})}
// 		</div>
// 	);
// };

// export default Todo;
