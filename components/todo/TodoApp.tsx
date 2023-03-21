// import React, { useState } from 'react';
import { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const allTodoListMoc = {
  changed: false,
  '1.1.2023': {
    todos: ['buy milk', 'buy apple'],
    status: [false, false],
  },
  '3.21.2023': {
    todos: ['buy orange', 'buy berry'],
    status: [true, false],
  },
};

// interface TodoAppProps {
//   allTodoList: any;
//   todoList: string[];
//   todoListStatus: boolean[];
//   setAllTodoList: any;
//   todoDate: string;
// }

const TodoApp = ({ todoDate }: { todoDate: string }) =>
  // todoList,
  // todoListStatus,
  // allTodoList,
  // setAllTodoList,
  // todoDate,
  {
    const [allTodoList, setAllTodoList] = useState(allTodoListMoc);

    // const [inputValue, setInputValue] = useState('');

    // const handleSubmit = (e: React.FormEvent): void => {
    //   e.preventDefault();
    //   // const newTodoList = [...todoList, inputValue];
    //   // const newAllTodoList = { ...allTodoList };
    //   // const newTodoListStatus = [...todoListStatus, false];

    //   // newAllTodoList[todoDate].todos = newTodoList;

    //   // newAllTodoList[todoDate].status = newTodoListStatus;
    //   // setAllTodoList(newAllTodoList);
    //   console.log(inputValue);
    //   setInputValue('');
    // };

    // // localStorage.setItem('allTodoList', JSON.stringify(allTodoList));

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    //   setInputValue(e.target.value);
    // };

    return (
      <>
        <TodoForm
          todoDate={todoDate}
          allTodoList={allTodoList}
          setAllTodoList={setAllTodoList}
        />
        {/* <form className="flex pb-2" onSubmit={handleSubmit}>
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
        </form> */}
        <div className="pb-2 flex justify-center underline ">
          <p>{todoDate}</p>
        </div>
        {allTodoList[todoDate]?.todos.map((todo, ind) => {
          return (
            <TodoList
              key={todo + ind}
              todo={todo}
              todoDate={todoDate}
              ind={ind}
              allTodoList={allTodoList}
              setAllTodoList={setAllTodoList}
            />
          );
        })}
      </>
    );
  };

export default TodoApp;
