//Type of comments
//! This is an alert
// TODO: This is a todo
// * Information highlighted
// ? Question comment
// Regular comment

//! 2D ARRAY
//* A function that splits an array (first argument) into groups the length of size (second argument)
//* and returns them as a two-dimensional array.
function chunkArrayInGroups(arr, size) {
	let newArray = [];
	let incr = 0;
	let rounds = Math.ceil(arr.length / size);
	for (let i = 0; i < rounds; i++) {
		let subArr = [];
		for (let k = 0; k < size; k++) {
			if (incr === arr.length) break;
			subArr.push(arr[incr]);
			incr++;
		}
		newArray.push(subArr);
	}
	return newArray;
}

//! BOOLEAN TRUTH TEST
//* Removes falsy values from an array
//* Falsy values in JS: false, null, 0, "", undefined, and NaN.
function bouncer(arr) {
	let myArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i]) {
			myArr.push(arr[i]);
		}
	}
	return myArr;
}

//! CAPITALIZE THE FIRST LETTER OF WORD
//* Capitalizes the first letter of a string
function capitalize(line) {
	let first = line.charAt(0).toUpperCase();
	let newStr = first + line.substring(1, line.length);
	return newStr;
}

//! CAPITALIZE FIRST LETTER OF EVERY WORD IN STRING
//* Accepts string of words as input, capitalizes the first letter of every word
//* Uses the capitalize function
function titleCase(str) {
	let strArry = str.split(" ");
	let newArray = [];
	for (let i = 0; i < strArry.length; i++) {
		let mod = capitalize(strArry[i].toLowerCase());
		newArray.push(mod);
	}
	return newArray.join(" ");
}

//! CELSIUS TO FAHRENHEIT
//* Converts a celsius input to fahrenheit
function convertToF(celsius) {
	return celsius * (9 / 5) + 32;
}

//! ENDSWITH STRING
//* Checks if the string ends with given input without endsWith() method
function confirmEnding(str, target) {
	let strLen = str.length - 1;
	for (let i = target.length - 1; i > -1; i--) {
		if (target.charAt(i) !== str.charAt(strLen)) {
			return false;
		}
		strLen--;
	}
	return true;
}

//! FACTORIAL
//* Calculates the factorial value of an input
function factorialize(num) {
	if (num === 1 || num === 0) {
		return 1;
	} else {
		return num * factorialize(num - 1);
	}
}

//! FORMAT SECONDS
const formatSeconds = (s) => {
	const [hour, minute, second, sign] =
		s > 0
			? [s / 3600, (s / 60) % 60, s % 60, ""]
			: [-s / 3600, (-s / 60) % 60, -s % 60, "-"];

	return (
		sign +
		[hour, minute, second]
			.map((v) => `${Math.floor(v)}`.padStart(2, "0"))
			.join(":")
	);
};

//! HEAPSORT
const heapsort = (arr) => {
	const a = [...arr];
	let l = a.length;

	const heapify = (a, i) => {
		const left = 2 * i + 1;
		const right = 2 * i + 2;
		let max = i;
		if (left < l && a[left] > a[max]) max = left;
		if (right < l && a[right] > a[max]) max = right;
		if (max !== i) {
			[a[max], a[i]] = [a[i], a[max]];
			heapify(a, max);
		}
	};

	for (let i = Math.floor(l / 2); i >= 0; i -= 1) heapify(a, i);
	for (i = a.length - 1; i > 0; i--) {
		[a[0], a[i]] = [a[i], a[0]];
		l--;
		heapify(a, 0);
	}
	return a;
};

//! INSERT ARRAY VALUES INTO ANOTHER ARRAY
//* Uses splice to insert array values into another array at given index
//* Does not modify the original two arrays
function frankenSplice(arr1, arr2, n) {
	let newArr = arr2.slice();
	for (let i = 0; i < arr1.length; i++) {
		newArr.splice(n, 0, arr1[i]);
		n++;
	}
	return newArr;
}

//! LARGEST NUMBER IN ARRAY OF ARRAYS
//* Returns an Array of the largest values in an Array of Arrays
function largestOfFour(arr) {
	let solution = [];
	for (let i = 0; i < arr.length; i++) {
		let largest = null;
		for (let k = 0; k < arr[i].length; k++) {
			if (largest === null) {
				largest = arr[i][k];
			} else if (largest < arr[i][k]) {
				largest = arr[i][k];
			}
		}
		solution.push(largest);
	}
	return solution;
}

