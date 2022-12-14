interface TodoListProps {
  allTodoList: any;
  todo: string;
  ind: number;
  setAllTodoList: any;
}

const TodoList: React.FC<TodoListProps> = ({
  todo,
  allTodoList,
  ind,
  setAllTodoList,
}) => {
  const handleClickDone = (): void => {
    const newAllTodoList = { ...allTodoList };
    newAllTodoList['15.12.2022'].status[ind] =
      !allTodoList['15.12.2022'].status[ind];
    setAllTodoList(newAllTodoList);
  };
  const handleClickRemove = (): void => {
    console.log(ind);
    const newAllTodoList = { ...allTodoList };
    newAllTodoList['15.12.2022'].todos = newAllTodoList[
      '15.12.2022'
    ].todos.filter((todo: string, index: number) => index !== ind);
    newAllTodoList['15.12.2022'].status = newAllTodoList[
      '15.12.2022'
    ].status.filter((status: boolean, index: number) => index !== ind);
    setAllTodoList(newAllTodoList);
  };

  return (
    <div className="flex mb-1 normal-case text-xxs">
      <div
        className={
          'w-full flex items-center my-2 ml-1 mr-2 text-inherit ' +
          (allTodoList['15.12.2022'].status[ind] ? 'line-through' : '')
        }
      >
        {todo}
      </div>
      <button
        type="button"
        className="bg-green-500 hover:bg-green-400 text-white my-1 px-3 rounded duration-200 mr-1"
        onClick={handleClickDone}
      >
        ✓
      </button>
      <button
        type="button"
        className="bg-red-500 hover:bg-red-400 text-white my-1 py px-3 rounded duration-200"
        onClick={handleClickRemove}
      >
        x
      </button>
    </div>
  );
};

export default TodoList;
