const ToDoList = ({ todo, ind, toDos, setToDos }) => {
	const removeToDo = (e) => {
		e.preventDefault();
		setToDos(toDos.filter((_, index) => index !== ind));
	};
	const doneToDo = (e) => {
		e.preventDefault();
		setToDos(
			toDos.map((val, index) => {
				const obj = {};
				if (ind === index) {
					obj.val = val.val;
					obj.done = !val.done;
				} else {
					obj.val = val.val;
					obj.done = val.done;
				}
				return obj;
			})
		);
	};

	return (
		<div className="flex mb-2 rounded  bg-gradient-to-r from-slate-600">
			<div
				className={
					"w-full flex items-center text-sm my-2 ml-3 mr-2 text-slate-200 " +
					(toDos[ind].done ? "line-through" : "")
				}
			>
				{todo}
			</div>
			<button
				type="button"
				className={
					"bg-green-300 hover:bg-green-500 text-white text-xs  my-1 py px-4 rounded  transition duration-200 mr-2"
				}
				onClick={doneToDo}
			>
				done
			</button>
			<button
				type="button"
				className="bg-red-300 hover:bg-red-500 text-white text-xs my-1 py px-4 rounded  transition duration-200"
				onClick={removeToDo}
			>
				remove
			</button>
		</div>
	);
};

export default ToDoList;
