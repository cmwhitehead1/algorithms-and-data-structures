const verify = require('../util/verify')

const testAllCases = false;

/**
 * Keep splitting the dataset in half until you find your target.
 * 
 * Recursive Approach
 * 
 * Runs in logarithmic time
 * 
 * Time Complexity = O(log n)
 * Space Complexity = O(log n)
 * 
 * @param {*} list (NEEDS to be sorted)
 * @param {*} targetItem 
 * @returns index of targetItem or -1 if not found.
 */
function binary_search_recursion(list, targetItem) {
  if (list.length === 0 || targetItem < 0) return -1

  const midpoint = Math.floor(list.length / 2)
  let newArray;

  if (list[midpoint] === targetItem) {
    return list[midpoint]
  }

  if (list[midpoint] < targetItem) {
    newArray = list.slice(midpoint + 1);
  } else {
    newArray = list.slice(0, midpoint);
  }

  return binary_search_recursion(newArray, targetItem)
}

/**
 * TESTS
 */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

if (testAllCases) {
  const numbersToFind = [8, 13, 6, 14, 2, 10, 15, 3, 9, 5, 12, 4, 7, 11, 1, 17, -1];
  numbersToFind.map((item) => {
    verify(binary_search_recursion(numbers, item))
  })
} else {
  console.time('binary_search_recursion');

  verify(binary_search_recursion(numbers, 13))

  console.timeEnd('binary_search_recursion');
}

