import { useState } from 'react';
import { allTodoListProp } from './TodoApp';

export interface TodoFormProps {
  todoDate: string;
  highlightTodoDays: boolean;
  allTodoList: allTodoListProp;
  setHighlightTodoDays: React.Dispatch<React.SetStateAction<boolean>>;
  setAllTodoList: React.Dispatch<React.SetStateAction<allTodoListProp>>;
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
    const newTodoList: allTodoListProp[0] = {
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
    setHighlightTodoDays(!highlightTodoDays);
    setAllTodoList(newAllTodoList);
    localStorage.setItem('allTodoList', JSON.stringify(newAllTodoList));
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
          className="appearance-none block w-full bg-slate-50 text-gray-700 caret-orange-500 text-sm border-gray-200 rounded py-1 px-3 mb-2 mr-2 focus:outline-none focus:bg-white focus:border-gray-200"
        />
        <button
          type="submit"
          className="bg-orange-600 hover:bg-orange-500 text-white text-xs px-3 rounded mb-2 transition duration-200"
        >
          Add
        </button>
      </form>
    </>
  );
};

export default TodoForm;
