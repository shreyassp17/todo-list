import React from "react";
import { Form } from "react-bootstrap";

export default function Todo({ todo, onStatusChangeHandler }) {
  const handleTodoClick = () => {
    onStatusChangeHandler(todo.name);
  };
  
  return (
    <div>
      <Form.Check
        inline
        aria-label="option 1"
        label={todo.name}
        onChange={handleTodoClick}
        checked = {todo.completed}
      />
    </div>
  );
}
