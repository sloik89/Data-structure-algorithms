function findMissingNumber(numberArr) {
  const n = numberArr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = numberArr.reduce((acc, item) => {
    acc += item;
    return acc;
  }, 0);
  return expectedSum - actualSum;
}
// findMissingNumber([10, 8, 6, 7, 5, 4, 2, 3, 1]);
// findMissingNumber([5, 3, 4, 1]);
module.exports = findMissingNumber;
