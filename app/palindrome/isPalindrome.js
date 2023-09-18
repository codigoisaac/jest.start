function isPalindrome(word) {
  const reversedWord = word
    .toLowerCase()
    .split("")
    .reverse()
    .join("")
    .replaceAll(",", "");

  return word.toLowerCase() === reversedWord;
}

module.exports = isPalindrome