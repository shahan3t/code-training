// //Your function takes two arguments:
// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.
function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - 2 * sonYearsOld)
    
  }

//   Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him
//   Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)
//   If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
//   If he doesn't get 10 hoops, return the string "Keep at it until you get it".
function hoopCount (n) {
    //your code goes here
   return n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it"
 }

//  Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
function removeEveryOther(arr){
    return arr.filter((x, i) => i % 2 === 0)
  }

//calculate how many people must wait to get on a bus given a cap and the number of people already on the bus
function enough(cap, on, wait) {
    return on + wait <= cap ? 0 : (on + wait) - cap
  }

function enough(cap, on, wait) {
    return Math.max(wait + on - cap, 0);
  }

//write a square function
const square = num => num * num