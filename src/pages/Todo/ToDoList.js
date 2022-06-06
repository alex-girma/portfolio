const ToDoList = () => {
	return (
		<div className="flex mb-2 rounded  bg-gradient-to-r from-slate-600">
			<div className="w-full flex items-center my-2 ml-3 mr-2">Test</div>
			<button
				type="submit"
				className="bg-blue-400 hover:bg-blue-500 text-white font-bold my-1 py px-4 rounded  transition duration-200 mr-2"
			>
				+
			</button>
			<button
				type="submit"
				className="bg-blue-400 hover:bg-blue-500 text-white font-bold my-1 py px-4 rounded  transition duration-200"
			>
				+
			</button>
		</div>
	);
};

export default ToDoList;
