import { combineReducers, createSelector } from "@reduxjs/toolkit";

import * as api from "../api";

import { SET_TEXT, SET_TODOS } from "./action-types";
import text from "./text";
import todos from "./todos";

// action creators

export const setText = (text) => ({ type: SET_TEXT, payload: text });
export const setTodos = (todos) => ({ type: SET_TODOS, payload: todos });

// thunks

export const fetchTodos = () => async (dispatch) => {
  const todos = await api.read();
  dispatch(setTodos(todos));
};

export const addTodo = (text) => async (dispatch) => {
  await api.create({ text });
  dispatch(setText(""));
  dispatch(fetchTodos());
};

export const toggleDone = (id) => async (dispatch, getState) => {
  const todos = selectTodos(getState());
  const todo = todos.find((todo) => todo.id === id);
  await api.update(id, { done: !todo.done });
  dispatch(fetchTodos());
};

export const removeTodo = (id) => async (dispatch) => {
  await api.remove(id);
  dispatch(fetchTodos());
};

// reducer

export default combineReducers({ text, todos });

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
