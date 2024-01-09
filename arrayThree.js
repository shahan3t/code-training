// Find the first non-consecutive number
// Your task is to find the first element of an array that is not consecutive.
// By not consecutive we mean not exactly 1 larger than the previous element of the array.
// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.
// If the whole array is consecutive then return null2.
// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. 
// The numbers could be positive or negative and the first non-consecutive could be either too!
function firstNonConsecutive (arr) {
    let result = arr.find((val, index) => val !== index + arr[0]);
    return (Number.isInteger(result)) ? result : null;
  }
//   You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

//   As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.
  
//   For example(Input --> Output):
  
//   10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//    1 --> [1]
  function monkeyCount(n) {
    const arr = []
    for(let i = 1; i <= n; i++){
      arr.push(i)
    }
    return arr;
  }


//   Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

//   "I love you"
//   "a little"
//   "a lot"
//   "passionately"
//   "madly"
//   "not at all"
//   If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.
  
//   When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.
  
//   Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.
  
  
function howMuchILoveYou(n) {
    const phrases = [
        'I love you',
        'a little',
        'a lot',
        'passionately',
        'madly',
        'not at all',
    ] 
    return phrases[(n - 1) % phrases.length] 
}