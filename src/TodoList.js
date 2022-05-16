import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo, index) => {
        return <Todo todo={todo} key={index} />;
      })}
    </ul>
  );
};

export default TodoList;
