import { useState } from "react";
import TodoList from "./TodoList";

const App = () => {
  const [todo, setTodo] = useState({ name: "", completed: false });
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ ...todo, name: "" });
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setTodo({ name: e.target.value });
        }}
        value={todo.name}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
