// Your task is to sum the differences between consecutive pairs in the array in descending order.
function sumOfDifferences(arr) {
    let sorted = arr.sort((a, b) => b - a)
    let sum = 0;
    for (let i = 0; i < sorted.length - 1; i++) {
      sum += (arr[i] - arr[i + 1]);
    }
    return sum;
  }
  function sumOfDifferences(arr) {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}

const sumOfDifferences = arr => arr
  .sort((a, b) => b - a)
  .map((a, i) => a - arr[i + 1] || 0)
  .reduce((a, b) => a + b, 0);