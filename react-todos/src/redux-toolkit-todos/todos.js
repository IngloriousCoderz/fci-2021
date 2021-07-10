import Form from "./form";
import List from "./list";

function Todos({ who }) {
  return (
    <>
      <h1>{who}'s Todos</h1>
      <Form />
      <List />
    </>
  );
}

export default Todos;
