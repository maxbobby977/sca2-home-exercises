const assert = require("assert");
const { listenerCount } = require("process");

// Feel free to look things up online!

// # 1
const reverse = function(str) {
  // TODO - write a function which reverses the string
  let newstr = ""
  for (var i = str.length - 1; i >= 0; i--) {
    newstr += str[i];
  }
  /*
  hello
  "" + o + l + l...
  olleh
  */
  return newstr;
}

const factorial = function(num) {
  // TODO - write a function which returns the factorial of a positive integer
  // For example, 5! = 5 * 4 * 3 * 2 * 1 = 120
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  // 1 * 2 * 3 * 4 * 5
  return fact;
}

const announceDate = function() {
  // TODO - write a function which returns the current date in the following format:
  // "Today's date is January 7th, 2016. It is eleven thirty-seven in the morning."
  // get a date object
  let d = new Date();
  
  let converter = require('number-to-words');
  switch(d.getMonth()) { //0 to 12
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;  
    case 4:
      month = "May";
      break;  
    case 5:
      month = "June";
      break;  
    case 6:
      month = "July";
      break;  
    case 7:
      month = "August";
      break;  
    case 8:
      month = "September";
      break;  
    case 9:
      month = "October";
      break;  
    case 10:
      month = "November";
      break;  
    case 11:
      month = "December";
      break;  
  }
  return `Today's date is ${month} ${converter.toOrdinal(d.getDay())}, ${d.getYear() + 1900}. ` +
  `It is ${converter.toWords(d.getHours() % 12)} ${converter.toWords(d.getMinutes())} ` +
  `in the ${d.getHours() > 12 ? "evening" : "morning"}`
}

const shiftRight = function(str, num) {
  // TODO - write a function which shifts a string `num` characters to the right
  // Example = shiftThree("Hello") === "lloHe"
  const s1 = str.slice(0, -num);
  const s2 = str.slice(-num);
  // console.log(s1)
  // console.log(s2)
  return s2 + s1;
}

const tokenize = function(str) {
  // TODO - write a function which converts a multi-word string into an array of words
  return str.split(" ")
}

const uniqueOnes = function(ary) {
  // TODO - write a function which returns the inputted array without duplicate elements
  const newset = new Set(ary)
  const uniquesary = [...newset]
  return uniquesary
}

const zip = function(arr1, arr2) {
  // TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
  // if the two arrays are of unequal length
  // Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
  if (arr1.length != arr2.length) {
      return -1
  }
  let arr = []
  for (let i = 0; i < arr1.length; i++) {
    arr.push([arr1[i], arr2[i]])
  }
  return arr
}

const unzip = function(arr) {
  let arr1 = []
  let arr2 = []
  for (let i = 0; i < arr.length; i++) {
    arr1.push(arr[i][0])
    arr2.push(arr[i][1])
  }
  return [arr1, arr2]
}

// Write tests here:
assert(reverse("hello") == "olleh");
assert(factorial(5) == 120);
assert(1 < 2)
assert(1 + 2 == 3)
assert([2, 3][0] === 2)
// assert(reverse("3df") === "fd3")

// My tests
console.log("reverse: " + reverse("hello"))
console.log("tokenize: " + tokenize("my name is max"))
console.log("uniques: " + uniqueOnes([1, 1, 2, 2, 3, 3]))
console.log(zip([1, 2, 3], [1, 2, 3]))
console.log(unzip(zip([1, 2, 3], [1, 2, 3])))
console.log(announceDate())
console.log(shiftRight("hello", 4))