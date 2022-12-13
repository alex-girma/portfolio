import React, { Dispatch, SetStateAction, useState } from 'react';

interface TodoAppProps {
  todoList: string[];
  setTodoList: Dispatch<SetStateAction<string[]>>;
}

const TodoApp: React.FC<TodoAppProps> = ({ todoList, setTodoList }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    setTodoList([...todoList, inputValue]);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };
  console.log(todoList);

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
