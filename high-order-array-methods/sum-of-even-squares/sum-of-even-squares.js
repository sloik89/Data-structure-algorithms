function sumOfEvenSquares(arr) {
  return arr
    .filter((item) => item % 2 === 0)
    .map((item) => item ** 2)
    .reduce((item, acc) => {
      return acc + item;
    }, 0);
}
module.exports = sumOfEvenSquares;
