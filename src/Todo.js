import React from "react";

export default function Todo({ todo, onStatusChangeHandler }) {
  const handleTodoClick = () => {
    onStatusChangeHandler(todo.name);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          onChange={handleTodoClick}
          defaultChecked={todo.completed}
        />
        {todo.name}
      </label>
    </div>
  );
}
