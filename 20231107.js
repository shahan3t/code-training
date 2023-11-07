//Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) 
//that receive a list of integers as input, and return the largest and lowest number in that list, respectively.
var min = function(list){
    return list.sort((a,b) => a-b)[0]
}

var max = function(list){
    return list.sort((a,b) => b-a)[0]
}

const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);

// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. 
// You can ignore any need to sanitize words or add punctuation, 
// but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

function smash (words) {
    return words.join(" ")
 };

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
// Array can contain numbers or strings. X can be either.
// Return true if the array contains the value, false if not.

function check(a,x){
    return a.includes(x);
  };

// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! 
// You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.
// Considering these factors, write a function that tells you if it is possible to get to the pump or not.
// Function should return true if it is possible and false if not.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return mpg * fuelLeft >= distanceToPump;
  };

