const { formatPhoneLoop, formatedSlicePhoneNumber } = require("./format-phone");
const result = formatPhoneLoop([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
const result1 = formatedSlicePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
console.log(result, result1);
