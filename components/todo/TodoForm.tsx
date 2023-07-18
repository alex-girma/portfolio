import { useState } from 'react';
import { AllTodoListProp } from './TodoApp';

export interface TodoFormProps {
  todoDate: string;
  highlightTodoDays: boolean;
  allTodoList: AllTodoListProp;
  setHighlightTodoDays: React.Dispatch<React.SetStateAction<boolean>>;
  setAllTodoList: React.Dispatch<React.SetStateAction<AllTodoListProp>>;
}

const TodoForm = ({
  todoDate,
  allTodoList,
  setAllTodoList,
  highlightTodoDays,
  setHighlightTodoDays,
}: TodoFormProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    if (!inputValue) return;
    const newTodoList: AllTodoListProp[0] = {
      todos: [],
      status: [],
    };
    // set todos
    const todoList = allTodoList[todoDate]?.todos || [];
    newTodoList.todos = [...todoList, inputValue];
    // set status
    const todoListStatus = allTodoList[todoDate]?.status || [];
    newTodoList.status = [...todoListStatus, false];

    const newAllTodoList = { ...allTodoList };
    newAllTodoList[todoDate] = newTodoList;
    setAllTodoList(newAllTodoList);
    localStorage.setItem('allTodoList', JSON.stringify(newAllTodoList));
    setHighlightTodoDays(!highlightTodoDays); // to trigger a rerender in CalendarDaysCont component
    setInputValue('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };
  return (
    <>
      <form className="flex pb-2" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="todo..."
          autoFocus
          onChange={handleChange}
          value={inputValue}
          className="mb-2 mr-2 block w-full appearance-none rounded border-gray-200 bg-slate-50 py-1 px-3 text-sm text-gray-700 caret-orange-500 focus:border-gray-200 focus:bg-white focus:outline-none"
        />
        <button
          type="submit"
          className="mb-2 rounded bg-orange-600 px-3 text-xs text-white transition duration-200 hover:bg-orange-500"
        >
          Add
        </button>
      </form>
    </>
  );
};

export default TodoForm;
