//Type of comments 
//! This is an alert
// TODO: This is a todo
// * Information highlighted
// ? Question comment
// Regular comment

console.log("Hello World");
const testArrayNumbers = [1,2,3,4,5,6,7,8,9,10];
const testArrayString = ["Aaa","Bbb","Ccc","Ddd","Eee"];
const testString = "All your base are belong to us.";
const testObject = {
    firstName: "Liara",
    lastName: "T'Soni",
    race: "Asari",
    age: 106,
    home: "Thessia",
    recruitable: true
}

//! ARRAY, DECLARE
let myArray = [];

//! ARRAY, ADD ITEM AT END
myArray.push("value");

//! ARRAY, COMBINE CHAR ARRAY INTO STRING
let joinString = myArray.join("");

//! CLASS, CONSTRUCTOR FUNCTION
class ClassConstructor {
    constructor(inputVar) {
        this.inputVar = inputVar;
    }
}
const classConExample = new ClassConstructor('iAmInput');

//! CLASS, GETTERS & SETTERS
class GetAndSet {
    constructor(input) {
        this.input = input;
    }
    get myVar() {
        return this.input;
    }
    set myVar(updateInput) {
        this.input = updateInput;
    }
}

//! CONSTANT
//*Assigning a variable value that can't be changed
const PI = 3.14159;

//! CONSTANT, MUTABLE
const cstMute = [1,2,3];
cstMute[2] = 45;

//! DEFAULT PARAMETERS
//* Default value if the user doesn't enter one
//* Default paramets have to come after regular parameters
function rollDefault(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1;
}

//! DESTRUCTURING, ARRAYS
//* Used to assign variables to values in an array
const[gold, silver, bronze, ...everyoneElse] = testArrayNumbers;
//* Sets "gold" equal to array[0], "silver" equal to array[1], etc

//! DESTRUCTURING, OBJECTS
const {firstName} = testObject; 
const {lastName: liarasName} = testObject;
//* Use a colon to use a custom variable name
const {ability = "Lift"} = testObject;
//* Use a = for default values

//! DESTRUCTURING, PARAMETERS
function destroFullName({firstName = "lName", lastName = "fName"}) {
    return `${firstName} ${lastName}`;
}

//! EVERY
//* Tests if every element in an Array passes True
//* See "Some" section
testArrayNumbers.every(n => n > 5);

//! FILTER
//* Creates a new array with all elements that pass the test implemented by the function
testArrayNumbers.filter(n => {
    return n < 5;
})
function filterLongWords(inArray) {
    //Function accepts an array, returns array of strings with less than 10 characters
    return inArray.filter(n => n.length < 10);
}

//! FOR LOOP
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//! FOR EACH
//* For loop that iterates through an Array
//* Can use For Of Loop instead
const numbers = [1,2,3,4,5];
numbers.forEach(function (el) {
    console.log(el);
})

//! FOR IN LOOP
//* Loop through an object
for(let item in fitBitData) {
    console.log(item);  //Outputs the keys in the object fitBitData
    console.log(`${item} value of ${fitBitData[item]}`);    //Ouputs key "value of" value
}

//! FOR OF LOOP
//* Not supported in IE
//* Shorthand For loop for iterating through a list or array
let forOfArray = [1,2,3,4,5];
for (let i of forOfArray) {
    console.log(i);
}

//! FUNCTION
//* Basic Function
function testOut() {
    console.log("We've been trying to reach you about your car's extended warranty .");
}

//! FUNCTION WITH PARAMETER
function testOut(name) {
    console.log(name);
}

//! FUNCTION, ARROWS
//* Compact form of Expression Function
const square = (x) => {
    return x * x;
}

const addArrows = (x,y) => {
    return x + y;
}

//! FUNCTION, ARROW IMPLICIT RETURN
//* Only works if there is only 1 line/expression in the function
const rollDie = () => (
    Math.floor(Math.random() * 6) + 1
);

const implicitAdd = (a,b) => a + b;

const newMovies = movies.map(movie => (
    `${movie.title} - ${movie.score / 10}`
));

//! FUNCTION EXPRESSION
//* Creating a function within an expression
const add = function(x,y) {
    return x + y;
}

//! FUNCTION, HIGHER ORDER
//* Functions that operate with other functions
function callTwice(func) {
    func();
    func();
}
function rollDice() {
    const roll = Math.floor(Math.random() * 6) + 1;
    return roll;
}
callTwice(rollDice);

//! FUNCTION, RETURNING
//* Returning a function
function makeMysteryFunc() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function() {
            console.log("You Win");
        }
    } else {
        return function() {
            console.log("You lose");
        }
    }
}

function makeBetweenFunc(min, max) {
    return function(num) {
        return num >= min && num <= max;
    }
    //Can call with let varName = makeBetweenFunc(min,max)
}

