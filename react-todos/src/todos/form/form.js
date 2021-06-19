function Form({ text, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input
        autoFocus
        placeholder="What next?"
        value={text}
        onChange={onChange}
      />
      <button>Submit</button>
    </form>
  );
}

export default Form;
