// I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.
// P.S. Each array includes only integer numbers. Output is a number too.
function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
  }

  function arrayPlusArray(arr1, arr2) {
    let arr = [...arr1, ...arr2];
    return arr.reduce((a, b) => a + b);
  }

  function arrayPlusArray(...arrays) {
    return [].concat(...arrays).reduce((a,b) => a+b,0)
  }

  function arrayPlusArray(arr1, arr2) {
    return arr1.reduce((sum, cur) => sum + cur) + arr2.reduce((sum, cur) => sum + cur);
  }

// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.
// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.
// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.
function feast(beast, dish) {
	return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
}
function feast(beast, dish) {
    return dish.startsWith(beast[0]) && dish.endsWith(beast[beast.length-1])
  }

function getAge(inputString){
    // return the girl's correct age as an integer. Happy coding :)
  return parseInt(inputString[0])
}