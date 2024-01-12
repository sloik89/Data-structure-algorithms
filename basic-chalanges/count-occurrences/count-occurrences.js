//  {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === char) {
//       count++;
//     }
//   }

//   return count;
// }
function countOccurrences(str, char) {
  console.log(str.split(char));
  return str.split(char).length - 1;
}
module.exports = countOccurrences;
