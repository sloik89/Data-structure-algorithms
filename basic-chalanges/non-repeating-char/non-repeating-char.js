function nonRepeating(str) {
  let nonRepeating = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    nonRepeating[char] = nonRepeating[char] ? nonRepeating[char] + 1 : 1;
  }
  //   for (const char of str) {
  //     if (nonRepeating[char] === 1) {
  //       return char;
  //     }
  //   }
  for (const proprerty in nonRepeating) {
    if (nonRepeating[proprerty] === 1) {
      return proprerty;
    }
  }
}

module.exports = { nonRepeating };
