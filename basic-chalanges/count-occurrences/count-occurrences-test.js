const countOccurrences = require("./count-occurrences");
test("Count letter of character", () => {
  expect(countOccurrences("hello", "l")).toBe(2);
  expect(countOccurrences("programming", "m")).toBe(2);
});
