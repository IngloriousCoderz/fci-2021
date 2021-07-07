import { SET_TEXT } from "./action-types";

export default function text(state = "", action) {
  const { type, payload } = action;

  switch (type) {
    case SET_TEXT:
      return payload;

    default:
      return state;
  }
}
