import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos }, { onStatusChangeHandler }) => {
  return (
    <div>
      {todos.map((todo, index) => {
        return (
          <Todo
            todo={todo}
            key={index}
            onStatusChangeHandler={onStatusChangeHandler}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
