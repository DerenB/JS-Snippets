//Type of comments 
//! This is an alert
// TODO: This is a todo
// * Information highlighted
// ? Question comment
// Regular comment

console.log("Hello World");
const testArrayNumbers = [1,2,3,4,5,6,7,8,9,10];
const testArrayString = ["Aaa","Bbb","Ccc","Ddd","Eee"];

//! CONSTANT
//*Assigning a variable value that can't be changed
const PI = 3.14159;

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

//! MAP
function cleanNames(input) {
    let newArray = input.map(stringTrim);
    return newArray;
}
function stringTrim(str) {
    return str.trim();
}

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

//! SLICE
//* Slicing values from an Array
let colors = ['red','orange','yellow','green','blue','indigo','violet'];
let colorsSlice = colors.slice(3);  //["green", "blue", "indigo", "violet"]
let warmColors = colors.slice(0,3); //['red','orange','yellow]

//! SORT
//* Default sort is to convert everything to a string then compares them by UTF value
let sortScores = [1,70,100,2500,9,-12,0,34];
sortScores.sort();      //Doesn't work

//! SPLICE
//* Deleting or Adding values into an Array
colors.splice(5,1);     //Removes indigo
colors.splice(1,0,'red-orance');     //Adds "Red-Orance" at index 1, deleting 0

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

//! TRY CATCH
//* Used to catch errors before they start
try {
    //What to try
    hellooooo.toUpperCase();
} catch(e) {
    console.log(e);
    console.log("Error");
}



