// import React, { useState } from 'react';
import { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

export interface AllTodoListProp {
  [key: string]: {
    todos: string[];
    status: boolean[];
  };
}
interface todoAppProps {
  todoDate: string;
  highlightTodoDays: boolean;
  setHighlightTodoDays: React.Dispatch<React.SetStateAction<boolean>>;
}

const TodoApp = ({
  todoDate,
  highlightTodoDays,
  setHighlightTodoDays,
}: todoAppProps) => {
  const [allTodoList, setAllTodoList] = useState<AllTodoListProp>({});
  const todoLists = allTodoList[todoDate]?.todos || [];

  return (
    <>
      <TodoForm
        todoDate={todoDate}
        allTodoList={allTodoList}
        setAllTodoList={setAllTodoList}
        highlightTodoDays={highlightTodoDays}
        setHighlightTodoDays={setHighlightTodoDays}
      />

      <div className="pb-2 flex justify-center underline ">
        <p>{todoDate}</p>
      </div>
      {todoLists.map((todo, ind) => {
        return (
          <TodoList
            key={todo + ind}
            todo={todo}
            todoDate={todoDate}
            ind={ind}
            allTodoList={allTodoList}
            setAllTodoList={setAllTodoList}
            highlightTodoDays={highlightTodoDays}
            setHighlightTodoDays={setHighlightTodoDays}
          />
        );
      })}
    </>
  );
};

export default TodoApp;
