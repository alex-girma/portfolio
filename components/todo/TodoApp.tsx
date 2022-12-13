const TodoApp = () => {
  return (
    <form className="flex pb-2">
      <input
        type="text"
        autoFocus
        className="appearance-none block w-full bg-slate-50 text-gray-700 caret-orange-500 text-sm border-gray-200 rounded py-1 px-3 mb-2 mr-2 focus:outline-none focus:bg-white focus:border-gray-200"
      />
      <button
        type="submit"
        className="bg-orange-600 hover:bg-orange-500 text-white text-xs px-3 rounded mb-2 transition duration-200"
      >
        Add
      </button>
    </form>
  );
};

export default TodoApp;
