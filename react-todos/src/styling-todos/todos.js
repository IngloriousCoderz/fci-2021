// import styles from "./todos.styles";
// import "./todos.css";
import classes from "./todos.module.scss";

// console.log(classes);

function Todos() {
  // event handler - function that handles events
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const style = {
    color: Math.random() > 0.5 ? "red" : "blue",
    backgroundColor: "green",
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input autoFocus placeholder="What next?" />
        <button>Submit</button>
      </form>
      <ul>
        <li className={classes.done} style={style}>
          Learn React
        </li>
        <li style={style}>Look for a job</li>
        <li style={style}>Forget everything</li>
      </ul>
    </>
  );
}

export default Todos;
