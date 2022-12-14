import React, { useState } from 'react';

interface TodoAppProps {
  allTodoList: any;
  todoList: string[];
  todoListStatus: boolean[];
  setAllTodoList: any;
  todoDate: string;
}

const TodoApp: React.FC<TodoAppProps> = ({
  todoList,
  todoListStatus,
  allTodoList,
  setAllTodoList,
  todoDate,
}) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    const newTodoList = [...todoList, inputValue];
    const newAllTodoList = { ...allTodoList };
    const newTodoListStatus = [...todoListStatus, false];

    newAllTodoList[todoDate].todos = newTodoList;

    newAllTodoList[todoDate].status = newTodoListStatus;
    setAllTodoList(newAllTodoList);
    setInputValue('');
  };

  localStorage.setItem('allTodoList', JSON.stringify(allTodoList));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  return (
    <form className="flex pb-2" onSubmit={handleSubmit}>
      <input
        type="text"
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
  );
};

export default TodoApp;
