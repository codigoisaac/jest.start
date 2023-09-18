const reverseString = require("../reverserString/reverseString");

function isPalindrome(word) {
  const reversedWord = reverseString(word);

  return word.toLowerCase() === reversedWord.toLowerCase();
}

module.exports = isPalindrome;
