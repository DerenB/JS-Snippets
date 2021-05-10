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

//Object Literal
const fitBitData = {
    totalSteps : 308,
    totalMiles : 5
}

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