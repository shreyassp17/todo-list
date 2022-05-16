import { useState } from "react";
import TodoList from "./TodoList";

const App = () => {
  const [todo, setTodo] = useState({ name: "", completed: false });
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    // console.log(todo);
    setTodo({ ...todo, name: "" });
  };

  const onStatusChangeHandler = (e) => {
    e.preventDefault();
    setTodo({ ...todo, completed: false });
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setTodo({ ...todo, name: e.target.value });
        }}
        value={todo.name}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button>Clear Complete</button>
      <TodoList todos={todos} onStatusChangeHandler={onStatusChangeHandler} />
    </div>
  );
};

export default App;
