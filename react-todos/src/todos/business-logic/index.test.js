import { createStore } from "@reduxjs/toolkit";

import rootReducer, { selectText, areAllDone } from ".";

import { addTodo } from "./actions";
import { setText } from "../form/form.slice";
import { toggleDone, removeTodo } from "../list/list.slice";

describe("Todo App", () => {
  it("should set some text", () => {
    // given
    const beforeState = {
      form: "Some text",
      list: [
        { id: 1, text: "Learn Redux", done: true },
        { id: 2, text: "Look for a job", done: false },
      ],
    };
    const action = setText("Some other text");
    const afterState = {
      form: "Some other text",
      list: [
        { id: 1, text: "Learn Redux", done: true },
        { id: 2, text: "Look for a job", done: false },
      ],
    };

    // when
    const state = rootReducer(beforeState, action);

    // then
    expect(state).toEqual(afterState);
    expect(state.list).toBe(beforeState.list);
  });

  it("should add a new todo and empty text", () => {
    const beforeState = {
      form: "Some text",
      list: [
        { id: 1, text: "Learn Redux", done: true },
        { id: 2, text: "Look for a job", done: false },
      ],
    };
    const action = addTodo("Forget everything");
    const afterState = {
      form: "",
      list: [
        { id: 1, text: "Learn Redux", done: true },
        { id: 2, text: "Look for a job", done: false },
        { id: 3, text: "Forget everything" },
      ],
    };

    const state = rootReducer(beforeState, action);

    expect(state).toEqual(afterState);
    expect(state.list[0]).toBe(beforeState.list[0]);
    expect(state.list).not.toBe(beforeState.list);
  });

  it('should toggle the "done" property on a todo', () => {
    const beforeState = {
      form: "Some text",
      list: [
        { id: 1, text: "Learn Redux", done: true },
        { id: 2, text: "Look for a job", done: false },
        { id: 3, text: "Forget everything" },
      ],
    };
    const action = toggleDone(2);
    const afterState = {
      form: "Some text",
      list: [
        { id: 1, text: "Learn Redux", done: true },
        { id: 2, text: "Look for a job", done: true },
        { id: 3, text: "Forget everything" },
      ],
    };

    const state = rootReducer(beforeState, action);

    expect(state).toEqual(afterState);
    expect(state.list).not.toBe(beforeState.list);
    expect(state.list[0]).toBe(beforeState.list[0]);
    expect(state.list[1]).not.toBe(beforeState.list[1]);
    expect(state.list[2]).toBe(beforeState.list[2]);
  });

  it("should remove a todo given its id", () => {
    const beforeState = {
      form: "Some text",
      list: [
        { id: 1, text: "Learn Redux", done: true },
        { id: 2, text: "Look for a job", done: false },
        { id: 3, text: "Forget everything" },
      ],
    };
    const action = removeTodo(2);
    const afterState = {
      form: "Some text",
      list: [
        { id: 1, text: "Learn Redux", done: true },
        { id: 3, text: "Forget everything" },
      ],
    };

    const state = rootReducer(beforeState, action);

    expect(state).toEqual(afterState);
  });

  it("should select the text from the state", () => {
    const state = {
      form: "Some text",
      list: [
        { id: 1, text: "Learn Redux", done: true },
        { id: 2, text: "Look for a job", done: false },
        { id: 3, text: "Forget everything" },
      ],
    };
    const expectedText = "Some text";

    const text = selectText(state);

    expect(text).toBe(expectedText);
  });

  it("should memoize a selector", () => {
    const state = {
      form: "Some text",
      list: [
        { id: 1, text: "Learn Redux", done: true },
        { id: 2, text: "Look for a job", done: false },
        { id: 3, text: "Forget everything" },
      ],
    };

    expect(areAllDone(state)).toBe(false);
    expect(areAllDone(state)).toBe(false);
  });

  it("should create a store", () => {
    const store = createStore(rootReducer);

    store.subscribe(() => {
      expect(store.getState()).toEqual({
        form: "",
        list: [{ id: 1, text: "Todo 1" }],
      });
    });

    store.dispatch(addTodo("Todo 1"));
  });
});
