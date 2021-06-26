import counter, { catchEmAll, decrement, increment, setValue } from "./counter";

describe("Counter App", () => {
  it("should increment", () => {
    // given
    const beforeState = 2;
    const action = increment(3);
    const afterState = 5;

    // when
    const state = counter(beforeState, action);

    // then
    expect(state).toBe(afterState);
  });

  it("should decrement", () => {
    // given
    const beforeState = 7;
    const action = decrement(4);
    const afterState = 3;

    // when
    const state = counter(beforeState, action);

    // then
    expect(state).toBe(afterState);
  });

  it("should set a value", () => {
    // given
    const beforeState = 4;
    const action = setValue(6);
    const afterState = 6;

    // when
    const state = counter(beforeState, action);

    // then
    expect(state).toBe(afterState);
  });

  it("should ignore any other action", () => {
    // given
    const beforeState = 2;
    const action = catchEmAll();
    const afterState = 2;

    // when
    const state = counter(beforeState, action);

    // then
    expect(state).toBe(afterState);
  });

  it("should initialize state", () => {
    // given
    const beforeState = undefined;
    const action = { type: "RANDOM_ACTION" };
    const afterState = 0;

    // when
    const state = counter(beforeState, action);

    // then
    expect(state).toBe(afterState);
  });
});
