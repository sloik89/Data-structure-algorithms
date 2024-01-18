const formatPhoneLoop = (arr) => {
  let phone = "";
  arr.forEach((item, idx) => {
    if (idx === 0) {
      phone += "(";
    }
    if (idx === 3) {
      phone += ") ";
    }
    if (idx === 6) {
      phone += "-";
    }

    phone += item;
  });
  return phone;
};
const formatedSlicePhoneNumber = (arr) => {
  return `(${arr.slice(0, 3).join("")}) ${arr.slice(3, 6).join("")}-${arr
    .slice(6)
    .join("")}`;
};
module.exports = { formatPhoneLoop, formatedSlicePhoneNumber };
