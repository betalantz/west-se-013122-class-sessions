/* what's the algorithm problem in our own words
write a funtion which read a string and compares itself forwards and backwards
returns true if the string is the same forwards and backward, and returns false if it isnt'
*/

function isPalindrome(word) {
  // convert the string to array
  // const wordArr = Array.from(word)
  // reverse the array
  // const reversed = wordArr.reverse()
  // convert back to string
  // const backWord = reversed.join("")

  // compare the reversed string to the orignal string
  // return boolean of the comparison
  return word == reverseString(word)
}

function reverseString(string){
  const wordArr = Array.from(string)
  const reversed = wordArr.reverse()
  return reversed.join("")
}

/* 
  Add your pseudocode here
convert the string to array
reverse the array
convert back to string
compare the reversed string to the orignal string
return boolean of the comparison
*/

/*
  Add written explanation of your solution here
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
