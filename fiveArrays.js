// t's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
function getAverage(marks){
    return Math.floor((marks.reduce((a, b) => (a + b)))/marks.length)
  }

//   You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

//   Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).
  
//   Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics
function fixTheMeerkat(arr) {
    return arr.reverse();
  }
//   Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.
  function divisibleBy(numbers, divisor){
    return numbers.filter((x) => x % divisor === 0)
}


// Given the initial configuration of the cubes in the box, find out how many cubes are in each of the n columns after Bob switches the gravity.

const flip=(d, a)=>{
    if(d === 'R'){
      return a.sort((x,y) => x-y)
    }
    if(d === 'L'){
      return a.sort((x,y) => y-x)
    }
  }
  const flip2 = (d, a) => a.sort((x, y) => d === 'R' ? x - y : y - x);

//   Write a method, that will get an integer array as parameter and will process every number from this array.
//   Return a new array with processing every number of the input-array like this:
//   If the number has an integer square root, take this, otherwise square the number.

function squareOrSquareRoot(array) {
    return array.map(x => {
      return (x % Math.sqrt(x)) === 0 ? Math.sqrt(x) : Math.pow(x,2)
    })
 }

