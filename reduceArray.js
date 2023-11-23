// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
function grow(x){
    return x.reduce((a,c) => a * c, 1)
  }

//-----------------
//   There was a test in your class and you passed it. Congratulations!
//   But you're an ambitious person. You want to know if you're better than the average student in your class.
//   You receive an array with your peers' test scores. Now calculate the average and compare your score!
//   Return True if you're better, else False!
//   Note:
//   Your points are not included in the array of your class's points. 
//   For calculating the average point you may add your point to the given array!

function betterThanAverage(classPoints, yourPoints) {
    let averagePoints = classPoints.reduce((a, c) => a + c, 0) / classPoints.length
    return yourPoints > averagePoints 
  }

//---------------------
//   Write function bmi that calculates body mass index (bmi = weight / height2).
//   if bmi <= 18.5 return "Underweight"
//   if bmi <= 25.0 return "Normal"
//   if bmi <= 30.0 return "Overweight"
//   if bmi > 30 return "Obese"

function bmi(weight, height) {
  let bmi = weight / height ** 2
  return bmi <= 18.5 ? "Underweight" : bmi <= 25 ? "Normal" : bmi <= 30 ? "Overweight" : "Obese"
}
// ---------------
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
// Note: input will never be an empty string

function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}