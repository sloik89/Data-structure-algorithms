function reverseString(str) {
  const arr = str.split("").reverse().join("");
  console.log(arr);
  return arr;
}
module.exports = reverseString;
