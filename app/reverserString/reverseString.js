function reverseString(str) {
  const reversedString = str.split("").reverse().join("").replaceAll(",", "");

  return reversedString;
}

module.exports = reverseString;
