// Gobal and local scope
// name function

const firstFraction = 3 / 4;
const secondFraction = 5 / 7;

// function findBiggestFraction(a, b) {
//   let result;
//   (a > b) ? result = ['First Fraction ', a] : result = ['Second Fraction ', b];
//   return result;
// }

// const fractionResult = findBiggestFraction(firstFraction, secondFraction);

// console.log(fractionResult);
// console.log(firstFraction);
// console.log(secondFraction);
// console.log(fractionResult[0], 'greater than second Fraction');

// Anonymous function
// invoke immediately

const theBiggest = (function (a, b) {
  let result;
  (a > b) ? result = ['First Fraction ', a] : result = ['Second Fraction ', b];
  return result;
})(firstFraction, secondFraction);

console.log(theBiggest);