//! INTERVAL
//* Sets an interval
const id = setInterval(() => {
    console.log(Math.random())
}, 2000);
//clearInterval(id) stops the interval


//! MAP
function cleanNames(input) {
    let newArray = input.map(stringTrim);
    return newArray;
}
function stringTrim(str) {
    return str.trim();
}

//! MATCH
//* Similar to test, extracts the actual match
//* i at the end to ignore case
let matchRegex = /base/;
let matchResult = testString.match(matchRegex);

//! MATCH, MULTIPLE RETURNS
let matchMultiple = /base/g;
let matchMultiResult = testString.match(matchMultiple);

//! MATCH, MULTIPLE POSSIBILITIES
let matchMultiStr = "big bag man 123456 12 3";
let matchMultiOptions = /b[aiu]g/gi;        //Will look for bag, big, bug
matchMultiStr.match(matchMultiOptions);

//! MATCH, RANGE OF LETTERS
let matchLetterRange = /[a-z]/gi;       //Will match with any letter in the range A to Z
matchMultiStr.match(matchLetterRange);

//! MATCH, RANGE OF NUMBERS
let matchNumberRange = /[0-5]/gi;       //Will match with any number between 0 and 5, including 0 and 5
matchMultiStr.match(matchNumberRange);

//! MATCH, COMBO LETTERS AND NUMBERS
let matchCombo = /[a-z0-5]/gi;            //Will match letters A to Z and numbers 0 to 5
matchMultiStr.match(matchCombo);

//! MATCH, IGNORE VALUES
let matchNeg = /[^aeiou]/gi;      // Will ignore the vowels
matchMultiStr.match(matchNeg);

//! MATCH, MULTIPLE VALUES
let matchPlus = /s+/g;
matchMultiStr.match(matchPlus);

//! MATCH, ALL LETTERS AND NUMBERS
//* \w Will check for all letters and numbers
//* Has to be lower case
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; 
let result = quoteSample.match(alphabetRegexV2).length;

//! MATCH, IGNORE ALL LETTERS AND NUMBERS
//* Will ignore all letters and numbers
//* Has to be capital
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; 
let result = quoteSample.match(nonAlphabetRegex).length;

//! MATCH, ALL NUMBERS
//* Matches will all numbers
//* Has to be lowercase
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; 
let result = movieName.match(numRegex).length;

//! MATCH, ALL NON-NUMBERS
//* Matches will all non-numbers
//* Has to be uppercase
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; 
let result = movieName.match(noNumRegex).length;

//! MATCH, WHITESPACE
//* Also matches carriage return, tab, form feed, new line characters
//* Has to be lowercase
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; 
let result = sample.match(countWhiteSpace);

//! MATCH, NON WHITESPACE
//* Won't match carriage return, tab, form feed, new line characters
//* Has to be uppercase
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g;
let result = sample.match(countNonWhiteSpace);

//! METHODS
const myMath = {
    PI = 3.14159,
    square : function(num) {
        return num * num;
    },
    cube : function(num) {
        return num ** 3;
    }
}

//! METHOD, SHORTHAND
const mathMan = {
    PI: 3.14159,
    square(num) {
        return num * num;
    },
    cube(num) {
        return num ** 3;
    }
}

//! OBJECT FREEZE
let objFreeze = {
    name: "Shepard",
    review: "Fun"
};
Object.freeze(objFreeze);

//! OBJECT LITERAL
//*Creating an Object Literal and how to access it
//* Every key created in an object is converted to a String
const fitBitData = {
    totalSteps : 308,
    totalMiles : 5
}
fitBitData["totalMiles"]; //Access value inside Object Literal
fitBitData.totalMiles; //Access value inside Object Literal
fitBitData.totalMiles = 6;  //Changes the value of the property
fitBitData.totalSquats = 25;    //Creates a new property if not already created
Object.keys(fitBitData);    //Creates an array of the keys in the object
Object.values(fitBitData);  //Creates an array of the values in the object

//! REDUCE METHOD
//* Iterates through an array to accomplish some algorithm
testArrayNumbers.reduce((total, element) => {
    //* Returns the total of all the elements in the array
    return total + element;
})

testArrayNumbers.reduce((min, element) => {
    //* Returns the lowest value of an array
    if(element < min) {
        return element;
    }
    return min;
})

//! REPLACE, REMOVE WHITESPACE
//* Removes whitespace at the beginning and the end
//* Similar to .trim()
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; 
let result = hello.replace(wsRegex, ""); 

//!! REST
//* "..." used in the parameter when the number of arguments isn't known
function restSum(...nums) {
    return nums.reduce((total, el) => total + el);
}

