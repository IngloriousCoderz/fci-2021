import { SET_TODOS } from "./action-types";

export default function todos(state = [], action) {
  const { type, payload } = action;

  switch (type) {
    case SET_TODOS:
      return payload;

    default:
      return state;
  }
}
