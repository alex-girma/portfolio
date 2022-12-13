interface TodoListProps {
  todo: string;
}

const TodoList: React.FC<TodoListProps> = ({ todo }) => {
  return (
    <div className="flex mb-1 normal-case text-xxs">
      <div className={'w-full flex items-center my-2 ml-1 mr-2 text-inherit'}>
        {todo}
      </div>
      <button
        type="button"
        className="bg-green-500 hover:bg-green-400 text-white my-1 px-3 rounded duration-200 mr-1"
      >
        ✓
      </button>
      <button
        type="button"
        className="bg-red-500 hover:bg-red-400 text-white my-1 py px-3 rounded duration-200"
      >
        x
      </button>
    </div>
  );
};

export default TodoList;
