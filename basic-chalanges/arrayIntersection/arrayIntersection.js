const arrayIntersection = (arr1, arr2) => {
  let intersection = [];
  arr1.forEach((elem, idx) => {
    if (arr2.includes(elem)) {
      intersection.push(elem);
    }
  });
  console.log(intersection);
  return intersection;
};

module.exports = arrayIntersection;
