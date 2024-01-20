const highestScoringWord = (string) => {
  const stringArr = string.split(" ");

  const scores = stringArr.map((item) => {
    let score = 0;
    for (const letter of item) {
      score += letter.charCodeAt(0) - 96;
    }
    return score;
  });
  let index = 0;
  let bigNumber = 0;
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > bigNumber) {
      bigNumber = scores[i];
      index = i;
    }
  }

  return stringArr[index];
};
function highestScoringWordVersion2(str) {
  const strArr = str.split(" ");
  const scores = strArr.map((item) => {
    return item.split("").reduce((score, letter) => {
      return score + letter.charCodeAt(0) - 96;
    }, 0);
  });

  const max = Math.max(...scores);
  const highestIdx = scores.indexOf(max);
  return strArr[highestIdx];
}
module.exports = { highestScoringWord, highestScoringWordVersion2 };
