// test-driven development
// 1. scrivi un test che fallisce
// 2. scrivi il codice che fa passare il test
// 3. refactoring

// 1. aiuta nell'analisi
// 2. aiuta nella progettazione
// 3. documenta
// 4. certifica
// 5. riduce le regressioni

// behavior-driven development
// TestSuite -> describe
// TestCase -> it
// assert -> expect, should
// 3 fasi:
// given - apparecchio
// when - metto in moto
// then - traggo le somme

import * as calc from "./calculator";

describe("Calculator App", () => {
  it("should add two numbers", () => {
    // given
    const a = 2;
    const b = 3;
    const expectedResult = 5;

    // when
    const result = calc.sum(a, b);

    // then
    expect(result).toBe(expectedResult);
  });

  it("should sum any two numbers", () => {
    // given
    const a = 3;
    const b = 4;
    const expectedResult = 7;

    // when
    const result = calc.sum(a, b);

    // then
    expect(result).toBe(expectedResult);
  });
});
