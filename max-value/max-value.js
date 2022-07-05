const verify = require('../util/verify')
const { RANDOM_DATA_SET, SORTED_DATA_SET, RANDOM_DATA_SET2, RANDOM_DATA_SET3 } = require('../data-set')

const testAllCases = false;

// For Asymptotic reasons abstracting out the premature return;

const prematureReturn = (n, r) => {
	if (n.length === 1) return r;
}

/**
 * Find the largest number in the array.
 * 
 * Time Complexity = O(n) ==> Linear
 * Space Complexity = O(n) ==> Linear
 * 
 * @param {*} nums 
 * @returns largest number in array.
 */

const maxValue = (nums) => {
	let max = nums[0]; // initial max;
	// let i = 1;

	prematureReturn(nums, max); // if only one value in array return it.

	// while (i <= nums.length) {
	// 	if(nums[i] > max){
	// 		max = nums[i];
	// 	}
	// 	i++;
	// }

	for (let i = 1, len = nums.length; i <= len; i++) {
		if (nums[i] > max) {
			max = nums[i]
		}
	}

	console.log(max)
	return max;
};

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

	console.time('max-value');

	verify(maxValue(RANDOM_DATA_SET));
	verify(maxValue(RANDOM_DATA_SET2));
	verify(maxValue(RANDOM_DATA_SET3));

	console.timeEnd('max-value');
}
