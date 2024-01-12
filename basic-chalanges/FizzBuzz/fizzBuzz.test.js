const fizzBuzz = require("./fizzBuzz");
test("FizzBuzz chalange", () => {
  expect(fizzBuzz(10)).toEqual([
    1,
    2,
    "Fizz",
    4,
    "Buzz",
    "Fizz",
    7,
    8,
    "Fizz",
    "Buzz",
  ]);
});
