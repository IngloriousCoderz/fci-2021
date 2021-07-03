// Higher-Order Components (HoC)

// funzione di ordine superiore
import { connect } from "redux";

const sum = (a) => (b) => a + b;

// componente di ordine superiore

const memo = (App) =>
  function MemoizedApp() {
    return <App />;
  };

const connect = (mapStateToProps, mapDispatchToProps) => (Component) => ...

function List({ todos, toggleDone, removeTodo }) {
  return (
    <ListComponent
      todos={todos}
      onToggleClick={toggleDone}
      onRemoveClick={removeTodo}
    />
  );
}

export default connect((state) => ({
  todos: selectTodos(state)
}), { toggleDone, removeTodo })(List);

// Render Props

function Parent({ children }) {
  return <div>{children}</div>
}

<Parent>
  <Child />
</Parent>


function Parent({ render }) {
  return <div>{render()}</div>
}

<Parent render={() => <Child name="Antony" />}>
 
</Parent>

// Function As Child Component === Render Props

function Parent({ children }) {
  return <div>{children()}</div>
}

<Parent>
  {() => <Child name="Antony" />}
</Parent>
