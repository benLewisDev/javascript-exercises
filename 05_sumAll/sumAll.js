const sumAll = function (numOne, numTwo) {
  if (typeof numOne != "number" || typeof numTwo != "number") return "ERROR";
  if (numOne < 0 || numTwo < 0) return "ERROR";

  let sortedNums = [numOne, numTwo].sort(function (a, b) {
    return a - b;
  });

  let newNum = 0;
  for (i = sortedNums[0]; i <= sortedNums[1]; i++) {
    newNum += i;
  }
  return newNum;
};

sumAll(-10, 4);

// Do not edit below this line
module.exports = sumAll;
