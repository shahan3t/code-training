// Create an array that adds the length of each word seperated by a space to that word
function addLength(str) {
    //start-here
      let splitArray = str.split(" ");
      for(let i = 0; i < splitArray.length; i++){
        splitArray[i] = splitArray[i] + " " + splitArray[i].length
      }
      return splitArray;
    }

function addLengthCodeWars(str){
    return str.split(" ").map(s => `${s} ${s.length}`)
    }