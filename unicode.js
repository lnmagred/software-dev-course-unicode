// Task 1: Extract Code Points from Characters
let inputString1 = "Code";
let firstCodePoint = inputString1.charCodeAt(0);
let thirdCodePoint = inputString1.charCodeAt(2);

// Task 2: Create a Word from Code Points
let wordFromCodePoints = String.fromCharCode(72, 101, 108, 108);

// Task 3: Swap First and Last Characters
let inputString2 = "Launch";

let firstCharNum = inputString2.charCodeAt(0);
let lastCharNum = inputString2.charCodeAt(inputString2.length - 1);
let middlePart = inputString2.slice(1, 5);

let swappedString = String.fromCharCode(lastCharNum) + middlePart + String.fromCharCode(firstCharNum);

// Log all results
console.log({
  firstCodePoint,
  thirdCodePoint,
  wordFromCodePoints,
  swappedString,
});