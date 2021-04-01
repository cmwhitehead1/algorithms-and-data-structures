const verify = require('../util/verify')
const { RANDOM_DATA_SET, SORTED_DATA_SET } = require('../data-set')

const testAllCases = false

/**
 * 
 * Time Complexity = O(n)
 * 
 * @param {*} list (does NOt need to be sorted)
 * @param {*} targetItem 
 * @returns index of targetItem or -1 if not found.
 */
function linear_search(list, targetItem) {
  if (list.length === 0) return -1

  for (let i = 0, len = list.length; i < len;) {
    if (list[i] === targetItem) {
      return i
    }
    i++
  }
  return -1
}


/**
 * TESTS
 */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

if (testAllCases) {
  const numbersToFind = [8, 13, 6, 14, 2, 10, 15, 3, 9, 5, 12, 4, 7, 11, 1, 17, -1];
  numbersToFind.map((item) => {
    verify(linear_search(numbers, item))
  })
} else {

  console.time('linear_search');

  verify(linear_search(SORTED_DATA_SET, 900))

  console.timeEnd('linear_search');
}



