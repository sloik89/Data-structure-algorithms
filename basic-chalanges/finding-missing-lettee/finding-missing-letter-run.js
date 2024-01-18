const {
  findingMissingLetter,
  findingMissingLetterVersion2,
} = require("./finding-missing-letter");
const result = findingMissingLetter(["a", "b", "c", "f", "g"]);
const result2 = findingMissingLetterVersion2(["a", "b", "c", "d", "f", "g"]);
console.log(result2);
