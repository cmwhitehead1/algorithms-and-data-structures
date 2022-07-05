const verify = require('../util/verify')
const { RANDOM_DATA_SET, SORTED_DATA_SET, RANDOM_DATA_SET2, RANDOM_DATA_SET3 } = require('../data-set')

/**
 * Figure out if the number is a prime number
 * 
 * Using is float logic.
 * 
 * Time Complexity = O(n) ==> Linear
 * Space Complexity = O(1) ==> Constant
 * 
 * @param {*} number 
 * @returns boolean
 */
const isPrime = (n) => {
	if(n <= 1) return false;
  let x = 0;
  
  for(let i = 2; i < n; i++) {
		const isFloat = n/i === n/i && n/i % 1 !== 0;
		if(!isFloat) x++;
  }
  return x === 0;
};

/**
 * Figure out if the number is a prime number.
 * 
 * Using square root logic.
 * 
 * Time: O(square_root(n)) 
 * Space: O(1) == Constant
 * 
 * @param {*} number 
 * @returns boolean
 */
const isPrime2 = (n) => {
  if (n < 2) return false;
  
  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) return false;
  }
  
  return true;
};


/**
 * TESTS
 */

console.time('isPrime');

for(let i = 0; i < 50; i++){
	console.log(isPrime(i));
}

console.timeEnd('isPrime');

 