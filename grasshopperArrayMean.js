// Find the mean (average) of a list of numbers in an array.


var findAverage = function (nums) {
    return nums.reduce((a,e) => a + e)/nums.length
  }