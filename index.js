//Palindrome
// 1. Write a function that takes a string as an argument and returns true if the string is a palindrome, false otherwise.

function isPalindrome(str) {
  str = str.toLowerCase();
  return str === str.split("").reverse().join("");
}

isPalindrome("racecar"); // true
isPalindrome("Racecar"); // true
isPalindrome("Racecars"); // false

// 2. Write a function that takes a string as an argument and returns the string in reverse order.

function reverse(str) {
  return str.split("").reverse().join("");
}

reverse("hello"); // olleh

// 3. Write a function that takes a string as an argument and returns the string in all caps.

function caps(str) {
  return str.toUpperCase();
}

caps("hello"); // HELLO

// 4. Write a function that takes a string as an argument and returns the string in alternating case.

function altCaps(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i].toLowerCase();
    }
  }
  return newStr;
}

altCaps("hello"); // HeLlO
