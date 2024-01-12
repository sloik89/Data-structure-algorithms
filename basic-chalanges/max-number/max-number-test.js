const { maxNumberArray, maxNumberForLoop } = require("./max-number");
test("Max number", () => {
  expect(maxNumberArray([6, 8, 9, 10, 1, 2])).toBe(10);
  expect(maxNumberForLoop([0, 1, 5, 33, 55, 100, 500])).toBe(500);
  expect(maxNumberForLoop([0, 1, 5, 33, 55, 99])).toBe(99);
});
