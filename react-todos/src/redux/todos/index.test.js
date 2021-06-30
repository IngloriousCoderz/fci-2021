import rootReducer, {
  setText,
  addTodo,
  toggleDone,
  removeTodo,
  selectText,
} from ".";

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

  it('should toggle the "done" property on a todo', () => {
    const beforeState = {
      text: "Some text",
      todos: [
        { id: 1, text: "Learn Redux", done: true },
        { id: 2, text: "Look for a job", done: false },
        { id: 3, text: "Forget everything" },
      ],
    };
    const action = toggleDone(2);
    const afterState = {
      text: "Some text",
      todos: [
        { id: 1, text: "Learn Redux", done: true },
        { id: 2, text: "Look for a job", done: true },
        { id: 3, text: "Forget everything" },
      ],
    };

    const state = rootReducer(beforeState, action);

    expect(state).toEqual(afterState);
    expect(state.todos).not.toBe(beforeState.todos);
    expect(state.todos[0]).toBe(beforeState.todos[0]);
    expect(state.todos[1]).not.toBe(beforeState.todos[1]);
    expect(state.todos[2]).toBe(beforeState.todos[2]);
  });

  it("should remove a todo given its id", () => {
    const beforeState = {
      text: "Some text",
      todos: [
        { id: 1, text: "Learn Redux", done: true },
        { id: 2, text: "Look for a job", done: false },
        { id: 3, text: "Forget everything" },
      ],
    };
    const action = removeTodo(2);
    const afterState = {
      text: "Some text",
      todos: [
        { id: 1, text: "Learn Redux", done: true },
        { id: 3, text: "Forget everything" },
      ],
    };

    const state = rootReducer(beforeState, action);

    expect(state).toEqual(afterState);
  });

  it("should select the text from the state", () => {
    const state = {
      text: "Some text",
      todos: [
        { id: 1, text: "Learn Redux", done: true },
        { id: 2, text: "Look for a job", done: false },
        { id: 3, text: "Forget everything" },
      ],
    };
    const expectedText = "Some text";

    const text = selectText(state);

    expect(text).toBe(expectedText);
  });
});
