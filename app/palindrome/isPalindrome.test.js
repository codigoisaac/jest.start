const isPalindrome = require("./isPalindrome");

test("Palindromes", () => {
  expect(isPalindrome("Arara")).toBe(true);
  expect(isPalindrome("Tacocat")).toBe(true);
  expect(isPalindrome("ok")).toBe(false);
});
