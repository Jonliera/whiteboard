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

// 5. Write a function that takes a string as an argument and returns the string with the first letter of every word capitalized.

function capitalize(str) {
  let newStr = "";
  for (let i = o; i < str.length; i++) {
    if (i === 0 || str[i - 1] === " ") {
      newStr += str[i].toUpperCase();
    }
  }
  return newStr;
}

capitalize("hello world"); // Hello World

// 6. Write a function that takes a string as an argument and returns the string with all of the vowels removed.

function removeVowels(str) {
  let vowels = "aeiou";
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (vowels.indexOf(char) === -1) {
      newStr += str[i];
    }
  }
  return newStr;
}

removeVowels("hello world"); // hll wrld

// 7. Write a function that takes a string as an argument and returns the string with all of the consonants removed.

function removeConsonants(str) {
  let vowels = "aeiou";
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (vowels.indexOf(char) !== -1) {
      newStr += str[i];
    }
  }
  return newStr;
}

removeConsonants("hello world"); // eo oo

// 8. Write a function that takes a string as an argument and returns the string with all of the vowels and consonants reversed.

function reverseVowels(str) {
  let vowels = "aeiou";
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (vowels.indexOf(char) !== -1) {
      newStr += str[i];
    }
  }
  return newStr.split("").reverse().join("");
}

reverseVowels("hello world"); // olle

// 9. Write a function that takes a string as an argument and returns the string with all of the words capitalized.

function capitalizeWords(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (i === 0 || str[i - 1] === " ") {
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}

capitalizeWords("hello world"); // Hello World

// 10. Write a function that takes a string as an argument and returns the string with all of the words reversed.

function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}

reverseWords("hello world"); // world hello

//Fibonacci sequence

//11. Write a function that takes a number n and returns the nth number in the Fibonacci sequence.

function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

fib(0); // 0
fib(1); // 1
fib(2); // 1
fib(3); // 2
fib(4); // 3
fib(5); // 5
fib(6); // 8
fib(7); // 13
fib(8); // 21
fib(9); // 34
fib(10); // 55

//13. Fizzbuzz

// Write a function that does the following:

// console logs the numbers from 1 to n, where n is the integer the function takes as its parameter

// logs fizz instead of the number for multiples of 3

// logs buzz instead of the number for multiples of 5

// logs fizzbuzz for numbers that are multiples of both 3 and 5

function fizzbuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}
