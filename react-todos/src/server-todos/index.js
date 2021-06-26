import { useEffect, useState } from "react";
import TodosComponent from "./todos";

import * as api from "./api";

function Todos({ who }) {
  const [todos, setTodos] = useState([]);

  // useEffect(() => {}) // scatta a ogni render: didMount+didUpdate
  // useEffect(() => {}, []) // scatta al primo render: didMount
  // useEffect(() => {}, [who]) // scatta ogni volta che le deps cambiano
  // useEffect(() => {
  //   return () => {}; // scatta prima di distruggersi: willUnmount
  // }, []);
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const todos = await api.read();
    setTodos(todos);
  };

  const addTodo = async (text) => {
    await api.create({ text });
    fetchTodos();
  };

  const toggleDone = async (id) => {
    const todo = todos.find((todo) => todo.id === id);
    await api.update(id, { done: !todo.done });
    fetchTodos();
  };

  const removeTodo = async (id) => {
    await api.remove(id);
    fetchTodos();
  };

  return (
    <TodosComponent
      who={who}
      todos={todos}
      addTodo={addTodo}
      toggleDone={toggleDone}
      removeTodo={removeTodo}
    />
  );
}

export default Todos;
