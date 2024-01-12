function maxNumberArray(arr) {
  return Math.max(...arr);
}
function maxNumberForLoop(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log(max);
  return max;
}
module.exports = { maxNumberArray, maxNumberForLoop };
