import { useDispatch, useSelector } from "react-redux";

import { selectText } from "../business-logic/selectors";
import { addTodo } from "../business-logic/actions";
import { setText } from "./form.slice";

import FormComponent from "./form";

// container component

function Form() {
  const text = useSelector(selectText);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setText(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo(text));
  };

  return (
    <FormComponent
      text={text}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}

export default Form;
