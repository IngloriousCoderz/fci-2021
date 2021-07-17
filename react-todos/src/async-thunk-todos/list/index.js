import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchTodos,
  toggleDone,
  removeTodo,
  selectTodos,
} from "../business-logic";
import ListComponent from "./list";

function List() {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
