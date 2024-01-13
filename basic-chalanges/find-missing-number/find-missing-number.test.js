const findMissingNumber = require("./find-missing-number");
test("Find missing number", () => {
  expect(findMissingNumber([10, 8, 6, 7, 5, 4, 2, 3, 1])).toBe(9);
});
