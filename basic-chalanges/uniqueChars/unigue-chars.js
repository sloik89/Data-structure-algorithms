const uniqueChars = (str) => {
  const charCount = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char]) {
      return false;
    }
    charCount[char] = true;
  }
  console.log(charCount);
  return true;
};
const uniqueCharsSet = (str) => {
  const charCount = new Set();
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount.has(char)) {
      return false;
    }
    charCount.add(char);
  }
  console.log(charCount);
  return true;
  console.log(charCount);
};
module.exports = { uniqueChars, uniqueCharsSet };
