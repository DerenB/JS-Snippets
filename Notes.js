//Type of comments 
//! This is an alert
// TODO: This is a todo
// * Information highlighted
// ? Question comment
// Regular comment

console.log("Hello World");

//Constant
//*Assigning a variable value that can't be changed
const PI = 3.14159;

//For Loop
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//For in Loop
//* Loop through an object
for(let item in fitBitData) {
    console.log(item);  //Outputs the keys in the object fitBitData
    console.log(`${item} value of ${fitBitData[item]}`);    //Ouputs key "value of" value
}

//For of Loop (not supported in IE)
//* Shorthand For loop for iterating through a list or array
let forOfArray = [1,2,3,4,5];
for (let i of forOfArray) {
    console.log(i);
}

//Function
//* Basic Function
function testOut() {
    console.log("We've been trying to reach you about your car's extended warranty .");
}

//Function with Parameter
function testOut(name) {
    console.log(name);
}

//Object Literal
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

//Slice
//* Slicing values from an Array
let colors = ['red','orange','yellow','green','blue','indigo','violet'];
let colorsSlice = colors.slice(3);  //["green", "blue", "indigo", "violet"]
let warmColors = colors.slice(0,3); //['red','orange','yellow]

//Sort
//* Default sort is to convert everything to a string then compares them by UTF value
let sortScores = [1,70,100,2500,9,-12,0,34];
sortScores.sort();      //Doesn't work

//Splice
//* Deleting or Adding values into an Array
colors.splice(5,1);     //Removes indigo
colors.splice(1,0,'red-orance');     //Adds "Red-Orance" at index 1, deleting 0