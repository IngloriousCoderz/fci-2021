// const counter = {
//   value: 0,

//   increment(amount) {
//     this.value += amount;
//   },

//   decrement(amount) {
//     this.value -= amount;
//   },

//   setValue(value) {
//     this.value = value;
//   },
// };

// action types

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const SET_VALUE = "SET_VALUE";
const CATCH_EM_ALL = "CATCH_EM_ALL";

// action creators

export const increment = (amount) => ({ type: INCREMENT, payload: amount });
export const decrement = (amount) => ({ type: DECREMENT, payload: amount });
export const setValue = (value) => ({ type: SET_VALUE, payload: value });
export const catchEmAll = () => ({ type: CATCH_EM_ALL });

// reducer

export default function counter(state = 0, action) {
  const { type, payload } = action;

  switch (type) {
    case INCREMENT:
      return state + payload;

    case DECREMENT:
      return state - payload;

    case SET_VALUE:
      return payload;

    default:
      return state;
  }
}
