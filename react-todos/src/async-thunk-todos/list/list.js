import PropTypes from "prop-types";

import classes from "./list.module.scss";

/**
 * Presentational component that represents a list of todos.
 */
function List({ todos, onToggleClick, onRemoveClick }) {
  if (!todos.length) {
    return <p>All caught up!</p>;
  }

  return (
    <ul>
      {todos.map(({ id, text, done }) => (
        <li key={id} className={done ? classes.done : null}>
          <span onClick={() => onToggleClick(id)}>{text}</span>
          <button onClick={() => onRemoveClick(id)}>x</button>
        </li>
      ))}
    </ul>
  );
}

List.propTypes = {
  /**
   * An array of todo items.
   */
  todos: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      done: PropTypes.bool,
    })
  ).isRequired,
  /**
   * Triggered when clicking on the text of a todo.
   */
  onToggleClick: PropTypes.func,
  /**
   * Triggered when clicking on the todo's "x" button.
   */
  onRemoveClick: PropTypes.func,
};

List.defaultProps = {
  todos: [],
};

export default List;
