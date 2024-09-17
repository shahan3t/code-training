// Complete the solution so that it reverses all of the words within the string passed in.
// Words are separated by exactly one space and there are no leading or trailing spaces.
// Example(Input --> Output)
function reverseWords(str){
    return str.split(" ").reverse().join(" "); // reverse those words
  }

//   Write a function that returns a string in which firstname is swapped with last name.
function nameShuffler(str){
    return str.split(" ").reverse().join(" ")
  }

//Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
function shortcut (string) {
    return string.replace(/[aeiou]/gi, "");
  }

// Given 2 strings, a and b, return a string of the form short+long+short, 
// with the shorter string on the outside and the longer string on the inside. 
// The strings will not be the same length, but they may be empty ( zero length ).
function solution(a, b){
    return a.length < b.length ? a + b + a : b + a + b
  }

//   Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.
//   If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.
//   Return the total figure the individual will receive as a string prefixed with "£" 
function bonusTime(salary, bonus) {
    return bonus ? `£${salary * 10}` : `£${salary}`
  }
