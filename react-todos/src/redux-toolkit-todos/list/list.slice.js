import { createSlice } from "@reduxjs/toolkit";

import { addTodo } from "../business-logic/actions";

const listSlice = createSlice({
  name: "list",
  initialState: [],
  reducers: {
    toggleDone(state, { payload }) {
      const todo = state.find(({ id }) => id === payload);
      todo.done = !todo.done;
    },
    removeTodo(state, { payload }) {
      const index = state.findIndex(({ id }) => id === payload);
      state.splice(index, 1);
    },
  },
  extraReducers: {
    [addTodo](state, { payload }) {
      const maxId = state.length ? state[state.length - 1].id : 0;
      state.push({ id: maxId + 1, text: payload });
    },
  },
});

export const { toggleDone, removeTodo } = listSlice.actions;

export default listSlice.reducer;
