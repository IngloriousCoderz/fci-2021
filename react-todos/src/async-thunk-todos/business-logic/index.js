import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";

import * as api from "../api";

// thunks

export const fetchTodos = createAsyncThunk("todos/fetchTodos", () =>
  api.read()
);

export const addTodo = createAsyncThunk(
  "todos/addTodo",
  async (text, { dispatch }) => {
    await api.create({ text });
    dispatch(fetchTodos());
  }
);

export const toggleDone = createAsyncThunk(
  "todos/toggleDone",
  async (id, { dispatch, getState }) => {
    const todos = selectTodos(getState());
    const todo = todos.find((todo) => todo.id === id);
    await api.update(id, { done: !todo.done });
    dispatch(fetchTodos());
  }
);

export const removeTodo = createAsyncThunk(
  "todos/removeTodo",
  async (id, { dispatch }) => {
    await api.remove(id);
    dispatch(fetchTodos());
  }
);

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    form: "",
    list: [],
  },
  reducers: {
    setText(state, action) {
      state.form = action.payload;
    },
  },
  extraReducers: {
    [addTodo.pending](state, action) {
      state.form = "";
    },
    [fetchTodos.fulfilled](state, action) {
      state.list = action.payload;
    },
  },
});

export const { setText } = todosSlice.actions;

export default todosSlice.reducer;

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
