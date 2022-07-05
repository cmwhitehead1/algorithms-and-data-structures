const verify = require('../util/verify')
const { RANDOM_DATA_SET, SORTED_DATA_SET } = require('../data-set')

const testAllCases = false;

/**
 * Keep splitting the dataset in half until you find your target.
 * 
 * Iterative Approach
 * 
 * Time Complexity = O(log n) ==> Logarithmic
 * Space Complexity = O(n) ===> Constant Space
 * 
 * @param {*} list (NEEDS to be sorted)
 * @param {*} targetItem 
 * @returns index of targetItem or -1 if not found.
 */
function binary_search(list, targetItem) {
  let start = 0
  let end = list.length - 1

  while (start <= end) {
    let midpoint = Math.floor((start + end) / 2)

    // return once we have a match
    if (list[midpoint] === targetItem) return midpoint

    // make the data set smaller and smaller every time 
    if (list[midpoint] < targetItem) {
      start = midpoint + 1
    } else {
      end = midpoint - 1
    }
  }

  // Return -1 if we don't find the targetItem
  return -1
}


/**
 * TESTS
 */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

if (testAllCases) {
  const numbersToFind = [8, 13, 6, 14, 2, 10, 15, 3, 9, 5, 12, 4, 7, 11, 1, 17, -1];
  numbersToFind.map((item) => {
    verify(binary_search(numbers, item))
  })
} else {

  console.time('binary_search');

  verify(binary_search(SORTED_DATA_SET, 900))

  console.timeEnd('binary_search');
}
