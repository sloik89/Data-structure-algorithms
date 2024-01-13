const arrayIntersection = require("./arrayIntersection");
test("Array Intersection", () => {
  expect(arrayIntersection([1, 3, 5, 6, 7, 8], [9, 1, 12, 3, 5])).toEqual([
    1, 3, 5,
  ]);
});
