function bigFirstLetter(str) {
  return str
    .split(" ")
    .map((item) => {
      item = item[0].toUpperCase() + item.slice(1);
      return item;
    })
    .join(" ");
}

module.exports = bigFirstLetter;
