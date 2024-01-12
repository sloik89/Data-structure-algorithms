const { removeDuplicate } = require("./removeDuplicate");
test("Removes Duplicate", () => {
  expect(removeDuplicate("hello")).toBe("helo");
});
