function isPalindrome(word) {
  // Write your algorithm here
  // remove non-alphanumeric letters and turn them into lowercase
  const cleanWord = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  // reverse the clean word
  const reversedWord = cleanWord.split('').reverse().join('');
  // If the reverse word is a palindrome return true otherwise false
  return cleanWord === reversedWord
}

/* 
  Add your pseudocode here
  1.Remove non-alphanumeric letters and turn them into lowercase
  2.Create a variable to store the reversed word
  3.Compare the cleanWord to the reversedWord
  4.If they match return true otherswise return false
*/

/*
  Add written explanation of your solution here
   The function first cleans the input word by removing non-alphanumeric characters and converting it to lowercase. 
   Then, it creates a reversed version of the clean word and compares it with the original clean word. 
   If the two are equal, the word is a palindrome, and the function returns true. 
   Otherwise, it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;


