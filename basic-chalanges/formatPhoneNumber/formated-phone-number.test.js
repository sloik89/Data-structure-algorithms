const { formatPhoneLoop, formatedSlicePhoneNumber } = require("./format-phone");
test("formatted number", () => {
  expect(formatedSlicePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toBe(
    "(123) 456-7890"
  );
});
