// import styles from "./todos.styles";
import "./todos.css";

function Todos() {
  // event handler - function that handles events
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const style = {
    color: Math.random() > 0.5 ? "red" : "blue",
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input autoFocus placeholder="What next?" />
        <button>Submit</button>
      </form>
      <ul>
        <li className="done">Learn React</li>
        <li style={style}>Look for a job</li>
        <li>Forget everything</li>
      </ul>
    </>
  );
}

export default Todos;
