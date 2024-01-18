const { nonRepeating } = require("./non-repeating-char");
test("Return non repeating values", () => {
  expect(nonRepeating("aabccdeff")).toBe("b");
});
