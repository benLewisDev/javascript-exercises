const removeFromArray = function (array, ...arg) {
  let newArray = [];
  array.forEach((item) => {
    if (!arg.includes(item)) newArray.push(item);
  });
  return newArray;
};

removeFromArray([1, 2, 3, 4], 3);

// Do not edit below this line
module.exports = removeFromArray;
