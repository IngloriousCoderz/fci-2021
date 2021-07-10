import PropTypes from "prop-types";

import classes from "./list.module.scss";

function List({ todos, onToggleClick, onRemoveClick }) {
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
  todos: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      done: PropTypes.bool,
    })
  ).isRequired,
  onToggleClick: PropTypes.func,
  onRemoveClick: PropTypes.func,
};

List.defaultProps = {
  todos: [],
};

export default List;
