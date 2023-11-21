// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
// Mind the input validation.

  function sumArray(array) {
    return array ? array.sort((a,b) => a - b).slice(1, -1).reduce((a,c) => a + c, 0) : 0
  }

console.log(sumArray([5,4,3,1,2]))