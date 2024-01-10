//filter out the geese
// return an array containing all of the strings in the input array except those that match strings in geese
function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter((element) => !geese.includes(element))
  };
//Find Multiples of a Number. // For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.
function findMultiples(integer, limit) {
    const array = [];
    for(let i = 1; i <= Math.floor(limit / integer); i++){
      array.push(integer * i)
    }
    return array
  }
function findMultiplesCodeWars(int,limit){
    let result = []
    for (let i = int; i<=limit ; i+=int)
      result.push(i)
    return result
  }
//Sort and Star
// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
// The returned value must be a string, and have "***" between each of its letters.
// You should not remove or add elements from/to the array.
function twoSort(s) {
    return s.sort()[0].split("").join("***")
  }