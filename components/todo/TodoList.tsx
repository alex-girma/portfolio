export interface TodoListProps {
  ind: number;
  todo: string;
  todoDate: string;
  allTodoList: any;
  setAllTodoList: any;
}

const TodoList = ({
  ind,
  todo,
  todoDate,
  allTodoList,
  setAllTodoList,
}: TodoListProps) => {
  const handleClickDone = (): void => {
    const newAllTodoList = { ...allTodoList };

    newAllTodoList[todoDate].status[ind] = !allTodoList[todoDate].status[ind];
    setAllTodoList(newAllTodoList);
    localStorage.setItem('allTodoList', JSON.stringify(newAllTodoList));
  };
  const handleClickRemove = (): void => {
    const newAllTodoList = { ...allTodoList };
    newAllTodoList[todoDate].todos = newAllTodoList[todoDate].todos.filter(
      (todo: string, index: number) => index !== ind
    );
    newAllTodoList[todoDate].status = newAllTodoList[todoDate].status.filter(
      (status: boolean, index: number) => index !== ind
    );
    setAllTodoList(newAllTodoList);
    localStorage.setItem('allTodoList', JSON.stringify(newAllTodoList));
  };

  return (
    <div className="flex mb-1 normal-case text-xxs">
      <div
        className={
          'w-full flex items-center my-2 ml-1 mr-2 text-inherit ' +
          (allTodoList[todoDate].status[ind] ? 'line-through' : '')
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
