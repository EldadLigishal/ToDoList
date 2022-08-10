import React from "react";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completed: Todo[];
  setCompleted: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({
  todos,
  setTodos,
  completed,
  setCompleted,
}) => {
  return (
    <div className="container">
      <div className="todos">
        <span className="todos__heading">TASKS TO COMPLETE</span>
        {todos.map((todo) => (
          <SingleTodo
            todo={todo}
            todos={todos}
            key={todo.id}
            setTodos={setTodos}
          />
        ))}
      </div>
      <div className="todos remove">
        <span className="todos__heading">COMPLETED TASKS</span>
        {todos.map((todo) => (
          <SingleTodo
            todo={todo}
            todos={completed}
            key={todo.id}
            setTodos={setCompleted}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
