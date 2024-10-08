// Your job is simple, if x squared is more than 1000, return It's hotter than the sun!!, else, return Help yourself to a honeycomb Yorkie for the glovebox.
function apple(x){
    return (x**2 > 1000) ? "It's hotter than the sun!!" : "Help yourself to a honeycomb Yorkie for the glovebox."
  }

// The wide-mouth frog is particularly interested in the eating habits of other creatures.
// He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!
// When he meets the alligator, it then makes a tiny mouth.
// Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide.
function mouthSize(animal) {
    return (animal.toLowerCase() === "alligator") ? "small" : "wide"
  }

// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.
function remove (string) {
    return (string.charAt(string.length - 1) === "!") ? string.slice(0, -1) : string
  }

function remove2(s) {
    return s.endsWith('!') ? s.slice(0, -1) : s;
  }

//  Create a method that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.
function sayHello( name, city, state ) {
    let answer = `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`
    return answer
  }

//  You need to write a function that reverses the words in a given string. Words are always separated by a single space.
//  As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

function reverse(string){
    return string.trim().split(" ").reverse().join(" ")
  }
  


