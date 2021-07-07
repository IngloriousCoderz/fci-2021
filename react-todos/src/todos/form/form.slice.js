import { createSlice } from "@reduxjs/toolkit";

import { addTodo } from "../business-logic/actions";

const formSlice = createSlice({
  name: "form",
  initialState: "",
  reducers: {
    setText(state, action) {
      return action.payload;
    },
  },
  extraReducers: {
    [addTodo](state) {
      return "";
    },
  },
});

export const { setText } = formSlice.actions;

export default formSlice.reducer;
