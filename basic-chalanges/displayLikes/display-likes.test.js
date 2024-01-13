const displayLikes = require("./display-likes");
test("display likes", () => {
  expect(displayLikes(["ALex", "Jacob", "Mark", "Max", "Jill"])).toEqual(
    "ALex and Jacob and 3 likes this"
  );
});
