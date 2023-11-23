// 8KYUDeoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').
// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').
// Create a function which translates a given DNA string into RNA.
function DNAtoRNA(dna) {
    return dna.replaceAll('T','U');
  }

//8KYU Write a function to split a string and convert it into an array of words.
  function stringToArray(string){
    return string.split(' ')
  }

// //7KYU Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.
function getCount(str) {
  let a = 0
  str.split('').forEach((c) => {
    if(c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u'){
      a+=1
    }
  })
  return a
 }

 function getCount2(str) {
  return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
 }

// 6KYU You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

 function likes(names) {
  if(names.length === 0){
    return `no one likes this`
  } else if(names.length > 3){
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
  } else if(names.length === 3){
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
  } else if(names.length === 2){
    return `${names[0]} and ${names[1]} like this`
  } else if(names.length === 1){
    return `${names[0]} likes this`
  }
}

// 7KYU Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
  return str.split('')
            .filter(c => !(c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u' || c === 'A' || c === 'E' || c === 'I' || c === 'O' || c === 'U'))
            .join('')
}

function disemvowel(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  
  return str.split('').filter(function(el) {
    return vowels.indexOf(el.toLowerCase()) == -1;
  }).join('');
}
// 8KYU Build a function that returns an array of integers from n to 1 where n>0.
// Example : n=5 --> [5,4,3,2,1]
const reverseSeq = n => {
  let array = [];
  for(i = n; i > 0; i--){
    array.push(i)
  }
  return array
};

// 8KYU Create a function with two arguments that will return an array of the first n multiples of x.
// Assume both the given number and the number of times to count will be positive numbers greater than 0.
// Return the results as an array or list ( depending on language ).
function countBy(x, n) {
  var z = [];
  for (i = 1; i <= n; i++) {
      z.push(x * i);
  }
  return z;
}