//Type of comments 
//! This is an alert
// TODO: This is a todo
// * Information highlighted
// ? Question comment
// Regular comment

//! CAPITALIZE THE FIRST LETTER 
//* Capitalizes the first letter of a string
function capitalize(line) {
    let first = line.chatAt(0).toUpperCase();
    let newStr = first + line.substring(1,line.length);
    return newStr;
}

//! CELSIUS TO FAHRENHEIT
function convertToF(celsius) {
    return (celsius * (9/5)) + 32;
  }

//! LEAP YEAR
function leapYear() {
    let year = window.prompt("Enter a Year: ");
    if (year <= 1582) {
        alert("Has to be a year greater than 1582.")
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

//! REVERSE STRING
function reverseString(str) {
    let myArray = [];
    for (let i = str.length-1; i > -1; i--) {
      myArray.push(str.charAt(i))
    }
    let newStr = myArray.join("");
    return newStr;
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


