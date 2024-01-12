const { palindrome, isPalindrome } = require("./palindrome");
test("is Palindrome", () => {
  expect(palindrome("racecar")).toBe(true);
  expect(isPalindrome("racecarr")).toBe(false);
});
