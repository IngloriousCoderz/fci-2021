import { Component } from "react";
import classes from "./todos.module.scss";

class Todos extends Component {
  state = {
    text: "",
    todos: [
      { id: 1, text: "Learn React", done: true },
      { id: 2, text: "Look for a job", done: false },
      { id: 3, text: "Forget everything" },
    ],
  };

  addTodo = (text) => {
    this.setState(({ todos }) => {
      const maxId = todos.length ? todos[todos.length - 1].id : 0;
      return { todos: [...todos, { id: maxId + 1, text }] };
    });
  };

  handleChange = (event) => {
    this.setState({ text: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.addTodo("New todo");
  };

  render() {
    const { text, todos } = this.state;

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            autoFocus
            placeholder="What next?"
            value={text}
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id} className={todo.done ? classes.done : null}>
              {todo.text}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Todos;
