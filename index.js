
function isPalindrome(word) {
  //convert string to array
  const word_array=word.split('');
  //reverse the array
  const reverse_array=word_array.reverse();
  //convert array into string
  const reverse_word=reverse_array.join('');
  if(word ===reverse_word){
    return true
  } else{
    return false
  } 
}

/* 
  Add your pseudocode here
if the string is reversed and is still the same as the original string return true.

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here 
  isPalindrome("racecar");
 // console.log("=>", isPalindrome("racecar"));

isPalindrome("abba");
  
 // console.log("=>", isPalindrome("robot"));
isPalindrome("a");
isPalindrome("robot");
isPalindrome("ab")


}

module.exports = isPalindrome;
