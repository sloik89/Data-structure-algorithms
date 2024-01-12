const palindrome = (str) => {
  const formatedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  const reverse = formatedStr.split("").reverse().join("");
  return reverse === formatedStr;
};
const isPalindrome = (str) => {
  const formattedStr = removeAlphaNumeric(str.toLowerCase());
  const reverse = reverseString(formattedStr);

  return reverse === formattedStr;
};
const removeAlphaNumeric = (str) => {
  let formattedStr = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (isAlphaNumeric(char)) {
      formattedStr += char;
    }
  }
  return formattedStr;
};
const isAlphaNumeric = (char) => {
  const code = char.charCodeAt(0);
  return (code >= 48 && code <= 57) || (code >= 97 && code <= 122);
};
const reverseString = (str) => {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
};
module.exports = { palindrome, isPalindrome };
