//A wolf in sheep's clothing
function warnTheSheep(queue) {
    const wolfPosition = queue.length - queue.indexOf("wolf") - 1;
    return wolfPosition === 0 ? "Pls go away and stop eating my sheep"
    : `Oi! Sheep number ${wolfPosition}! You are about to be eaten by a wolf!`
  }
//Codewars: const position = queue.reverse().indexOf('wolf');

//Merge two sorted arrays into one
function mergeArrays(arr1, arr2) {
    return Array.from(new Set(arr1.concat(arr2).sort((a,b) => (a-b))));
  }

//remove duplicates from an array
function uniqueValues(arr) {
    return [...new Set(arr)]
  }

