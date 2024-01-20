const sumOfEvenSquares = require("./sum-of-even-squares");
test("sum of even squares", () => {
  expect(sumOfEvenSquares([1, 2, 3, 4, 5])).toEqual(20);
});
