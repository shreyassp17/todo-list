import { useState } from "react";
import TodoList from "./TodoList";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

const App = () => {
  const [todo, setTodo] = useState({ name: "", completed: false });
  const [todos, setTodos] = useState([]);

  // console.log(todos);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!todo.name) return;
    setTodos([...todos, todo]);
    setTodo({ ...todo, name: "" });
  };

  const onStatusChangeHandler = (name) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.name === name);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  const onClearCompleteHandler = () => {
    const newTodos = todos.filter((todo) => todo.completed === false);
    setTodos(newTodos);
  };

  return (
    <div className="container my-3">
      <h1 className="text-center">Todo List</h1>
      <div className="container my-3">
        <Form.Control
          type="text"
          className="mb-3"
          placeholder="Enter a task to be done"
          onChange={(e) => {
            setTodo({ ...todo, name: e.target.value });
          }}
          value={todo.name}
        />
        <Col xs="auto">
          <Button variant="primary" className="mb-2" onClick={handleAddTodo}>
            Add Todo
          </Button>
        </Col>
        <Col xs="auto">
          <Button
            variant="primary"
            className="mb-2"
            onClick={onClearCompleteHandler}
          >
            Clear Complete
          </Button>
        </Col>
        <hr />
        <h3 className="mt-3">Todos</h3>
        <TodoList todos={todos} onStatusChangeHandler={onStatusChangeHandler} />
        <hr />
        <div>{todos.filter((todo) => !todo.completed).length} left to do</div>
      </div>
    </div>
  );
};

export default App;
