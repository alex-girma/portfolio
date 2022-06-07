const NewToDo = ({ toDos, setToDos }) => {
	const handelSubmit = (e) => {
		e.preventDefault();
		if (!e.target.firstChild.value) return;
		setToDos([...toDos, { val: e.target.firstChild.value, done: false }]);
		e.target.firstChild.value = "";
	};

	return (
		<>
			<form className="flex pb-4" onSubmit={handelSubmit}>
				<input
					type="text"
					className="appearance-none block w-full bg-gray-200 text-gray-700 border text-sm border-gray-200 rounded py-1 px-3 mb-2  focus:outline-none focus:bg-white focus:border-gray-500 mr-2"
				/>
				<button
					type="submit"
					className="bg-blue-400 hover:bg-blue-500 text-white text-xs py px-4 rounded mb-2 transition duration-200"
				>
					Add
				</button>
			</form>
		</>
	);
};

export default NewToDo;
