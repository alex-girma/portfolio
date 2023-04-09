import { AllTodoListProp } from './TodoApp';

export interface TodoListProps {
  ind: number;
  todo: string;
  todoDate: string;
  highlightTodoDays: boolean;
  allTodoList: AllTodoListProp;
  setHighlightTodoDays: React.Dispatch<React.SetStateAction<boolean>>;
  setAllTodoList: React.Dispatch<React.SetStateAction<AllTodoListProp>>;
}

const TodoList = ({
  ind,
  todo,
  todoDate,
  allTodoList,
  setAllTodoList,
  highlightTodoDays,
  setHighlightTodoDays,
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
    if (!newAllTodoList[todoDate].todos.length) delete newAllTodoList[todoDate];
    setAllTodoList(newAllTodoList);
    setHighlightTodoDays(!highlightTodoDays);
    localStorage.setItem('allTodoList', JSON.stringify(newAllTodoList));
  };

  return (
    <div className="mb-1 flex text-xxs normal-case">
      <div
        className={
          'my-2 ml-1 mr-2 flex w-full items-center text-inherit ' +
          (allTodoList[todoDate].status[ind] ? 'line-through' : '')
        }
      >
        {todo}
      </div>
      <button
        type="button"
        className="my-1 mr-1 rounded bg-green-500 px-3 text-white duration-200 hover:bg-green-400"
        onClick={handleClickDone}
      >
        ✓
      </button>
      <button
        type="button"
        className="py my-1 rounded bg-red-500 px-3 text-white duration-200 hover:bg-red-400"
        onClick={handleClickRemove}
      >
        x
      </button>
    </div>
  );
};

export default TodoList;
