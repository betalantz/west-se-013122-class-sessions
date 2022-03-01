/* what's the algorithm problem in our own words
write a funtion which read a string and compares itself forwards and backwards
returns true if the string is the same forwards and backward, and returns false if it isnt'
*/

// function isPalindrome(word) {
//   // convert the string to array
//   // const wordArr = Array.from(word)
//   // reverse the array
//   // const reversed = wordArr.reverse()
//   // convert back to string
//   // const backWord = reversed.join("")

//   // compare the reversed string to the orignal string
//   // return boolean of the comparison
//   return word == reverseString(word)
// }

// function reverseString(string){
//   const wordArr = Array.from(string)
//   const reversed = wordArr.reverse()
//   return reversed.join("")
// }

/* 
  Add your pseudocode here
convert the string to array
reverse the array
convert back to string
compare the reversed string to the orignal string
return boolean of the comparison
*/

// function isPalindrome(word){
//   let result = true
//   let start = 0
//   let mid = Math.floor(word.length/2)
//   let end = word.length - start - 1
//   while (result) {
//     if (start === mid) break;
//     result = word[start] === word[end]
//     start++
//     end--
//   }
//   return result

// }

function isPalindrome(word){
  // iterate from the beginning to the middle
  for (let i = 0; i < word.length / 2; i++) {
  //check each letter against the corresponding letter from the end
    const j = word.length - 1 - i
  // if any letters don't match, return false
    if (word[i] !== word[j]) return false;
  }
  // if we complete the iterations and each comparison is true, the word is a palindrome
  return true
}

/*
  Add written explanation of your solution here


  r a c e c a r
  0 1 2 3 4 5 6
  i           j

  r a c e c a r
  0 1 2 3 4 5 6
    i       j


*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
