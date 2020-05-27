//SIGMA
function sigma(num) {
  var sum = 0;
  for (var i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}

//FACTORIAL
function factorial(num) {
  var sum = 0;
  for (var i = 1; i <= num; i++) {
    sum = sum * i;
  }
  return sum;
}

//FIBONACCI

function fibonacci(num) {
  var numbers = [0, 1];
  for (var i = 1; i < num; i++) {
    numbers.push(numbers[i] + numbers[i - 1]);
  }
  return numbers[numbers.length - 1];
}

//ARRAY SECOND TO LAST
function arrSecLast(arr) {
  if (arr.length < 2) {
    return null;
  } else {
    return arr[arr.length - 2];
  }
}

//ARRAY Nth TO LAST
function arrNthLast(arr, n) {
  if (arr.length < n) {
    return null;
  } else {
    return arr[arr.length - n];
  }
}

//Double Trouble
function doubleUp(arr) {
  var loops = arr.length;
  var temp = 0;
  for (var i = 0; i < loops; i++) {
    arr.push(arr[i]);
  }
  for (var j = 1; j < loops; j += 2) {
    temp = arr[j];
    arr[j] = arr[j + loops - 1];
    arr[j + loops - 1] = temp;
  }
  return arr;
}

//Recursive Fibonacci
function fib(num) {
  if (num === 0 || num === 1) {
    return num;
  }
  return fib(num - 2) + fib(num - 1);
}

//Recursive Fill
function recFill() {}
