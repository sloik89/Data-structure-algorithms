const removeDuplicate = (str) => {
  let nonDuplicate = "";
  for (let i = 0; i < str.length; i++) {
    if (!nonDuplicate.includes(str[i])) {
      nonDuplicate += str[i];
    }
  }
  return nonDuplicate;
  console.log(nonDuplicate);
};
module.exports = { removeDuplicate };
