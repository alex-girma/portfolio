import { useState } from 'react';

export interface TodoFormProps {
  todoDate: string;
  allTodoList: any;
  setAllTodoList: any;
}

const TodoForm = ({ todoDate, allTodoList, setAllTodoList }: TodoFormProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    const newTodoList = {
      todos: [],
      status: [],
    };
    const todoList = allTodoList[todoDate]?.todos || [];
    newTodoList.todos = [...todoList, inputValue];
    const newAllTodoList = { ...allTodoList };
    newAllTodoList[todoDate] = newTodoList;
    setAllTodoList(newAllTodoList);
    setInputValue('');
  };
  if (allTodoList[todoDate]) console.log(allTodoList[todoDate].status);

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
