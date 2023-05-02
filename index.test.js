import strictEquals from "./index.js";

describe("Given a comparator function", () => {
  describe("when comparing 1 and 1", () => {
    test("the result should be true", () => {
      const valueA = 1;
      const valueB = 1;
      const expected = true;

      const total = strictEquals(valueA, valueB);

      expect(total).toBe(expected);
    });
  });

  describe("when comparing NaN and Nan", () => {
    test("the result should be false", () => {
      const valueA = NaN;
      const valueB = NaN;
      const expected = false;

      const total = strictEquals(valueA, valueB);

      expect(total).toBe(expected);
    });
  });

  describe("when comparing 0 and -0", () => {
    test("the result should be true", () => {
      const valueA = 0;
      const valueB = -0;
      const expected = true;

      const total = strictEquals(valueA, valueB);

      expect(total).toBe(expected);
    });
  });

  describe("when comparing -0 and 0", () => {
    test("the result should be true", () => {
      const valueA = -0;
      const valueB = 0;
      const expected = true;

      const total = strictEquals(valueA, valueB);

      expect(total).toBe(expected);
    });
  });

  describe(`when comparing 1 and "1" `, () => {
    test("the result should be false", () => {
      const valueA = 1;
      const valueB = "1";
      const expected = false;

      const total = strictEquals(valueA, valueB);

      expect(total).toBe(expected);
    });
  });

  describe("when comparing true and false", () => {
    test("the result should be false", () => {
      const valueA = true;
      const valueB = false;
      const expected = false;

      const total = strictEquals(valueA, valueB);

      expect(total).toBe(expected);
    });
  });

  describe("when comparing false and false", () => {
    test("the result should be true", () => {
      const valueA = false;
      const valueB = false;
      const expected = true;

      const total = strictEquals(valueA, valueB);

      expect(total).toBe(expected);
    });
  });

  describe(`when comparing "water" and "oil"`, () => {
    test("the result should be false", () => {
      const valueA = "water";
      const valueB = "oil";
      const expected = false;

      const total = strictEquals(valueA, valueB);

      expect(total).toBe(expected);
    });
  });
});
