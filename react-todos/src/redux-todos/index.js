import { Provider } from "react-redux";

import store from "./business-logic/store";
import TodosComponent from "./todos";

function Todos({ who }) {
  return (
    <Provider store={store}>
      <TodosComponent who={who} />
    </Provider>
  );
}

export default Todos;
