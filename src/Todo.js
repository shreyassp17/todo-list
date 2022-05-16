import React from "react";

export default function Todo({ todo }, { index }) {
  return (
    <div>
      <li>{todo.name}</li>
    </div>
  );
}
