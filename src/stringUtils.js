/**
 * String utility functions
 */

/**
 * Capitalises the first letter of each word in a string.
 * @param {string} str
 * @returns {string}
 */
function titleCase(str) {
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string.");
  }
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * Reverses a string.
 * @param {string} str
 * @returns {string}
 */
function reverseString(str) {
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string.");
  }
  return str.split("").reverse().join("");
}

/**
 * Checks whether a string is a palindrome (case-insensitive, ignores spaces).
 * @param {string} str
 * @returns {boolean}
 */
function isPalindrome(str) {
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string.");
  }
  const cleaned = str.toLowerCase().replace(/\s+/g, "");
  return cleaned === cleaned.split("").reverse().join("");
}

/**
 * Truncates a string to a maximum length, appending "..." if truncated.
 * @param {string} str
 * @param {number} maxLength
 * @returns {string}
 */
function truncate(str, maxLength) {
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string.");
  }
  if (maxLength < 0) {
    throw new RangeError("maxLength must be non-negative.");
  }
  if (str.length <= maxLength) { return str; }
  return str.slice(0, maxLength) + "...";
}

/**
 * Counts the occurrences of a substring within a string.
 * @param {string} str
 * @param {string} substring
 * @returns {number}
 */
function countOccurrences(str, substring) {
  if (typeof str !== "string" || typeof substring !== "string") {
    throw new TypeError("Both arguments must be strings.");
  }
  if (substring.length === 0) { return 0; }
  let count = 0;
  let pos = 0;
  while ((pos = str.indexOf(substring, pos)) !== -1) {
    count++;
    pos += substring.length;
  }
  return count;
}

module.exports = {
  titleCase,
  reverseString,
  isPalindrome,
  truncate,
  countOccurrences,
};
