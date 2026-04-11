/**
 * Array utility functions
 */

/**
 * Returns the sum of all numbers in an array.
 * @param {number[]} arr
 * @returns {number}
 */
function sum(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Input must be an array.");
  }
  return arr.reduce((acc, val) => acc + val, 0);
}

/**
 * Returns the average (mean) of all numbers in an array.
 * @param {number[]} arr
 * @returns {number}
 * @throws {Error} if the array is empty
 */
function average(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Input must be an array.");
  }
  if (arr.length === 0) {
    throw new Error("Cannot compute average of an empty array.");
  }
  return sum(arr) / arr.length;
}

/**
 * Returns a new array with duplicate values removed.
 * @param {any[]} arr
 * @returns {any[]}
 */
function unique(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Input must be an array.");
  }
  return [...new Set(arr)];
}

/**
 * Flattens a nested array one level deep.
 * @param {any[]} arr
 * @returns {any[]}
 */
function flattenOne(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Input must be an array.");
  }
  return arr.reduce(
    (acc, val) => acc.concat(Array.isArray(val) ? val : [val]),
    []
  );
}

/**
 * Groups array elements by the result of a key function.
 * @param {any[]} arr
 * @param {Function} keyFn
 * @returns {Object}
 */
function groupBy(arr, keyFn) {
  if (!Array.isArray(arr)) {
    throw new TypeError("First argument must be an array.");
  }
  if (typeof keyFn !== "function") {
    throw new TypeError("Second argument must be a function.");
  }
  return arr.reduce((groups, item) => {
    const key = keyFn(item);
    if (!groups[key]) { groups[key] = []; }
    groups[key].push(item);
    return groups;
  }, {});
}

module.exports = { sum, average, unique, flattenOne, groupBy };
