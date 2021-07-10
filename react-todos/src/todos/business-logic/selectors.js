import { createSelector } from "@reduxjs/toolkit";

// selectors

export const selectText = (state) => state.form;
export const selectTodos = (state) => state.list;
export const selectTodo = (state, id) =>
  state.list.find((todo) => todo.id === id);
export const selectDoneTodos = (state) =>
  state.list.filter((todo) => todo.done);
export const areAllDone = createSelector(
  selectTodos,
  // eslint-disable-next-line no-console
  (todos) => console.log("Calculating...") || todos.every((todo) => todo.done)
);
