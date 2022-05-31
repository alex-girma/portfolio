const Todo = () => {
	return (
		<div id="todo" className="hidden pt-4">
			<p className="text-center pb-4">Todo</p>
			<input
				type="text"
				className=" text-slate-200 w-3/4 h-7 appearance-none focus:outline-none rounded-md pl-2"
			/>
		</div>
	);
};

export default Todo;
