const reverseString = require("./reverse-string");
test("Reverse string", () => {
  expect(reverseString("hello world")).toBe("dlrow olleh");
  expect(reverseString("hello")).toBe("olleh");
});
