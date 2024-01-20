const { highestScoringWordVersion2 } = require("./highest-scoring-word");
test("highest scoring word ", () => {
  expect(highestScoringWordVersion2("Hello my name is xavier")).toBe("xavier");
});
