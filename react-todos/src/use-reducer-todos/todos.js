import { useReducer } from "react";
import classes from "./todos.module.scss";

import reducer, {
  setText,
  addTodo,
  toggleDone,
  removeTodo,
} from "./business-logic";

const initialState = {
  text: "",
  todos: [
    { id: 1, text: "Learn React", done: true },
    { id: 2, text: "Look for a job", done: false },
    { id: 3, text: "Forget everything" },
  ],
};

function Todos({ who }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (event) => dispatch(setText(event.target.value));

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo(state.text));
  };

  const handleToggleClick = (id) => (event) => dispatch(toggleDone(id));

  const handleRemoveClick = (id) => (event) => dispatch(removeTodo(id));

  return (
    <>
      <h1>{who}'s Todos</h1>
      <form onSubmit={handleSubmit}>
        <input
          autoFocus
          placeholder="What next?"
          value={state.text}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
      <ul>
        {state.todos.map(({ id, text, done }) => (
          <li key={id} className={done ? classes.done : null}>
            <span onClick={handleToggleClick(id)}>{text}</span>
            <button onClick={handleRemoveClick(id)}>x</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
