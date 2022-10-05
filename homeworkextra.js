// Additional assignments for Day 3

/*EX 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/

isMale = "male";

let gender,
  msg = "";
if (isMale === "male") {
  msg = "male";
} else {
  msg = "female";
}

console.log(msg);

/*EX 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/

let firstNum = 3;
let secondNum = 5;

let additionOfNumb,
  amsg = "";
if (firstNum + secondNum === 8) {
  amsg = "the addition is 8";
} else {
  amsg = "the addition is not 8";
}

let substractionOfNumb1,
  bmsg = "";
if (firstNum - secondNum === 8) {
  bmsg = "the substraction is 8";
} else {
  bmsg = "the substraction is not 8";
}

let substractionOfNumb2,
  cmsg = "";
if (secondNum - firstNum === 8) {
  cmsg = "the substraction is 8";
} else {
  cmsg = "the substraction is not 8";
}

console.log(amsg, bmsg, cmsg);

/*EX 3
 Create a variable and assign to it the concatenation of two strings.
*/

let one = "random1";
let two = "random2";

let twostrings = one + two;

console.log(twostrings);

/*EX 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

let sortnumbers = [1, 3, 5];
let highestToLowest = sortnumbers.sort((a, b) => b - a);

console.log(highestToLowest);

/*EX 5
 Write a piece of code for finding the average of two given integers.
*/

let numb = [2, 8];
let average = numb.reduce((a, b) => a + b, 0) / numb.length;
console.log(average);

/*EX 6
 Write a piece of code for finding the longest of two given strings.
*/

let arr = ["a", "aaa"];

let length = 0;
let longest;

for (let i = 0; i < arr.length; i++) {
  if (arr[i].length > length) {
    let lgth = arr[i].length;
    longest = arr[i];
  }
}

console.log(longest);

/*EX 7
 Write a piece of code for checking if a given value is a integer or not.
*/

function integer(x) {
  if (Number.isInteger(x)) {
    return "integer";
  }
  return "not integer";
}

console.log(integer(3.5));
console.log(integer(4));

/*EX 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/

function percentage(num, per) {
  return (80 / 400) * 100;
}

console.log(percentage(400, 20.0));

/*EX 9
   Write a piece of code for checking if a given number is even or odd.
  */

let number = 7;
let result = number % 2;
if (number % 2 == 0) {
  console.log("even");
} else {
  console.log("odd");
}
