import { useState } from "react";

// "hooked" component

function Form({ onSubmit }) {
  const { text, handleChange, handleSubmit } = useForm({ onSubmit });

  return (
    <form onSubmit={handleSubmit}>
      <input
        autoFocus
        placeholder="What next?"
        value={text}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
}

export default Form;

// custom hook

function useForm({ onSubmit }) {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(text);
    setText("");
  };

  return { text, handleChange, handleSubmit };
}
