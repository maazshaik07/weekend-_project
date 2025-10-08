var arr = [1, 2, 3, 4, 5];
// console.log(arr[5]);
// arr[2] = "Sayeed";

// Adding Elements
arr.push(7800); // To End Of Array
arr.unshift(10); // To Start of Array

// Removing elements
arr.pop(); // From the End of Array
arr.shift(); // From the Start of Array

// console.log(arr.indexOf(4));
// console.log(arr.includes("4"));
// var temp = arr.slice(1, 3);
// var temp = arr.splice(1, 3);
// var temp = arr.join(" | ");
// var temp = arr.reverse();
// var str = "Sayeed";
// var temp = str.split("").reverse().join("");
var temp = arr.toReversed();

// console.log(arr, temp);

var add = function () {
  return 1 + 1;
};

var subtract = function () {
  return 10 - 5;
};

var arr2 = [add, subtract()];
// console.log(arr2[0]());
console.log(Number.isNaN(NaN)); // For Checking DataType of NaN
console.log(Array.isArray([])); // For Chekcing DataType of and Arraycls
c