import counter, { catchEmAll, decrement, increment, setValue } from "./counter";

describe("Counter App", () => {
  it("should increment", () => {
    // given
    const beforeState = { value: 2 };
    const action = increment(3);
    const afterState = { value: 5 };

    // when
    const state = counter(beforeState, action);

    // then
    expect(state).toEqual(afterState);
  });

  it("should decrement", () => {
    // given
    const beforeState = { value: 7 };
    const action = decrement(4);
    const afterState = { value: 3 };

    // when
    const state = counter(beforeState, action);

    // then
    expect(state).toEqual(afterState);
  });

  it("should set a value", () => {
    // given
    const beforeState = { value: 4 };
    const action = setValue(6);
    const afterState = { value: 6 };

    // when
    const state = counter(beforeState, action);

    // then
    expect(state).toEqual(afterState);
  });

  it("should ignore any other action", () => {
    // given
    const beforeState = { value: 2 };
    const action = catchEmAll();
    const afterState = { value: 2 };

    // when
    const state = counter(beforeState, action);

    // then
    expect(state).toEqual(afterState);
    expect(state).toBe(beforeState);
  });

  it("should initialize state", () => {
    // given
    const beforeState = undefined;
    const action = { type: "RANDOM_ACTION" };
    const afterState = { value: 0 };

    // when
    const state = counter(beforeState, action);

    // then
    expect(state).toEqual(afterState);
  });
});
