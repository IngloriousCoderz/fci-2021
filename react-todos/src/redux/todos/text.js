import { SET_TEXT, ADD_TODO } from "./action-types";

export default function text(state = "", action) {
  const { type, payload } = action;

  switch (type) {
    case SET_TEXT:
      return payload;

    case ADD_TODO:
      return "";

    default:
      return state;
  }
}
