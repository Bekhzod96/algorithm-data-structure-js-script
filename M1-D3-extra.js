/* EXERCISE 1
Write the code to revert an array.
es:
[ 1 , 3, 5] ==> [5 , 3, 1]
*/
const arr = [1, 3, 5, 6, 8, 9, 10];
arr.reverse();
/* WRITE YOUR CODE HERE */

/* EXERCISE 2
Create a code to get the maximum from an array
*/

/* WRITE YOUR CODE HERE */

console.log("max", Math.max.apply(Math, arr));

/* EXERCISE 3
Create a code to get the minimum from an array
*/
console.log("min", Math.min.apply(Math, arr));

/* WRITE YOUR CODE HERE */

/* EXERCISE 4
Create a code to get only even numerical value from an array
*/

/* WRITE YOUR CODE HERE */

const newArr = [];

for (var i = 0; i < arr.length; i++) {
  // take every second element
  if (arr[i] % 2 === 0) {
    // index is even
    newArr.push(arr[i]);
  }
}

/* EXERCISE 5
Write the code to delete the even entries from an array
*/

/* WRITE YOUR CODE HERE */
const anotherArr = Array.from(arr);
// const anotherArr = [];

// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 !== 0) {
//     anotherArr.push(arr[i]);
//   }
// }
// console.log(anotherArr);

console.log(anotherArr.filter((n) => n % 2 === 0));

/* EXERCISE 6
Write the code to remove all the vocal from a string
*/

/* WRITE YOUR CODE HERE */

const string = "Hello World";

var vowels = ["a", "e", "i", "o", "u"];

const noVowels = string
  .split("")
  .filter(function (el) {
    return vowels.indexOf(el.toLowerCase()) == -1;
  })
  .join("");

console.log(noVowels);

/* EXERCISE 7
Write the code to increase all the numeric values in a array by 1
*/

/* WRITE YOUR CODE HERE */

const increasedArr = [];

for (var i = 0; i < arr.length; i++) {
  increasedArr.push(arr[i] + 1);
}

console.log(increasedArr);

/* EXERCISE 8 
Replace all the strings into an array by their lenght
es.: [ "strive", "is", "good"] => [ 5 , 2, 4]
*/

const wordsArr = ["strive", "is", "good"];
for (var i = 0; i < wordsArr.length; i++) {
  wordsArr.splice(i, 1, wordsArr[i].length);
}

// console.log(wordsArr);
/* WRITE YOUR CODE HERE */
