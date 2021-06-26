import Form from "./form";
import List from "./list";

function Todos({ who, todos, addTodo, toggleDone, removeTodo }) {
  return (
    <>
      <h1>{who}'s Todos</h1>
      <Form onSubmit={addTodo} />
      <List
        todos={todos}
        onToggleClick={toggleDone}
        onRemoveClick={removeTodo}
      />
    </>
  );
}

export default Todos;
