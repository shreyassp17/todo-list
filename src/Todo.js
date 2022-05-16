import React from "react";

export default function Todo({ todo }, { onStatusChangeHandler }) {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          onChange={onStatusChangeHandler}
          defaultChecked={todo.completed}
        />
        {todo.name}
      </label>
    </div>
  );
}
