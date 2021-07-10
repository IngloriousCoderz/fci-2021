import { useDispatch, useSelector } from "react-redux";

import { selectTodos } from "../business-logic/selectors";
import { toggleDone, removeTodo } from "./list.slice";
import ListComponent from "./list";

function List() {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  const handleToggleClick = (id) => dispatch(toggleDone(id));
  const handleRemoveClick = (id) => dispatch(removeTodo(id));

  return (
    <ListComponent
      todos={todos}
      onToggleClick={handleToggleClick}
      onRemoveClick={handleRemoveClick}
    />
  );
}

export default List;