//! LEAP YEAR
//* Tests if the inputed year is a leap year
function leapYear() {
	let year = window.prompt("Enter a Year: ");
	if (year <= 1582) {
		alert("Has to be a year greater than 1582.");
	} else {
		if (year % 4 === 0) {
			if (year % 100 === 0 && year % 400 !== 0) {
				alert("Not a leap year.");
			} else {
				alert("That's a Bingo. It's a leap year.");
			}
		} else {
			alert("Not a leap year.");
		}
	}
}

//! LONGEST WORD IN STRING
//* Returns the length of the longest word in a string
function findLongestWordLength(str) {
	let myArray = str.split(" ");
	let longest = myArray[0].length;
	for (let i = 0; i < myArray.length; i++) {
		if (longest < myArray[i].length) {
			longest = myArray[i].length;
		}
	}
	return longest;
}

//! MUTATION
//* Checks if all the characters of "test" string are in the "target" string
function mutation(arr) {
	let test = arr[1].toLowerCase();
	let target = arr[0].toLowerCase();
	for (let i = 0; i < test.length; i++) {
		if (target.indexOf(test[i]) < 0) return false;
	}
	return true;
}

//! POSITION FOR INSERTING VALUE
//* Returns the index of where a value would be inserted into an array
function getIndexToIns(arr, num) {
	for (let i = 0; i < arr.length; i++) {
		for (let k = arr.length - 1; k > 0; k--) {
			let temp = 0;
			if (arr[k - 1] > arr[k]) {
				temp = arr[k];
				arr[k] = arr[k - 1];
				arr[k - 1] = temp;
			}
		}
	}
	let position = arr.length;
	for (let i = arr.length - 1; i >= 0; i--) {
		if (num > arr[i]) {
			return position;
		}
		position--;
	}
	return position;
}

//! QUICKSORT
const quickSort = (arr) => {
	const a = [...arr];
	if (a.length < 2) return a;
	const pivotIndex = Math.floor(arr.length / 2);
	const pivot = a[pivotIndex];
	const [lo, hi] = a.reduce(
		(acc, val, i) => {
			if (val < pivot || (val === pivot && i != pivotIndex)) {
				acc[0].push(val);
			} else if (val > pivot) {
				acc[1].push(val);
			}
			return acc;
		},
		[[], []]
	);
	return [...quickSort(lo), pivot, ...quickSort(hi)];
};

//! REPEAT A STRING X TIMES
//* Repeats a string input number of times
function repeatStringNumTimes(str, num) {
	if (num < 1) {
		return "";
	} else {
		let myArray = [];
		for (let i = 0; i < num; i++) {
			myArray.push(str);
		}
		let output = myArray.join("");
		return output;
	}
}

//! REVERSE STRING
//* Reverses a string
function reverseString(str) {
	let myArray = [];
	for (let i = str.length - 1; i > -1; i--) {
		myArray.push(str.charAt(i));
	}
	let newStr = myArray.join("");
	return newStr;
}

//! TIME IN MILLISECONDS, HUMAN READABLE
const formatDuration = (ms) => {
	if (ms < 0) ms = -ms;
	const time = {
		day: Math.floor(ms / 86400000),
		hour: Math.floor(ms / 3600000) % 24,
		minute: Math.floor(ms / 60000) % 60,
		second: Math.floor(ms / 1000) % 60,
		millisecond: Math.floor(ms) % 1000,
	};
	return Object.entries(time)
		.filter((val) => val[1] !== 0)
		.map(([key, val]) => `${val} ${key}${val !== 1 ? "s" : ""}`)
		.join(", ");
};

//! TRUNCATE A STRING
//* Truncates a string up to a given length
function truncateString(str, num) {
	if (num >= str.length) {
		return str;
	} else {
		let strSplit = str.split("");
		let newArr = [];
		for (let i = 0; i < num; i++) {
			newArr.push(strSplit[i]);
		}
		newArr.push("...");
		return newArr.join("");
	}
}

//! USER NAME
//* Checks username input if it's the correct format.
//* 1) Username can only use alpha-numeric characters.
//* 2) Numbers can only be at the end. Cannot start with number.
//* 3) Can be upper or lower case.
//* 4) Has to be at least 2 characters long.
//* 5) Two character names can't have numbers

let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let result = userCheck.test(username);
// ^[a-z] Checks if the start of the name is a alpha character
// [a-z]+ Checks if the following characters are letters
// \d*$ Checks if the end is 0 or more digits
// | OR
// ^[a-z] Checks if the start of the name is a alpha character
// \d\d+$ Following characters are 2 or more digits
