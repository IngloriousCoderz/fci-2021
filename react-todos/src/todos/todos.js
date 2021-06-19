import { useState } from "react";
// import classes from "./todos.module.scss";
import Form from "./form";
import List from "./list";

function Todos({ who }) {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", done: true },
    { id: 2, text: "Look for a job", done: false },
    { id: 3, text: "Forget everything" },
  ]);

  const addTodo = (text) => {
    const maxId = todos.length ? todos[todos.length - 1].id : 0;
    setTodos([...todos, { id: maxId + 1, text }]);
  };

  const toggleDone = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <h1>{who}'s Todos</h1>
      <Form onSubmit={addTodo} />
      <List
        todos={todos}
        onToggleClick={toggleDone}
        onRemoveClick={removeTodo}
      />
    </>
  );
}

export default Todos;
