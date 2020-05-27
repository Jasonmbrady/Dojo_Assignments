//Nums and Sums. Print values and sum so far or each element in the array

var testArr = [6, 3, 5, 1, 2, 4];
var sum = 0;
for (var num = 0; num < testArr.length; num++) {
  sum = sum + testArr[num];
  console.log("Num: " + testArr[num] + ", Sum: " + sum + ",");
}

// Value * position. multiply each element by its array index.
var testArr = [6, 3, 5, 1, 2, 4];
for (var num = 0; num < testArr.length; num++) {
  testArr[num] = testArr[num] * num;
}
console.log(testArr);
