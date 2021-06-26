import rootReducer, { setText, addTodo, toggleDone, removeTodo } from ".";

describe("Todo App", () => {
  it("should set some text", () => {
    // given
    const beforeState = {
      text: "Some text",
      todos: [
        { id: 1, text: "Learn Redux", done: true },
        { id: 2, text: "Look for a job", done: false },
      ],
    };
    const action = setText("Some other text");
    const afterState = {
      text: "Some other text",
      todos: [
        { id: 1, text: "Learn Redux", done: true },
        { id: 2, text: "Look for a job", done: false },
      ],
    };

    // when
    const state = rootReducer(beforeState, action);

    // then
    expect(state).toEqual(afterState);
    expect(state.todos).toBe(beforeState.todos);
  });

  it("should add a new todo and empty text", () => {
    const beforeState = {
      text: "Some text",
      todos: [
        { id: 1, text: "Learn Redux", done: true },
        { id: 2, text: "Look for a job", done: false },
      ],
    };
    const action = addTodo("Forget everything");
    const afterState = {
      text: "",
      todos: [
        { id: 1, text: "Learn Redux", done: true },
        { id: 2, text: "Look for a job", done: false },
        { id: 3, text: "Forget everything" },
      ],
    };

    const state = rootReducer(beforeState, action);

    expect(state).toEqual(afterState);
    expect(state.todos[0]).toBe(beforeState.todos[0]);
    expect(state.todos).not.toBe(beforeState.todos);
  });
});
