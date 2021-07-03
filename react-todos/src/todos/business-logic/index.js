import { combineReducers, createSelector } from "@reduxjs/toolkit";

import { SET_TEXT, ADD_TODO, TOGGLE_DONE, REMOVE_TODO } from "./action-types";

import text from "./text";
import todos from "./todos";

// action creators
export const setText = (text) => ({ type: SET_TEXT, payload: text });
export const addTodo = (text) => ({ type: ADD_TODO, payload: text });
export const toggleDone = (id) => ({ type: TOGGLE_DONE, payload: id });
export const removeTodo = (id) => ({ type: REMOVE_TODO, payload: id });

// const combineReducers =
//   (reducers) =>
//   (state = {}, action) => {
//     const keys = Object.keys(reducers);
//     return keys.reduce((acc, key) => {
//       acc[key] = reducers[key](state[key], action);
//       return acc;
//     }, {});
//   };

export default combineReducers({ text, todos });

// export default function rootReducer(state = {}, action) {
//   return {
//     text: text(state.text, action),
//     todos: todos(state.todos, action),
//   };
// }

// selectors

export const selectText = (state) => state.text;
export const selectTodos = (state) => state.todos;
export const selectTodo = (state, id) =>
  state.todos.find((todo) => todo.id === id);
export const selectDoneTodos = (state) =>
  state.todos.filter((todo) => todo.done);
export const areAllDone = createSelector(
  selectTodos,
  // eslint-disable-next-line no-console
  (todos) => console.log("Calculating...") || todos.every((todo) => todo.done)
);
