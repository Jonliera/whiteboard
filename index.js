//Palindrome
// 1. Write a function that takes a string as an argument and returns true if the string is a palindrome, false otherwise.

function palindrome(str) {
  str = str.toLowerCase();
  return str === str.split("").reverse().joins("");
}

console.log(palindrome("racecar"));