//! SLICE
//* Slicing values from an Array
let colors = ['red','orange','yellow','green','blue','indigo','violet'];
let colorsSlice = colors.slice(3);  //["green", "blue", "indigo", "violet"]
let warmColors = colors.slice(0,3); //['red','orange','yellow]

//! SPLIT
//* Splits a word or string at declared variable
let splitBySpace = myArray.split(" ");  //Splits every whitespace
let splitByChar = myArray.split("");    //Splits every char

//! SOME
//* Tests if some of the elements in an Array passes True
//* See "Every" section
testArrayNumbers.some(n => n > 5);

//! SORT
//* Default sort is to convert everything to a string then compares them by UTF value
let sortScores = [1,70,100,2500,9,-12,0,34];
sortScores.sort();      //Doesn't work

//! SPLICE
//* Deleting or Adding values into an Array
colors.splice(5,1);     //Removes indigo
colors.splice(1,0,'red-orance');     //Adds "Red-Orance" at index 1, deleting 0

//! SPREAD, ARRAYS
//* Adding "..." can split an array into individual values
Math.max(...testArrayNumbers);

//! SPREAD, COMBINE ARRAYS
//* Can be used to combine arrays into a new variable
let comboArray = [...testArrayNumbers,...testArrayNumbers];

//! SPREAD, OBJECTS
let newArray1 = {...testArrayNumbers};

//! STRING TEMPLATE LITERALS
const templateLiteral = `Hello, my name is ${testObject.firstName} ${testObject.lastName}. 
I am ${testObject.race}.`;

//! TEST METHOD
//* Can be used to find a word in a string. Returns T/F
//* Case Sensitive.
let testMethodRegex = /base/;
testMethodRegex.test(testString);

//! TEST METHOD, OR
//* Used for searching for multiple values with OR
let testMethodOr = /base|belong|cracker/;
testMethodOr.test(testString);

//! TEST METHOD, IGNORE CASE
//* Ignores the case
let testMethodIgnore = /belong/i;
testMethodIgnore.test(testString);

//! TEST WILDCARD
//* Tests for a single character or part of a word
let testWildString = "It's fun to run with a man bun.";
let testWildRegex = /un./;
testWildRegex.test(testWildString);

//! TEST, CHECK START OF STRING
//* Tests for the input at the start of the string
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;          // Checks for "Cal" at the start of the string, returns True
let result = calRegex.test(rickyAndCal);

//! TEST, CHECK END OF STRING
//* Tests for the input at the end of the string
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;     // Checks for "caboose" at the end of the string, returns true
let result = lastRegex.test(caboose);

//! TEST, NUMBER OF RANGE
//* Tests if a value is within a specified range
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/;    // Tests if h occurs 3 to 6 times only
let result = ohRegex.test(ohStr);

//! TEST, MINIMUM RANGE
//* Tests if the lower end of the specified range is met
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/;      // Tests if there are at least 4 z's
let result = haRegex.test(haStr);

//! TEST, REPEAT CERTAIN TIMES
//* Tests if a character repeats a specific number of times
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/;     //Checks if m repeats 4 times
let result = timRegex.test(timStr);

//! TEST, CHECK ALL OR NONE
//* Tests if element may or may not exists
let favWord = "favorite";
let favRegex = /favou?rite/; // Checks if the U exists or not
let result = favRegex.test(favWord);

//! TEST, POSITIVE AND NEGATIVE LOOKAHEAD
//* Positive looks ahead to see if the pattern is there but won't match
//* Negative looks ahead to see if the pattern is NOT there
//* ?= Checks for Positive lookahead
//* ?! Checks for Negavive lookahead
let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/; 
let result = pwRegex.test(sampleWord);

//! TEST, MIXED GROUP OF CHARACTERS
//* Checks for groups of characters
let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin D.|Eleanor) Roosevelt/; 
let result = myRegex.test(myString); 

//! TEST, REPEAT CHARACTERS
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; 
let result = reRegex.test(repeatNum);

//! TEST, REPLACE
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; 
let replaceText = "$3 $2 $1"; 
let result = str.replace(fixRegex, replaceText);

//! THIS
//* The value of this depends on the invocation context of the function it is use d in
const cat = {
    name: "Blue Steele",
    color: "Grey",
    breed: "Cat",
    meow() {
        console.log("Meow");
        console.log(`${this.name} says Meow`);
    }
}
const person = {
    firstName: "John",
    lastName: "Shepard",
    fullName: function() {
        return `${this.firstName} ${this.lastName}`
    }
}

//! TIMEOUT
//* Sets a timeout time period
setTimeout(() => {
    console.log("HELLO!!!")
}, 3000);

//! TRY CATCH
//* Used to catch errors before they start
try {
    //What to try
    hellooooo.toUpperCase();
} catch(e) {
    console.log(e);
    console.log("Error");
}




