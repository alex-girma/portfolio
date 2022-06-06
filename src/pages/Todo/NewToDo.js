const NewToDo = () => {
	return (
		<>
			<form className="flex pb-4">
				<input
					type="text"
					className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-3 mb-2  focus:outline-none focus:bg-white focus:border-gray-500 mr-2"
				/>
				<button
					type="submit"
					className="bg-blue-400 hover:bg-blue-500 text-white font-bold py px-4 rounded mb-2 transition duration-200"
				>
					+
				</button>
			</form>
		</>
	);
};

export default NewToDo;
