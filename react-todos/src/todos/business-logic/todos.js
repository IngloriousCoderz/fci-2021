import { ADD_TODO, TOGGLE_DONE, REMOVE_TODO } from "./action-types";

export default function todos(state = [], action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_TODO:
      const maxId = state.length ? state[state.length - 1].id : 0;
      return [...state, { id: maxId + 1, text: payload }];

    case TOGGLE_DONE:
      return state.map((todo) =>
        todo.id === payload ? { ...todo, done: !todo.done } : todo
      );

    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== payload);

    default:
      return state;
  }
}
