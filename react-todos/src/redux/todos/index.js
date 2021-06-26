// action types
const SET_TEXT = "SET_TEXT";
const ADD_TODO = "ADD_TODO";
const TOGGLE_DONE = "TOGGLE_DONE";
const REMOVE_TODO = "REMOVE_TODO";

// action creators
export const setText = (text) => ({ type: SET_TEXT, payload: text });
export const addTodo = (text) => ({ type: ADD_TODO, payload: text });
export const toggleDone = (id) => ({ type: TOGGLE_DONE, payload: id });
export const removeTodo = (id) => ({ type: REMOVE_TODO, payload: id });

export default function rootReducer(state = { text: "", todos: [] }, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_TEXT:
      return { ...state, text: payload };

    case ADD_TODO:
      const maxId = state.todos.length
        ? state.todos[state.todos.length - 1].id
        : 0;
      return {
        ...state,
        text: "",
        todos: [...state.todos, { id: maxId + 1, text: payload }],
      };

    default:
      return state;
  }
}
