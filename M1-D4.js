/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculate the area of the rectangle.
*/

const areaRectangle = (a, b) => {
	return a * b;
};
/* EXERCISE 2
Write a function "crazySum" which receives two given integers. If the two values are same, then returns triple their sum.
*/

const crezySum = (a, b) => {
	const sum = a + b;
	a === b ? sum * 3 : nul;
	return sum;
};

/* EXERCISE 3
Write a function "crazyDiff" that computes the 
absolute difference between a given number and 19. 
Returns triple their absolute difference if 
the specified
number is greater than 19.
*/

const crazyDiff = (a) => {
	const res = a - 19;
	return res > 19 ? res * 3 : res;
};

/* EXERCISE 4
Write a function "boundary" which accept an integer N and returns true if N is within 20 and 100 (included) or equal to 400.
*/

const boundry = (int) => {
	return (20 < int && int < 100) || 400 === int ? true : false;
};

/* EXERCISE 5
Write a function "strivify" which accepts a string S. Add to S "Strive" in front of a given string, if the given string begins with "Strive" then return the original string.
*/

const strivify = (str) => {
	return str.match(/^Strive/) ? str : `Strive ${str}`;
};

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

const check3and7 = (a) => {
	return a % 3 === 0 || a % 7 === 0 ? true : false;
};

/* EXERCISE 7
Write a function "reverseString" to reverse programmatically a given string (es.: Strive => evirtS).
*/

str.split('').reverse().join('');

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as parameter
*/

const upperFirst = (str) => {
	if (str.match(/^[A-Z]/g)) {
		return str;
	}
	const firstLtter = str[0].toUpperCase();
	str.replace(/^[a-z]/, firstLtter);
};

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

const cutString = (str) => {
	if (str.length >= 2) {
		let arr = string.split('');
		arr.pop();
		arr.unshift();
		return arr.join('');
	}
	return str;
};

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10
*/
const giveMeRandom = (n) => {
	let res = [];
	for (let i = 0; i < n; i++) {
		res[i] = Math.floor(Math.random() * 11);
	}
	return res;
};
