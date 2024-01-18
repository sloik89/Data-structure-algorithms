const { findingMissingLetter } = require("./finding-missing-letter");
test("Finding Missing Letter", () => {
  expect(findingMissingLetter(["a", "b", "c", "f", "g"])).toBe("d");
});
